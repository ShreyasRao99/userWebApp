import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
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
  @HostListener("window:scroll", [])
  onScroll(): void {
    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight * .90)) {
      if (!this.scrolled) {
        this.scrolled = true;
        if(!this.paginationOver){
          this.showloader = true;
          this.pageNumber++;
          this.getPastOrder();
        } 
      };
    }
  }
  imageUrl = environment.imageUrl;
  pastOrderList: any = [];
  userProfile: any = {};
  orderStatusMapper:any = orderStatusMapper;
  showloader = false;
  pageNumber = 1;
  paginationOver = false;
  order: any;
  showOrders: boolean  = false;
  scrolled = false;

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
        this.scrolled = false;
      } else {
        this.paginationOver = true;
        this.showloader = false;
        this.scrolled = false;
      }
    } catch (error) {
      this.paginationOver = true;
      this.showloader = false;
      this.scrolled = false;
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
  
  toggleCanvas(){
    let el = this.orderDetails.nativeElement;
    el.click();
  }

  goToOrderPage(val:any){
    console.log(val)
    this.order = val
  }

}
