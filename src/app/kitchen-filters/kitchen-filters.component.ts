import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-kitchen-filters',
  templateUrl: './kitchen-filters.component.html',
  styleUrls: ['./kitchen-filters.component.scss']
})
export class KitchenFiltersComponent implements OnInit {
  @Input()props:any
  @Output()filters:EventEmitter<any> = new EventEmitter<any>()

  filterObj: any = {
    Veg: false, NonVeg: false, Jain: false,
    rating: false, deliveryTime: false,
    level0: false, level1: false, level2: false, level3: false,
    lowToHigh: false, highToLow: false,
    Bakery: false, Pickle: false, Snacks: false, Sweet: false, Barbecue: false, Spices: false,
    Combo: false
  }
  type:any = 1;
  orderType: any;
  sortType: any;

  ngOnInit(): void {
    console.log(this.props)
    if(this.props.data){
      this.filterObj = {...this.props.data};     
      if(this.filterObj.Veg){
        this.orderType = 'Veg';
      }else if(this.filterObj.NonVeg){
        this.orderType = 'NonVeg';
      }else if(this.filterObj.Jain){
        this.orderType = 'Jain';
      } 
      // if(this.filterObj.rating){
      //   this.sortType = 'rating'
      // }else if(this.filterObj.deliveryTime){
      //   this.sortType = 'deliveryTime'
      // }  
      if(this.props.type){
        this.type = this.props.type;                    
      }              
    }
  }
  dismiss(back:any) {
    if(this.orderType === 'Veg'){
      this.filterObj.Veg = true
    }else if(this.orderType === 'NonVeg'){
      this.filterObj.NonVeg = true
    }else if(this.orderType === 'Jain'){
      this.filterObj.Jain = true
    }
    console.log(this.filterObj)
    this.filters.emit({filterObj:this.filterObj,back})
    // if(this.sortType === 'rating'){
    //   this.filterObj.rating = true
    // }else if(this.sortType === 'deliveryTime'){
    //   this.filterObj.deliveryTime = true
    // }
    // this.modalController.dismiss({            
    //     back,
    //     filterObj: this.filterObj
    // });
  }
  goBack(){
    this.dismiss(false);
  }
  clear(){
    this.orderType = undefined;
    this.filterObj = {};
    this.dismiss(true);
  }
}
