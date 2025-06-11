import { Component, OnInit } from '@angular/core';
import { LabResultService } from '../../services/lab-result.service';
import { LabResult } from '../../models/lab-result.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lab-result-tester',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lab-result-tester.component.html',
})
export class LabResultTesterComponent implements OnInit {
  resultados: LabResult[] = [];
  cargando = true;
  error = false;

  constructor(private labService: LabResultService) {}

  ngOnInit(): void {
    this.labService.findByTipoPrueba('Hemoglobina').subscribe({
      next: (data) => {
        this.resultados = data;
        this.cargando = false;
        console.log('✅ Datos reales:', data);
      },
      error: (err) => {
        this.error = true;
        this.cargando = false;
        console.error('❌ Error al llamar a la API:', err);
      }
    });
  }
}
