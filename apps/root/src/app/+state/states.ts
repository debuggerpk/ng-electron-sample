/**
 * Interface for the 'Main' data used in
 *  - MainState, and
 *  - mainReducer
 */
export interface MainState {}

/**
 * Interface to the part of the Store containing MainState
 * and other information related to MainData.
 */
export interface RootState {
  readonly main: MainState;
}
