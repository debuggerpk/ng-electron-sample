import { ipcMain, Event } from 'electron';
import { store } from './store';
import { ConfigActionTypes, Configuration } from '@reaction/common/models';

const FALLBACK_CONFIG = {
  outlet_id: '',
  local_gateway: '',
  api_key: '',
  api_gateway: '',
};

ipcMain.on(ConfigActionTypes.GetConfigFromElectron, (event: Event) => {
  event.sender.send(ConfigActionTypes.GetConfigDone, store.get('configuration', FALLBACK_CONFIG));
});

ipcMain.on(ConfigActionTypes.SaveConfig, (event: Event, payload: Configuration) => {
  store.set('configuration', payload);
  event.sender.send(ConfigActionTypes.SaveConfigDone, true);
});
