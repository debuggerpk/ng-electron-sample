import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootState, DiscountActionTypes, Discount } from '@reaction/common/models';
import { ElectronService } from 'ngx-electron';
import { LoadAllDiscounts, LoadAllDiscountsDone } from '@reaction/common/actions';
import { Event } from 'electron';

@Injectable()
export class DiscountService {
  constructor(private _store: Store<RootState>) {}
}
