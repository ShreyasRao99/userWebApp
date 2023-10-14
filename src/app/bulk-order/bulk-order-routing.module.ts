import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BulkOrderComponent } from './bulk-order.component';

const routes: Routes = [
  {path:'', component:BulkOrderComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BulkOrderRoutingModule { }
