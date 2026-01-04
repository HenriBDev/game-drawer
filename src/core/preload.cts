import { contextBridge } from 'electron';
import { ElectronApi } from '@shared/infra/ElectronApi';

const electronApi: ElectronApi = {

    getGameCollections: () => {
        return [];
    }
};

contextBridge.exposeInMainWorld('ElectronApi', electronApi);