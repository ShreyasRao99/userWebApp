import { categorylist } from './../../config/categorylist.config';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { environment } from './../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-items',
  templateUrl: 'category-items.component.html',
  styleUrls: ['./category-items.component.scss'],
})
export class CategoryItemsComponent implements OnInit {
  @ViewChild('scrollableContent', { read: ElementRef }) public scrollableContent!: ElementRef<any>;
  categorylist = categorylist;
  imageUrl = environment.imageUrl;
  rightDisabled: boolean = false;
  leftDisabled: boolean = false;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  lookForCategory(category: string){
    // this.mixpanelservice.track('food-category',{category: category})
    this.router.navigate(['/categorySearch'], { queryParams: {category} });
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
