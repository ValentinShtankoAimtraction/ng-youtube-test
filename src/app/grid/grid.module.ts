import {AgGridModule} from '@ag-grid-community/angular';
import {ClientSideRowModelModule} from '@ag-grid-community/client-side-row-model';
import {ModuleRegistry} from '@ag-grid-community/core';
import {MenuModule} from '@ag-grid-enterprise/menu';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MaterialModule} from 'src/app/material.module';
import {DateRendererComponent} from 'src/app/shared/components';
import {SharedModule} from 'src/app/shared/shared.module';
import {COMPONENTS, DtImageColumnComponent} from './components';
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
    CommonModule,
    MaterialModule,
    SharedModule,
    AgGridModule.withComponents([DtImageColumnComponent, DateRendererComponent]),
  ],
  exports: [
    CONTAINERS
  ]
})
export class GridModule {
}
