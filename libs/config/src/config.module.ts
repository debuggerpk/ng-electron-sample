import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { VendorModule } from '@reaction/vendor';
import { ElectronService } from 'ngx-electron';
import { ConfigEditComponent } from './components/config-edit/config-edit.component';
import { ConfigRootComponent } from './components/config-root/config-root.component';
import { ConfigRoutingModule } from './config.routing';
import { ConfigService } from './services';
import { ConfigEffects } from './state/config.effects';
import { configReducer, initialState as configInitialState } from './state/config.reducer';

@NgModule({
  imports: [
    CommonModule,
    VendorModule,
    StoreModule.forFeature('config', configReducer, { initialState: configInitialState }),
    EffectsModule.forFeature([ConfigEffects]),
    ConfigRoutingModule,
  ],
  providers: [ElectronService, ConfigService, ConfigEffects],
  declarations: [ConfigEditComponent, ConfigRootComponent],
})
export class ConfigModule {}
