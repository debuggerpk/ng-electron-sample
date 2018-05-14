import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VendorModule } from '@reaction/vendor';
import { ConfigEditComponent } from './components';
import { ConfigRoutingModule } from './config.routing';
import { DataModule } from '@reaction/data';

@NgModule({
  imports: [CommonModule, VendorModule, ConfigRoutingModule, DataModule],
  declarations: [ConfigEditComponent],
  exports: [DataModule, ConfigRoutingModule],
})
export class ConfigModule {}
