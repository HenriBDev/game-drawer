import { Controller } from "#core/adapter/input/controller/Controller.js";

import { EventNameEnum } from "#core/adapter/input/event/enum/EventNameEnum.js";
import { EventListener } from "#core/adapter/input/event/decorator/EventListener.js";

import { GameCollectionDto } from "#core/domain/dto/GameCollectionDto.js";
import { GameCollectionUseCase } from "#core/domain/usecase/GameCollectionUseCase.js";

export class GameCollectionController implements Controller {

    private readonly gameCollectionUseCase: GameCollectionUseCase;

    constructor(gameCollectionUseCase: GameCollectionUseCase){
        this.gameCollectionUseCase = gameCollectionUseCase;
    }

    @EventListener(EventNameEnum.GAME_COLLECTION_GET_ALL)
    getGameCollections(): Array<GameCollectionDto> { 
        
        return [];
    }
}