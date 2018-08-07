
// Import the core angular services.
import { Component } from "@angular/core";
import { ErrorHandler } from "@angular/core";

// Import the application components and services.
import { WordService } from "./shared/services/word.service";

// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //

interface Results {
	count: number;
	groups: ResultGroup[];
}

interface ResultGroup {
	label: string;
	words: ResultWord[];
}

interface ResultWord {
	value: string;
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
	public results: Results | null;

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
							{ label: "Adjectives", words: [] },
							{ label: "Adverbs", words: [] },
							{ label: "Nouns", words: [] },
							{ label: "Verbs", words: [] }
						]
					};

					// Move each word into the appropriate part-of-speech group.
					for ( var word of response.words ) {

						switch ( word.typeOfSpeech ) {
							case "adjective":
								this.results.groups[ 0 ].words.push({
									value: word.value,
									isStrongMatch: word.isStrongMatch
								});
							break;
							case "adverb":
								this.results.groups[ 1 ].words.push({
									value: word.value,
									isStrongMatch: word.isStrongMatch
								});
							break;
							case "noun":
								this.results.groups[ 2 ].words.push({
									value: word.value,
									isStrongMatch: word.isStrongMatch
								});
							break;
							case "verb":
								this.results.groups[ 3 ].words.push({
									value: word.value,
									isStrongMatch: word.isStrongMatch
								});
							break;
						}

					}

					// Now that we've populated the groups, let's sort them based on the
					// relative "strength" of each group. The groups with the greater
					// number of "strong" matches will move to the top.
					this.results.groups.sort(
						( a: ResultGroup, b: ResultGroup ) => {

							var aStrongMatches = a.words.filter(
								( word ) => {

									return( word.isStrongMatch );

								}
							);

							var bStrongMatches = b.words.filter(
								( word ) => {

									return( word.isStrongMatch );

								}
							);

							if ( aStrongMatches.length > bStrongMatches.length ) {

								return( -1 );

							} else if ( bStrongMatches.length > aStrongMatches.length ) {

								return( 1 );

							// If two groups have the same number of strong matches, just
							// fallback to the number of matches overall. Groups with
							// more matches will rise to the top.
							} else if ( a.words.length > b.words.length ) {

								return( -1 );

							} else if ( b.words.length > a.words.length ) {

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

}
