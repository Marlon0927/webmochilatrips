// src/app/services/user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3001/api/user';
  httpOptions = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }
  getAllUsersData(): Observable<any> {
    return this.http.get<any>(this.apiUrl)
  }


  newUser(data: any): Observable<any> {
    return this.http.post<any>(
      this.apiUrl,
      data,
      { headers: this.httpOptions });
  }
}