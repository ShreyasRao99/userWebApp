import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { GoogleMapService } from 'src/service/google-map.service';
import { LocalStorageService } from 'src/service/local-storage.service';
import { SendDataToComponent } from 'src/service/sendDataToComponent';
import { register } from 'swiper/element/bundle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  currentRoute: string;

  constructor(private googleMapService: GoogleMapService, private router:Router, private localStorageService:LocalStorageService){
    this.currentRoute = "";
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
        // Show loading indicator
        console.log('Route change detected');
    }

    if (event instanceof NavigationEnd) {
        // Hide loading indicator
        this.currentRoute = event.url;
        this.localStorageService.setCacheData('CURRENT_ROUTE',event.url)        
          console.log(event);
    }

    if (event instanceof NavigationError) {
        // Hide loading indicator

        // Present error to user
        console.log(event.error);
    }
    })
    this.googleLoad();
  }

  ngOnInit(): void {
    this.routeConditions();
    register()
  }

  async googleLoad(){  
    try{  
      await this.googleMapService.getGoogle();
      // await this.geoLocationService.checkPermission(); 
      // await this.geoLocationService.getHighLevelCenter();  
    }catch(error){
      console.log('googleLoad error', error);
    } 
  }

  routeConditions() {
    // this.router.navigate(['/welcome'])
  }
}
