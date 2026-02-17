import { contextBridge, ipcRenderer } from 'electron';

class ElectronPreloadConfig {
    
    build(): void {
        
        const electronApi = {

            // Shared event names with main process (adapter.input.event.enum.EventNameEnum)
            // Shared event args and return types with main process controllers (adapter.input.controller)
            getGameCollections: () => ipcRenderer.invoke("game-collection-get-all")

        };
        
        contextBridge.exposeInMainWorld('ElectronApi', electronApi);
    }
}

new ElectronPreloadConfig().build();
