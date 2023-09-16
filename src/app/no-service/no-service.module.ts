import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoServiceComponent } from './no-service.component';



@NgModule({
  declarations: [
    NoServiceComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NoServiceComponent
  ]
})
export class NoServiceModule { }
