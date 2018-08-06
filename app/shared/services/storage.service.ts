
// Import the core angular services.
import { ErrorHandler } from "@angular/core";
import { Injectable } from "@angular/core";

// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //

@Injectable({
	providedIn: "root"
})
export class StorageService {

	private errorHandler: ErrorHandler;
	private timer: number | null;
	
	// I initialize the storage service.
	constructor( errorHandler: ErrorHandler ) {

		this.errorHandler = errorHandler;

		this.timer = null;

	}

	// ---
	// PUBLIC METHODS.
	// ---

	// I get the given item from storage. If the storage infrastructure is not available,
	// "undefined" is returned.
	public getItem<T>( key: string ) : T | undefined {

		try {

			var serializedValue = window.localStorage.getItem( this.getStorageKey( key ) );
			var value = <T>JSON.parse( serializedValue );
			return( value );


		} catch ( error ) {

			this.errorHandler.handleError( error );
			return( undefined );

		}

	}


	// I store the given value at the given key.
	// --
	// CAUTION: The value will be serialized as a JSON string.
	public setItem( key: string, value: any ) : void {

		window.clearTimeout( this.timer );

		// Since we don't need to return any value, let's do the actual write inside of
		// a timeout. Since localStorage is a synchronous API, this should help prevent
		// it from blocking the user experience (from the user's perceptive - the actual
		// write-operation will still be blocking).
		this.timer = window.setTimeout(
			() => {

				try {

					window.localStorage.setItem( this.getStorageKey( key ), JSON.stringify( value ) );

				} catch ( error ) {

					this.errorHandler.handleError( error );

				}

			},
			5000 // 5-seconds.
		);

	}

	// ---
	// PRIVATE METHODS.
	// ---

	// I return the normalized key for localStorage.
	private getStorageKey( key: string ) : string {

		return( `big-sexy-poems:${ key.toLowerCase() }` );

	}

}
