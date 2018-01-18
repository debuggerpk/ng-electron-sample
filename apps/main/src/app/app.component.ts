import { Component, OnInit } from '@angular/core';
import { AuthModule } from '@retail-reaction/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private _authModule: AuthModule) { }

  ngOnInit() {
    console.log(this._authModule);
  }

}
