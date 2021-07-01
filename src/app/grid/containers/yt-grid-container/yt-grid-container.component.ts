import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IDtItem } from '../../../models';
import * as gridActions from '../../../store/actions/grid.actions';
import * as videoActions from '../../../store/actions/video.actions';
import * as fromReducer from '../../../store/reducers';
import * as fromSelectors from '../../../store/selectors';

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

  constructor(
    private readonly _videoStore: Store<fromReducer.video.State>,
    private readonly _gridStore: Store<fromReducer.grid.State>) {
    this.isActiveSelection$ = this._gridStore.pipe(select(fromSelectors.isActiveSelection));
    this.videos$ = this._videoStore.pipe(select(fromSelectors.getVideos));
    this.selectedItems$ = this._videoStore.pipe(select(fromSelectors.getSelectedVideos));
  }

  ngOnInit(): void {
    this._videoStore.dispatch(videoActions.fetchItems());
  }

  toggleSelection(status: boolean): void {
    this._gridStore.dispatch(gridActions.toggleSelection({status}));
  }

  selectItem(id: string): void {
    this._videoStore.dispatch(videoActions.selectItem({itemId: id}));
  }

  unselectItem(id: string): void {
    this._videoStore.dispatch(videoActions.unselectItem({itemId: id}));
  }

  selectAll(): void {
    this._videoStore.dispatch(videoActions.selectAll());
  }

  unselectAll(): void {
    this._videoStore.dispatch(videoActions.unselectAll());
  }
}
