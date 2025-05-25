import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { FormGroup, FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,         // <-- indica standalone
  imports: [FormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  correo = '';
  clave = '';
  error = '';
  loginList: any = [];
  loginForm: FormGroup | any;

  constructor(private loginService: LoginService, private router: Router) { }

  onSubmit() {
    this.loginService.login(this.correo, this.clave).subscribe({
      next: (usuario) => {
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
