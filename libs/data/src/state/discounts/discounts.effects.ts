import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { DiscountsActions, DiscountsActionTypes, LoadDiscounts, DiscountsLoaded } from './discounts.actions';
import { DiscountsState } from './discounts.reducer';
import { DataPersistence } from '@nrwl/nx';

@Injectable()
export class DiscountsEffects {
  @Effect() effect$ = this.actions$.ofType(DiscountsActionTypes.DiscountsAction);

  @Effect()
  loadDiscounts$ = this.dataPersistence.fetch(DiscountsActionTypes.LoadDiscounts, {
    run: (action: LoadDiscounts, state: DiscountsState) => {
      return new DiscountsLoaded(state);
    },

    onError: (action: LoadDiscounts, error) => {
      console.error('Error', error);
    },
  });

  constructor(private actions$: Actions, private dataPersistence: DataPersistence<DiscountsState>) {}
}
