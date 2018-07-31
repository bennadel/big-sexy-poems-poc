
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

		var persistedCache = this.storageService.getItem( "syllable-counts" );

		if ( persistedCache ) {

			Object.assign( this.syllableCountCache, persistedCache );

		}

	}

	// ---
	// PUBLIC METHODS.
	// ---

	public async getGeneralizations( word: string ) : Promise<WordResults> {

		var rawResults = await this.datamuseClient.getWords({
			rel_gen: word,
			md: "s",
			max: 500
		});

		var results = this.filterOutScorelessWords( rawResults ).map(
			( item, index, collection ) => {

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


	public async getMeansLikes( word: string ) : Promise<WordResults> {

		var rawResults = await this.datamuseClient.getWords({
			ml: word,
			md: "s",
			max: 500
		});

		var results = this.filterOutScorelessWords( rawResults ).map(
			( item, index, collection ) => {

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


	public async getRhymes( word: string ) : Promise<WordResults> {

		var rawResults = await this.datamuseClient.getWords({
			rel_rhy: word,
			md: "s",
			max: 500
		});

		var results = this.filterOutScorelessWords( rawResults ).map(
			( item, index, collection ) => {

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


	public async getSyllableCounts( words: string[] ) : Promise<SyllableResults> {

		var unknownWords = words.filter(
			( word ) => {

				return( ! ( word in this.syllableCountCache ) );

			}
		);

		// If there are any unknown words, let's populate the local cache before we
		// process the contextual request.
		if ( unknownWords.length ) {

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

			this.storageService.setItem( "syllable-counts", this.syllableCountCache );

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


	public async getSynonyms( word: string ) : Promise<WordResults> {

		var rawResults = await this.datamuseClient.getWords({
			rel_syn: word,
			md: "s",
			max: 500
		});

		var results = this.filterOutScorelessWords( rawResults ).map(
			( item, index, collection ) => {

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

}
