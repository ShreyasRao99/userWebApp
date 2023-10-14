import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyHelpComponent } from './my-help.component';

const routes: Routes = [
  {path:'', component:MyHelpComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyHelpRoutingModule { }
