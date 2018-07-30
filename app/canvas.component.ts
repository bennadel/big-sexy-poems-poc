
// Import the core angular services.
import { Component } from "@angular/core";

// Import the application components and services.
import { SyllableResults } from "./shared/services/word.service";
import { WordService } from "./shared/services/word.service";

// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //

@Component({
	selector: "bs-canvas",
	styleUrls: [ "./canvas.component.less" ],
	templateUrl: "./canvas.component.htm"
})
export class CanvasComponent {

	public poem: string;
	public syllableCounts: number[];

	private wordService: WordService;

	// I initialize the canvas-component.
	constructor( wordService: WordService ) {

		this.wordService = wordService;

		this.poem = "hello world\n\nwhat it be like";
		this.syllableCounts = [ 3, 0, 4 ];

	}

	public doit() : void {

		var sanitizedPoem = this.poem
			.toLowerCase()
			.replace( /[^\w\s-]/gi, "" )
		;

		var tokens = sanitizedPoem.match( /\S+/g );

		var uniqueWords = tokens.reduce(
			( reduction, token ) => {

				reduction[ token ] = 0;
				return( reduction );

			},
			Object.create( null )
		);

		this.wordService
			.getSyllableCounts( Object.keys( uniqueWords ) )
			.then(
				( counts ) => {

					console.log( counts );

					this.syllableCounts = sanitizedPoem
						.split( /\r\n?|\n/g )
						.map(
							( line ) => {

								var tokens = line.match( /\S+/g );

								if ( ! tokens ) {

									return( 0 );

								}

								var count = tokens.reduce(
									( reduction, token ) => {

										return( reduction + ( counts[ token ] || 0 ) );

									},
									0
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
