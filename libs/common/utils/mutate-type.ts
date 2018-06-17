import { Shift } from '../models/shift';
import { Discount } from '@reaction/common/models';

/**
 * We need this when reading the data from files stored locally.
 *
 * @export
 * @class MutateType
 */
export class MutateDataType {
  /**
   * Returns the shift with properties mapped correctly to proper data types
   *
   * @static
   * @param {Shift} shift
   * @returns
   *
   * @memberOf MutateDataType
   */
  public static shift(shift: Shift): Shift {
    return {
      ...shift,
      created_at: new Date(shift.created_at),
      updated_at: new Date(shift.updated_at),
      started_at: shift.started_at ? new Date(shift.started_at) : null,
      ended_at: shift.ended_at ? new Date(shift.ended_at) : null,
    };
  }

  public static shifts(shifts: Array<Shift>): Array<Shift> {
    return shifts.map(shift => this.shift(shift));
  }

  public static discount(discount: Discount) {
    return { ...discount }
  }

  public static discounts(discounts: Array<Discount>): Array<Discount> {
    return discounts.map(discount => this.discount(discount));
  }
}

