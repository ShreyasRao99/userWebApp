import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { regionList } from 'src/config/favcuisinelist.config';
import { environment } from 'src/environments/environment';
import { ApiMainService } from 'src/service/apiService/api-main.service';
import { LocalStorageService } from 'src/service/local-storage.service';



@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  imageUrl: any;
  favcuisinelist:any = [...regionList];
  userProfile: any = {};
  userProfileForm!: FormGroup;
  slectedCuisineList: any[] = [];
  slectedCuisineListEdit: any[] = [];
  uploadedImageFile: any;
  editModeOn = false;

  constructor(private localStorageService: LocalStorageService, private apiMainService: ApiMainService) {
    this.userProfileForm = new FormGroup({
      userName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(30),
      Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+\\.[a-zA-Z]{2,4}$")])
    });
    this.loadUserInfo();
  }

  ngOnInit(): void {

  }

  loadUserInfo() {
    this.userProfile = this.localStorageService.getCacheData('USER_PROFILE');
    this.slectedCuisineList = [];
    this.imageUrl = undefined;
    this.uploadedImageFile = undefined
    if (this.userProfile && this.userProfile.preferences) {
      this.setCusineList();
    } else {
      this.slectedCuisineList = this.favcuisinelist.map((ele: any) => ele);
    }
    if (this.userProfile && this.userProfile.imageUrl) {
      this.imageUrl = environment.imageUrl + this.userProfile.imageUrl;
    }
  }

  setCusineList() {
    this.slectedCuisineList = this.favcuisinelist.map((ele: any) => {
      if (this.userProfile.preferences.indexOf(ele.name) > -1) {
        ele.checked = true;
      } else {
        ele.checked = false;
      }
      return ele;
    });
  }

  editProfile() {
    if (this.userProfile) {
      this.userProfileForm.controls['userName'].setValue(this.userProfile.userName);
      this.userProfileForm.controls['email'].setValue(this.userProfile.email);
    }
    this.slectedCuisineListEdit = [...this.slectedCuisineList]
    this.editModeOn = true;
  }

  async saveProfile() {
    const userProfileForm: any = {};
    if (this.userProfileForm && this.userProfileForm.value) {
      userProfileForm.userName = this.userProfileForm.value.userName;
      userProfileForm.email = this.userProfileForm.value.email;
      if (userProfileForm.email) {
        userProfileForm.email = userProfileForm.email.toLowerCase();
      }
    }
    userProfileForm.preferences = this.slectedCuisineListEdit.filter(ele => ele.checked).map(ele => ele.name).join(',')
    const formData = new FormData();
    if (this.uploadedImageFile) {
      formData.append('image', this.uploadedImageFile);
    }
    formData.append('userName', userProfileForm.userName.trim());
    formData.append('email', userProfileForm.email);
    formData.append('preferences', userProfileForm.preferences);
    try {
      const updatedUserProfile = await this.apiMainService.updateUserProfile(this.userProfile._id, formData);
      this.userProfile = updatedUserProfile;
      this.localStorageService.setCacheData('USER_PROFILE', updatedUserProfile);
      this.cancelEdit()
    } catch (e) {
      console.log('Error while editing user profile ', e)
    }
  }

  cancelEdit() {
    this.loadUserInfo();
    this.editModeOn = false;
    this.userProfileForm.reset();
  }

}
