import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigService } from './services/config.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { configReducer, initialState as configInitialState } from './+state/config.reducer';
import { ConfigEffects } from './+state/config.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('config', configReducer, { initialState: configInitialState }),
    EffectsModule.forFeature([ConfigEffects]),
  ],
  providers: [ConfigService, ConfigEffects],
})
export class ConfigModule {}
