import {Action} from '@ngrx/store';

import {IDtItem} from 'src/app/models';

export enum VideoActionTypes {
  videoFetchItems = '[Video] Fetch items',
  videoFetchMockItems = '[Video] Fetch mock items',
  videoFetchItemsSuccess = '[Video] Fetch item success',
  videoSelectItem = '[Video] Select item',
  videoSelectItemSuccess = '[Video] Select item success',
  videoUnselectItem = '[Video] Unselect item',
  videoUnselectItemSuccess = '[Video] Unselect item success',
  videoError = '[Video] Error',
}

export class FetchItems implements Action {
  readonly type = VideoActionTypes.videoFetchItems;
}

export class FetchMockItems implements Action {
  readonly type = VideoActionTypes.videoFetchMockItems;
}

export class FetchItemsSuccess implements Action {
  readonly type = VideoActionTypes.videoFetchItemsSuccess;

  constructor(public payload: IDtItem[]) {
  }
}

export class SelectItem implements Action {
  readonly type = VideoActionTypes.videoSelectItem;

  constructor(public payload: string) {
  }
}

export class SelectItemSuccess implements Action {
  readonly type = VideoActionTypes.videoSelectItemSuccess;

  constructor(public payload: string[]) {
  }
}

export class UnselectItem implements Action {
  readonly type = VideoActionTypes.videoUnselectItem;

  constructor(public payload: string) {
  }
}

export class UnselectItemSuccess implements Action {
  readonly type = VideoActionTypes.videoUnselectItemSuccess;

  constructor(public payload: string[]) {
  }
}

export class VideoError implements Action {
  readonly type = VideoActionTypes.videoError;

  constructor(public payload: any) {
  }
}

export type VideoActions =
  | FetchItems
  | FetchMockItems
  | FetchItemsSuccess
  | SelectItem
  | SelectItemSuccess
  | UnselectItem
  | UnselectItemSuccess
  | VideoError;
