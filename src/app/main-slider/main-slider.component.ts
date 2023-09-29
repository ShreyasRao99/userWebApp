import { Component, OnInit, Input } from '@angular/core';
import { environment } from './../../environments/environment';
// import { mainBannerList } from 'src/config/banners.config';

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.scss']
})
export class MainSliderComponent implements OnInit {
  @Input() bannerList:any
  imageUrl = environment.imageUrl;
  // bannerList:any = mainBannerList;
  ngOnInit(): void {
    
  }

}
