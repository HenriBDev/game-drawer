import { GameCollectionPersistencePort } from "#core/adapter/output/port/GameCollectionPersistencePort.js";
import { GameCollectionResponseDto } from "#core/domain/dto/GameCollectionResponseDto.js";

export class GameCollectionUseCase {

    private readonly gameCollectionPersistenceAdapter: GameCollectionPersistencePort;

    constructor(
        gameCollectionPersistenceAdapter: GameCollectionPersistencePort
    ){
        this.gameCollectionPersistenceAdapter = gameCollectionPersistenceAdapter;
    }

    getAllGameCollections(): Array<GameCollectionResponseDto> {
        const gameCollectionEntities = this.gameCollectionPersistenceAdapter.getAllGameCollections();
        return gameCollectionEntities.map((gameCollectionEntity) => new GameCollectionResponseDto(gameCollectionEntity.name));
    }
}