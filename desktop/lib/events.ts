import { ConfigActionTypes, Configuration, CategoryActionTypes, ShiftActionTypes } from '@reaction/common/models';
import { MutateDataType } from '@reaction/common/utils/mutate-type';
import { Event, ipcMain } from 'electron';
import { getShifts, getCategories } from './api';
import { configStore, dataStore } from './store';

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
  event.sender.send(ConfigActionTypes.GetConfigDone, configStore.get('configuration', FB_CONFIG));
});

ipcMain.on(ConfigActionTypes.SaveConfigToElectron, (event: Event, payload: Configuration) => {
  configStore.set('configuration', payload);
  event.sender.send(ConfigActionTypes.SaveConfigDone, payload);
});

/**
 * Categories Ipc Events
 */

ipcMain.on(CategoryActionTypes.LoadAllCategories, (event: Event) => {
  let categories = dataStore.get('categories', { last_updated: null, data: [] });

  if (
    !categories.last_updated ||
    new Date().getTime() - new Date(categories.last_updated).getTime() > 1000 * 60 * 60 * 2
  ) {
    getCategories().subscribe(response => {
      if (response.response.statusCode === 200) {
        categories = { last_updated: new Date(), data: response.body };
        dataStore.set('categories', categories);
        event.sender.send(CategoryActionTypes.LoadAllCategoriesDone, categories.data);
      }
    });
  }

  event.sender.send(CategoryActionTypes.LoadAllCategoriesDone, categories.data);
});

/**
 * Shift Ipc Events
 */

ipcMain.on(ShiftActionTypes.LoadAllShifts, (event: Event) => {
  let shifts = dataStore.get('shifts', { last_updated: null, data: [] });

  shifts.data = shifts.data.map(MutateDataType.shift);
  // This updates shifts in the background if the last update is more than 2 hours;
  if (!shifts.last_updated || new Date().getTime() - new Date(shifts.last_updated).getTime() > 1000 * 60 * 60 * 2) {
    getShifts().subscribe(response => {
      if (response.response.statusCode === 200) {
        shifts = { last_updated: new Date(), data: response.body };
        dataStore.set('shifts', shifts);
        event.sender.send(ShiftActionTypes.LoadAllShiftsDone, shifts.data);
      }
    });
  }

  event.sender.send(ShiftActionTypes.LoadAllShiftsDone, shifts.data);
});
