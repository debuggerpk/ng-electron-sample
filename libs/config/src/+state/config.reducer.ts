import { Action } from '@ngrx/store';
import { ConfigActions, ConfigActionTypes } from './config.actions';
import { Configuration } from '../models/config';

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
};

export function configReducer(state = initialState, action: ConfigActions): Configuration {
  switch (action.type) {
    case ConfigActionTypes.GetConfig:
      return { ...state };

    case ConfigActionTypes.GetConfigFromElectron: {
      return { ...state, ...action.payload };
    }

    default:
      return { ...state };
  }
}
