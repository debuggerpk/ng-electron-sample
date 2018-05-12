import { app, BrowserWindow } from 'electron';
import installExtension, { REDUX_DEVTOOLS } from 'electron-devtools-installer';
import { configStore } from './lib/store';
import './lib/events';

import * as path from 'path';

let mainWindowRef: Electron.BrowserWindow = null;

const debugMode = true;
const isDev = process.env.NODE_ENV === 'development';

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
  // TODO: account for packaging builds or reuse 'build'.
  // TODO: build electron binaries on for electron development environment
  // TODO: fix live reload
  const url =
    isDev && process.env.LAUNCH_MODE === 'hmr' ? 'http://localhost:4200' : `file:///${__dirname}/apps/root/index.html`;
  console.log(`Main Window Proxy: ${url}`);
  mainWindowRef = new BrowserWindow(mainWindowSettings);
  mainWindowRef.loadURL(url);
  if (debugMode) {
    // Open the DevTools.
    installExtension(REDUX_DEVTOOLS.id);
    mainWindowRef.webContents.openDevTools();
  }
  mainWindowRef.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindowRef = null;
  });

  mainWindowRef.on('resize', () => {
    configStore.set('windowBounds', mainWindowRef.getBounds());
  });

  // TODO: investigate why this is not working with electron 2
  // mainWindowRef.webContents.on('did-frame-finish-load', event => {
  //   if (isDev) {
  //     require('devtron').install();
  //   }
  // });
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
  if (mainWindowRef === null) {
    createWindow();
  }
});
