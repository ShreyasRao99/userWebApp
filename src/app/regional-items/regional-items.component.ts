import { regionList } from './../../config/favcuisinelist.config';
import { Component, OnInit } from '@angular/core';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-regional-items',
  templateUrl: 'regional-items.component.html',
  styleUrls: ['./regional-items.component.scss'],
})
export class RegionalItemsComponent implements OnInit {
  regionalList = regionList;
  imageUrl = environment.imageUrl;
  constructor() { }

  ngOnInit() {
  }

  lookForRegional(region: string){
    // this.mixpanelservice.track('cuisine',{regional: region});
    // this.navCtrl.navigateForward(['/kitchenSearch'], { queryParams: {category: 'region', text: region} });
  }
}
