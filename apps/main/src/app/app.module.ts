import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { AuthModule } from '@reaction/auth';
import { ConfigModule } from '@reaction/config';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { mainReducer } from './+state/main.reducer';
import { mainInitialState } from './+state/main.init';
import { MainEffects } from './+state/main.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
  imports: [
    // @npm vendor modules
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    // @reaction modules
    AuthModule,
    ConfigModule,
    StoreModule.forRoot({main: mainReducer}, {initialState: {main: mainInitialState}}),
    EffectsModule.forRoot([MainEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [MainEffects],
})
export class RootModule {}
