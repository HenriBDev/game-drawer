import { GameCollectionPersistencePort } from "@ui/adapter/output/persistence/GameCollectionPersistencePort";
import { GameCollectionDto } from "@ui/domain/dto/GameCollectionDto";

export class GameCollectionPersistenceElectronAdapter implements GameCollectionPersistencePort {

    async getAllGameCollections(): Promise<Array<GameCollectionDto>> {

        return ElectronApi.getGameCollections();
    }
}