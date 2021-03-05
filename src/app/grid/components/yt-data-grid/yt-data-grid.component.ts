import {AgGridAngular} from '@ag-grid-community/angular';
import {GridApi} from '@ag-grid-community/core';
import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

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
  @Output() unselectItem: EventEmitter<string> = new EventEmitter<string>();
  frameworkComponents = {
    dateRenderer: DateRendererComponent,
    imageRenderer: ImageRendererComponent,
    selectRenderer: SelectRendererComponent,
    selectHeaderRenderer: SelectHeaderRendererComponent,
  };

  constructor(public dtGrid: DtGridService) {
  }

  private _isActiveSelection: boolean = false;
  get isActiveSelection() {
    return this._isActiveSelection;
  }

  @Input() set isActiveSelection(value: boolean) {
    this._isActiveSelection = value;
    if (!this.ytGrid)
      return;
    this.toggleSelectColumn(value);
  };

  ngOnInit(): void {
  }

  toggleSelectColumn(value: boolean) {
    if (value) {
      this.ytGrid.api.setColumnDefs(this.dtGrid.dtSelectableColumnDefs);
    } else {
      this.ytGrid.api.setColumnDefs(this.dtGrid.dtColumnDefs);
    }
    this.fitColumns();
  }

  fitColumns() {
    this.ytGrid.api.sizeColumnsToFit();
  }

  onRowSelected({data}: { data: IDtItem }) {
    if (!this.selectedItems.includes(data.id)) {
      this.selectItem.emit(data.id);
    } else {
      this.unselectItem.emit(data.id);
    }
  }

  getRowNodeId(item: IDtItem): string {
    return item.id
  }
  selectionChanged({api}: {api: GridApi}) {
    // console.log(api.getSelectedRows())
  }
}
