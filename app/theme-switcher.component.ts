
// Import the core angular services.
import { Component } from "@angular/core";
import { ThemeSwitcherService } from "./shared/services/theme-switcher.service";


@Component({
	selector: "bsp-theme-switcher",
	styleUrls: [ "./theme-switcher.component.less" ],
    templateUrl: "./theme-switcher.component.htm"
})
export class ThemeSwitcherComponent {
    public isDarkTheme = false;
    constructor(
        private themeService: ThemeSwitcherService
    ) {}

    switchTheme() {
        this.isDarkTheme = !this.isDarkTheme;
        this.themeService.darkTheme.next(this.isDarkTheme);
    }

}
