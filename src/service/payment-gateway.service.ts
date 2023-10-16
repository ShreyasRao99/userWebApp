import { Injectable } from '@angular/core';
import { ApiMainService } from './apiService/api-main.service';
import { environment } from 'src/environments/environment';
import { ToasterService } from 'src/app/toaster/toaster.service';
import { CheckoutService } from 'paytm-blink-checkout-angular';
import { Subscription } from 'rxjs';

declare const Paytm:any;
@Injectable({
  providedIn: 'root'
})
export class PaymentGatewayService {
    private subs: Subscription | undefined;

constructor(private apiMainService:ApiMainService, private toasterService:ToasterService,
    private readonly checkoutService: CheckoutService) { }

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
                  this.toasterService.warning(msg);
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

async startPaymentProcess(order:any){
  return await this.apiMainService.startPaymentProcess(order);
}

async payWithRazorpay(checkoutDetails:any,order:any){
  return new Promise(async (resolve, reject)=>{
      const options = { 
          key: environment.razorPayKey,
          amount: `${checkoutDetails.amount*100}`,
          description: 'Payment Transaction', 
          image: `${environment.serverUrl}/public/images/logo.jpg`, 
          order_id: checkoutDetails.order_id,//Order ID generated in Step 1
          currency: 'INR', 
          name: 'Mealawe', 
          prefill: { 
              email: checkoutDetails.customerEmail, 
              contact: checkoutDetails.customerPhoneNo,
          },
          theme: {
              color: '#e62841'
          }
      }
      try {
          // let data = await Checkout.open(options);   
          // this.apiMainService.consoleLog(data);  
          // const res = await this.presentAlert(data.response,order);
          // resolve(res);
      } catch (error) {  
          this.apiMainService.consoleLog(error);
          // const res = await this.presentAlert(error.message,order); //Doesn't appear at all
          // resolve(res);
      }
  })
}

async presentAlert(response: any,order:any){
  return new Promise(async (resolve, reject)=>{
      try{
      if(response && response.razorpay_signature){        
          const payload = {foodOrderId:order._id,orderType: order.orderType,...response};
          const finalStatus = await this.apiMainService.validatePaymentTransaction(payload);
          if(finalStatus.status){
              resolve(true);
          }else{
          this.toasterService.error(105);  
              resolve(false);
          }
      }else{
          this.toasterService.error(104);
          resolve(false);
      }
      }catch(error){
          this.apiMainService.consoleLog(error);
          this.toasterService.error(105);  
          resolve(false);
      }
  });
} 

async startPaytmPaymentProcess(order:any){
  return await this.apiMainService.startPaytmPaymentProcess(order);
}

async payPaytmGateway(checkoutDetails:any,order:any){
  return new Promise(async (resolve, reject)=>{
      try{
          const options = { 
              mid: environment.paytmMerchentId,
              amount: `${checkoutDetails.amount}`,
              orderId: checkoutDetails.order_id,
              callbackUrl: environment.paytmCallback+checkoutDetails.order_id, 
              txnToken: checkoutDetails.receipt,
              isStaging: environment.production ? false : true,
              restrictAppInvoke: true
          }
          // let response = await AllInOneSDK.startTransaction(options);
          const res = await this.paymentSuccessPaytm(order); //Doesn't appear at all
          resolve(res);
      }catch(error){
          const res = await this.paymentSuccessPaytm(order); //Doesn't appear at all
          resolve(res);
      }
  });        
}

async payPaytmGatewayWeb(checkoutDetails:any,order:any){
    return new Promise(async (resolve, reject)=>{
        try{
            const self = this;
            let config = {
                flow: "DEFAULT",
                data:{
                  orderId: checkoutDetails.order_id,
                  amount: `${checkoutDetails.amount}`,
                  token: checkoutDetails.receipt,
                  tokenType:"TXN_TOKEN",
                  userDetail: {
                    "mobileNumber": `${checkoutDetails.customerPhoneNo}`,
                    "name": `${checkoutDetails.customerName}`
                    }
                },
                style: {},
                jsFile: "",
                merchant:{
                  mid:environment.paytmMerchentId,
                  "name": "mealawe",
                  "redirect": false
                },
                mapClientMessage: {},
                labels: {},
                payMode: {
                    labels: {},
                    filter: {
                        exclude: []
                    },
                    order: [
                        "NB",
                        "CARD",
                        "LOGIN"
                    ]
                },
                handler: {
                  notifyMerchant: function(eventName:any, data:any) {
                    console.log("notifyMerchant handler function called");
                    console.log("eventName => ", eventName);
                    console.log("data => ", data);                    
                  },
                  transactionStatus:function(data:any){
                    console.log("payment status ", data);
                    Paytm.CheckoutJS.close();
                    self.webPaymentCallback(resolve, reject,order);  
                  }
                }            
            };           
            console.log('config ',config);
            this.checkoutService.init(config,
                {
                    env: 'STAGE', // optional, possible values : STAGE, PROD; default : PROD
                    openInPopup: true // optional; default : true
                }
            );
    
            // this.subs = this.checkoutService
            // .checkoutJsInstance$
            // .subscribe((instance:any)=>{
            //     console.log('instance',instance);
            // });
        }catch(error){
            console.log('payPaytmGatewayWeb ',error);
            const res = await this.paymentSuccessPaytm(order); //Doesn't appear at all
            resolve(res);
        }
    });        
}

async webPaymentCallback(resolve:any, reject:any,order:any){
    try{
        const payload = {foodOrderId:order._id,orderType: order.orderType};
        const finalStatus = await this.apiMainService.validatePaytmPaymentTransaction(payload);
        if(finalStatus.status){
            resolve(true);
        }else{
            this.toasterService.error(105);  
            resolve(false);
        }
    }catch(error){
        this.apiMainService.consoleLog(error);
        this.toasterService.error(105);  
        resolve(false);
    }
}

async paymentSuccessPaytm(order:any){
  return new Promise(async (resolve, reject)=>{
      try{
          const payload = {foodOrderId:order._id,orderType: order.orderType};
          const finalStatus = await this.apiMainService.validatePaytmPaymentTransaction(payload);
          if(finalStatus.status){
              resolve(true);
          }else{
              this.toasterService.error(105);  
              resolve(false);
          }
      }catch(error){
          this.apiMainService.consoleLog(error);
          this.toasterService.error(105);  
          resolve(false);
      }
  });
}

}
