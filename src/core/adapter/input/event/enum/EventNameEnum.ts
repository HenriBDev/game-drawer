export enum EventNameEnum {
    
    // Application events
    APPLICATION_READY = "ready",
    APPLICATION_DID_FINISH_LOAD = "did-finish-load",

    // IPC events (shared between main and renderer processes, check /preload.cts)
    GAME_COLLECTION_GET_ALL = "game-collection-get-all",
}