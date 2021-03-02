import {GridActions, GridActionTypes} from 'src/app/store/actions/grid.actions';

export interface State {
  isActiveSelection: boolean
}

export const initialState: State = {
  isActiveSelection: true
};

export function reducer(state = initialState, action: GridActions) {
  switch (action.type) {
    case GridActionTypes.gridToggleSelection:
      return {
        ...state,
        isActiveSelection: !state.isActiveSelection
      };
    default:
      return state
  }
}
