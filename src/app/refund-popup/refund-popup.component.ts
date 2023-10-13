import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-refund-popup',
  templateUrl: './refund-popup.component.html',
  styleUrls: ['./refund-popup.component.scss']
})
export class RefundPopupComponent implements OnInit {
  @Input() props: any;
  @Output() refundStatus: EventEmitter<any> = new EventEmitter<any>()
  order: any = {};
  refundAmt = 0;
  comment = '';
  moneyWalletPointsUsed = 0;
  mealaweWalletPointsUsed = 0;
  refundObj: any;

  ngOnInit(): void {
    console.log(this.props)
    this.order = this.props.order
    this.refundAmt = this.props.refundAmt
    if (this.order && this.refundAmt) {
      this.moneyWalletPointsUsed = this.moneyWalletPointsUsed ? this.moneyWalletPointsUsed : 0;
      this.mealaweWalletPointsUsed = this.mealaweWalletPointsUsed ? this.mealaweWalletPointsUsed : 0;
    }
  }

  async refund() {
    try {
      this.refundObj = {
        orderId: this.order._id,
        comment: this.comment
      }
      this.refundStatus.emit(this.refundObj)
      // this.dismiss(true,this.refundObj);
    } catch (e) {
      console.log('error while proceeding refund ', e)
    }
  }

  close() {
    this.refundStatus.emit('')
  }

}
