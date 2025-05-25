import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  correo = '';
  clave = '';
  error = '';

  constructor(private loginService: LoginService, private router: Router) { }

  onSubmit() {
    this.loginService.login(this.correo, this.clave).subscribe({
      next: usuario => {
        this.loginService.guardarUsuario(usuario);
        this.error = '';
        this.router.navigate(['/inicio']);
      },
      error: () => {
        this.error = 'Correo o clave incorrectos';
      },
    });
  }
}
