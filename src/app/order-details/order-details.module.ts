import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderDetailsComponent } from './order-details/order-details.component';



@NgModule({
  declarations: [
    OrderDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OrderDetailsComponent
  ]
})
export class OrderDetailsModule { }
