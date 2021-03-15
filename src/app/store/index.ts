import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {VideoEffects} from './effects/video.effects';
import {environment} from 'src/environments/environment';
import * as fromReducers from './reducers';

export interface State {
  video: fromReducers.video.State;
  grid: fromReducers.grid.State;
}

export const reducers: ActionReducerMap<State> = {
  video: fromReducers.video.reducer,
  grid: fromReducers.grid.reducer
};

export const effects = [VideoEffects];


