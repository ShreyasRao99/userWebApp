import { LocalStorageService } from './local-storage.service';
import { Injectable } from '@angular/core';
import { ToasterService } from 'src/app/toaster/toaster.service';
import { ApiMainService } from './apiService/api-main.service';
// import { CommonPopupService } from './common-popup.service';


@Injectable({
    providedIn: 'root'
})
export class OrderBookingService {
    userProfile:any = {};
    constructor(private localStorageService: LocalStorageService,private apiMainService: ApiMainService,
        private toasterService: ToasterService){}
        
    // async bookOrder(item: { mainMenuItemId: any; itemName: any; },kitchenObj: any,orderType: string){
    //     return new Promise(async (resolve, reject) => {
    //         try{ 
    //             this.userProfile = this.localStorageService.getCacheData('USER_PROFILE');  
    //             if(this.userProfile && this.userProfile._id){
    //                 const profileSaved =await this.checkProfileNameAndEmail();
    //                 if(!profileSaved){
    //                     resolve(false);  
    //                 }
    //                 const addressSaved = await this.checkSavedAddress();
    //                 if(addressSaved){
    //                     const {orderBooked} = await this.apiMainService.isSpecialOrderBooked(this.userProfile._id,item.mainMenuItemId);
    //                     if(!orderBooked){
    //                         await this.createOrder(item,kitchenObj,orderType);
    //                         this.commonPopupService.showFlashOffer({
    //                             headerMsg: `'${item.itemName}' booked`,
    //                             mainMessage: `You special item booking is completed. Our contact person will call you soon.`,
    //                             subMessage: `Keep using mealawe and book special meals in every offer`
    //                         });
    //                         resolve(true);
    //                     }else{
    //                         this.toasterService.error(302);                    
    //                         resolve(false);
    //                     }
    //                 }else{
    //                     resolve(false);
    //                 }                    
    //             }else{
    //                 this.commonPopupService.showLogingPopup();                  
    //                 resolve(false);
    //             }              
    //         }catch (e){ 
    //             resolve(false);
    //         }
    //     });
    // }

    private async checkProfileNameAndEmail(){
        return new Promise(async (resolve, reject) => {
            try{
                    if(this.userProfile && this.userProfile.userName && this.userProfile.email){
                        resolve(true);
                    }else{                        
                        // await this.commonPopupService.openProfileAlert();
                        resolve(false)
                    }
                  
            }catch (e){ 
                resolve(false);
            }
        });
    }

    // private async checkSavedAddress(){
    //     return new Promise(async (resolve, reject) => {
    //         const currentLocation = this.localStorageService.getCacheData('CURRENT_LOCATION');
    //         if(currentLocation && !currentLocation.address){   
    //             const savedAddress = await this.commonPopupService.selectSavedLocation();
    //             if(savedAddress){
    //                 resolve(true);
    //             }else{
    //                 resolve(false);
    //             }   
    //         }else{
    //             resolve(true);
    //         }
            
    //     });
    // }
   
    createOrder(item: { itemPrice: any; mealawePrice: any; mainMenuItemId: any; deliveryDate: string | number | Date; },kitchenObj: { _id: any; kitchenName: any; phoneNo: any; distance: number; },orderType: any){
        return new Promise(async (resolve, reject) => {
            try{
                this.userProfile = this.localStorageService.getCacheData('USER_PROFILE');  
                const userProfile = this.userProfile;
                const currentLocation = this.localStorageService.getCacheData('CURRENT_LOCATION');
                const foodOrderObj:any = {
                    customerId: userProfile._id,
                    customerName: userProfile.userName,
                    customerLocation: currentLocation,
                    customerEmail: userProfile.email,
                    customerPhoneNo: userProfile.phoneNo,
                    kitchenId: kitchenObj._id,
                    kitchenName: kitchenObj.kitchenName,
                    kitchenPhoneNo: kitchenObj.phoneNo,
                    orderType: orderType,
                    amount: item.itemPrice ,
                    itemAmount: item.itemPrice,
                    kitchenDiscount: 0,
                    deliveryCharges: 0,
                    discount: 0,
                    taxes: 0,
                    itemList: [{...item,count:1}],
                    addOns:  [],
                    specialRequest: '',
                    nonContactDelivery: false,
                    orderDate: new Date(),
                    moneyWalletPointsUsed: 0,
                    mealaweWalletPointsUsed: 0,
                    mealaweDeliveryDiscount: 0,
                    mealaweItemDiscount: 0,
                    mealaweTotalAmt: item.mealawePrice,
                    mealaweKitchenDiscount: 0,
                    specialMenuId: item.mainMenuItemId
                }
                if(kitchenObj.distance >=0 ){
                foodOrderObj.distance = kitchenObj.distance;
                }
                const deliveryDate = new Date(item.deliveryDate);
                deliveryDate.setHours(18);
                deliveryDate.setMinutes(0)
                foodOrderObj.orderComplitionDate = deliveryDate;
                foodOrderObj.orderComplitionTime = deliveryDate;
                await this.apiMainService.saveOrderBooking(foodOrderObj);
                resolve(true);
            }catch(error){
                reject(false);
            }
        });       
    }
   
}
