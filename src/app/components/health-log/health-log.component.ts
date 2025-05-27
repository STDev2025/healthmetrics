import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf, JsonPipe } from '@angular/common';
import { HealthLogService } from '../../services/health-log.service';

@Component({
  selector: 'app-health-log',
  standalone: true,
  imports: [FormsModule, NgIf, JsonPipe],
  templateUrl: './health-log.component.html',
  styleUrls: ['./health-log.component.css']
})
export class HealthLogComponent {
  entradaLibre: string = '';
  previsualizacion: any = {};
  cargando = false;

  constructor(private healthLogService: HealthLogService) {}

  procesarTexto() {
    this.cargando = true;
    this.healthLogService.procesarTexto(this.entradaLibre).subscribe({
      next: (respuesta: string) => {
        this.previsualizacion = typeof respuesta === 'string' ? JSON.parse(respuesta) : respuesta;
        this.cargando = false;
      },
      error: (err: any) => {
        console.error('Error al procesar el texto:', err);
        this.cargando = false;
      }
    });
  }

  guardar() {
    console.log('JSON listo para guardar:', this.previsualizacion);
  }
}
