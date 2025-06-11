import {Component, computed, signal} from '@angular/core';
import {LabResult} from '../../models/lab-result.model';
import {FormsModule} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

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

  // Datos base
  resultados = signal<LabResult[]>([
    { id: '1', fechaPrueba: '2025-06-01', tipoPrueba: 'Hemoglobina', rangoNormal: '13 - 17 g/dL', resultado: 15.2, interpretacion: 'Normal' },
    { id: '2', fechaPrueba: '2025-06-02', tipoPrueba: 'Glucosa', rangoNormal: '70 - 110 mg/dL', resultado: 95, interpretacion: 'Normal' }
  ]);

  // Filtro
  filtro = signal<string>(''); // 👈 este es reactivo

  // Lista filtrada automáticamente (recalcula si cambia `filtro` o `resultados`)
  resultadosFiltrados = computed(() =>
    this.resultados().filter(r =>
      r.tipoPrueba.toLowerCase().includes(this.filtro().toLowerCase())
    )
  );

  username = "Froyo";

  nuevoResultado: LabResult = {
    id: '',
    fechaPrueba: '',
    tipoPrueba: '',
    rangoNormal: '',
    resultado: 0,
    interpretacion: ''
  };

  agregarResultado() {
    const nuevo : LabResult = { ...this.nuevoResultado, id: Date.now().toString() };

    // 👇 Obtener el array actual, agregarle el nuevo resultado y actualizarlo
    this.resultados.set([...this.resultados(), nuevo]);

    // Reiniciar campos
    this.nuevoResultado = {
      id: '',
      fechaPrueba: '',
      tipoPrueba: '',
      rangoNormal: '',
      resultado: 0,
      interpretacion: ''
    };
  }

  id: string | null = null;
  resultadoFiltrado: LabResult | undefined;

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {

      this.id = params.get('id');
      if (this.id) {
        this.resultadoFiltrado = this.resultados().find(r => r.id === this.id);
      }
      console.log('ID recibido en la ruta:', this.id);

    });
  }

}
