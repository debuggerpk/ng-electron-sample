import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { OrdersEffects } from './orders.effects';
import { LoadOrders, OrdersLoaded } from './orders.actions';

import { Observable } from 'rxjs/Observable';

describe('OrdersEffects', () => {
  let actions$: Observable<any>;
  let effects$: OrdersEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      providers: [OrdersEffects, DataPersistence, provideMockActions(() => actions$)],
    });

    effects$ = TestBed.get(OrdersEffects);
  });

  describe('someEffect', () => {
    it('should work', () => {
      actions$ = hot('-a-|', { a: new LoadOrders({}) });
      expect(effects$.loadOrders$).toBeObservable(hot('-a-|', { a: new OrdersLoaded({}) }));
    });
  });
});
