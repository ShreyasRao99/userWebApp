import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiMainService } from 'src/service/apiService/api-main.service';
import { LocalStorageService } from 'src/service/local-storage.service';
import { ToasterService } from '../toaster/toaster.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-bulk-order',
  templateUrl: './bulk-order.component.html',
  styleUrls: ['./bulk-order.component.scss']
})
export class BulkOrderComponent implements OnInit {

  showForm = true;
  orderComplitionDate:any;
  orderComplitionTime:any;
  groupTypeCompany: boolean = true;
  registerForm: any;
  allowedMinDate!: any;
  isUserProfile: boolean = false;
  userProfile: any = {};
  customerId!: string;
  customerName!: string;
  customerEmail!: string;
  customerPhoneNo!: string;
  startDate = document.getElementById('startDate')

  constructor(private fb:FormBuilder, private datePipe:DatePipe, private router:Router, private apiMainService:ApiMainService, private toasterService:ToasterService, private localStorageService:LocalStorageService){}

  ngOnInit(): void {
    this.createForm()
    this.userProfile = this.localStorageService.getCacheData('USER_PROFILE');
    if (this.userProfile) {
      this.isUserProfile = true;
      this.customerId = this.userProfile._id;
      this.registerForm.controls.customerName.setValue(this.userProfile.userName);
      this.registerForm.controls.customerPhoneNo.setValue(this.userProfile.phoneNo);
      this.registerForm.controls.customerEmail.setValue(this.userProfile.email);
    } else {
      this.isUserProfile = false;
    }
    const currentDate = new Date();
    const after1Day = new Date((new Date()).setDate(currentDate.getDate() + 1));
    this.allowedMinDate = this.datePipe.transform(after1Day,'yyyy-MM-dd')
  }

  createForm(){
    this.registerForm = this.fb.group({
      customerName:['',[Validators.required]],
      customerEmail:['', [Validators.required, Validators.email, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+(\\.[a-zA-Z]{2,4})+(\\.[a-zA-Z]{2,4})*$")]],
      customerPhoneNo:['', [Validators.required, Validators.pattern("^[0-9]{10}$")]],
      groupType:['', Validators.required],
      companyName:[''],
      numberOfPeople:['', Validators.required],
      occassion:['', Validators.required],
      address:['', Validators.required],
      mealType:['', Validators.required]
    })
  }

  async onSubmit() {
    if (this.registerForm.value.groupType == 'Company' && !this.registerForm.value.companyName) {
      this.toasterService.error(119);
      return
    }
    if (this.orderComplitionDate && this.orderComplitionTime) {
      if (this.registerForm && this.registerForm.value) {
        const bulkOrderObj: any = {
          customerName: this.registerForm.value.customerName,
          customerEmail: this.registerForm.value.customerEmail,
          customerPhoneNo: this.registerForm.value.customerPhoneNo,
          groupType: this.registerForm.value.groupType,
          companyName: this.registerForm.value.companyName,
          numberOfPeople: this.registerForm.value.numberOfPeople,
          occassion: this.registerForm.value.occassion,
          address: this.registerForm.value.address,
          mealType: this.registerForm.value.mealType,
          orderComplitionDate: this.orderComplitionDate,
          orderComplitionTime: this.orderComplitionTime
        }
        console.log(bulkOrderObj)
        if (this.customerId) {
          bulkOrderObj.customerId = this.customerId;
        }
        try {
          await this.apiMainService.saveFoodOrderBulk(bulkOrderObj);
          this.showForm = false;
        } catch (e) {
          console.log('error while calling api ', e);
        }
      }
    } else {
      this.toasterService.error(118);
    }
  }

  bulkOrderDateChanged(date:any) {
    let formattedDate = new Date(date.value).toISOString()
    this.orderComplitionDate = new Date(formattedDate);
  }
  bulkOrderTimeChanged(time:any) {
    let currDate = new Date()
    let newDate = new Date(currDate.toDateString() + ' ' + time.value)
    this.orderComplitionTime = new Date(newDate.getTime() - newDate.getTimezoneOffset() * 60000).toISOString();
    console.log(this.orderComplitionTime)
  }
  goBulkOrders() {
    this.router.navigate(['/my-account/orders/pastOrder'])
  }
  goBack() {
    this.router.navigate(['/home'])
  }
}
