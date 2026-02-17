import { GameCollectionEntity } from "#core/domain/entity/GameCollectionEntity.js";

export interface GameCollectionPersistencePort {

    getAllGameCollections(): Array<GameCollectionEntity>;
}