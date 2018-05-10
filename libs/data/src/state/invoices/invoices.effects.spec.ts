import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { InvoicesEffects } from './invoices.effects';
import { LoadInvoices, InvoicesLoaded } from './invoices.actions';

import { Observable } from 'rxjs/Observable';

describe('InvoicesEffects', () => {
  let actions$: Observable<any>;
  let effects$: InvoicesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      providers: [InvoicesEffects, DataPersistence, provideMockActions(() => actions$)],
    });

    effects$ = TestBed.get(InvoicesEffects);
  });

  describe('someEffect', () => {
    it('should work', () => {
      actions$ = hot('-a-|', { a: new LoadInvoices({}) });
      expect(effects$.loadInvoices$).toBeObservable(hot('-a-|', { a: new InvoicesLoaded({}) }));
    });
  });
});
