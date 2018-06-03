import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { LoadAllCategories } from '@reaction/common/actions';
import { CategoryActionTypes } from '@reaction/common/models';
import { tap } from 'rxjs/operators';
import { CategoryService, IpcService } from '../../services';

@Injectable()
export class CategoryEffects {
  @Effect({ dispatch: false })
  LoadAllCategories$ = this._actions.pipe(
    ofType<LoadAllCategories>(CategoryActionTypes.LoadAllCategories),
    tap(action => this._ipc.send(action)),
  );

  constructor(private _actions: Actions, private _ipc: IpcService) {}
}
