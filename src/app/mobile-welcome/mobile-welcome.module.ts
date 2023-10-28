import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileWelcomeComponent } from './mobile-welcome.component'


@NgModule({
  declarations: [
    MobileWelcomeComponent
  ],
  imports: [
    CommonModule,
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports:[
    MobileWelcomeComponent
  ]
})
export class MobileWelcomeModule { }
