import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpSectionComponent } from './help-section.component';

const routes: Routes = [
  {path:'', component:HelpSectionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpSectionRoutingModule { }
