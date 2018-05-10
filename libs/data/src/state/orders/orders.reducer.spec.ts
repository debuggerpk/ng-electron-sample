import { OrdersLoaded } from './orders.actions';
import { ordersReducer, initialState } from './orders.reducer';

describe('ordersReducer', () => {
  it('should work', () => {
    const action: OrdersLoaded = new OrdersLoaded({});
    const actual = ordersReducer(initialState, action);
    expect(actual).toEqual({});
  });
});
