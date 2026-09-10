import { Inject, Injectable } from "@angular/core";

import { GAME_COLLECTION_CACHE_PORT_TOKEN, GameCollectionCachePort } from "@ui/adapter/output/port/GameCollectionCachePort";
import { LoggerService } from "@ui/application/service/LoggerService";
import { GameCollectionService } from "@ui/domain/service/GameCollectionService.js";

@Injectable({ providedIn: 'root' })
export class CacheConfig {

    private readonly gameCollectionService: GameCollectionService
    private readonly gameCollectionCacheAdapter: GameCollectionCachePort;
    private readonly logger: LoggerService;

    constructor(
        gameCollectionService: GameCollectionService,
        logger: LoggerService,

        @Inject(GAME_COLLECTION_CACHE_PORT_TOKEN)
        gameCollectionCacheAdapter: GameCollectionCachePort
    ) {

        this.gameCollectionService = gameCollectionService;
        this.logger = logger;
        this.gameCollectionCacheAdapter = gameCollectionCacheAdapter;
    }

    async loadInitialCache(): Promise<void> {

        this.logger.debug('Loading initial cache...');
        await this.loadGameCollections();
    }

    private async loadGameCollections(): Promise<void> {

        this.logger.debug('Loading game collections...');
        await this.gameCollectionService.getAllGameCollections()
            .then(gameCollections => {
                this.logger.debug('Game collections loaded successfully.');
                this.gameCollectionCacheAdapter.setGameCollections(gameCollections);
            })
            .catch(error => this.logger.error('Error loading game collections.', error));
    }
}
