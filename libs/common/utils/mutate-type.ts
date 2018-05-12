import { Shift } from '../models/shift';

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
  public static shift(shift: Shift) {
    shift.created_at = new Date(shift.created_at);
    shift.updated_at = new Date(shift.updated_at);

    if (shift.started_at) {
      shift.started_at = new Date(shift.started_at);
    }

    if (shift.ended_at) {
      shift.ended_at = new Date(shift.ended_at);
    }

    return shift;
  }
}
