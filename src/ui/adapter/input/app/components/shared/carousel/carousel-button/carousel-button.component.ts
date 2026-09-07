import { Component, input, InputSignal } from '@angular/core';

@Component({
	selector: '[app-carousel-button]',
	imports: [],
	templateUrl: './carousel-button.component.html',
	styleUrl: './carousel-button.component.scss'
})
export class CarouselButtonComponent {

	item: InputSignal<string | undefined> = input.required();
	onClickHandler: InputSignal<(value: string | undefined) => void> = input.required();

}
