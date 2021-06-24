import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-yt-grid-toolbar',
  templateUrl: './yt-grid-toolbar.component.html',
  styleUrls: ['./yt-grid-toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class YtGridToolbarComponent {
  @Input() isActiveSelection: boolean;
  @Input() totalItems: number;
  @Input() totalSelectedItems: number;

  @Output() toggleSelection: EventEmitter<boolean> = new EventEmitter<boolean>();
}
