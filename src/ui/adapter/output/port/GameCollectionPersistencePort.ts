import { GameCollectionModel } from "@ui/domain/model/GameCollectionModel";

export interface GameCollectionPersistencePort {

    getAllGameCollections(): Promise<Array<GameCollectionModel>>;
}

export const GAME_COLLECTION_PERSISTENCE_PORT_TOKEN = 'GameCollectionsPersistencePort';