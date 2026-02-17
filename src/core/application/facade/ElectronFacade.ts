import path from 'node:path';
import { app, BrowserWindow, ipcMain } from "electron";

import { Event } from "#core/adapter/input/event/Event.js";
import { DidFinishLoadEvent } from "#core/adapter/input/event/DidFinishLoadEvent.js";
import { EnvironmentFacade } from "#core/application/facade/EnvironmentFacade.js";
import { EnvironmentEnum } from '../enum/EnvironmentEnum.js';
import { EventNameEnum } from '#core/adapter/input/event/enum/EventNameEnum.js';

export class ElectronFacade {

    buildBrowserWindow(
        fullscreen: boolean,
        show: boolean,
        preloadPath: string | undefined = undefined,
    ): BrowserWindow {

        const webPreferences: Electron.WebPreferences = {};

        if(preloadPath){
            webPreferences.preload = preloadPath;
        }

        const browserWindow = new BrowserWindow({
            fullscreen: fullscreen,
            show: show,
            webPreferences: webPreferences
        });

        return browserWindow;
    }

    buildMainBrowserWindow(): BrowserWindow {

        const env = EnvironmentFacade.getEnvironment();
        
        const browserWindow = this.buildBrowserWindow(true, false, path.join(app.getAppPath(),
            'dist', 'core', 'preload.cjs'
        ));
        
        if(env === EnvironmentEnum.DEVELOPMENT){
            browserWindow.loadURL('http://localhost:4200');
        }
        else{
            browserWindow.loadFile(path.join(app.getAppPath(), 
                'dist', 'ui', 'browser', 'index.html'
            ));
        }

        this.configureWebContentsEvent(browserWindow.webContents, new DidFinishLoadEvent(true));
        
        return browserWindow;
    }

    configureAppEvent(event: Event): void {
        
        if(event.once){
            app.once(event.name, event.listenerCallback);
        }
        else{
            app.on(event.name, event.listenerCallback);
        }
    }

    configureIPCEvent(eventName: EventNameEnum, callback: Function): void {

        ipcMain.handle(eventName, async (event, ...args) => {
            return await callback(...args);
        });
    }
    
    configureWebContentsEvent(webContents: Electron.WebContents, event: Event): void {
        
        if(event.once){
            webContents.once(event.name, event.listenerCallback);
        }
        else{
            webContents.on(event.name, event.listenerCallback);
        }
    }
}