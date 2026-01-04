import { Provider } from '@angular/core';

import { GameCollectionPersistenceElectronAdapter } from '@ui/adapter/output/persistence/GameCollectionPersistenceElectronAdapter';
import { GAME_COLLECTION_PERSISTENCE_PORT_TOKEN } from '@ui/adapter/output/persistence/GameCollectionPersistencePort';

export class IocConfig {

    private readonly providers: Array<Provider>;

    constructor() {

        this.providers = [
            {
                provide: GAME_COLLECTION_PERSISTENCE_PORT_TOKEN,
                useClass: GameCollectionPersistenceElectronAdapter
            }
        ];
    }

    public getProviders(): Array<Provider> { return this.providers; }
}
