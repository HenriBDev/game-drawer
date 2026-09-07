import { Provider } from '@angular/core';

import { GameCollectionPersistenceElectronAdapter } from '@ui/adapter/output/persistence/GameCollectionPersistenceElectronAdapter';
import { GAME_COLLECTION_PERSISTENCE_PORT_TOKEN } from '@ui/adapter/output/port/GameCollectionPersistencePort';
import { GameCollectionMemoryCacheAdapter } from '@ui/adapter/output/cache/GameCollectionMemoryCacheAdapter';
import { GAME_COLLECTION_CACHE_PORT_TOKEN } from '@ui/adapter/output/port/GameCollectionCachePort';

export class IocConfig {

    private readonly providers: Array<Provider>;

    constructor() {

        this.providers = [
            {
                provide: GAME_COLLECTION_PERSISTENCE_PORT_TOKEN,
                useClass: GameCollectionPersistenceElectronAdapter
            },
            {
                provide: GAME_COLLECTION_CACHE_PORT_TOKEN,
                useClass: GameCollectionMemoryCacheAdapter
            }
        ];
    }

    public getProviders(): Array<Provider> { return this.providers; }
}
