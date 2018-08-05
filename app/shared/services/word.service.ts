
// Import the core angular services.
import { ErrorHandler } from "@angular/core";
import { Injectable } from "@angular/core";

// Import the application components and services.
import { DatamuseClient } from "./datamuse-client";
import { Match as DatamuseMatch } from "./datamuse-client";
import { StorageService } from "./storage.service";

// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //

export interface Word {
	value: string;
	syllableCount: number;
	isStrongMatch: boolean;
	score: number;
}

export interface WordResults {
	query: string;
	words: Word[];
}

export interface SyllableResults {
	[ key: string ]: number;
}

interface SyllableCountCache {
	[ key: string ]: number;
}

@Injectable({
	providedIn: "root"
})
export class WordService {

	private datamuseClient: DatamuseClient;
	private errorHandler: ErrorHandler;
	private storageService: StorageService;
	private syllableCountCache: SyllableCountCache;

	// I initialize the word service.
	constructor(
		datamuseClient: DatamuseClient,
		errorHandler: ErrorHandler,
		storageService: StorageService
		) {

		this.datamuseClient = datamuseClient;
		this.errorHandler = errorHandler;
		this.storageService = storageService;

		this.syllableCountCache = Object.create( null );

		this.loadFromStorage();

	}

	// ---
	// PUBLIC METHODS.
	// ---

	// I get words that are broader generalizations of the given word.
	public async getGeneralizations( word: string ) : Promise<WordResults> {

		var rawResults = await this.datamuseClient.getWords({
			rel_gen: word,
			md: "ps", // p: part of speech, s: syllable count.
			max: 500
		});

		var results = this.filterOutScorelessWords( rawResults ).map(
			( item, index, collection ) => {

				// Take advantage of the syllable-count metadata that was returned with
				// each of the word results. We can cache this in order to short-circuit
				// future API calls.
				this.cacheSyllableCountMetadata( item.word, item.numSyllables );

				return({
					value: item.word,
					syllableCount: ( item.numSyllables || 0 ),
					isStrongMatch: false, // I don't yet have good logic for this.
					score: item.score
				});

			}
		);

		return({
			query: word,
			words: results
		});

	}


	// I get words that generally mean the same thing as the given word.
	public async getMeansLikes( word: string ) : Promise<WordResults> {

		var rawResults = await this.datamuseClient.getWords({
			ml: word,
			md: "ps", // p: part of speech, s: syllable count.
			max: 500
		});

		var results = this.filterOutScorelessWords( rawResults ).map(
			( item, index, collection ) => {

				// Take advantage of the syllable-count metadata that was returned with
				// each of the word results. We can cache this in order to short-circuit
				// future API calls.
				this.cacheSyllableCountMetadata( item.word, item.numSyllables );

				return({
					value: item.word,
					syllableCount: ( item.numSyllables || 0 ),
					isStrongMatch: false, // I don't yet have good logic for this.
					score: item.score
				});

			}
		);

		return({
			query: word,
			words: results
		});

	}


	// I get words that rhyme with the given word.
	public async getRhymes( word: string ) : Promise<WordResults> {

		var rawResults = await this.datamuseClient.getWords({
			rel_rhy: word,
			md: "s", // s: syllable count.
			max: 500
		});

		var results = this.filterOutScorelessWords( rawResults ).map(
			( item, index, collection ) => {

				// Take advantage of the syllable-count metadata that was returned with
				// each of the word results. We can cache this in order to short-circuit
				// future API calls.
				this.cacheSyllableCountMetadata( item.word, item.numSyllables );

				// The score that is passed back from Datamuse is (documented as
				// being) not interpretable as anything concrete - it is merely a way
				// to rank results. As such, we're going to consider the first 80% of
				// the results to be "strong" matches; with the caveat that anything
				// less that 100 is not a strong match. Just making it up as we go
				// here :D 
				if ( item.score < 100 ) {

					var isStrongMatch = false;

				} else {

					var isStrongMatch = ( index <= Math.max( collection.length * 0.8 ) );

				}

				return({
					value: item.word,
					syllableCount: ( item.numSyllables || 0 ),
					isStrongMatch: isStrongMatch,
					score: item.score
				});

			}
		);

		return({
			query: word,
			words: results
		});

	}


	// I get the syllable counts for the given collection of words.
	// --
	// NOTE: Since this method makes parallel requests, it catches individual errors and
	// returns an object that may contain partially-degraded word results (ie, where the
	// syllable count is zero).
	public async getSyllableCounts( words: string[] ) : Promise<SyllableResults> {

		var unknownWords = words.filter(
			( word ) => {

				return( ! ( word in this.syllableCountCache ) );

			}
		);

		// If there are any unknown words, let's populate the local cache before we
		// process the contextual request. This way, the entire match can be calculated
		// using the local cache.
		// --
		// CAUTION: We are NOT GOING TO CACHE failed requests.
		if ( unknownWords.length ) {

			var promises = unknownWords.map(
				async ( word ) => {

					// Since we're making a number of requests in parallel, we don't want
					// to let one bad request kill the entire response. If one of the
					// requests fails, we'll just have to re-try it next time.
					try {

						var results = await this.datamuseClient.getWords({
							sp: word,
							qe: "sp",
							md: "s", // s: syllable count.
							max: 1
						});

						// At this point, even though the result came back successfully,
						// there's no guarantee that it's the word we were looking for.
						// Since we're using the "SP" spelling end-point, the result may
						// contain a "spelling suggestion", not the word that we were
						// searching for. As such, we need to check the results before we
						// attempt to cache them.
						if ( results.length ) {

							// If the word that came is NOT THE SAME WORD we requested,
							// it means the API doesn't understand the word we are
							// looking for. That will not change the next time. Let's
							// cache this as zero.
							if ( results[ 0 ].word !== word ) {

								this.syllableCountCache[ word ] = 0;

							// The word DOES MATCH and has a valid syllable count.
							} else if ( results[ 0 ].numSyllables ) {

								this.syllableCountCache[ word ] = results[ 0 ].numSyllables;

							}

						} 

					} catch ( error ) {

						this.errorHandler.handleError( error );

					}

				}
			);

			await Promise.all( promises );

			// Once the parallel requests come back, we should (may) have changes to the
			// syllable count cache that we want to persist for next time.
			this.saveToStorage();

		} // END: Unknown words.

		var results = words.reduce(
			( reduction, word ) => {

				// CAUTION: Even at this point, the cache may not have the word we are
				// looking at (due to a network or API failure). As such, we're going to
				// fall-back to "0".
				reduction[ word ] = ( this.syllableCountCache[ word ] || 0 );
				return( reduction );

			},
			Object.create( null )
		);

		return( results );

	}


	// I get words that are synonymous with the given word.
	public async getSynonyms( word: string ) : Promise<WordResults> {

		var rawResults = await this.datamuseClient.getWords({
			rel_syn: word,
			md: "ps", // p: part of speech, s: syllable count.
			max: 500
		});

		var results = this.filterOutScorelessWords( rawResults ).map(
			( item, index, collection ) => {

				// Take advantage of the syllable-count metadata that was returned with
				// each of the word results. We can cache this in order to short-circuit
				// future API calls.
				this.cacheSyllableCountMetadata( item.word, item.numSyllables );

				return({
					value: item.word,
					syllableCount: ( item.numSyllables || 0 ),
					isStrongMatch: false,
					score: item.score
				});

			}
		);

		return({
			query: word,
			words: results
		});

	}

	// ---
	// PRIVATE METHODS.
	// ---

	// When we make calls to Datamuse, we are always asking for the number of syllables
	// to be returned in the response metadata. This will help us build out the cache of
	// syllable counts.
	private cacheSyllableCountMetadata( word: string, numSyllables?: number ) : void {

		// If the syllable count was not available, there's nothing to cache.
		if ( ! numSyllables ) {

			return;

		}

		// If the word is already cached, we can skip.
		if ( word in this.syllableCountCache ) {

			return;

		}

		// If the word contains a space, it's a turn-of-phrase. In such a case, we won't
		// know where the distribution of syllables falls in that phrase. As such, it's
		// not easy to cache.
		if ( word.includes( " " ) ) {

			return;

		}

		this.syllableCountCache[ word ] = numSyllables;
		this.saveToStorage();

	}


	// I remove any Datamuse matches that don't have a score. If there is no score, then
	// the word or phrase barely matches the query. It's probably not worth returning.
	private filterOutScorelessWords( results: DatamuseMatch[] ) : DatamuseMatch[] {

		var filteredResults = results.filter(
			( result ) => {

				return( "score" in result );

			}
		);

		return( filteredResults );

	}


	// I try to update the cache using data from the storage service.
	private loadFromStorage() : void {

		// NOTE: Object.assign() can handle anything that's not an object. As such, we
		// don't have to worry about the .getItem() coming back undefined - if it does,
		// the value will just be ignored, leaving our cache untouched.
		Object.assign(
			this.syllableCountCache,
			this.storageService.getItem( "syllable-counts" )
		);

	}


	// I try to save the current cache to the storage service.
	private saveToStorage() : void {

		this.storageService.setItem( "syllable-counts", this.syllableCountCache );

	}

}
