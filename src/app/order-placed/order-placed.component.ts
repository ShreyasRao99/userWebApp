import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-order-placed',
  templateUrl: './order-placed.component.html',
  styleUrls: ['./order-placed.component.scss']
})
export class OrderPlacedComponent implements OnInit {

  constructor(private router:Router, private acivatedRoute:ActivatedRoute){}

  paymentSucess!:boolean
  
  ngOnInit(): void {
    this.acivatedRoute.queryParams.subscribe((res:any)=>{
      this.paymentSucess = res.success
    })
  }

  GoToOrders(){
    this.router.navigate(['/my-account/orders/pastOrder'])
  }

}
