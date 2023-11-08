import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiMainService } from 'src/service/apiService/api-main.service';
import { FavouriteManagementService } from 'src/service/favourite-management.service';
import { GoogleMapService } from 'src/service/google-map.service';
import { LocalStorageService } from 'src/service/local-storage.service';
import { UtilityService } from 'src/service/utility.service';
import { GeolocationService } from 'src/service/geolocation.service';
import { SendDataToComponent } from 'src/service/sendDataToComponent';
import { WebPageService } from 'src/service/webpage.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})

export class WelcomeComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('loginCanvas') loginCanvas!: ElementRef<HTMLElement>;
  @ViewChild('loginCanvasButton') loginCanvasButton!: ElementRef<HTMLElement>;
  @ViewChild('locationCanvas') locationCanvas!: ElementRef<HTMLElement>;
  @ViewChild('locationCanvasButton') locationCanvasButton!: ElementRef<HTMLElement>;
  google: any;
  mapId = 'mapid';
  mapId2 = 'mapid';
  LoginForm: any;
  phoneNo: any;
  showOTPscreen!: boolean;
  showResendOTP!: boolean;
  second!: number;
  intervalCounter!: any;
  enableVerfiy!: boolean;
  OTPprovided: any;
  userProfile: any;
  loggedIn!: boolean;
  userLoggedIn: any;
  fetchingCenter!: boolean;
  formToShow: any = 'Login';
  accountExistsMsg: any = '';
  recentSearch: any[] = [];

  constructor(private router: Router, private sendDataToComponent: SendDataToComponent, private webPageService: WebPageService, private chgDetRef: ChangeDetectorRef, private geoLocationService: GeolocationService, private apiMainService: ApiMainService, private utilityService: UtilityService, private favouriteManagementService: FavouriteManagementService, private googleMapService: GoogleMapService, private localStorageService: LocalStorageService, private fb: FormBuilder) {
    this.mapId += Math.ceil(Math.random() * 1000)
    this.mapId2 += Math.ceil(Math.random() * 1000)
  }
  ngOnDestroy(): void {
    clearInterval(this.intervalCounter);
  }

  async ngAfterViewInit() {
    this.google = await this.googleMapService.getGoogle();
    const input = document.querySelector(`#${this.mapId}`) as HTMLInputElement;
    const input2 = document.querySelector(`#${this.mapId2}`) as HTMLInputElement;
    if (input) {
      this.findMyAddress(input);
    }
     if (input2) {
      this.findMyAddress(input2);
    }
  }

  ngOnInit(): void {
    this.userLoggedIn = this.localStorageService.getCacheData('USER_PROFILE')
    if (this.userLoggedIn) {
      // this.router.navigate(['/home'])
    }
    this.createLoginForm();
  }

  loginCheck(){
    
  }

  createLoginForm() {
    this.LoginForm = this.fb.group({
      phoneNo: ['', [Validators.required, Validators.pattern("^[0-9]{10}$")]],
      userName: [''],
      email: ['']
    })
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

  async loadSelectedLocation(selectedCenter: any) {
    try {
      this.fetchingCenter = true;
      this.google = await this.googleMapService.getGoogle();
      let center: any;
      // let getAccurateCenter = false;
      if (selectedCenter) {
        center = selectedCenter;
      } else {
        center = await this.geoLocationService.getCurrentCoordinate(true, false);
      }
      this.findMarkerAddress(center)
    } catch (e) {
      console.log('error while fetching coordinates ', e);
    }
  }

  findMarkerAddress(latlng: any) {
    const geocoder = new this.google.maps.Geocoder();
    geocoder.geocode({ location: latlng }, (
      results: google.maps.GeocoderResult[],
      status: google.maps.GeocoderStatus
    ) => {
      if (status === 'OK') {
        if (results[0]) {
          const location = results[0].formatted_address.replace("Unnamed Road, ", "");
          this.configureCurrentLocation({ location, latlng })
          this.chgDetRef.detectChanges();
        }
      } else if (status === 'OVER_QUERY_LIMIT') {
        const self = this;
        setTimeout(() => {
          self.findMarkerAddress(latlng);
        }, 500);
      }

    });
  }

  configureCurrentLocation(address: any) {
    if (address.lat && address.lng) {
      address.latlng = { lat: address.lat, lng: address.lng }
    }
    const selectedAddress = {
      tagLocation: address.tagLocation ? address.tagLocation : undefined,
      geolocation: address.geolocation ? address.geolocation : address.latlng,
      address: address.address ? address.address : undefined,
      location: address.location,
      landmark: address.landmark ? address.landmark : undefined,
      _id: address._id ? address._id : undefined
    };
    this.goToHome(selectedAddress)
  }

  setAddress(address: any) {
    console.log(address)
    // this.currentAddress = address
    this.localStorageService.setCacheData('CURRENT_LOCATION',address)
    this.toggleCanvasClose()
    this.router.navigate(['home'])
  }

  toggleCanvasClose() {
    let el = this.locationCanvas?.nativeElement;
    el?.click();
  }

  toggleCanvasOpen(){
    let el = this.locationCanvasButton?.nativeElement;
    el?.click();
  }

  goToHome(address: any) {
    // this.sendDataToComponent.publish('ADDRESS_FROM_DELIVERY', address)
    this.utilityService.configureCurrentLocation(address);
    setTimeout(() => {
      this.router.navigate(['/home'])
    }, 300);
  }

  findMyAddress(input: HTMLInputElement) {
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
      this.localStorageService.insertNewDataInArray('RECENT_LOCATION_SEARCH', address, 5);
      this.utilityService.configureCurrentLocation(address);
      this.router.navigate(['home'])
      // this.goToSetGeoLocationPage(address);
      // this.checkServicability()
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

  async verifyMobileOTP(){
    const finalOTP = this.OTPprovided;
    try {
      const loginObj = await this.apiMainService.verifyOTP({ phoneNo: this.phoneNo, password: finalOTP, userType: 'customer' });
      console.log(loginObj)
      if (loginObj) {
        let el: HTMLElement = this.loginCanvas.nativeElement;
        el.click();
      }
      this.localStorageService.setCacheData('OTP_VERIFIED', true);
      this.localStorageService.setCacheData('TOKEN', loginObj.token);
      this.userProfile = await this.apiMainService.saveOrRetrieveUserProfile(loginObj.loginInfo);
      console.log(this.userProfile)
      this.localStorageService.setCacheData('USER_PROFILE', this.userProfile);
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
        this.toggleCanvasOpen();
        // this.toggleCanvasClose()
        // this.loadSelectedLocation(null)
      } else {
        if (this.userProfile.userName && this.userProfile.email) {
          this.localStorageService.setCacheData('PREFERENCE_SET', true);
          this.toggleCanvasOpen();
          // this.toggleCanvasClose()
          // this.loadSelectedLocation(null)
        } else {
          this.toggleCanvasOpen();
          // this.toggleCanvasClose()
          // this.loadSelectedLocation(null)
        }

      }
    } catch (e) {
      console.log(e);
    }
  }

  async verifyOTP() {
    const finalOTP = this.OTPprovided;
    try {
      const loginObj = await this.apiMainService.verifyOTP({ phoneNo: this.phoneNo, password: finalOTP, userType: 'customer' });
      console.log(loginObj)
      if (loginObj) {
        let el: HTMLElement = this.loginCanvas.nativeElement;
        el.click();
      }
      this.localStorageService.setCacheData('OTP_VERIFIED', true);
      this.localStorageService.setCacheData('TOKEN', loginObj.token);
      this.userProfile = await this.apiMainService.saveOrRetrieveUserProfile(loginObj.loginInfo);
      console.log(this.userProfile)
      this.localStorageService.setCacheData('USER_PROFILE', this.userProfile);
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
        this.loadSelectedLocation(null)
        // this.router.navigate(['home'])
        // this.navCntrl.navigateRoot('/tabs');
      } else {
        if (this.userProfile.userName && this.userProfile.email) {
          this.localStorageService.setCacheData('PREFERENCE_SET', true);
          this.loadSelectedLocation(null)
          // this.router.navigate(['home'])
          // this.navCntrl.navigateRoot('/location');
          // this.navCntrl.navigateRoot('/tabs');
        } else {
          this.loadSelectedLocation(null)
          // this.router.navigate(['/home'])
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

  toggleForm(name: any) {
    this.formToShow = name;
    this.setFormValidators();
  }

  openLoginCanvas(){
    this.userProfile = this.localStorageService.getCacheData('USER_PROFILE')
    if(this.userProfile){
      this.toggleCanvasOpen()
    }
    else{
      let el = this.loginCanvasButton.nativeElement;
      el.click();
    }
  }
  
}
