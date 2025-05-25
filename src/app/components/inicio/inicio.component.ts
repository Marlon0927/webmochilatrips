import { Component, HostListener } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../../services/login.service';


@Component({
  selector: 'app-inicio',
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
  template: `
    <h1>Bienvenido, {{ usuario?.nombre || 'Usuario' }}</h1>
    <button (click)="logout()">Cerrar sesión</button>`
})
export class InicioComponent {

  showDropdown = false;
  isOpen = false;
  // agrega usuario actual
  usuarioActual: any;
  /////////////////////
  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  @HostListener('document:click', ['$event'])
  closeDropdown(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown')) {
      this.isOpen = false;
    }
  }


}
