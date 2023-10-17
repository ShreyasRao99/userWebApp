import { NgModule } from '@angular/core';
import { ManualFilterPipe } from './filter.pipe';
import { KitchenSortPipe } from './kitchensort.pipe';
import { ArraySortPipe } from './sort.pipe';
import { StringifyJsonPipe } from './stringify-json.pipe';

@NgModule({
  imports: [
  ],
  declarations: [ArraySortPipe,KitchenSortPipe,ManualFilterPipe,StringifyJsonPipe],
  exports: [ArraySortPipe,KitchenSortPipe,ManualFilterPipe,StringifyJsonPipe]
})
export class CustomPipeModule {}
