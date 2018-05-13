import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { LoadOutlet } from './outlet.actions';
import { OutletActionTypes } from '@reaction/common/models';
import { tap } from 'rxjs/operators';
import { OutletService } from '../../services';

@Injectable()
export class OutletEffects {
  @Effect({ dispatch: false })
  LoadOutlet$ = this._actions.pipe(
    ofType<LoadOutlet>(OutletActionTypes.LoadOutlet),
    tap(action => this._outlet.loadOutlet()),
  );

  constructor(private _actions: Actions, private _outlet: OutletService) {}
}
