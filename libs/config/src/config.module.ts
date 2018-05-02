import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { VendorModule } from '@reaction/vendor';
import { ElectronService } from 'ngx-electron';
import { ConfigComponent } from './components/config/config.component';
import { ConfigRoutes, ConfigRoutingModule } from './config.routing';
import { ConfigService } from './services/config.service';
import { configReducer, initialState as configInitialState } from './+state/config.reducer';
import { ConfigEffects } from './+state/config.effects';

@NgModule({
  imports: [
    CommonModule,
    VendorModule,
    StoreModule.forFeature('config', configReducer, { initialState: configInitialState }),
    EffectsModule.forFeature([ConfigEffects]),
    // ConfigRoutingModule,
  ],
  providers: [ElectronService, ConfigService, ConfigEffects],
  declarations: [ConfigComponent],
  // exports: [RouterModule, VendorModule],
})
export class ConfigModule {}
