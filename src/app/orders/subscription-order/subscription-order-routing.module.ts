import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubscriptionOrderComponent } from './subscription-order.component';

const routes: Routes = [
  {path:'', component:SubscriptionOrderComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubscriptionOrderRoutingModule { }
