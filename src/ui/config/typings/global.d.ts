import { ElectronApi } from '@shared/infra/ElectronApi';

declare global {
    const ElectronApi: ElectronApi;
}

export {};