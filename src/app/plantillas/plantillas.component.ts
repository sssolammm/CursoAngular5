import { Component } from "@angular/core";

@Component({
	'selector': 'plantillas',
	'templateUrl': './plantillas.component.html'
})
export class PlantillasComponent{
	public titulo;
	public administrador;


	constructor(){
		this.titulo = "Plantillas ngTemplate en Angular";
		this.administrador = false;
		
	}


	cambiarAdminstrador(valorAdminstrador){
		this.administrador = valorAdminstrador;
	}


}	