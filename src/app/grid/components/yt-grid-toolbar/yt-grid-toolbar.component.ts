import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-yt-grid-toolbar',
  templateUrl: './yt-grid-toolbar.component.html',
  styleUrls: ['./yt-grid-toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class YtGridToolbarComponent implements OnInit {
  @Input() isActiveSelection: boolean;
  @Input() totalItems: number;
  @Input() totalSelectedItems: number;

  @Output() toggleSelection: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit(): void {
  }

}
