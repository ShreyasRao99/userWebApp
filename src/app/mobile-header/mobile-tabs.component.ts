import { Component, OnInit } from '@angular/core';
import { CartManagementService } from 'src/service/cart-management.service';
import { LocalStorageService } from 'src/service/local-storage.service';
import { SendDataToComponent } from 'src/service/sendDataToComponent';

@Component({
  selector: 'app-mobile-tabs',
  templateUrl: './mobile-tabs.component.html',
  styleUrls: ['./mobile-tabs.component.scss']
})
export class MobileTabsComponent implements OnInit {
  currentRoute: any;
  itemCount=0;
  selectedTab: any;

  constructor(private localStorageService:LocalStorageService, private cartManagementService:CartManagementService, private sendDataToComponent:SendDataToComponent){}

  ngOnInit(): void {
    this.currentRoute = this.localStorageService.getCacheData('CURRENT_ROUTE');
    this.subscribeEvents()
  }

  subscribeEvents(){
    this.sendDataToComponent.subscribe('UPDATE_CART_TABS', (cartObj) => {
      if(cartObj){
        this.itemCount = this.cartManagementService.getItemCount();
      }       
    });
  }

  tabSelect(tab:any){
    this.selectedTab = tab;
  }

}
