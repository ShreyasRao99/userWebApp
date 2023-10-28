import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { CartKitchenCardModule } from '../cart-kitchen-card/cart-kitchen-card.module';
import { CustomPipeModule } from 'src/pipes/pipe.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SetDeliveryLocationModule } from '../set-delivery-location/set-delivery-location.module';
import { HeaderModule } from '../header/header.module';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgxMultipleDatesModule } from 'ngx-multiple-dates';
import { MatInputModule } from '@angular/material/input';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { CheckoutModule } from 'paytm-blink-checkout-angular';
import { MobileTabsModule } from '../mobile-header/mobile-tabs.module';

@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    CartKitchenCardModule,
    FormsModule,
    ReactiveFormsModule,
    CustomPipeModule,
    SetDeliveryLocationModule,
    HeaderModule,
    NgbDropdownModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    NgxMultipleDatesModule,
    CheckoutModule,
    SetDeliveryLocationModule,
    ReactiveFormsModule,
    MobileTabsModule
  ],
  providers:[DatePipe],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class CartModule { }
