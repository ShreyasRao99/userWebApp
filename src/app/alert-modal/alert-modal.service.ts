import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertModalService {

  alertModalSubject = new BehaviorSubject({});
  constructor() { }
  modal(data: any, callback: Function, context: object){
    console.log(data)
    const modalObj = {data, callback, context}
    this.alertModalSubject.next(modalObj);
  }

}
