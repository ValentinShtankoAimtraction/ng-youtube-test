import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromReducers from '../reducers';

export const getVideoStore = createFeatureSelector('video');

export const getVideoEntities = createSelector(
  getVideoStore,
  fromReducers.video.videoEntitySelectors.selectAll
);

export const getVideos = createSelector(getVideoEntities, entities => Object.values(entities));

export const getVideoLoaded = createSelector(getVideoStore, (videoStore: fromReducers.video.State) => videoStore.loaded);

export const getVideoLoading = createSelector(getVideoStore, (videoStore: fromReducers.video.State) => videoStore.loading);

export const getSelectedVideos = createSelector(getVideoStore, (videoStore: fromReducers.video.State) => videoStore.selectedVideos);

export const getVideoErrors = createSelector(getVideoStore, (videoStore: fromReducers.video.State) => videoStore.error);
