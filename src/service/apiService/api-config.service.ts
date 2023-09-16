import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiConfigService {
  private baseUrl: string = environment.serverUrl;

  public apiEndPointObj:any;
  constructor() {
    this.init();
  }
  private init() {
    this.apiEndPointObj = {
      registerPhoneNo: {url: `${this.baseUrl}/authuser/registerPhoneNo`, method: 'POST'},
      resendOTP: {url: `${this.baseUrl}/authuser/resendOTP`, method: 'POST'},
      verifyOTP: {url: `${this.baseUrl}/authuser/verifyOTP`, method: 'POST'},
      logout: {url: `${this.baseUrl}/authuser/logout`, method: 'GET'},
      getBannerList: {url: `${this.baseUrl}/api/bannerlist`, method: 'GET'},
      getRegionalInfoList: {url: `${this.baseUrl}/api/regionalInfoList`, method: 'GET'},
      getfoodItemsList: {url: `${this.baseUrl}/api/fooditemlist`, method: 'GET'},
      getkitchenList: {url: `${this.baseUrl}/api/getKitchenPartnerList`, method: 'POST'},
      saveCustomerProfile: {url: `${this.baseUrl}/api/customerProfile`, method: 'POST'},
      updateCustomerProfile: {url: `${this.baseUrl}/api/updatecustomerprofile`, method: 'POST'},
      searchKitchen: {url: `${this.baseUrl}/search/kitchen`, method: 'POST'},
      searchkitchenFromMenu: {url: `${this.baseUrl}/search/searchkitchenFromMenu`, method: 'POST'},
      getTodaysMenu: {url: `${this.baseUrl}/api/todaysMenu`, method: 'GET'},
      getkitchenMenu: {url: `${this.baseUrl}/api/kitchenMenu`, method: 'GET'},
      getKitchenPartnerListByIds: {url: `${this.baseUrl}/api/getKitchenPartnerListByIds`, method: 'POST'},
      userSearch: {url: `${this.baseUrl}/search/userSearch`, method: 'POST'},
      categoryItems: {url: `${this.baseUrl}/search/categoryItems`, method: 'POST'},
      getKitchenPartner: {url: `${this.baseUrl}/api/getKitchenPartner`, method: 'GET'},
      lookup: {url: `${this.baseUrl}/search/lookup`, method: 'POST'},
      getGeoFencingList: {url: `${this.baseUrl}/api/getGeoFencingList`, method: 'GET'},
      getCustomerOrderDetail: {url: `${this.baseUrl}/api/getCustomerOrderDetail`, method: 'GET'},
      savefeedback: {url: `${this.baseUrl}/api/savefeedback`, method: 'POST'},
      updateFeedbackstatus: {url: `${this.baseUrl}/api/updateFeedbackstatus`, method: 'PUT'},
      saveFcmToken: {url: `${this.baseUrl}/api/saveFcmToken`, method: 'POST'},
      checkout: {url: `${this.baseUrl}/transaction/checkout`, method: 'POST'},
      createFoodOrder: {url: `${this.baseUrl}/transaction/createFoodOrder`, method: 'POST'},
      refund: {url: `${this.baseUrl}/transaction/refund`, method: 'POST'},
      checkCancelEligibility: {url: `${this.baseUrl}/api/checkCancelEligibility`, method: 'GET'},
      getValidUserCouponList: {url: `${this.baseUrl}/api/getValidUserCouponList`, method: 'GET'},
      getUserFAQ: {url: `${this.baseUrl}/api/getUserFAQ`, method: 'GET'},
      validateDailyFoodOrder: {url: `${this.baseUrl}/api/validateDailyFoodOrder`, method: 'POST'},
      validateAdvanceFoodOrder: {url: `${this.baseUrl}/api/validateAdvanceFoodOrder`, method: 'POST'},
      trackDeliveryTask: {url: `${this.baseUrl}/api/trackdeliveryTask`, method: 'GET'},
      getdeliveryAmount: {url: `${this.baseUrl}/api/quote`, method: 'POST'},
      validateCouponForUser: {url: `${this.baseUrl}/api/validateCouponForUser`, method: 'GET'},
      getOneVariable: {url: `${this.baseUrl}/api/getOneVariable`, method: 'GET'},
      getWalletBalance: {url: `${this.baseUrl}/api/getWalletBalance`, method: 'GET'},
      getUserMelaweWalletBalance: {url: `${this.baseUrl}/api/getUserMelaweWalletBalance`, method: 'GET'},
      userRewardsPointsHistory: {url: `${this.baseUrl}/api/userRewardsPointsHistory`, method: 'GET'},
      userMealaweRewardsPointsHistory: {url: `${this.baseUrl}/api/userMealaweRewardsPointsHistory`, method: 'GET'},
      saveGeneralAppFeeback: {url: `${this.baseUrl}/api/saveGeneralAppFeeback`, method: 'POST'},
      getAppVersionByName: {url: `${this.baseUrl}/api/getAppVersionByName`, method: 'GET'},
      termNcondition: {url: `${this.baseUrl}/public/usertermNcondition`, method: 'GET'},
      getFoodOrder: {url: `${this.baseUrl}/api/getFoodOrder`, method: 'GET'},
      getVariables: {url: `${this.baseUrl}/api/getVariables`, method: 'POST'},
      getFavKitchenList: {url: `${this.baseUrl}/api/getFavKitchenList`, method: 'GET'},
      setFavKitchenList: {url: `${this.baseUrl}/api/setFavKitchenList`, method: 'POST'},
      getNearestKitchen: {url: `${this.baseUrl}/api/getNearestKitchen`, method: 'POST'},
      categoryNearItems: {url: `${this.baseUrl}/search/categoryNearItems`, method: 'POST'},
      searchNearkitchen: {url: `${this.baseUrl}/search/nearkitchen`, method: 'POST'},
      searchNearkitchenFromMeal: {url: `${this.baseUrl}/search/searchNearkitchenFromMeal`, method: 'POST'},
      userNearSearch: {url: `${this.baseUrl}/search/userNearSearch`, method: 'POST'},
      checkUserWallet: {url: `${this.baseUrl}/api/checkUserWallet`, method: 'POST'},
      checkUserMealaweWallet: {url: `${this.baseUrl}/api/checkUserMealaweWallet`, method: 'POST'},
      validateReferralCode: {url: `${this.baseUrl}/api/validateReferralCode`, method: 'GET'},
      getCustomerCurrentOpenOrders: {url: `${this.baseUrl}/api/getCustomerCurrentOpenOrders`, method: 'GET'},
      getSubmittedBulkOrders: {url: `${this.baseUrl}/api/getCustomerPastBulkOrders`, method: 'GET'},
      getCustomerPastOrders: {url: `${this.baseUrl}/api/getCustomerPastOrders`, method: 'GET'},
      startPaytmPaymentProcess: {url: `${this.baseUrl}/transaction/startPaytmPaymentProcess`, method: 'POST'},
      validatePaytmPaymentTransaction: {url: `${this.baseUrl}/transaction/validatePaytmPaymentTransaction`, method: 'POST'},
      startPaymentProcess: {url: `${this.baseUrl}/transaction/startPaymentProcess`, method: 'POST'},
      validatePaymentTransaction: {url: `${this.baseUrl}/transaction/validatePaymentTransaction`, method: 'POST'},
      getCustomerSubscriptionList: {url: `${this.baseUrl}/api/getCustomerSubscriptionList`, method: 'GET'},
      getCustomerPackageList: {url: `${this.baseUrl}/api/getCustomerPackageList`, method: 'GET'},
      getOrderSubscription: {url: `${this.baseUrl}/api/getOrderSubscription`, method: 'GET'},
      getOrderPackage: {url: `${this.baseUrl}/api/getOrderPackage`, method: 'GET'},
      resechedulePackageOrder: {url: `${this.baseUrl}/api/resechedulePackageOrder`, method: 'GET'},
      validateVoucherCode: {url: `${this.baseUrl}/api/validateVoucherCode`, method: 'GET'},
      consoleLog: {url: `${this.baseUrl}/utility/consolelog`, method: 'POST'},
      saveOrderBooking: {url: `${this.baseUrl}/api/saveOrderBooking`, method: 'POST'},
      isSpecialOrderBooked: {url: `${this.baseUrl}/api/isSpecialOrderBooked`, method: 'GET'},
      getCashbackBalance: {url: `${this.baseUrl}/api/getCashbackBalance`, method: 'GET'},
      getCashbackListUser: {url: `${this.baseUrl}/api/getCashbackListUser`, method: 'GET'},
      saveFoodOrderBulk: {url: `${this.baseUrl}/api/saveFoodOrderBulk`, method: 'POST'},
      getSubscriptionItemList: {url: `${this.baseUrl}/api/getSubscriptionItemList`, method: 'GET'},
      getMealPackageListCluster: {url: `${this.baseUrl}/api/getMealPackageListCluster`, method: 'POST'},
      getKitchenGoogleDistance: {url: `${this.baseUrl}/utility/getKitchenGoogleDistance`, method: 'POST'}
   };
  }
}
