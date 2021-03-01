import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-yt-data-grid',
  templateUrl: './yt-data-grid.component.html',
  styleUrls: ['./yt-data-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class YtDataGridComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
