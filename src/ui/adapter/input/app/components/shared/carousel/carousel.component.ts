import { Component, input, InputSignal, OnInit } from '@angular/core';

import { CarouselButtonComponent } from "@ui/adapter/input/app/components/shared/carousel/carousel-button/carousel-button.component";

@Component({
	selector: '[app-carousel]',
	imports: [CarouselButtonComponent],
	templateUrl: './carousel.component.html',
	styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements OnInit {

	items: InputSignal<Array<string> | undefined> = input.required();

	ngOnInit(): void {
		console.log(this.items());
	}

}
