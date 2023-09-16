import { mealtimelist } from './../../config/mealtimelist.config';
import { Component } from '@angular/core';
import { RuntimeStorageService } from 'src/service/runtime-storage.service';

@Component({
  selector: 'app-meal-time',
  templateUrl: 'meal-time.component.html',
  styleUrls: ['./meal-time.component.scss'],
})
export class MealTimeComponent {
  mealtimelist = mealtimelist;
  constructor(private runtimeStorageService: RuntimeStorageService) {
    
  }

  lookForMealTime(mealTime: string, name: string, type: string) {
    if(type === 'meal'){
      // this.mixpanelservice.track('meal-type', { mealtime: name });
      // this.navCtrl.navigateForward(['/kitchenSearch'], { queryParams: { category: 'mealTime', text: mealTime, name } });
    }else if(type === 'subscription'){      
      // this.navCtrl.navigateForward('/tabs/tabSubscription');
    }else{
      // this.navCtrl.navigateForward('/bulkOrder');
    }
    
  }

  lookForSpecial(mealTime: string, name: string) {
    // this.mixpanelservice.track('meal-type', { mealtime: name });
    // this.navCtrl.navigateForward(['/kitchenSearch'], { queryParams: { category: 'special', text: mealTime, name } });
  }
}
