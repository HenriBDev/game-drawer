import { GameCollectionModel } from "@ui/domain/model/GameCollectionModel";

export class GameCollectionDto{

    name: string;

    public toModel(): GameCollectionModel {
        const model = new GameCollectionModel();
        model.name = this.name;
        return model;
    }
}