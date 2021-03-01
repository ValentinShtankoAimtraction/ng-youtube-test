import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-yt-grid-toolbar',
  templateUrl: './yt-grid-toolbar.component.html',
  styleUrls: ['./yt-grid-toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class YtGridToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
