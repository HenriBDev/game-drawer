import { Component } from '@angular/core';

import { CarouselComponent } from '@ui/adapter/input/app/components/shared/carousel/carousel.component';
import { FloatingActionButtonComponent } from '@ui/adapter/input/app/components/shared/floating-action-button/floating-action-button.component';

@Component({
  selector: '[app-navbar]',
  imports: [CarouselComponent, FloatingActionButtonComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
