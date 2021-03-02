import {Injectable} from '@angular/core';
import {DtImageColumnComponent} from '../components';

@Injectable()
export class DtGridService {

  dtColumnTypes = {};
  dtSelectionColumn = {
    headerName: '',
    maxWidth: 18 + (24 * 2),
    checkboxSelection: true,
    headerCheckboxSelection: true,
    pinned: 'left',
  };

  constructor() {
  }

  dateFormatter = (params) => {
    return new Date(params.value).toLocaleString();
  };

  dtColumnDefs = [
    {
      headerName: 'Image',
      field: 'thumbnail',
      maxWidth: 120 + (24 * 2),
      cellClass: ['align-center'],
      resizable: false,
      cellRendererFramework: DtImageColumnComponent
    },
    {headerName: 'Title', field: 'title'},
    {headerName: 'Description', field: 'description', cellClass: ['text-wrap'], resizable: true},
    {headerName: 'Published on', field: 'publishedAt', maxWidth: 240, valueFormatter: this.dateFormatter},
  ];

  dtSelectableColumnDefs = [
    this.dtSelectionColumn,
    ...this.dtColumnDefs
  ]
}
