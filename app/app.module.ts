
// Import the core angular services.
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

// Import the application components and services.
import { AppComponent } from "./app.component";
import { CanvasComponent } from "./canvas.component";
// import { CoreModule } from "./shared/core.module";
import { HeaderComponent } from "./header.component";
import { RhymesComponent } from "./rhymes.component";
import { SharedModule } from "./shared/shared.module";
import { SyncComponent } from "./sync.component";
import { SynonymsComponent } from "./synonyms.component";

// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //

@NgModule({
	bootstrap: [
		AppComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		// CoreModule
		SharedModule
	],
	declarations: [
		AppComponent,
		CanvasComponent,
		HeaderComponent,
		RhymesComponent,
		SyncComponent,
		SynonymsComponent
	],
	providers: [
		
	]
})
export class AppModule {
	// ...
}