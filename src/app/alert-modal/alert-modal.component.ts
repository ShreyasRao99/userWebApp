import { Component, OnInit } from '@angular/core';
import { AlertModalService } from './alert-modal.service';
import "@lottiefiles/lottie-player";

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.scss']
})
export class AlertModalComponent implements OnInit {

  showDialog = false;
  modalObj: any = {};

  constructor(private alertModalService:AlertModalService){}

  ngOnInit() {
    this.alertModalService.alertModalSubject.subscribe((obj: any) => {
      console.log(obj.data)
      if (obj.data?.type) {
        this.modalObj = obj.data;
        this.showDialog = true;
      }
    });
  }
  cancel() {
    this.showDialog = false;
  }
  confirm() {
    this.modalObj.callback.apply(this.modalObj.context);
    this.cancel();
  }

}
