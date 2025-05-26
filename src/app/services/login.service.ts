import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

interface Usuario {
  correo: string;
  nombre: string;

}

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = 'http://localhost:3001/api';
  private loggedUser: Usuario | null = null;

  constructor(private http: HttpClient) { }

  login(correo: string, clave: string): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.apiUrl}/login`, { correo, clave }).pipe(
      tap(usuario => {
        this.loggedUser = usuario;
      })
    );
  }

  guardarUsuario(usuario: Usuario) {
    this.loggedUser = usuario;
  }

  obtenerUsuario(): Usuario | null {
    return this.loggedUser;
  }

  estaLogueado(): boolean {
    return this.loggedUser !== null;
  }

  logout() {
    this.loggedUser = null;
  }
}
