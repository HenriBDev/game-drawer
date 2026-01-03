
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './adapter/input/app/app.config';
import { AppComponent } from './adapter/input/app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
