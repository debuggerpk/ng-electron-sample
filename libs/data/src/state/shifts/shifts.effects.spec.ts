import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { ShiftsEffects } from './shifts.effects';
import { LoadShifts, ShiftsLoaded } from './shifts.actions';

import { Observable } from 'rxjs/Observable';

describe('ShiftsEffects', () => {
  let actions$: Observable<any>;
  let effects$: ShiftsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      providers: [ShiftsEffects, DataPersistence, provideMockActions(() => actions$)],
    });

    effects$ = TestBed.get(ShiftsEffects);
  });

  describe('someEffect', () => {
    it('should work', () => {
      actions$ = hot('-a-|', { a: new LoadShifts({}) });
      expect(effects$.loadShifts$).toBeObservable(hot('-a-|', { a: new ShiftsLoaded({}) }));
    });
  });
});
