import { Component } from '@angular/core';
import { Empleado } from './empleado';

@Component({
	selector: 'empleado',
	templateUrl: './empleado.component.html'
})

export class EmpleadoComponent{
	public lista_empleados = 'Carlos, Juan y Marta';
	public empleado:Empleado;
	public trabajadores:Array<Empleado>;
	public color:string;
	public color_seleccionado:string;

	constructor(){
		this.empleado = new Empleado('david', 54, 'jefe', true);
		this.trabajadores = [
			new Empleado('david', 54, 'jefe', true),
			new Empleado('jose', 11, 'secretaria', true),
			new Empleado('carlos', 33, 'medico', false),
		];
		this.color_seleccionado = '#ccc';
	}

	ngOnInit(){
		this.color = 'blue';
		
	}


	cambiarContratado(valor){
		this.empleado.contratado = valor;
	}

	logColorSeleccionado(){
		console.log(this.color_seleccionado);
	}
}