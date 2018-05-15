import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { VendorModule } from '@reaction/vendor';
import { ElectronService } from 'ngx-electron';
import {
  CategoryService,
  ConfigService,
  DiscountService,
  ItemService,
  OutletService,
  SectionService,
  ShiftService,
} from './services';
import { IpcService } from './services/ipc.service';
import { IpcReceiverService } from './services/ipc-receiver.service';
import { IpcSenderService } from './services/ipc-sender.service';
import { CategoryEffects } from './state/categories/categories.effects';
import { categoriesReducer, initialState as categoriesInitialState } from './state/categories/categories.reducer';
import { ConfigEffects } from './state/config/config.effects';
import { configReducer, initialState as configInitialState } from './state/config/config.reducer';
import { DiscountsEffects } from './state/discounts/discounts.effects';
import { discountsReducer, initialState as discountsInitialState } from './state/discounts/discounts.reducer';
import { InvoicesEffects } from './state/invoices/invoices.effects';
import { initialState as invoicesInitialState, invoicesReducer } from './state/invoices/invoices.reducer';
import { ItemsEffects } from './state/items/items.effects';
import { initialState as itemsInitialState, itemsReducer } from './state/items/items.reducer';
import { OrdersEffects } from './state/orders/orders.effects';
import { initialState as ordersInitialState, ordersReducer } from './state/orders/orders.reducer';
import { OutletEffects } from './state/outlet/outlet.effects';
import { initialState as outletInitialState, outletReducer } from './state/outlet/outlet.reducer';
import { SectionsEffects } from './state/sections/sections.effects';
import { initialState as sectionsInitialState, sectionsReducer } from './state/sections/sections.reducer';
import { ShiftsEffects } from './state/shifts/shifts.effects';
import { shiftsReducer } from './state/shifts/shifts.reducer';

@NgModule({
  imports: [
    CommonModule,
    VendorModule,
    StoreModule.forFeature('categories', categoriesReducer, { initialState: categoriesInitialState }),
    EffectsModule.forFeature([CategoryEffects]),
    StoreModule.forFeature('config', configReducer, { initialState: configInitialState }),
    EffectsModule.forFeature([ConfigEffects]),
    StoreModule.forFeature('discounts', discountsReducer, { initialState: discountsInitialState }),
    EffectsModule.forFeature([DiscountsEffects]),
    StoreModule.forFeature('items', itemsReducer, { initialState: itemsInitialState }),
    EffectsModule.forFeature([ItemsEffects]),
    StoreModule.forFeature('orders', ordersReducer, { initialState: ordersInitialState }),
    EffectsModule.forFeature([OrdersEffects]),
    StoreModule.forFeature('outlet', outletReducer, { initialState: outletInitialState }),
    EffectsModule.forFeature([OutletEffects]),
    StoreModule.forFeature('shifts', shiftsReducer),
    EffectsModule.forFeature([ShiftsEffects]),
    StoreModule.forFeature('invoices', invoicesReducer, { initialState: invoicesInitialState }),
    EffectsModule.forFeature([InvoicesEffects]),
    StoreModule.forFeature('sections', sectionsReducer, { initialState: sectionsInitialState }),
    EffectsModule.forFeature([SectionsEffects]),
  ],
  exports: [VendorModule],
  providers: [
    CategoryEffects,
    CategoryService,
    ConfigEffects,
    ConfigService,
    DiscountsEffects,
    DiscountService,
    ElectronService,
    InvoicesEffects,
    IpcReceiverService,
    IpcSenderService,
    IpcService,
    ItemsEffects,
    ItemService,
    OrdersEffects,
    OutletEffects,
    OutletService,
    SectionsEffects,
    SectionService,
    ShiftsEffects,
    ShiftService,
  ],
})
export class DataModule {}
