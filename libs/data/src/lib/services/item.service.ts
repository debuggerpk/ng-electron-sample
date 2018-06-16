import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootState } from '@reaction/common/models';

@Injectable()
export class ItemService {
  constructor(private _store: Store<RootState>) {}
}
