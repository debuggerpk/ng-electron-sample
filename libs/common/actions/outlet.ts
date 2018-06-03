import { OutletActionTypes, Outlet, FluxStandardAction } from '@reaction/common/models';

export class LoadOutlet implements FluxStandardAction {
  readonly type = OutletActionTypes.LoadOutlet;
}

export class LoadOutletDone implements FluxStandardAction {
  readonly type = OutletActionTypes.LoadOutletDone;

  constructor(public payload: Outlet) {}
}

export type OutletActions = LoadOutlet | LoadOutletDone;
