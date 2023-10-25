import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFiltersComponent } from '../search-filters/search-filters.component';


@NgModule({
  declarations: [
    SearchFiltersComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SearchFiltersComponent
  ]
})
export class SearchFiltersModule { }
