
import { Inject, Injectable } from "@angular/core";
import { GAME_COLLECTION_PERSISTENCE_PORT_TOKEN, GameCollectionPersistencePort } from "@ui/adapter/output/persistence/GameCollectionPersistencePort";
import { GameCollectionModel } from "../model/GameCollectionModel";

@Injectable({providedIn: 'root'})
export class GameCollectionUseCase{
    
    private readonly gameCollectionPersistenceAdapter: GameCollectionPersistencePort;

    constructor(
        @Inject(GAME_COLLECTION_PERSISTENCE_PORT_TOKEN)
        gameCollectionPersistenceAdapter: GameCollectionPersistencePort
    ){
        this.gameCollectionPersistenceAdapter = gameCollectionPersistenceAdapter;
    }

    public async getAllGameCollections(): Promise<Array<GameCollectionModel>> {

        const gameCollections = await this.gameCollectionPersistenceAdapter.getAllGameCollections();
        const mappedGameCollections = gameCollections.map((gameCollection) => { return gameCollection.toModel(); });
        return mappedGameCollections;
    }
}