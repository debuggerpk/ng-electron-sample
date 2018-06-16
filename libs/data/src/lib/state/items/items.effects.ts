import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { LoadAllItems } from '@reaction/common/actions';
import { ItemActionTypes } from '@reaction/common/models';
import { tap } from 'rxjs/operators';
import { IpcService } from '../../services';

@Injectable()
export class ItemsEffects {
  @Effect({ dispatch: false })
  LoadAllItems$ = this._actions.pipe(
    ofType<LoadAllItems>(ItemActionTypes.LoadAllItems),
    tap(action => this._ipc.send(action)),
  );

  constructor(private _actions: Actions, private _ipc: IpcService) {}
}
