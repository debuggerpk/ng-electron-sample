import { IS_DEV } from './utils/electron-helpers';
import { BrowserWindow, app } from 'electron';

class WindowsReferences {
  private _main: Electron.BrowserWindow = null;

  get main(): Electron.BrowserWindow {
    return this._main;
  }

  set main(mainWindow: Electron.BrowserWindow) {
    this._main = mainWindow;
  }

  openDevTools(win: Electron.BrowserWindow) {
    win.webContents.on('devtools-opened', () => console.log('Opening Devtools'));
    // tslint:disable-next-line:no-unused-expression
    IS_DEV && win.webContents.openDevTools();
  }
}

export const windowsRef = new WindowsReferences();
