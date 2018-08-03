
// Import the core angular services.
import { Component } from "@angular/core";

// Import the application components and services.
import { Word } from "./shared/services/word.service";
import { WordResults } from "./shared/services/word.service";
import { WordService } from "./shared/services/word.service";

// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //

@Component({
	selector: "bsp-synonyms",
	styleUrls: [ "./synonyms.component.less" ],
	templateUrl: "./synonyms.component.htm"
})
export class SynonymsComponent {

	public generalizations: Word[] | null;
	public hasResults: boolean;
	public isLoaded: boolean;
	public isLoading: boolean;
	public meansLikes: Word[] | null;
	public query: string;
	public synonyms: Word[] | null;

	private wordService: WordService;

	// I initialize the synonyms component.
	constructor( wordService: WordService ) {
		
		this.wordService = wordService;

		this.generalizations = null;
		this.hasResults = false;
		this.isLoaded = false;
		this.isLoading = false;
		this.meansLikes = null;
		this.query = "";
		this.synonyms = null;

	}

	// ---
	// PUBLIC METHODS.
	// ---

	public handleSubmit() : void {

		if ( ! this.query ) {
			
			return;

		}

		this.isLoaded = false;
		this.isLoading = true;
		this.hasResults = false;

		Promise
			.all([
				this.handlePartialFailure( this.query, this.wordService.getSynonyms( this.query ) ),
				this.handlePartialFailure( this.query, this.wordService.getGeneralizations( this.query ) ),
				this.handlePartialFailure( this.query, this.wordService.getMeansLikes( this.query ) )
			])
			.then(
				( [ synonyms, generalizations, meansLikes ] ) => {

					this.isLoaded = true;
					this.isLoading = false;
					this.synonyms = synonyms.words;
					this.generalizations = generalizations.words;
					this.meansLikes = meansLikes.words;

					this.hasResults = !! ( this.synonyms.length + this.generalizations.length + this.meansLikes.length );

				}
			)
			.catch(
				( error ) => {

					this.isLoaded = true;
					this.isLoading = false;
					this.hasResults = false;

					console.error( error );

				}
			)
		;

	}

	// ---
	// PRIVATE METHODS.
	// ---

	// If any of the word-service requests fail, we want to try and return partial
	// results (so that we can provide a degraded experience, not a total failure). To
	// do this, we'll catch any individual error and return a "null object" response.
	private handlePartialFailure(
		query: string,
		promise: Promise<WordResults>
		) : Promise<WordResults> {

		var safePromise = promise.catch(
			( error ) : WordResults => {

				return({
					query: query,
					words: [] // Null response.
				});

			}
		);

		return( safePromise );

	}

}
