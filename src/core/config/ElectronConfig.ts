import { ReadyEvent } from "#core/adapter/input/event/ReadyEvent.js";
import { Event } from "#core/adapter/input/event/Event.js";
import { ElectronFacade } from "#core/application/facade/ElectronFacade.js";

export class ElectronConfig {

    appEvents: Array<Event> = [];
    electronFacade: ElectronFacade = new ElectronFacade();

    constructor(){
        this.appEvents.push(new ReadyEvent());
    }

    build(): void {
        this.configureAppEvents();
    }

    private configureAppEvents(): void {
        
        for(const event of this.appEvents){
            this.electronFacade.configureAppEvent(event);
        }
    }
}