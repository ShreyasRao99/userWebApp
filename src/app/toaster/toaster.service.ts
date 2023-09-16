import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {
  msgObj:any = {
      100: 'Kindly select from and to date',
      101: 'Your order has been placed successfully!',
      102: 'Cannot delete current address, kindly change current address before delete',
      103: 'Address deleted successfuly',
      104: 'Payment transaction cancelled',
      105: 'Error during payment transaction',
      106: 'Payment refund is successfull',
      107: 'Order is not eligible for refund',
      108: 'Can not add more than available',
      109: 'Coupon cannot be applied, order not matching required conditions',
      110: 'Your are good to place your order now.',
      111: 'Fetching delivery charges, kindly wait for few seconds',
      112: 'You cannot delete all addresses',
      113: 'You cannot add more than 5 combo in one order',
      114: 'Cannot add anymore item in this order, Item limit exceeded',
      115: 'We are unable to provide delivery service right now due to bad weather condition, kindly try after sometime.',
      116: 'Kindly select delivery slot',
      117: 'Special and Non-Special items can not be added together.',
      118: 'Kindly select order date and time',
      119: 'Kindly select Company Name',
      200: 'Mealawe is not serving to your selected location.',
      201: 'Kindly set order delivery date',
      202: 'Thank you for giving us your valuable feedback.',
      203: 'Kindly Provide rating.',
      204: 'Kindly set subscription start date',      
      300: 'Something went wrong, Please try again later.',
      301: 'Error while fetching location information, kindly check location permission.',
      302: 'You have already booked this special item.'
  }

  toasterSubject:any = new BehaviorSubject(null);
  constructor() { }

  success(msgCode: string | number){
    const msg = this.msgObj[msgCode]? this.msgObj[msgCode] : msgCode;
    this.toasterSubject.next({msg, type: 'success'});
  }
  error(msgCode: string | number){
    const msg = this.msgObj[msgCode]? this.msgObj[msgCode] : msgCode;
    this.toasterSubject.next({msg, type: 'error'});
  }

  warning(msgCode: string | number){
    const msg = this.msgObj[msgCode]? this.msgObj[msgCode] : msgCode;
    this.toasterSubject.next({msg, type: 'warning'});
  }
  info(msgCode: string | number){
    const msg = this.msgObj[msgCode]? this.msgObj[msgCode] : msgCode;
    this.toasterSubject.next({msg, type: 'info'});
  } 
  banner(msgCode: any){
    const msg = this.msgObj[msgCode]? this.msgObj[msgCode] : msgCode;
    this.toasterSubject.next({msg, type: 'banner'});
  }

}
