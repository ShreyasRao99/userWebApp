import { Component, OnDestroy, OnInit, ViewChild, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiMainService } from 'src/service/apiService/api-main.service';
import { CartManagementService } from 'src/service/cart-management.service';
import { FavouriteManagementService } from 'src/service/favourite-management.service';
import { GoogleMapService } from 'src/service/google-map.service';
import { LocalStorageService } from 'src/service/local-storage.service';
import { RuntimeStorageService } from 'src/service/runtime-storage.service';
import { SendDataToComponent } from 'src/service/sendDataToComponent';
import { UserSearchService } from 'src/service/user-search.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-kitchen-inside',
  templateUrl: './kitchen-inside.component.html',
  styleUrls: ['./kitchen-inside.component.scss']
})
export class KitchenInsideComponent implements OnInit, OnDestroy {
  @ViewChild("menuModal") menuModal: any;
  @ViewChild("addonsModal") addonsModal: any;
  @ViewChild("filterModal") filterModal: any;
  @HostListener("window:scroll", [])
  onScroll(): void {
    if((window.innerHeight + window.scrollY) >= document.body.offsetHeight * 0.3){
      this.windowScrolled = true
    }
    else{
      this.windowScrolled = false
    }
  }
  windowScrolled = false;
  kitchen: any = {};
  favKitchen = false;
  noTodaysMenu = false;
  menuCreatedForNextDay = false;
  orderType: any = 'advance';
  dailyMenuArr: any = [];
  allDayMenuArr: any = [];
  allDayETA = new Date();
  advanceMenuList: any = [];
  filteredAdvanceMenuList: any = [];
  filteredAllDayMenuList: any = [];
  filterComboList: any = [];
  addOnsList: any = [];
  distance: any;
  deliveryTime: any;
  offerText: any[] = [];
  filterObj: any = {};
  itemTypeFilter: any = { Veg: false, NonVeg: false, Jain: false }
  searchText = '';
  filterApplied = false;
  specialityList: any[] = [];
  cardDim = false;
  comboList: any[] = [];
  subscriptionObj = {
    subscriptionDays: 10,
    subscriptionTime: 'Lunch',
    subscriptionDates: []
  }
  subStartDate: any;
  dateRange!: { from: string; to: string; };
  type!: 'string';
  inflatePercentage = 0;
  ALLDAY_ORDER_START_TIME: any;
  ALLDAY_ORDER_END_TIME: any;
  allDayMissed = false;
  allDayUpcoming = false;
  breakfastSlot = '';
  lunchSlot = '';
  dinnerSlot = '';
  subscriptionOfferText = [];
  kitchenNotFound = false;
  noAlldayMenu = false;
  groupMenuList = [];
  textSearchCounter: any;
  componentProps: any;
  modalReference: any;
  addonComponentProps: any;
  filterProps:any= {};
  // groupList: any[]=[];

  constructor(private activatedRoute: ActivatedRoute, private router:Router, private modalService: NgbModal, private userSearchService: UserSearchService, private favouriteManagementService: FavouriteManagementService, private cartManagementService: CartManagementService, private sendDataToComponent: SendDataToComponent, private localStorageService: LocalStorageService, private googleMapService: GoogleMapService, private apiMainService: ApiMainService, private runtimeStorageService: RuntimeStorageService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.orderType = params.get('orderType');
      const kitchenId = params.get('kitchenId');
      if (kitchenId) {
        this.loadKitchenInfo(kitchenId)
      } else {
        this.kitchen = this.runtimeStorageService.getCacheData('KITCHEN_SELECTED');
        this.initialize();
      }

    });
  }

  async loadKitchenInfo(kitchenId: any) {
    let kitchen: any = await this.apiMainService.getKitchenPartner(kitchenId);
    if (kitchen && kitchen._id) {
      this.kitchenNotFound = false;
      const currentLocation = this.localStorageService.getCacheData('CURRENT_LOCATION');
      if (currentLocation) {
        const currentGeoLocation = currentLocation.geolocation;
        // kitchen = await this.googleMapService.getKitchenDistance(kitchen,currentGeoLocation,true);
        const kitchenList = await this.googleMapService.getKitchenGoogleDistance([kitchen], currentGeoLocation);
        kitchen = kitchenList[0];
      }

      this.kitchen = kitchen;
      this.initialize();
    } else {
      this.kitchenNotFound = true;
    }
  }

  changeItemFilter(prop: string) {
    this.itemTypeFilter[prop] = !this.itemTypeFilter[prop];
    this.filterObj = { ...this.filterObj, ...this.itemTypeFilter };
    this.filterAllList();
  }

  filterAllList() {
    this.filteredAdvanceMenuList = this.userSearchService.filterSearchGroupResult(this.advanceMenuList, this.filterObj, this.searchText);
    this.filteredAllDayMenuList = this.userSearchService.filterSearchGroupResult(this.allDayMenuArr, this.filterObj, this.searchText);
    this.filterComboList = this.userSearchService.filterSubscriptionGroupResult(this.comboList, this.filterObj, this.subscriptionObj.subscriptionTime, this.searchText);
  }

  searchTextInList(){
    if(this.searchText){
      clearTimeout(this.textSearchCounter);
      this.textSearchCounter = setTimeout(()=>{
        this.filterAllList();
      },1000);
    }
  }

  selectOrderType(type: string) {
    this.orderType = type;
    if (type === 'subscription') {
      this.filterComboList = this.userSearchService.filterSubscriptionGroupResult(this.comboList, this.filterObj,
        this.subscriptionObj.subscriptionTime, this.searchText);
    }
  }

  initialize() {
    this.cardDim = this.runtimeStorageService.getCacheData('DIM_KITCHEN_CARD');
    this.ALLDAY_ORDER_START_TIME = this.runtimeStorageService.getCacheData('ALLDAY_ORDER_START_TIME');
    this.ALLDAY_ORDER_END_TIME = this.runtimeStorageService.getCacheData('ALLDAY_ORDER_END_TIME');
    this.allDayMissed = this.runtimeStorageService.getCacheData('ALL_DAY_MISSED');
    this.allDayUpcoming = this.runtimeStorageService.getCacheData('ALL_DAY_COMING_NEXT');
    // const inflatePercentage = this.runtimeStorageService.getCacheData('MEALAWE_INFLATE_PERCENTAGE');     
    // const advInflatePercentage = this.runtimeStorageService.getCacheData('ADV_INFLATE_PERCENTAGE');  
    // const subInflatePercentage = this.runtimeStorageService.getCacheData('SUB_INFLATE_PERCENTAGE');   
    // if(inflatePercentage && this.orderType==='allDay'){
    //   this.inflatePercentage = inflatePercentage;
    // }else if(advInflatePercentage && this.orderType==='advance'){
    //   this.inflatePercentage = advInflatePercentage;
    // }else if(subInflatePercentage && this.orderType==='subscription'){
    //   this.inflatePercentage = subInflatePercentage;
    // }
    this.distance = this.kitchen.distance;
    this.deliveryTime = this.kitchen.deliveryTime;
    if (this.kitchen.kitchenOpened) {
      this.getKitchenDetails();
    }
    this.subscribeEvents();
    this.getSubscriptionInfo();
    this.updateCart();
    this.favKitchen = this.favouriteManagementService.isFavourites(this.kitchen._id);
    this.checkSpeciality();
  }

  checkSpeciality() {
    this.specialityList = this.kitchen.speciality.split(',').map((e: any) => e.trim());
    if (this.kitchen.mainSpeciality) {
      const index = this.specialityList.indexOf(this.kitchen.mainSpeciality);
      if (index > -1) {
        this.specialityList.splice(index, 1);
      }
      this.specialityList.unshift(this.kitchen.mainSpeciality);
    }
  }

  getKitchenDetails() {
    this.advanceMenuList = [];
    this.filteredAdvanceMenuList = [];
    this.filteredAllDayMenuList = [];
    this.allDayMenuArr = [];
    this.dailyMenuArr = [
      { mealName: 'Breakfast', mealType: 'Breakfast', lineColor: '#e62841', itemList: [] },
      { mealName: 'Lunch', mealType: 'Lunch', lineColor: '#15a292', itemList: [] },
      { mealName: 'High Tea', mealType: 'HighTea', lineColor: '#ffb300', itemList: [] },
      { mealName: 'Dinner', mealType: 'Dinner', lineColor: '#e62841', itemList: [] }
    ];
    this.updateServingTime(this.kitchen);
    this.checkForOffers();
    Promise.all([
      this.fetchTodaysMenu(this.kitchen),
      this.fetchKitchenMenu(this.kitchen)
    ]).then(res => {
      console.log('getKitchenDetails res', res);
      //this.chgDetRef.detectChanges();
    }).catch(error => {
      console.log('getKitchenDetails error ', error);
      //this.chgDetRef.detectChanges();
    })
  }

  updateServingTime(kitchen: any) {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    const currentMins = currentDate.getMinutes();
    kitchen.mealTiming.forEach((element: any) => {
      this.dailyMenuArr.forEach((ele: any) => {
        if (element.mealType === ele.mealType) {
          ele.acceptOrderFrom = new Date(element.acceptOrderFrom);
          ele.acceptOrderTill = new Date(element.acceptOrderTill);
          const fromHour = ele.acceptOrderFrom.getHours();
          const fromMins = ele.acceptOrderFrom.getMinutes();
          const tillHour = ele.acceptOrderTill.getHours();
          const tillMins = ele.acceptOrderTill.getMinutes();
          if (currentHour > tillHour || (currentHour === tillHour && currentMins > tillMins)) {
            ele.missed = true;
          } else if (currentHour < fromHour || (currentHour === fromHour && currentMins < fromMins)) {
            ele.comingnext = true;
          }
          const dunzoETA = this.deliveryTime; //mins
          const deliveryEta = new Date(ele.acceptOrderTill.getTime() + ((this.kitchen.preparationTime + dunzoETA) * 60 * 1000));
          if (currentHour < tillHour || (currentHour === tillHour && currentMins < tillMins)) {
            ele.deliveryEta = deliveryEta;
          }
          if (this.menuCreatedForNextDay) {
            ele.comingnext = true;
          }
        }
      });
    });
  }

  checkForOffers() {
    if (this.kitchen && this.kitchen.kitchenOpened && this.kitchen.discountOffer) {
      const discountOffer = this.kitchen.discountOffer;
      const todaysDate = (new Date()).getTime();
      const startDate = (new Date(discountOffer.startDate)).getTime();
      const expiryDate = (new Date(discountOffer.expiryDate)).getTime();
      if (todaysDate >= startDate && todaysDate <= expiryDate) {
        if (discountOffer.discountType === "percentage") {
          let couponHeader = `Upto ${discountOffer.discountValue}% OFF`;
          let subOfferText = '';
          if (discountOffer.minAmount) {
            const minAmount = discountOffer.minAmount + Math.ceil((discountOffer.minAmount * this.inflatePercentage) / 100);
            subOfferText = `on order amount more than ₹${minAmount}*`
          } else if (discountOffer.maxLimit) {
            const maxLimit = discountOffer.maxLimit + Math.floor((discountOffer.maxLimit * this.inflatePercentage) / 100);
            subOfferText = `upto amount ₹${maxLimit}*`;
          }
          if (discountOffer.minAmount && discountOffer.maxLimit) {
            const minAmount = discountOffer.minAmount + Math.ceil((discountOffer.minAmount * this.inflatePercentage) / 100);
            const maxLimit = discountOffer.maxLimit + Math.floor((discountOffer.maxLimit * this.inflatePercentage) / 100);
            couponHeader = `Upto ₹${maxLimit}`;
            subOfferText = `on order amount more than ₹${minAmount}*`
          }
          this.offerText = [{
            couponHeader,
            subheader: subOfferText,
            type: 'kitchenCoupon'
          }];
        } else if (discountOffer.discountType === "flat") {
          const minAmount = discountOffer.minAmount + Math.ceil((discountOffer.minAmount * this.inflatePercentage) / 100);
          this.offerText = [{
            couponHeader: `FLAT ${discountOffer.discountValue} OFF`,
            subheader: `on order amount more than ₹${minAmount}`,
            type: 'kitchenCoupon'
          }];;
        }
      }
    }
  }

  async fetchTodaysMenu(kitchen: any) {
    try {
      const todaysMenuList: any = await this.apiMainService.getTodaysMenu(kitchen._id);
      const nextDate = new Date();
      const menuCreatedFor = new Date(todaysMenuList.menuCreatedOn);
      this.menuCreatedForNextDay = false;
      nextDate.setDate(nextDate.getDate() + 1);
      if (nextDate.getDate() === menuCreatedFor.getDate()) {
        this.menuCreatedForNextDay = true;
      }
      if (todaysMenuList.itemList) {
        this.noTodaysMenu = true;
        this.dailyMenuArr.forEach((ele: any) => {
          ele.itemList = [];
        });
        todaysMenuList.itemList.forEach((element: any) => {
          this.dailyMenuArr.forEach((ele: any) => {
            if (element.mealType === ele.mealType) {
              ele.itemList.push(element);
              if (this.menuCreatedForNextDay) {
                ele.comingnext = true;
              }
            }
          });
        });
      }
      // this.chgDetRef.detectChanges();
    } catch (e) {
      console.log('error while fetching todays Menu');
    }
  }

  async showkitchenMenu() {
    try {
      let groupList: any = [];
      if (this.orderType === 'allDay') {
        groupList = this.filteredAllDayMenuList;
      } else if (this.orderType === 'advance') {
        groupList = this.filteredAdvanceMenuList;
      } else if (this.orderType === 'subscription') {
        groupList = this.filterComboList;
      }
      this.modalReference = this.modalService.open(this.menuModal, { ariaLabelledBy: 'modal-basic-title', size: 'xs', windowClass: 'menuModel' });
      this.componentProps = {
        'groupList': [...groupList].map((group: any) => {
          return { count: group.count, groupName: group.groupName }
        })
      }
      // const modal = await this.modalController.create({
      //   component: KitchenMenuPopUpComponent,
      //   cssClass: 'xtrashort-modal-design',
      //   componentProps: {
      //     'groupList': [...groupList].map((group:any)=>{
      //       return {count:group.count, groupName: group.groupName}
      //     })
      //   }
      // });
      // modal.onDidDismiss().then((event: any) => {
      //   const data = event.data;
      //   if (data && data.back){
      //     this.scrollToPoint(data.groupName);
      //   } 
      // });
      // return await modal.present();
    } catch (error) {
      console.log('error while showing menu ', error);
    }
  }

  scrollToPoint(groupName: any) {
    this.modalReference.close();
    console.log(groupName)
    try {
      const groupDiv = document.getElementById(groupName);
      groupDiv!.scrollIntoView();
    } catch (error) {
      console.log('error while scrollToPoint', error);
    }
  }

  async fetchKitchenMenu(kitchen: any) {
    try {
      let kitchenMenuListObj: any = await this.apiMainService.getkitchenMenu(kitchen._id);
      if (kitchenMenuListObj && kitchenMenuListObj.itemList && kitchenMenuListObj.itemList.length > 0) {
        const showSpecial = this.runtimeStorageService.getCacheData('KITCHEN_SHOW_SPECIAL');
        let specialTab = 'advance';
        const groupKitchenMenu: any = {};
        const finalGroupKitchenList = [];
        const searchedItem = this.runtimeStorageService.getCacheData('KITCHEN_ITEM_SELECTED');
        const sortedItemList = this.userSearchService.initialSort(kitchenMenuListObj.itemList, searchedItem);
        this.advanceMenuList = [];
        this.allDayMenuArr = [];
        this.comboList = [];
        sortedItemList.forEach((item: any) => {
          let groupName;
          if (item.groupCategory) {
            groupName = item.groupCategory;
          } else if (item.itemIsCombo) {
            groupName = 'Combo';
          } else {
            groupName = item.itemType;
          }
          if (groupKitchenMenu[groupName]) {
            groupKitchenMenu[groupName].count++;
            groupKitchenMenu[groupName].itemList.push(item);
          } else {
            groupKitchenMenu[groupName] = { groupName, count: 1, itemList: [item] }
          }
        });
        for (let prop in groupKitchenMenu) {
          finalGroupKitchenList.push({ ...groupKitchenMenu[prop] })
        }
        this.allDayMenuArr = [];
        finalGroupKitchenList.forEach(group => {
          const advItemList: any[] = [];
          const allDayItemList: any[] = [];
          const comboList: any[] = [];
          group.itemList.forEach((item: any) => {
            if (item.serveDaily) {
              allDayItemList.push({ ...item });
            }
            if (item.itemAvailable) {
              advItemList.push({ ...item });
              if (item.itemIsCombo || item.itemIsBreakfast) {
                comboList.push({ ...item });
              }
            }
          });
          if (advItemList && advItemList.length > 0) {
            this.advanceMenuList.push({
              groupName: group.groupName,
              count: advItemList.length,
              itemList: advItemList
            });
          }
          if (allDayItemList && allDayItemList.length > 0) {
            this.allDayMenuArr.push({
              groupName: group.groupName,
              count: allDayItemList.length,
              itemList: allDayItemList
            });
          }
          if (comboList && comboList.length > 0) {
            this.comboList.push({
              groupName: group.groupName,
              groupID: Math.floor((Math.random() * 1000) + 1),
              count: comboList.length,
              itemList: comboList
            });
          }

        });
        if (this.allDayMenuArr.length === 0) {
          if (this.orderType === 'allDay') {
            this.orderType = 'advance';
          }
          this.noAlldayMenu = true;
        } else {
          this.noAlldayMenu = false;
        }
        if (showSpecial) {
          this.orderType = specialTab;
        }
        this.filteredAdvanceMenuList = [...this.advanceMenuList];
        this.filteredAllDayMenuList = [...this.allDayMenuArr];
        // this.comboList = kitchenMenuListObj.itemList.filter(item => {
        //   return item.itemAvailable && (item.itemIsCombo || item.itemIsBreakfast);
        // });   
        this.filterComboList = [...this.comboList];
        const dunzoETA = this.deliveryTime; //mins
        const currentTime = new Date();
        this.allDayETA = new Date(currentTime.getTime() + ((this.kitchen.preparationTime + dunzoETA) * 60 * 1000));
        if (searchedItem) {
          this.runtimeStorageService.resetCacheData('KITCHEN_ITEM_SELECTED');
        }
      }
      if (kitchenMenuListObj && kitchenMenuListObj.addOnsList && kitchenMenuListObj.addOnsList.length > 0) {
        this.addOnsList = kitchenMenuListObj.addOnsList;
      }
    } catch (e) {
      console.log('error while fetching kitchen Menu');
    }
  }

  async showFilters() {
    this.modalReference = this.modalService.open(this.filterModal, { ariaLabelledBy: 'modal-basic-title', size: 'md', windowClass: 'modal-dialog-centered' });
    this.filterProps = {data: this.filterObj, type:3}
    console.log(this.filterObj)
    // try{
    //     const modal = await this.modalController.create({
    //       component: KitchenFiltersComponent,
    //       cssClass: 'xtramiddle-bottom-modal-design',
    //       componentProps: {data: this.filterObj, type:3},
    //       backdropDismiss: true,
    //       breakpoints: [0,1],
    //       initialBreakpoint: 1,
    //       handle: false
    //     });
    //     modal.onDidDismiss().then((event: any) => {
    //       const data = event.data;
    //       if (data && data.back){
    //         this.filterObj = data.filterObj
    //         const values = Object.values(this.filterObj);
    //         if(values.indexOf(true)>-1){
    //           this.filterApplied = true;
    //         }else{
    //           this.filterApplied = false;
    //         }
    //         this.filterAllList();
    //       }
    //     });
    //     return await modal.present();
    // }catch(error){
    //   console.log('error while launching modelcontroller ',error);
    // }
  }

  checkFilters(data:any){
    this.modalReference.close()
    this.filterObj = data.filterObj;
    const values = Object.values(this.filterObj);
    if(values.indexOf(true)>-1){
      this.filterApplied = true;
    }else{
      this.filterApplied = false;
    }
    this.filterAllList();
    console.log(data)
  }

  async addAddons() {
    const enabledAddOnsList = [...this.addOnsList].filter(e => e.addOnAvailable)
    if(enabledAddOnsList.length > 0){
      this.addonComponentProps = {'addOnList': [...this.addOnsList].map(e=>e)}
      this.modalReference = this.modalService.open(this.addonsModal, { ariaLabelledBy: 'modal-basic-title', size: 'md', windowClass: 'addonsModel' });
      // const modal = await this.modalController.create({
      //   component: AddOnPopupComponent,
      //   cssClass: 'short-modal-design',
      //   componentProps: {
      //     'addOnList': [...this.addOnsList].map(e=>e)
      //   }
      // });
      // modal.onDidDismiss().then((event: any) => {
      //   const data = event.data;
      //   if (data && data.back){
      //     this.navCntrl.navigateForward('/tabs/tabCart');
      //   } 
      // });
      // return await modal.present();
    }
    else{
      this.router.navigate(['/cart'])
    }      
  }

  closeModals(){
    this.modalReference.close()
  }

  subscribeEvents() {
    this.sendDataToComponent.subscribe('RELOAD_KITCHEN_INSIDE', (reload) => {
      try {
        if (reload) {
          if (reload.foreground) {
            // this.goTokitchen();
            this.loadKitchenInfo(this.kitchen._id);
          } else {
            this.advanceMenuList = [];
            this.filteredAdvanceMenuList = [];
            this.filteredAllDayMenuList = [];
            this.addOnsList = [];
          }
        }
      } catch (error) {
        console.log('error while reload ', error)
      }
    });
    this.sendDataToComponent.subscribe('UPDATE_KITCHEN_SUB', (cartObj) => {
      try {
        if (cartObj) {
          this.subscriptionObj = { ...cartObj.subscriptionObj };
        }
      } catch (error) {
        console.log('error while update kitchen subcription info ', error)
      }
    });
  }

  getSubscriptionInfo() {
    if (this.kitchen && this.kitchen.subscriptionTiming) {
      this.kitchen.subscriptionTiming.forEach((timing: any) => {
        if (timing.mealType === 'Breakfast') {
          this.breakfastSlot = timing.slot;
          this.kitchen.breakfastSlot = timing.slot;
        } else if (timing.mealType === 'Lunch') {
          this.lunchSlot = timing.slot;
          this.kitchen.lunchSlot = timing.slot;
        } else if (timing.mealType === 'Dinner') {
          this.dinnerSlot = timing.slot;
          this.kitchen.dinnerSlot = timing.slot;
        }
      });
    }
  }

  updateCart() {
    const cartObj = this.cartManagementService.getCart();
    if (cartObj && cartObj.orderType === 'subscription') {
      this.subscriptionObj = { ...cartObj.subscriptionObj };
    }
    this.cartManagementService.updateSubscribeOrder(this.subscriptionObj);
  }

  goback() {
    this.router.navigate(['/home'])
  }

  saveKitchenfav(){
    if (this.favKitchen){
      this.favouriteManagementService.addfavourites(this.kitchen._id);
    }else{
      this.favouriteManagementService.removefavourites(this.kitchen._id);
    }
  }

  scrollToTop(event:any){
    console.log(event)
    if(event){
      window.scrollTo(0, 0);
    }
  }

  backToHome(){
    this.router.navigate(['/home'])
  }

  ngOnDestroy(){
    this.saveKitchenfav();
    this.sendDataToComponent.unsubscribe('RELOAD_KITCHEN_SEARCH');
    this.sendDataToComponent.unsubscribe('UPDATE_KITCHEN_SUB');  
  }
}
