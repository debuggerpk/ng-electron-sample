import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { VendorModule } from '@reaction/vendor';
import { ElectronService } from 'ngx-electron';
import { ConfigService } from './services';
import { CategoriesEffects } from './state/categories/categories.effects';
import { categoriesReducer, initialState as categoriesInitialState } from './state/categories/categories.reducer';
import { ConfigEffects } from './state/config/config.effects';
import { configReducer, initialState as configInitialState } from './state/config/config.reducer';
import { InvoicesEffects } from './state/invoices/invoices.effects';
import { initialState as invoicesInitialState, invoicesReducer } from './state/invoices/invoices.reducer';
import { ItemsEffects } from './state/items/items.effects';
import { initialState as itemsInitialState, itemsReducer } from './state/items/items.reducer';
import { OrdersEffects } from './state/orders/orders.effects';
import { initialState as ordersInitialState, ordersReducer } from './state/orders/orders.reducer';
import { OutletEffects } from './state/outlet/outlet.effects';
import { initialState as outletInitialState, outletReducer } from './state/outlet/outlet.reducer';
import { ShiftsEffects } from './state/shifts/shifts.effects';
import { initialState as shiftsInitialState, shiftsReducer } from './state/shifts/shifts.reducer';

export const datumRoutes: Route[] = [];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(datumRoutes),
    VendorModule,
    StoreModule.forFeature('categories', categoriesReducer, { initialState: categoriesInitialState }),
    EffectsModule.forFeature([CategoriesEffects]),
    StoreModule.forFeature('config', configReducer, { initialState: configInitialState }),
    EffectsModule.forFeature([ConfigEffects]),
    StoreModule.forFeature('items', itemsReducer, { initialState: itemsInitialState }),
    EffectsModule.forFeature([ItemsEffects]),
    StoreModule.forFeature('orders', ordersReducer, { initialState: ordersInitialState }),
    EffectsModule.forFeature([OrdersEffects]),
    StoreModule.forFeature('outlet', outletReducer, { initialState: outletInitialState }),
    EffectsModule.forFeature([OutletEffects]),
    StoreModule.forFeature('shifts', shiftsReducer, { initialState: shiftsInitialState }),
    EffectsModule.forFeature([ShiftsEffects]),
    StoreModule.forFeature('invoices', invoicesReducer, { initialState: invoicesInitialState }),
    EffectsModule.forFeature([InvoicesEffects]),
  ],
  exports: [RouterModule, VendorModule],
  providers: [
    OutletEffects,
    ItemsEffects,
    CategoriesEffects,
    ConfigEffects,
    ShiftsEffects,
    OrdersEffects,
    InvoicesEffects,
    ElectronService,
    ConfigService,
  ],
})
export class DataModule {}
