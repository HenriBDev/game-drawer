import { Component } from '@angular/core';

import { LogoComponent } from '@ui/adapter/input/app/components/shared/logo/logo.component';
import { FooterComponent } from '@ui/adapter/input/app/components/core/main/footer/footer.component';

@Component({
  selector: '[app-main]',
  imports: [LogoComponent, FooterComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
