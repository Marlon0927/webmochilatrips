import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { DestinosComponent } from './components/destinos/destinos.component';
import { PlanesComponent } from './components/planes/planes.component';

export const routes: Routes = [
    {path: 'inicio', component: InicioComponent},
    {path: 'destinos', component: DestinosComponent},
    {path: 'planes', component: PlanesComponent}
];

