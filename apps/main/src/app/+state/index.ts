import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { storeLogger } from 'ngrx-store-logger';
import { environment } from '../../environments/environment';
import { mainReducer } from './main.reducer';
import { RootState } from './states';

export const reducers: ActionReducerMap<RootState> = {
  main: mainReducer,
};

export const logStore = (reducer: ActionReducer<RootState>): any => storeLogger({ collapsed: true })(reducer);

export const metaReducers: MetaReducer<RootState>[] = !environment.production ? [logStore, storeFreeze] : [];
