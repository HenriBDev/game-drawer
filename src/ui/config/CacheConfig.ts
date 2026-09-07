import { Inject, Injectable } from "@angular/core";

import { GAME_COLLECTION_CACHE_PORT_TOKEN, GameCollectionCachePort } from "@ui/adapter/output/port/GameCollectionCachePort";
import { GameCollectionService } from "@ui/domain/service/GameCollectionService.js";

@Injectable({ providedIn: 'root' })
export class CacheConfig {

    private readonly gameCollectionService: GameCollectionService
    private readonly gameCollectionCacheAdapter: GameCollectionCachePort;

    constructor(
        gameCollectionService: GameCollectionService,

        @Inject(GAME_COLLECTION_CACHE_PORT_TOKEN)
        gameCollectionCacheAdapter: GameCollectionCachePort
    ) {
        this.gameCollectionService = gameCollectionService;
        this.gameCollectionCacheAdapter = gameCollectionCacheAdapter;
    }

    async loadInitialCache(): Promise<void> {
        await this.loadGameCollections();
    }

    private async loadGameCollections(): Promise<void> {
        await this.gameCollectionService.getAllGameCollections()
            .then(gameCollections => {
                this.gameCollectionCacheAdapter.setGameCollections(gameCollections);
                this.gameCollectionCacheAdapter.setSelectedGameCollection(gameCollections[0]);
            });
    }
}
