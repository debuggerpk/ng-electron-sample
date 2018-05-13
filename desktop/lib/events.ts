import {
  CategoryActionTypes,
  ConfigActionTypes,
  Configuration,
  DiscountActionTypes,
  ItemActionTypes,
  ShiftActionTypes,
  OutletActionTypes,
} from '@reaction/common/models';
import { MutateDataType } from '@reaction/common/utils/mutate-type';
import { Event, ipcMain } from 'electron';
import { getCategories, getDiscounts, getItems, getShifts, getOutlet } from './api';
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
 * Outlet Ipc Events
 */

ipcMain.on(OutletActionTypes.LoadOutlet, (event: Event) => {
  let outlet = dataStore.get('outlet', { last_updated: null, data: {} });

  if (!outlet.last_updated || new Date().getTime() - new Date(outlet.last_updated).getTime() > 1000 * 60 * 60 * 2) {
    getOutlet().subscribe(response => {
      if (response.response.statusCode === 200) {
        outlet = { last_updated: new Date(), data: response.body };
        dataStore.set('outlet', outlet);
        event.sender.send(OutletActionTypes.LoadOutletDone, outlet.data);
      }
    });
  }

  event.sender.send(OutletActionTypes.LoadOutletDone, outlet.data);
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
 * Discount Ipc Events
 */
ipcMain.on(DiscountActionTypes.LoadAllDiscounts, (event: Event) => {
  let discounts = dataStore.get('discounts', { last_updated: null, data: [] });

  if (
    !discounts.last_updated ||
    new Date().getTime() - new Date(discounts.last_updated).getTime() > 1000 * 60 * 60 * 2
  ) {
    getDiscounts().subscribe(response => {
      if (response.response.statusCode === 200) {
        discounts = { last_updated: new Date(), data: response.body };
        dataStore.set('categories', discounts);
        event.sender.send(DiscountActionTypes.LoadAllDiscountsDone, discounts.data);
      }
    });
  }

  event.sender.send(DiscountActionTypes.LoadAllDiscountsDone, discounts.data);
});

/**
 * Item Ipc Events
 */
ipcMain.on(ItemActionTypes.LoadAllItems, (event: Event) => {
  let items = dataStore.get('items', { last_updated: null, data: [] });

  if (!items.last_updated || new Date().getTime() - new Date(items.last_updated).getTime() > 1000 * 60 * 60 * 2) {
    getItems().subscribe(response => {
      if (response.response.statusCode === 200) {
        items = { last_updated: new Date(), data: response.body };
        dataStore.set('items', items);
        event.sender.send(ItemActionTypes.LoadAllItemsDone, items.data);
      }
    });
  }

  event.sender.send(ItemActionTypes.LoadAllItemsDone, items.data);
});

/**
 * Shift Ipc Events
 */

ipcMain.on(ShiftActionTypes.LoadAllShifts, (event: Event) => {
  let shifts = dataStore.get('shifts', { last_updated: null, data: [] });

  shifts.data = shifts.data.map(MutateDataType.shift);

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
