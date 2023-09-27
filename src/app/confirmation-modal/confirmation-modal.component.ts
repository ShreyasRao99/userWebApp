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
  constructor(private confimationModalService: ConfirmationModalService) {
  }
  ngOnInit() {
    this.confimationModalService.confimationModalSubject.subscribe((modalObj: any) => {
      if (modalObj.msg) {
        this.modalObj = modalObj;
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