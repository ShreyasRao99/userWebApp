import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })
  export class SendDataToComponent {
    jsonObj:any = {};

    subscribe(key: string, callback: (args: any) => void ) {
        if (!this.jsonObj[key]){
            this.jsonObj[key] = new ReplaySubject<Object>(1);
            this.jsonObj[key].subscribe(callback);
        }else{
            this.jsonObj[key].subscribe(callback);
        }
    }
    publish(key: string, data: any){
        if (this.jsonObj[key] && data){
            this.jsonObj[key].next(data);
        }
    }

    unsubscribe(key: string){
        if (this.jsonObj[key]){
            this.jsonObj[key].unsubscribe();
            delete this.jsonObj[key];
        }
    }

  }
