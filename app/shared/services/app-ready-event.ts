
// Import the core angular services.
import { Injectable } from "@angular/core";

// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //

@Injectable({
	providedIn: "root"
})
export class AppReadyEvent {

	private isAppReady: boolean;

	// I initialize the app-ready-event service.
	constructor() {

		this.isAppReady = false;

	}

	// ---
	// PUBLIC METHODS.
	// ---

	// I trigger the "appready" event.
	// --
	// NOTE: The "appready" event is a Message posted to the Window object which external
	// clients can listen for.
	public trigger() : void {

		if ( this.isAppReady ) {

			return;

		}

		this.isAppReady = true;
		window.postMessage( "appready", `${ window.location.protocol }//${ window.location.host }` );

	}

}
