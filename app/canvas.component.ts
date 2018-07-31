
// Import the core angular services.
import { Component } from "@angular/core";

// Import the application components and services.
import { SyllableResults } from "./shared/services/word.service";
import { WordService } from "./shared/services/word.service";

// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //

@Component({
	selector: "bsp-canvas",
	styleUrls: [ "./canvas.component.less" ],
	templateUrl: "./canvas.component.htm"
})
export class CanvasComponent {

	public poem: string;
	public syllableCounts: number[];

	private syllableTimer: number;
	private wordService: WordService;

	// I initialize the canvas-component.
	constructor( wordService: WordService ) {

		this.wordService = wordService;

		this.poem = "";
		this.syllableCounts = [];
		this.syllableTimer = 0;

	}

	// ---
	// PUBLIC METHODS.
	// ---

	public handlePoemChanged() : void {

		clearTimeout( this.syllableTimer );

		this.syllableTimer = setTimeout(
			() => {

				this.updateSyllableCounts();

			},
			500
		);

	}

	// ---
	// PRIVATE METHODS.
	// ---

	private extractLines( value: string ) : string[] {

		return( value.trim().split( /\r\n?|\n/g ) );

	}


	private extractUniqueWords( value: string ) : string[] {

		var words = this.extractWords( value )
			.reduce(
				( reduction, word ) => {

					reduction[ word ] = true;
					return( reduction );

				},
				Object.create( null ) // Initial value.
			)
		;

		return( Object.keys( words ) );

	}


	private extractWords( value: string ) : string[] {

		return( value.trim().match( /\S+/g ) || [] );

	}


	private normalizePoemText( poem: string ) : string {

		var normalizedPoem = poem
			.toLowerCase()
			// Replace any string of word-delimiters with a space.
			.replace( /[ _:\u2014\u2013-]+/g, " " )
			// Strip out any constructs that don't directly influence the way in which
			// the poem can be read out-loud.
			.replace( /[^a-z0-9\s]/gi, "" )
		;

		return( normalizedPoem );

	}


	private updateSyllableCounts() : void {

		var poemSnapshot = this.poem;
		var text = this.normalizePoemText( poemSnapshot );
		var words = this.extractUniqueWords( text );

		this.wordService
			.getSyllableCounts( words )
			.then(
				( counts ) => {

					// If the poem changed while we were fetching syllable counts, then
					// let's return-out. There will be some parallel request that is
					// currently processing the newer state of the poem.
					if ( poemSnapshot !== this.poem ) {

						return;

					}

					// At this point, we should be guaranteed that there is a syllable
					// count for every word token in the normalized poem. As such, we
					// should be able to break the poem into lines and then count the
					// syllables in each line.
					this.syllableCounts = this
						.extractLines( text )
						.map(
							( line ) => {

								var tokens = this.extractWords( line );

								if ( ! tokens ) {

									return( 0 );

								}

								var count = tokens.reduce(
									( reduction, token ) => {

										// If the word-service didn't recognize the given
										// word token, then it will return ZERO for the
										// syllable count. In such a case, we'll default
										// to using ONE syllable so that the token takes
										// some degree of auditory space.
										return( reduction + ( counts[ token ] || 1 ) );

									},
									0 // Initial value.
								);

								return( count );

							}
						)
					;

				}
			)
			.catch(
				( error ) => {

					console.error( error );

				}
			)
		;

	}
}
