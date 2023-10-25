import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategorySearchRoutingModule } from './category-search-routing.module';
import { CategorySearchComponent } from './category-search.component';
import { ItemCardModule } from '../item-card/item-card.module';
import { CustomPipeModule } from 'src/pipes/pipe.module';
import { FormsModule } from '@angular/forms';
import { HeaderModule } from '../header/header.module';
import { KitchenFiltersModule } from '../kitchen-filters/kitchen-filters.module';


@NgModule({
  declarations: [
    CategorySearchComponent
  ],
  imports: [
    CommonModule,
    CategorySearchRoutingModule,
    ItemCardModule,
    CustomPipeModule,
    FormsModule,
    HeaderModule,
    KitchenFiltersModule
  ]
})
export class CategorySearchModule { }
