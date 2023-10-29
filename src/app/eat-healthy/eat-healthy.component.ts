import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eat-healthy',
  templateUrl: './eat-healthy.component.html',
  styleUrls: ['./eat-healthy.component.scss']
})
export class EatHealthyComponent implements OnInit {

  ngOnInit(): void {
    const swiperEl: any = document.querySelector('swiper-container');
    const swiperParams = {
      slidesPerView: 3,
      spaceBetween: 10,
      direction:'vertical',
      breakpoints: {
        480:{
          slidesPerView: 1
        },
        640: {
          slidesPerView: 2,
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

}
