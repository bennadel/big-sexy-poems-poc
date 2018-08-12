
// Import the core angular services.
import { Component } from "@angular/core";
import { OnInit } from "@angular/core";

// Import the application components and services.
import { AppReadyEvent } from "./shared/services/app-ready-event";

// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //

@Component({
	selector: "my-app",
	styleUrls: [ "./app.component.less" ],
	templateUrl: "./app.component.htm"
})
export class AppComponent implements OnInit {

	private appReadyEvent: AppReadyEvent;

	// I initialize the app-component.
	constructor( appReadyEvent: AppReadyEvent ) {

		this.appReadyEvent = appReadyEvent;

	}

	// ---
	// PUBLIC METHODS.
	// ---

	// I get called once when the inputs get bound for the first time.
	public ngOnInit() : void {

		this.appReadyEvent.trigger();

	}

}
