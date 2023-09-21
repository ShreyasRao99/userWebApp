import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-no-service',
    templateUrl: 'no-service.component.html',
    styleUrls: ['./no-service.component.scss'],
  })
  export class NoServiceComponent{
    @Output() changeMyLocation = new EventEmitter();
    constructor(){}

    editLocation(){
      // this.navCtrl.navigateForward(['/myAddress']);
    }

    changeLocation(){
      this.changeMyLocation.emit(true);
    }
  }
