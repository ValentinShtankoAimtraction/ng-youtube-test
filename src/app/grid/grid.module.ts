import {AgGridModule} from '@ag-grid-community/angular';
import {ClientSideRowModelModule} from '@ag-grid-community/client-side-row-model';
import {ModuleRegistry} from '@ag-grid-community/core';
import {MenuModule} from '@ag-grid-enterprise/menu';
import {NgModule} from '@angular/core';
import {DateRendererComponent, ImageRendererComponent} from 'src/app/shared/components';
import {SharedModule} from 'src/app/shared/shared.module';
import {COMPONENTS} from './components';
import {CONTAINERS} from './containers';

ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  MenuModule
]);


@NgModule({
  declarations: [
    CONTAINERS,
    COMPONENTS
  ],
  imports: [
    SharedModule,
    AgGridModule.withComponents([DateRendererComponent, ImageRendererComponent]),
  ],
  exports: [
    CONTAINERS
  ]
})
export class GridModule {
}
