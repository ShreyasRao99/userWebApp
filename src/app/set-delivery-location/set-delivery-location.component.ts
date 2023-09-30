import { ChangeDetectorRef, Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GeolocationService } from 'src/service/geolocation.service';
import { GoogleMapService } from 'src/service/google-map.service';
import { LocalStorageService } from 'src/service/local-storage.service';
import { GoogleStyle } from 'src/config/google.config';
import { SendDataToComponent } from 'src/service/sendDataToComponent';
import { ApiMainService } from 'src/service/apiService/api-main.service';

@Component({
  selector: 'app-set-delivery-location',
  templateUrl: './set-delivery-location.component.html',
  styleUrls: ['./set-delivery-location.component.scss']
})
export class SetDeliveryLocationComponent implements OnInit {
  @Input() showSkipButton: boolean = false;
  @Input() getCurrentLocation: boolean = false;
  @Output() closeOffCanvas = new EventEmitter<any>();
  serviceAvailable: boolean = true;

  constructor(private localStorageService: LocalStorageService, private apiMainService: ApiMainService, private sendDataToComponent: SendDataToComponent, private chgDetRef: ChangeDetectorRef, private googleMapService: GoogleMapService, private geoLocationService: GeolocationService) {
    this.mapid += Math.round(Math.random() * 1000);
  }

  currentSavedLocation: any;
  fetchingCenter!: boolean;
  google: any;
  selectedAddress: any;
  mapid = 'map1234';
  address: any;
  landmark: any;
  tagLocation = 'home';

  ngOnInit(): void {
    // let a = document.getElementById('mapid123');
    // console.log(a)
    if (!this.getCurrentLocation) {
      this.loadCurrentSavedLocation()
    }
    this.loadSelectedLocation(null);
  }

  loadCurrentSavedLocation() {
    const currentLocation = this.localStorageService.getCacheData('CURRENT_LOCATION');
    console.log(currentLocation)
    if (currentLocation && currentLocation.geolocation) {
      this.currentSavedLocation = currentLocation.geolocation;
      this.loadSelectedLocation(currentLocation.geolocation);
    } else {
      this.loadSelectedLocation(null);
    }
  }

  async loadSelectedLocation(selectedCenter: any) {
    try {
      this.fetchingCenter = true;
      this.google = await this.googleMapService.getGoogle();
      let center: any;
      // let getAccurateCenter = false;
      if (selectedCenter) {
        center = selectedCenter;
      } else if (this.currentSavedLocation) {
        center = this.currentSavedLocation;
      } else {
        center = await this.geoLocationService.getCurrentCoordinate(true, false);
      }
      const map = new this.google.maps.Map(document.getElementById(this.mapid), {
        center,
        zoom: 12,
        minZoom: 10,
        disableDefaultUI: true,
        mapTypeId: this.google.maps.MapTypeId.ROADMAP,
        styles: GoogleStyle
      });
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
    } catch (e) {
      console.log('error while fetching coordinates ', e);
    }
  }

  placeMarker(latlngObj: any, map: any) {
    const marker = new this.google.maps.Marker({
      position: latlngObj,
      map,
      icon: '/assets/icon/location_red_map.svg',
      animation: this.google.maps.Animation.DROP,
      optimized: false
    });
    map.addListener('drag', (event: any) => {
      marker.setPosition(map.getCenter());
    });
    map.addListener('dragend', (event: any) => {
      const lat = marker.map.center.lat();
      const lng = marker.map.center.lng();
      const newLatlng = { lat, lng };
      this.findMarkerAddress(newLatlng);
    });
  }

  findMarkerAddress(latlng: any) {
    const geocoder = new this.google.maps.Geocoder();
    geocoder.geocode({ location: latlng }, (
      results: google.maps.GeocoderResult[],
      status: google.maps.GeocoderStatus
    ) => {
      if (status === 'OK') {
        if (results[0]) {
          const location = results[0].formatted_address.replace("Unnamed Road, ", "");
          this.configureCurrentLocation({ location, latlng })
          this.chgDetRef.detectChanges();
        }
      } else if (status === 'OVER_QUERY_LIMIT') {
        const self = this;
        setTimeout(() => {
          self.findMarkerAddress(latlng);
        }, 500);
      }

    });
  }

  configureCurrentLocation(address: any) {
    console.log(address)
    if (address.lat && address.lng) {
      address.latlng = { lat: address.lat, lng: address.lng }
    }
    this.selectedAddress = {
      tagLocation: address.tagLocation ? address.tagLocation : undefined,
      geolocation: address.geolocation ? address.geolocation : address.latlng,
      address: address.address ? address.address : undefined,
      location: address.location,
      landmark: address.landmark ? address.landmark : undefined,
      _id: address._id ? address._id : undefined
    };
    this.checkServicability(this.selectedAddress)
  }

  sendCurrentLocation() {
    if (this.serviceAvailable) {
      this.addAddress()
      this.closeOffCanvas.emit(true)
      this.sendDataToComponent.publish('ADDRESS_FROM_DELIVERY', this.selectedAddress)
    }
    else {
      return;
    }
  }

  toggleAdditionalDetails() {
    this.showSkipButton = !this.showSkipButton
  }

  selectTag(tag: any) {
    this.tagLocation = tag;
  }

  addAddress() {
    if (this.serviceAvailable) {
      const userProfile = this.localStorageService.getCacheData('USER_PROFILE');
      if (userProfile) {
        userProfile.addressList = userProfile.addressList ? userProfile.addressList : [];
        const currentLocation = {
          tagLocation: this.tagLocation,
          geolocation: this.selectedAddress.geolocation,
          address: this.address,
          location: this.selectedAddress.location,
          landmark: this.landmark
        };
        this.selectedAddress = currentLocation;
        userProfile.addressList.push(currentLocation);
        this.updateUserProfile(userProfile, currentLocation);
      }
    }
  }

  async updateUserProfile(userProfile: any, currentLocation: any) {
    const updatedUserProfile = await this.apiMainService.updateUserProfile(userProfile._id, userProfile);
    this.localStorageService.setCacheData('USER_PROFILE', updatedUserProfile);
    this.localStorageService.setCacheData('CURRENT_LOCATION', currentLocation);
    this.localStorageService.setCacheData('LOCATION_SET', true);
  }

  async checkServicability(address: any) {
    try {
      const clusterList: any = await this.googleMapService.getClusterName(address.geolocation);
      if (clusterList && clusterList.length > 0) {
        this.serviceAvailable = true;
      } else {
        this.serviceAvailable = false;
        // this.showLoadingPage = false;
      }
    } catch (error) {

    }
  }

}
