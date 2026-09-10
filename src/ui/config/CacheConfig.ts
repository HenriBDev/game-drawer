import { inject, Inject, Injectable } from "@angular/core";
    
import { Logger, LoggerService } from "@ui/application/service/log/LoggerService";
import { GAME_COLLECTION_CACHE_PORT_TOKEN, GameCollectionCachePort } from "@ui/adapter/output/port/GameCollectionCachePort";
import { GameCollectionService } from "@ui/domain/service/GameCollectionService.js";

@Injectable({ providedIn: 'root' })
export class CacheConfig {

    private readonly gameCollectionService: GameCollectionService = inject(GameCollectionService);
    private readonly gameCollectionCacheAdapter: GameCollectionCachePort;
    private readonly logger: Logger = inject(LoggerService).createLogger(this);

    constructor(
        @Inject(GAME_COLLECTION_CACHE_PORT_TOKEN)
        gameCollectionCacheAdapter: GameCollectionCachePort
    ) {
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
