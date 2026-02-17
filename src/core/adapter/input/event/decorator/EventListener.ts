import "reflect-metadata";

const EVENT_LISTENER_KEY = Symbol("event_listener");

export function EventListener(eventName: string): Function {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        Reflect.defineMetadata(EVENT_LISTENER_KEY, eventName, target, propertyKey);
    };
}

export { EVENT_LISTENER_KEY };