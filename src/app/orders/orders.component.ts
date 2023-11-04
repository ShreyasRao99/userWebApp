import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  tabSelected: any = 'Past Orders';
  hideTabs: boolean = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

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
    this.activatedRoute.queryParamMap.subscribe((param: any) => {
      if (param.params.orderType) {
        console.log(param.params.orderType)
        let route = param.params.orderType == 'allDay' ? 'pastOrder' : 'subscriptionOrder';
        this.hideTabs = true
        this.tabSelected = param.params.orderType == 'allDay' ? 'Past Orders' : 'Meal Subscription Orders'
        this.router.navigate([`/my-account/orders/${route}`])
      }

    })
    // this.router.navigate(['/my-account/orders/pastOrder'])
  }

  navigateToOrders(type: any) {
    this.tabSelected = type.label
    console.log(type.routeUrl)
    this.router.navigate([`/my-account/orders/${type.routeUrl}`])
    // this.router.navigate(''type.routeUrl)
  }

  goToPage(type: any) {
    this.tabSelected = type.label;
    this.hideTabs = true;
    this.router.navigate([`/my-account/orders/${type.routeUrl}`])
  }

  goToOrders() {
    this.hideTabs = !this.hideTabs
    this.router.navigate(['/my-account/orders'])
  }

}
