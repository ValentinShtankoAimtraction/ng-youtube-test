import {Action} from '@ngrx/store';


export enum GridActionTypes {
  gridToggleSelection = '[Grid] Toggle selection'
}

export class ToggleSelection implements Action {
  readonly type = GridActionTypes.gridToggleSelection;

  constructor(public payload: boolean) {
  }
}

export type GridActions =
  | ToggleSelection;
