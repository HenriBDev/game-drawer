import { GameCollectionModel } from "@ui/domain/model/GameCollectionModel";
import { Inject, Injectable, signal, WritableSignal } from '@angular/core';
import { GAME_COLLECTION_PERSISTENCE_PORT_TOKEN, GameCollectionPersistencePort } from "@ui/adapter/output/persistence/GameCollectionPersistencePort";

@Injectable({providedIn: 'root'})
export class GameCollectionsStore {

    private readonly gameCollectionsPersistenceAdapter: GameCollectionPersistencePort;
    private readonly gameCollections: WritableSignal<Array<GameCollectionModel>>;

    constructor(
        @Inject(GAME_COLLECTION_PERSISTENCE_PORT_TOKEN)
        gameCollectionPersistenceAdapter: GameCollectionPersistencePort
    ) {
        this.gameCollectionsPersistenceAdapter = gameCollectionPersistenceAdapter;
        this.gameCollections = signal(new Array<GameCollectionModel>());
        this.update();
    }

    public update(): void {
        this.gameCollectionsPersistenceAdapter.getAllGameCollections().then((gameCollections) => {
            this.gameCollections.update(() => gameCollections);
        });
    }

    public getGameCollections(): WritableSignal<Array<GameCollectionModel>> {
        return this.gameCollections;
    }
}