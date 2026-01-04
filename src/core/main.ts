import { app, BrowserWindow } from "electron";
import path from 'node:path';

let mainWindow;

app.on("ready", () => {
    console.log("App is ready, env: " + process.env['NODE_ENV']);
    mainWindow = new BrowserWindow({
        fullscreen: true,
        webPreferences: {
            preload: path.join(app.getAppPath(), 'dist', 'core', 'preload.cjs')
        }
    });
    if(process.env['NODE_ENV'] === 'development'){
        mainWindow.loadURL('http://localhost:4200');
    }
    else{
        mainWindow.loadFile(path.join(app.getAppPath(), 'dist', 'ui', 'browser', 'index.html'));
    }
});