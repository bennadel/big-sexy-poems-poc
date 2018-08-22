
// Import the core angular services.
import { Component } from "@angular/core";
import { OnDestroy } from "@angular/core";
import { OnInit } from "@angular/core";

// Import the application components and services.
import { AppReadyEvent } from "./shared/services/app-ready-event";
import { Subscription } from "rxjs";
import { ThemeSwitcherService } from "./shared/services/theme-switcher.service";

// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //

@Component({
	selector: "my-app",
	host: {
		"[class.light-theme]": "( theme === 'light' )",
		"[class.dark-theme]": "( theme === 'dark' )"
	},
	styleUrls: [ "./app.component.less" ],
	templateUrl: "./app.component.htm"
})
export class AppComponent implements OnInit, OnDestroy {

	public theme: string;

	private appReadyEvent: AppReadyEvent;
	private themeSubscription: Subscription;
	private themeSwitcherService: ThemeSwitcherService;

	// I initialize the app-component.
	constructor(
		appReadyEvent: AppReadyEvent,
		themeSwitcherService: ThemeSwitcherService
		) {

		this.appReadyEvent = appReadyEvent;
		this.themeSwitcherService = themeSwitcherService;

		this.theme = "light";

	}

	// ---
	// PUBLIC METHODS.
	// ---

	// I get called once when the component is being unmounted.
	public ngOnDestroy() : void {

		( this.themeSubscription ) && this.themeSubscription.unsubscribe();

	}


	// I get called once after the inputs have been bound for the first time.
	public ngOnInit() : void {

		this.themeSubscription = this.themeSwitcherService.darkTheme$.subscribe(
			( isDarkTheme ) => {

				this.theme = ( isDarkTheme )
					? "dark"
					: "light"
				;

			}
		);

		this.appReadyEvent.trigger();

	}

}
