import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeComponent } from './welcome.component';
import { WelcomeRoutingModule } from './welcome.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgOtpInputModule } from 'ng-otp-input';


@NgModule({
  declarations: [
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    ReactiveFormsModule,
    NgOtpInputModule,
  ]
})
export class WelcomeModule { }
