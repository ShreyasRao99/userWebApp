import { Injectable } from '@angular/core';
import { ApiMainService } from './apiService/api-main.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentGatewayService {

  constructor(private apiMainService:ApiMainService) { }

  async getValidUserCouponList(customerId:any){
    return await this.apiMainService.getValidUserCouponList(customerId);
}

async validateCouponForUser(couponCode:any,userId:any){
  return new Promise(async(resolve) => {
      try{
          const {status,msg} = await this.apiMainService.validateCouponForUser(couponCode,userId);
          if(status === 'VALID_OFFER'){
              resolve({status:true});
          }else{
              if(msg){
                  // this.toasterService.warning(msg);
              }
              resolve({});
          }              
      }catch(error){
          resolve({});
      }
   });
}

async getMoneyWalletBalance(id:any){
  return await this.apiMainService.getWalletBalance(id);
}

async getdeliveryAmount(payload:any){
  return await this.apiMainService.getdeliveryAmount(payload);
}

async getMealaweWalletBalance(id:any){
  // return await this.apiMainService.getUserMelaweWalletBalance(id);
  let wallet_balance = 0;
  const cashBack:any = await this.apiMainService.getCashbackBalance(id);
  if(cashBack && cashBack.length > 0){
      wallet_balance = cashBack[0].totalCashbackBalance;
  }
  return wallet_balance;
}

async getVariables(variableNames:any,from:any){
  return await this.apiMainService.getVariables(variableNames,from);
}

}
