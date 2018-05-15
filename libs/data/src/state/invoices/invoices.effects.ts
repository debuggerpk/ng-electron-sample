import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { InvoicesActions, InvoicesActionTypes, LoadInvoices, InvoicesLoaded } from '@reaction/common/actions';
import { InvoicesState } from './invoices.reducer';
import { DataPersistence } from '@nrwl/nx';

@Injectable()
export class InvoicesEffects {
  @Effect() effect$ = this.actions$.ofType(InvoicesActionTypes.InvoicesAction);

  @Effect()
  loadInvoices$ = this.dataPersistence.fetch(InvoicesActionTypes.LoadInvoices, {
    run: (action: LoadInvoices, state: InvoicesState) => {
      return new InvoicesLoaded(state);
    },

    onError: (action: LoadInvoices, error) => {
      console.error('Error', error);
    },
  });

  constructor(private actions$: Actions, private dataPersistence: DataPersistence<InvoicesState>) {}
}
