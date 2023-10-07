import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetDeliveryLocationComponent } from './set-delivery-location.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SetDeliveryLocationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    SetDeliveryLocationComponent,
  ]
})
export class SetDeliveryLocationModule { }
