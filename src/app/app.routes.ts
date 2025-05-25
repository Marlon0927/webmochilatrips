import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { DestinosComponent } from './components/destinos/destinos.component';
import { PlanesComponent } from './components/planes/planes.component';
import { ReservaComponent } from './components/reservas/reservas.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';


export const routes: Routes = [
    {path: '', redirectTo: 'inicio', pathMatch: 'full' },
    {path: 'inicio', component: InicioComponent},
    {path: 'destinos', component: DestinosComponent},
    {path: 'planes', component: PlanesComponent},
    {path: 'reservas', component: ReservaComponent},
    {path: 'user', component: UserComponent},
    {path: 'login', component: LoginComponent},
    {path: 'perfil', component: PerfilComponent}
];

