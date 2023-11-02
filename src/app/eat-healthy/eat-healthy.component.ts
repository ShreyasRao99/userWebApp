import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eat-healthy',
  templateUrl: './eat-healthy.component.html',
  styleUrls: ['./eat-healthy.component.scss']
})
export class EatHealthyComponent implements OnInit {
  sliderCount: any = 0;

  ngOnInit(): void {
    const swiperEl: any = document.querySelector('swiper-container');
    const swiperParams = {
      slidesPerView: 3,
      spaceBetween: 10,
      // autoHeight:true,
      // direction:'vertical',
      breakpoints: {
        480:{
          slidesPerView: 1
        },
        640: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 3,
        },
      },
      on: {
        init() {

        },
      },
    };
    Object.assign(swiperEl, swiperParams);
  }

  slideChange(event:any){
    this.sliderCount = event.detail[0].activeIndex;
    // console.log(this.sliderCount)
  }

}
