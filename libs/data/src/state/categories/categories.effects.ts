import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { RootState, CategoryActionTypes } from '@reaction/common/models';
import { CategoryService } from '../../services';
import { LoadAllCategories } from '@reaction/data/src/state/categories/categories.actions';
import { tap } from 'rxjs/operators';

@Injectable()
export class CategoryEffects {
  @Effect({ dispatch: false })
  LoadAllCategories$ = this._actions.pipe(
    ofType<LoadAllCategories>(CategoryActionTypes.LoadAllCategories),
    tap(action => this._category.loadAllCategories()),
  );

  constructor(private _actions: Actions, private _category: CategoryService) {}
}
