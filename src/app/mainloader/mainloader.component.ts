import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LoaderstatusService } from './loaderstatus.service';

@Component({
  selector: 'app-mainloader',
  templateUrl: 'mainloader.component.html',
  styleUrls: ['./mainloader.component.scss']
})
export class MainloaderComponent implements OnInit {
  isLoaderShowing: boolean;
  loadingCount: number;
  constructor(private loadingStaus: LoaderstatusService,private chgDetRef: ChangeDetectorRef) {    
    this.isLoaderShowing = false;
    this.loadingCount = 0;    
  }

  ngOnInit() {
    this.loadingStaus.loadingStatusSubject.subscribe((isLoaderShowing) => {
      if (this.loadingCount > 0 || isLoaderShowing) {
        this.loadingCount = isLoaderShowing ? ++this.loadingCount : --this.loadingCount;
      }
      this.isLoaderShowing = !this.loadingCount ? false : true;
      try{
        this.chgDetRef.detectChanges();
      }catch(error){
        console.log('error inisde MainloaderComponent chgdet ',error);
      }      
    });
  }
}
