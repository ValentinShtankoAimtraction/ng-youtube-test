import * as gridActions from '../actions/grid.actions';
import * as gridReducer from './grid.reducer';

describe('[Store] Grid reducer', () => {

  describe('unknown action', () => {
    it('should return the default state', () => {
      const initialState = gridReducer.initialState;
      const action = {
        type: 'Unknown'
      };
      const state = gridReducer.reducer(initialState, action);
      expect(state).toBe(initialState);
    });
  });

  describe('toggleSelection action', () => {
    it('should enable selection mode', () => {
      const initialState = {
        isActiveSelection: false,
        count: 5
      };

      const newState = {
        isActiveSelection: true,
        count: 5
      };

      const action = gridActions.toggleSelection({status: true});
      const state = gridReducer.reducer(initialState, action);

      expect(state).toEqual(newState);
    });
  });
});
