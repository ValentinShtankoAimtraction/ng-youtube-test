import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {IDtItem} from 'src/app/models/dt-item';
import * as gridActions from 'src/app/store/actions/grid.actions';
import {FetchItems, SelectItem, UnselectItem} from 'src/app/store/actions/video.actions';
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
    this._videoStore.dispatch(new FetchItems());
  }

  toggleSelection(status) {
    this._gridStore.dispatch(gridActions.toggleSelection(status));
  }

  selectItem(id) {
    this._videoStore.dispatch(new SelectItem(id));
  }

  unselectItem(id) {
    this._videoStore.dispatch(new UnselectItem(id));
  }
}
