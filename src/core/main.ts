import { app, BrowserWindow } from "electron";
import path from 'node:path';

let mainWindow;

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    fullscreen: true,
  });
  mainWindow.loadFile(path.join(app.getAppPath(), 'dist', 'ui', 'browser', 'index.html'));
});