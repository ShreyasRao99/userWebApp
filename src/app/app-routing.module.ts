import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderPlacedComponent } from './order-placed/order-placed.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { KitchenSearchComponent } from './kitchen-search/kitchen-search.component';
import { EatHealthyComponent } from './eat-healthy/eat-healthy.component';
import { AccountComponent } from './account/account.component';

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
    path: 'subscription', loadChildren: () => import('./subscription/subscription.module').then(m => m.SubscriptionModule)
  },
  {
    path: 'bulk-order', loadChildren: () => import('./bulk-order/bulk-order.module').then(m => m.BulkOrderModule)
  },
  {
    path:'eatHealthy',loadChildren: () => import('./eat-healthy/eat-healthy-module').then(m => m.EatHealthyModule)
  },
  {
    path:'my-feedback',loadChildren: () => import('./my-feedback/my-feedback.module').then(m => m.MyFeedbackModule)
  },
  {
    path: 'kitchenInside/:orderType/:kitchenId', loadChildren: () => import('./kitchen-inside/kitchen-inside.module').then(m => m.KitchenInsideModule)
  },
  {
    path:'account', component:AccountComponent
  },
  {
    path:'order-placed', component:OrderPlacedComponent
  },
  {
    path:'kitchenSearch', component:KitchenSearchComponent
  },
  {
    path: 'categorySearch',
    loadChildren: () => import('./category-search/category-search.module').then(m => m.CategorySearchModule)
  },
  {
    path:'**', component:WelcomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled',useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
