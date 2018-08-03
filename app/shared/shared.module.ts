
// Import the core angular services.
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

// Import the application components and services.

// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //

// The goal of the SharedModule is to organize declarations and other modules that will
// be imported into other modules (for rendering). This module should NOT contain any
// service providers (those are provided via "providedIn: root" semantics).
@NgModule({
	imports: [
		CommonModule,
		FormsModule
	],
	exports: [
		CommonModule,
		FormsModule
	],
	declarations: [
		
	]
})
export class SharedModule {
	// ...
}
