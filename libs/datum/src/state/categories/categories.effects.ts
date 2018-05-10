import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { CategoriesActions, CategoriesActionTypes, LoadCategories, CategoriesLoaded } from './categories.actions';
import { CategoriesState } from './categories.reducer';
import { DataPersistence } from '@nrwl/nx';

@Injectable()
export class CategoriesEffects {
  @Effect() effect$ = this.actions$.ofType(CategoriesActionTypes.CategoriesAction);

  @Effect()
  loadCategories$ = this.dataPersistence.fetch(CategoriesActionTypes.LoadCategories, {
    run: (action: LoadCategories, state: CategoriesState) => {
      return new CategoriesLoaded(state);
    },

    onError: (action: LoadCategories, error) => {
      console.error('Error', error);
    },
  });

  constructor(private actions$: Actions, private dataPersistence: DataPersistence<CategoriesState>) {}
}
