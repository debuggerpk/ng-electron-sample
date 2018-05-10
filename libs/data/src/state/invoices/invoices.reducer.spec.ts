import { InvoicesLoaded } from './invoices.actions';
import { invoicesReducer, initialState } from './invoices.reducer';

describe('invoicesReducer', () => {
  it('should work', () => {
    const action: InvoicesLoaded = new InvoicesLoaded({});
    const actual = invoicesReducer(initialState, action);
    expect(actual).toEqual({});
  });
});
