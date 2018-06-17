import { Params, RouterState } from '@angular/router';
import { RouterReducerState } from '@ngrx/router-store';
import { ConfigState } from './config';
import { ShiftState } from './shift';
import { CategoryState } from './category';
import { DiscountState } from './discount';
import { ProductState } from './product';
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

export interface RootState extends CategoryState, ProductState, ConfigState, DiscountState, RouterState {
  readonly shifts: ShiftState;
}
