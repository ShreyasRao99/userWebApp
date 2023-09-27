import { SendDataToComponent } from './sendDataToComponent';
import { LocalStorageService } from './local-storage.service';
import { Injectable } from '@angular/core';
// import { AlertController } from '@ionic/angular';
import { ToasterService } from 'src/app/toaster/toaster.service';


@Injectable({
    providedIn: 'root'
  })
export class CartManagementService {
    cartObj: any;
    constructor(private localStorageService: LocalStorageService,
                private sendDataToComponent: SendDataToComponent,
                // private alertController: AlertController,
                private toasterService: ToasterService){
        const cart = this.localStorageService.getCacheData('USER_CART');
        if (cart){            
            const currentDate = new Date();
            const cartDate = new Date(cart.cartDate);
            if(cartDate.getDate() === currentDate.getDate() ){               
                this.cartObj = cart;
            }else{
                this.resetCart();
            }
        }else {
            this.resetCart();
        }
        this.updateCart();
    }

    resetCart(){
        this.cartObj = {
            kitchenName: '',
            kitchenId: '',
            cartDate: new Date(),
            orderType: '',
            itemList: [],
            addOns: [],
            kitchen:{},
            subscriptionObj:{
                subscriptionDays: 10,
                lunchSubscription : true,
                dinnerSubscription: false,
                subscriptionDates: []
            },
            specialMenuPresent: false,
            deliveryDate: new Date()          
        };
        this.localStorageService.setCacheData('USER_CART', this.cartObj);
    }

    private checkKitchenName(kitchenName: any, kitchenId: any, orderType: any){        
        if (this.cartObj.kitchenName){
            if (kitchenName === this.cartObj.kitchenName && kitchenId === this.cartObj.kitchenId
                && orderType === this.cartObj.orderType){
                return true;
            }else{
                return false;
            }
        }else{          
            return true;
        }
    }
   
    private checkIfItemCanBeAdded(kitchenName: any, kitchenId: any, orderType: string,kitchen: any,mealType: any){
        if (this.cartObj.kitchenName){
            if (kitchenName === this.cartObj.kitchenName && kitchenId === this.cartObj.kitchenId
                && orderType === this.cartObj.orderType){
                if(orderType === 'daily'){
                    if(mealType === this.cartObj.mealType){
                        return true
                    }else{
                        return false;
                    }
                }
                return true;
            }else{
                return false;
            }
        }else{
            this.cartObj.kitchenName = kitchenName;
            this.cartObj.kitchenId = kitchenId;
            this.cartObj.orderType = orderType; 
            this.cartObj.kitchen = kitchen;   
            this.cartObj.mealType = mealType;          
            return true;
        }
    }
    updateCart(){
        this.localStorageService.setCacheData('USER_CART', this.cartObj);
        this.sendDataToComponent.publish('UPDATE_CART', this.cartObj);
        this.sendDataToComponent.publish('UPDATE_CART_FOOTER', this.cartObj);
        this.sendDataToComponent.publish('UPDATE_CART_TABS', this.cartObj);
        this.sendDataToComponent.publish('UPDATE_KITCHEN_SUB', this.cartObj);
        this.sendDataToComponent.publish('UPDATE_CART_SUBSCRIPTION', this.cartObj);
    }
    async addItemToCart(item: any, kitchenName: any, kitchenId: any, orderType: string,kitchen: any){
        const isItemValid = this.checkIfItemCanBeAdded(kitchenName, kitchenId, orderType, kitchen,item.mealType);
        if (isItemValid){ 
            if(this.validateTotalItemCount()){
                this.toasterService.error(114);
                return;
            } 
            // if(this.validateSpecialMenu(item)){
            //     this.toasterService.error(117);
            //     return;
            // }   
            if(this.validateComboCount(item)){
                this.toasterService.error(113);
                return;
            }       
            
            if(item.isSpecialMenu){
                this.cartObj.specialMenuPresent = true;
                this.cartObj.deliveryDate = new Date(item.deliveryDate);
            }
            if(item.mealType === 'subscription'){
                this.cartObj.itemList = [];
            }
            item.count = 1;
            this.cartObj.itemList.push(item);
            this.updateCart();
            return item;
        }else{
            // const alert = await this.alertController.create({
            //     cssClass: 'my-alert-class',
            //     header: 'Alert',
            //     backdropDismiss: false,
            //     message: 'Order from different kitchen or order type is already present in the cart. Do you want to override it?',
            //     buttons: [
            //         {
            //           text: 'Cancel',
            //           role: 'cancel',
            //           cssClass: 'secondary primary1 bold',
            //           handler: (blah) => {
            //             return item;
            //           }
            //         }, {
            //           text: 'Okay',
            //           cssClass: 'secondary-color3 bold',
            //           handler: () => {
            //             this.resetCart();
            //             this.updateCart();
            //             return this.addItemToCart(item, kitchenName, kitchenId, orderType,kitchen);
                        
            //           }
            //         }
            //       ]
            //   });
          
            //   await alert.present();          
            //   const { role } = await alert.onDidDismiss();
        }
    }
    updateItemToCart(item: { itemName: any; count: number; }){       
        const newitemList: any[] = [];
        this.cartObj.itemList.forEach((element: any) => {
            if (element.itemName === item.itemName){
                if(item.count > 0){
                    newitemList.push(item);
                }                    
            }else if(element.count > 0){
                newitemList.push(element);
            }
        });
        if (newitemList.length === 0){
            this.resetCart();
        }
        this.cartObj.itemList = [...newitemList];
        this.updateCart();
    }
    checkIfItemIsAdded(item: any, kitchenName: any, kitchenId: any, orderType: string){        
        let updatedItem = item;
        const isItemValid = this.checkKitchenName(kitchenName, kitchenId, orderType);
        if (isItemValid){
            this.cartObj.itemList.forEach((element: { itemName: any; mealType: any; }) => {
                if (element.itemName === item.itemName){
                    if(orderType === 'daily'){
                        if(element.mealType === item.mealType){
                            updatedItem = element;
                        }else{
                            updatedItem.count = 0;
                        }
                    }else{
                        updatedItem = element;
                    }                    
                }
            });
        }else{
            updatedItem.count = 0;
        }      
        return updatedItem;
    }    
    getCart(){
        return this.cartObj;
    }
    addAddonToCart(addOn: { count: number; }){        
        addOn.count = 1;
        this.cartObj.addOns.push(addOn);
        this.updateCart();       
        return addOn;
    }
    udpateAddonToCart(addOn: { addOnName: any; count: number; }){
        this.cartObj.addOns = this.cartObj.addOns.filter((element: any) => {
            if (element.addOnName === addOn.addOnName){
                if (addOn.count === 0){
                    return false;
                }else{
                    element = addOn;
                    return true;
                }
            }else{
                return true;
            }
        });
        this.updateCart();
    }
    checkIfAddonIsAdded(addOn: any){        
        let updatedItem = addOn;        
        let addonPresent = false;
        this.cartObj.addOns.forEach((element: { addOnName: any; }) => {
            if (element.addOnName === addOn.addOnName){
                updatedItem = element;
                addonPresent = true;
            }
        }); 
        if(!addonPresent){
            updatedItem.count = 0;
        }  
        return updatedItem;
    }  
    getItemCount(){
        return this.cartObj.itemList.length + this.cartObj.addOns.length;
    } 
    validateTotalItemCount(){
        let packetCount = 0;
        this.cartObj.itemList.forEach((item: { itemServingType: string; count: number; }) => {
            if(item.itemServingType !== 'perUnit'){
                packetCount+=item.count;
            }            
        });
        this.cartObj.addOns.forEach((addon: { count: number; }) => {
            packetCount+=addon.count;
        });
        //return packetCount >= 20 ? true : false;
        return false;
    }

    validateComboCount(item: any){
        if(item.itemIsCombo){
            let comboCount = 0;
            this.cartObj.itemList.forEach((listItem: { itemIsCombo: any; count: number; }) => {
                if(listItem.itemIsCombo){
                    comboCount+=listItem.count;
                }            
            });
            // return comboCount >= 5 ? true : false;
            return false;
        }else{
            return false;
        }        
    }
    // validateSpecialMenu(item){        
    //     let specialMenuPresent = false
    //     this.cartObj.itemList.forEach(listItem => {
    //         if(listItem.isSpecialMenu){
    //             specialMenuPresent = true;
    //         }            
    //     });
    //     const itemLength = this.cartObj.itemList.length;        
    //     console.log('validateSpecialMenu',item.isSpecialMenu,specialMenuPresent);
    //     if(itemLength > 0 && ((item.isSpecialMenu && !specialMenuPresent) || 
    //         (!item.isSpecialMenu && specialMenuPresent))){
    //         return true
    //     }else{
    //         return false;
    //     }        
    // }

    updateSubscribeOrder(subscriptionObj: { subscriptionDays: number; subscriptionTime: string; subscriptionDates: never[]; }){
        this.cartObj.subscriptionObj = {...subscriptionObj};
        this.updateCart();
    }

    checkForSubscriptionReset(mealType: string){
        if((this.cartObj.subscriptionObj.subscriptionTime === 'Breakfast' && mealType !== 'Breakfast') || 
        (this.cartObj.subscriptionObj.subscriptionTime !== 'Breakfast' && mealType === 'Breakfast')){
          this.resetCart();
        }
    }
     
}
