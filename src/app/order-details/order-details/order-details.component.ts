import { Component, OnInit, Input, ChangeDetectorRef, Output, EventEmitter, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { environment } from 'src/environments/environment';
import { orderStatusMapper } from 'src/config/order-status.config';
import { SendDataToComponent } from 'src/service/sendDataToComponent';
import { ApiMainService } from 'src/service/apiService/api-main.service';
import { ConfirmationModalService } from 'src/app/confirmation-modal/confirmation-modal.service';
import { ToasterService } from 'src/app/toaster/toaster.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit, OnChanges {
  @ViewChild('refundModal') refundModal: any;
  @Input() order: any;
  @Output() back: EventEmitter<any> = new EventEmitter<any>()
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
  runnerName: any;
  runnerPhone: any;
  runnerLocation: any;
  runnerStatus: any;
  statusHistoryList: any[] = [];
  showReschedule = false;
  rescheduleStart = false;
  rescheduelDate: any;
  minAllowedRescheduledDate: any;
  lastSubscriptionDate: any;
  after1DayLastSubscription: any;
  refundProps: any;
  modalReference: any;

  constructor(private sendDataToComponent: SendDataToComponent, private modalService: NgbModal, private toasterService: ToasterService, private confirmationModalService: ConfirmationModalService, private chgDetRef: ChangeDetectorRef, private apiMainService: ApiMainService) { }
  ngOnChanges(changes: SimpleChanges): void {
    if(this.order){
      // alert('')
      this.checkCancelStatus()
    }
  }

  ngOnInit() {
    console.log(this.order)
    if (this.order) {
      // this.this.order = this.order;
      if (this.order.lastSubscriptionDate) {
        this.lastSubscriptionDate = this.order.lastSubscriptionDate;
      }
      this.updateMealawePrice(this.order);
      this.subscribeEvents();
      this.updateOrderDetails();
      this.getOrderDetails();
    }
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
    this.sendDataToComponent.subscribe('UPDATE_ORDER_DETAILS', (update) => {
      if (update && this.order) {
        this.getOrderDetails();
      }
    });
  }

  updateOrderDetails() {
    this.apiIntervalCounter = setInterval(async () => {
      this.getOrderDetails();
    }, 5 * 60 * 1000);
  }

  async getOrderDetails() {
    try {
      console.log(this.order)
      const order = await this.apiMainService.getFoodOrder(this.order._id);
      if (order) {
        this.order = order;
        const orderDate = new Date(this.order.orderDate);
        const after1Day = new Date((orderDate).setDate(orderDate.getDate() + 1));
        this.minAllowedRescheduledDate = after1Day.toISOString();
        this.updateMealawePrice(this.order);
        this.checkCancelStatus();
        this.checkDeliveryDetails();
        this.prepareOrderStatusHistory();
        this.checkRescheduleStatus();
      }
      this.chgDetRef.detectChanges();
    } catch (e) {
      console.log('error while updating feedback status ', e);
    }
  }

  async rateKitchen(order: any) {
    // const modal = await this.modalController.create({
    //   component: RatingFeedbackComponent,
    //   componentProps: {ratingOf:'kitchen', orderInfo: order}
    // });
    // modal.onDidDismiss().then((event: any) => {
    //   const data = event.data;
    //   if (data && data.back){
    //    this.updateOrderFeedbackStatus(order);
    //   }
    // });
    // return await modal.present();
  }

  async updateOrderFeedbackStatus(order: any) {
    order.feedbackProvided = true;
    try {
      await this.apiMainService.updateFeedbackstatus(order._id);
    } catch (e) {
      console.log('error while updating feedback status ', e);
    }
  }

  checkCancelStatus() {
    this.showCancel = false;
    this.showTimer = false;
    this.showCancelMsg = false;
    if (this.order.orderType === 'advance' && (this.order.orderstatus === 'placed' || this.order.orderstatus === 'accepted')) {
      const currentTime = new Date();
      const completionDate = new Date(this.order.orderComplitionDate);
      const before2Day = new Date((new Date()).setDate(completionDate.getDate() - 2));
      if (currentTime.getDate() === before2Day.getDate()) {
        this.showCancel = true;
        this.showCancelMsg = true;
      }
    } else if ((this.order.orderType === 'daily' || this.order.orderType === 'allDay') && this.order.orderstatus === 'placed') {
      const currentTime = new Date();
      const orderDate = new Date(this.order.orderDate);
      const timeDiff = currentTime.getTime() - orderDate.getTime();
      const timeDiffInMin = timeDiff / (1000 * 60);
      console.log(timeDiffInMin)
      if (timeDiffInMin > 15) {
        this.showCancel = true;
      } else {
        this.showTimer = true;
        this.createTimer(15 - timeDiffInMin);
      }
    }
  }

  async cancelOrder() {
    this.confirmationModalService.modal(`Are you sure you want to Cancel this order?`,
      () => this.refund(), this)
    // const alert = await this.alertController.create({
    //   cssClass: 'my-alert-class',
    //   header: 'Alert!',
    //   backdropDismiss: false,
    //   message: 'Are you sure you want to Cancel this order?',
    //   buttons: [
    //       {
    //         text: 'No',
    //         role: 'cancel',
    //         cssClass: 'nobtn',
    //         handler: (blah) => {
    //           console.log('Confirm Cancel: blah');
    //         }
    //       }, {
    //         text: 'Yes',
    //         cssClass: 'yesbtn',
    //         handler: () => {
    //           console.log('Confirm Okay');
    //           this.refund();

    //         }
    //       }
    //     ]
    // });  
    // await alert.present();
  }

  async refundOrder() {
    // const alert = await this.alertController.create({
    //   cssClass: 'my-alert-class',
    //   header: 'Alert!',
    //   backdropDismiss: false,
    //   message: 'Are you sure you want to refund this order?',
    //   buttons: [
    //       {
    //         text: 'No',
    //         role: 'cancel',
    //         cssClass: 'nobtn',
    //         handler: (blah:any) => {
    //           console.log('Confirm Cancel: blah');
    //         }
    //       }, {
    //         text: 'Yes',
    //         cssClass: 'yesbtn',
    //         handler: () => {
    //           console.log('Confirm Okay');
    //           this.refund();

    //         }
    //       }
    //     ]
    // });  
    // await alert.present();
  }
  async refund() {
    try {
      const eligilityObj = await this.apiMainService.checkCancelEligibility(this.order._id);
      if (eligilityObj.cancelEligible) {
        this.refundProps = {
          order: this.order,
          refundAmt: eligilityObj.refund_amount
        }
        this.modalReference = this.modalService.open(this.refundModal, { ariaLabelledBy: 'modal-basic-title', size: 'lg', windowClass: 'addonsModel' });
        // const modal = await this.modalController.create({
        //   component: RefundPopUpComponent,
        //   cssClass: 'xshort-modal-design',
        //   showBackdrop:true,
        //   backdropDismiss: true,
        //   componentProps: {
        //     order:this.order,
        //     refundAmt: eligilityObj.refund_amount
        //   }
        // });
        // modal.onDidDismiss().then((event: any) => {
        //   const data = event.data;
        //   if (data && data.back && data.refundObj){
        //     this.startReFundProcess(data.refundObj);
        //   } 
        // });
        // return await modal.present();
      } else {
        this.toasterService.error(107);
        this.getOrderDetails();
      }
    } catch (e) {
      console.log('error while cancellin/refund order ', e);
    }
  }

  async startReFundProcess(refundObj: any) {
    this.modalReference.close();
    console.log(refundObj)
    if (refundObj) {
      try {
        this.showCancel = false;
        this.showTimer = false;
        this.showCancelMsg = false;
        this.order = await this.apiMainService.refund(refundObj);
        this.toasterService.success(106);
        this.sendDataToComponent.publish('UPDATE_OPEN_ORDERS', true);
        this.reload = true;
        this.checkCancelStatus();
      } catch (e) {
        this.checkCancelStatus();
        console.log('error while proceeding refund ', e)
      }
    }
  }


  async checkDeliveryDetails() {
    if (this.isOrderOpen(this.order)) {
      if (this.order.deliveryTaskId) {
        const deliveryOrderStatus = await this.apiMainService.trackDeliveryTask(this.order.deliveryTaskId, this.order.deliveryVendor);
        if (deliveryOrderStatus && deliveryOrderStatus.runner) {
          this.runnerName = deliveryOrderStatus.runner.name;
          this.runnerPhone = deliveryOrderStatus.runner.phone_number;
          this.runnerLocation = deliveryOrderStatus.runner.location;
          this.runnerStatus = deliveryOrderStatus.state;
        }
      }
      clearTimeout(this.apiTimeoutCounter);
      this.apiTimeoutCounter = setTimeout(() => {
        this.checkDeliveryDetails();
      }, 10000);
    }
  }

  createTimer(timeDiff: any) {
    this.minute = Math.round(timeDiff);
    this.second = 60;
    this.intervalCounter = setInterval(() => {
      if (this.minute <= 0 && this.second <= 0) {
        clearInterval(this.intervalCounter);
        this.checkCancelStatus();
      } else {
        this.second--;
        if (this.second === 0) {
          this.minute--;
          if (this.minute >= 0) {
            this.second = 60;
          }
        }
      }
    }, 1000);
  }

  callRunner(phone: any) {
    // try{
    //   this.callNumber.callNumber(phone, true)
    //   .then(res => console.log('Launched dialer!', res))
    //   .catch(err => console.log('Error launching dialer', err));
    // }catch(e){
    //   console.log('error while calling runner ',e);
    // }    
  }
  //   async viewRunnerOnBigMap(runnerLocation,deliveryOrder){  
  //     clearTimeout(this.apiTimeoutCounter);
  //     try{
  //         const modal = await this.modalController.create({
  //           component: MapRouteDisplayComponent,
  //           componentProps: {runnerLocation,destinationLocation:deliveryOrder.customerLocation.geolocation,
  //                           deliveryTaskId:deliveryOrder.deliveryTaskId, deliveryVendor:deliveryOrder.deliveryVendor, screenSize:'big'}
  //         });
  //         modal.onDidDismiss().then((event: any) => {
  //             this.checkDeliveryDetails();
  //         });
  //         return await modal.present();      
  //       }catch(e){
  //         console.log('error while changes kitchen opened status ',e);
  //       }
  //  }
  isOrderOpen(order: any) {
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
      this.order.statusHistory.forEach((history: any, index: any) => {
        if (!uniqueStatus[history.orderstatus]) {
          uniqueStatus[history.orderstatus] = history.orderstatus;
          if (index === this.order.statusHistory.length - 1) {
            history.completed = false;
          } else {
            history.completed = true;
          }
          history.mapperStatus = this.orderStatusMapper[history.orderstatus];
          this.statusHistoryList.push(history);
        }
      });
    }
  }

  checkRescheduleStatus() {
    this.showReschedule = false;
    if (this.order.orderType === 'subscription') {
      const currentTime = new Date();
      const orderDate = new Date(this.order.orderDate);
      const tomorrow = new Date(currentTime.setDate(currentTime.getDate() + 1));
      if (this.lastSubscriptionDate) {
        const after1DayLastSubscription = new Date(this.lastSubscriptionDate.setDate(this.lastSubscriptionDate.getDate() + 1));
        this.after1DayLastSubscription = after1DayLastSubscription.toISOString();
      }
      if (tomorrow.getDate() === orderDate.getDate() || orderDate.getTime() >= tomorrow.getTime()) {
        this.showReschedule = true;
      }
    }
  }

  rescheduleOrder() {
    this.rescheduleStart = true;
  }
  cancelReschedule() {
    this.rescheduleStart = false;
  }
  async completeReschedule() {
    try {
      const isodate = new Date(this.rescheduelDate)
      const order = await this.apiMainService.resechedulePackageOrder(this.rescheduelDate, this.order._id, this.order.subscriptionMasterId);
      if (order) {
        this.order = order;
        this.reload = true;
        this.sendDataToComponent.publish('UPDATE_OPEN_ORDERS', true);
      }
      this.rescheduleStart = false;
      this.rescheduelDate = undefined;
      this.back.emit(true)
    } catch (error) {
      console.log('error while reschedule order ', error)
    }
  }

  rescheduleDateChanged(value: any) {
    console.log(value)
    this.rescheduelDate = new Date(value);
    console.log(this.rescheduelDate)
  }

  goBack(){
    this.back.emit(true)
  }


  ngOnDestroy() {
    clearTimeout(this.apiTimeoutCounter);
    clearInterval(this.intervalCounter);
    clearInterval(this.apiIntervalCounter);
    this.sendDataToComponent.unsubscribe('UPDATE_ORDER_DETAILS');
  }

}
