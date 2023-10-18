import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-order-placed',
  templateUrl: './order-placed.component.html',
  styleUrls: ['./order-placed.component.scss']
})
export class OrderPlacedComponent implements OnInit {

  constructor(private router: Router, private acivatedRoute: ActivatedRoute) { }

  paymentSucess: boolean = false
// -- use contructor--
  ngOnInit(): void {
    this.router.events.subscribe(res => {
      if (res instanceof NavigationEnd) {
        this.acivatedRoute.queryParams.subscribe((res: any) => {
          this.paymentSucess = res.success
          console.log(res)
        })
      }
    })
  }

  GoToOrders() {
    this.router.navigate(['/my-account/orders/pastOrder'])
  }

}
