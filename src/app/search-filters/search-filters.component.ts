import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-filters',
  templateUrl: './search-filters.component.html',
  styleUrls: ['./search-filters.component.scss']
})
export class SearchFiltersComponent implements OnInit {
  @Input() props:any
  @Output()filters:EventEmitter<any> = new EventEmitter<any>()

  filterObj:any = {
    level0: false, level1: false, level2: false, level3: false ,
    Veg: false, NonVeg: false, Jain: false ,
    rated4plus: false, bestseller: false ,
    lowToHigh: false, highToLow: false ,
}
constructor() {

 }
  ngOnInit(): void {
    const data = this.props.data;
  if(data){
    this.filterObj = {...data};
  }
  }

dismiss(back?:any){
  this.filters.emit({filterObj:this.filterObj,back})
  // this.popoverController.dismiss(this.filterObj)
}
clear(){
  this.filterObj = {};
  this.dismiss();
}

}
