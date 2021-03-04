import {Injectable} from '@angular/core';
import {DtImageColumnComponent} from 'src/app/grid/components';

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

  dateFormatter = ({value}: {value: string}) => {
    return new Date(value).toLocaleString();
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
  ];

  getContextMenuItems(params) {
    return  [
      {
        name: 'Open in new tab',
        action: () => {
          window.open('https://www.youtube.com/watch?v='+params.node.data.id, '_blank')
        }
      }
    ]
  }
}
