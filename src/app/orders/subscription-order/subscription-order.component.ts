import { Component, OnInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import { orderStatusMapper } from 'src/config/order-status.config';
import { environment } from 'src/environments/environment';
import { ApiMainService } from 'src/service/apiService/api-main.service';
import { LocalStorageService } from 'src/service/local-storage.service';

@Component({
  selector: 'app-subscription-order',
  templateUrl: './subscription-order.component.html',
  styleUrls: ['./subscription-order.component.scss']
})
export class SubscriptionOrderComponent implements OnInit {
  @ViewChild('subscriptionOrders') subscriptionOrders!:ElementRef<any>;
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
  pastOrderList:any = [];
  userProfile:any = {};
  orderStatusMapper:any = orderStatusMapper;
  showloader = false;
  pageNumber = 1;
  paginationOver = false;
  order: any;
  scrolled = false;

  constructor(private apiMainService:ApiMainService, private localStorageService:LocalStorageService){}

  ngOnInit(): void {
    this.userProfile = this.localStorageService.getCacheData('USER_PROFILE');  
    if(this.userProfile && this.userProfile._id){
      this.getPastOrder();
    }   
  }

  async getPastOrder(){  
    let pastOrderList:any[] = [] ;
    Promise.all([
      this.apiMainService.getCustomerSubscriptionList(this.userProfile._id,this.pageNumber),
      this.apiMainService.getCustomerPackageList(this.userProfile._id,this.pageNumber)
    ]).then(res=>{
      if(res[0]){
        pastOrderList = res[0];
      }
      if(res[1]){
        pastOrderList = [...pastOrderList,...res[1]];
      }
      if(pastOrderList && pastOrderList.length > 0){
        this.pastOrderList = [...this.pastOrderList,...pastOrderList];
        this.showloader = false;
        this.scrolled = false;
      }else{
        this.paginationOver = true;
        this.showloader = false;
        this.scrolled = false;
      }
    }).catch(error =>{
      this.paginationOver = true;
      this.showloader = false;
      this.scrolled = false;
    });    
  }

  goback(){
    // this.navCtrl.pop();
  }

  async goToOrderPage(val:any){
    this.order = val
    // try{
    //   const modal = await this.modalController.create({
    //     component: OrderDetailsSubscriptionComponent,
    //     componentProps: {order}
    //   });
    //   modal.onDidDismiss().then((event: any) => {
    //     const data = event.data;
    //     if (data && data.order){
    //       this.updateSelectedOrder(data.order);
    //     }
    //   });
    //   return await modal.present();
    // }catch(error){
    //   console.log('Error while fetching goToOrderPage ',error);
    // }    
  }

  updateSelectedOrder(order:any){
    this.pastOrderList = [...this.pastOrderList].map(listOrder => {
      if(listOrder._id === order._id){
        listOrder = {...order};
      }
      return listOrder;
    });
  }

  toggleCanvas(){
    let el = this.subscriptionOrders.nativeElement;
    el.click();
  }
}
