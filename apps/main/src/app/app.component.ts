import { Component, OnInit } from '@angular/core';
import { ConfigService } from '@reaction/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private _config;

  constructor(private _configService: ConfigService) { }

  ngOnInit() {

  }

}
