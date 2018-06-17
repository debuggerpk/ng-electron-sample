import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootState } from '@reaction/common/models';

/**
 * All we need to with shifts
 *
 * @export
 * @class ShiftService
 */
@Injectable()
export class ShiftService {
  constructor(private _store: Store<RootState>) {}
}
