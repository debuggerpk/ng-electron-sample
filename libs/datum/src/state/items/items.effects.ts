import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { ItemsActions, ItemsActionTypes, LoadItems, ItemsLoaded } from './items.actions';
import { ItemsState } from './items.reducer';
import { DataPersistence } from '@nrwl/nx';

@Injectable()
export class ItemsEffects {
  @Effect() effect$ = this.actions$.ofType(ItemsActionTypes.ItemsAction);

  @Effect()
  loadItems$ = this.dataPersistence.fetch(ItemsActionTypes.LoadItems, {
    run: (action: LoadItems, state: ItemsState) => {
      return new ItemsLoaded(state);
    },

    onError: (action: LoadItems, error) => {
      console.error('Error', error);
    },
  });

  constructor(private actions$: Actions, private dataPersistence: DataPersistence<ItemsState>) {}
}
