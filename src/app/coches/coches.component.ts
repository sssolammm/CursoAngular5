import { Component } from "@angular/core";
import { Coche } from "./coche";

@Component({
	'selector': 'coches',
	'templateUrl': './coches.component.html'
})
export class CochesComponent{
	public coche: Coche;
	public coches:Array<Coche>;


	constructor(){
		this.coche = new Coche("", "", "");
		this.coches = [
			new Coche("Seat Panda", "70", "Rojo"),
			new Coche("Opel corsa", "90", "Blanco")
		];
	}

	onSubmit(){
		console.log(this.coche);
		this.coche = new Coche("", "", "");
	}

}