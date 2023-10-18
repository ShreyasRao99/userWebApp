import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { categorylist } from './../../config/categorylist.config';
import { LocalStorageService } from 'src/service/local-storage.service';
import { ApiMainService } from 'src/service/apiService/api-main.service';
import { ApiConfigService } from 'src/service/apiService/api-config.service';
import { UserSearchService } from 'src/service/user-search.service';
import { RuntimeStorageService } from 'src/service/runtime-storage.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-category-search',
  templateUrl: './category-search.component.html',
  styleUrls: ['./category-search.component.scss']
})
export class CategorySearchComponent implements OnInit {
  @ViewChild('filterModal') filterModal: any;
  category: any;
  categoryItem: any = {};
  dishSearchResult: any = [];
  filteredList: any = [];
  searchText:any = '';
  filterObj: any = {};
  filterApplied = false;
  pageNumber = 1;
  paginationOver = false;
  scrollStartedOnce = false;
  showloader = false;
  showComponentPage = true;
  modalReference: any;
  filterProps: any;

  constructor(private activatedRoute: ActivatedRoute, private modalService:NgbModal, private router:Router, private runtimeStorageService:RuntimeStorageService, private userSearchService:UserSearchService, private apiConfigService:ApiConfigService, private localStorageService:LocalStorageService, private apiMainService:ApiMainService) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      this.category = params.category
      this.checkCategoryItem(this.category);
    })
  }

  checkCategoryItem(category: string) {
    categorylist.forEach(ele => {
      if (ele.category === category) {
        this.categoryItem = ele;
        this.dishSearchResult = [];
        this.filteredList = [];
        this.pageNumber = 1;
        this.paginationOver = false;
        this.searchForKitchen(category);
      }
    });
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

  async searchForKitchen(category: string){
    try{
      let clusters = this.localStorageService.getCacheData('USER_CLUSTERS');
      const currentLocation = this.localStorageService.getCacheData('CURRENT_LOCATION');
      clusters = clusters? clusters: [];
      let searchResult:any;
      searchResult = await this.apiMainService.categoryNearItems(category,this.pageNumber,currentLocation.geolocation,{clusters});        
      if(searchResult && searchResult.todaysMenuList && searchResult.kitchenMenuList){
        if (typeof Worker !== 'undefined' && false) {
          const worker = new Worker('./../app.worker', { type: 'module' });
          worker.onmessage = ( {data} ) => {
            this.combineApiResult(data);
          };
          const workerObj = {todaysMenuList: searchResult.todaysMenuList,kitchenMenuList: searchResult.kitchenMenuList};
          worker.postMessage(workerObj);
        } else {
          const combinedSearchResult = this.userSearchService.combineDishResults(searchResult.todaysMenuList,searchResult.kitchenMenuList);
          this.combineApiResult(combinedSearchResult);
        }
                 
      }        
    }catch (e){
      console.log('error while searching kithcen for ', category, e);
    }
  }

  combineApiResult(combinedSearchResult:any){      
    if(combinedSearchResult && combinedSearchResult.length > 0){
      this.dishSearchResult = [...this.dishSearchResult, ...combinedSearchResult];
      this.filteredList = [...this.dishSearchResult].map(e => e);
    }else{
      this.paginationOver = true;
      this.showloader = false;
    } 
  }

  async showFilters(){
    this.modalReference = this.modalService.open(this.filterModal, { ariaLabelledBy: 'modal-basic-title', size: 'md', windowClass: 'addonsModel' });
    this.filterProps = {
      data: this.filterObj, type: 2
    }
    // const modal = await this.modalController.create({
    //   component: KitchenFiltersComponent,
    //   cssClass: 'xtrashort-filter-modal-design',
    //   componentProps: {data: this.filterObj, type:2},
    //   backdropDismiss: true,
    //   breakpoints: [0,1],
    //   initialBreakpoint: 1,
    //   handle: false
    // });
    // modal.onDidDismiss().then((event: any) => {
    //   const data = event.data;
    //   if (data && data.back){
    //     this.filterObj = data.filterObj;    
    //     const values = Object.values(this.filterObj);
    //     if(values.indexOf(true)>-1){
    //       this.filterApplied = true;
    //       this.showloader = false;
    //     }else{
    //       this.filterApplied = false;
    //     }
    //     const filteredList = this.userSearchService.filterSearchResult(this.dishSearchResult, data.filterObj);
    //     this.filteredList = filteredList;
    //   }
    // });
    // return await modal.present();
  }

  checkFilters(data: any) {
    console.log(data)
    this.modalReference.close()
    if (data.filterObj) {
      this.filterObj = data.filterObj;
      const values = Object.values(this.filterObj);
      this.filterApplied = true;
      if (values.indexOf(true) > -1) {
        this.showloader = false;
      } else {
        this.filterApplied = false;
      }
      const filteredList = this.userSearchService.filterSearchResult(this.dishSearchResult, data.filterObj);
      this.filteredList = filteredList;
    }
  }

  goback(){

  }

}
