import { actions } from '@reaction/common';
import {
  ShiftActionTypes,
  ConfigActionTypes,
  OutletActionTypes,
  FluxStandardAction,
  DiscountActionTypes,
  SectionActionTypes,
  CategoryActionTypes,
  ItemActionTypes,
  Discount,
  Section,
  Category,
  Item,
} from '@reaction/common/models';
import { Event, ipcMain } from 'electron';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { merge } from 'rxjs/observable/merge';
import { filter, map, switchMap, tap, take, finalize } from 'rxjs/operators';
import { ofType } from './utils/rx-operators';
import { getOutlet, getForOutlet } from './api';
import { configStore, dataStore } from './store';
import { windowsRef } from './windows-ref';

const FB_CONFIG = {
  outlet_id: '',
  local_gateway: '',
  api_key: '',
  api_gateway: '',
};

// TODO: investigate for better rxjs conformity
const listener$ = fromEvent<FluxStandardAction>(
  ipcMain,
  'reaction',
  (event: Event, action: FluxStandardAction) => action,
);

const getConfig$ = listener$.pipe(
  ofType<actions.GetConfigFromElectron>(ConfigActionTypes.GetConfigFromElectron),
  map(() => new actions.GetConfigDone(configStore.get('configuration', FB_CONFIG))),
);

const saveConfig$ = listener$.pipe(
  ofType<actions.SaveConfigToElectron>(ConfigActionTypes.SaveConfigToElectron),
  tap(action => configStore.set('configuration', action.payload)),
  map(action => new actions.SaveConfigDone(action.payload)),
);

const getOutlet$ = listener$.pipe(
  ofType(OutletActionTypes.LoadOutlet),
  switchMap(() => getOutlet()),
  map(payload => new actions.LoadOutletDone(payload)),
);

const getShift$ = listener$.pipe(
  ofType<actions.LoadAllShifts>(ShiftActionTypes.LoadAllShifts),
  map(() => new actions.LoadAllShiftsDone(dataStore.get('shifts', []))),
);

const getDiscounts$ = listener$.pipe(
  ofType<actions.LoadAllDiscounts>(DiscountActionTypes.LoadAllDiscounts),
  switchMap(() => getForOutlet<Array<Discount>>('discounts')),
  map(payload => new actions.LoadAllDiscountsDone(payload)),
);

const getSections$ = listener$.pipe(
  ofType<actions.LoadAllSections>(SectionActionTypes.LoadAllSections),
  switchMap(() => getForOutlet<Array<Section>>('sections')),
  map(payload => new actions.LoadAllSectionsDone(payload)),
);

const getCategories$ = listener$.pipe(
  ofType<actions.LoadAllCategories>(CategoryActionTypes.LoadAllCategories),
  switchMap(() => getForOutlet<Array<Category>>('categories')),
  map(payload => new actions.LoadAllCategoriesDone(payload)),
);

const getItems$ = listener$.pipe(
  ofType<actions.LoadAllItems>(ItemActionTypes.LoadAllItems),
  switchMap(() => getForOutlet<Array<Item>>('items')),
  map(payload => new actions.LoadAllItemsDone(payload)),
);

const reducer$ = merge(
  getConfig$,
  saveConfig$,
  getOutlet$,
  getShift$,
  getDiscounts$,
  getSections$,
  getCategories$,
  getItems$,
  // getAllData$,
).subscribe(action => windowsRef.main.webContents.send('reaction', action));

const getAllData$ = listener$
  .pipe(
    ofType<actions.LoadAllData>(ConfigActionTypes.LoadAllData),
    tap(() => onGetAllData()),
  )
  .subscribe();

const onGetAllData = () => {
  merge(
    getOutlet$.pipe(take(1)),
    getShift$.pipe(take(1)),
    getDiscounts$.pipe(take(1)),
    getSections$.pipe(take(1)),
    getCategories$.pipe(take(1)),
    getItems$.pipe(take(1)),
  )
    .pipe(finalize(() => windowsRef.main.webContents.send('reaction', new actions.LoadAllDataDone())))
    .subscribe();
};
