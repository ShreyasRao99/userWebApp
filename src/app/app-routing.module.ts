import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'welcome', loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomeModule)
  },
  {
    path: 'my-account', loadChildren: () => import('./my-account/my-account.module').then(m => m.MyAccountModule)
  },
  {
    path: 'search', loadChildren: () => import('./search/search.module').then(m => m.SearchModule)
  },
  {
    path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule)
  },
  {
    path: 'offers', loadChildren: () => import('./offers/offers.module').then(m => m.OffersModule)
  },
  {
    path: 'help', loadChildren: () => import('./help-section/help-section.module').then(m => m.HelpSectionModule)
  },
  {
    path: 'kitchenInside/:orderType/:kitchenId', loadChildren: () => import('./kitchen-inside/kitchen-inside.module').then(m => m.KitchenInsideModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
