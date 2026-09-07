import { GameCollectionEntity } from "#core/domain/entity/GameCollectionEntity.js";

export class GameCollectionPersistenceIOAdapter {

    getAllGameCollections(): Array<GameCollectionEntity> {
        return [
            new GameCollectionEntity("collection1"), new GameCollectionEntity("collection2"),
            new GameCollectionEntity("collection3"), new GameCollectionEntity("collection4"),
            new GameCollectionEntity("collection5"), new GameCollectionEntity("collection6"),
            new GameCollectionEntity("collection7"), new GameCollectionEntity("collection8"),
            new GameCollectionEntity("collection9"), new GameCollectionEntity("collection10")
        ];
    }
}