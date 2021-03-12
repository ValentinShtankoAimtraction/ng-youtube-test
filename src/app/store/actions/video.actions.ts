import {createAction, props} from '@ngrx/store';

import {IDtItem} from 'src/app/models';

export enum VideoActionTypes {
  videoFetchItems = '[Video] Fetch items',
  videoFetchMockItems = '[Video] Fetch mock items',
  videoFetchItemsSuccess = '[Video] Fetch item success',
  videoSelectItem = '[Video] Select item',
  videoSelectAll = '[Video] Select all',
  videoUnselectAll = '[Video] Unselect all',
  videoUnselectItem = '[Video] Unselect item',
  videoFetchError = '[Video] Fetch failure',
  videoFetchMockError = '[Video] Fetch local failure',
}

export const fetchItems = createAction(VideoActionTypes.videoFetchItems);
export const fetchMockItems = createAction(VideoActionTypes.videoFetchMockItems);
export const selectAll = createAction(VideoActionTypes.videoSelectAll);
export const unselectAll = createAction(VideoActionTypes.videoUnselectAll);
export const fetchItemsSuccess = createAction(VideoActionTypes.videoFetchItemsSuccess, props<{ items: IDtItem[] }>());
export const selectItem = createAction(VideoActionTypes.videoSelectItem, props<{ itemId: string }>());
export const unselectItem = createAction(VideoActionTypes.videoUnselectItem, props<{ itemId: string }>());
export const videoFetchError = createAction(VideoActionTypes.videoFetchError, props<{ error: any }>());
export const videoFetchMockError = createAction(VideoActionTypes.videoFetchMockError, props<{ error: any }>());
