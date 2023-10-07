import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KitchenFiltersComponent } from './kitchen-filters.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    KitchenFiltersComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    KitchenFiltersComponent
  ]
})
export class KitchenFiltersModule { }
