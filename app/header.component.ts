
// Import the core angular services.
import { Component } from "@angular/core";

// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //

@Component({
	selector: "bsp-header",
	styleUrls: [ "./header.component.less" ],
	templateUrl: "./header.component.htm"
})
export class HeaderComponent {

	public inspiration: string;

	private lastRotatedAt: number;
	private sources: string[];

	// I initialize the header-component.
	constructor() {

		this.inspiration = "beauty";
		this.lastRotatedAt = Date.now();

		this.sources = [
			"anger",
			"awe",
			"beauty",
			"bliss",
			"blood",
			"devotion",
			"desire",
			"excitement",
			"fate",
			"fury",
			"grace",
			"heartache",
			"honor",
			"instinct",
			"joy",
			"laughter",
			"life",
			"love",
			"lust",
			"pain",
			"passion",
			"pleasure",
			"sex",
			"wonder"
		];

	}

	// ---
	// PUBLIC METHODS.
	// ---

	// I handle the mousemove event on the header, rotating the source of inspiration
	// in response to the user interaction.
	public handleMousemove() : void {

		var now = Date.now();
		var delta = ( now - this.lastRotatedAt );

		if ( delta > 250 ) {

			this.rotateInspiration();
			this.lastRotatedAt = now;

		}

	}

	// ---
	// PRIVATE METHODS.
	// ---

	// I rotate the inspiration, selecting the next source at random.
	private rotateInspiration() : void {

		var nextInspiration = this.inspiration;

		while ( nextInspiration === this.inspiration ) {

			nextInspiration = this.sources[ Math.floor( Math.random() * this.sources.length ) ];

		}

		this.inspiration = nextInspiration;

	}

}
