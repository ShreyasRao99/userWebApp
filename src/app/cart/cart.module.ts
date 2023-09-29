import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { CartKitchenCardModule } from '../cart-kitchen-card/cart-kitchen-card.module';
import { CustomPipeModule } from 'src/pipes/pipe.module';
import { FormsModule } from '@angular/forms';
import { SetDeliveryLocationModule } from '../set-delivery-location/set-delivery-location.module';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderModule } from '../header/header.module';


@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    CartKitchenCardModule,
    FormsModule,
    CustomPipeModule,
    SetDeliveryLocationModule,
    NgbDropdownModule,
    HeaderModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class CartModule { }
