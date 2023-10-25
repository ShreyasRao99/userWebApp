import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { RegionalItemsModule } from '../regional-items/regional-items.module';
import { HeaderModule } from '../header/header.module';
import { CustomPipeModule } from 'src/pipes/pipe.module';
import { ItemCardModule } from '../item-card/item-card.module';
import { KitchenCardModule } from '../kitchen-card/kitchen-card.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchFiltersModule } from '../search-filters/search-filters.module.component';


@NgModule({
  declarations: [
    SearchComponent,
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    RegionalItemsModule,
    HeaderModule,
    CustomPipeModule,
    ItemCardModule,
    KitchenCardModule,
    FormsModule,
    ReactiveFormsModule,
    SearchFiltersModule
  ]
})
export class SearchModule { }
