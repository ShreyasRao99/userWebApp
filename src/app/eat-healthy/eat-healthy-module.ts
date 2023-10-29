import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EatHealthyComponent } from './eat-healthy.component';
import { MobileTabsModule } from '../mobile-header/mobile-tabs.module';
import { EatHealthyRoutingModule } from './eat-healthy-routing.module';



@NgModule({
  declarations: [
    EatHealthyComponent
  ],
  imports: [
    CommonModule,
    MobileTabsModule,
    EatHealthyRoutingModule
  ],
  exports: [
    EatHealthyComponent
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class EatHealthyModule { }
