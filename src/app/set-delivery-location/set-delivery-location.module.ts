import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetDeliveryLocationComponent } from './set-delivery-location.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SetDeliveryLocationComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SetDeliveryLocationComponent,
  ]
})
export class SetDeliveryLocationModule { }
