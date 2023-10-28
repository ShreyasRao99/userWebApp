import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileTabsComponent } from './mobile-tabs.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MobileTabsComponent
  ],
  imports: [
    CommonModule,
    RouterModule 
  ],
  exports:[
    MobileTabsComponent,
  ]
})
export class MobileTabsModule { }
