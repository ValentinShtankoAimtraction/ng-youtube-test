import {AgGridAngular} from '@ag-grid-community/angular';
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
  @Output() selectAll: EventEmitter<null> = new EventEmitter<null>();
  @Output() unselectAll: EventEmitter<null> = new EventEmitter<null>();
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

  @Input() set isActiveSelection(active: boolean) {
    this._isActiveSelection = active;
    if (!this.ytGrid)
      return;
    if (!active) {
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

  onRowSelected({data}: { data: IDtItem }) {
    if (!this.selectedItems.includes(data.id)) {
      this.selectItem.emit(data.id);
    } else {
      this.unselectItem.emit(data.id);
    }
    let node = this.ytGrid.api.getRowNode(data.id);
    this.ytGrid.api.redrawRows({rowNodes: [node]});
    this.ytGrid.api.refreshHeader();
  }

  getRowNodeId(item: IDtItem): string {
    return item.id
  }

}
