import { Component, OnInit } from '@angular/core';
import { ApiMainService } from 'src/service/apiService/api-main.service';
import { LocalStorageService } from 'src/service/local-storage.service';

@Component({
  selector: 'app-my-help',
  templateUrl: './my-help.component.html',
  styleUrls: ['./my-help.component.scss']
})
export class MyHelpComponent implements OnInit {
  faqlist:any = [];
  userProfile: any = {};
  selectedTab: string = 'faq';

  constructor(private apiMainService: ApiMainService, private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.userProfile = this.localStorageService.getCacheData('USER_PROFILE');
    this.getUserFAQ();

  }

  async getUserFAQ() {
    try {
      const faqs: any = await this.apiMainService.getUserFAQ();
      if (faqs && faqs.length > 0) {
        this.faqlist = faqs;
      }
    } catch (error) {
      console.log('error while fetching FAQs')
    }
  }

  tabChange(tab: string){
    this.selectedTab = tab;
  }

  sendEmail() {
    if (this.userProfile) {
      const subject = `${this.userProfile.userName} - ${this.userProfile.phoneNo}`;
      const body = '';
      window.open(`mailto:contact@mealawe.com?subject=${subject}&body=${body}`);
    }
  }

}
