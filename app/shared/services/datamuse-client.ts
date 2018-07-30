
// Import the core angular services.
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //

export interface Match {
	defs?: string[];
	numSyllables?: number;
	score?: number;
	tags?: string[];
	word: string;
}

interface SuggestionsConfig {
	s: string;
	v?: string;
	max?: number;
}

interface WordsConfig {
	ml?: string;
	sl?: string;
	sp?: string;
	rel_jja?: string;
	rel_jjb?: string;
	rel_syn?: string;
	rel_trg?: string;
	rel_ant?: string;
	rel_spc?: string;
	rel_gen?: string;
	rel_com?: string;
	rel_par?: string;
	rel_bga?: string;
	rel_bgb?: string;
	rel_rhy?: string;
	rel_nry?: string;
	rel_hom?: string;
	rel_cns?: string;
	v?: string;
	topics?: string;
	lc?: string;
	rc?: string;
	max?: number;
	md?: string;
	qe?: string;
}

type Config = SuggestionsConfig | WordsConfig;

interface RequestParams {
	[ key: string ]: string;
}

@Injectable({
	providedIn: "root"
})
export class DatamuseClient {

	private httpClient: HttpClient;

	// I initialize the datamuse client.
	constructor( httpClient: HttpClient ) {

		this.httpClient = httpClient;

	}
	
	// ---
	// PUBLIC METHODS.
	// ---

	// I get Datamuse suggestions based on the given configuration.
	public async getSuggestions( config: SuggestionsConfig ) : Promise<Match[]> {

		return( await this.makeRequest( "sug", config ) );

	}


	// I get Datamuse words based on the given configuration.
	public async getWords( config: WordsConfig ) : Promise<Match[]> {

		return( await this.makeRequest( "words", config ) );

	}

	// ---
	// PRIVATE METHODS.
	// ---

	// I make the HTTP request to the Datamuse API.
	private async makeRequest( resource: string, config: Config ) : Promise<Match[]> {

		var result = await this.httpClient
			.get<Match[]>(
				`https://api.datamuse.com/${ resource }`,
				{
					params: this.makeRequestParams( config ),
					withCredentials: true
				}
			)
			.toPromise()
		;

		return( result );

	}


	// I take the various configuration objects and normalize them into a set of request
	// parameters that can be used with the HttpClient.
	private makeRequestParams( config: Config ) : RequestParams {

		var params: RequestParams = {
			max: "10"
		};

		for ( var key of Object.keys( config ) ) {

			params[ key ] = config[ key ].toString();

		}

		return( params );

	}

}
