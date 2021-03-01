import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {YtDataService} from 'src/app/services/yt-data.service';

@Component({
  selector: 'app-yt-grid-container',
  templateUrl: './yt-grid-container.component.html',
  styleUrls: ['./yt-grid-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class YtGridContainerComponent implements OnInit {

  constructor(private _ytService: YtDataService) { }

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
}
