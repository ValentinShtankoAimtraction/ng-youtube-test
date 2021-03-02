import {AgGridAngular} from '@ag-grid-community/angular';
import {ChangeDetectionStrategy, Component, Input, OnInit, ViewChild} from '@angular/core';

import {IDtItem} from 'src/app/models/dt-item';
import {DtGridService} from 'src/app/services/dt-grid.service';

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

  constructor(public dtGrid: DtGridService) {
  }

  @Input() set isActiveSelection(value: boolean) {

    if (value) {
      this.ytGrid.api.setColumnDefs([
        this.dtGrid.dtSelectionColumn,
        ...this.dtGrid.dtColumnDefs
      ]);
      this.fitColumns();
    } else {
      if (this.ytGrid) {
        this.ytGrid.api.setColumnDefs(this.dtGrid.dtColumnDefs);
        this.fitColumns();
      }
    }

  };

  ngOnInit(): void {
  }

  onGridReady() {

  }

  fitColumns() {
    this.ytGrid.api.sizeColumnsToFit();
  }

  onRowSelected({data}: { data: IDtItem }) {
    console.log(data.id);
  }
}
