import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  ConfigValidationError,
  ConfigValidationSuccess,
  GetConfig,
  GetConfigDone,
  GetConfigFromElectron,
  GetConfigFromLocalStorage,
  LoadAllCategories,
  LoadAllDiscounts,
  LoadAllItems,
  LoadAllSections,
  LoadAllShifts,
  LoadOutlet,
  SaveConfig,
  SaveConfigDone,
  SaveConfigToElectron,
  SaveConfigToLocalStorage,
  ValidateConfig,
} from '@reaction/common/actions';
import { ConfigActionTypes } from '@reaction/common/models';
import { concatMap, map, tap } from 'rxjs/operators';
import { ConfigService } from '../../services';

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
      return errors ? new ConfigValidationError(errors) : new ConfigValidationSuccess(action.payload);
    }),
  );

  @Effect()
  validationSuccess = this._actions.pipe(
    ofType<ConfigValidationSuccess>(ConfigActionTypes.ConfigValidationSuccess),
    map(action => new SaveConfigDone(action.payload)),
  );

  @Effect({ dispatch: false })
  validationError$ = this._actions.pipe(
    ofType<ConfigValidationError>(ConfigActionTypes.ConfigValidationError),
    tap(() => this._config.routeToConfig()),
  );

  @Effect()
  saveConfig$ = this._actions.pipe(
    ofType<SaveConfig>(ConfigActionTypes.SaveConfig),
    map(
      action =>
        this._config.isElectronApp()
          ? new SaveConfigToElectron(action.payload)
          : new SaveConfigToLocalStorage(action.payload),
    ),
  );

  @Effect({ dispatch: false })
  saveConfigToElectron$ = this._actions.pipe(
    ofType<SaveConfigToElectron>(ConfigActionTypes.SaveConfigToElectron),
    tap(action => this._config.saveConfigToElectron(action.payload)),
  );

  @Effect()
  saveConfigDone$ = this._actions.pipe(
    ofType<SaveConfigDone>(ConfigActionTypes.SaveConfigDone),
    concatMap(action => [
      new LoadOutlet(),
      new LoadAllShifts(),
      new LoadAllDiscounts(),
      new LoadAllSections(),
      new LoadAllCategories(),
      new LoadAllItems(),
    ]),
  );

  constructor(private _actions: Actions, private _config: ConfigService) {}
}
