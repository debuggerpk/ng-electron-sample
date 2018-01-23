import {Main} from './main.interfaces';
import {MainAction} from './main.actions';

export function mainReducer(state: Main, action: MainAction): Main {
  switch (action.type) {
    case 'DATA_LOADED': {
      return {...state, ...action.payload};
    }
    default: {
      return state;
    }
  }
}
