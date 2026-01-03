import { Component } from '@angular/core';
import { CarouselButtonComponent } from "./carousel-button/carousel-button.component";

@Component({
  selector: '[app-carousel]',
  imports: [CarouselButtonComponent],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {

}
