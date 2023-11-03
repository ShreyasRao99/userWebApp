import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';
import { ApiMainService } from 'src/service/apiService/api-main.service';
import { CartManagementService } from 'src/service/cart-management.service';
import { FavouriteManagementService } from 'src/service/favourite-management.service';
import { LocalStorageService } from 'src/service/local-storage.service';
import { SendDataToComponent } from 'src/service/sendDataToComponent';
import { ConfirmationModalService } from '../confirmation-modal/confirmation-modal.service';
import { FormBuilder, Validators } from '@angular/forms';
import { WebPageService } from 'src/service/webpage.service';
import { ChangeDetectionStrategy } from '@angular/compiler';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit, OnDestroy {
  @ViewChild('loginCanvas') loginCanvas!: ElementRef<HTMLElement>;
  imageUrl = environment.imageUrl;
  appVersion = environment.appVersion;
  showShareLink = false;
  linkList = [
    {
       label: 'My Account',
       subLabel: 'Profile Information',
       routeUrl: 'my-account/myProfile',
       iconClass: 'myAccount'
    },
    {
      label: 'Manage Address',
      subLabel: 'Save Or Edit Addresses',
      routeUrl: 'my-account/addresses',
      iconClass: 'myAddress'
   },
   {
    label: 'Cashback',
    subLabel: 'Rewards Points, Wallet Balance & Redeem History',
    routeUrl: 'my-account/cashback',
    iconClass: 'cashback'
  },
   {
      label: 'Wallet',
      subLabel: 'Rewards Points, Wallet Balance & Redeem History',
      routeUrl: 'my-account/my-wallet',
      iconClass: 'myWallet'
    },
  //  {
  //     label: 'Failed Payments & Refunds',
  //     subLabel: 'Payment Modes, Transaction History & Refund Status',
  //     routeUrl: 'paymentRefund',
  //     iconClass: 'paymentRefund'
  //  },
   {
      label: 'Help',
      subLabel: 'FAQs, Chats & Email',
      routeUrl: 'my-account/my-help',
      iconClass: 'help'
   },
   {
      label: 'My Orders',
      subLabel: 'All Completed & OnGoing Orders Details',
      routeUrl: 'my-account/orders',
      iconClass: 'pastOrder'
   },   
   {
      label: 'Feedback',
      subLabel: 'Give Your Feedback, Praise or Suggestions ',
      routeUrl: 'my-feedback',
      iconClass: 'myFeedback'
   }
  ]
  userProfile:any = {};
  formToShow: any = 'Login';
  LoginForm: any;
  phoneNo: any;
  showOTPscreen!: boolean;
  showResendOTP!: boolean;
  second!: number;
  intervalCounter!: any;
  OTPprovided: any;
  accountExistsMsg: any = '';
  enableVerfiy!: boolean;

  constructor(private router:Router, private fb:FormBuilder, private cdRef:ChangeDetectorRef, private webPageService:WebPageService, private confirmationModalService:ConfirmationModalService, private cartManagementService:CartManagementService, private apiMainService:ApiMainService, private sendDataToComponent:SendDataToComponent, private favouriteManagementService:FavouriteManagementService, private localStorageService:LocalStorageService){}

  ngOnInit(): void {
    this.checkUserProfile();
    this.sendDataToComponent.subscribe('UPDATE_USER_PROFILE',(flag)=>{
      if(flag){
        this.checkUserProfile();
      }
   })
   this.LoginForm = this.fb.group({
    phoneNo: ['', [Validators.required, Validators.pattern("^[0-9]{10}$")]],
    userName: [''],
    email: ['']
  })
  }

  checkUserProfile(){
    this.userProfile = this.localStorageService.getCacheData('USER_PROFILE');
    if(this.userProfile){
      this.favouriteManagementService.setFavKitchenList();
      this.generateReferrelCode(); 
    }
  }

  async registerMobileNumer() {
    if (this.LoginForm.value) {
      this.phoneNo = this.LoginForm.value.phoneNo;
      if (this.phoneNo && Math.ceil(Math.log10(this.phoneNo)) === 10) {
        try {
          const otpres = await this.apiMainService.registerPhoneNo({ phoneNo: this.phoneNo });
          this.localStorageService.setCacheData('USER_MOBILE', this.phoneNo);
          this.showOTPscreen = true;
          this.startTimer()
        } catch (e) {
          console.log(e);
        }
      }
    }
  }

  async verifySignUP() {
    try {
      this.phoneNo = this.LoginForm.value.phoneNo;
      const res = await this.apiMainService.signupUser(this.LoginForm.value);
      console.log(res)
      if (res.msg) {
        this.accountExistsMsg = res.msg
      }
      else if (res._id) {
        this.localStorageService.setCacheData('USER_MOBILE', this.phoneNo);
        this.showOTPscreen = true;
        this.startTimer()
      }
    } catch (error) {
      console.log(error)
    }
  }

  async verifyOTP() {
    const finalOTP = this.OTPprovided;
    try {
      const loginObj = await this.apiMainService.verifyOTP({ phoneNo: this.phoneNo, password: finalOTP, userType: 'customer' });
      if (loginObj) {
        let el: HTMLElement = this.loginCanvas.nativeElement;
        el.click();
      }
      this.localStorageService.setCacheData('OTP_VERIFIED', true);
      this.localStorageService.setCacheData('TOKEN', loginObj.token);
      this.userProfile = await this.apiMainService.saveOrRetrieveUserProfile(loginObj.loginInfo);
      console.log(this.userProfile)
      this.localStorageService.setCacheData('USER_PROFILE', this.userProfile);
      // this.isLoggedIn.emit()
      // this.loggedIn = true
      const fcmToken = this.localStorageService.getCacheData('FCM_TOKEN');
      // this.mixpanelservice.track('login',{});
      if (fcmToken) {
        this.apiMainService.saveFcmToken({ profileId: this.userProfile._id, fcmToken });
      }
      if (this.userProfile.addressList && this.userProfile.addressList.length > 0) {
        this.localStorageService.setCacheData('PREFERENCE_SET', true);
        this.localStorageService.setCacheData('LOCATION_SET', true);
        this.favouriteManagementService.getUserFavKitchenList();
        // this.router.navigate(['home'])
        // this.navCntrl.navigateRoot('/tabs');
      } else {
        if (this.userProfile.userName && this.userProfile.email) {
          this.localStorageService.setCacheData('PREFERENCE_SET', true);
          // this.router.navigate(['home'])
          // this.navCntrl.navigateRoot('/location');
          // this.navCntrl.navigateRoot('/tabs');
        } else {
          // this.navCntrl.navigateRoot('/favcuisine');
        }
      }
    } catch (e) {
      console.log(e);
    }
  }

  async resendOTP() {
    try {
      await this.apiMainService.resendOTP({ phoneNo: this.phoneNo });
      this.startTimer()
    } catch (e) {
      console.log('error while resending OTP', e);
    }
  }

  onOtpChange(event: any) {
    if (!isNaN(event) && event.length === 6) {
      this.enableVerfiy = true;
      this.OTPprovided = event;
    } else {
      this.enableVerfiy = false;
    }
  }

  startTimer() {
    this.showResendOTP = false;
    this.second = 30;
    this.intervalCounter = setInterval(() => {
      if (this.second <= 0) {
        clearInterval(this.intervalCounter);
        this.showResendOTP = true;
      } else {
        this.second--;
      }
    }, 1000);
  }

  showTermNCondition() {
    try {
      this.webPageService.termAndCondition();
    } catch (e) {
      console.log('Error while saving kitchen Lead')
    }
  }

  shareApp(){

  }

  logoutPopup() {
    this.confirmationModalService.modal({data:`Leaving so soon?`, type:3},
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

  goToPage(link:any){
    this.router.navigate([`/${link}`])
  }

  async generateReferrelCode(){
    if(this.userProfile && this.userProfile.referralCode){
      this.showShareLink = true;
    }else{
      let userName = this.userProfile && this.userProfile.userName ? this.userProfile.userName : 'MEALAWE';
      userName = userName.replaceAll(' ','');
      const referralCode = userName.substr(0,3).toUpperCase() + Math.ceil(Math.random()*10000000); 
      try{
        const updatedUserProfile = await this.apiMainService.updateUserProfile(this.userProfile._id, {referralCode});
        this.userProfile = updatedUserProfile;
        this.localStorageService.setCacheData('USER_PROFILE', updatedUserProfile);   
        this.showShareLink = true;   
      }catch (e){
        console.log('error while updating user address');
      }
    }
  }

  toggleForm(name: any) {
    this.formToShow = name;
    this.cdRef.detectChanges();
    this.setFormValidators();
  }

  setFormValidators() {
    let formControl = this.LoginForm.controls
    if (this.formToShow == 'Login') {
      formControl.userName.clearValidators();
      formControl.email.clearValidators();
      this.LoginForm.updateValueAndValidity();
    }
    else {
      formControl.userName.setValidators(Validators.required)
      formControl.email.setValidators([Validators.required, Validators.email])
      this.LoginForm.updateValueAndValidity();
    }
  }

  goback(){
    this.router.navigate(['/home'])
  }

  ngOnDestroy(){
    clearInterval(this.intervalCounter)
    this.sendDataToComponent.unsubscribe('UPDATE_USER_PROFILE');
  }

}
