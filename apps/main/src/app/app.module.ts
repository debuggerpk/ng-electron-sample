import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NxModule } from '@nrwl/nx';

// @reaction modules
import { AuthModule } from '@reaction/auth';
import { ConfigModule } from '@reaction/config';
import { VendorModule } from '@reaction/vendor';

// App Modules
import { mainReducer } from './+state/main.reducer';
import { mainInitialState } from './+state/main.init';
import { MainEffects } from './+state/main.effects';
import { AppComponent } from './app.component';

// Helpers
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    // @npm vendor modules
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    VendorModule,
    // @reaction modules
    AuthModule,
    ConfigModule,
    // @ngrx redux store
    StoreModule.forRoot({ main: mainReducer }, { initialState: { main: mainInitialState } }),
    EffectsModule.forRoot([MainEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [MainEffects],
})
export class RootModule {}
