import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KitchenInsideRoutingModule } from './kitchen-inside-routing.module';
import { KitchenInsideComponent } from './kitchen-inside.component';
import { CouponDisplayComponent } from '../coupon-display/coupon-display.component';
import { CustomPipeModule } from 'src/pipes/pipe.module';
import { ItemCardModule } from '../item-card/item-card.module';
import { CartFooterModule } from '../cart-footer/cart-footer.module';
import { KitchenMenuPopupComponent } from '../kitchen-menu-popup/kitchen-menu-popup.component';
import { HeaderModule } from '../header/header.module';
import { AddonPopupComponent } from '../addon-popup/addon-popup.component';
import { KitchenFiltersModule } from '../kitchen-filters/kitchen-filters.module';
import { FooterModule } from '../footer/footer.module';
import { FormsModule } from '@angular/forms';
import { ScrollTopModule } from '../scroll-top/scroll-top.module';


@NgModule({
  declarations: [
    KitchenInsideComponent,
    CouponDisplayComponent,
    KitchenMenuPopupComponent,
    AddonPopupComponent
  ],
  imports: [
    CommonModule,
    KitchenInsideRoutingModule,
    CustomPipeModule,
    ItemCardModule,
    CartFooterModule,
    HeaderModule,
    FooterModule,
    KitchenFiltersModule,
    FormsModule,
    ScrollTopModule
  ]
})
export class KitchenInsideModule { }
