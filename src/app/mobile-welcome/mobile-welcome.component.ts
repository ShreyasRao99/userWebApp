import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mobile-welcome',
  templateUrl: './mobile-welcome.component.html',
  styleUrls: ['./mobile-welcome.component.scss']
})
export class MobileWelcomeComponent implements OnInit {
  @ViewChild('swiper') swiperRef!: ElementRef;
  @Output() goToLogin:EventEmitter<any> = new EventEmitter<any>()
  sliderCount = 0;
  swiperEl: any;
  sliderInterval: any;
  orderTypes = [{ text: 'Ghar Ka Khana', subtext: 'Enjoy homemade food from nearby family kitchens' },
  { text: 'Advance Order', subtext: 'Book piping hot food in advance, even two days prior' },
  { text: 'Subscribe Order', subtext: 'Why order daily, when you can SUBSCRIBE for a month!' },]

  ngOnInit(): void {
    this.swiperEl = document.querySelector('swiper-container');
    const swiperParams = {
      slidesPerView: 1,
      on: {
        init() {
        },
      },
    };
    Object.assign(this.swiperEl, swiperParams);
  }

  gotoMobileRegistry(){
    this.goToLogin.emit()
  }

  slideChange(event:any){
    this.sliderCount = event.detail[0].activeIndex;
    // console.log(this.sliderCount)
  }

}
