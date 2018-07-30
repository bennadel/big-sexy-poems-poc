
// Import the core angular services.
import { Injectable } from "@angular/core";

// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //

@Injectable({
	providedIn: "root"
})
export class StorageService {
	
	constructor() {

	}

	// ---
	// PUBLIC METHODS.
	// ---

	public getItem<T>( key: string ) : T | undefined {

		try {

			var serializedValue = window.localStorage.getItem( this.getStorageKey( key ) );
			var value = <T>JSON.parse( serializedValue );

			return( value );


		} catch ( error ) {

			console.warn( "Storage could not be read." );
			console.error( error );
			return( undefined );

		}

	}


	public setItem( key: string, value: any ) : void {

		window.requestAnimationFrame(
			() => {

				try {

					window.localStorage.setItem( this.getStorageKey( key ), JSON.stringify( value ) );

				} catch ( error ) {

					console.warn( "Storage could not be written." );
					console.error( error );

				}

			}
		);

	}

	// ---
	// PRIVATE METHODS.
	// ---

	private getStorageKey( key: string ) : string {

		return( `big-sexy-poems:${ key.toLowerCase() }` );

	}

}
