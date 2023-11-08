import { Component, OnInit, HostListener } from '@angular/core';
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
  @HostListener("window:scroll", [])
  onScroll(): void {
    if((window.innerHeight + window.scrollY) >= document.body.offsetHeight * 0.5){
      this.windowScrolled = true
    }
    else{
      this.windowScrolled = false
    }
  }
  windowScrolled = false;
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
    // this.router.navigate(['/my-account/orders'])
  }

  logoutPopup() {
    this.confirmationModalService.modal({data:`Leaving so soon?`, type:1},
      () => this.logOut(), this);
  }

  goBack(){
    this.router.navigate(['/home'])
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

  scrollToTop(event:any){
    console.log(event)
    if(event){
      window.scrollTo(0, 0);
    }
  }
}
