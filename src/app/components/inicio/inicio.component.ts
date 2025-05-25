import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CommonModule } from '@angular/common';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
})

export class InicioComponent implements OnInit {
  usuario: any = null;
  estaLogueado = false;
  showDropdown = false;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.usuario = this.loginService.obtenerUsuario();
    this.estaLogueado = this.loginService.estaLogueado();

    if (!this.estaLogueado) {
      this.router.navigate(['/inicio']);
    }
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/inicio']);
  }
}
