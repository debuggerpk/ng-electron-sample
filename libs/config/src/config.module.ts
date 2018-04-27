import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ConfigService } from './services/config.service';

@NgModule({
  imports: [CommonModule],
  providers: [ConfigService],
})
export class ConfigModule {}
