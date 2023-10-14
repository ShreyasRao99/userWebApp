import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SetDeliveryLocationModule } from '../set-delivery-location/set-delivery-location.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgOtpInputModule } from 'ng-otp-input';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SetDeliveryLocationModule,
    RouterModule,
    ReactiveFormsModule,
    NgOtpInputModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
