import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from 'src/service/local-storage.service';
import { orderStatusMapper } from 'src/config/order-status.config';
import { ApiMainService } from 'src/service/apiService/api-main.service';

@Component({
  selector: 'app-my-past-order',
  templateUrl: './my-past-order.component.html',
  styleUrls: ['./my-past-order.component.scss']
})
export class MyPastOrderComponent implements OnInit {
  @ViewChild('pastOrdersListEndDiv') pastOrdersListEndDiv!: ElementRef;
  @ViewChild('orderDetails') orderDetails!: ElementRef;
  imageUrl = environment.imageUrl;
  pastOrderList: any = [];
  userProfile: any = {};
  orderStatusMapper:any = orderStatusMapper;
  showloader = false;
  pageNumber = 1;
  paginationOver = false;
  order: any;
  showOrders: boolean  = false;

  constructor(private localStorageService: LocalStorageService, private apiMainService:ApiMainService) { }

  ngOnInit(): void {
    this.userProfile = this.localStorageService.getCacheData('USER_PROFILE');
    if (this.userProfile && this.userProfile._id) {
      this.getPastOrder();
    }
  }

  async getPastOrder() {
    try {
      const pastOrderList: any = await this.apiMainService.getCustomerPastOrders(this.userProfile._id, this.pageNumber);
      if (pastOrderList && pastOrderList.length > 0) {
        this.pastOrderList = [...this.pastOrderList, ...pastOrderList];
        this.showloader = false;
      } else {
        this.paginationOver = true;
        this.showloader = false;
      }
    } catch (error) {
      this.paginationOver = true;
      this.showloader = false;
    }
  }

  updateSelectedOrder(order:any) {
    this.pastOrderList = [...this.pastOrderList].map(listOrder => {
      if (listOrder._id === order._id) {
        listOrder = { ...order };
      }
      return listOrder;
    });
  }

  logScrollEnd($event:any) {
    const element = $event.target;
    if (element.clientHeight + 10 >= this.pastOrdersListEndDiv.nativeElement.getBoundingClientRect().top) {
      if (!this.paginationOver) {
        this.showloader = true;
        this.pageNumber++;
        this.getPastOrder();
      }
    }
  }

  toggleCanvas(){
    let el = this.orderDetails.nativeElement;
    el.click();
  }

  goToOrderPage(val:any){
    this.order = val
  }

}
