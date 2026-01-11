export interface Event {

    readonly name: any;

    readonly once: boolean;
    
    readonly listenerCallback: (...args: any[]) => void;
}