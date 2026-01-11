import { BrowserWindow } from "electron";

export class WindowEntity {

    fullscreenFlag: boolean = false;
    showFlag: boolean = true;
    instance: BrowserWindow;

    static builder(): Builder {
        return new Builder();
    }

    show(): void {
        this.instance.show();
    }
}

class Builder {

    private windowFullscreenFlag: boolean = false;
    private windowShowFlag: boolean = true;

    fullscreen(fullscreen: boolean): Builder {
        this.windowFullscreenFlag = fullscreen;
        return this;
    }

    show(show: boolean): Builder {
        this.windowShowFlag = show;
        return this;
    }

    build(instance: BrowserWindow): WindowEntity {
        const entity = new WindowEntity();
        entity.instance = instance;
        entity.fullscreenFlag = this.windowFullscreenFlag;
        entity.showFlag = this.windowShowFlag;
        return entity;
    }
}

