import { Injectable } from '@angular/core';
import { LoaderstatusService } from 'src/app/mainloader/loaderstatus.service';

@Injectable({
    providedIn: 'root'
})
export class GeolocationService {

    constructor(private loaderstatusService: LoaderstatusService) { }

    getCurrentCoordinate(hideSaved: boolean, showloader: boolean) {
        return new Promise(async (resolve, reject) => {
            try {
                this.loaderstatusService.show();
                console.log('getCurrentCoordinate called hideSaved', hideSaved);
                const coordinates = await this.getCenter(showloader);
                this.loaderstatusService.hide();
                resolve(coordinates);
            } catch (error) {
                console.log('getCurrentCoordinate error ', error);
                this.loaderstatusService.hide();
                resolve({});
            }
        });
    }

    private async getCenter(showloader: boolean) {
        return new Promise(async (resolve, reject) => {
            try {
                navigator.geolocation.getCurrentPosition((coordinates) => {
                    console.log('$$$$$$$', coordinates)
                    resolve({ lat: coordinates.coords.latitude, lng: coordinates.coords.longitude })
                });
            } catch (e) {
                console.log('error while fetching current position ', e);
                reject(e);
            }
        });
    }

}
