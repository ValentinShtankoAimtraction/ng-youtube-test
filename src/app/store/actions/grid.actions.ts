import {createAction, props} from '@ngrx/store';

export enum GridActionTypes {
  gridToggleSelection = '[Grid] Toggle selection'
}

export const toggleSelection = createAction(GridActionTypes.gridToggleSelection, props<{ status: boolean }>());

