import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ItemActionTypes, RootState } from '@reaction/common/models';
import { ItemService } from '../../services';
import { LoadAllItems } from './items.actions';
import { tap } from 'rxjs/operators';

@Injectable()
export class ItemsEffects {
  @Effect({ dispatch: false })
  LoadAllItems$ = this._actions.pipe(
    ofType<LoadAllItems>(ItemActionTypes.LoadAllItems),
    tap(action => this._items.loadAllItems()),
  );

  constructor(private _actions: Actions, private _items: ItemService) {}
}
