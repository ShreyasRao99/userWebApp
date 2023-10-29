import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiMainService } from 'src/service/apiService/api-main.service';
import { LocalStorageService } from 'src/service/local-storage.service';
import { RuntimeStorageService } from 'src/service/runtime-storage.service';
import { UserSearchService } from 'src/service/user-search.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @ViewChild('filterModal')filterModal:any;
  recentSearches = [];
  searchText!: any;
  dishSearchResult:any[] = [];
  kitchenSearchResult:any[] = [];
  filteredDishSearchResult:any[] = [];
  filteredKitchenSearchResult:any[] = [];
  selectedSearch!: any;
  searchCounter: any;
  searchCompleted = false;
  lookSearchList:any[] = [];
  showGobutton = false;
  filterObj: any;
  noLookup = false;
  filterApplied = false;
  pageNumber = 1;
  paginationOver = false;
  showloader = false;
  lookupSearchCounter:any;
  lookupTypeCount = 0;
  form:any
  modalReference: any;
  filterProps:any = { };

  constructor(private localStorageService:LocalStorageService, private modalService: NgbModal, private fb:FormBuilder, private router:Router, private runtimeStorageService:RuntimeStorageService, private userSearchService:UserSearchService, private apiMainService:ApiMainService){}

  ngOnInit(): void {
    this.resetSearch();
    this.form = this.fb.group({
      search:['']
    })
    this.form.controls.search.valueChanges.subscribe((res:any)=>{
      if(res){
        this.filterlookupSearch(res)
      }
    })
  }

  async searchApiCall(searchText: string, noLookup?: boolean){     
    this.searchText = searchText;
    if(noLookup){
      setTimeout(()=>{
        this.lookSearchList = [];
        this.showGobutton = false;
      },500);
    }  
    this.dishSearchResult = [];
    this.kitchenSearchResult = [];
    this.filteredDishSearchResult = [];
    this.filteredKitchenSearchResult = [];
    this.pageNumber = 1;
    this.paginationOver = false; 
    this.showloader = true; 
    this.filterObj = undefined;
    this.filterApplied = false;
    this.userNearSearch(searchText);
  }

  async userNearSearch(searchText:any){
    if(searchText){
      try{
        // this.mixpanelservice.track("Search Value", {text: this.searchText});
        let clusters = this.localStorageService.getCacheData('USER_CLUSTERS');
        console.log(clusters)
        clusters = clusters? clusters: [];
        const currentLocation = this.localStorageService.getCacheData('CURRENT_LOCATION');
        this.searchCompleted = false;      
        const searchResult:any = await this.apiMainService.userNearSearch(searchText,this.pageNumber,currentLocation.geolocation,{clusters});
        const dishSearchResult = this.userSearchService.combineDishResults(searchResult.todaysMenuList,searchResult.kitchenMenuList);        
        const kitchenSearchResult:any = await this.userSearchService.getKitchenDistance(searchResult.kitchenList);
        if((dishSearchResult && dishSearchResult.length > 0) || (kitchenSearchResult && kitchenSearchResult.length > 0)){
          const sortedDishSearchResult = this.userSearchService.initialSort(dishSearchResult, searchText);
          this.dishSearchResult = [...this.dishSearchResult, ...sortedDishSearchResult];
          this.filteredDishSearchResult = [...this.dishSearchResult];
          this.kitchenSearchResult = [...this.kitchenSearchResult,...kitchenSearchResult];
          this.filteredKitchenSearchResult = [...this.kitchenSearchResult];
          if(!this.selectedSearch){
            this.selectedSearch = this.dishSearchResult.length > 0  ? 'dish' : 'kitchen';
          }
        }else{
          this.paginationOver = true;   
          this.showloader = false;        
        }    
                         
        this.localStorageService.insertNewDataInArray('USER_SEARCH', searchText, 5)
        this.searchCompleted = true;
        this.lookSearchList = [];
        this.showGobutton = false;
      }catch(e){
        console.log('Error while searching ', e);
      }
    }
  }

  setSelectedSearch(type: string){
    this.selectedSearch = type;
  }

  async showFilters(){
    this.modalReference = this.modalService.open(this.filterModal, { ariaLabelledBy: 'modal-basic-title', size: 'md', windowClass: 'modal-dialog-centered' });
    this.filterProps = {data: this.filterObj, type:1}
    // const popover = await this.popoverController.create({
    //   component: SearchFiltersComponent,
    //   cssClass: 'my-popover-class',
    //   event: ev,
    //   componentProps: {data: this.filterObj},
    //   translucent: true
    // });
    // await popover.present();
    // const  {data}  = await popover.onDidDismiss();
    // if(data){
    //   this.filterObj = data;
    //   const values = Object.values(this.filterObj);
    //       if(values.indexOf(true)>-1){
    //         this.filterApplied = true;
    //         this.showloader = false; 
    //       }else{
    //         this.filterApplied = false;
    //   }
    //   this.filteredDishSearchResult = this.userSearchService.filterSearchResult(this.dishSearchResult, data);
    //   this.filteredKitchenSearchResult = this.userSearchService.filterSearchResult(this.kitchenSearchResult, data)
    // }
  }

  checkFilters(data:any){
    this.modalReference.close()
    console.log(data)
    if(data.filterObj){
      this.filterObj = data.filterObj;
      const values = Object.values(this.filterObj);
      if(values.indexOf(true)>-1){
        this.filterApplied = true;
      }else{
        this.filterApplied = false;
      }
      this.filteredDishSearchResult = this.userSearchService.filterSearchResult(this.dishSearchResult, data.filterObj);
      this.filteredKitchenSearchResult = this.userSearchService.filterSearchResult(this.kitchenSearchResult, data.filterObj)
    }
  }

  async goTokitchen(kitchenId:any, orderType:any, itemName:any, serveDaily:any){
    try{
      const kitchen = await this.apiMainService.getKitchenPartner(kitchenId);
      const kitechenlist:any = await this.userSearchService.getKitchenDistance([kitchen]);
      this.runtimeStorageService.setCacheData('KITCHEN_SELECTED', kitechenlist[0]);
      this.runtimeStorageService.setCacheData('KITCHEN_ITEM_SELECTED', itemName);
      if(serveDaily){
        this.router.navigate(['/kitchenInside/allDay/'+kitchenId]);
      }else{
        this.router.navigate(['/kitchenInside/'+orderType+'/'+kitchenId]);
      }
    }catch(e){
      console.log('Error while searching kitchen', e);
    }    
  }

  filterlookupSearch($event:any){
    console.log($event)
    const searchText = $event;
    if(searchText){
      this.lookupTypeCount++;
      this.showGobutton = true;
      clearTimeout(this.lookupSearchCounter);
      this.lookupSearchCounter = setTimeout(()=>{
        if(this.lookupTypeCount > 1){
          this.lookSearchList = this.userSearchService.filterInLookupSearch(searchText); 
          console.log(this.lookSearchList)
          this.lookupTypeCount = 0;
        }        
      },1000);
    }else{
      this.lookSearchList = [];
      this.showGobutton = false;
    }
  }

  resetSearch(){
    this.dishSearchResult = [];
    this.kitchenSearchResult = [];
    this.filteredDishSearchResult = [];
    this.filteredKitchenSearchResult = [];
    this.searchCompleted = false;
    this.searchText = '';
    this.showGobutton = false;
    this.lookSearchList = [];
    this.filterObj = undefined;
    this.pageNumber = 1;
    this.paginationOver = false;
    this.selectedSearch = undefined;
    this.filterApplied = false;
    const recentSearches = this.localStorageService.getCacheData('USER_SEARCH');
    if(recentSearches){
      this.recentSearches = recentSearches;
    }
  }

  goBack(){
    this.router.navigate(['/home'])
  }

}
