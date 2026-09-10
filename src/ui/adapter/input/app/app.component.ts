import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Logger, LoggerService } from '@ui/application/service/log/LoggerService';

@Component({
	selector: '[app-root]',
	imports: [RouterOutlet],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

	title = 'game-drawer';

	private readonly logger: Logger = inject(LoggerService).createLogger(this);

	ngOnInit(): void {
		this.logger.debug('AppComponent initialized');
	}
}
