import { Injectable, Signal, signal, WritableSignal } from '@angular/core';

import { GameCollectionModel } from "@ui/domain/model/GameCollectionModel";
import { GameCollectionCachePort } from "@ui/adapter/output/port/GameCollectionCachePort";

@Injectable({providedIn: 'root'})
export class GameCollectionMemoryCacheAdapter implements GameCollectionCachePort {

    private readonly gameCollections
        : WritableSignal<Array<GameCollectionModel>> 
        = signal([]);

    private readonly selectedGameCollection
        : WritableSignal<GameCollectionModel | undefined> 
        = signal(undefined);

    public readonly getGameCollections
        : Signal<Array<GameCollectionModel> | undefined> 
        = this.gameCollections.asReadonly();

    public readonly getSelectedGameCollection
        : Signal<GameCollectionModel | undefined> 
        = this.selectedGameCollection.asReadonly();

    public setGameCollections(gameCollections: Array<GameCollectionModel>): void {
        this.gameCollections.set(gameCollections);
    }
    public setSelectedGameCollection(gameCollection: GameCollectionModel | undefined): void {
        this.selectedGameCollection.set(gameCollection);
    }
}