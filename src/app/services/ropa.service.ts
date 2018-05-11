import { Injectable } from '@angular/core';

@Injectable()
export class RopaService {
	public nombre_prenda = 'Pantalones vaqueros';
	public coleccion_ropa = ['Pantalones Blancos', 'Camiseta roja'];

	prueba(nombrePrenda){
		return nombrePrenda;
	}

	addRopa(nombrePrenda){
		this.coleccion_ropa.push(nombrePrenda);
		return this.getRopa();
	}

	getRopa():Array<string>{
		return this.coleccion_ropa;
	}

	deletePrenda(index){
		this.coleccion_ropa.splice(index, 1);
		return this.getRopa();
	}
}