import { Params } from '@angular/router';
import { RouterReducerState } from '@ngrx/router-store';

/**
 * Interface for the 'Router' state
 */
export interface ReactionRouterState {
  url: string;
  params: Params;
  queryParams: Params;
}

/**
 * Interface to the part of the Store containing MainState
 * and other information related to MainData.
 */
export interface RootState {
  readonly router: RouterReducerState<ReactionRouterState>;
  // readonly [key: string]: any;
}
