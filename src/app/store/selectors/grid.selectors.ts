import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromReducers from '../reducers';

export const getGridStore = createFeatureSelector('grid');

export const isActiveSelection = createSelector(
  getGridStore,
  (store: fromReducers.grid.State) => store.isActiveSelection
);
export const getCount = createSelector(
  getGridStore,
  (store: fromReducers.grid.State) => store.count
);
