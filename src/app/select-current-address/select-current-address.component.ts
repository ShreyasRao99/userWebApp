import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { GeolocationService } from 'src/service/geolocation.service';
import { GoogleMapService } from 'src/service/google-map.service';
import { LocalStorageService } from 'src/service/local-storage.service';
import { GoogleStyle } from 'src/config/google.config';


@Component({
  selector: 'app-select-current-address',
  templateUrl: './select-current-address.component.html',
  styleUrls: ['./select-current-address.component.scss']
})
export class SelectCurrentAddressComponent implements OnInit {
  currentSavedLocation: any;
  fetchingCenter!: boolean;
  google: any;
  selectedAddress: any;
  mapid = 'map1234'

  constructor(private localStorageService:LocalStorageService, private chgDetRef: ChangeDetectorRef, private googleMapService:GoogleMapService, private geoLocationService:GeolocationService){
    this.mapid += Math.round(Math.random() * 1000); 
  }

  ngOnInit(): void {
    // let a = document.getElementById('mapid123');
    // console.log(a)
    this.loadCurrentSavedLocation()
  }

  loadCurrentSavedLocation(){
    const currentLocation =  this.localStorageService.getCacheData('CURRENT_LOCATION');
    if(currentLocation){
      this.currentSavedLocation = currentLocation;
      this.loadSelectedLocation(currentLocation);
    }else{
      this.loadSelectedLocation(null);
    }
  }

  async loadSelectedLocation(selectedCenter: any){      
    try{     
      this.fetchingCenter = true;
      this.google = await this.googleMapService.getGoogle();  
      let center: any;
      // let getAccurateCenter = false;
      if(selectedCenter){
        center = selectedCenter;
      }else if(this.currentSavedLocation){
        center = this.currentSavedLocation;
      }else{
        center = await this.geoLocationService.getCurrentCoordinate(true,false);  
        console.log(center)
      }   
      const map = new this.google.maps.Map(document.getElementById(this.mapid), {
          center,
          zoom: 12,
          minZoom: 10,
          disableDefaultUI: true,
          mapTypeId: this.google.maps.MapTypeId.ROADMAP,
          styles: GoogleStyle
      });        
      console.log(map)
      map.setCenter(center);
      this.fetchingCenter = false;
      const mapbounds = new this.google.maps.LatLngBounds();
      mapbounds.extend(new this.google.maps.LatLng(center.lat + 0.1, center.lng + 0.1));
      mapbounds.extend(new this.google.maps.LatLng(center.lat - 0.1, center.lng - 0.1));
      this.google.maps.event.addListenerOnce(map, 'bounds_changed', () => {
        map.setZoom(17);
        this.placeMarker(center, map);
        this.findMarkerAddress(center);
      });
      this.google.maps.event.addListenerOnce(map, 'tilesloaded', () => {
        console.log('map event tilesloaded');
      });
      // setTimeout(() => {
      //   map.setZoom(18);
      //   this.placeMarker(center, map);
      //   this.findMarkerAddress(center);
      // }, 1000);
    }catch (e){
      console.log('error while fetching coordinates ', e);
    }
   }

   placeMarker(latlngObj:any, map:any){
    const marker = new this.google.maps.Marker({
      position: latlngObj,
      map,
      icon: '/assets/icon/location_red_map.svg',
      animation: this.google.maps.Animation.DROP,
      optimized: false
    });
    map.addListener('drag', (event: any) => {
      marker.setPosition( map.getCenter());
    });
    map.addListener('dragend', (event:any) => {
      const lat = marker.map.center.lat();
      const lng  = marker.map.center.lng();
      const newLatlng = { lat, lng};
      this.findMarkerAddress(newLatlng);
    });
  }

  findMarkerAddress(latlng:any){
    const geocoder = new this.google.maps.Geocoder();
    geocoder.geocode( { location: latlng }, (
      results: google.maps.GeocoderResult[],
      status: google.maps.GeocoderStatus
    ) => {
      if (status === 'OK') {
        if (results[0]) {
         const location = results[0].formatted_address.replace("Unnamed Road, ","");
         this.configureCurrentLocation({location, latlng})
         this.chgDetRef.detectChanges();
        }
      }else if(status === 'OVER_QUERY_LIMIT'){
        const self = this;
        setTimeout(()=>{
            self.findMarkerAddress(latlng);
        },500);
      }

    });
  }

  configureCurrentLocation(address:any){
    if(address.lat && address.lng){
      address.latlng = {lat:address.lat,lng:address.lng}
    }      
    this.selectedAddress = {
      tagLocation: address.tagLocation ? address.tagLocation : undefined,
      geolocation: address.geolocation ? address.geolocation : address.latlng,
      address: address.address ? address.address : undefined,
      location: address.location,
      landmark: address.landmark ? address.landmark : undefined,
      _id: address._id ? address._id : undefined
    };
  }

}
