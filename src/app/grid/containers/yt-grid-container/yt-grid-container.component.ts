import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {IDtItem} from 'src/app/models/dt-item';
import * as gridActions from 'src/app/store/actions/grid.actions';
import * as videoActions from 'src/app/store/actions/video.actions';
import * as fromReducer from 'src/app/store/reducers';
import * as fromSelectors from 'src/app/store/selectors';

@Component({
  selector: 'app-yt-grid-container',
  templateUrl: './yt-grid-container.component.html',
  styleUrls: ['./yt-grid-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class YtGridContainerComponent implements OnInit {
  isActiveSelection$: Observable<boolean>;
  videos$: Observable<IDtItem[]>;
  selectedItems$: Observable<string[]>;

  constructor(private _videoStore: Store<fromReducer.video.State>, private _gridStore: Store<fromReducer.grid.State>) {
    this.isActiveSelection$ = this._gridStore.pipe(select(fromSelectors.isActiveSelection));
    this.videos$ = this._videoStore.pipe(select(fromSelectors.getVideos));
    this.selectedItems$ = this._videoStore.pipe(select(fromSelectors.getSelectedVideos));
  }

  ngOnInit(): void {
    this._videoStore.dispatch(videoActions.fetchItems());
  }

  toggleSelection(status) {
    this._gridStore.dispatch(gridActions.toggleSelection(status));
  }

  selectItem(id: string) {
    this._videoStore.dispatch(videoActions.selectItem({itemId: id}));
  }

  unselectItem(id: string) {
    this._videoStore.dispatch(videoActions.unselectItem({itemId: id}));
  }

  selectAll() {
    this._videoStore.dispatch(videoActions.selectAll());
  }

  unselectAll() {
    this._videoStore.dispatch(videoActions.unselectAll());
  }
}
