import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {IDtItem} from 'src/app/models/dt-item';
import {YtDataService} from 'src/app/services/yt-data.service';

@Component({
  selector: 'app-yt-grid-container',
  templateUrl: './yt-grid-container.component.html',
  styleUrls: ['./yt-grid-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class YtGridContainerComponent implements OnInit {
  private _isActiveSelectionSubject: Subject<boolean>;
  isActiveSelection$: Observable<boolean>;
  items$: Observable<IDtItem[]> = this._ytService.ytItems$;
  constructor(private _ytService: YtDataService) {
    // temp
    this._isActiveSelectionSubject =  new BehaviorSubject<boolean>(false);
    this.isActiveSelection$ = this._isActiveSelectionSubject.asObservable()
  }

  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this._ytService.fetchData().then(
      (result) => {
        console.log(result);
      }
    );
  }
  toggleSelection(status) {
    console.log('toggled');
    this._isActiveSelectionSubject.next(status)
  }
}
