import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../../data/src/services';

@Component({
  selector: 'reaction-config-root',
  templateUrl: './config-root.component.html',
  styleUrls: ['./config-root.component.scss'],
})
export class ConfigRootComponent implements OnInit {
  constructor(private _configService: ConfigService) {}

  ngOnInit() {
    this._configService.getConfig();
  }
}
