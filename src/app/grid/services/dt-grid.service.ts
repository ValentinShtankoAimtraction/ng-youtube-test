import {MenuItemDef} from '@ag-grid-community/core';
import {Injectable} from '@angular/core';

@Injectable()
export class DtGridService {
  dtColumnTypes = {};
  dtColumnDefs = [
    {
      headerName: '',
      field: 'selected',
      maxWidth: 18 + (24 * 2),
      pinned: 'left',
      cellRenderer: 'selectRenderer',
      headerComponent: 'selectHeaderRenderer',
      headerComponentParams: {
        selected: true
      }
    },
    {
      headerName: 'Image',
      field: 'thumbnail',
      maxWidth: 120 + (24 * 2),
      cellClass: ['align-center'],
      resizable: false,
      cellRenderer: 'imageRenderer'
    },
    {headerName: 'Video title', field: 'title'},
    {headerName: 'Description', field: 'description', cellClass: ['text-wrap'], resizable: true},
    {headerName: 'Published on', field: 'publishedAt', maxWidth: 240, cellRenderer: 'dateRenderer'},
  ];

  getContextMenuItems(params: { column: { colId: string }, node: { data: { id: string } } }): MenuItemDef[] {
    const result = [];
    if (params.column.colId === 'title') {
      result.push({
        name: 'Open in new tab',
        action: () => {
          window.open('https://www.youtube.com/watch?v=' + params.node.data.id, '_blank');
        },
        icon: '<span class="material-icons md-18">open_in_new</span>'
      });
      result.push('separator');
    }
    return [
      ...result,
      'copy',
      'copyWithHeaders',
      'paste'
    ];
  }
}
