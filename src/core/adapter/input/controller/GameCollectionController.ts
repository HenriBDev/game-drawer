import { Controller } from "#core/adapter/input/controller/Controller.js";

import { EventNameEnum } from "#core/adapter/input/event/enum/EventNameEnum.js";
import { EventListener } from "#core/adapter/input/event/decorator/EventListener.js";

import { GameCollectionResponseDto } from "#core/domain/dto/GameCollectionResponseDto.js";
import { GameCollectionUseCase } from "#core/domain/usecase/GameCollectionUseCase.js";

export class GameCollectionController implements Controller {

    private readonly gameCollectionUseCase: GameCollectionUseCase;

    constructor(gameCollectionUseCase: GameCollectionUseCase){
        this.gameCollectionUseCase = gameCollectionUseCase;
    }

    @EventListener(EventNameEnum.GAME_COLLECTION_GET_ALL)
    getGameCollections(): Array<GameCollectionResponseDto> { 
        
        return this.gameCollectionUseCase.getAllGameCollections();
    }
}