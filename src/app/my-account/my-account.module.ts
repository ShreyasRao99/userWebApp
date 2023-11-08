import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAccountRoutingModule } from './my-account-routing.module';
import { MyAccountComponent } from './my-account.component';
import { HeaderModule } from '../header/header.module';
import { ScrollTopModule } from '../scroll-top/scroll-top.module';
// import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    MyAccountComponent
  ],
  imports: [
    CommonModule,
    MyAccountRoutingModule,
    HeaderModule,
    ScrollTopModule
    // NgbPopoverModule
  ]
})
export class MyAccountModule { }
