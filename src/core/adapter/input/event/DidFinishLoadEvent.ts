import { Event } from "#core/adapter/input/event/Event.js";
import { WindowContext } from "#core/application/context/WindowContext.js";

export class DidFinishLoadEvent implements Event {

    name = "did-finish-load" as const;
    
    once: boolean;

    constructor(once: boolean){
        this.once = once;
    }

    listenerCallback() {
        WindowContext.MainWindow.show();
    };
}