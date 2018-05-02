import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NxModule } from '@nrwl/nx';
import { AuthModule } from '@reaction/auth';
import { ConfigModule } from '@reaction/config';
import { VendorModule } from '@reaction/vendor';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '../environments/environment';
import { RootComponent } from './root.component';
import { MainEffects } from './+state/main.effects';
import { reducers, metaReducers, ReactionRouterSerializer } from './+state';
import { RootRoutes, RootRoutingModule } from './root.routing';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    // @npm vendor modules
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    NxModule.forRoot(),
    VendorModule,
    RootRoutingModule,
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
  providers: [MainEffects, { provide: RouterStateSerializer, useClass: ReactionRouterSerializer }],
})
export class RootModule {}
