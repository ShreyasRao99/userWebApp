import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/service/local-storage.service';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss']
})
export class AddressesComponent implements OnInit {
  userProfile: any;

  constructor(private localStorageService:LocalStorageService){}
  
  ngOnInit(): void {
    this.userProfile = this.localStorageService.getCacheData('USER_PROFILE');
  }

}
