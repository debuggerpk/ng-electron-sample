import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { LoadAllItems } from '@reaction/common/actions';
import { ItemActionTypes } from '@reaction/common/models';
import { tap } from 'rxjs/operators';
import { ItemService } from '../../services';

@Injectable()
export class ItemsEffects {
  @Effect({ dispatch: false })
  LoadAllItems$ = this._actions.pipe(
    ofType<LoadAllItems>(ItemActionTypes.LoadAllItems),
    tap(action => this._items.loadAllItems()),
  );

  constructor(private _actions: Actions, private _items: ItemService) {}
}
