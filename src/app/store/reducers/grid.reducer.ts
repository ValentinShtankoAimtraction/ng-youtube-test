import {Action, createReducer, on} from '@ngrx/store';
import * as gridActions from '../actions/grid.actions';

export interface State {
  isActiveSelection: boolean,
  count: number
}

export const initialState: State = {
  isActiveSelection: true,
  count: 50
};

const gridReducer = createReducer(
  initialState,
  on(gridActions.toggleSelection, state => ({...state, isActiveSelection: !state.isActiveSelection}))
);

export function reducer(state: State, action: Action) {
  return gridReducer(state, action)
}
