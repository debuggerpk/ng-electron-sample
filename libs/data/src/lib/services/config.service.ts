import { Injectable, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Configuration, ConfigurationErrors, RootState } from '@reaction/common/models';
import { ElectronService } from 'ngx-electron';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

/**
 * Configuration service that handles all aspects of Configuration
 *
 * @export
 * @class ConfigService
 */
@Injectable()
export class ConfigService {
  public ready$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private _store: Store<RootState>,
    private _electron: ElectronService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _zone: NgZone,
  ) {
    this.ready$.pipe(filter(val => val)).subscribe(() => {
      const url = this._router.url;
      if (url === '/' || url === '/config') {
        this._zone.run(() => this._router.navigate(['/shifts']));
      }
    });
  }

  public get isElectronApp() {
    console.log(window.navigator.userAgent);
    return window.navigator.userAgent.indexOf('Electron') > -1;
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
}
