import { Injectable } from '@angular/core';
import { ApiMainService } from './apiService/api-main.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebPageService {
  constructor(private apiMainService: ApiMainService) {
  }
  async termAndCondition() {
    try {
      const termAndCondition = await this.apiMainService.termNcondition();
      // const urlPage = 'data:text/html;base64,' + btoa(termAndCondition);
      const options = 'zoom=no,location=no,toolbar=no,clearcache=yes,clearsessioncache=yes,toolbar=yes,scrollbars=yes,top=500,left=500';
      let inAppBrowserRef:any;

      inAppBrowserRef = window.open('', 'Terms and Conditions', options);
      inAppBrowserRef.document.body.innerHTML = termAndCondition

      inAppBrowserRef.addEventListener('loadstart', (param:any) => {
        console.log('loadstart', param)
      });
      inAppBrowserRef.addEventListener('loadstop', (param:any) => {
        console.log('loadstop', param)
      });

      inAppBrowserRef.addEventListener('loaderror', (param:any) => {
        console.log('loaderror', param)
      });
      inAppBrowserRef.addEventListener('message', (param:any) => {
        if (param && param.data && param.data.close) {
          inAppBrowserRef.close();
        }
      });
    } catch (e) {
      console.log('Error while making payment')
    }
  }
  // async appCenterPage() {
  //   try {
  //     let URL;
  //     const device = await Device.getInfo();
  //     if (device.platform === 'ios') {
  //       URL = environment.appleAppStoreUrl;
  //       if (URL) {
  //         await Browser.open({ url: URL });
  //         Browser.addListener('browserPageLoaded', () => {
  //           console.log('Page Loaded')
  //         });
  //       }
  //     } else {
  //       const result = await AppUpdate.getAppUpdateInfo();
  //       if (result.immediateUpdateAllowed) {
  //         await AppUpdate.performImmediateUpdate();
  //       } else {
  //         await AppUpdate.openAppStore();
  //       }
  //     }
  //   } catch (e) {
  //     console.log('Error while showing appCenterPage page', e);
  //   }
  // }
}
