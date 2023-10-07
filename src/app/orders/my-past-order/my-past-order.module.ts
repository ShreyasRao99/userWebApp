import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyPastOrderComponent } from './my-past-order.component';
import { MyPastOrderRoutingModule } from './my-past-order-routing.module';
import { OrderDetailsModule } from 'src/app/order-details/order-details.module';



@NgModule({
  declarations: [
    MyPastOrderComponent
  ],
  imports: [
    CommonModule,
    MyPastOrderRoutingModule,
    OrderDetailsModule
  ],
})
export class MyPastOrderModule { }
