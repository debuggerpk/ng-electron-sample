import { Action } from '@ngrx/store';
import { ConfigActions, ConfigActionTypes } from './config.actions';
import { Configuration } from '@reaction/config/src/models/config';

/**
 * Interface to the part of the Store containing ConfigState
 * and other information related to ConfigData.
 */
export interface ConfigState {
  readonly config: Configuration;
}

export const initialState: Configuration = {
  outlet_id: '',
  local_gateway: '',
  api_gateway: '',
  api_key: '',
};

export function configReducer(state = initialState, action: ConfigActions): Configuration {
  switch (action.type) {
    case ConfigActionTypes.ConfigAction:
      return state;

    case ConfigActionTypes.ConfigLoaded: {
      return { ...state, ...action.payload };
    }

    default:
      return state;
  }
}
