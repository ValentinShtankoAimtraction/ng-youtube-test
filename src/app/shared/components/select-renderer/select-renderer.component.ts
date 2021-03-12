import {ICellRendererAngularComp} from '@ag-grid-community/angular';
import {ICellRendererParams, RowNode} from '@ag-grid-community/core';
import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-select-renderer',
  templateUrl: './select-renderer.component.html',
  styleUrls: ['./select-renderer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectRendererComponent implements ICellRendererAngularComp {
  checked: any;
  private node: RowNode;

  agInit(params: ICellRendererParams): void {
    this.node = params.node;
    this.checked = this.node.isSelected();
  }

  refresh(params: ICellRendererParams): boolean {
    return false;
  }

  changeSelection({checked}) {
    this.node.setSelected(checked);
  }
}
