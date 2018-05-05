import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '@reaction/shared';
import { ConfigEffects } from './state/config.effects';
import { configReducer, initialState as configInitialState } from './state/config.reducer';
import { ConfigEditComponent } from './components/config-edit/config-edit.component';
import { ConfigRoutingModule } from './config.routing';
import { ConfigRootComponent } from './components/config-root/config-root.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature('config', configReducer, { initialState: configInitialState }),
    EffectsModule.forFeature([ConfigEffects]),
    ConfigRoutingModule,
  ],
  providers: [ConfigEffects],
  declarations: [ConfigEditComponent, ConfigRootComponent],
})
export class ConfigModule {}
