import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/service/local-storage.service';
import { SendDataToComponent } from 'src/service/sendDataToComponent';

@Component({
  selector: 'app-mobile-tabs',
  templateUrl: './mobile-tabs.component.html',
  styleUrls: ['./mobile-tabs.component.scss']
})
export class MobileTabsComponent implements OnInit {
  currentRoute: any;

  constructor(private localStorageService:LocalStorageService){}

  ngOnInit(): void {
    this.currentRoute = this.localStorageService.getCacheData('CURRENT_ROUTE')
  }

}
