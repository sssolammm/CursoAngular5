import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";

@Injectable()
export class PeticionesService {
	public url: string;


/*	Si en Angular 6 te genera algun fallo la libreria map, importala de esta manera en tu servicio:

	import {map} from 'rxjs/operators'; 

	Y usala de esta manera:

	.pipe(map(res => res.json())); 
*/

	constructor(private _http:Http){
		this.url = "https://jsonplaceholder.typicode.com/posts";
	}

	getPrueba(){
		return "hora mundo desde el servicio";
	}

	getArticulos(){
		return this._http.get(this.url)
							.map(res => res.json());

	}


}
