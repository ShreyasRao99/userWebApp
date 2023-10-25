import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CashbackRoutingModule } from './cashback-routing.module';
import { CashbackComponent } from './cashback.component';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    CashbackComponent
  ],
  imports: [
    CommonModule,
    CashbackRoutingModule,
    NgbAccordionModule
  ]
})
export class CashbackModule { }
