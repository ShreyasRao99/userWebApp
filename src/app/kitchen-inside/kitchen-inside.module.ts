import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KitchenInsideRoutingModule } from './kitchen-inside-routing.module';
import { KitchenInsideComponent } from './kitchen-inside.component';
import { CouponDisplayComponent } from '../coupon-display/coupon-display.component';
import { CustomPipeModule } from 'src/pipes/pipe.module';
import { ItemCardModule } from '../item-card/item-card.module';
import { CartFooterModule } from '../cart-footer/cart-footer.module';


@NgModule({
  declarations: [
    KitchenInsideComponent,
    CouponDisplayComponent
  ],
  imports: [
    CommonModule,
    KitchenInsideRoutingModule,
    CustomPipeModule,
    ItemCardModule,
    CartFooterModule
  ]
})
export class KitchenInsideModule { }
