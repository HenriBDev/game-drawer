import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { IocConfig } from '@ui/config/IocConfig';
import { RouterConfig } from '@ui/config/RouterConfig';

export class AppConfig{

	private readonly iocConfig: IocConfig;
	private readonly routeConfig: RouterConfig;

	constructor(){

		this.iocConfig = new IocConfig();
		this.routeConfig = new RouterConfig();
	}

	public build(): ApplicationConfig {

		return {

			providers: [
				provideZoneChangeDetection({ eventCoalescing: true }), 
				provideRouter(this.routeConfig.getRoutes()),
				...this.iocConfig.getProviders()
			]
		};
	}
}
