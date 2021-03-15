import {getMockItems} from 'src/app/store/mock-items';
import * as videoActions from '../actions/video.actions';
import * as videoReducer from './video.reducer';
import {State} from './video.reducer';

describe('[Store] Grid reducer', () => {

  describe('unknown action', () => {
    it('should return the default state', () => {
      const initialState = videoReducer.initialState;
      const action = {
        type: 'Unknown'
      };
      const state = videoReducer.reducer(initialState, action);
      expect(state).toBe(initialState);
    });
  });

  describe('fetchItemsSuccess action', () => {
    it('should add items to store', () => {
      const initialState = videoReducer.initialState;
      const action = videoActions.fetchItemsSuccess({items: getMockItems()});

      const state = videoReducer.reducer(initialState, action);

      expect(state.loaded).toBe(true);
      expect(state.loading).toBe(false);
      expect(state.ids.length).toBe(getMockItems().length);
      expect(Object.values(state.entities).length).toBe(getMockItems().length);
    });
  });

  describe('fetchItems action', () => {
    it('should enable loading state', () => {
      const initialState = videoReducer.initialState;
      const action = videoActions.fetchItems();

      const state = videoReducer.reducer(initialState, action);

      expect(state.loading).toBe(true);
    })
  });

  describe('fetchMockItems action', () => {
    it('should enable loading state', () => {
      const initialState = videoReducer.initialState;
      const action = videoActions.fetchMockItems();

      const state = videoReducer.reducer(initialState, action);

      expect(state.loading).toBe(true);
    })
  });

  describe('selectItem action', () => {
    it('should add id of selected item to selectedVideos array', () => {
      const initialState = videoReducer.initialState;
      const item = {
        itemId: 'test1'
      };

      const action = videoActions.selectItem(item);

      const state = videoReducer.reducer(initialState, action);

      expect(state.selectedVideos).toContain(item.itemId)
    })
  });

  describe('unselectItem action', () => {
    it('should remove id of selected item from selectedVideos array', () => {
      const initialState: State = {
        ...videoReducer.initialState,
        selectedVideos: ['test1', 'test2', 'test3', 'test4', 'test4']
      };
      const item = {
        itemId: 'test1'
      };

      const action = videoActions.unselectItem(item);

      const state = videoReducer.reducer(initialState, action);

      expect(state.selectedVideos).not.toContain(item.itemId)
    })
  });

  describe('selectAll action', () => {
    it('should select all items', () => {
      const expectedIds = ['test1', 'test2', 'test3', 'test4', 'test4'];

      const initialState: State = {
        ...videoReducer.initialState,
        ids: expectedIds,
      };

      const action = videoActions.selectAll();

      const state = videoReducer.reducer(initialState, action);

      expect(state.selectedVideos).toEqual(expectedIds)
    })
  });

  describe('unselectAll action', () => {
    it('should clear array with selected ids', () => {
      const initialState: State = {
        ...videoReducer.initialState,
        selectedVideos: ['test1', 'test2', 'test3', 'test4', 'test4'],
      };

      const action = videoActions.unselectAll();

      const state = videoReducer.reducer(initialState, action);

      expect(state.selectedVideos.length).toBe(0)
    })
  });

  describe('videoFetchError action', () => {
    it('should remove id of selected item from selectedVideos array', () => {
      const initialState: State = {
        ...videoReducer.initialState,
        loading: true
      };
      const error = {
        error: 'someError'
      };

      const action = videoActions.videoFetchError(error);

      const state = videoReducer.reducer(initialState, action);

      expect(state.loading).toBe(false);
      expect(state.error).toBe(error.error);
    })
  });
  describe('videoFetchMockError action', () => {
    it('should remove id of selected item from selectedVideos array', () => {
      const initialState: State = {
        ...videoReducer.initialState,
        loading: true
      };
      const error = {
        error: 'someError'
      };

      const action = videoActions.videoFetchMockError(error);

      const state = videoReducer.reducer(initialState, action);

      expect(state.loading).toBe(false);
      expect(state.error).toBe(error.error);
    })
  });
});
