import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealTimeComponent } from './meal-time.component';



@NgModule({
  declarations: [
    MealTimeComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MealTimeComponent
  ]
})
export class MealTimeModule { }
