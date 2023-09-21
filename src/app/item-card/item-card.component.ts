import { RuntimeStorageService } from './../../service/runtime-storage.service';
import { OnInit, Component, Input } from '@angular/core';
import { environment } from './../../environments/environment';
import { CartManagementService } from 'src/service/cart-management.service';
import { ToasterService } from '../toaster/toaster.service';
import { OrderBookingService } from 'src/service/order-booking.service';

@Component({
  selector: 'app-item-card',
  templateUrl: 'item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
})
export class ItemCardComponent implements OnInit {
   imageUrl = environment.imageUrl;
  @Input() item: any;
  @Input() kitchenName!: string;
  @Input() kitchenId!: string;
  @Input() orderType!: string;
  @Input() screenFrom!: string;
  @Input() kitchen: any;
  @Input() missed: any;
  @Input() comingnext: any;
  showPartition = false;
  inflatePercentage = 0;
  specialInflatePercentage = 0;
  special: any;
  readmore = false;
  constructor(private cartManagementService: CartManagementService,
    private toasterService: ToasterService, private runtimeStorageService: RuntimeStorageService,
    private orderBookingService: OrderBookingService) {      

      const specialInflatePercentage = this.runtimeStorageService.getCacheData('SPECIAL_INFLATE_PERCENTAGE');
      if(specialInflatePercentage){
        this.specialInflatePercentage = specialInflatePercentage;
      }
     }

  ngOnInit(){
    const inflatePercentage = this.runtimeStorageService.getCacheData('MEALAWE_INFLATE_PERCENTAGE');     
    const advInflatePercentage = this.runtimeStorageService.getCacheData('ADV_INFLATE_PERCENTAGE');  
    const subInflatePercentage = this.runtimeStorageService.getCacheData('SUB_INFLATE_PERCENTAGE'); 
    if(this.item.inflatePrice){
      if(inflatePercentage && this.orderType==='allDay'){
        this.inflatePercentage = inflatePercentage;
      }else if(advInflatePercentage && this.orderType==='advance'){
        this.inflatePercentage = advInflatePercentage;
      }else if(subInflatePercentage && this.orderType==='subscription'){
        this.inflatePercentage = subInflatePercentage;
      }
    }
    this.item.quantityBooked = this.item.quantityBooked ? this.item.quantityBooked : 0;
    this.item.count = this.item.count ? this.item.count : 0;
    const item = this.cartManagementService.checkIfItemIsAdded(this.item,this.kitchenName, this.kitchenId, this.orderType);
    this.item = {...item};
    const inflateBy = this.item.isSpecialMenu ? this.specialInflatePercentage : this.inflatePercentage;
    let mealawePrice = item.itemPrice + Math.ceil((item.itemPrice * inflateBy)/100);
    const reminderPrice = mealawePrice%5;
    mealawePrice = mealawePrice - reminderPrice;
    if(reminderPrice > 2.5){
      mealawePrice += 5; 
    }
    this.item.mealawePrice = mealawePrice;
    this.item.subDescription = `${this.item.itemDescription.substring(0,70)}...`;
    setTimeout(()=>{
      this.showPartition = true;
    },500);    
  }

  async addToCart(){    
    const item = await this.cartManagementService.addItemToCart(this.item, this.kitchenName, this.kitchenId, this.orderType, this.kitchen);
    if(item){
      this.item = item;
    }    
  }

  increaseCount(item:any){
    if((this.orderType==='daily' && (item.quantityAvailable - this.item.quantityBooked )===item.count)||
      (item.isSpecialMenu && item.specialQuantityAvailable === item.count)){
      this.toasterService.error(108);
      return;
    }
    if(this.cartManagementService.validateComboCount(item)){
      this.toasterService.error(113);
      return;
    }
    if(this.cartManagementService.validateTotalItemCount()){
      this.toasterService.error(114);
      return;
    }
    item.count++;
    this.cartManagementService.updateItemToCart(item);
  }
  decreaseCount(item:any){
    item.count--;
    this.cartManagementService.updateItemToCart(item);
  }

  async bookSpecialItem(item:any){
    // const status = await this.orderBookingService.bookOrder(item,this.kitchen,this.orderType);
    // if(status){
    //   item.booked = true;
    // }
  }
    
}
