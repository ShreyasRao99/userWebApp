import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleMapService } from 'src/service/google-map.service';
import { register } from 'swiper/element/bundle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private googleMapService: GoogleMapService, private router:Router){
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
