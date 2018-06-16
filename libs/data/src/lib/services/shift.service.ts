import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';

/**
 * All we need to with shifts
 *
 * @export
 * @class ShiftService
 */
@Injectable()
export class ShiftService {
  constructor(private _electron: ElectronService) {}
}
