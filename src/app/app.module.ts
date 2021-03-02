import {AgGridModule} from '@ag-grid-community/angular';
import {ClientSideRowModelModule} from '@ag-grid-community/client-side-row-model';
import {ModuleRegistry} from '@ag-grid-community/core';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {YtDataService} from 'src/app/services/yt-data.service';

import {AppComponent} from './app.component';
import {COMPONENTS, DtImageColumnComponent} from './components';
import {CONTAINERS} from './containers';

ModuleRegistry.registerModules([
  ClientSideRowModelModule
]);

@NgModule({
  declarations: [
    AppComponent,
    CONTAINERS,
    COMPONENTS
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgGridModule.withComponents([DtImageColumnComponent]),
  ],
  providers: [YtDataService],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule {
}
