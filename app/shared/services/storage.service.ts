
// Import the core angular services.
import { ErrorHandler } from "@angular/core";
import { Injectable } from "@angular/core";

// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //

interface PendingWrites {
	[ key: string ]: string;
}

@Injectable({
	providedIn: "root"
})
export class StorageService {

	private errorHandler: ErrorHandler;
	private pendingWrites: PendingWrites;
	private timer: number | null;
	private timerDuration: number;
	
	// I initialize the storage service.
	constructor( errorHandler: ErrorHandler ) {

		this.errorHandler = errorHandler;

		this.pendingWrites = Object.create( null );
		this.timer = null;
		this.timerDuration = ( 10 * 1000 ); // 10-seconds.

		// Since we are going to be deferring WRITES, we want to make sure that we
		// perform one more flush right before the browser is about to unload. This will
		// ensure that no pending writes slip through the cracks.
		window.addEventListener(
			"beforeunload",
			() => {

				this.flushPendingWrites();

			}
		);

	}

	// ---
	// PUBLIC METHODS.
	// ---

	// I get the given item from storage. If the storage infrastructure is not available,
	// "undefined" is returned.
	// --
	// CAUTION: The value will be deserialized from a JSON string.
	public getItem<T>( key: string ) : T | undefined {

		try {

			var serializedValue = window.localStorage.getItem( this.normalizeKey( key ) );
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

		// Since we don't need to return any value, let's do the actual write at some
		// point in the future. Since localStorage is a synchronous API, this should
		// help prevent it from blocking the user experience (at lest, from the user's
		// perceptive - the actual write-operation will still be blocking).
		try {

			this.pendingWrites[ this.normalizeKey( key ) ] = JSON.stringify( value );
			this.scheduledPendingWrites();

		} catch ( error ) {

			this.errorHandler.handleError( error );

		}

	}

	// ---
	// PRIVATE METHODS.
	// ---

	// I flush any pending write-operations to the localStorage API.
	private flushPendingWrites() : void {

		for ( var key of Object.keys( this.pendingWrites ) ) {

			window.localStorage.setItem( key, this.pendingWrites[ key ] );
			delete( this.pendingWrites[ key ] );

		}

	}


	// I return the normalized key for localStorage.
	private normalizeKey( key: string ) : string {

		return( `big-sexy-poems:${ key.toLowerCase() }` );

	}


	// I scheduled the flushing of the pending-writes at some point in the future.
	// Calling this will implicitly push-out any existing scheduled-write.
	private scheduledPendingWrites() : void {

		window.clearTimeout( this.timer );
		
		this.timer = window.setTimeout(
			() => {

				this.flushPendingWrites();

			},
			this.timerDuration
		);

	}

}
