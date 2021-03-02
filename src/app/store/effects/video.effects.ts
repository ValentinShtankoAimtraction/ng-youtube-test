import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import {YtDataService} from 'src/app/services/yt-data.service';
import {FetchItemsSuccess, FetchMockItems, VideoActionTypes, VideoError} from 'src/app/store/actions/video.actions';

@Injectable()
export class VideoEffects {
  fetchVideos$ = createEffect(() => this._actions$.pipe(
    ofType(VideoActionTypes.videoFetchItems),
    switchMap(() =>
      this._ytData.fetchVideos().pipe(
        map(videos => {
          console.log(videos);
          return new FetchItemsSuccess(videos)
        }),
        catchError(error => {
          console.log(error);
          return of(new VideoError(error))
        })
      )
    )
  ));

  fetchMockVideos$ = createEffect(() => this._actions$.pipe(
    ofType(VideoActionTypes.videoFetchMockItems),
    switchMap(() =>
      this._ytData.fetchMockVideos().pipe(
        map(videos => {
          console.log(videos);
          return new FetchItemsSuccess(videos)
        }),
        catchError(error => {
          console.log(error);
          return of(new VideoError(error))
        })
      )
    )
  ));

  fetchError$ = createEffect(() => this._actions$.pipe(
    ofType(VideoActionTypes.videoError),
    map(() =>
      new FetchMockItems()
    )
  ));

  constructor(private _actions$: Actions, private _ytData: YtDataService) {
  }
}
