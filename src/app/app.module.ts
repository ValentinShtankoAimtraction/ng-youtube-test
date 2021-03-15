import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule} from '@angular/material/snack-bar';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {GridModule} from 'src/app/grid/grid.module';
import {NotificationService} from 'src/app/services/notification.service';
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
    MatSnackBarModule,
    StoreModule.forRoot(fromStore.reducers),
    EffectsModule.forRoot(fromStore.effects),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    GridModule
  ],
  providers: [YtDataService, NotificationService, {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}}],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule {
}
