import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { regionalCuisinelist } from './../../config/regional.config';
import { SendDataToComponent } from 'src/service/sendDataToComponent';
import { LocalStorageService } from 'src/service/local-storage.service';
import { ApiMainService } from 'src/service/apiService/api-main.service';
import { UserSearchService } from 'src/service/user-search.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-kitchen-search',
  templateUrl: './kitchen-search.component.html',
  styleUrls: ['./kitchen-search.component.scss']
})
export class KitchenSearchComponent implements OnInit {
  @ViewChild('filterModal') filterModal: any;
  filterProps: any;
  modalReference: any;

  constructor(private activatedRoute: ActivatedRoute, private modalService: NgbModal, private userSearchService: UserSearchService, private apiMainService: ApiMainService, private localStorageService: LocalStorageService, private sendDataToComponent: SendDataToComponent) { }

  regionalItem: any = {};
  headerName: any = '';
  kitchenList: any = [];
  filteredList: any = [];
  showFilter = false;
  filterObj: any = {};
  filterApplied = false;
  text: any;
  category: any;
  pageNumber = 1;
  paginationOver = false;
  showloader = false;

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      this.text = params.text;
      this.category = params.category;
      this.checkRegionalItem(this.text, this.category);
    })
    this.subscribeEvents();
  }

  checkRegionalItem(text: string, category: string, name?: string) {
    regionalCuisinelist.forEach((ele: any) => {
      if (ele.name === text) {
        this.headerName = name ? name : ele.name;
        this.regionalItem = ele;
        this.kitchenList = [];
        this.filteredList = [];
        this.pageNumber = 1;
        this.paginationOver = false;
        this.searchForKitchen(text, category);
      }
    });
  }

  async searchForKitchen(text: string, category: string) {
    try {
      let clusters = this.localStorageService.getCacheData('USER_CLUSTERS');
      const currentLocation = this.localStorageService.getCacheData('CURRENT_LOCATION');
      clusters = clusters ? clusters : [];
      let kitchenList: any = [];
      if (text === 'advance') {
        kitchenList = await this.apiMainService.getNearestKitchen({ clusterList: clusters }, this.pageNumber, currentLocation.geolocation);
      }
      else if (category === 'mealTime' || category === 'special') {
        kitchenList = await this.apiMainService.searchNearkitchenFromMeal(text, this.pageNumber, currentLocation.geolocation, { clusters });
      } else {
        kitchenList = await this.apiMainService.searchNearkitchen(text, this.pageNumber, currentLocation.geolocation, { clusters });
      }
      if (kitchenList && kitchenList.length > 0) {
        const sortedkitchenList: any = await this.userSearchService.getKitchenDistance(kitchenList);
        this.showFilter = true;
        this.kitchenList = [...this.kitchenList, ...sortedkitchenList];
        this.filteredList = [...this.kitchenList];
      } else {
        this.paginationOver = true;
        this.showloader = false;
      }
    } catch (e) {
      console.log('error while searching kithcen for ', text, e);
    }
  }

  async showFilters() {
    this.modalReference = this.modalService.open(this.filterModal, { ariaLabelledBy: 'modal-basic-title', size: 'md', windowClass: 'addonsModel' });

    this.filterProps = {
      data: this.filterObj, type: 1
    }
    // const modal = await this.modalController.create({
    //   component: KitchenFiltersComponent,
    //   cssClass: 'xtrashort-filter-modal-design',
    //   componentProps: {data: this.filterObj, type:1},
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
    //       if(values.indexOf(true)>-1){
    //         this.filterApplied = true;
    //         this.showloader = false;
    //       }else{
    //         this.filterApplied = false;
    //       }     
    //     const filteredList = this.userSearchService.filterkitchenSearchResult(this.kitchenList, data.filterObj);
    //     this.filteredList = filteredList;
    //   }
    // });
    // return await modal.present();
  }

  checkFilters(data: any) {
    this.modalReference.close()
    console.log(data)
    if (data.filterObj) {
      this.filterObj = data.filterObj;
      const values = Object.values(this.filterObj);
      this.filterApplied = true;
      if (values.indexOf(true) > -1) {
        this.showloader = false;
      } else {
        this.filterApplied = false;
      }
      const filteredList = this.userSearchService.filterkitchenSearchResult(this.kitchenList, data.filterObj);
      this.filteredList = filteredList;
    }
  }

  subscribeEvents() {
    this.sendDataToComponent.subscribe('RELOAD_KITCHEN_SEARCH', (reload) => {
      try {
        if (reload) {
          this.kitchenList = [];
          this.filteredList = [];
          this.pageNumber = 1;
          this.paginationOver = false;
          this.searchForKitchen(this.text, this.category);
        }
      } catch (error) {
        console.log('error while reload ', error)
      }
    });
  }
}
