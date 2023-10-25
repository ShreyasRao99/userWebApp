import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiMainService } from 'src/service/apiService/api-main.service';
import { CartManagementService } from 'src/service/cart-management.service';
import { LocalStorageService } from 'src/service/local-storage.service';
import { ConfirmationModalService } from '../confirmation-modal/confirmation-modal.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {
  userProfile: any;
  linkList: any = [
    { label: 'Orders', link: 'orders/pastOrder' },
    { label: 'My Profile', link: 'myProfile' },
    { label: 'Cashback', link: 'cashback' },
    { label: 'Addresses', link: 'addresses' },
    { label: 'My Wallet', link: 'my-wallet' },
    { label: 'Help', link: 'my-help' }
    // { label: 'Log Out', link: 'logout' }
  ]
  selectedDiv: any = 'Orders';

  constructor(private localStorageService: LocalStorageService, private confirmationModalService: ConfirmationModalService, private apiMainService: ApiMainService, private cartManagementService: CartManagementService, private router: Router) { }

  ngOnInit(): void {
    console.log('my account on init loaded')
    this.userProfile = this.localStorageService.getCacheData('USER_PROFILE');
    this.router.navigate(['/my-account/orders'])
  }

  logoutPopup() {
    this.confirmationModalService.modal(`Leaving so soon?`,
      () => this.logOut(), this);
  }

  async logOut() {
    try {
      await this.apiMainService.logout();
      // this.mixpanelservice.track('logout',{});
      this.cartManagementService.resetCart();
      this.apiMainService.afterLogout();
    } catch (error) {
      console.log('Error while logging out', error)
    }
  }

  selectedSection(item:any){
    this.selectedDiv = item.label; 
  }
}
