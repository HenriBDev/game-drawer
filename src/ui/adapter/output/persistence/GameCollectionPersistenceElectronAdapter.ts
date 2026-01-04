import { GameCollectionPersistencePort } from "@ui/adapter/output/persistence/GameCollectionPersistencePort";
import { GameCollectionEntity } from "@shared/domain/entity/GameCollectionEntity";

export class GameCollectionPersistenceElectronAdapter implements GameCollectionPersistencePort {

    getAllGameCollections(): Array<GameCollectionEntity> {

        let gameCollection = ElectronApi.getGameCollections();
        return gameCollection;
    }
}