import {AgGridAngular} from '@ag-grid-community/angular';
import {Component, OnInit, ChangeDetectionStrategy, Input, ViewChild} from '@angular/core';
import {dtColumnDefs, dtColumnTypes, IDtItem} from 'src/app/models/dt-item';

@Component({
  selector: 'app-yt-data-grid',
  templateUrl: './yt-data-grid.component.html',
  styleUrls: ['./yt-data-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class YtDataGridComponent implements OnInit {
  @ViewChild('ytGrid') ytGrid: AgGridAngular;
  @Input() items: IDtItem[];
  columnDefs = dtColumnDefs;
  columnTypes = dtColumnTypes;
  constructor() { }

  ngOnInit(): void {
  }
  onGridReady() {
    this.ytGrid.api.sizeColumnsToFit();
  }
}
