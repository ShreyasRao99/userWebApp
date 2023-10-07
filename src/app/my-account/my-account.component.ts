import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/service/local-storage.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {
  userProfile: any;
  linkList:any=[
    {label:'Orders',link:'orders'},
    {label:'Favourites',link:'favourites'},
    {label:'Payments',link:'payments'},
    {label:'Addresses',link:'addresses'},
    {label:'Settings',link:'settings'},
    {label:'Checkout',link:'checkout'},
  ]

  constructor(private localStorageService:LocalStorageService, private router:Router){}

  ngOnInit(): void {
    console.log('my account on init loaded')
    this.userProfile = this.localStorageService.getCacheData('USER_PROFILE');
    this.router.navigate(['/my-account/orders'])
  }

}
