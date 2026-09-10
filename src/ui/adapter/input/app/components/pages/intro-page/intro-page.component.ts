import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LogoComponent } from '@ui/adapter/input/app/components/shared/logo/logo.component';
import { Logger, LoggerService } from '@ui/application/service/log/LoggerService';

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
	private readonly logger: Logger = inject(LoggerService).createLogger(this);

	ngOnInit(): void {
		this.logger.debug('IntroPageComponent initialized.');
	}

	onClickHandler = () => {
		this.router.navigate(['/game-selection']);
	}

}
