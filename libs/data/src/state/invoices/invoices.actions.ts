import { Action } from '@ngrx/store';

export enum InvoicesActionTypes {
  InvoicesAction = '[Invoices] Action',
  LoadInvoices = '[Invoices] Load Data',
  InvoicesLoaded = '[Invoices] Data Loaded',
}

export class Invoices implements Action {
  readonly type = InvoicesActionTypes.InvoicesAction;
}
export class LoadInvoices implements Action {
  readonly type = InvoicesActionTypes.LoadInvoices;
  constructor(public payload: any) {}
}

export class InvoicesLoaded implements Action {
  readonly type = InvoicesActionTypes.InvoicesLoaded;
  constructor(public payload: any) {}
}

export type InvoicesActions = Invoices | LoadInvoices | InvoicesLoaded;
