import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HealthLogService {
  private apiUrl = 'http://localhost:8081/api/parser';

  constructor(private http: HttpClient) {}

  procesarTexto(texto: string): Observable<any> {
    return this.http.post(this.apiUrl, texto, {
      responseType: 'json',
      headers: { 'Content-Type': 'text/plain' }
    });
  }
}
