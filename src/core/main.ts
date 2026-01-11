import { ElectronConfig } from "#core/config/ElectronConfig.js";

export class Main {

    public static run(): void {

        new ElectronConfig().build();
        
    }
}

Main.run();