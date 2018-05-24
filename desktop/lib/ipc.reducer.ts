import { actions } from '@reaction/common';
import { ConfigActionTypes, OutletActionTypes, ReAction } from '@reaction/common/models';
import { Event, ipcMain } from 'electron';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { merge } from 'rxjs/observable/merge';
import { filter, map, switchMap } from 'rxjs/operators';
import { getOutlet } from './api';
import { configStore } from './store';
import { windowsRef } from './windows-ref';

const FB_CONFIG = {
  outlet_id: '',
  local_gateway: '',
  api_key: '',
  api_gateway: '',
};

const listener$ = fromEvent<ReAction>(ipcMain, 'reaction', (event: Event, action: ReAction) => action);

const getConfig$ = listener$.pipe(
  filter(action => action.type === ConfigActionTypes.GetConfigFromElectron),
  map(() => new actions.GetConfigDone(configStore.get('configuration', FB_CONFIG))),
);

const getOutlet$ = listener$.pipe(
  filter(action => action.type === OutletActionTypes.LoadOutlet),
  switchMap(() => getOutlet()),
  map(payload => new actions.LoadOutletDone(payload)),
);

const reducer$ = merge(getConfig$, getOutlet$).subscribe(action => {
  windowsRef.main.webContents.send('reaction', action);
});
