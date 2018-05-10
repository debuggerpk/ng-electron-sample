import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { OutletEffects } from './outlet.effects';
import { LoadOutlet, OutletLoaded } from './outlet.actions';

import { Observable } from 'rxjs/Observable';

describe('OutletEffects', () => {
  let actions$: Observable<any>;
  let effects$: OutletEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      providers: [OutletEffects, DataPersistence, provideMockActions(() => actions$)],
    });

    effects$ = TestBed.get(OutletEffects);
  });

  describe('someEffect', () => {
    it('should work', () => {
      actions$ = hot('-a-|', { a: new LoadOutlet({}) });
      expect(effects$.loadOutlet$).toBeObservable(hot('-a-|', { a: new OutletLoaded({}) }));
    });
  });
});
