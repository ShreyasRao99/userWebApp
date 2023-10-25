import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeComponent } from './welcome.component';
import { WelcomeRoutingModule } from './welcome.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgOtpInputModule } from 'ng-otp-input';
import { FooterModule } from '../footer/footer.module';


@NgModule({
  declarations: [
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    ReactiveFormsModule,
    NgOtpInputModule,
    FooterModule
  ]
})
export class WelcomeModule { }
