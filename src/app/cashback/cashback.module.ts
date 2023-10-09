import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CashbackRoutingModule } from './cashback-routing.module';
import { CashbackComponent } from './cashback.component';



@NgModule({
  declarations: [
    CashbackComponent
  ],
  imports: [
    CommonModule,
    CashbackRoutingModule
  ]
})
export class CashbackModule { }
