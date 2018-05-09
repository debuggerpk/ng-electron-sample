import { ipcMain, Event } from 'electron';
import { store } from './store';
import { getOutlet, getShifts } from './api';
import { ConfigActionTypes, Configuration } from '@reaction/common/models';

const FALLBACK_CONFIG = {
  outlet_id: '',
  local_gateway: '',
  api_key: '',
  api_gateway: '',
};

ipcMain.on(ConfigActionTypes.GetConfigFromElectron, (event: Event) => {
  event.sender.send(ConfigActionTypes.GetConfigDone, store.get('configuration', FALLBACK_CONFIG));

  getShifts().subscribe(data => {
    store.set('shifts', data.body);
  });

  getOutlet().subscribe(data => {
    store.set('outlet', data.body);
  });
});

ipcMain.on(ConfigActionTypes.SaveConfigToElectron, (event: Event, payload: Configuration) => {
  store.set('configuration', payload);
  event.sender.send(ConfigActionTypes.SaveConfigDone, payload);
});
