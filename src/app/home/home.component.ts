import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ApiMainService } from 'src/service/apiService/api-main.service';
import { GoogleMapService } from 'src/service/google-map.service';
import { LocalStorageService } from 'src/service/local-storage.service';
import { SendDataToComponent } from 'src/service/sendDataToComponent';
import { UtilityService } from 'src/service/utility.service';
import { mainBannerList } from 'src/config/banners.config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentGeoLocation: any;
  serviceAvailable!: boolean;
  kitchenList: any[] = [];
  paginationOver!: boolean;
  pageNumber!: number;
  nearKitchenList!: any[];
  clusterList: any;
  imageUrl = environment.imageUrl;
  google: any;
  showMap: boolean = false;
  currentAddress: any;
  mainBannerList=mainBannerList;

  constructor(private apiMainService: ApiMainService, private utilityService:UtilityService, private sendDataToComponent:SendDataToComponent, private localStorageService: LocalStorageService, private googleMapService: GoogleMapService) {
  }

  ngOnInit(): void {
    this.susbcribeEvents()
    this.checkServicability()
  }

  susbcribeEvents(){
    this.sendDataToComponent.subscribe('ADDRESS_FROM_DELIVERY', (address) => {
      console.log(address)
      if (address) {
        (address)
        this.showMap = false;
        // this.toggleCanvas()
        this.utilityService.configureCurrentLocation(address)
        this.currentAddress = address
        this.checkServicability()
      }
    })
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

}
