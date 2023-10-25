import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionComponent } from './subscription.component';
import { SubscriptionRoutingModule } from './subscription-routing.module';
import { MainSliderModule } from '../main-slider/main-slider.module';
import { HeaderModule } from '../header/header.module';
import { FormsModule } from '@angular/forms';
import { FooterModule } from '../footer/footer.module';



@NgModule({
  declarations: [
    SubscriptionComponent
  ],
  imports: [
    CommonModule,
    SubscriptionRoutingModule,
    MainSliderModule,
    HeaderModule,
    FormsModule,
    FooterModule
  ]
})
export class SubscriptionModule { }
