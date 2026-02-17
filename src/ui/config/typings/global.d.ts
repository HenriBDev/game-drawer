import { ElectronApi } from '@ui/infra/ElectronApi';

declare global {
    const ElectronApi: ElectronApi;
}

export {};