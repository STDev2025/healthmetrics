import { Routes } from '@angular/router';
import { LabResultTesterComponent } from './components/lab-result-tester/lab-result-tester.component';
import { HealthLogComponent } from './components/health-log/health-log.component';
import { LabResultComponent } from './components/lab-result/lab-result.component';
import { ProgressTrackerComponent } from './components/progress-tracker/progress-tracker.component';


export const routes: Routes = [
  { path: '', redirectTo: 'tester', pathMatch: 'full' },
  { path: 'tester', component: LabResultTesterComponent },
  { path: 'health-log', component: HealthLogComponent },
  { path: 'lab-result', component: LabResultComponent },
  { path: 'lab-result/:id', component: LabResultComponent },
  { path: 'progreso', component: ProgressTrackerComponent }
];
