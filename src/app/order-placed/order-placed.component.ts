import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-order-placed',
  templateUrl: './order-placed.component.html',
  styleUrls: ['./order-placed.component.scss']
})
export class OrderPlacedComponent implements OnInit {
  orderType: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    // this.router.events.subscribe(res => {
    //   if (res instanceof NavigationEnd) {
    //     this.acivatedRoute.queryParams.subscribe((res: any) => {
    //       this.paymentSucess = res.success
    //       console.log(res)
    //     })
    //   }
    // })
  }

  paymentSucess: any = false
  // -- use contructor--
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      console.log(params.success)
      this.paymentSucess = params.success
      this.orderType = params.orderType
      this.paymentSucess === "true" ? this.paymentSucess = true : this.paymentSucess = false
      console.log(this.paymentSucess)
    })
  }

  GoToOrders() {
    if (this.orderType === 'subscriptionParent' || this.orderType === 'subscriptionPackage') {
      this.router.navigate(['/my-account/orders/subscriptionOrder']);
    } else {
      this.router.navigate(['/my-account/orders/pastOrder']);
    }
  }

  goBack(){
    this.router.navigate(['/home'])
  }
}
