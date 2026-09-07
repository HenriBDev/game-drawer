import { ApplicationConfig, inject, provideAppInitializer, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { IocConfig } from '@ui/config/IocConfig';
import { RouterConfig } from '@ui/config/RouterConfig';
import { CacheConfig } from '@ui/config/CacheConfig';

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
				...this.iocConfig.getProviders(),
				provideAppInitializer(async () => await this.configureAppInitialization())
			]
		};
	}

	private async configureAppInitialization(): Promise<void> {
		
		const cacheConfig = inject(CacheConfig);
		await cacheConfig.loadInitialCache();
	}
}
