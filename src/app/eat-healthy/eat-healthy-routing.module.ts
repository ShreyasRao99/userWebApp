import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EatHealthyComponent } from './eat-healthy.component';

const routes: Routes = [
  {path:'', component:EatHealthyComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EatHealthyRoutingModule { }
