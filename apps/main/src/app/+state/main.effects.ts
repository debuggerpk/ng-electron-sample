import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { MainActions, MainActionTypes, LoadMain, MainLoaded } from './main.actions';
import { RootState } from './main.reducer';
import { DataPersistence } from '@nrwl/nx';

@Injectable()
export class MainEffects {
  @Effect() effect$ = this.actions$.ofType(MainActionTypes.MainAction);

  @Effect()
  loadMain$ = this.dataPersistence.fetch(MainActionTypes.LoadMain, {
    run: (action: LoadMain, state: RootState) => {
      return new MainLoaded(state);
    },

    onError: (action: LoadMain, error) => {
      console.error('Error', error);
    },
  });

  constructor(private actions$: Actions, private dataPersistence: DataPersistence<RootState>) {}
}
