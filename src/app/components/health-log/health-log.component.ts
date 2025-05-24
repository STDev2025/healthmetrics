import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {JsonPipe, NgIf} from '@angular/common';

@Component({
  selector: 'app-health-log',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    JsonPipe
  ],
  templateUrl: './health-log.component.html',
  styleUrl: './health-log.component.css'
})

export class HealthLogComponent {
  entradaLibre: string = '';
  previsualizacion: any = {};

  procesarTexto() {
    const texto = this.entradaLibre.toLowerCase();
    const resultado: any = {};

    // 🛌 Sueño
    const matchSueno = texto.match(/sueñ[oa].*?(\d+)\s*h(?:oras)?(?:.*?(\d+)\s*min)?/);
    const matchProfundo = texto.match(/sueñ[oa] profundo.*?(\d+)\s*h(?:.*?(\d+)\s*min)?/);
    if (matchSueno || matchProfundo) {
      resultado.sueno = {};
      if (matchSueno) {
        resultado.sueno.total = `${matchSueno[1]}h ${matchSueno[2] || '0'}m`;
      }
      if (matchProfundo) {
        resultado.sueno.profundo = `${matchProfundo[1]}h ${matchProfundo[2] || '0'}m`;
      }
    }

    // 💊 Medicación
    const matchAspirina = texto.match(/aspirina.*?(\d+)\s*mg/);
    if (matchAspirina) {
      resultado.medicacion = [{ nombre: 'aspirina', dosis: `${matchAspirina[1]}mg` }];
    }

    // 🏃 Ejercicio
    const matchKm = texto.match(/corr[ií]?[oó]?.*?(\d+)\s*km/);
    const matchFC = texto.match(/frecuencia cardíaca.*?(\d+)/);
    if (matchKm || matchFC) {
      resultado.ejercicio = {};
      if (matchKm) resultado.ejercicio.distancia = `${matchKm[1]} km`;
      if (matchFC) resultado.ejercicio.frecuenciaCardiacaPromedio = parseInt(matchFC[1]);
    }

    // 🔬 Presión arterial
    const matchPresion = texto.match(/presi[oó]n.*?(\d{2,3})[^\d]+(\d{2,3})/);
    if (matchPresion) {
      resultado.presion = {
        sistolica: parseInt(matchPresion[1]),
        diastolica: parseInt(matchPresion[2])
      };
    }

    // 🧠 Observaciones (si no encaja en nada más)
    const matchSueño = texto.includes('sueño');
    const matchDolor = texto.includes('dolor');
    if (matchSueño || matchDolor) {
      resultado.observaciones = 'Se detectan referencias generales al estado físico/emocional.';
    }

    this.previsualizacion = resultado;
  }

  guardar() {
    const fecha = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
    const jsonFinal = {
      fecha: fecha,
      categorias: this.previsualizacion
    };
    console.log('JSON listo para guardar:', jsonFinal);
    // Aquí luego podrías llamar a un servicio para enviar a tu backend
  }
}
