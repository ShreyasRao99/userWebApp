import { Component, ElementRef, OnInit, ViewChild, Output, EventEmitter, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ApiMainService } from 'src/service/apiService/api-main.service';
import { CartManagementService } from 'src/service/cart-management.service';
import { FavouriteManagementService } from 'src/service/favourite-management.service';
import { GoogleMapService } from 'src/service/google-map.service';
import { LocalStorageService } from 'src/service/local-storage.service';
import { SendDataToComponent } from 'src/service/sendDataToComponent';
import { UserProfileService } from 'src/service/user-profile.service';
import { UtilityService } from 'src/service/utility.service';
import { WebPageService } from 'src/service/webpage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @ViewChild('canvasAddress') canvasAddress!: ElementRef<HTMLElement>
  @ViewChild('loginCanvas') loginCanvas!: ElementRef<HTMLElement>;
  @Output() isLoggedIn: EventEmitter<any> = new EventEmitter<any>();

  itemCount: any = 0;
  currentGeoLocation: any;
  serviceAvailable!: boolean;
  kitchenList: any[] = [];
  paginationOver!: boolean;
  pageNumber!: number;
  nearKitchenList!: any[];
  clusterList: any;
  userProfile: any;
  imageUrl = environment.imageUrl;
  mapId = 'mapid';
  google: any;
  changeAddress: any;
  showMap: boolean = false;
  currentAddress: any;
  recentSearch: any[] = [];
  showCurrentLocation: boolean = false;
  getLocation!: boolean;
  LoginForm: any;
  phoneNo: any;
  showOTPscreen!: boolean;
  showResendOTP!: boolean;
  second!: number;
  intervalCounter!: any;
  OTPprovided: any;
  loggedIn!: boolean;
  enableVerfiy!: boolean;
  formToShow: any = 'Login';
  accountExistsMsg: any = '';
  tagLocation: any = '';
  cashbackBalance: any = 0;

  constructor(private localStorageService: LocalStorageService, private userProfileService: UserProfileService, private cdRef: ChangeDetectorRef, private webPageService: WebPageService, private favouriteManagementService: FavouriteManagementService, private fb: FormBuilder, private cartManagementService: CartManagementService, private sendDataToComponent: SendDataToComponent, private router: Router, private apiMainService: ApiMainService, private googleMapService: GoogleMapService, private utilityService: UtilityService) {
    this.mapId += Math.ceil(Math.random() * 1000)
  }
  ngAfterViewInit(): void {
    this.callFindMyAddress()
  }
  ngOnInit(): void {
    this.recentSearch = this.localStorageService.getCacheData('RECENT_LOCATION_SEARCH');
    this.userProfile = this.localStorageService.getCacheData('USER_PROFILE');
    this.currentAddress = this.localStorageService.getCacheData('CURRENT_LOCATION');
    this.LoginForm = this.fb.group({
      phoneNo: ['', [Validators.required, Validators.pattern("^[0-9]{10}$")]],
      userName: [''],
      email: ['']
    })
    this.getMealaweWalletBalance(); 
    this.subscribeEvents();
  }

  subscribeEvents() {

    this.sendDataToComponent.subscribe('UPDATE_CART_TABS', (cartObj) => {
      if (cartObj) {
        this.itemCount = this.cartManagementService.getItemCount();
      }
    });

    this.sendDataToComponent.subscribe('ADDRESS_FROM_DELIVERY', (address: any) => {
      this.currentAddress = address
    })
    this.sendDataToComponent.subscribe('TOGGLE_MAP_OFFCANVAS', (val) => {
      if (val) {
        this.toggleCanvas()
      }
    })
  }

  async getMealaweWalletBalance(){
    try{
      if(this.userProfile && this.userProfile._id && this.userProfile.phoneNo && this.userProfile.email){
        const cashBack:any = await this.apiMainService.getCashbackBalance(this.userProfile._id);
        if(cashBack && cashBack.length > 0){
          this.cashbackBalance = cashBack[0].totalCashbackBalance;
        }
      }
    }catch(error){
      console.log('error while fetching wallet')
    }
  }; 

  goToCashBackTab(){
    this.router.navigate(['/my-account/cashback'])
  }

  setAddress(address: any) {
    console.log(address)
    this.currentAddress = address
    this.sendDataToComponent.publish('ADDRESS_FROM_DELIVERY', address)
    this.toggleCanvas()
  }

  async checkServicability() {
    try {
      this.currentGeoLocation = this.localStorageService.getCacheData('CURRENT_LOCATION')
      if (this.currentGeoLocation && this.currentGeoLocation.geolocation) {
        const formatedAddess: any = this.userProfileService.getSavedAddress(this.currentGeoLocation);
        this.tagLocation = formatedAddess.tagLocation;
      }
      const clusterList: any = await this.googleMapService.getClusterName(this.currentGeoLocation.geolocation);
      if (clusterList && clusterList.length > 0) {
        this.serviceAvailable = true;
        // this.showLoadingPage = false;
        this.kitchenList = [];
        this.paginationOver = false;
        this.pageNumber = 1;
        this.getKitchenList(clusterList, true);
        // this.loadKitchenDeepLink();       
      } else {
        this.serviceAvailable = false;
        // this.showLoadingPage = false;
      }
    } catch (error) {

    }
  }

  callFindMyAddress() {
    const input = document.querySelector(`#${this.mapId}`) as HTMLInputElement;
    if (input) {
      this.findMyAddress(input)
    }
  }

  async findMyAddress(input: HTMLInputElement) {
    this.google = await this.googleMapService.getGoogle();
    const options: any = {
      componentRestrictions: { country: 'in' },
      fields: ['formatted_address', 'geometry.location', 'name'],
      // origin: this.center,
      strictBounds: true
    };
    const autocomplete = new this.google.maps.places.Autocomplete(input, options);
    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      if (!place.geometry || !place.geometry.location) {
        return;
      }
      const address = this.formatAddress(place);
      this.currentAddress = address
      this.localStorageService.insertNewDataInArray('RECENT_LOCATION_SEARCH', address, 5);
      this.utilityService.configureCurrentLocation(address);
      // this.showMap = true
      this.getCurrentLocation(false)
      console.log(this.showMap)
      // this.getCurrentLocation(false)
    });
  }

  formatAddress(place: { name: any; formatted_address: any; geometry: { location: { lat: () => any; lng: () => any; }; }; }) {
    return {
      name: place.name,
      address: place.formatted_address,
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng()
    };
  }

  getCurrentLocation(showcurrentLoc: any) {
    this.showCurrentLocation = showcurrentLoc
    this.toggleMap()
    console.log(this.showMap)
  }

  async getKitchenList(clusterList: any, doRefresh?: boolean) {
    try {
      this.clusterList = clusterList;
      let kitchenList: any = await this.apiMainService.getNearestKitchen({ clusterList }, this.pageNumber, this.currentGeoLocation.geolocation);
      if (kitchenList && kitchenList.length > 0) {
        // const promiseList = [];
        // kitchenList.forEach(ele => {
        //   promiseList.push(this.googleMapService.getKitchenDistance(ele,this.currentGeoLocation,false));
        // });  
        kitchenList = await this.googleMapService.getKitchenGoogleDistance(kitchenList, this.currentGeoLocation.geolocation);
        kitchenList.sort((a: { distance: number; }, b: { distance: number; }): number => {
          if (a.distance > b.distance) {
            return 1;
          } else if (a.distance < b.distance) {
            return -1;
          } else {
            return 0;
          }
        });
        //Promise.all(promiseList).then((values) => {
        const sortedKitchenList = kitchenList;
        if (doRefresh) {
          this.kitchenList = [...sortedKitchenList];
        } else {
          this.kitchenList = [...this.kitchenList, ...sortedKitchenList];
        }
        if (this.pageNumber === 1) {
          this.nearKitchenList = this.kitchenList.splice(0, 5);
        }
        // });           
        // this.showloader = true;                  
      } else {
        this.paginationOver = true;
        // this.showloader = false;
      }
    } catch (e) {
      console.log('error while fetching kitchen list');
    }
  }

  goToMyAccount() {
    this.router.navigate(['/my-account/orders/pastOrder'])
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

  toggleForm(name: any) {
    this.formToShow = name;
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

  toggleMap() {
    this.showMap = !this.showMap;
    this.cdRef.detectChanges();
    setTimeout(() => {
      this.callFindMyAddress();
    }, 300);
  }

  toggleCanvas() {
    let el = this.canvasAddress?.nativeElement;
    el?.click();
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
      this.isLoggedIn.emit()
      this.loggedIn = true
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

  async resendOTP() {
    try {
      await this.apiMainService.resendOTP({ phoneNo: this.phoneNo });
      this.startTimer()
    } catch (e) {
      console.log('error while resending OTP', e);
    }
  }

  goToAccount() {
    this.router.navigate(['my-account/orders/pastOrder'])
  }

}
