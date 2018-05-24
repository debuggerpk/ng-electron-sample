import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { GetConfig, GetConfigDone, SaveConfigDone } from '@reaction/common/actions';
import { ConfigActionTypes, Configuration, ConfigurationErrors, RootState } from '@reaction/common/models';
import { ElectronService } from 'ngx-electron';

/**
 * Configuration service that handles all aspects of Configuration
 *
 * @export
 * @class ConfigService
 */
@Injectable()
export class ConfigService {
  constructor(
    private _store: Store<RootState>,
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
  public getConfigFromElectron: () => void = () => window.reaction.ipc.send(ConfigActionTypes.GetConfigFromElectron);

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

  public saveConfigToElectron: (config: Configuration) => void = config =>
    window.reaction.ipc.send(ConfigActionTypes.SaveConfigToElectron, config);

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

  /**
   * Route to Configuration
   *
   *
   * @memberOf ConfigService
   */
  public routeToConfig(): void {
    this._zone.run(() => this._router.navigate(['/config']));
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
    window.reaction.ipc.on(ConfigActionTypes.GetConfigDone, (event: Event, payload: Configuration) => {
      console.log(event);
      console.log(payload);
      // this._store.dispatch(new GetConfigDone(payload));
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
    window.reaction.ipc.on(ConfigActionTypes.SaveConfigDone, (event, payload: Configuration) => {
      this._store.dispatch(new SaveConfigDone(payload));
    });
  }
}
