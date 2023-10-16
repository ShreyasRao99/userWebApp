import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { environment } from 'src/environments/environment';
import { orderStatusMapper } from 'src/config/order-status.config';
import { SendDataToComponent } from 'src/service/sendDataToComponent';
import { ApiMainService } from 'src/service/apiService/api-main.service';


@Component({
  selector: 'app-order-details-subscription',
  templateUrl: './order-details-subscription.component.html',
  styleUrls: ['./order-details-subscription.component.scss']
})
export class OrderDetailsSubscriptionComponent implements OnInit {
  @Input() order: any;
  imageUrl = environment.imageUrl;
  orderStatusMapper: any = orderStatusMapper;
  showCancel = false;
  showTimer = false
  reload = false;
  showCancelMsg = false;
  apiTimeoutCounter: any;
  intervalCounter: any;
  apiIntervalCounter: any;
  minute = 0;
  second = 0;
  statusHistoryList: any[] = [];
  lastSubscriptionDate: any;
  mealPerdayCount = 1;
  showOrdersComponent: boolean = false;
  orderProps: any;

  constructor(private sendDataToComponent:SendDataToComponent, private chgDetRef: ChangeDetectorRef, private apiMainService:ApiMainService) { }

  ngOnInit(): void {
    if (this.order) {
      // this.this.order = this.order;
      if (this.order.lastSubscriptionDate) {
        this.lastSubscriptionDate = this.order.lastSubscriptionDate;
      }
      this.updateMealawePrice(this.order);
      this.subscribeEvents();
      this.updateOrderDetailsSubscription();
      this.getOrderDetailsSubscription();
    }
  }

  close() {
    // this.modalController.dismiss({            
    //     back: this.reload,
    //     order:this.order
    // });
  }

  updateMealawePrice(order: any) {
    if (!order.deliveryCharges) {
      order.deliveryCharges = 0;
    }
    if (!order.mealaweDeliveryDiscount) {
      order.mealaweDeliveryDiscount = 0;
    }
    if (!order.mealaweKitchenDiscount) {
      order.mealaweKitchenDiscount = order.kitchenDiscount;
    }
    if (!order.mealaweItemDiscount) {
      order.mealaweItemDiscount = 0;
    }
    if (!order.mealaweTotalAmt) {
      order.mealaweTotalAmt = order.amount;
    }

    if (order.itemList && order.addOns) {
      order.itemList.forEach((ele: any) => {
        if (!ele.mealawePrice) {
          ele.mealawePrice = ele.itemPrice;
        }
      });
      order.addOns.forEach((ele: any) => {
        if (!ele.mealawePrice) {
          ele.mealawePrice = ele.addOnPrice
        }
      });
    }
  }

  subscribeEvents() {
    this.sendDataToComponent.subscribe('UPDATE_ORDER_DETAILS', (update: any) => {
      if (update && this.order) {
        this.getOrderDetailsSubscription();
      }
    });
  }

  updateOrderDetailsSubscription() {
    this.apiIntervalCounter = setInterval(async () => {
      this.getOrderDetailsSubscription();
    }, 5 * 60 * 1000);
  }

  async getOrderDetailsSubscription() {
    try {
      let order;
      if (this.order.orderType === 'subscriptionParent') {
        order = await this.apiMainService.getOrderSubscription(this.order._id);
      } else if (this.order.orderType === 'subscriptionPackage') {
        order = await this.apiMainService.getOrderPackage(this.order._id);
        this.mealPerdayCount = 1;
        if (this.order.mealTimeLunch && this.order.mealTimeDinner) {
          this.mealPerdayCount = 2;
        }
      }
      console.log(order)
      if (order) {
        this.order = order;
        // this.checkCancelStatus();
        // this.checkDeliveryDetails();
        this.prepareOrderStatusHistory();
        this.getLastSubscriptionDate(order);
      }
      this.chgDetRef.detectChanges();
    } catch (e) {
      console.log('error while updating feedback status ', e);
    }
  }

  getLastSubscriptionDate(order:any) {
    let maxOrderDate = new Date();
    if (order && order.dailyOrderList) {
      order.dailyOrderList.forEach((meal:any) => {
        const orderDate = new Date(meal.orderDate);
        if (orderDate.getTime() > maxOrderDate.getTime()) {
          maxOrderDate = orderDate;
        }
      });
    }
    this.lastSubscriptionDate = maxOrderDate;
  }

  isOrderOpen(order:any) {
    const orderStatusList = ['placed', 'accepted', 'preparing', 'cancelledByKitchen', 'rejectedByKitchen',
      'readyToDelivery', 'deliveryBoyAssigned', 'handedOverToDeliveryBoy',
      'onTheWay'];
    if (orderStatusList.indexOf(order.orderstatus) > -1) {
      return true;
    } else {
      return false
    }
  }
  prepareOrderStatusHistory() {
    const uniqueStatus: any = {};
    this.statusHistoryList = [];
    if (this.order && this.order.statusHistory && this.order.statusHistory.length > 0) {
      this.order.statusHistory.forEach((history: any) => {
        if (!uniqueStatus[history.orderstatus]) {
          uniqueStatus[history.orderstatus] = history.orderstatus;
          this.statusHistoryList.push(history);
        }
      });
    }
  }

  async viewOrder(foodOrderId: any) {
    if (foodOrderId) {
      this.showOrdersComponent = true;
      this.orderProps = { order: { _id: foodOrderId, lastSubscriptionDate: this.lastSubscriptionDate } }
      // try {
      //   const modal = await this.modalController.create({
      //     component: OrderDetailsComponent,
      //     componentProps: { order: { _id: foodOrderId, lastSubscriptionDate: this.lastSubscriptionDate } }
      //   });
      //   modal.onDidDismiss().then((event: any) => {
      //     const data = event.data;
      //     if (data && data.back) {
      //       this.getOrderDetailsSubscription();
      //     }
      //   });
      //   return await modal.present();
      // } catch (error) {
      //   console.log('')
      // }
    }
  }

  goBack(){
    this.showOrdersComponent = !this.showOrdersComponent
    this.getOrderDetailsSubscription()
  }

  ngOnDestroy() {
    clearTimeout(this.apiTimeoutCounter);
    clearInterval(this.intervalCounter);
    clearInterval(this.apiIntervalCounter);
    this.sendDataToComponent.unsubscribe('UPDATE_ORDER_DETAILS');
  }

}
