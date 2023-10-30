import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFeedbackComponent } from './my-feedback.component';
import { MyFeedbackRoutingModule } from './my-feedback-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MyFeedbackComponent
  ],
  imports: [
    CommonModule,
    MyFeedbackRoutingModule,
    FormsModule
  ]
})
export class MyFeedbackModule { }
