import { IS_DEV } from './helpers';

class WindowsReferences {
  private _main: Electron.BrowserWindow = null;

  get main(): Electron.BrowserWindow {
    return this._main;
  }

  set main(mainWindow: Electron.BrowserWindow) {
    this._main = mainWindow;
  }

  installDevTools(win: Electron.BrowserWindow) {
    if (IS_DEV) {
      // we only require this in dev-mode;
      const { default: installExtension, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer');
      installExtension(REACT_DEVELOPER_TOOLS.id);
      win.webContents.openDevTools();
    }
  }
}

export const windowsRef = new WindowsReferences();
