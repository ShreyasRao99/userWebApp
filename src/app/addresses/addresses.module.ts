import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressesRoutingModule } from './addresses-routing.module';
import { AddressesComponent } from './addresses.component';
import { SetDeliveryLocationModule } from '../set-delivery-location/set-delivery-location.module';


@NgModule({
  declarations: [
    AddressesComponent
  ],
  imports: [
    CommonModule,
    AddressesRoutingModule,
    SetDeliveryLocationModule
  ]
})
export class AddressesModule { }
