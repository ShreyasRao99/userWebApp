import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ApiMainService } from 'src/service/apiService/api-main.service';
import { GoogleMapService } from 'src/service/google-map.service';
import { LocalStorageService } from 'src/service/local-storage.service';
import { SendDataToComponent } from 'src/service/sendDataToComponent';
import { UtilityService } from 'src/service/utility.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('canvasAddress') canvasAddress!: ElementRef<HTMLElement>
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

  constructor(private localStorageService:LocalStorageService, private sendDataToComponent:SendDataToComponent, private router:Router, private apiMainService:ApiMainService, private googleMapService:GoogleMapService, private utilityService:UtilityService){
    this.mapId += Math.ceil(Math.random() * 1000)
  }
  ngOnInit(): void {
    this.recentSearch = this.localStorageService.getCacheData('RECENT_LOCATION_SEARCH');
    this.userProfile = this.localStorageService.getCacheData('USER_PROFILE');
    console.log(this.userProfile)
    this.currentAddress = this.localStorageService.getCacheData('CURRENT_LOCATION');
    this.checkServicability()
    this.subscribeEvents();
  }

  subscribeEvents(){
    this.sendDataToComponent.subscribe('ADDRESS_FROM_DELIVERY', (address:any)=>{
      this.currentAddress = address
    })
    this.sendDataToComponent.subscribe('TOGGLE_MAP_OFFCANVAS',(val)=>{
      if(val){
        this.toggleCanvas()
      }
    })
  }

  setAddress(address: any) {
    console.log(address)
    this.currentAddress = address
    this.sendDataToComponent.publish('ADDRESS_FROM_HEADER',address)
    this.toggleCanvas()
  }

  async checkServicability() {
    try {
      this.currentGeoLocation = this.localStorageService.getCacheData('CURRENT_LOCATION')
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
      // this.localStorageService.setCacheData('CURRENT_LOCATION', address);
      // if (this.userProfile) {
      // this.goToSetGeoLocationPage(address);
      this.goToSetGeoLocationPage(address)
      // }
      // this.checkServicability()
    });
  }

  goToSetGeoLocationPage(address: any) {
    (address)
    this.utilityService.configureCurrentLocation(address);
    this.showMap = true
  }

  formatAddress(place: { name: any; formatted_address: any; geometry: { location: { lat: () => any; lng: () => any; }; }; }) {
    return {
      name: place.name,
      address: place.formatted_address,
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng()
    };
  }

  getCurrentLocation() {
    this.showCurrentLocation = true
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

  toggleMap() {
    setTimeout(() => {
      this.showMap = !this.showMap;
    }, 300);
  }

  toggleCanvas() {
    let el = this.canvasAddress.nativeElement;
    el.click();
  }  
}
