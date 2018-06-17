import { actions } from '@reaction/common';
import {
  Category,
  CategoryActionTypes,
  ConfigActionTypes,
  Discount,
  DiscountActionTypes,
  FluxStandardAction,
  Product,
  ProductActionTypes,
  OutletActionTypes,
  Section,
  SectionActionTypes,
  ShiftActionTypes,
  Shift,
} from '@reaction/common/models';
import { Event, ipcMain } from 'electron';
import { fromEvent, merge } from 'rxjs';
import { finalize, map, switchMap, take, tap } from 'rxjs/operators';
import { getForOutlet, getOutlet } from './api';
import { configStore, dataStore } from './store';
import { ofType } from './utils/rx-operators';
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
  // map(() => new actions.LoadAllShiftsDone(dataStore.get('shifts', []))),
  switchMap(() => getForOutlet<Array<Shift>>('shifts')),
  map(payload => new actions.LoadAllShiftsDone(payload)),
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

const getProducts$ = listener$.pipe(
  ofType<actions.LoadAllProducts>(ProductActionTypes.LoadAllProducts),
  switchMap(() => getForOutlet<Array<Product>>('products')),
  map(payload => new actions.LoadAllProductsDone(payload)),
);

const onGetAllData = () => {
  merge(
    getOutlet$.pipe(take(1)),
    getShift$.pipe(take(1)),
    getDiscounts$.pipe(take(1)),
    getSections$.pipe(take(1)),
    getCategories$.pipe(take(1)),
    getProducts$.pipe(take(1)),
  )
    .pipe(finalize(() => windowsRef.main.webContents.send('reaction', new actions.LoadAllDataDone())))
    .subscribe();
};

/**
 * Reducing all Listeners
 */

merge(
  getConfig$,
  saveConfig$,
  getOutlet$,
  getShift$,
  getDiscounts$,
  getSections$,
  getCategories$,
  getProducts$,
).subscribe(action => windowsRef.main.webContents.send('reaction', action));

listener$
  .pipe(
    ofType<actions.LoadAllData>(ConfigActionTypes.LoadAllData),
    tap(() => onGetAllData()),
  )
  .subscribe();
