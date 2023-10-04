import { SendDataToComponent } from 'src/service/sendDataToComponent';
import { Component, OnDestroy, EventEmitter, Output, Input, ChangeDetectorRef } from '@angular/core';
// import { NavController } from '@ionic/angular';
import { CartManagementService } from 'src/service/cart-management.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-cart-footer',
    templateUrl: 'cart-footer.component.html',
    styleUrls: ['./cart-footer.component.scss'],
  })
  export class CardFooterComponent implements OnDestroy{
    @Input()insideKitchenId: any;  
    cartObj: any;
    @Output() viewCart = new EventEmitter();
    subscribeText = '';    
    constructor(private sendDataToComponent: SendDataToComponent, 
                private chgDetRef: ChangeDetectorRef,
                private router:Router,
                private cartManagementService: CartManagementService){
        this.cartObj = this.cartManagementService.getCart();
        this.subscribeEvents();
    }

    subscribeEvents(){
        this.sendDataToComponent.subscribe('UPDATE_CART_FOOTER', (cartObj) => {
            if(cartObj){
                this.updateCart(cartObj);
            }            
        });
    }

    updateCart(cartObj:any){        
        if (cartObj){
            this.cartObj = {...cartObj};                       
            if(this.cartObj && this.cartObj.orderType === 'subscription'){   
                this.getSubscribeText();       
            }
        }
    }

    getSubscribeText(){
        let subText = ''; 
        if(this.cartObj && this.cartObj.itemList && this.cartObj.itemList.length > 0){
            // let itemCount = 0;
            // this.cartObj.itemList.forEach((ele: any) => {
            //     itemCount += ele.count;
            // });
            // if(this.cartObj.subscriptionObj.subscriptionTime !== 'Breakfast'){
            //     subText = `${itemCount} combo meal `; 
            //     subText += `on ${this.cartObj.subscriptionObj.subscriptionTime} `;
            // }
            // if(this.cartObj.subscriptionObj.subscriptionTime === 'Breakfast'){
            // subText += `${itemCount} Breakfast `;
            // }
            // if(this.cartObj.subscriptionObj.subscriptionDays){
            //     subText += `for ${this.cartObj.subscriptionObj.subscriptionDays} days.`;
            // }
            // this.subscribeText = subText;     
            let text = '';
            
            if(this.cartObj.subscriptionObj.lunchSubscription){
                text = `Lunch meal subscription`;
            }
            if(this.cartObj.subscriptionObj.dinnerSubscription){
                text = `Dinner meal subscription`;
            }
            if(this.cartObj.subscriptionObj.lunchSubscription && this.cartObj.subscriptionObj.dinnerSubscription){
                text = `Lunch & Dinner meal subscription`;
            }
            // const days = this.cartObj.subscriptionObj.subscriptionDays;
            // days > 1 ? text += `${days} days ` : text += `${days} day `;
            this.subscribeText = text;
            //  this.subscribeFooterText = text;       
        }
    }

    getTotalSubscriptionPrice(){
        let price = 0;
        let mealPerdayCount = 1;
        let discount = 0;
        // this.cartObj.itemList.forEach((ele: any) => {
        //     const itemPrice = ele.mealawePrice ? ele.mealawePrice : ele.itemPrice;
        //     price += itemPrice * ele.count;
        // });
        // this.cartObj.addOns.forEach((ele: any) => {
        //     const addOnPrice = ele.mealawePrice ? ele.mealawePrice : ele.addOnPrice;
        //     price += addOnPrice * ele.count;
        // });
        // price *= this.cartObj.subscriptionObj.subscriptionDays;
        if(this.cartObj.subscriptionObj.dinnerSubscription && this.cartObj.subscriptionObj.lunchSubscription){
            mealPerdayCount = 2;
        }
        this.cartObj.itemList.forEach((ele:any) => {
            price += ele.packagePrice * ele.count * mealPerdayCount;
            discount = discount + ele.discount;
            ele.addonsList?.forEach((addon:any) => {
                if(addon.selected){
                price += (addon.extraPrice * ele.count * mealPerdayCount)
                }
            });
        });
        this.subscribeText = this.subscribeText; 
        price = price - discount;
        return price;
    }

    getTotalPrice(){
        let price = 0; 
        this.cartObj.itemList.forEach((ele: any) => {
            const itemPrice = ele.mealawePrice ? ele.mealawePrice : ele.itemPrice;
            price += itemPrice * ele.count;
        });
        this.cartObj.addOns.forEach((ele: any) => {
            const addOnPrice = ele.mealawePrice ? ele.mealawePrice : ele.addOnPrice;
            price += addOnPrice * ele.count;
        });
        return price;
    }
    goToMainCart(){
        if(this.insideKitchenId === this.cartObj.kitchenId && this.cartObj.orderType !== 'subscription'){
            this.viewCart.emit();
        }else{
            this.router.navigate(['/cart'])
        }        
    }

    ngOnDestroy(){
        this.sendDataToComponent.unsubscribe('UPDATE_CART_FOOTER');
    }
  }
