import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { SendDataToComponent } from 'src/service/sendDataToComponent';
import { orderStatusMapper } from 'src/config/order-status.config';
import { LocalStorageService } from 'src/service/local-storage.service';
import { ApiMainService } from 'src/service/apiService/api-main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-track-open-order',
  templateUrl: './track-open-order.component.html',
  styleUrls: ['./track-open-order.component.scss']
})
export class TrackOpenOrderComponent implements OnInit, OnDestroy {

  openOrderList: any = [];
  userProfile: any = {};
  orderStatusMapper: any = orderStatusMapper;
  more = true;
  apiIntervalCounter: any;
  arrow = this.more;

  constructor(private sendDataToComponent: SendDataToComponent, private router:Router, private chgDetRef: ChangeDetectorRef, private apiMainService: ApiMainService, private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.subscribeEvents();
    this.getOpenOrder();
    this.updateOrderDetails();
  }

  subscribeEvents() {
    this.sendDataToComponent.subscribe('UPDATE_OPEN_ORDERS', (update: any) => {
      if (update) {
        this.getOpenOrder();
      }
    });
  }

  updateOrderDetails() {
    this.apiIntervalCounter = setInterval(async () => {
      this.getOpenOrder();
    }, 10 * 60 * 1000);
  }

  async getOpenOrder() {
    try {
      this.userProfile = this.localStorageService.getCacheData('USER_PROFILE');
      if (this.userProfile && this.userProfile._id) {
        const orderList: any = await this.apiMainService.getCustomerCurrentOpenOrders(this.userProfile._id);
        this.openOrderList = [...orderList]
        this.chgDetRef.detectChanges();
      }
    } catch (error) {
      console.log('Error while fetching order ', error);
    }
  }

  goToOrderPage(order: any) {
    console.log(order)
    if(order.orderType  === 'subscriptionParent'|| order.orderType === 'subscriptionPackage'){
      this.router.navigate(['/my-account/orders'], {queryParams:{orderType:order.orderType}})
    }
    else{
      this.router.navigate(['/my-account/orders'], {queryParams:{orderType:order.orderType}})
    }
  }

  ngOnDestroy() {
    this.sendDataToComponent.unsubscribe('UPDATE_OPEN_ORDERS');
    clearTimeout(this.apiIntervalCounter);
  }

}
