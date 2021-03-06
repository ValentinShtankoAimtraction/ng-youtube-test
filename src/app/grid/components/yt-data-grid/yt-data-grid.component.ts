import {AgGridAngular} from '@ag-grid-community/angular';
import {GridApi} from '@ag-grid-community/core';
import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output, Self, ViewChild} from '@angular/core';

import { IDtItem } from '../../../models';
import {
  DateRendererComponent,
  ImageRendererComponent,
  SelectHeaderRendererComponent,
  SelectRendererComponent
} from '../../../shared/components';
import {DtGridService} from '../../services/dt-grid.service';

@Component({
  selector: 'app-yt-data-grid',
  templateUrl: './yt-data-grid.component.html',
  styleUrls: ['./yt-data-grid.component.scss'],
  providers: [DtGridService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class YtDataGridComponent {
  @ViewChild('ytGrid') ytGrid: AgGridAngular;
  @Input() items: IDtItem[];
  @Input() selectedItems: string[];
  @Output() selectItem: EventEmitter<string> = new EventEmitter<string>();
  @Output() selectAll: EventEmitter<null> = new EventEmitter<null>();
  @Output() unselectAll: EventEmitter<null> = new EventEmitter<null>();
  @Output() unselectItem: EventEmitter<string> = new EventEmitter<string>();

  frameworkComponents = {
    dateRenderer: DateRendererComponent,
    imageRenderer: ImageRendererComponent,
    selectRenderer: SelectRendererComponent,
    selectHeaderRenderer: SelectHeaderRendererComponent,
  };

  constructor(@Self() public dtGrid: DtGridService) {
  }

  @Input() set isActiveSelection(active: boolean) {
    if (!this.ytGrid) {
      return;
    }
    if (!active && this.selectedItems.length) {
      this.ytGrid.api.deselectAll();
    }
    this.toggleSelectColumn(active);
  }

  toggleSelectColumn(active: boolean): void {
    this.ytGrid.columnApi.setColumnVisible('selected', active);
  }

  fitColumns(): void {
    this.ytGrid.api.sizeColumnsToFit();
  }

  getRowNodeId(item: IDtItem): string {
    return item.id;
  }

  onSelectionChanged({api}: { api: GridApi }): void {
    const selectedIds = api.getSelectedRows().map((item) => item.id);
    const unselected = this.selectedItems.filter(item => selectedIds.indexOf(item) < 0);
    const selected = selectedIds.filter(item => this.selectedItems.indexOf(item) < 0);
    if (selected.length) {
      this.selectRows(selected);
    } else {
      this.unselectRows(unselected);
    }
    this.ytGrid.api.refreshHeader();
  }

  selectRows(rowIds: string[]): void {
    if (rowIds.length > 1) {
      this.selectAll.emit();
      this.refreshRows();
    } else {
      const rowId = rowIds.pop();
      this.selectItem.emit(rowId);
      this.refreshRow(rowId);
    }
  }

  unselectRows(rowIds: string[]): void {
    if (rowIds.length > 1) {
      this.unselectAll.emit();
      this.refreshRows();
    } else {
      const rowId = rowIds.pop();
      this.unselectItem.emit(rowId);
      this.refreshRow(rowId);
    }
  }

  // Update checkbox status for single row
  refreshRow(rowId): void {
    const rowNode = this.ytGrid.api.getRowNode(rowId);

    this.ytGrid.api.refreshCells({
      rowNodes: [rowNode],
      columns: ['selected'],
      force: true
    });
  }

  // Update checkbox status for all rows
  refreshRows(): void {
    this.ytGrid.api.refreshCells({
      columns: ['selected'],
      force: true
    });
  }
}
