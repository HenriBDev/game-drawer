import { GameCollectionDto } from "@ui/domain/dto/GameCollectionDto.js";

export interface ElectronApi{

    getGameCollections(): Promise<Array<GameCollectionDto>>;
}