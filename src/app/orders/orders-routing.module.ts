import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders.component';

const routes: Routes = [
  {
    path: '', component: OrdersComponent, children: [
      { path: 'pastOrder', loadChildren: () => import('./my-past-order/my-past-order.module').then(m => m.MyPastOrderModule) },
      { path: 'subscriptionOrder', loadChildren: () => import('./subscription-order/subscription-order.module').then(m => m.SubscriptionOrderModule) },
      { path: 'submittedBulkOrder', loadChildren: () => import('./submitted-bulk-order/submitted-bulk-order.module').then(m => m.SubmittedBulkOrderModule) },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
