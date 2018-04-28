import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ElectronService } from 'ngx-electron';
import { ConfigService } from './services/config.service';
import { configReducer, initialState as configInitialState } from './+state/config.reducer';
import { ConfigEffects } from './+state/config.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('config', configReducer, { initialState: configInitialState }),
    EffectsModule.forFeature([ConfigEffects]),
  ],
  providers: [ElectronService, ConfigService, ConfigEffects],
})
export class ConfigModule {}
