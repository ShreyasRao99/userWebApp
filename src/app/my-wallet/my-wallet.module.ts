import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyWalletRoutingModule } from './my-wallet-routing.module';
import { MyWalletComponent } from './my-wallet.component';

@NgModule({
  declarations: [
    MyWalletComponent
  ],
  imports: [
    CommonModule,
    MyWalletRoutingModule
  ],
})
export class MyWalletModule { }
