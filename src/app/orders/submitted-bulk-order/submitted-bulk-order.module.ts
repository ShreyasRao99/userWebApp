import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmittedBulkOrderComponent } from './submitted-bulk-order.component';
import { SubmittedBulkOrderRoutingModule } from './submitted-bulk-order-routing.module';



@NgModule({
  declarations: [
    SubmittedBulkOrderComponent
  ],
  imports: [
    CommonModule,
    SubmittedBulkOrderRoutingModule
  ]
})
export class SubmittedBulkOrderModule { }
