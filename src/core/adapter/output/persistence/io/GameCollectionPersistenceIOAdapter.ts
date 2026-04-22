import { GameCollectionEntity } from "#core/domain/entity/GameCollectionEntity.js";

export class GameCollectionPersistenceIOAdapter {

    getAllGameCollections(): Array<GameCollectionEntity> {
        return [new GameCollectionEntity("collection1"), new GameCollectionEntity("collection2")];
    }
}