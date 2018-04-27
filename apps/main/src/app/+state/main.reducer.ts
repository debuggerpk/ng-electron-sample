import { Main } from './main.interfaces';
import { MainActions, MainActionTypes } from './main.actions';

export function mainReducer(state: Main, action: MainActions): Main {
  switch (action.type) {
    case MainActionTypes.LoadData: {
      return { ...state, ...action.payload };
    }

    case MainActionTypes.DataLoaded: {
      return { ...state, ...action.payload };
    }

    default: {
      return state;
    }
  }
}
