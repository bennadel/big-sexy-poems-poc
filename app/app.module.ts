
// Import the core angular services.
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

// Import the application components and services.
import { AppComponent } from "./app.component";
import { CanvasComponent } from "./canvas.component";
import { FooterComponent } from "./footer.component";
import { HeaderComponent } from "./header.component";
import { RhymesComponent } from "./rhymes.component";
import { SharedModule } from "./shared/shared.module";
import { SynonymsComponent } from "./synonyms.component";
import { ThemeSwitcherComponent } from "./theme-switcher.component";
import { ThemeSwitcherService } from "./shared/services/theme-switcher.service";

// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //

@NgModule({
	bootstrap: [
		AppComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		SharedModule
	],
	declarations: [
		AppComponent,
		CanvasComponent,
		FooterComponent,
		HeaderComponent,
		RhymesComponent,
		SynonymsComponent,
		ThemeSwitcherComponent
	],
	providers: [ ThemeSwitcherService ]
})
export class AppModule {
	// ...
}
