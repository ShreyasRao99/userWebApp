import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor() { }

  getCurrentCoordinate(hideSaved: boolean,showloader: boolean){
    return new Promise(async (resolve, reject) => {
        try{
            console.log('getCurrentCoordinate called hideSaved',hideSaved); 
                const coordinates = await this.getCenter(showloader);           
                resolve(coordinates);
        }catch (error){
            console.log('getCurrentCoordinate error ',error); 
            resolve({});
        }
    });
}

private async getCenter(showloader: boolean){
  return new Promise(async (resolve, reject) => {
    try{
        navigator.geolocation.getCurrentPosition((coordinates)=>{
            console.log('$$$$$$$',coordinates)
            resolve({lat: coordinates.coords.latitude, lng: coordinates.coords.longitude})
        });            
    }catch (e){
        console.log('error while fetching current position ', e);
        reject(e);
    }
});
}

}
