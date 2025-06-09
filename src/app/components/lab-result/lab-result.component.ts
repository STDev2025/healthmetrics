import { Component } from '@angular/core';
import {LabResult} from '../../models/lab-result.model';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-lab-result',
  imports: [
    FormsModule
  ],
  standalone: true,
  templateUrl: './lab-result.component.html',
  styleUrl: './lab-result.component.css'
})
export class LabResultComponent {
  resultados: LabResult[] = [
    {
      id: '1',
      fechaPrueba: '2025-06-01',
      tipoPrueba: 'Hemoglobina',
      rangoNormal: '13 - 17 g/dL',
      resultado: 15.2,
      interpretacion: 'Normal'
    },
    {
      id: '2',
      fechaPrueba: '2025-06-02',
      tipoPrueba: 'Glucosa',
      rangoNormal: '70 - 110 mg/dL',
      resultado: 95,
      interpretacion: 'Normal'
    }
  ];

  nuevoResultado: LabResult = {
    id: '',
    fechaPrueba: '',
    tipoPrueba: '',
    rangoNormal: '',
    resultado: 0,
    interpretacion: ''
  };

  agregarResultado() {
    const nuevo = { ...this.nuevoResultado, id: Date.now().toString() };
    this.resultados.push(nuevo);
    this.nuevoResultado = {
      id: '',
      fechaPrueba: '',
      tipoPrueba: '',
      rangoNormal: '',
      resultado: 0,
      interpretacion: ''
    };
  }

}
