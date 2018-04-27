import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ConfigActions, ConfigActionTypes, GetConfigFromElectron } from './config.actions';
import { ConfigState } from './config.reducer';
import { DataPersistence } from '@nrwl/nx';
import { tap } from 'rxjs/operators';
import { ConfigService } from '../services/config.service';

@Injectable()
export class ConfigEffects {
  // @Effect() effect$ = this.actions$.ofType(ConfigActionTypes.ConfigAction);

  // @Effect()
  // loadConfig$ = this.dataPersistence.fetch(ConfigActionTypes.LoadConfig, {
  //   run: (action: LoadConfig, state: ConfigState) => {
  //     return new ConfigLoaded(state);
  //   },

  //   onError: (action: LoadConfig, error) => {
  //     console.error('Error', error);
  //   },
  // });
  @Effect({ dispatch: false })
  config$ = this._actions.pipe(
    ofType(ConfigActionTypes.GetConfig),
    tap(action => {
      console.log(action);
    }),
  );

  constructor(private _actions: Actions, private _config: ConfigService) { }
}
