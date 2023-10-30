import { Component } from '@angular/core';
import { ApiMainService } from 'src/service/apiService/api-main.service';
import { LocalStorageService } from 'src/service/local-storage.service';
import { ToasterService } from '../toaster/toaster.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-feedback',
  templateUrl: './my-feedback.component.html',
  styleUrls: ['./my-feedback.component.scss']
})
export class MyFeedbackComponent {

  feedbackObj:any = {
    feedbackType:'suggestion',
    feedbackComment: ''
  }
  userProfile:any = {};
  constructor(private localStorageService: LocalStorageService, private router:Router,
    private apiMainService: ApiMainService, private toasterService: ToasterService) {
      this.userProfile = this.localStorageService.getCacheData('USER_PROFILE');
  }

  async saveGenericFeedback(){
    if(this.userProfile){
      this.feedbackObj.feedbackFrom_id = this.userProfile._id;
      this.feedbackObj.feedbackFrom_name = this.userProfile.userName;
      this.feedbackObj.feedbackFrom_phoneNo = this.userProfile.phoneNo;
      this.feedbackObj.feedbackFrom_userType = 'customer';
      try{
        await this.apiMainService.saveGeneralAppFeeback(this.feedbackObj);
        this.feedbackObj = { feedbackType:'suggestion', feedbackComment: '' };
        this.toasterService.success(202);
      }catch(error){
        console.log('error while saving generic feedback ',error);
      }
    }  
  }

  goback(){
    this.router.navigate(['/account'])
  }

}
