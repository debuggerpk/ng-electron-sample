import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { Configuration, ConfigurationErrors } from '../models/config';
import { Store } from '@ngrx/store';
import { ConfigState } from '@reaction/config/src/+state/config.reducer';
import { GetConfig, GetConfigDone } from '@reaction/config/src/+state/config.actions';

@Injectable()
export class ConfigService {
  private _config: Configuration;
  private _reaction = window.reaction;

  constructor(private _store: Store<ConfigState>, private _electron: ElectronService) {
    // Register Listeners
    if (this.isElectronApp()) {
      this._onIpcGetConfig();
      this._onIpcSaveConfig();
    }
  }

  public getConfig(): void {
    this._store.dispatch(new GetConfig());
  }

  public getConfigFromElectron(): void {
    this._reaction.ipc.send('get-config');
  }

  public getConfigFromLocalStorage(): void {
    console.log('Placeholder for getting configuration from localstorage');
  }

  public isElectronApp(): boolean {
    return this._electron.isElectronApp;
  }

  public validateConfig(config: Configuration): ConfigurationErrors {
    if (config.outlet_id && config.api_gateway && config.api_key) {
      return null;
    } else {
      const errors: ConfigurationErrors = {};

      if (!config.outlet_id) {
        errors.outlet_id = 'Outlet ID must be defined.';
      }

      if (!config.api_gateway) {
        errors.api_gateway = 'API Gateway is required for data sync.';
      }

      if (!config.api_key) {
        errors.api_key = 'API Key is required for data sync.';
      }

      return errors;
    }
  }

  private _onIpcGetConfig(): void {
    this._reaction.ipc.on('get-config-reply', (event, payload: Configuration) => {
      this._store.dispatch(new GetConfigDone(payload));
    });
  }

  private _onIpcSaveConfig(): void {
    this._reaction.ipc.on('save-config-reply', (event, response) => {
      console.log(response);
    });
  }
}
