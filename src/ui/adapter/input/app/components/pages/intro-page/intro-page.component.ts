import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LogoComponent } from '@ui/adapter/input/app/components/shared/logo/logo.component';
import { LoggerService } from '@ui/application/service/LoggerService';

@Component({
    selector: 'app-intro-page',
    imports: [LogoComponent],
	host: {
		"(click)": "onClickHandler()"
	},
    templateUrl: './intro-page.component.html',
    styleUrl: './intro-page.component.scss',
})
export class IntroPageComponent implements OnInit {

	private readonly router: Router = inject(Router);
	private readonly logger: LoggerService = inject(LoggerService);

	ngOnInit(): void {
		this.logger.debug('IntroPageComponent initialized.');
	}

	onClickHandler = () => {
		this.router.navigate(['/game-selection']);
	}

}
