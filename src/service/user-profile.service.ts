import { Injectable } from '@angular/core';
// import { NavController } from '@ionic/angular';
import { GeolocationService } from './geolocation.service';
import { LocalStorageService } from './local-storage.service';
import { RuntimeStorageService } from './runtime-storage.service';
import { GoogleMapService } from './google-map.service';

@Injectable({
    providedIn: 'root'
})
export class UserProfileService {
    constructor(private geoLocationService: GeolocationService,
        private localStorageService: LocalStorageService, private googleMapService: GoogleMapService
        ){}
    // async loginUser(){
    //     this.navCntrl.navigateForward(['/mobile/true']);
    // }
    
    async checkLocationChange(){   
        const newGeo:any = await this.geoLocationService.getCurrentCoordinate(false,true);
        if(newGeo){
            if(newGeo && newGeo.addedManually){
                return {changeLocation:true,center:newGeo,addedManually:true,address:newGeo.address, savedAddress: newGeo.savedAddress};
            }else{
                return {changeLocation:true,center:newGeo,addedManually:false};
            }
        }else{
            return {};
        }
    }

    async getCurrntCoordinate(){
        const newGeo:any = await this.geoLocationService.getCurrentCoordinate(false,true);
        return {center:newGeo};
    }

    getSavedAddress(currentLocation:any){
        const userProfile = this.localStorageService.getCacheData('USER_PROFILE'); 
        console.log(userProfile)
        let finalLocation = currentLocation;
        console.log(finalLocation)
        if(userProfile && userProfile._id){
            if( userProfile.addressList && userProfile.addressList.length > 0){                
                if(currentLocation && currentLocation.geolocation){
                    let currentlatlng = currentLocation.geolocation;
                    userProfile.addressList.forEach((address:any) => {
                        if(address.geolocation){
                            let addlatlng = address.geolocation;
                            if(currentlatlng.lat && currentlatlng.lng && addlatlng.lat &&addlatlng.lng){
                                const distance = this.googleMapService.calulateDistance(currentlatlng.lat,currentlatlng.lng,addlatlng.lat,addlatlng.lng);
                                const distanceInMeter = Math.round(distance * 1000);
                                console.log(distanceInMeter)
                                if(distanceInMeter < 100){
                                    this.localStorageService.setCacheData('CURRENT_LOCATION',address);
                                    finalLocation = address;
                                }
                            }                             
                        }                                           
                    });
                }
                
            }
        }
        return finalLocation;
    }
}