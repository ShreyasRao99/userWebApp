import { regionList } from './../../config/favcuisinelist.config';
import { categorylist } from './../../config/categorylist.config';
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
  categorylist = categorylist;
  constructor() { }

  ngOnInit() {
  }

  lookForRegional(region: string){
    // this.mixpanelservice.track('cuisine',{regional: region});
    // this.navCtrl.navigateForward(['/kitchenSearch'], { queryParams: {category: 'region', text: region} });
  }
  lookForCategory(category: string){
    // this.mixpanelservice.track('food-category',{category: category})
    // this.navCtrl.navigateForward(['/categorySearch'], { queryParams: {category} });
  }
}
