import { ConfirmationModalService } from './confirmation-modal.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-confirmation-modal',
  templateUrl: 'confirmation-modal.component.html',
  styleUrls: ['confirmation-modal.component.scss']
})
export class ConfirmationModalComponent implements OnInit {
  showDialog = false;

  modalObj: any = {};
  type: any = 1;
  constructor(private confimationModalService: ConfirmationModalService) {
  }
  ngOnInit() {
    this.confimationModalService.confimationModalSubject.subscribe((modalObj: any) => {
      console.log(modalObj)
      if (modalObj.msg?.data) {
        this.modalObj = modalObj;
        this.type = modalObj.msg.type
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