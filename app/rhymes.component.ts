
// Import the core angular services.
import { Component } from "@angular/core";
import { ErrorHandler } from "@angular/core";

// Import the application components and services.
import { Word } from "./shared/services/word.service";
import { WordService } from "./shared/services/word.service";

// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //

interface RhymeResults {
	count: number;
	groups: RhymeGroup[];
}

interface RhymeGroup {
	syllableCount: number;
	rhymes: Rhyme[];
}

interface Rhyme {
	word: string;
	isStrongMatch: boolean;
}

@Component({
	selector: "bsp-rhymes",
	styleUrls: [ "./rhymes.component.less" ],
	templateUrl: "./rhymes.component.htm"
})
export class RhymesComponent {

	public isLoading: boolean;
	public query: string;
	public results: RhymeResults | null;

	private errorHandler: ErrorHandler;
	private wordService: WordService;

	// I initialize the rhymes component.
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
			.getRhymes( this.query )
			.then(
				( response ) => {

					this.isLoading = false;

					// Prepare the data structure that we're going to use to display the
					// results (broken down by syllable count).
					this.results = {
						count: response.words.length,
						groups: [
							{ syllableCount: 1, rhymes: [] },
							{ syllableCount: 2, rhymes: [] },
							{ syllableCount: 3, rhymes: [] },
							{ syllableCount: 4, rhymes: [] },
							{ syllableCount: 5, rhymes: [] },
							{ syllableCount: 6, rhymes: [] }
						]
					};

					// The words are returned in score-order. However, we want to display
					// them in alphabetical order. As such, let's sort them before we
					// divide them into groups so that we know the groups are implicitly
					// sorted as they are created.
					response.words.sort(
						( a: Word, b: Word ) => {

							var wordA = a.value.toLowerCase();
							var wordB = b.value.toLowerCase();

							return( ( wordA < wordB ) ? -1 : 1 );

						}
					);

					// Move each word into its appropriate results group.
					for ( var word of response.words ) {

						// Our results data structure only accounts for a set number of
						// syllable groups. If this word falls outside of that set, just
						// ignore it.
						if ( ( word.syllableCount > 6 ) || ( word.syllableCount < 1 ) ) {

							continue;

						}

						this.results.groups[ word.syllableCount - 1 ].rhymes.push({
							word: word.value,
							isStrongMatch: word.isStrongMatch
						});

					}

					// Remove any results group that had no words added to it.
					this.results.groups = this.results.groups.filter(
						( group ) => {

							return( group.rhymes.length );

						}
					);

				}
			)
			.catch(
				( error ) => {

					this.isLoading = false;
					this.errorHandler.handleError( error );

				}
			)
		;

	}

}
