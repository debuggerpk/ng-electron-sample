import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootState, Shift } from '@reaction/common/models';
import { selectAllShifts } from '@reaction/common/selectors';
import { Subscription } from 'rxjs';

@Component({
  selector: 'reaction-shifts-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class ShiftHomeComponent implements OnInit, OnDestroy {
  public shifts: Array<Shift>;

  private _shiftSubscription$: Subscription;

  constructor(private _store: Store<RootState>) {}

  ngOnInit() {
    this._shiftSubscription$ = this._store.select(selectAllShifts).subscribe(data => (this.shifts = data));
  }

  ngOnDestroy() {
    this._shiftSubscription$.unsubscribe();
  }
}
