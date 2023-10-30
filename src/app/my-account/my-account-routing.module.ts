import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyAccountComponent } from './my-account.component';

const routes: Routes = [
  {
    path: '',
    component: MyAccountComponent,
    children: [
      {
        path: 'orders',
        loadChildren: () => import('../orders/orders.module').then(m => m.OrdersModule)
      },
      {
        path: 'addresses',
        loadChildren: () => import('../addresses/addresses.module').then(m => m.AddressesModule)
      },
      {
        path: 'cashback',
        loadChildren: () => import('../cashback/cashback.module').then(m => m.CashbackModule)
      },
      {
        path: 'my-wallet',
        loadChildren: () => import('../my-wallet/my-wallet.module').then(m => m.MyWalletModule)
      },
      {
        path: 'my-help',
        loadChildren: () => import('../my-help/my-help.module').then(m => m.MyHelpModule)
      },
      {
        path: 'myProfile',
        loadChildren: () => import('../my-profile/my-profile.module').then(m => m.MyProfileModule)
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyAccountRoutingModule { }
