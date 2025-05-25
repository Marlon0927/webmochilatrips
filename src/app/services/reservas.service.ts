// src/app/services/user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {
  private apiUrl = 'http://localhost:3001/api/reserva';
  httpOptions = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }
  getAllReservasData(): Observable<any> {
    return this.http.get<any>(this.apiUrl)
  }


  newReserva(data: any): Observable<any> {
    return this.http.post<any>(
      this.apiUrl,
      data,
      { headers: this.httpOptions });
  }
}