import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { LoadAllShifts } from '@reaction/common/actions';
import { ShiftActionTypes } from '@reaction/common/models';
import { tap } from 'rxjs/operators';
import { ShiftService } from '../../services';

@Injectable()
export class ShiftsEffects {
  @Effect({ dispatch: false })
  loadAllShifts$ = this._actions.pipe(
    ofType<LoadAllShifts>(ShiftActionTypes.LoadAllShifts),
    tap(action => this._shift.loadAllShifts()),
  );

  constructor(private _actions: Actions, private _shift: ShiftService) {}
}
