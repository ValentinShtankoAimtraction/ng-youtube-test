import {AgGridAngular} from '@ag-grid-community/angular';
import {GridApi} from '@ag-grid-community/core';
import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, Self, ViewChild} from '@angular/core';

import {IDtItem} from 'src/app/models/dt-item';
import {
  DateRendererComponent,
  ImageRendererComponent,
  SelectHeaderRendererComponent,
  SelectRendererComponent
} from 'src/app/shared/components';
import {DtGridService} from '../../services/dt-grid.service';

@Component({
  selector: 'app-yt-data-grid',
  templateUrl: './yt-data-grid.component.html',
  styleUrls: ['./yt-data-grid.component.scss'],
  providers: [DtGridService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class YtDataGridComponent implements OnInit {
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
    if (!this.ytGrid)
      return;
    if (!active && this.selectedItems.length) {
      this.ytGrid.api.deselectAll();
    }
    this.toggleSelectColumn(active);
  };

  ngOnInit(): void {
  }

  toggleSelectColumn(active: boolean) {
    this.ytGrid.columnApi.setColumnVisible('selected', active);
  }

  fitColumns() {
    this.ytGrid.api.sizeColumnsToFit();
  }

  getRowNodeId(item: IDtItem): string {
    return item.id
  }

  onSelectionChanged({api}: { api: GridApi }) {
    let selectedIds = api.getSelectedRows().map((item) => item.id);
    let unselected = this.selectedItems.filter(item => selectedIds.indexOf(item) < 0);
    let selected = selectedIds.filter(item => this.selectedItems.indexOf(item) < 0);
    if (selected.length) {
      this.selectRows(selected);
    } else {
      this.unselectRows(unselected);
    }
    this.ytGrid.api.refreshHeader();
  }

  selectRows(rowIds: string[]) {
    if (rowIds.length > 1) {
      this.selectAll.emit();
      this.redrawRows(rowIds);
    } else {
      this.selectItem.emit(rowIds.pop())
    }
  }

  unselectRows(rowIds: string[]) {
    if (rowIds.length > 1) {
      this.unselectAll.emit();
      this.redrawRows(rowIds);
    } else {
      this.unselectItem.emit(rowIds.pop())
    }
  }

  redrawRows(rowIds: string[]) {
    let rowNodes = [];
    for (let id of rowIds) {
      let rowNode = this.ytGrid.api.getRowNode(id);
      rowNodes = [...rowNodes, rowNode];
    }
    this.ytGrid.api.redrawRows({rowNodes: rowNodes})
  }
}
