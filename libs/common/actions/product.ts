import { ProductActionTypes, Product, FluxStandardAction } from '@reaction/common/models';

export class LoadAllProducts implements FluxStandardAction {
  readonly type = ProductActionTypes.LoadAllProducts;
}

export class LoadAllProductsDone implements FluxStandardAction {
  readonly type = ProductActionTypes.LoadAllProductsDone;
  constructor(public payload: Array<Product>) {}
}

export type ItemActions = LoadAllProducts | LoadAllProductsDone;
