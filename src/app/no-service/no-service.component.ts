import { Component } from "@angular/core";
import { SendDataToComponent } from "src/service/sendDataToComponent";

@Component({
    selector: 'app-no-service',
    templateUrl: 'no-service.component.html',
    styleUrls: ['./no-service.component.scss'],
  })
  export class NoServiceComponent{
    
    constructor(private sendDataToComponent:SendDataToComponent){}

    editLocation(){
      // this.navCtrl.navigateForward(['/myAddress']);
    }

    changeLocation() {
      this.sendDataToComponent.publish('TOGGLE_MAP_OFFCANVAS', true);
    }
  }
