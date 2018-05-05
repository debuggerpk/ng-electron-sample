import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '@reaction/shared';
import { ConfigComponent } from './components/config/config.component';
import { ConfigRoutes, ConfigRoutingModule } from './config.routing';
import { configReducer, initialState as configInitialState } from './+state/config.reducer';
import { ConfigEffects } from './+state/config.effects';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature('config', configReducer, { initialState: configInitialState }),
    EffectsModule.forFeature([ConfigEffects]),
    ConfigRoutingModule,
  ],
  providers: [ConfigEffects],
  declarations: [ConfigComponent],
  exports: [ConfigRoutingModule, ConfigComponent],
})
export class ConfigModule {}
