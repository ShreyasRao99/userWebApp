import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'home', loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule)},
  {path:'welcome', loadChildren:()=>import('./welcome/welcome.module').then(m=>m.WelcomeModule)},
  {path:'my-account', loadChildren:()=>import('./my-account/my-account.module').then(m=>m.MyAccountModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
