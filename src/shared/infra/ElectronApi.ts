import { GameCollectionEntity } from "../domain/entity/GameCollectionEntity";

export interface ElectronApi{

    getGameCollections(): Array<GameCollectionEntity>;
}