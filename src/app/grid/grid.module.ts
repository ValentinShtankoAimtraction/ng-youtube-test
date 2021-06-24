import {AgGridModule} from '@ag-grid-community/angular';
import {ClientSideRowModelModule} from '@ag-grid-community/client-side-row-model';
import {ModuleRegistry} from '@ag-grid-community/core';
import {ClipboardModule} from '@ag-grid-enterprise/clipboard';
import {MenuModule} from '@ag-grid-enterprise/menu';
import {NgModule} from '@angular/core';
import { RENDERER_COMPONENTS } from '../shared/components';
import { SharedModule } from '../shared/shared.module';
import {COMPONENTS} from './components';
import {CONTAINERS} from './containers';

ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  MenuModule,
  ClipboardModule
]);


@NgModule({
  declarations: [
    CONTAINERS,
    COMPONENTS
  ],
  imports: [
    SharedModule,
    AgGridModule.withComponents(RENDERER_COMPONENTS),
  ],
  exports: [
    CONTAINERS
  ]
})
export class GridModule {
}
