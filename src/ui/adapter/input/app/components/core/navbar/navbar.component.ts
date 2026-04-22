import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';

import { CarouselComponent } from '@ui/adapter/input/app/components/shared/carousel/carousel.component';
import { FloatingActionButtonComponent } from '@ui/adapter/input/app/components/shared/floating-action-button/floating-action-button.component';
import { GameCollectionModel } from '@ui/domain/model/GameCollectionModel';
import { GameCollectionsStore } from '@ui/domain/store/GameCollectionsStore';

@Component({
	selector: '[app-navbar]',
	imports: [CarouselComponent, FloatingActionButtonComponent],
	templateUrl: './navbar.component.html',
	styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

	private readonly gameCollectionsStore: GameCollectionsStore;
	private readonly gameCollections: WritableSignal<Array<GameCollectionModel>>;
	protected readonly gameCollectionsNames: Signal<Array<string>> = computed(this.updateGameCollectionNames);

	constructor(gameCollectionsStore: GameCollectionsStore) {
		this.gameCollectionsStore = gameCollectionsStore;
		this.gameCollections = this.gameCollectionsStore.getGameCollections();
	}

	updateGameCollectionNames(): Array<string> {
		return this.gameCollections().map((gameCollection) => gameCollection.name);
	}
}