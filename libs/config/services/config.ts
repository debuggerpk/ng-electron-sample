import { ElectronService } from 'ngx-electron';
import { Injectable } from '@angular/core';
import { IConfig } from '@reaction/config/models/config'

@Injectable()
export class ConfigService {
  public config: IConfig;

  constructor(private _electron: ElectronService) {
    if (this._electron.isElectronApp) {
      this._electron.ipcRenderer.send('get-config');
    }

    this._electron.ipcRenderer.on('get-config-reply', (event, payload) => {
      this.config = payload;
    });
  }

  getConfig() {
    return this.config;
  }

  setConfig(payload: IConfig) {
    this._electron.ipcRenderer.send('save-config', payload);
    this._electron.ipcRenderer.on('save-config-reply', (event, response) => {
      console.log(response);
    });
  }


}
