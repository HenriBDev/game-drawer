import { Event } from "#core/adapter/input/event/Event.js";
import { WindowContext } from "#core/application/context/WindowContext.js";

export class ReadyEvent implements Event {

    name = "ready" as const;

    once: boolean = true;

    listenerCallback() {
        WindowContext.init();
    };
}