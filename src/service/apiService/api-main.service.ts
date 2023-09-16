import { Injectable } from '@angular/core';
import { ApiConfigService } from './api-config.service';
import { RuntimeStorageService } from '../runtime-storage.service';
import { ApiHttpService } from './api-http.service';

@Injectable({
  providedIn: 'root'
})
export class ApiMainService {

  constructor(private apiConfigService: ApiConfigService, private runtimeStorageService: RuntimeStorageService, private apiHttpService: ApiHttpService) { }

  private runTimeCacheInterceptor(key: string, apiObj: any, payload?: any, extraHeaderObj?: any, hideLoader?: boolean, time?: number) {
    return new Promise(async (resolve, reject) => {
      const cacheList = this.runtimeStorageService.getCacheData(key);
      if (cacheList) {
        resolve(cacheList);
      } else {
        try {
          const data = await this.apiHttpService.REQUEST(apiObj, payload, extraHeaderObj, hideLoader);
          this.runtimeStorageService.setCacheData(key, data, time);
          resolve(data);
        } catch (error) {
          reject(error)
        }
      }
    });
  }

  getNearestKitchen(data: { clusterList: any; }, pageNumber: number,geolocation: { lng: any; lat: any; }) {
    const urlObj = this.apiConfigService.apiEndPointObj.getNearestKitchen;
    return this.runTimeCacheInterceptor(`NEAREST_KITCHEN_${pageNumber}`,
    // return this.apiHttpService.REQUEST(
    {url: urlObj.url + `/${pageNumber}/${geolocation.lng}/${geolocation.lat}`, method: urlObj.method}, data,null,pageNumber>1?true:false);
  }

  getGeoFencingList() {
    return this.runTimeCacheInterceptor('GEO_FENCING_LIST', this.apiConfigService.apiEndPointObj.getGeoFencingList);
  }

  registerPhoneNo(data: { phoneNo: any; }) {
    return this.apiHttpService.REQUEST(this.apiConfigService.apiEndPointObj.registerPhoneNo, data);
  }

  verifyOTP(data: any) {
    return this.apiHttpService.REQUEST(this.apiConfigService.apiEndPointObj.verifyOTP, data);
  }

  saveOrRetrieveUserProfile(data:any){
    return this.apiHttpService.REQUEST(this.apiConfigService.apiEndPointObj.saveCustomerProfile, data);
  }

  saveFcmToken(data:any){
    return this.apiHttpService.REQUEST(this.apiConfigService.apiEndPointObj.saveFcmToken, data);
  }

  getFavKitchenList(id: any){
    const urlObj = this.apiConfigService.apiEndPointObj.getFavKitchenList;
    return this.apiHttpService.REQUEST({url: urlObj.url + `/${id}`, method: urlObj.method},null,null,true);
  }

  setFavKitchenList(data:any){
    return this.apiHttpService.REQUEST(this.apiConfigService.apiEndPointObj.setFavKitchenList, data, null,true);
  }

  getKitchenGoogleDistance(data: any){
    return this.apiHttpService.REQUEST(this.apiConfigService.apiEndPointObj.getKitchenGoogleDistance,data);
  }

}
