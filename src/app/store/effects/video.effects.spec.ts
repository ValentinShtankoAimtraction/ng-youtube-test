import {TestBed} from '@angular/core/testing';
import {provideMockActions} from '@ngrx/effects/testing';
import {Action} from '@ngrx/store';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import {cold, hot} from 'jest-marbles';
import {Observable} from 'rxjs';
import {NotificationService} from 'src/app/services/notification.service';
import {YtDataService} from 'src/app/services/yt-data.service';
import * as fromSelectors from 'src/app/store/selectors';
import * as videoActions from '../actions/video.actions';
import {getMockItems} from '../mock-items';
import {VideoEffects} from './video.effects';

declare const expect: jest.Expect;

describe('[Store] Video effects', () => {
  let actions$: Observable<Action>;
  let effects: VideoEffects;
  let store: MockStore;
  let ytDataService: YtDataService;
  let notification: NotificationService;

  const initialState = {};
  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [
        VideoEffects,
        provideMockActions(() => actions$),
        provideMockStore({
          initialState,
          selectors: [
            {
              selector: fromSelectors.getSelectedVideos,
              value: []
            },
            {
              selector: fromSelectors.getCount,
              value: 5
            }
          ]
        }),
        {
          provide: YtDataService,
          useValue: {
            fetchVideos: jest.fn(),
            fetchMockVideos: jest.fn(),
          }
        },
        {
          provide: NotificationService,
          useValue: {
            fetchSuccess: jest.fn(),
            fetchError: jest.fn(),
            selectItem: jest.fn(),
            unselectItem: jest.fn(),
          }
        },
      ],
    });
    effects = TestBed.inject(VideoEffects);
    store = TestBed.inject(MockStore);
    ytDataService = TestBed.inject(YtDataService);
    notification = TestBed.inject(NotificationService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('fetchVideos', () => {

    it('should return fetchItemsSuccess', () => {
      const action = videoActions.fetchItems();
      const outcome = videoActions.fetchItemsSuccess({items: getMockItems()});

      actions$ = hot('-a', {a: action});

      const response = cold('-a|', {a: getMockItems()});
      const expected = cold('--b', {b: outcome});

      ytDataService.fetchVideos = jest.fn(() => response);

      expect(effects.fetchVideos$).toBeObservable(expected);
    });

    it('should return videoError', () => {
      const action = videoActions.fetchItems();
      const error = {};
      const outcome = videoActions.videoFetchError({error});

      actions$ = hot('-a', {a: action});

      const response = cold('-#|', {}, error);
      const expected = cold('--b', {b: outcome});

      ytDataService.fetchVideos = jest.fn(() => response);

      expect(effects.fetchVideos$).toBeObservable(expected);
    });
  });

  describe('fetchMockVideos', () => {

    it('should return fetchItemsSuccess', () => {
      const action = videoActions.fetchMockItems();
      const outcome = videoActions.fetchItemsSuccess({items: getMockItems()});

      actions$ = hot('-a', {a: action});

      const response = cold('-a|', {a: getMockItems()});
      const expected = cold('--b', {b: outcome});

      ytDataService.fetchMockVideos = jest.fn(() => response);

      expect(effects.fetchMockVideos$).toBeObservable(expected);
    });

    it('should return videoError', () => {
      const action = videoActions.fetchMockItems();
      const error = {};
      const outcome = videoActions.videoFetchMockError({error});

      actions$ = hot('-a', {a: action});

      const response = cold('-#|', {}, error);
      const expected = cold('--b', {b: outcome});

      ytDataService.fetchMockVideos = jest.fn(() => response);

      expect(effects.fetchMockVideos$).toBeObservable(expected);
    });
  });

  describe('fetchError', () => {

    it('should return fetchMockItems', () => {
      const error = {};
      const action = videoActions.videoFetchError({error});
      const outcome = videoActions.fetchMockItems();

      actions$ = hot('-a', {a: action});

      const expected = cold('-b', {b: outcome});

      expect(effects.fetchError$).toBeObservable(expected);
    });
  });

  describe('fetchMockError', () => {

    it('should call action', () => {
      const error = {};
      const action = videoActions.videoFetchMockError({error});

      actions$ = cold('-a', {a: action});

      expect(effects.fetchMockError$).toBeObservable(cold('-a', {a: action}));
    });
  });

  describe('toggleSelectItem', () => {

    it('should select item', () => {
      const action = videoActions.selectItem({itemId: 'item1'});
      const selected = [];
      const count = 5;
      actions$ = cold('-a', {a: action});

      expect(effects.toggleSelectItem$).toBeObservable(cold('-a', {a: [action, selected, count]}));
    });

    it('should unselect item', () => {
      const action = videoActions.unselectItem({itemId: 'item1'});
      const selected = [];
      const count = 5;
      actions$ = cold('-a', {a: action});

      expect(effects.toggleSelectItem$).toBeObservable(cold('-a', {a: [action, selected, count]}));
    });
  });

  describe('toggleSelectAll', () => {

    it('should select all items', () => {
      const action = videoActions.selectAll();
      actions$ = cold('-a', {a: action});

      notification.selectAll = (() => jest.fn());
      expect(effects.toggleSelectAll$).toBeObservable(cold('-a', {a: action}));
    });

    it('should unselect all item', () => {
      const action = videoActions.unselectAll();
      actions$ = cold('-a', {a: action});

      notification.unselectAll = (() => jest.fn());
      expect(effects.toggleSelectAll$).toBeObservable(cold('-a', {a: action}));
    });
  });
});
