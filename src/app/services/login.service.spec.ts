// login.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class LoginService {
  private apiUrl = 'http://localhost:3001/api/login';

  constructor(private http: HttpClient) { }

  // Iniciar sesión, envía correo y clave, recibe cookie de sesión
  login(correo: string, clave: string) {
    return this.http.post<any>(this.apiUrl, { correo, clave }, { withCredentials: true });
  }

  // Obtener usuario actual basado en sesión backend
  getUsuarioActual() {
    return this.http.get<any>(`${this.apiUrl}/usuario-actual`, { withCredentials: true });
  }

  // Cerrar sesión en backend
  logout() {
    return this.http.post(`${this.apiUrl}/logout`, {}, { withCredentials: true });
  }
}
