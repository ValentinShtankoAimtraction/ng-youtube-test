import {Action, createReducer, on} from '@ngrx/store';
import * as gridActions from '../actions/grid.actions';
export interface State {
  isActiveSelection: boolean
}

export const initialState: State = {
  isActiveSelection: true
};

const gridReducer = createReducer(
  initialState,
  on(gridActions.toggleSelection, state => ({...state, isActiveSelection: !state.isActiveSelection}))
);

export function reducer(state = initialState, action: Action) {
  return gridReducer(state, action)
}
