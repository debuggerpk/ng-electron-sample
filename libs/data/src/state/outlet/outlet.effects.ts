import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { OutletActions, OutletActionTypes, LoadOutlet, OutletLoaded } from './outlet.actions';
import { OutletState } from './outlet.reducer';
import { DataPersistence } from '@nrwl/nx';

@Injectable()
export class OutletEffects {
  @Effect() effect$ = this.actions$.ofType(OutletActionTypes.OutletAction);

  @Effect()
  loadOutlet$ = this.dataPersistence.fetch(OutletActionTypes.LoadOutlet, {
    run: (action: LoadOutlet, state: OutletState) => {
      return new OutletLoaded(state);
    },

    onError: (action: LoadOutlet, error) => {
      console.error('Error', error);
    },
  });

  constructor(private actions$: Actions, private dataPersistence: DataPersistence<OutletState>) {}
}
