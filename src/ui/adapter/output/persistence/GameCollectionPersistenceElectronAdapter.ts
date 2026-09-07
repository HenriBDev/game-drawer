import { GameCollectionPersistencePort } from "@ui/adapter/output/port/GameCollectionPersistencePort";
import { GameCollectionModel } from "@ui/domain/model/GameCollectionModel";

export class GameCollectionPersistenceElectronAdapter implements GameCollectionPersistencePort {

    async getAllGameCollections(): Promise<Array<GameCollectionModel>> {

        return ElectronApi.getGameCollections();
    }
}