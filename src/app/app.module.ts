import {AgGridModule} from '@ag-grid-community/angular';
import {ClientSideRowModelModule} from '@ag-grid-community/client-side-row-model';
import {ModuleRegistry} from '@ag-grid-community/core';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from 'src/environments/environment';

import {AppComponent} from './app.component';
import {COMPONENTS, DtImageColumnComponent} from './components';
import {CONTAINERS} from './containers';
import {MaterialModule} from './material.module';
import {YtDataService} from './services/yt-data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import * as fromStore from './store';
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
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot(fromStore.reducers),
    EffectsModule.forRoot(fromStore.effects),
    MaterialModule,
    AgGridModule.withComponents([DtImageColumnComponent]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [YtDataService],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule {
}
