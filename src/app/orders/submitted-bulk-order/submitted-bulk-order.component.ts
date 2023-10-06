import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { orderStatusMapper } from 'src/config/order-status.config';
import { ApiMainService } from 'src/service/apiService/api-main.service';
import { LocalStorageService } from 'src/service/local-storage.service';


@Component({
  selector: 'app-submitted-bulk-order',
  templateUrl: './submitted-bulk-order.component.html',
  styleUrls: ['./submitted-bulk-order.component.scss']
})
export class SubmittedBulkOrderComponent implements OnInit {

  userProfile: any = {};
    bulkOrderList: any = [];
    pageNumber = 1;
    showloader = false;
    paginationOver = false;

  constructor(private apiMainService:ApiMainService, private localStorageService:LocalStorageService){}

  ngOnInit(): void {
    this.userProfile = this.localStorageService.getCacheData('USER_PROFILE');
        if (this.userProfile && this.userProfile._id) {
            this.getSubmittedBulkOrder();
        }
  }

  async getSubmittedBulkOrder() {
    try {
        const bulkOrderList: any = await this.apiMainService.getSubmittedBulkOrders(this.userProfile._id, this.pageNumber);
        if (bulkOrderList && bulkOrderList.length > 0) {
            this.bulkOrderList = [...this.bulkOrderList, ...bulkOrderList];
            this.showloader = false;
        } else {
            this.paginationOver = true;
            this.showloader = false;
        }
    } catch (error) {
        this.paginationOver = true;
        this.showloader = false;
    }
}

logScrollEnd($event:any) {
    const element = $event.target;
    // if (element.clientHeight + 10 >= this.bulkOrdersListEndDiv.nativeElement.getBoundingClientRect().top) {
    //     if (!this.paginationOver) {
    //         this.showloader = true;
    //         this.pageNumber++;
    //         this.getSubmittedBulkOrder();
    //     }
    // }
}

goback() {
    // this.navCtrl.pop();
}

}
