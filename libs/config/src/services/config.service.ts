import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { IConfig } from '../models/config';

@Injectable()
export class ConfigService {
  public config: IConfig;

  constructor(private _electron: ElectronService) {
    if (this._electron.isElectronApp) {
      this._electron.ipcRenderer.send('get-config');

      // register listers
      this._onGetConfig();
      this._onSaveConfig();
    }
  }

  private _onGetConfig(): void {
    this._electron.ipcRenderer.on('get-config-reply', (event, payload) => {
      this.config = payload;
    });
  }

  private _onSaveConfig(): void {
    this._electron.ipcRenderer.on('save-config-reply', (event, response) => {
      console.log(response);
    });
  }

  public getConfig(): IConfig {
    return this.config;
  }

  public setConfig(payload: IConfig): void {
    this._electron.ipcRenderer.send('save-config', payload);
  }
}
