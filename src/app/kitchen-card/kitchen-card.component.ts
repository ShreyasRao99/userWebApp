import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { RuntimeStorageService } from 'src/service/runtime-storage.service';

@Component({
  selector: 'app-kitchen-card',
  templateUrl: './kitchen-card.component.html',
  styleUrls: ['./kitchen-card.component.scss']
})
export class KitchenCardComponent implements OnInit {

  imageUrl = environment.imageUrl;
  @Input() kitchen: any;
  @Input() disableNav: boolean = false;
  @Input() hideFav: boolean = false;
  @Input() disableFav: boolean = false;
  @Input() showsubOffer: boolean = false;
  @Input() gotoDailyPage: boolean = false;
  @Input() gotoSubscriptionPage: boolean = false;
  @Input() gotoAlldayPage: boolean = false;
  @Input() gotoAdvance: boolean = false;
  @Input() orderType!: string;
  @Input() showSpecial: boolean = false;
  @Input() customStyle:boolean = false;
  specialityList: any[] = [];
  
constructor(private router:Router, private runtimeStorageService:RuntimeStorageService){}

  ngOnInit(): void {
    this.checkSpeciality()
  }

  checkSpeciality(){
    this.specialityList = this.kitchen.speciality.split(',').map((e: string) => e.trim());
    if(this.kitchen.mainSpeciality){
      const index = this.specialityList.indexOf(this.kitchen.mainSpeciality);
      if(index > -1){
        this.specialityList.splice(index,1);
      }
      this.specialityList.unshift(this.kitchen.mainSpeciality);      
    }    
  }

  goInsideKitchen() {
    if(!this.disableNav){
      this.runtimeStorageService.setCacheData('KITCHEN_SELECTED', this.kitchen);
      // this.mixpanelservice.track("Kitchen-Open", {...this.kitchen});   
      if(this.showSpecial){
        this.runtimeStorageService.setCacheData('KITCHEN_SHOW_SPECIAL', true);
      }
      if(this.orderType === 'daily' || (this.gotoDailyPage && !this.gotoSubscriptionPage && !this.gotoAlldayPage && !this.gotoAdvance)){
        this.router.navigate(['/kitchenInside/allDay/'+this.kitchen._id])
        // this.navCtrl.navigateForward(['/kitchenInside/allDay/'+this.kitchen._id]);
      }else if(this.orderType === 'subscription' || (this.gotoSubscriptionPage && !this.gotoAlldayPage && !this.gotoAdvance)){
        this.router.navigate(['/kitchenInside/subscription/'+this.kitchen._id])
        // this.navCtrl.navigateForward(['/kitchenInside/subscription/'+this.kitchen._id]);
      }else if(this.orderType === 'allDay' || (this.gotoAlldayPage )){
        this.router.navigate(['/kitchenInside/allDay/'+this.kitchen._id])
        // this.navCtrl.navigateForward(['/kitchenInside/allDay/'+this.kitchen._id]);
      }else if(this.orderType === 'advance' || (this.gotoAdvance )){
        this.router.navigate(['/kitchenInside/advance/'+this.kitchen._id])
        // this.navCtrl.navigateForward(['/kitchenInside/advance/'+this.kitchen._id]);
      }else{
        this.router.navigate(['/kitchenInside/allDay/'+this.kitchen._id])
        // this.navCtrl.navigateForward(['/kitchenInside/allDay/'+this.kitchen._id]);
      }      
    }    
  }

}
