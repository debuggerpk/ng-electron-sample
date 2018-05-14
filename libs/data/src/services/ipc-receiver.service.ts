import { Injectable } from '@angular/core';

import { RootState } from '@reaction/common/models';
import { Store } from '@ngrx/store';

@Injectable()
export class IpcReceiverService {
  constructor(private _store: Store<RootState>) {}
}
