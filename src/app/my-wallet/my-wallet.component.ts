import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiMainService } from 'src/service/apiService/api-main.service';
import { LocalStorageService } from 'src/service/local-storage.service';

@Component({
  selector: 'app-my-wallet',
  templateUrl: './my-wallet.component.html',
  styleUrls: ['./my-wallet.component.scss']
})
export class MyWalletComponent implements OnInit {

  constructor(private router:Router, private localStorageService:LocalStorageService, private apiMainService:ApiMainService){}

  wallet_balance = 0;
  userProfile:any = {};
  transactionHistoryList:any = [];
  kichen_profile:any = {};
  paginationOver = false;
  nPerPage = 10;
  showloader = false;
  pageNumber = 1;

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.userProfile = this.localStorageService.getCacheData('USER_PROFILE');
      if(this.userProfile && this.userProfile._id){
        this.getWalletBalance();
        this.getwithdrawalHistory();
      }
  }

  async getWalletBalance(){
    try{
      const wallet:any = await this.apiMainService.getWalletBalance(this.userProfile._id);
      if(wallet && wallet.wallet_balance > 0){
        this.wallet_balance = wallet.wallet_balance;
      }
    }catch(error){
      console.log('error while fetching wallet')
    }
  }

  goback(){
    // this.navCtrl.pop();
  }
  async getwithdrawalHistory(){
    try{
      const transactionHistoryList = await this.apiMainService.userRewardsPointsHistory(this.userProfile._id,this.pageNumber,this.nPerPage);
      if(transactionHistoryList && transactionHistoryList.length > 0){
        this.transactionHistoryList = [...this.transactionHistoryList, ...transactionHistoryList];
        this.showloader = false;
      }else{
        this.paginationOver = true;
        this.showloader = false;
      }
    }catch(error){
      this.paginationOver = true;
      this.showloader = false;
    }
  }  

  logScrollEnd($event:any){
    // const element = $event.target;
    // if (element.clientHeight+10 >= this.historyListEndDiv.nativeElement.getBoundingClientRect().top){
    //     if(!this.paginationOver){
    //       this.showloader = true;
    //       this.pageNumber++;
    //       this.getwithdrawalHistory();
    //     }        
    // }
  }

}
