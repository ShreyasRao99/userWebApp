import { Component, OnInit } from '@angular/core';
import { ApiMainService } from 'src/service/apiService/api-main.service';
import { LocalStorageService } from 'src/service/local-storage.service';
import { ToasterService } from '../toaster/toaster.service';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss']
})
export class AddressesComponent implements OnInit {
  userProfile: any;

  constructor(private localStorageService:LocalStorageService, private toasterService:ToasterService, private apiMainService:ApiMainService){}
  
  ngOnInit(): void {
    this.userProfile = this.localStorageService.getCacheData('USER_PROFILE');
  }

  async deleteAddress(index:any){
    const addressToDelete = this.userProfile.addressList[index];
    const currentAddress = this.localStorageService.getCacheData('CURRENT_LOCATION')
    if(currentAddress._id ===  addressToDelete._id){
      this.toasterService.error(102);
    }else if(this.userProfile.addressList.length === 1){
      this.toasterService.error(112);
    }else{
      this.userProfile.addressList.splice(index,1);
      const updatedUserProfile = await this.apiMainService.updateUserProfile(this.userProfile._id, {addressList:this.userProfile.addressList});
      this.localStorageService.setCacheData('USER_PROFILE', updatedUserProfile); 
      this.toasterService.success(103)
    }
  }

}
