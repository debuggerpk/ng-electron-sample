import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { ConfigActions, ConfigActionTypes, LoadConfig, ConfigLoaded } from './config.actions';
import { ConfigState } from './config.reducer';
import { DataPersistence } from '@nrwl/nx';

@Injectable()
export class ConfigEffects {
  @Effect() effect$ = this.actions$.ofType(ConfigActionTypes.ConfigAction);

  @Effect()
  loadConfig$ = this.dataPersistence.fetch(ConfigActionTypes.LoadConfig, {
    run: (action: LoadConfig, state: ConfigState) => {
      return new ConfigLoaded(state);
    },

    onError: (action: LoadConfig, error) => {
      console.error('Error', error);
    },
  });

  constructor(private actions$: Actions, private dataPersistence: DataPersistence<ConfigState>) {}
}
