import { Injectable } from '@angular/core';
import { GoogleKeys } from 'src/config/google.config';
import { Loader, LoaderOptions } from 'google-maps';
import { ApiMainService } from './apiService/api-main.service';
import { RuntimeStorageService } from './runtime-storage.service';


declare interface google {
  maps: typeof google.maps;
}

@Injectable({
  providedIn: 'root'
})
export class GoogleMapService {
  options: LoaderOptions = {libraries:  ['places','geometry']};
  google!: google;
  map: any;
  apiKey = GoogleKeys[Math.floor(Math.random()*GoogleKeys.length)];
  setupDone = false;
  directionsService:any;
  platform:any;
  googleQueue:any[] = [];
  callInProgess = false;

  constructor(private apiMainService:ApiMainService, private runtimeStorageService:RuntimeStorageService) { }

  getGoogle(): Promise<google>{
    const googlePromise:any = new Promise(async (resolve, reject) => {
        try{                
            if(this.google){
                resolve(this.google);
            }else{
                this.googleQueue.push(resolve);
                if(!this.callInProgess){
                    this.callInProgess = true;
                    this.google = await this.loadGoogleMap() as google;
                    this.googleQueue.forEach(savedResolve => {
                        savedResolve(this.google);
                    });
                    this.googleQueue = [];
                    this.callInProgess = false;
                }                 
            }
            
        }catch (e){
            reject(e);
        }
    });
    return googlePromise;
}
private async loadGoogleMap() {
    try{
      const loader = new Loader(this.apiKey, this.options);
      return await loader.load();
  }catch (e){
      return e
      console.log('error while fetching google plugin ', e);
  }
  }

  async getClusterName(latLngObj:any){
    return new Promise(async (resolve, reject)=>{
        try{
            const geoFencinglist:any = await this.apiMainService.getGeoFencingList();
            const mappedClusterList:any = []
            if(geoFencinglist && geoFencinglist.length > 0 && latLngObj && latLngObj.lat && latLngObj.lng){
                let clusterFound = false;
                const google = await this.getGoogle();
                geoFencinglist.forEach((cluster:any) =>{
                    if(this.google){
                        clusterFound = this.google.maps.geometry.poly.containsLocation(
                            new this.google.maps.LatLng(latLngObj.lat, latLngObj.lng),
                            new google.maps.Polygon({
                                paths: [ [...cluster.clusterCoordinates]]
                            })
                        );
                    }                  
                    if(clusterFound){
                        mappedClusterList.push(cluster.clusterId);
                    }
                });                   
            }
            // this.localStorageService.setCacheData('USER_CLUSTERS',mappedClusterList);
            resolve(mappedClusterList);                
        }catch(error){
          reject(error);
        }
    });       
  }

  async getKitchenGoogleDistance(kitchenList: any[], centerA: { lat: any; lng: any; }){
    try{
        const data = {
            destination: [centerA],
            origin: []
        };
        const kitchenListFound: any[] = [];
        const kitchenListNotFound: any[] = [];
        kitchenList.forEach(kitchen => {
            const kitchenFound = this.runtimeStorageService.getCacheData('KITCHEN_DISTANCE_PROFILE_'+kitchen._id);
            if(kitchenFound){
                kitchenListFound.push(kitchenFound);
            }else{
                kitchenListNotFound.push(kitchen);
            }
        });
       
        if(kitchenListNotFound.length > 0){
            kitchenListNotFound.forEach(kitchen => {
                data.origin.push(kitchen.geolocation as never);
            });
            const finalDistanceList = await this.apiMainService.getKitchenGoogleDistance(data);
            console.log('finalDistanceList ',finalDistanceList);
            if(finalDistanceList && finalDistanceList.length > 0){
                finalDistanceList.forEach((distanceObj: { distance: { value: any; }; },index: any) => {
                    const distanceInMeters = distanceObj.distance.value;
                    const distanceInKms = parseFloat((distanceInMeters * 0.001).toFixed(1));
                    kitchenListNotFound[index].distance = distanceInKms;  
                    kitchenListNotFound[index].deliveryTime = Math.ceil(distanceInKms * 5) + 10;
                    this.runtimeStorageService.setCacheData('KITCHEN_DISTANCE_PROFILE_'+kitchenListNotFound[index]._id,kitchenListNotFound[index]);
                });
            }else{
                kitchenListNotFound.forEach(kitchen => {
                    let distanceInKms:any = this.calulateDistance(kitchen.geolocation.lat,kitchen.geolocation.lng,centerA.lat,centerA.lng);
                    distanceInKms = parseFloat(distanceInKms.toFixed(1));
                    kitchen.distance = distanceInKms;
                });                    
            }              
        }            
        return [...kitchenListFound,...kitchenListNotFound];
    }catch(error){
        kitchenList.forEach(kitchen => {
            let distanceInKms:any = this.calulateDistance(kitchen.geolocation.lat,kitchen.geolocation.lng,centerA.lat,centerA.lng);
            distanceInKms = parseFloat(distanceInKms.toFixed(1));
            kitchen.distance = distanceInKms;
        });             
        return kitchenList;
    }
  }

  calulateDistance(lat1: number, lon1: number, lat2: number, lon2: number, unit="K") {
    if ((lat1 == lat2) && (lon1 == lon2)) {
        return 0;
    }
    else {
        var radlat1 = Math.PI * lat1/180;
        var radlat2 = Math.PI * lat2/180;
        var theta = lon1-lon2;
        var radtheta = Math.PI * theta/180;
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
            dist = 1;
        }
        dist = Math.acos(dist);
        dist = dist * 180/Math.PI;
        dist = dist * 60 * 1.1515;
        if (unit=="K") { dist = dist * 1.609344 }
        if (unit=="N") { dist = dist * 0.8684 }
        return dist;
    }
  }
}


