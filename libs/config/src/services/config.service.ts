import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { Configuration } from '../models/config';

@Injectable()
export class ConfigService {
  private _config: Configuration;

  constructor(private _electron: ElectronService) {
    if (this._electron.isElectronApp) {
      this._electron.ipcRenderer.send('get-config');

      this._onGetConfig();
      this._onSaveConfig();
    }
  }

  public get config(): Configuration {
    return this._config;
  }

  public set config(payload: Configuration) {
    this._electron.ipcRenderer.send('save-config', payload);
  }

  private _onGetConfig(): void {
    this._electron.ipcRenderer.on('get-config-reply', (event, payload) => {
      this._config = payload;
    });
  }

  private _onSaveConfig(): void {
    this._electron.ipcRenderer.on('save-config-reply', (event, response) => {
      console.log(response);
    });
  }
}
