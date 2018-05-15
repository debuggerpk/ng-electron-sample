import { OutletActionTypes, Outlet, ReAction } from '@reaction/common/models';

export class LoadOutlet implements ReAction {
  readonly type = OutletActionTypes.LoadOutlet;
}

export class LoadOutletDone implements ReAction {
  readonly type = OutletActionTypes.LoadOutletDone;

  constructor(public payload: Outlet) {}
}

export type OutletActions = LoadOutlet | LoadOutletDone;
