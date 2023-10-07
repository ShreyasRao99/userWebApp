import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionOrderComponent } from './subscription-order.component';
import { SubscriptionOrderRoutingModule } from './subscription-order-routing.module';
import { CustomPipeModule } from 'src/pipes/pipe.module';
import { OrderDetailsModule } from 'src/app/order-details/order-details.module';
import { OrderDetailsSubscriptionModule } from 'src/app/order-details-subscription/order-details-subscription.module';



@NgModule({
  declarations: [
    SubscriptionOrderComponent
  ],
  imports: [
    CommonModule,
    SubscriptionOrderRoutingModule,
    CustomPipeModule,
    OrderDetailsModule,
    OrderDetailsSubscriptionModule
  ]
})
export class SubscriptionOrderModule { }
