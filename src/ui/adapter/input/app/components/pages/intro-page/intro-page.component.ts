import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { LogoComponent } from '@ui/adapter/input/app/components/shared/logo/logo.component';

@Component({
    selector: 'app-intro-page',
    imports: [LogoComponent],
	host: {
		"(click)": "onClickHandler()"
	},
    templateUrl: './intro-page.component.html',
    styleUrl: './intro-page.component.scss',
})
export class IntroPageComponent {

	private readonly router: Router = inject(Router);

	onClickHandler = () => {
		this.router.navigate(['/game-selection']);
	}

}
