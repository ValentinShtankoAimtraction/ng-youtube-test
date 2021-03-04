import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import {YtDataService} from 'src/app/services/yt-data.service';
import {VideoActionTypes} from 'src/app/store/actions/video.actions';
import * as videoActions from '../actions/video.actions';

@Injectable()
export class VideoEffects {
  fetchVideos$ = createEffect(() => this._actions$.pipe(
    ofType(VideoActionTypes.videoFetchItems),
    switchMap(() =>
      this._ytData.fetchVideos().pipe(
        map(videos => {
          return videoActions.fetchItemsSuccess({items: videos})
        }),
        catchError(error => {
          return of(videoActions.videoError({error: error}))
        })
      )
    )
  ));

  fetchMockVideos$ = createEffect(() => this._actions$.pipe(
    ofType(VideoActionTypes.videoFetchMockItems),
    switchMap(() =>
      this._ytData.fetchMockVideos().pipe(
        map(videos => {
          return videoActions.fetchItemsSuccess({items: videos})
        }),
        catchError(error => {
          return of(videoActions.videoError({error: error}))
        })
      )
    )
  ));

  fetchError$ = createEffect(() => this._actions$.pipe(
    ofType(VideoActionTypes.videoError),
    map(() =>
      videoActions.fetchMockItems()
    )
  ));

  constructor(private _actions$: Actions, private _ytData: YtDataService) {
  }
}
