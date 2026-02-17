import { Controller } from "#core/adapter/input/controller/Controller.js";
import { GameCollectionController } from "#core/adapter/input/controller/GameCollectionController.js";
import { GameCollectionPersistencePort } from "#core/adapter/output/port/GameCollectionPersistencePort.js";
import { GameCollectionPersistenceIOAdapter } from "#core/adapter/output/persistence/io/GameCollectionPersistenceIOAdapter.js";
import { GameCollectionUseCase } from "#core/domain/usecase/GameCollectionUseCase.js";

export class IocConfig {

    controllers: Array<Controller> = [];

    constructor() {

        // Output adapters
        const gameCollectionPersistenceAdapter: GameCollectionPersistencePort = new GameCollectionPersistenceIOAdapter();

        // Use cases
        const gameCollectionUseCase = new GameCollectionUseCase(gameCollectionPersistenceAdapter);

        // Input adapters
        this.controllers.push(new GameCollectionController(gameCollectionUseCase));
    }

    getControllers(): Array<Controller> { return this.controllers; }
}