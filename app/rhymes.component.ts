
// Import the core angular services.
import { Component } from "@angular/core";
import { ErrorHandler } from "@angular/core";

// Import the application components and services.
import { Word } from "./shared/services/word.service";
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
	selector: "bsp-rhymes",
	styleUrls: [ "./rhymes.component.less" ],
	templateUrl: "./rhymes.component.htm"
})
export class RhymesComponent {

	public isLoading: boolean;
	public query: string;
	public results: Results | null;

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
							{ label: "1 Syllable", words: [] },
							{ label: "2 Syllables", words: [] },
							{ label: "3 Syllables", words: [] },
							{ label: "4 Syllables", words: [] },
							{ label: "5 Syllables", words: [] },
							{ label: "6 Syllables", words: [] }
						]
					};

					// The words are returned in rank-order. However, for easier
					// consumption, we want to display them in alphabetical order. As
					// such, let's sort them before we divide them into groups so that
					// we know the groups are implicitly sorted as they are created.
					response.words.sort(
						( a: Word, b: Word ) => {

							return( ( a.value < b.value ) ? -1 : 1 );

						}
					);

					// Now that the word response is sorted, let's move each word into
					// its appropriate results group.
					for ( var word of response.words ) {

						// Our results data structure only accounts for a set number of
						// syllable groups. If this word falls outside of that set, just
						// ignore it.
						if ( ( word.syllableCount > 6 ) || ( word.syllableCount < 1 ) ) {

							continue;

						}

						this.results.groups[ word.syllableCount - 1 ].words.push({
							value: word.value,
							isStrongMatch: word.isStrongMatch
						});

					}

					// And finally, remove any results group that ended up with no words.
					this.results.groups = this.results.groups.filter(
						( group ) => {

							return( !! group.words.length );

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
