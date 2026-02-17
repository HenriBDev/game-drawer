import { GameCollectionPersistencePort } from "#core/adapter/output/port/GameCollectionPersistencePort.js";

export class GameCollectionUseCase {

    private readonly gameCollectionPersistenceAdapter: GameCollectionPersistencePort;

    constructor(
        gameCollectionPersistenceAdapter: GameCollectionPersistencePort
    ){
        this.gameCollectionPersistenceAdapter = gameCollectionPersistenceAdapter;
    }
}