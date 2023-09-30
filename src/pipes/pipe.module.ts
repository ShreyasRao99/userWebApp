import { NgModule } from '@angular/core';
import { ManualFilterPipe } from './filter.pipe';
import { KitchenSortPipe } from './kitchensort.pipe';
import { ArraySortPipe } from './sort.pipe';

@NgModule({
  imports: [
  ],
  declarations: [ArraySortPipe,KitchenSortPipe,ManualFilterPipe],
  exports: [ArraySortPipe,KitchenSortPipe,ManualFilterPipe]
})
export class CustomPipeModule {}
