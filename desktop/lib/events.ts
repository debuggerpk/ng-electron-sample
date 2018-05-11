import { ipcMain, Event } from 'electron';
import { store } from './store';
import { getOutlet, getShifts } from './api';
import { ConfigActionTypes, Configuration } from '@reaction/common/models/config';
import { ShiftActionTypes, Shift } from '@reaction/common/models/shift';

const FB_CONFIG = {
  outlet_id: '',
  local_gateway: '',
  api_key: '',
  api_gateway: '',
};

/**
 * Configuration Ipc Events
 */

ipcMain.on(ConfigActionTypes.GetConfigFromElectron, (event: Event) => {
  event.sender.send(ConfigActionTypes.GetConfigDone, store.get('configuration', FB_CONFIG));
});

ipcMain.on(ConfigActionTypes.SaveConfigToElectron, (event: Event, payload: Configuration) => {
  store.set('configuration', payload);
  event.sender.send(ConfigActionTypes.SaveConfigDone, payload);
});

/**
 * Shift Ipc Events
 */

ipcMain.on(ShiftActionTypes.LoadAllShifts, (event: Event) => {
  const shifts = store.get('shifts', []);
  event.sender.send(ShiftActionTypes.LoadAllShiftsDone, shifts);
});
