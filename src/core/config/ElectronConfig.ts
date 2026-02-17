import { Event } from "#core/adapter/input/event/Event.js";
import { EVENT_LISTENER_KEY } from "#core/adapter/input/event/decorator/EventListener.js";
import { ReadyEvent } from "#core/adapter/input/event/ReadyEvent.js";
import { DidFinishLoadEvent } from "#core/adapter/input/event/DidFinishLoadEvent.js";

import { ElectronFacade } from "#core/application/facade/ElectronFacade.js";

export class ElectronConfig {

    appEvents: Array<Event> = [];
    electronFacade: ElectronFacade = new ElectronFacade();

    constructor(){

        // App events
        this.appEvents.push(
            new ReadyEvent(), 
            new DidFinishLoadEvent(true)
        );
    }

    build(eventListenerClassInstances: Array<any>): void {
        this.configureAppEvents();
        this.configureIPCEvents(eventListenerClassInstances);
    }

    private configureAppEvents(): void {
        
        for(const event of this.appEvents){
            this.electronFacade.configureAppEvent(event);
        }
    }

    private configureIPCEvents(eventListenerClassInstances: Array<any>): void {
        
        for(const eventListenerClassInstance of eventListenerClassInstances){

            const prototype = Object.getPrototypeOf(eventListenerClassInstance);

            const propertyNames = Object.getOwnPropertyNames(prototype);

            for (const propertyName of propertyNames) {
                
                if (propertyName === "constructor") continue;

                const eventName = Reflect.getMetadata(EVENT_LISTENER_KEY, prototype, propertyName);

                if (!eventName) continue;

                let property = eventListenerClassInstance[propertyName];

                if (typeof property !== "function") {
                    throw new TypeError(
                        `EventListener decorator used on non-function: ${propertyName}`
                    );
                }
                
                const method = property.bind(eventListenerClassInstance);

                this.electronFacade.configureIPCEvent(eventName, method);
            }
        }
    }
}