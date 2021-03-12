import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

export const MAT_MODULES = [
  MatCardModule,
  MatSlideToggleModule,
  MatCheckboxModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...MAT_MODULES
  ],
  exports: [
    ...MAT_MODULES
  ]
})
export class MaterialModule {
}
