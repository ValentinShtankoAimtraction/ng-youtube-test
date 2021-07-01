import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {of} from 'rxjs';
import {catchError, map, switchMap, tap, withLatestFrom} from 'rxjs/operators';
import {NotificationService} from '../../services/notification.service';
import {YtDataService} from '../../services/yt-data.service';
import {VideoActionTypes} from '../../store/actions/video.actions';
import * as fromReducer from '../../store/reducers';
import * as fromSelectors from '../../store/selectors';
import * as videoActions from '../actions/video.actions';

@Injectable()
export class VideoEffects {

  fetchVideos$ = createEffect(() => this._actions$.pipe(
    ofType(VideoActionTypes.videoFetchItems),
    switchMap(() =>
      this._ytData.fetchVideos().pipe(
        tap((videos) => {
          this._notification.fetchSuccess(videos.length);
        }),
        map(videos => {
          return videoActions.fetchItemsSuccess({items: videos});
        }),
        catchError(error => {
          return of(videoActions.videoFetchError({error}));
        })
      )
    )
  ));

  fetchMockVideos$ = createEffect(() => this._actions$.pipe(
    ofType(VideoActionTypes.videoFetchMockItems),
    switchMap(() =>
      this._ytData.fetchMockVideos().pipe(
        tap((videos) => {
          this._notification.fetchSuccess(videos.length);
        }),
        map(videos => {
          return videoActions.fetchItemsSuccess({items: videos});
        }),
        catchError(error => {
          return of(videoActions.videoFetchMockError({error}));
        })
      )
    )
  ));

  fetchError$ = createEffect(() => this._actions$.pipe(
    ofType(VideoActionTypes.videoFetchError),
    tap(
      () => {
        this._notification.fetchError();
      }
    ),
    map(() =>
      videoActions.fetchMockItems()
    )
  ));

  fetchMockError$ = createEffect(() => this._actions$.pipe(
    ofType(VideoActionTypes.videoFetchMockError),
    tap(
      () => {
        this._notification.fetchError();
      }
    )
  ), {dispatch: false});

  toggleSelectItem$ = createEffect(() => this._actions$.pipe(
    ofType(VideoActionTypes.videoSelectItem, VideoActionTypes.videoUnselectItem),
    withLatestFrom(
      this._videoStore.select(fromSelectors.getSelectedVideos),
      this._gridStore.select(fromSelectors.getCount)),
    tap(
      ([{itemId, type}, selected, count]) => {
        return (type === videoActions.selectItem.type)
          ? this._notification.selectItem(itemId, selected.length, count)
          : this._notification.unselectItem(itemId, selected.length, count);
      }
    )
  ), {dispatch: false});

  toggleSelectAll$ = createEffect(() => this._actions$.pipe(
    ofType(VideoActionTypes.videoSelectAll, VideoActionTypes.videoUnselectAll),
    tap(
      ({type}) => {
        return (type === videoActions.selectAll.type)
          ? this._notification.selectAll()
          : this._notification.unselectAll();
      }
    )
  ), {dispatch: false});

  constructor(
    private readonly _actions$: Actions,
    private readonly _videoStore: Store<fromReducer.video.State>,
    private readonly _gridStore: Store<fromReducer.grid.State>,
    private readonly _ytData: YtDataService,
    private readonly _notification: NotificationService
  )
  {
  }


}
