import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.scss']
})
export class ScrollTopComponent{

@Output() scroll:EventEmitter<boolean> = new EventEmitter<boolean>();

scrollToTop(){
  this.scroll.emit(true)
}

}
