import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

//Usas bootstrapApplication → esto reemplaza NgModule
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
