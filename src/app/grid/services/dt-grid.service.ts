import {Injectable} from '@angular/core';

@Injectable()
export class DtGridService {

  dtColumnTypes = {};
  dtSelectionColumn = {
    headerName: '',
    field: 'selected',
    maxWidth: 18 + (24 * 2),
    pinned: 'left',
    cellRenderer: 'selectRenderer',
    headerComponent: 'selectHeaderRenderer',
    headerComponentParams: {
      selected: true
    }
  };
  dtColumnDefs = [
    {
      headerName: 'Image',
      field: 'thumbnail',
      maxWidth: 120 + (24 * 2),
      cellClass: ['align-center'],
      resizable: false,
      cellRenderer: 'imageRenderer'
    },
    {headerName: 'Title', field: 'title'},
    {headerName: 'Description', field: 'description', cellClass: ['text-wrap'], resizable: true},
    {headerName: 'Published on', field: 'publishedAt', maxWidth: 240, cellRenderer: 'dateRenderer'},
  ];
  dtSelectableColumnDefs = [
    this.dtSelectionColumn,
    ...this.dtColumnDefs
  ];

  constructor() {
  }

  getContextMenuItems(params) {
    return [
      {
        name: 'Open in new tab',
        action: () => {
          window.open('https://www.youtube.com/watch?v=' + params.node.data.id, '_blank')
        }
      }
    ]
  }
}
