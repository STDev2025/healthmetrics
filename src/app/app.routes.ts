import { Routes } from '@angular/router';
import { LabResultTesterComponent } from './components/lab-result-tester/lab-result-tester.component';

export const routes: Routes = [
  { path: '', redirectTo: 'tester', pathMatch: 'full' },
  { path: 'tester', component: LabResultTesterComponent }
];
