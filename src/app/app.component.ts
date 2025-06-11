import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // ✅ importante aquí
  imports: [RouterOutlet,RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // corregido: styleUrl → styleUrls
})
export class AppComponent {
  title = 'HealthMetrics';
}
