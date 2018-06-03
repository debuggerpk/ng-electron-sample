import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootState, Outlet, OutletActionTypes } from '@reaction/common/models';
import { ElectronService } from 'ngx-electron';
import { LoadOutletDone } from '@reaction/common/actions';

@Injectable()
export class OutletService {}
