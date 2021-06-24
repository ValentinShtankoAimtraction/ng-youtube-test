import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {COMPONENTS} from './components';
import {MaterialModule} from './material.module';

export const MODULES = [
  CommonModule,
  MaterialModule
];

@NgModule({
  declarations: [
    COMPONENTS
  ],
  imports: [

    MODULES
  ],
  exports: [
    COMPONENTS,

    MODULES
  ]
})
export class SharedModule {
}
