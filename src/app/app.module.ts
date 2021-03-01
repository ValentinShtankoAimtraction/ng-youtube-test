import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AgGridModule} from 'ag-grid-angular';
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
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
