import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { LoadAllProducts } from '@reaction/common/actions';
import { ProductActionTypes } from '@reaction/common/models';
import { tap } from 'rxjs/operators';
import { IpcService } from '../../services';

@Injectable()
export class ProductEffects {
  @Effect({ dispatch: false })
  LoadAllItems$ = this._actions.pipe(
    ofType<LoadAllProducts>(ProductActionTypes.LoadAllProducts),
    tap(action => this._ipc.send(action)),
  );

  constructor(private _actions: Actions, private _ipc: IpcService) {}
}
