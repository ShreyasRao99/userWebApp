import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NoServiceModule } from '../no-service/no-service.module';
import { RegionalItemsModule } from '../regional-items/regional-items.module';
import { CategoryItemsModule } from '../category-items/category-items.module';
import { MealTimeModule } from '../meal-time/meal-time.module';
import { SetDeliveryLocationModule } from '../set-delivery-location/set-delivery-location.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NoServiceModule,
    RegionalItemsModule,
    CategoryItemsModule,
    MealTimeModule,
    SetDeliveryLocationModule
  ]
})
export class HomeModule { }
