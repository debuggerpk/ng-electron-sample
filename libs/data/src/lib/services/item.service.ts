import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootState, Item, ItemActionTypes } from '@reaction/common/models';
import { ElectronService } from 'ngx-electron';
import { Event } from 'electron';
import { LoadAllItemsDone } from '@reaction/common/actions';

@Injectable()
export class ItemService {
  constructor(private _store: Store<RootState>) {}
}
