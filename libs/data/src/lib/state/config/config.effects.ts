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
  LoadAllData,
  LoadAllDiscounts,
  LoadAllProducts,
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
import { map, mergeMap, tap } from 'rxjs/operators';
import { ConfigService, IpcService } from '../../services';

@Injectable()
export class ConfigEffects {
  @Effect()
  getConfig$ = this._actions.pipe(
    ofType<GetConfig>(ConfigActionTypes.GetConfig),
    map(() => (this._configService.isElectronApp ? new GetConfigFromElectron() : new GetConfigFromLocalStorage())),
  );

  @Effect({ dispatch: false })
  getConfigFromElectron$ = this._actions.pipe(
    ofType<GetConfigFromElectron>(ConfigActionTypes.GetConfigFromElectron),
    tap(action => this._ipcService.send(action)),
  );

  @Effect({ dispatch: false })
  getConfigFromLocalStorage$ = this._actions.pipe(
    ofType<GetConfigFromLocalStorage>(ConfigActionTypes.GetConfigFromLocalStorage),
    tap(() => console.log('TODO: Write for Browser')),
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
      const errors = this._configService.validateConfig(action.payload);
      return errors ? new ConfigValidationError(errors) : new ConfigValidationSuccess(action.payload);
    }),
  );

  @Effect({ dispatch: false })
  validationError$ = this._actions.pipe(
    ofType<ConfigValidationError>(ConfigActionTypes.ConfigValidationError),
    tap(() => this._configService.routeToConfig()),
  );

  @Effect()
  saveConfig$ = this._actions.pipe(
    ofType<SaveConfig>(ConfigActionTypes.SaveConfig),
    map(
      action =>
        this._configService.isElectronApp
          ? new SaveConfigToElectron(action.payload)
          : new SaveConfigToLocalStorage(action.payload),
    ),
  );

  @Effect({ dispatch: false })
  saveConfigToElectron$ = this._actions.pipe(
    ofType<SaveConfigToElectron>(ConfigActionTypes.SaveConfigToElectron),
    tap(action => this._ipcService.send(action)),
  );

  @Effect()
  validateOrSaveConfigSuccess$ = this._actions.pipe(
    ofType<ConfigValidationSuccess | SaveConfigDone>(
      ConfigActionTypes.ConfigValidationSuccess,
      ConfigActionTypes.SaveConfigDone,
    ),
    map(action => new LoadAllData()),
  );

  @Effect()
  loadAllData$ = this._actions.pipe(
    ofType<LoadAllData>(ConfigActionTypes.LoadAllData),
    tap(() => this._configService.ready$.next(false)),
    tap(action => this._ipcService.send(action)),
    mergeMap(action => [
      new LoadOutlet(),
      new LoadAllShifts(),
      new LoadAllDiscounts(),
      new LoadAllSections(),
      new LoadAllCategories(),
      new LoadAllProducts(),
    ]),
  );

  @Effect({ dispatch: false })
  loadAllDataDone$ = this._actions.pipe(
    ofType(ConfigActionTypes.LoadAllDataDone),
    tap(() => this._configService.ready$.next(true)),
  );

  constructor(private _actions: Actions, private _ipcService: IpcService, private _configService: ConfigService) {}
}
