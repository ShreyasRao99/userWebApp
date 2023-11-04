import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { cashbackfaqList } from 'src/config/faqlist.config';
import { ApiMainService } from 'src/service/apiService/api-main.service';
import { LocalStorageService } from 'src/service/local-storage.service';


@Component({
  selector: 'app-cashback',
  templateUrl: './cashback.component.html',
  styleUrls: ['./cashback.component.scss']
})
export class CashbackComponent implements OnInit {
  @HostListener("window:scroll", [])
  onScroll(): void {
    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight * .90)) {
      if (!this.scrolled) {
        this.scrolled = true;
        if(!this.paginationOver){
          this.showloader = true;
          this.pageNumber++;
          this.getwithdrawalHistory();
        } 
      };
    }
  }
  scrolled:any = false;
  wallet_balance = 0;
  userProfile:any = {};
  transactionHistoryList:any = [];
  kichen_profile:any = {};
  paginationOver = false;
  // nPerPage = 10;
  showloader = false;
  pageNumber = 1;
  selectedTab = 'cashback';
  faqList:any = cashbackfaqList;
  directRoute: any = false;

  constructor(private localStorageService:LocalStorageService, private activatedRoute:ActivatedRoute, private apiMainService:ApiMainService, private router:Router){}

  ngOnInit(): void {
    this.userProfile = this.localStorageService.getCacheData('USER_PROFILE');
      if(this.userProfile && this.userProfile._id){
        this.getMealaweWalletBalance();
        this.getwithdrawalHistory();
      }
      this.activatedRoute.queryParamMap.subscribe((params:any)=>{
        this.directRoute = params.params.directRoute
      })
  }

  async getMealaweWalletBalance(){
    try{
      // const wallet:any = await this.apiMainService.getUserMelaweWalletBalance(this.userProfile._id);
      // if(wallet && wallet.wallet_balance > 0){
      //   this.wallet_balance = wallet.wallet_balance;
      // }
      const cashBack:any = await this.apiMainService.getCashbackBalance(this.userProfile._id);
      if(cashBack && cashBack.length > 0){
        this.wallet_balance = cashBack[0].totalCashbackBalance;
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
      const transactionHistoryList = await this.apiMainService.getCashbackListUser(this.userProfile._id,this.pageNumber);
      if(transactionHistoryList && transactionHistoryList.length > 0){
        this.transactionHistoryList = [...this.transactionHistoryList, ...transactionHistoryList];
        this.showloader = false;
        this.scrolled = false
      }else{
        this.paginationOver = true;
        this.showloader = false;
        this.scrolled = false
      }
    }catch(error){
      this.paginationOver = true;
      this.showloader = false;
      this.scrolled = false
      console.log('error while fetching wallet history')
    }
  }
    
  tabChange(tab: string){
    this.selectedTab = tab;
  }

  goRedeem(){
    this.router.navigate(['/home'])
    // this.navCtrl.navigateForward(['/tabs/tabOrder']);
  }

  goBack(){
    this.directRoute ? this.router.navigate(['/home']) : this.router.navigate(['/account'])
  }

}
