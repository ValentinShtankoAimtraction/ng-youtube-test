import {createAction, props} from '@ngrx/store';

import {IDtItem} from 'src/app/models';

export enum VideoActionTypes {
  videoFetchItems = '[Video] Fetch items',
  videoFetchMockItems = '[Video] Fetch mock items',
  videoFetchItemsSuccess = '[Video] Fetch item success',
  videoSelectItem = '[Video] Select item',
  videoUnselectItem = '[Video] Unselect item',
  videoError = '[Video] Error',
}

export const fetchItems = createAction(VideoActionTypes.videoFetchItems);
export const fetchMockItems = createAction(VideoActionTypes.videoFetchMockItems);
export const fetchItemsSuccess = createAction(VideoActionTypes.videoFetchItemsSuccess, props<{ items: IDtItem[] }>());
export const selectItem = createAction(VideoActionTypes.videoSelectItem, props<{ itemId: string }>());
export const unselectItem = createAction(VideoActionTypes.videoUnselectItem, props<{ itemId: string }>());
export const videoError = createAction(VideoActionTypes.videoError, props<{ error: any }>());
