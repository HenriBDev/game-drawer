import { Signal } from "@angular/core";

import { GameCollectionModel } from "@ui/domain/model/GameCollectionModel";

export interface GameCollectionCachePort {

    getGameCollections: Signal<Array<GameCollectionModel> | undefined>;

    getSelectedGameCollection: Signal<GameCollectionModel | undefined>;

    setGameCollections(gameCollections: Array<GameCollectionModel> | undefined): void;
    
    setSelectedGameCollection(gameCollection: GameCollectionModel | undefined): void;
}

export const GAME_COLLECTION_CACHE_PORT_TOKEN = 'GameCollectionCachePort';