import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-kitchen-menu-popup',
  templateUrl: './kitchen-menu-popup.component.html',
  styleUrls: ['./kitchen-menu-popup.component.scss']
})
export class KitchenMenuPopupComponent implements OnInit {
  @Input() groupList:any;
  @Output() selectedGroup:EventEmitter<any> = new EventEmitter<any>()

  constructor() { }
  ngOnInit(): void {
    console.log(this.groupList)
  }

  // dismiss(back: any, groupName?: any) {

  // }
  selectGroup(group: any) {
    this.selectedGroup.emit(group)
    // this.dismiss(true, group.groupName);
  }

}
