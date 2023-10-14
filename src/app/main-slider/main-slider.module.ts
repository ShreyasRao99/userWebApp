import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainSliderComponent } from './main-slider.component';

@NgModule({
  declarations: [
    MainSliderComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MainSliderComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MainSliderModule { }
