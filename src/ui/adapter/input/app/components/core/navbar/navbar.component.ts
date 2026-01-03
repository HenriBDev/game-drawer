import { Component } from '@angular/core';
import { CarouselComponent } from '../../shared/carousel/carousel.component';
import { FloatingActionButtonComponent } from '../../shared/floating-action-button/floating-action-button.component';

@Component({
  selector: '[app-navbar]',
  imports: [CarouselComponent, FloatingActionButtonComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
