
// Import the core angular services.
import { Component } from "@angular/core";
import { ErrorHandler } from "@angular/core";

// Import the application components and services.
import { StorageService } from "./shared/services/storage.service";
import { SyllableResults } from "./shared/services/word.service";
import { WordService } from "./shared/services/word.service";
import { ThemeSwitcherService } from "./shared/services/theme-switcher.service";
import { Subscription } from "../node_modules/rxjs";

// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //

@Component({
	selector: "bsp-canvas",
	styleUrls: [ "./canvas.component.less" ],
	templateUrl: "./canvas.component.htm"
})
export class CanvasComponent {
	public poem: string;
	public shouldPersistPoem: boolean;
	public syllableCounts: number[];
	public isDarkTheme: boolean;
	public themeSubscription: Subscription

	private errorHandler: ErrorHandler;
	private storageService: StorageService;
	private syllableTimer: number;
	private themeService: ThemeSwitcherService;
	private wordService: WordService;

	
	// I initialize the canvas-component.
	constructor(
		errorHandler: ErrorHandler,
		storageService: StorageService,
		themeService: ThemeSwitcherService,
		wordService: WordService
		) {

		this.errorHandler = errorHandler;
		this.storageService = storageService;
		this.themeService = themeService;
		this.wordService = wordService;

		this.poem = "";
		this.shouldPersistPoem = false;
		this.syllableCounts = [];
		this.syllableTimer = 0;
		
	}

	// ---
	// PUBLIC METHODS.
	// ---

	// I handle changes to the "persist poem" toggle.
	public handlePersistenceChange() : void {

		if ( this.shouldPersistPoem ) {

			this.storageService.setItem( "save-poem", true );
			this.storageService.setItem( "poem", this.poem );

		} else {

			this.storageService.setItem( "save-poem", false );
			this.storageService.setItem( "poem", "" );

		}

	}

	// I handle changes to the poem text.
	public handlePoemChanged() : void {

		if ( this.shouldPersistPoem ) {

			this.storageService.setItem( "poem", this.poem );

		}

		// As the user formulates the poem, we want to be checking for new words and
		// syllable counts; however, in order to reduce the number of "partial words"
		// that we match against, let's push the syllable count update to slightly in
		// the future. This way, the counts are only re-established when the user typing
		// comes to a brief rest.
		this.scheduleSyllableCountUpdate();

	}

	// I get called once after the inputs have been bound for the first time.
	public ngOnInit() : void {

		this.themeSubscription = this.themeService.darkTheme$.subscribe(isDarkTheme => 
			this.isDarkTheme = isDarkTheme
		);

		switch ( this.storageService.getItem( "save-poem" ) ) {
			// If the "save poem" setting is undefined, it means that it has never been
			// set before. In that case, we're going to default it to being ON. The
			// chances are good that the user will want their data to be stored across
			// refreshes and defaulting it to ON will result in fewer mistakes.
			case undefined: 
				this.shouldPersistPoem = true;
				this.storageService.setItem( "save-poem", true );
			break;
			// If the "save poem" setting is TRUE, then let's try to pull any previously
			// saved poem back into the application.
			case true:
				this.shouldPersistPoem = true;
				this.poem = ( this.storageService.getItem( "poem" ) || "" );
			break;
			case false:
				this.shouldPersistPoem = false;
			break;
		}

		// At this point, we may have pulled a saved poem back into the application. As
		// such, we may need to update the syllable count.
		this.updateSyllableCounts();
	}

	public ngOnDestroy() {
		this.themeSubscription.unsubscribe();
	}
	// ---
	// PRIVATE METHODS.
	// ---

	// I extract the lines from the given NORMALIZED text.
	private extractLines( value: string ) : string[] {

		return( value.trim().split( /\r\n?|\n/g ) );

	}


	// I return a collection of unique words from the given NORMALIZED text.
	private extractUniqueWords( value: string ) : string[] {

		var uniqueWords = Object.create( null );

		// Write each word to the unique collection. This will cause word collisions to
		// overwrite each other, leaving us with a collection whose keys represent the
		// sum total of unique words in the given value.
		for ( var word of this.extractWords( value ) ) {

			uniqueWords[ word ] = true;

		}

		return( Object.keys( uniqueWords ) );

	}


	// I extract the word tokens from the given NORMALIZED text.
	private extractWords( value: string ) : string[] {

		return( value.trim().match( /\S+/g ) || [] );

	}


	// I normalize the given poem text for use in the syllable count. This removes all of
	// the content that has no bearing on the syllable count; and, creates a value that
	// will work well with the WordService.
	private normalizePoemText( poem: string ) : string {

		var normalizedPoem = poem
			.toLowerCase()
			// Strip out any quotes.
			.replace( /['"]+/g, "" )
			// Strip out any constructs that don't directly influence the way in which
			// the poem can be read out-loud.
			// --
			// NOTE: Creating extra white-space won't be a problem because we will only
			// care about the words that are left-over.
			.replace( /[^a-z0-9\s]/gi, " " )
			.trim()
		;

		return( normalizedPoem );

	}


	// I schedule an update of the syllable count for some time in the future. This
	// implicitly cancels any existing scheduled update.
	private scheduleSyllableCountUpdate() : void {

		clearTimeout( this.syllableTimer );

		this.syllableTimer = setTimeout(
			() => {

				this.updateSyllableCounts();

			},
			500 // Half-second.
		);

	}


	// I gather the syllable counts for each line in the current poem text.
	private updateSyllableCounts() : void {

		var poemSnapshot = this.poem;

		// Since the user may enter any kind of text into the poem input, there's a good
		// chance that it contains data that has no audible component (ex, quotes and
		// other punctuation). As such, let's strip out anything that won't influence the
		// number of syllables.
		var text = this.normalizePoemText( poemSnapshot );
		var words = this.extractUniqueWords( text );

		this.wordService
			.getSyllableCounts( words )
			.then(
				( counts ) => {

					// If the poem changed while we were fetching syllable counts, then
					// let's return-out. There will be some parallel request that is
					// currently processing the newer state of the poem text.
					if ( poemSnapshot !== this.poem ) {

						return;

					}

					// At this point, we should be guaranteed that there is a syllable
					// count for every word token in the normalized poem (though some of
					// them may be ZERO if the WordService didn't understand what words
					// they were). As such, we should be able to break the poem into
					// lines and then count the syllables in each line. Let's map each
					// line to a syllable count.
					this.syllableCounts = this.extractLines( text ).map(
						( line ) => {

							var tokens = this.extractWords( line );

							// If there are no words in this line, just return zero.
							if ( ! tokens ) {

								return( 0 );

							}

							var count = tokens.reduce(
								( reduction, token ) => {

									// If the word-service didn't recognize the given
									// word token (or failed to return a response),
									// then it will return ZERO for the syllable
									// count. In such a case, we'll default to using
									// ONE syllable so that the token takes some
									// degree of auditory space.
									// --
									// TODO: Possibly add some sort of fall-back for
									// calculating syllable count on the client.
									return( reduction + ( counts[ token ] || 1 ) );

								},
								0 // Initial value.
							);

							return( count );

						}
					);

				}
			)
			.catch(
				( error ) => {

					this.errorHandler.handleError( error );

				}
			)
		;

	}
}
