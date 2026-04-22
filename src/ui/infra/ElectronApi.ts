import { GameCollectionModel } from "@ui/domain/model/GameCollectionModel";

export interface ElectronApi{

    getGameCollections(): Promise<Array<GameCollectionModel>>;
}