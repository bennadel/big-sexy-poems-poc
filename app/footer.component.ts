
// Import the core angular services.
import { Component } from "@angular/core";

// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //

@Component({
	selector: "bsp-footer",
	styleUrls: [ "./footer.component.less" ],
	templateUrl: "./footer.component.htm"
})
export class FooterComponent {

	public copyright: number;

	// I initialize the footer-component.
	constructor() {
	
		this.copyright = ( new Date() ).getFullYear();

	}

}
