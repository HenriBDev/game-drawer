
import { Inject, Injectable } from "@angular/core";
import { GameCollectionDto } from "@ui/domain/dto/GameCollectionDto";
import { GAME_COLLECTION_PERSISTENCE_PORT_TOKEN, GameCollectionPersistencePort } from "@ui/adapter/output/persistence/GameCollectionPersistencePort";

@Injectable({providedIn: 'root'})
export class GameCollectionUseCase{
    
    private readonly gameCollectionPersistenceAdapter: GameCollectionPersistencePort;

    constructor(
        @Inject(GAME_COLLECTION_PERSISTENCE_PORT_TOKEN)
        gameCollectionPersistenceAdapter: GameCollectionPersistencePort
    ){
        this.gameCollectionPersistenceAdapter = gameCollectionPersistenceAdapter;
    }

    public async getAllGameCollections(): Promise<Array<GameCollectionDto>> {

        return await this.gameCollectionPersistenceAdapter.getAllGameCollections();
    }
}