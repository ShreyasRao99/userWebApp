import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NoServiceModule } from '../no-service/no-service.module';
import { RegionalItemsModule } from '../regional-items/regional-items.module';
import { CategoryItemsModule } from '../category-items/category-items.module';
import { MealTimeModule } from '../meal-time/meal-time.module';
import { SetDeliveryLocationModule } from '../set-delivery-location/set-delivery-location.module';
import { MainSliderModule } from '../main-slider/main-slider.module';
import { KitchenCardModule } from '../kitchen-card/kitchen-card.module';
import { KitchenNearModule } from '../kitchen-near/kitchen-near.module';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { MobileTabsModule } from '../mobile-header/mobile-tabs.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NoServiceModule,
    RegionalItemsModule,
    CategoryItemsModule,
    MealTimeModule,
    SetDeliveryLocationModule,
    MainSliderModule,
    KitchenCardModule,
    KitchenNearModule,
    NgbPopoverModule,
    HeaderModule,
    FooterModule,
    MobileTabsModule
  ]
})
export class HomeModule { }
