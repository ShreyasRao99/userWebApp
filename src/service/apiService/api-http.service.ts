import { HttpClient, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import { RuntimeStorageService } from '../runtime-storage.service';
import { LoaderstatusService } from 'src/app/mainloader/loaderstatus.service';
import { ToasterService } from 'src/app/toaster/toaster.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiHttpService {
  private withCredentials: boolean = environment.withCredentials ? environment.withCredentials : false;
  constructor(private httpClient:HttpClient, private router:Router, private toasterService:ToasterService, private loaderstatusService:LoaderstatusService, private localStorageService:LocalStorageService, private runtimeStorageService:RuntimeStorageService) { }

  callFinalApi(requestObj: HttpRequest<any>, hideLoader?:any): Promise<any> {
    const p = new Promise((resolve, reject) => {
      if(!hideLoader){
        this.loaderstatusService.show();
      }      
      this.httpClient
      .request(requestObj)
      .subscribe(this.successCallback(resolve),this.errorCallback(reject));   
    });
    return p;
  }

  private successCallback = (resolve:any)=>{
    return (response: any) => {
      // console.log('successCallback ',response)
      if (response && response.body) {         
          this.loaderstatusService.hide();
          resolve(response.body);          
      }
    }
  };
  private errorCallback = (reject: any)=>{
    return  (error:any) => {
      this.loaderstatusService.hide();
      if(error && error.status === 401){
        this.afterLogout()
      }else if(error && error.error && error.error.msg){
        this.toasterService.error(error.error.msg);
        reject(error);
      }else{
        this.loaderstatusService.hide();
        reject(error);
      }        
    }
  }

  afterLogout(){
    try{
      const FCM_TOKEN = this.localStorageService.getCacheData('FCM_TOKEN');     
      this.localStorageService.resetAllCacheData();      
      this.runtimeStorageService.resetAllCacheData();
      this.localStorageService.setCacheData('WELCOMED',true);
      if(FCM_TOKEN){
        this.localStorageService.setCacheData('FCM_TOKEN',FCM_TOKEN);
      }      
      this.router.navigate(['/']);
    }catch(error){
      console.log('Error while logging out', error)
    }
  }

  REQUEST(
    apiConfig: {method: string; url: string},
    data?: any,
    extraHeaderObj?: any,
    hideLoader?: boolean
  ): Promise<any> {
    const headerobj:any = {
      'Cache-Control': 'no-cache',
      Pragma: 'no-cache',
    };
    let responseType = 'json';
    let requestObj: HttpRequest<any>;
    const token = this.localStorageService.getCacheData('TOKEN');
    if(token){
      headerobj['authorization'] = `Bearer ${token}`;
    }
    if (extraHeaderObj) {
      if(extraHeaderObj['Accept']=== 'text/html'){
        responseType = 'text';
      }
      for (const prop in extraHeaderObj) {
        headerobj[prop] = extraHeaderObj[prop];
      }      
    }
    
    if(responseType === 'text'){
      requestObj = new HttpRequest(
        apiConfig.method,
        apiConfig.url,
        data ? data : null,
        {
          headers: new HttpHeaders(headerobj),
          withCredentials: this.withCredentials,
          responseType: 'text'
        }
       );
    }else{
      requestObj = new HttpRequest(
        apiConfig.method,
        apiConfig.url,
        data ? data : null,
        {
          headers: new HttpHeaders(headerobj),
          withCredentials: this.withCredentials,
          responseType: 'json'
        }
       );
    }    
    
    return this.callFinalApi(requestObj, hideLoader);
  }
  
}
