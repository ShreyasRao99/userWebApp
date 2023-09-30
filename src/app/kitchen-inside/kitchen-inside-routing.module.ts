import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KitchenInsideComponent } from './kitchen-inside.component';

const routes: Routes = [
  {
    path:'', component:KitchenInsideComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KitchenInsideRoutingModule { }
