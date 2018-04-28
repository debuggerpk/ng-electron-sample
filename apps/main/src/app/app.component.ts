import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MainState } from './+state/states';
import { LoadMain } from './+state/main.actions';

@Component({
  selector: 'reaction-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit() {}
}
