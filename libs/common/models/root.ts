import { Params } from '@angular/router';
import { RouterReducerState } from '@ngrx/router-store';
import { CategoryState } from './category';
import { Configuration } from './config';
import { DiscountState } from './discount';
import { Outlet } from './outlet';
import { ProductState } from './product';
import { SectionState } from './section';
import { ShiftState } from './shift';
/**
 * Interface for the 'Router' state
 */
export interface ReactionRouter {
  url: string;
  params: Params;
  queryParams: Params;
}

/**
 * Interface to the part of the Store containing MainState
 * and other information related to MainData.
 */
export interface RouterState {
  readonly router: RouterReducerState<ReactionRouter>;
}

export interface RootState {
  readonly categories: CategoryState;
  readonly config: Configuration;
  readonly discounts: DiscountState;
  readonly outlet: Outlet;
  readonly products: ProductState;
  readonly router: RouterReducerState<ReactionRouter>;
  readonly sections: SectionState;
  readonly shifts: ShiftState;
}
