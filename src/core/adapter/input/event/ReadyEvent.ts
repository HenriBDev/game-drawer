import { Event } from "#core/adapter/input/event/Event.js";
import { EventNameEnum } from "#core/adapter/input/event/enum/EventNameEnum.js";
import { WindowContext } from "#core/application/context/WindowContext.js";

export class ReadyEvent implements Event {

    name = EventNameEnum.APPLICATION_READY;

    once: boolean = true;

    listenerCallback() {
        WindowContext.init();
    };
}