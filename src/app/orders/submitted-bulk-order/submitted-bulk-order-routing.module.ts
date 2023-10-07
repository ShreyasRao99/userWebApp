import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubmittedBulkOrderComponent } from './submitted-bulk-order.component';

const routes: Routes = [
  {path:'', component:SubmittedBulkOrderComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubmittedBulkOrderRoutingModule { }
