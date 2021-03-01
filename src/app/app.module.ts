import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AgGridModule} from 'ag-grid-angular';
import {YtDataService} from 'src/app/services/yt-data.service';
import {COMPONENTS} from './components';
import {CONTAINERS} from './containers';

import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CONTAINERS,
    COMPONENTS
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgGridModule.withComponents([])
  ],
  providers: [YtDataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
