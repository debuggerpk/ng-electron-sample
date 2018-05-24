import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { LoadAllCategories } from '@reaction/common/actions';
import { CategoryActionTypes } from '@reaction/common/models';
import { tap } from 'rxjs/operators';
import { CategoryService } from '../../services';

@Injectable()
export class CategoryEffects {
  @Effect({ dispatch: false })
  LoadAllCategories$ = this._actions.pipe(
    ofType<LoadAllCategories>(CategoryActionTypes.LoadAllCategories),
    tap(action => this._category.loadAllCategories()),
  );

  constructor(private _actions: Actions, private _category: CategoryService) {}
}
