import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  tabSelected: any = 'Past Orders';
  
  constructor(private router:Router){}

  linkList = [
    {
      label: 'Past Orders',
      iconClass: '',
      routeUrl: 'pastOrder'
    },
    {
      label: 'Meal Subscription Orders',
      iconClass: '',
      routeUrl: 'subscriptionOrder'
    },
    {
      label: 'Bulk Orders',
      iconClass: '',
      routeUrl: 'submittedBulkOrder'
    }]

  ngOnInit(): void {
    this.router.navigate(['/my-account/orders/pastOrder'])
  }

  navigateToOrders(type:any){
    this.tabSelected = type.label
    console.log(type.routeUrl)
    this.router.navigate([`/my-account/orders/${type.routeUrl}`])
    // this.router.navigate(''type.routeUrl)
  }

}
