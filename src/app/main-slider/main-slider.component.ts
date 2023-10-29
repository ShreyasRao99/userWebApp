import { Component, OnInit, Input } from '@angular/core';
import { environment } from './../../environments/environment';
import { Router } from '@angular/router';
import { RuntimeStorageService } from 'src/service/runtime-storage.service';



// import { mainBannerList } from 'src/config/banners.config';

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.scss']
})
export class MainSliderComponent implements OnInit {

  constructor(private router: Router, private runtimeStorageService: RuntimeStorageService) { }

  @Input() bannerList: any
  imageUrl = environment.imageUrl;

  ngOnInit(): void {
    const swiperEl: any = document.querySelector('swiper-container');
    const swiperParams = {
      slidesPerView: 3,
      spaceBetween: 10,
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

  gotoSubscription(banner: any) {
    if (banner.type === 'subscription') {
      this.runtimeStorageService.setCacheData('SUBSCRIPTION_LOOKED', { packageCategory: banner.packageCategory, packageSubCategory: banner.packageSubCategory });
      this.router.navigate(['/subscription']);
    } else if (banner.type === 'bulkOrder') {
      // this.navCtrl.navigateForward(['/bulkOrder']);
    }
  }
}
