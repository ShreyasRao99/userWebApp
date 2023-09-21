import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KitchenCardComponent } from './kitchen-card.component';



@NgModule({
  declarations: [
    KitchenCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    KitchenCardComponent
  ]
})
export class KitchenCardModule { }
