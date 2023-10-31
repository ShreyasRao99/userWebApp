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

  signupUser(data:any){
    return this.apiHttpService.REQUEST(this.apiConfigService.apiEndPointObj.signupUser, data);
  }

  resendOTP(data:any) {
    return this.apiHttpService.REQUEST(this.apiConfigService.apiEndPointObj.resendOTP, data);
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

  getVariables(variableNames:any,from:any){
    return new Promise(async (resolve,reject)=>{
      try{
          const urlObj = this.apiConfigService.apiEndPointObj.getVariables;
          const dbList:any = await this.runTimeCacheInterceptor('CONFIG_VARIABLE'+from,
                {url: urlObj.url, method: urlObj.method},{variableNames},null,true);  
          const formattedObj:any = {};
          dbList.forEach((varibleObj:any) => {
            formattedObj[varibleObj.configName] = varibleObj.configData
          });
          resolve(formattedObj);
        }catch(error){
          reject(error);
        }
    });
  }

  validateCouponForUser(couponCode:any,userId:any){
    const urlObj = this.apiConfigService.apiEndPointObj.validateCouponForUser;
    return this.apiHttpService
    .REQUEST({url: urlObj.url + `/${couponCode}/${userId}/${this.getTodayStartDate()}`, method: urlObj.method});
  }

  getWalletBalance(id:any){
    const urlObj = this.apiConfigService.apiEndPointObj.getWalletBalance;
    return this.runTimeCacheInterceptor('MONEY_WALLET_BALANCE',
    // return this.apiHttpService.REQUEST(
    {url: urlObj.url + `/${id}`, method: urlObj.method},null,null,true);
  }

  getCashbackBalance(id:any){
    this.runTimeCacheInterceptor('CASHBACK_BALANCE',this.apiConfigService.apiEndPointObj.getBannerList,null, null, true);
    const urlObj = this.apiConfigService.apiEndPointObj.getCashbackBalance;
    return this.runTimeCacheInterceptor('CASHBACK_BALANCE',
    // return this.apiHttpService.REQUEST(
      {url: urlObj.url + `/${id}`, method: urlObj.method},null,null,true);
  }

  validateVoucherCode(voucherCode: any,id: null,orderType: null){
    const urlObj = this.apiConfigService.apiEndPointObj.validateVoucherCode;
    return this.apiHttpService.REQUEST({url: urlObj.url + `/${voucherCode}/${id}/${orderType}`, method: urlObj.method});
  }

  getdeliveryAmount(data:any){
    return this.apiHttpService.REQUEST(this.apiConfigService.apiEndPointObj.getdeliveryAmount, data);
  }

  updateUserProfile(id:any, data:any){
    const urlObj = this.apiConfigService.apiEndPointObj.updateCustomerProfile;
    return this.apiHttpService
    .REQUEST({url: urlObj.url + `/${id}`, method: urlObj.method}, data);
  }

  startPaymentProcess(data:any){
    return this.apiHttpService.REQUEST(this.apiConfigService.apiEndPointObj.startPaymentProcess, data);
  }

  consoleLog(data:any){
    try {
      this.apiHttpService.REQUEST(this.apiConfigService.apiEndPointObj.consoleLog,{data},null,true);
    } catch (error) {
       console.log('error while calling error api ',error) 
    }    
  }

  validatePaymentTransaction(data:any){
    return this.apiHttpService.REQUEST(this.apiConfigService.apiEndPointObj.validatePaymentTransaction, data);
  }

  startPaytmPaymentProcess(data:any){
    return this.apiHttpService.REQUEST(this.apiConfigService.apiEndPointObj.startPaytmPaymentProcess, data);
  }

  validatePaytmPaymentTransaction(data:any){
    return this.apiHttpService.REQUEST(this.apiConfigService.apiEndPointObj.validatePaytmPaymentTransaction, data);
  }

  getMealPackageListCluster(data:any){
    return this.apiHttpService.REQUEST(this.apiConfigService.apiEndPointObj.getMealPackageListCluster,data);
  }

  getCustomerPastOrders(id:any,page:any){
    const urlObj = this.apiConfigService.apiEndPointObj.getCustomerPastOrders;
    return this.apiHttpService.REQUEST({url: urlObj.url + `/${id}/${page}/${this.getTodayStartDate()}`, method: urlObj.method});
  }

  getCustomerSubscriptionList(id:any,page:any){
    const urlObj = this.apiConfigService.apiEndPointObj.getCustomerSubscriptionList;
    return this.apiHttpService.REQUEST({url: urlObj.url + `/${id}/${page}`, method: urlObj.method});
  }
  getCustomerPackageList(id:any,page:any){
    const urlObj = this.apiConfigService.apiEndPointObj.getCustomerPackageList;
    return this.apiHttpService.REQUEST({url: urlObj.url + `/${id}/${page}`, method: urlObj.method});
  }

  getSubmittedBulkOrders(id:any, page:any){
    const urlObj = this.apiConfigService.apiEndPointObj.getSubmittedBulkOrders;
    return this.apiHttpService.REQUEST({url: urlObj.url + `/${id}/${page}`, method: urlObj.method});
  }

  getFoodOrder(id:any){
    const urlObj = this.apiConfigService.apiEndPointObj.getFoodOrder;
    return this.apiHttpService.REQUEST({url: urlObj.url + `/${id}`, method: urlObj.method});
  }

  updateFeedbackstatus(id:any){
    const urlObj = this.apiConfigService.apiEndPointObj.updateFeedbackstatus;
    return this.apiHttpService
    .REQUEST({url: urlObj.url + `/${id}`, method: urlObj.method});
  }

  checkCancelEligibility(id:any) {
    const urlObj = this.apiConfigService.apiEndPointObj.checkCancelEligibility;
    return this.apiHttpService
    .REQUEST({url: urlObj.url + `/${id}`, method: urlObj.method});
  }

  trackDeliveryTask(id:any,partner:any){
    const urlObj = this.apiConfigService.apiEndPointObj.trackDeliveryTask;
    return this.apiHttpService
    .REQUEST({url: urlObj.url + `/${id}/${partner}`, method: urlObj.method},null,null,true);
  }

  resechedulePackageOrder(orderDate:any,foodOrderId:any,subscriptionOrderId:any){
    const urlObj = this.apiConfigService.apiEndPointObj.resechedulePackageOrder;
    return this.apiHttpService.REQUEST({url: urlObj.url + `/${orderDate}/${foodOrderId}/${subscriptionOrderId}`, method: urlObj.method});
  }

  getOrderSubscription(id:any){
    const urlObj = this.apiConfigService.apiEndPointObj.getOrderSubscription;
    return this.apiHttpService.REQUEST({url: urlObj.url + `/${id}`, method: urlObj.method});
  }

  getOrderPackage(id:any){
    const urlObj = this.apiConfigService.apiEndPointObj.getOrderPackage;
    return this.apiHttpService.REQUEST({url: urlObj.url + `/${id}`, method: urlObj.method});
  }

  getCashbackListUser(id:any,pageNumber:any){
    const urlObj = this.apiConfigService.apiEndPointObj.getCashbackListUser;
    return this.apiHttpService
    .REQUEST({url: urlObj.url + `/${id}/${pageNumber}`, method: urlObj.method},null,null,true);
  }

  getUserMelaweWalletBalance(id:any){
    const urlObj = this.apiConfigService.apiEndPointObj.getUserMelaweWalletBalance;
    return this.runTimeCacheInterceptor('MEALAWE_WALLET_BALANCE',
    // return this.apiHttpService.REQUEST(
    {url: urlObj.url + `/${id}`, method: urlObj.method},null,null,true);
  }

  userRewardsPointsHistory(id:any,pageNumber:any, nPerPage:any){
    const urlObj = this.apiConfigService.apiEndPointObj.userRewardsPointsHistory;
    return this.apiHttpService
    .REQUEST({url: urlObj.url + `/${id}/${pageNumber}/${nPerPage}`, method: urlObj.method},null,null,true);
  }

  getUserFAQ(){
    return this.runTimeCacheInterceptor('FAQ_LIST', this.apiConfigService.apiEndPointObj.getUserFAQ);
  }

  saveFoodOrderBulk(data:any){
    try {
      return this.apiHttpService.REQUEST(this.apiConfigService.apiEndPointObj.saveFoodOrderBulk,data);
    } catch (error) {
       console.log('error while calling error api ',error) 
    }    
  }

  logout() {
    return this.apiHttpService.REQUEST(this.apiConfigService.apiEndPointObj.logout);
  }

  afterLogout() {
    this.apiHttpService.afterLogout();
  }

  userNearSearch(text: string, pageNumber:any,geolocation:any, data:any){
    const urlObj = this.apiConfigService.apiEndPointObj.userNearSearch;
    return this.runTimeCacheInterceptor(`SEARCH_NEAR_USER_${text}_${pageNumber}`,
    // return this.apiHttpService.REQUEST(
    {url: urlObj.url + `/${text}/${this.getTodayStartDate()}/${pageNumber}/${geolocation.lng}/${geolocation.lat}`,
     method: urlObj.method},data,null,pageNumber>1?true:false);  
  }

  refund(data:any) {
    this.runtimeStorageService.resetCacheData('PAST_ORDER_LIST');
    return this.apiHttpService.REQUEST(this.apiConfigService.apiEndPointObj.refund, data);
  }

  termNcondition(){
    return this.apiHttpService.REQUEST(this.apiConfigService.apiEndPointObj.termNcondition, null, {Accept:'text/html'},true);
  }

  searchNearkitchenFromMeal(text: string, pageNumber:any,geolocation:any,data:any){
    const urlObj = this.apiConfigService.apiEndPointObj.searchNearkitchenFromMeal;
    return this.runTimeCacheInterceptor(`SEARCH_NEAR_MEAL_${text}_${pageNumber}`,
    // return this.apiHttpService.REQUEST(
    {url: urlObj.url + `/${text}/${this.getTodayStartDate()}/${pageNumber}/${geolocation.lng}/${geolocation.lat}`,
     method: urlObj.method},data,null,pageNumber>1?true:false);  
  }

  searchNearkitchen(text: string, pageNumber:any,geolocation:any,data:any){
    const urlObj = this.apiConfigService.apiEndPointObj.searchNearkitchen;
    return this.runTimeCacheInterceptor(`SEARCH_NEAR_KITCHEN_${text}_${pageNumber}`,
    // return this.apiHttpService.REQUEST(
    {url: urlObj.url + `/${text}/${pageNumber}/${geolocation.lng}/${geolocation.lat}`,
    method: urlObj.method},data,null,pageNumber>1?true:false);  
  }

  categoryNearItems(text: string, pageNumber:any,geolocation:any,data:any){
    const urlObj = this.apiConfigService.apiEndPointObj.categoryNearItems;
    return this.runTimeCacheInterceptor(`CATEGORY_NEAR_ITEM_${text}_${pageNumber}`,
    // return this.apiHttpService.REQUEST(
    {url: urlObj.url + `/${text}/${this.getTodayStartDate()}/${pageNumber}/${geolocation.lng}/${geolocation.lat}`,
     method: urlObj.method},data,null,pageNumber>1?true:false);  
  }

  validateReferralCode(code: any){
    const urlObj = this.apiConfigService.apiEndPointObj.validateReferralCode;
    return this.apiHttpService.REQUEST({url: urlObj.url + `/${code}`, method: urlObj.method},null,null,true);
  }

  saveGeneralAppFeeback(data: any){
    return this.apiHttpService.REQUEST(this.apiConfigService.apiEndPointObj.saveGeneralAppFeeback, data);
  }

  getCustomerCurrentOpenOrders(id: any){
    const urlObj = this.apiConfigService.apiEndPointObj.getCustomerCurrentOpenOrders;
    return this.runTimeCacheInterceptor('OPEN_ORDERS',
    // return this.apiHttpService.REQUEST(
    {url: urlObj.url + `/${id}/${this.getTodayStartDate()}`, method: urlObj.method},null,null,true,60*1000*2);
  }

}
