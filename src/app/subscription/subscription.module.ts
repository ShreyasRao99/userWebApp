import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionComponent } from './subscription.component';
import { SubscriptionRoutingModule } from './subscription-routing.module';
import { MainSliderModule } from '../main-slider/main-slider.module';
import { HeaderModule } from '../header/header.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SubscriptionComponent
  ],
  imports: [
    CommonModule,
    SubscriptionRoutingModule,
    MainSliderModule,
    HeaderModule,
    FormsModule
  ]
})
export class SubscriptionModule { }
