import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Usuario {
  correo: string;
  nombre: string;
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = 'http://localhost:3001/api'; // Cambia a tu URL backend

  private loggedUser: Usuario | null = null;

  constructor(private http: HttpClient) {}

  login(correo: string, clave: string): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.apiUrl}/login`, { correo, clave });
  }

  guardarUsuario(usuario: Usuario) {
    localStorage.setItem('usuario', JSON.stringify(usuario));
    this.loggedUser = usuario;
  }

  obtenerUsuario(): Usuario | null {
    if (!this.loggedUser) {
      const userString = localStorage.getItem('usuario');
      this.loggedUser = userString ? JSON.parse(userString) : null;
    }
    return this.loggedUser;
  }

  estaLogueado(): boolean {
    return this.obtenerUsuario() !== null;
  }

  logout() {
    localStorage.removeItem('usuario');
    this.loggedUser = null;
  }
}
