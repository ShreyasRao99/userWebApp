import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyFeedbackComponent } from './my-feedback.component';

const routes: Routes = [
  {path:'', component:MyFeedbackComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyFeedbackRoutingModule { }
