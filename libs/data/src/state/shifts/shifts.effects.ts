import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { ShiftsActions, ShiftsActionTypes, LoadShifts, ShiftsLoaded } from './shifts.actions';
import { ShiftsState } from './shifts.reducer';
import { DataPersistence } from '@nrwl/nx';

@Injectable()
export class ShiftsEffects {
  @Effect() effect$ = this.actions$.ofType(ShiftsActionTypes.ShiftsAction);

  @Effect()
  loadShifts$ = this.dataPersistence.fetch(ShiftsActionTypes.LoadShifts, {
    run: (action: LoadShifts, state: ShiftsState) => {
      return new ShiftsLoaded(state);
    },

    onError: (action: LoadShifts, error) => {
      console.error('Error', error);
    },
  });

  constructor(private actions$: Actions, private dataPersistence: DataPersistence<ShiftsState>) {}
}
