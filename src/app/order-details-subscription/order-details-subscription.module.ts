import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderDetailsSubscriptionComponent } from './order-details-subscription.component';
import { CustomPipeModule } from 'src/pipes/pipe.module';



@NgModule({
  declarations: [
    OrderDetailsSubscriptionComponent
  ],
  imports: [
    CommonModule,
    CustomPipeModule
  ],
  exports: [
    OrderDetailsSubscriptionComponent
  ]
})
export class OrderDetailsSubscriptionModule { }
