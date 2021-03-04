import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {GridModule} from 'src/app/grid/grid.module';
import {environment} from 'src/environments/environment';

import {AppComponent} from './app.component';
import {YtDataService} from './services/yt-data.service';
import * as fromStore from './store';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot(fromStore.reducers),
    EffectsModule.forRoot(fromStore.effects),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),

    GridModule
  ],
  providers: [YtDataService],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule {
}
