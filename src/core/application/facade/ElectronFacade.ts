import path from 'node:path';
import { app, BrowserWindow } from "electron";

import { Event } from "#core/adapter/input/event/Event.js";
import { DidFinishLoadEvent } from "#core/adapter/input/event/DidFinishLoadEvent.js";
import { EnvironmentConfig } from "#core/config/EnvironmentConfig.js";
import { EnvironmentEnum } from '../enum/EnvironmentEnum';

export class ElectronFacade {

    configureAppEvent(event: Event): void {
        
        if(event.once){
            app.once(event.name, event.listenerCallback);
        }
        else{
            app.on(event.name, event.listenerCallback);
        }
    }
    
    configureWebContentsEvent(webContents: Electron.WebContents, event: Event): void {
        
        if(event.once){
            webContents.once(event.name, event.listenerCallback);
        }
        else{
            webContents.on(event.name, event.listenerCallback);
        }
    }

    buildMainBrowserWindow(): BrowserWindow {

        const env = EnvironmentConfig.getEnvironment();
        
        const browserWindow = this.buildBrowserWindow(true, false, path.join(app.getAppPath(), 'dist', 'core', 'preload.cjs'));
        
        if(env === EnvironmentEnum.DEVELOPMENT){
            browserWindow.loadURL('http://localhost:4200');
        }
        else{
            browserWindow.loadFile(path.join(app.getAppPath(), 'dist', 'ui', 'browser', 'index.html'));
        }

        this.configureWebContentsEvent(browserWindow.webContents, new DidFinishLoadEvent(true));
        
        return browserWindow;
    }

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
}