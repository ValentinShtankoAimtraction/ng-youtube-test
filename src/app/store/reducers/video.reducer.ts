import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {IDtItem} from 'src/app/models';
import {VideoActions, VideoActionTypes} from 'src/app/store/actions/video.actions';

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

export function reducer(state = initialState, action: VideoActions): State {
  switch (action.type) {
    case VideoActionTypes.videoFetchItems:
    case VideoActionTypes.videoFetchMockItems:
      return {
        ...state,
        loading: true
      };
    case VideoActionTypes.videoFetchItemsSuccess:
      return adapter.addMany(action.payload, {
        ...state,
        loading: false,
        loaded: true
      });
    case VideoActionTypes.videoSelectItem:
      return {
        ...state,
        selectedVideos: [...state.selectedVideos, action.payload]
      };
    case VideoActionTypes.videoUnselectItem:
      return {
        ...state,
        selectedVideos: state.selectedVideos.filter((item) => item != action.payload)
      };
    case VideoActionTypes.videoError:
      return {
        ...state,
        loaded: false,
        loading: true,
        error: action.payload
      };
    default:
      return state;
  }
}

export const videoEntitySelectors = adapter.getSelectors();
