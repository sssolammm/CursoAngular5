import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//Importar componentes

import { EmpleadoComponent } from './empleado/empleado.component';
import { FrutaComponent } from './fruta/fruta.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { CochesComponent } from './coches/coches.component';
import { PlantillasComponent } from './plantillas/plantillas.component';


//Constante
const appRoutes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'empleado', component: EmpleadoComponent},
	{path: 'fruta', component: FrutaComponent},
	{path: 'contacto', component: ContactoComponent},
	{path: 'coches', component: CochesComponent},
	{path: 'plantillas', component: PlantillasComponent},
	{path: 'pagina-principal', component: HomeComponent},
	{path: '**', component: HomeComponent}
];


export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);