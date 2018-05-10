import { Action } from '@ngrx/store';

export enum CategoriesActionTypes {
  CategoriesAction = '[Categories] Action',
  LoadCategories = '[Categories] Load Data',
  CategoriesLoaded = '[Categories] Data Loaded',
}

export class Categories implements Action {
  readonly type = CategoriesActionTypes.CategoriesAction;
}
export class LoadCategories implements Action {
  readonly type = CategoriesActionTypes.LoadCategories;
  constructor(public payload: any) {}
}

export class CategoriesLoaded implements Action {
  readonly type = CategoriesActionTypes.CategoriesLoaded;
  constructor(public payload: any) {}
}

export type CategoriesActions = Categories | LoadCategories | CategoriesLoaded;
