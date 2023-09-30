import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpSectionRoutingModule } from './help-section-routing.module';
import { HelpSectionComponent } from './help-section.component';


@NgModule({
  declarations: [
    HelpSectionComponent
  ],
  imports: [
    CommonModule,
    HelpSectionRoutingModule
  ]
})
export class HelpSectionModule { }
