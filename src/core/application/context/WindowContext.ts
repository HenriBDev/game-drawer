import { WindowEntity } from "#core/application/entity/WindowEntity.js";
import { ElectronFacade } from "#core/application/facade/ElectronFacade.js";

class WindowContextClass {

    MainWindow: WindowEntity;
    
    private readonly electronFacade = new ElectronFacade();

    public init(): void {
        
        this.MainWindow = WindowEntity.builder()
            .fullscreen(true)
            .show(true)
            .build(this.electronFacade.buildMainBrowserWindow());
    }
}

export const WindowContext = new WindowContextClass();