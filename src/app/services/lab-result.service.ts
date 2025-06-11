//Importa el decorador @Injectable, necesario para que Angular pueda inyectar esta clase como un servicio en otros componentes o servicios.
import { Injectable } from '@angular/core';
//Importa el servicio HttpClient, que Angular proporciona para hacer peticiones HTTP (GET, POST, PUT, DELETE) al backend (como Spring o Node).
import { HttpClient } from '@angular/common/http';
//Importa la interfaz LabResult para que el servicio sepa qué estructura de datos espera recibir del backend (con campos como fechaPrueba, resultado, etc).
import { LabResult } from '../models/lab-result.model';
//Importa Observable, que es un flujo de datos asincrónico. Angular no recibe datos directamente, sino como un stream observable.
import { Observable } from 'rxjs';

// Indica que esta clase será un servicio singleton global. Al marcar providedIn: 'root', Angular lo registra automáticamente sin tener que agregarlo en providers[]
@Injectable({ providedIn: 'root' })
export class LabResultService {
  constructor(private http: HttpClient) {}

  findByTipoPrueba(tipoPrueba: string): Observable<LabResult[]> {
    return this.http.get<LabResult[]>(`/api/labresults/tipo/${tipoPrueba}`);
  }

}
