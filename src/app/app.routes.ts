import { Routes } from '@angular/router';
import { LabResultTesterComponent } from './components/lab-result-tester/lab-result-tester.component';
import { HealthLogComponent } from './components/health-log/health-log.component';

export const routes: Routes = [
  { path: '', redirectTo: 'tester', pathMatch: 'full' },
  { path: 'tester', component: LabResultTesterComponent },
  { path: 'health-log', component: HealthLogComponent }
];
