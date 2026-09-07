import { Component, computed, Inject, OnInit, Signal } from '@angular/core';

import { CarouselComponent } from '@ui/adapter/input/app/components/shared/carousel/carousel.component';
import { FloatingActionButtonComponent } from '@ui/adapter/input/app/components/shared/floating-action-button/floating-action-button.component';
import { GameCollectionCachePort, GAME_COLLECTION_CACHE_PORT_TOKEN } from '@ui/adapter/output/port/GameCollectionCachePort';

@Component({
	selector: '[app-navbar]',
	imports: [CarouselComponent, FloatingActionButtonComponent],
	templateUrl: './navbar.component.html',
	styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

	private readonly gameCollectionsCacheAdapter: GameCollectionCachePort;
	protected readonly gameCollectionsNames: Signal<Array<string> | undefined>;

	constructor(
		@Inject(GAME_COLLECTION_CACHE_PORT_TOKEN)
		gameCollectionsCacheAdapter: GameCollectionCachePort
	) {
		this.gameCollectionsCacheAdapter = gameCollectionsCacheAdapter;
		this.gameCollectionsNames = computed(() => this.gameCollectionsCacheAdapter.getGameCollections()
			?.map((gameCollection) => gameCollection.name)
		);
	}
	
	ngOnInit(): void {
		console.log('NavbarComponent initialized');
	}
}