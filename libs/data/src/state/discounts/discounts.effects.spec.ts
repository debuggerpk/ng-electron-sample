import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { DiscountsEffects } from './discounts.effects';
import { LoadDiscounts, DiscountsLoaded } from './discounts.actions';

import { Observable } from 'rxjs/Observable';

describe('DiscountsEffects', () => {
  let actions$: Observable<any>;
  let effects$: DiscountsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      providers: [DiscountsEffects, DataPersistence, provideMockActions(() => actions$)],
    });

    effects$ = TestBed.get(DiscountsEffects);
  });

  describe('someEffect', () => {
    it('should work', () => {
      actions$ = hot('-a-|', { a: new LoadDiscounts({}) });
      expect(effects$.loadDiscounts$).toBeObservable(hot('-a-|', { a: new DiscountsLoaded({}) }));
    });
  });
});
