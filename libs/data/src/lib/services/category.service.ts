import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootState, Category, CategoryActionTypes } from '@reaction/common/models';
import { ElectronService } from 'ngx-electron';
import { Event } from 'electron';
import { LoadAllCategoriesDone } from '@reaction/common/actions';

@Injectable()
export class CategoryService {
  constructor() {}
}
