
// Import the core angular services.
import { Component } from "@angular/core";

// Import the application components and services.
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
	selector: "bs-rhymes",
	styleUrls: [ "./rhymes.component.less" ],
	templateUrl: "./rhymes.component.htm"
})
export class RhymesComponent {

	public isLoading: boolean;
	public query: string;
	public results: RhymeResults | null;

	private wordSerivce: WordService;

	// I initialize the rhymes component.
	constructor( wordService: WordService ) {

		this.wordSerivce = wordService;

		this.isLoading = false;
		this.query = "";
		this.results = null;

	}

	// ---
	// PUBLIC METHODS.
	// ---

	public handleSubmit() : void {

		if ( ! this.query ) {
			
			return;

		}

		this.isLoading = true;

		this.wordSerivce
			.getRhymes( this.query )
			.then(
				( response ) => {

					this.isLoading = false;

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

					for ( var word of response.words ) {

						if ( ( word.syllableCount > 6 ) || ( word.syllableCount < 1 ) ) {

							continue;

						}

						this.results.groups[ word.syllableCount - 1 ].rhymes.push({
							word: word.value,
							isStrongMatch: word.isStrongMatch
						});

					}

					this.results.groups = this.results.groups
						.filter(
							( group ) => {

								return( group.rhymes.length );

							}
						)
						.map(
							( group ) => {

								return({
									syllableCount: group.syllableCount,
									rhymes: group.rhymes.sort(
										( a, b ) => {

											var wordA = a.word.toLowerCase();
											var wordB = b.word.toLowerCase();

											return( ( wordA < wordB ) ? -1 : 1 );

										}
									)
								});

							}
						)
					;


				}
			)
			.catch(
				( error ) => {

					this.isLoading = false;

					console.error( error );

				}
			)
		;

	}

	// ---
	// PRIVATE METHODS.
	// ---

}
