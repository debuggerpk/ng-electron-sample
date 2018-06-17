import { RouterStateSnapshot } from '@angular/router';
import { RouterStateSerializer, routerReducer } from '@ngrx/router-store';
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { storeLogger } from 'ngrx-store-logger';
import { environment } from '../../environments/environment';
import { ReactionRouter, RouterState } from '@reaction/common/models';

export class ReactionRouterSerializer implements RouterStateSerializer<ReactionRouter> {
  serialize(routerState: RouterStateSnapshot): ReactionRouter {
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

export const reducers: ActionReducerMap<RouterState> = {
  router: routerReducer,
};

export const logStore = (reducer: ActionReducer<RouterState>) =>
  storeLogger({
    collapsed: true,
    filter: { blacklist: ['@ngrx/store/update-reducers'] },
  })(reducer);

export const metaReducers: MetaReducer<RouterState>[] = !environment.production ? [logStore, storeFreeze] : [];
