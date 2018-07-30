
// Import the core angular services.
import { Component } from "@angular/core";

// Import the application components and services.
// import { DatamuseClient } from "./shared/services/datamuse-client";

// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //

@Component({
	selector: "my-app",
	styleUrls: [ "./app.component.less" ],
	templateUrl: "./app.component.htm"
})
export class AppComponent {

	public copyright: number;

	// I initialize the app-component.
	constructor() {

		this.copyright = ( new Date() ).getFullYear();

	}

}
