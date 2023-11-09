import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { CartManagementService } from 'src/service/cart-management.service';
import { LocalStorageService } from 'src/service/local-storage.service';
import { RuntimeStorageService } from 'src/service/runtime-storage.service';
import { SendDataToComponent } from 'src/service/sendDataToComponent';

@Component({
  selector: 'app-mobile-tabs',
  templateUrl: './mobile-tabs.component.html',
  styleUrls: ['./mobile-tabs.component.scss']
})
export class MobileTabsComponent implements OnInit, OnDestroy {
  currentRoute: any;
  itemCount=0;
  selectedTab: any;

  constructor(private localStorageService:LocalStorageService, private runtimeStorage:RuntimeStorageService, private cartManagementService:CartManagementService, private sendDataToComponent:SendDataToComponent){}
  ngOnDestroy(): void {
    this.sendDataToComponent.unsubscribe('UPDATE_CART_TABS')
  }
 
  ngOnInit(): void {
    this.currentRoute = this.runtimeStorage.getCacheData('CURRENT_ROUTE');
    this.itemCount = this.localStorageService.getCacheData('CART_ITEM_COUNT')
    this.subscribeEvents()
  }

  subscribeEvents(){
    this.sendDataToComponent.subscribe('UPDATE_CART_TABS', (cartObj) => {
      if(cartObj){
        this.itemCount = this.cartManagementService.getItemCount();
        this.localStorageService.setCacheData('CART_ITEM_COUNT', this.itemCount)
        console.log(this.itemCount)
      }       
    });
  }

  tabSelect(tab:any){
    this.selectedTab = tab;
    // this.cdRef.detectChanges()
    console.log(this.itemCount, this.selectedTab)
  }

}
