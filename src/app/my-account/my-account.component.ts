import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/service/local-storage.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {
  userProfile: any;

  constructor(private localStorageService:LocalStorageService){}

  ngOnInit(): void {
    console.log('my account on init loaded')
    this.userProfile = this.localStorageService.getCacheData('USER_PROFILE', );
  }

}
