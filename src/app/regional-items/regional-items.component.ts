import { regionList } from './../../config/favcuisinelist.config';
import { categorylist } from './../../config/categorylist.config';
import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { environment } from './../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regional-items',
  templateUrl: 'regional-items.component.html',
  styleUrls: ['./regional-items.component.scss'],
})
export class RegionalItemsComponent implements OnInit {
  @ViewChild('scrollableContent', { read: ElementRef }) public scrollableContent!: ElementRef<any>;
  regionalList = regionList;
  imageUrl = environment.imageUrl;
  categorylist = categorylist;
  rightDisabled: boolean = false;
  leftDisabled: boolean = false;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  lookForRegional(region: string){
    console.log(region)
    // this.mixpanelservice.track('cuisine',{regional: region});
    this.router.navigate(['/kitchenSearch'], { queryParams: {category: 'region', text: region} });
  }

  scrollLeft(){
    console.log(this.scrollableContent.nativeElement.scrollLeft)
    this.scrollableContent.nativeElement.scrollTo({ left: (this.scrollableContent.nativeElement.scrollLeft + 500), behavior: 'smooth' });
  }

  scrollRight(){
    console.log(this.scrollableContent.nativeElement.scrollLeft)
    this.scrollableContent.nativeElement.scrollTo({ left: (this.scrollableContent.nativeElement.scrollLeft - 500), behavior: 'smooth' });
  }
  
}
