import { GameCollectionEntity } from "@shared/domain/entity/GameCollectionEntity";

export interface GameCollectionPersistencePort {

    getAllGameCollections(): Array<GameCollectionEntity>;
}

export const GAME_COLLECTION_PERSISTENCE_PORT_TOKEN = 'GameCollectionPersistencePort';