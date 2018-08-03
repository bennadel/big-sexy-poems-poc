
// Import the core angular services.
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
	private storageService: StorageService;
	private syllableCountCache: SyllableCountCache;

	// I initialize the word service.
	constructor( datamuseClient: DatamuseClient, storageService: StorageService ) {

		this.datamuseClient = datamuseClient;
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
			md: "s",
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
			md: "s",
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
			md: "s",
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
	public async getSyllableCounts( words: string[] ) : Promise<SyllableResults> {

		var unknownWords = words.filter(
			( word ) => {

				return( ! ( word in this.syllableCountCache ) );

			}
		);

		// If there are any unknown words, let's populate the local cache before we
		// process the contextual request. This way, the entire match can be calculated
		// using the local cache.
		if ( unknownWords.length ) {


			// ----------------------------------------------------------------------- //
			// ----------------------------------------------------------------------- //
			// TODO: We need to figure out how to handle partial failures here since we
			// don't want to cache failures. 
			// ----------------------------------------------------------------------- //
			// ----------------------------------------------------------------------- //


			var promises = unknownWords.map(
				( word ) => {

					var promise =  this.datamuseClient.getWords({
						sp: word,
						qe: "sp",
						md: "s",
						max: 1
					});

					return( promise );

				}
			);

			var rawResults = await Promise.all( promises );
			
			unknownWords.forEach(
				( word, index ) => {

					// Since we are using the SP (spelling) end-point to gather the
					// syllable count, there's a chance that the word that comes back is
					// NOT the word that we requested (if the Datamuse vocabulary context
					// doesn't recognize this word). In such a case, we want to ignore
					// the result.
					if ( rawResults[ index ].length && ( rawResults[ index ][ 0 ].word === word ) ) {

						this.syllableCountCache[ word ] = ( rawResults[ index ][ 0 ].numSyllables || 0 );

					} else {

						// Since the word is unrecognized, let's default to zero
						// syllables. This will allow the calling context to figure out
						// how it wants to best handle the "unknown" use-case.
						this.syllableCountCache[ word ] = 0;

					}

				}
			);

			this.saveToStorage();

		}

		var results = words.reduce(
			( reduction, word ) => {

				reduction[ word ] = this.syllableCountCache[ word ];
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
			md: "s",
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
