import { GameCollectionDto } from "@ui/domain/dto/GameCollectionDto";

export interface GameCollectionPersistencePort {

    getAllGameCollections(): Promise<Array<GameCollectionDto>>;
}

export const GAME_COLLECTION_PERSISTENCE_PORT_TOKEN = 'GameCollectionPersistencePort';