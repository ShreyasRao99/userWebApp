import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ApiMainService } from 'src/service/apiService/api-main.service';
import { LocalStorageService } from 'src/service/local-storage.service';

@Component({
  selector: 'app-coupon-display',
  templateUrl: 'coupon-display.component.html',
  styleUrls: ['./coupon-display.component.scss'],
})
export class CouponDisplayComponent implements OnChanges{
  @Input() kitchenCoupon: any = [];
  @Input() orderType:any;
  @Input() offerText:any = [];
  couponList:any = [];
  couponListDB:any = [];
  filterDBList:any = [];
  userProfile:any = {};
  
  constructor(private localStorageService: LocalStorageService, private apiMainService: ApiMainService) {
      this.userProfile = this.localStorageService.getCacheData('USER_PROFILE'); 
      this.getCouponList(); 
  }
  ngOnChanges(changes: SimpleChanges) {
    if(this.orderType === 'subscription'){
      this.couponList = [...this.kitchenCoupon];
    }else{
      this.couponList = [...this.offerText];
    }
    this.sortNfilterDBList();
  }

  async getCouponList(){
    let profileId = 'all';
    if(this.userProfile && this.userProfile._id){
      profileId = this.userProfile._id;
    } 
    this.couponListDB = await this.apiMainService.getValidUserCouponList(profileId);
    this.sortNfilterDBList();
  }

  sortNfilterDBList(){
    this.filterDBList = this.couponListDB.filter((coupon:any) => {
        if(coupon.orderTypes?.indexOf(this.orderType) > -1){
          return true;
        }else{
          return false;
        }
    })
  }
}
