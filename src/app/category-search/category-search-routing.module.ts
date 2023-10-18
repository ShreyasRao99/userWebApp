import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorySearchComponent } from './category-search.component';

const routes: Routes = [
  {path:'', component:CategorySearchComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategorySearchRoutingModule { }
