import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { AuthModule } from '@reaction/auth';
import { NgxElectronModule } from 'ngx-electron';
import { ConfigService } from '@reaction/config';

@NgModule({
  imports: [
    BrowserModule,
    NgxElectronModule,
    NxModule.forRoot(),
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [AuthModule, ConfigService],
})
export class RootModule {}
