
import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from '@ui/adapter/input/app/app.component';
import { AppConfig } from '@ui/config/AppConfig';

const appConfig = new AppConfig().build();

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
