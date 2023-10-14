import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderDetailsSubscriptionComponent } from './order-details-subscription.component';
import { CustomPipeModule } from 'src/pipes/pipe.module';
import { OrderDetailsModule } from '../order-details/order-details.module';



@NgModule({
  declarations: [
    OrderDetailsSubscriptionComponent
  ],
  imports: [
    CommonModule,
    CustomPipeModule,
    OrderDetailsModule
  ],
  exports: [
    OrderDetailsSubscriptionComponent
  ]
})
export class OrderDetailsSubscriptionModule { }
