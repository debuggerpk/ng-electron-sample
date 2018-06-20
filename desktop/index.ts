import * as path from 'path';
import { app, BrowserWindow } from 'electron';
import { configStore } from './lib/store';
import { IS_DEV, IS_HMR, installElectronDeveloperExtensions } from './lib/utils/electron-helpers';
import { windowsRef } from './lib/windows-ref';

import './lib/ipc.reducer';

const mainWindowSettings: Electron.BrowserWindowConstructorOptions = {
  width: configStore.get('windowBounds.width', 800),
  height: configStore.get('windowBounds.height', 640),
  x: configStore.get('windowBounds.x', 320),
  y: configStore.get('windowBounds.y', 102),
  frame: true,
  webPreferences: {
    nodeIntegration: false,
    preload: path.join(__dirname, 'preload.js'),
  },
};

const createWindow: () => void = () => {
  const url = IS_DEV && IS_HMR ? 'http://localhost:4200' : `file:///${__dirname}/apps/root/index.html`;

  windowsRef.main = new BrowserWindow(mainWindowSettings);
  windowsRef.openDevTools(windowsRef.main);
  windowsRef.main.loadURL(url);
  windowsRef.main.on('closed', () => (windowsRef.main = null));
  windowsRef.main.on('resize', () => configStore.set('windowBounds', windowsRef.main.getBounds()));

  installElectronDeveloperExtensions();
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (windowsRef.main === null) {
    createWindow();
  }
});
