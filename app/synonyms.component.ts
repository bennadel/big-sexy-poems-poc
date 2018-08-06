
// Import the core angular services.
import { Component } from "@angular/core";
import { ErrorHandler } from "@angular/core";

// Import the application components and services.
import { MeansLikeResults } from "./shared/services/word.service";
import { Word } from "./shared/services/word.service";
import { WordService } from "./shared/services/word.service";

// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //

interface SynonymResults {
	count: number;
	groups: SynonymGroup[];
}

interface SynonymGroup {
	partOfSpeech: string;
	synonyms: Synonym[];
}

interface Synonym {
	word: string;
	isStrongMatch: boolean;
}

@Component({
	selector: "bsp-synonyms",
	styleUrls: [ "./synonyms.component.less" ],
	templateUrl: "./synonyms.component.htm"
})
export class SynonymsComponent {

	public isLoading: boolean;
	public query: string;
	public results: SynonymResults | null;

	private errorHandler: ErrorHandler;
	private wordService: WordService;

	// I initialize the synonyms component.
	constructor(
		errorHandler: ErrorHandler,
		wordService: WordService
		) {
		
		this.errorHandler = errorHandler;
		this.wordService = wordService;

		this.isLoading = false;
		this.query = "";
		this.results = null;

	}

	// ---
	// PUBLIC METHODS.
	// ---

	// I handle the submission of the search form.
	public handleSubmit() : void {

		if ( ! this.query ) {
			
			return;

		}

		this.isLoading = true;
		this.results = null;

		this.wordService
			.getMeansLikes( this.query )
			.then(
				( response ) => {

					this.isLoading = false;

					this.results = {
						count: response.words.length,
						groups: [
							{ partOfSpeech: "Adjectives", synonyms: [] },
							{ partOfSpeech: "Adverbs", synonyms: [] },
							{ partOfSpeech: "Nouns", synonyms: [] },
							{ partOfSpeech: "Verbs", synonyms: [] }
						]
					};

					for ( var word of response.words ) {

						switch ( word.typeOfSpeech ) {
							case "adjective":
								this.results.groups[ 0 ].synonyms.push({
									word: word.value,
									isStrongMatch: word.isStrongMatch
								});
							break;
							case "adverb":
								this.results.groups[ 1 ].synonyms.push({
									word: word.value,
									isStrongMatch: word.isStrongMatch
								});
							break;
							case "noun":
								this.results.groups[ 2 ].synonyms.push({
									word: word.value,
									isStrongMatch: word.isStrongMatch
								});
							break;
							case "verb":
								this.results.groups[ 3 ].synonyms.push({
									word: word.value,
									isStrongMatch: word.isStrongMatch
								});
							break;
						}

					}

					this.results.groups.sort(
						( a: SynonymGroup, b: SynonymGroup ) => {

							var aStrongMatches = a.synonyms.filter(
								( item ) => {
									return( item.isStrongMatch );
								}
							);

							var bStrongMatches = b.synonyms.filter(
								( item ) => {
									return( item.isStrongMatch );
								}
							);

							if ( aStrongMatches.length > bStrongMatches.length ) {

								return( -1 );

							} else if ( bStrongMatches.length > aStrongMatches.length ) {

								return( 1 );

							} else if ( a.synonyms.length > b.synonyms.length ) {

								return( -1 );

							} else if ( b.synonyms.length > a.synonyms.length ) {

								return( 1 );

							} else {

								return( 0 );

							}

						}
					);

				}
			)
			.catch(
				( error ) => {

					this.isLoading = false;
					this.results = null;

					this.errorHandler.handleError( error );

				}
			)
		;

	}

	// ---
	// PRIVATE METHODS.
	// ---

}
