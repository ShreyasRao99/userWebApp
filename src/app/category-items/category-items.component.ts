import { categorylist } from './../../config/categorylist.config';
import { Component, OnInit } from '@angular/core';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-category-items',
  templateUrl: 'category-items.component.html',
  styleUrls: ['./category-items.component.scss'],
})
export class CategoryItemsComponent implements OnInit {
  categorylist = categorylist;
  imageUrl = environment.imageUrl;
  constructor() { }

  ngOnInit() {
  }

  lookForCategory(category: string){
    // this.mixpanelservice.track('food-category',{category: category})
    // this.navCtrl.navigateForward(['/categorySearch'], { queryParams: {category} });
  }
}
