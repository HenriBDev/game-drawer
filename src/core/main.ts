import { ElectronConfig } from "#core/config/ElectronConfig.js";
import { IocConfig } from "#core/config/IocConfig.js";

export class Main {

    static run(): void {

        const iocConfig = new IocConfig();
        new ElectronConfig().build(iocConfig.getControllers());
        
    }
}

Main.run();