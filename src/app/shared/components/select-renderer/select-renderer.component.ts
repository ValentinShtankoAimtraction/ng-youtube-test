import {ICellRendererAngularComp} from '@ag-grid-community/angular';
import {RowNode} from '@ag-grid-community/core';
import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';

@Component({
  selector: 'app-select-renderer',
  templateUrl: './select-renderer.component.html',
  styleUrls: ['./select-renderer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectRendererComponent implements ICellRendererAngularComp {
  checked: boolean;
  node: RowNode;

  constructor(private readonly ref: ChangeDetectorRef) {
  }

  agInit({node}): void {
    this.node = node;
    this.checked = this.node.isSelected();
  }

  refresh({node}): boolean {
    this.node = node;
    this.checked = node.isSelected();
    this.ref.detectChanges();
    return true;
  }

  changeSelection({checked}): void {
    this.node.setSelected(checked);
    this.ref.detectChanges();
  }
}
