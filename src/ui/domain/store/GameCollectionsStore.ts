import { BehaviorSubject, Observable } from 'rxjs';

import { GameCollectionModel } from "@ui/domain/model/GameCollectionModel";
import { GameCollectionUseCase } from "@ui/domain/usecase/GameCollectionUseCase";
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class GameCollectionsStore {

    private readonly gameCollectionsUseCase: GameCollectionUseCase;
    private readonly gameCollectionsSubject: BehaviorSubject<Array<GameCollectionModel>>;
    private readonly gameCollections: Observable<Array<GameCollectionModel>>;

    constructor(gameCollectionsUseCase: GameCollectionUseCase) {
        this.gameCollectionsUseCase = gameCollectionsUseCase;
        this.gameCollectionsSubject = new BehaviorSubject<Array<GameCollectionModel>>([]);
        this.gameCollections = this.gameCollectionsSubject.asObservable();
        this.update();
    }

    public update(): void {
        this.gameCollectionsUseCase.getAllGameCollections().then((gameCollections) => {
            this.gameCollectionsSubject.next(gameCollections);
        });
    }

    public getGameCollections(): Observable<Array<GameCollectionModel>> {
        return this.gameCollections;
    }
}