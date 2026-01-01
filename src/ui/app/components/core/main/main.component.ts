import { Component } from '@angular/core';
import { LogoComponent } from '../../shared/logo/logo.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: '[app-main]',
  imports: [LogoComponent, FooterComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
