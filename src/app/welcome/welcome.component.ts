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


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})

export class WelcomeComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('loginCanvas') loginCanvas!: ElementRef<HTMLElement>;
  google: any;
  mapId = 'mapid';
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

  constructor(private router: Router, private sendDataToComponent:SendDataToComponent, private chgDetRef:ChangeDetectorRef, private geoLocationService:GeolocationService, private apiMainService: ApiMainService, private utilityService:UtilityService, private favouriteManagementService: FavouriteManagementService, private googleMapService: GoogleMapService, private localStorageService: LocalStorageService, private fb: FormBuilder) {
    this.mapId += Math.ceil(Math.random() * 1000)
  }
  ngOnDestroy(): void {
    clearInterval(this.intervalCounter);
  }

  async ngAfterViewInit() {
    this.google = await this.googleMapService.getGoogle();
    const input = document.querySelector(`#${this.mapId}`) as HTMLInputElement;
    if (input) {
      this.findMyAddress(input);
    }
  }

  ngOnInit(): void {
    this.userLoggedIn = this.localStorageService.getCacheData('USER_PROFILE')
    console.log(this.userLoggedIn)
    this.createLoginForm();
  }

  createLoginForm() {
    this.LoginForm = this.fb.group({
      phoneNo: ['', [Validators.required, Validators.pattern("^[0-9]{10}$")]]
    })
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
    console.log(address)
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

  goToHome(address:any){
    this.sendDataToComponent.publish('ADDRESS_FROM_DELIVERY',address)
    this.router.navigate(['/home'])
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
}
