import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

@Injectable()
export class MainEffects {
  // @Effect() effect$ = this.actions$.ofType(MainActionTypes.MainAction);

  // @Effect()
  // loadMain$ = this.dataPersistence.fetch(MainActionTypes.LoadMain, {
  //   run: (action: LoadMain, state: MainState) => {
  //     return new MainLoaded(state);
  //   },

  //   onError: (action: LoadMain, error) => {
  //     console.error('Error', error);
  //   },
  // });

  constructor(private actions$: Actions, private dataPersistence: DataPersistence<any>) {}
}
