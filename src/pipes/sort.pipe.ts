import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sort"
})
export class ArraySortPipe  implements PipeTransform {
  transform(array: any, field: string, order?: number) {
    if (!Array.isArray(array)) {
      return;
    }
    let seqorder = 1;
    if(order){
      seqorder = order;
    }
    array.sort((a: any, b: any) => {
      if (a[field] < b[field]) {
        return -1 * seqorder;
      } else if (a[field] > b[field]) {
        return 1 * seqorder;
      } else {
        return 0;
      }
    });    
    return array;
  }
}