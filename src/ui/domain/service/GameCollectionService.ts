import { GameCollectionModel } from "@ui/domain/model/GameCollectionModel";
import { Inject, Injectable } from '@angular/core';
import { GAME_COLLECTION_PERSISTENCE_PORT_TOKEN, GameCollectionPersistencePort } from "@ui/adapter/output/port/GameCollectionPersistencePort";

@Injectable({providedIn: 'root'})
export class GameCollectionService {

    private readonly gameCollectionPersistenceAdapter: GameCollectionPersistencePort;

    constructor(
        @Inject(GAME_COLLECTION_PERSISTENCE_PORT_TOKEN)
        gameCollectionPersistenceAdapter: GameCollectionPersistencePort
    ) {
        this.gameCollectionPersistenceAdapter = gameCollectionPersistenceAdapter;
    }

    getAllGameCollections(): Promise<Array<GameCollectionModel>> {
        return this.gameCollectionPersistenceAdapter.getAllGameCollections();
    }
}