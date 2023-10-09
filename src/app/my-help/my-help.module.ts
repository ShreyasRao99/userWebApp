import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyHelpComponent } from './my-help.component';
import { MyHelpRoutingModule } from './my-help-routing.module';



@NgModule({
  declarations: [
    MyHelpComponent
  ],
  imports: [
    CommonModule,
    MyHelpRoutingModule
  ]
})
export class MyHelpModule { }
