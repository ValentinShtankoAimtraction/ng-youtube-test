import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {createReducer, on} from '@ngrx/store';
import {IDtItem} from 'src/app/models';
import * as videoActions from '../actions/video.actions';

export interface State extends EntityState<IDtItem> {
  loaded: boolean;
  loading: boolean;
  error: any;
  selectedVideos: string[];
}

export const adapter: EntityAdapter<IDtItem> = createEntityAdapter<IDtItem>();

export const initialState: State = adapter.getInitialState({
  loaded: false,
  loading: false,
  error: null,
  selectedVideos: []
});
const videoReducer = createReducer(
  initialState,
  on(videoActions.fetchItems, state => ({...state, loading: true})),
  on(videoActions.fetchMockItems, state => ({...state, loading: true})),
  on(videoActions.fetchItemsSuccess, (state, {items}) => (adapter.addMany(items, {
    ...state,
    loading: false,
    loaded: true
  }))),
  on(videoActions.selectItem, (state, {itemId}) => ({
    ...state,
    selectedVideos: [...state.selectedVideos, itemId]
  })),
  on(videoActions.unselectItem, (state, {itemId}) => ({
    ...state,
    selectedVideos: state.selectedVideos.filter((item) => item != itemId)
  })),
  on(videoActions.unselectItem, (state, {itemId}) => ({
    ...state,
    selectedVideos: state.selectedVideos.filter((item) => item != itemId)
  })),
  on(videoActions.videoError, (state, {error}) => ({
    ...state,
    loading: true,
    loaded: false,
    error: error
  }))
);

export function reducer(state = initialState, action): State {
  return videoReducer(state, action)
}

export const videoEntitySelectors = adapter.getSelectors();
