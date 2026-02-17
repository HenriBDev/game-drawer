import { Event } from "#core/adapter/input/event/Event.js";
import { EventNameEnum } from "#core/adapter/input/event/enum/EventNameEnum.js";
import { WindowContext } from "#core/application/context/WindowContext.js";

export class DidFinishLoadEvent implements Event {

    name = EventNameEnum.APPLICATION_DID_FINISH_LOAD;
    
    once: boolean;

    constructor(once: boolean){
        this.once = once;
    }

    listenerCallback() {
        WindowContext.MainWindow.show();
    };
}