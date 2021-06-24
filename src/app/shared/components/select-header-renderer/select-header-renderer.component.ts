import {IHeaderAngularComp} from '@ag-grid-community/angular';
import {GridApi, IHeaderParams} from '@ag-grid-community/core';
import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-select-header-renderer',
  templateUrl: './select-header-renderer.component.html',
  styleUrls: ['./select-header-renderer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectHeaderRendererComponent implements IHeaderAngularComp {
  checked: boolean;
  indeterminate: boolean;

  gridApi: GridApi;

  agInit(params: IHeaderParams): void {
    const selected = params.api.getSelectedRows().length;
    const rendered = params.api.getRenderedNodes().length;
    this.setCheckboxState(selected, rendered);
    this.gridApi = params.api;
  }

  setCheckboxState(selected: number, rendered: number): void {
    this.checked = false;
    this.indeterminate = false;
    if (!selected) {
      return;
    }

    if (selected < rendered) {
      this.indeterminate = true;
    } else {
      this.checked = true;
    }
  }

  refresh(): boolean {
    return false;
  }

  selectAll(): void {
    this.gridApi.selectAll();
  }

  unselectAll(): void {
    this.gridApi.deselectAll();
  }
}
