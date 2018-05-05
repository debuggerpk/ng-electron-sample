import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { DataPersistence } from '@nrwl/nx';
import { Observable } from 'rxjs/Observable';
import { map, switchMap, tap } from 'rxjs/operators';
import { ConfigService } from '@reaction/shared';
import {
  ConfigActions,
  ConfigActionTypes,
  GetConfigFromElectron,
  GetConfigFromLocalStorage,
  ValidateConfig,
  GetConfigDone,
  GetConfig,
  ConfigValidationSuccess,
  ConfigValidationError,
} from './config.actions';

@Injectable()
export class ConfigEffects {
  @Effect()
  getConfig$ = this._actions.pipe(
    ofType<GetConfig>(ConfigActionTypes.GetConfig),
    map(() => (this._config.isElectronApp() ? new GetConfigFromElectron() : new GetConfigFromLocalStorage())),
  );

  @Effect({ dispatch: false })
  getConfigFromElectron$ = this._actions.pipe(
    ofType<GetConfigFromElectron>(ConfigActionTypes.GetConfigFromElectron),
    tap(() => this._config.getConfigFromElectron()),
  );

  @Effect({ dispatch: false })
  getConfigFromLocalStorage$ = this._actions.pipe(
    ofType<GetConfigFromLocalStorage>(ConfigActionTypes.GetConfigFromLocalStorage),
    tap(() => this._config.getConfigFromLocalStorage()),
  );

  @Effect()
  getConfigDone$ = this._actions.pipe(
    ofType<GetConfigDone>(ConfigActionTypes.GetConfigDone),
    map(action => new ValidateConfig(action.payload)),
  );

  @Effect()
  validateConfig$ = this._actions.pipe(
    ofType<ValidateConfig>(ConfigActionTypes.ValidateConfig),
    map(action => {
      const errors = this._config.validateConfig(action.payload);
      return errors ? new ConfigValidationError(errors) : new ConfigValidationSuccess();
    }),
  );

  @Effect({ dispatch: false })
  validationError$ = this._actions.pipe(
    ofType<ConfigValidationError>(ConfigActionTypes.ConfigValidationError),
    tap(() => this._config.navigateToConfig()),
  );

  constructor(private _actions: Actions, private _config: ConfigService) {}
}
