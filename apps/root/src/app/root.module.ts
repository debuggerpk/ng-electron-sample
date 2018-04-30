import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NxModule } from '@nrwl/nx';

// @reaction modules
import { AuthModule } from '@reaction/auth';
import { ConfigModule } from '@reaction/config';
import { VendorModule } from '@reaction/vendor';

// App Modules
import { RootComponent } from './root.component';

// Helpers
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { mainReducer, initialState as mainInitialState } from './+state/main.reducer';
import { MainEffects } from './+state/main.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';
import { reducers, metaReducers } from './+state';

@NgModule({
  imports: [
    // @npm vendor modules
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot([], { initialNavigation: false }),
    VendorModule,
    // @reaction modules
    AuthModule,
    ConfigModule,
    // @ngrx redux store
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([MainEffects]),
    StoreRouterConnectingModule,
  ],
  declarations: [RootComponent],
  bootstrap: [RootComponent],
  providers: [MainEffects],
})
export class RootModule {}
