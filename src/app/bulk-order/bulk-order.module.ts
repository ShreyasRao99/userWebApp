import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { BulkOrderComponent } from './bulk-order.component';
import { BulkOrderRoutingModule } from './bulk-order-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';



@NgModule({
  declarations: [
    BulkOrderComponent
  ],
  imports: [
    CommonModule,
    BulkOrderRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers:[
    DatePipe
  ]
})
export class BulkOrderModule { }
