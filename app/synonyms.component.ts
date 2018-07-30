
// Import the core angular services.
import { Component } from "@angular/core";

// Import the application components and services.
import { Word } from "./shared/services/word.service";
import { WordService } from "./shared/services/word.service";

// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //

@Component({
	selector: "bs-synonyms",
	styleUrls: [ "./synonyms.component.less" ],
	templateUrl: "./synonyms.component.htm"
})
export class SynonymsComponent {

	public generalizations: Word[] | null;
	public isLoading: boolean;
	public meansLikes: Word[] | null;
	public query: string;
	public synonyms: Word[] | null;

	private wordService: WordService;

	// I initialize the synonyms component.
	constructor( wordService: WordService ) {
		
		this.wordService = wordService;

		this.generalizations = null;
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

		this.isLoading = true;

		Promise
			.all([
				this.wordService.getSynonyms( this.query ),
				this.wordService.getGeneralizations( this.query ),
				this.wordService.getMeansLikes( this.query )
			])
			.then(
				( [ synonyms, generalizations, meansLikes ] ) => {

					this.isLoading = false;
					this.synonyms = synonyms.words;
					this.generalizations = generalizations.words;
					this.meansLikes = meansLikes.words;

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
