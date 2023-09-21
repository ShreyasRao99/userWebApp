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

  getValidUserCouponList(customerId:any){
    const urlObj = this.apiConfigService.apiEndPointObj.getValidUserCouponList;
    return this.runTimeCacheInterceptor('COUPON_LIST',
    // return this.apiHttpService.REQUEST(
    {url: urlObj.url + `/${this.getTodayStartDate()}/${customerId}`, method: urlObj.method});
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

  getKitchenPartner(id:any){
    const urlObj = this.apiConfigService.apiEndPointObj.getKitchenPartner;
    return this.runTimeCacheInterceptor('KITCHEN_PROFILE_'+id,
    // return this.apiHttpService.REQUEST(
    {url: urlObj.url + `/${id}`, method: urlObj.method});
  }

  getTodaysMenu(kitchenId: string){
    const urlObj = this.apiConfigService.apiEndPointObj.getTodaysMenu;
    return this.runTimeCacheInterceptor('TODAYS_MENU_'+kitchenId,
    // return this.apiHttpService.REQUEST(
    {url: urlObj.url + `/${kitchenId}/${this.getTodayStartDate()}`, method: urlObj.method});   
  }

  private getTodayStartDate(){
    const today = new Date();
    today.setHours(0,0,0,0);
    return today.toISOString()
  }

  getkitchenMenu(kitchenId: string){
    const urlObj = this.apiConfigService.apiEndPointObj.getkitchenMenu;
    return this.runTimeCacheInterceptor('KITCHEN_MENU_'+kitchenId,
    // return this.apiHttpService.REQUEST(
    {url: urlObj.url + `/${kitchenId}`, method: urlObj.method});
  }

  lookup(data:any) {
    return this.runTimeCacheInterceptor('LOOK_UP',
    // return this.apiHttpService.REQUEST(
    this.apiConfigService.apiEndPointObj.lookup,data);
  }

  isSpecialOrderBooked(customerId: any, specialMenuId: any){
    try {
      const urlObj = this.apiConfigService.apiEndPointObj.isSpecialOrderBooked;
      return this.apiHttpService.REQUEST({url: urlObj.url + `/${customerId}/${specialMenuId}`, method: urlObj.method});
    } catch (error) {
      return error
       console.log('error while calling error api ',error) 
    }    
  }

  saveOrderBooking(data:any){
    try {
      return this.apiHttpService.REQUEST(this.apiConfigService.apiEndPointObj.saveOrderBooking,data);
    } catch (error) {
      return error
       console.log('error while calling error api ',error) 
    }    
  }

}
