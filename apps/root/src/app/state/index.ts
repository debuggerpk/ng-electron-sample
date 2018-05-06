import { RouterStateSnapshot } from '@angular/router';
import { RouterStateSerializer, routerReducer } from '@ngrx/router-store';
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { storeLogger } from 'ngrx-store-logger';
import { environment } from '../../environments/environment';
import { ReactionRouterState, RootState } from './states';

export class ReactionRouterSerializer implements RouterStateSerializer<ReactionRouterState> {
  serialize(routerState: RouterStateSnapshot): ReactionRouterState {
    let route = routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    const {
      url,
      root: { queryParams },
    } = routerState;
    const { params } = route;

    // Only return an object including the URL, params and query params
    // instead of the entire snapshot
    return { url, params, queryParams };
  }
}

export const reducers: ActionReducerMap<RootState> = {
  // main: mainReducer,
  router: routerReducer,
};

export const logStore = (reducer: ActionReducer<RootState>): any => storeLogger({ collapsed: true })(reducer);

export const metaReducers: MetaReducer<RootState>[] = !environment.production ? [logStore, storeFreeze] : [];
