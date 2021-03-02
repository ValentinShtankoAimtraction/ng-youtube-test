import {AgGridModule} from '@ag-grid-community/angular';
import {ClientSideRowModelModule} from '@ag-grid-community/client-side-row-model';
import {ModuleRegistry} from '@ag-grid-community/core';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {COMPONENTS, DtImageColumnComponent} from './components';
import {CONTAINERS} from './containers';
import {MaterialModule} from './material.module';
import {YtDataService} from './services/yt-data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    MaterialModule,
    AgGridModule.withComponents([DtImageColumnComponent]),
    BrowserAnimationsModule,
  ],
  providers: [YtDataService],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule {
}
