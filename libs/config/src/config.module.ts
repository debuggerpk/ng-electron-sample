import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VendorModule } from '@reaction/vendor';
import { ConfigEditComponent, ConfigRootComponent } from './components';
import { ConfigRoutingModule } from './config.routing';
import { DataModule } from '@reaction/data';

@NgModule({
  imports: [
    CommonModule,
    VendorModule,
    ConfigRoutingModule,
    DataModule,
  ],
  declarations: [ConfigEditComponent, ConfigRootComponent],
  exports: [DataModule],
})
export class ConfigModule {}
