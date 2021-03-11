import {ICellRendererAngularComp} from '@ag-grid-community/angular';
import {ICellRendererParams} from '@ag-grid-community/core';
import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-image-renderer',
  templateUrl: './image-renderer.component.html',
  styleUrls: ['./image-renderer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageRendererComponent implements ICellRendererAngularComp {
  value: any;

  constructor() {
  }

  agInit(params: ICellRendererParams): void {
    this.value = params.value
  }

  refresh(params: ICellRendererParams): boolean {
    this.value = params.value;
    return true;
  }
}
