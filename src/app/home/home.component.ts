import { Component } from '@angular/core';
import { RopaService } from '../services/ropa.service';

@Component({
	selector: 'home',
	templateUrl: './home.component.html',
	providers: [RopaService]
})

export class HomeComponent{
	public titulo = 'Pagina principal';
	public listado_ropa:Array<string>;
	public prenda_a_guardar:string;

	public fecha;
	public nombre = "Juan mArtInez";

	constructor(
		private _ropaService: RopaService
	){
		this.fecha = new Date(2018, 4, 11);
	}

	ngOnInit(){
		console.log(this._ropaService.prueba('Camiseta'));
		this.listado_ropa = this._ropaService.getRopa();
	}

	guardarPrenda(){
		this._ropaService.addRopa(this.prenda_a_guardar);
		this.prenda_a_guardar = null;
	}

	eliminarPrenda(index){
		this._ropaService.deletePrenda(index);

	}

}