import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyPastOrderComponent } from './my-past-order.component';

const routes: Routes = [
  {path:'', component:MyPastOrderComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyPastOrderRoutingModule { }
