import { Injectable, NgZone } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { Configuration, ConfigurationErrors } from '../models/config';
import { Store } from '@ngrx/store';
import { ConfigState } from '@reaction/config/src/+state/config.reducer';
import { GetConfig, GetConfigDone } from '@reaction/config/src/+state/config.actions';
import { Router } from '@angular/router';

/**
 * Configuration service that handles all aspects of Configuration
 *
 * @export
 * @class ConfigService
 */
@Injectable()
export class ConfigService {
  private _reaction = window.reaction;

  constructor(
    private _store: Store<ConfigState>,
    private _electron: ElectronService,
    private _router: Router,
    private _zone: NgZone,
  ) {
    // Register Listeners
    if (this.isElectronApp()) {
      this._onIpcGetConfig();
      this._onIpcSaveConfig();
    }
  }

  /**
   * Initialize configuration fetch process
   *
   *
   * @memberOf ConfigService
   */
  public getConfig: () => void = () => this._store.dispatch(new GetConfig());

  /**
   * Gets the configuration from ElectronStore via IpcRenderer.
   * IPC is exposed as window object and is controlled via Electron Main Process
   *
   *
   * @memberOf ConfigService
   */
  public getConfigFromElectron: () => void = () => this._reaction.ipc.send('get-config');

  /**
   * Gets the configuration from localstorage
   *
   *
   * @memberOf ConfigService
   */
  public getConfigFromLocalStorage: () => void = () =>
    this._store.dispatch(
      new GetConfigDone({
        outlet_id: '',
        api_key: '',
        api_gateway: '',
        local_gateway: '',
      }),
    );

  /**
   * Checks if the application is rendered inside Electron
   *
   * @returns {boolean}
   *
   * @memberOf ConfigService
   */
  public isElectronApp(): boolean {
    return this._electron.isElectronApp;
  }

  public navigateToConfig() {
    this._zone.run(() => {
      this._router.navigate(['/config']);
    });
  }

  /**
   * Validates the fetched configuration
   *
   * @param {Configuration} config
   * @returns {ConfigurationErrors}
   *
   * @memberOf ConfigService
   */
  public validateConfig(config: Configuration): ConfigurationErrors {
    if (config.outlet_id && config.api_gateway && config.api_key) {
      return null;
    } else {
      const errors: ConfigurationErrors = {};

      if (!config.outlet_id) {
        errors.outlet_id = true;
      }

      if (!config.api_gateway) {
        errors.api_gateway = true;
      }

      if (!config.api_key) {
        errors.api_key = true;
      }

      return errors;
    }
  }

  /**
   * Listener on IpcRenderer for fetch configuration response
   *
   * @private
   *
   * @memberOf ConfigService
   */
  private _onIpcGetConfig(): void {
    this._reaction.ipc.on('get-config-reply', (event, payload: Configuration) => {
      this._store.dispatch(new GetConfigDone(payload));
    });
  }

  /**
   * Listender on IpcRenderer for save configuration response
   *
   * @private
   *
   * @memberOf ConfigService
   */
  private _onIpcSaveConfig(): void {
    this._reaction.ipc.on('save-config-reply', (event, response) => {
      console.log(response);
    });
  }
}
