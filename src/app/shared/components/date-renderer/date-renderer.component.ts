import {ICellRendererAngularComp} from '@ag-grid-community/angular';
import {ICellRendererParams} from '@ag-grid-community/core';
import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-date-renderer',
  templateUrl: './date-renderer.component.html',
  styleUrls: ['./date-renderer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateRendererComponent implements ICellRendererAngularComp {
  value: string;

  constructor() {
  }

  agInit(params: ICellRendererParams): void {
    this.value = params.value;
  }

  refresh(params: ICellRendererParams): boolean {
    this.value = params.value;
    return true;
  }

}
