import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ConfigService } from '@reaction/shared';

@Component({
  selector: 'reaction-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
})
export class RootComponent implements OnInit {
  constructor(private _configService: ConfigService) {}

  ngOnInit() {
    this._configService.getConfig();
  }
}
