import { mealtimelist } from './../../config/mealtimelist.config';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { } from 'src/service/runtime-storage.service';

@Component({
  selector: 'app-meal-time',
  templateUrl: 'meal-time.component.html',
  styleUrls: ['./meal-time.component.scss'],
})
export class MealTimeComponent {
  mealtimelist = mealtimelist;
  constructor(private router: Router) {

  }

  lookForMealTime(mealTime: string, name: string, type: string) {
    if (type === 'meal') {
      // this.mixpanelservice.track('meal-type', { mealtime: name });
      // this.navCtrl.navigateForward(['/kitchenSearch'], { queryParams: { category: 'mealTime', text: mealTime, name } });
      this.router.navigate(['/kitchenSearch'], { queryParams: { category: 'mealTime', text: mealTime, name } });
    } else if (type === 'subscription') {
      this.router.navigate(['/subscription']);
    } else {
      this.router.navigate(['/bulk-order']);
    }

  }

  lookForSpecial(mealTime: string, name: string) {
    // this.mixpanelservice.track('meal-type', { mealtime: name });
    this.router.navigate(['/kitchenSearch'], { queryParams: { category: 'special', text: mealTime, name } });
  }
}
