import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
