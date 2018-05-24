import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { LoadAllDiscounts } from '@reaction/common/actions';
import { DiscountActionTypes } from '@reaction/common/models';
import { tap } from 'rxjs/operators';
import { DiscountService } from '../../services';

@Injectable()
export class DiscountsEffects {
  @Effect({ dispatch: false })
  LoadAllDiscounts$ = this._actions.pipe(
    ofType<LoadAllDiscounts>(DiscountActionTypes.LoadAllDiscounts),
    tap(action => this._discount.loadAllDiscounts()),
  );

  constructor(private _actions: Actions, private _discount: DiscountService) {}
}
