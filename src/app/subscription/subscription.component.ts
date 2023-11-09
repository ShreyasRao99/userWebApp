import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { GoogleMapService } from 'src/service/google-map.service';
import { LocalStorageService } from 'src/service/local-storage.service';
import { RuntimeStorageService } from 'src/service/runtime-storage.service';
import { UserProfileService } from 'src/service/user-profile.service';
import { ToasterService } from '../toaster/toaster.service';
import { ApiMainService } from 'src/service/apiService/api-main.service';
import { CartManagementService } from 'src/service/cart-management.service';
import { environment } from 'src/environments/environment';
import { SendDataToComponent } from 'src/service/sendDataToComponent';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {
  @ViewChild('scrollableContent', { read: ElementRef }) public scrollableContent!: ElementRef<any>;
  @HostListener("window:scroll", [])
  onScroll(): void {
    if((window.innerHeight + window.scrollY) >= document.body.offsetHeight * 0.5){
      this.windowScrolled = true
    }
    else{
      this.windowScrolled = false
    }
  }
  windowScrolled = false;
  imageUrl = environment.imageUrl;
  packageCategory:any;
  cartPackageCategory:any; 
  packageCategoryList:any[] = [];
  subCategoryGroupList:any[] = [];
  filteredSubCategoryGroupList:any[]=[];
  packageCategoryQuery:any;
  packageSubCategoryQuery:any;
  showSlider:boolean = false;
  selectedPackage: any;
  cartObj: any;

  constructor(private runtimeStorageService:RuntimeStorageService, private router:Router, private sendDataToComponent:SendDataToComponent, private cartManagementService:CartManagementService, private apiMainService:ApiMainService, private toasterService:ToasterService, private googleMapService:GoogleMapService, private userProfileService:UserProfileService, private localStorageService:LocalStorageService) { }

  subBannerList: any = [
    { "imageUrl": "assets/subslides/slide1.jpg" },
    { "imageUrl": "assets/subslides/slide2.jpg" },
    { "imageUrl": "assets/subslides/slide3.jpg" },
    { "imageUrl": "assets/subslides/slide4.jpg" },
    { "imageUrl": "assets/subslides/slide5.jpg" },
    { "imageUrl": "assets/subslides/slide6.jpg" },
    { "imageUrl": "assets/subslides/slide7.jpg" }
  ]

  ngOnInit(): void {
    const cacheDate = this.runtimeStorageService.getCacheData('SUBSCRIPTION_LOOKED');
      if(cacheDate){
        this.packageCategoryQuery = cacheDate.packageCategory;
        this.packageSubCategoryQuery = cacheDate.packageSubCategory;  
        this.runtimeStorageService.resetCacheData('SUBSCRIPTION_LOOKED');
    } 
    this.subscribeEvents()
    this.checkServicability();
  }

  subscribeEvents(){
    this.sendDataToComponent.subscribe('UPDATE_CART_SUBSCRIPTION', (cartObj) => {
      if (cartObj){
        this.cartObj = {...cartObj};
      }       
    });
  }

  async checkServicability(){
    try{
      const currentStorageLocation = this.localStorageService.getCacheData('CURRENT_LOCATION');
      if(currentStorageLocation){
        const formatedAddess = this.userProfileService.getSavedAddress(currentStorageLocation);
        const customerLocation = {...formatedAddess};
        const custerList:any = await this.googleMapService.getClusterName(customerLocation.geolocation);
        if(custerList && custerList.length > 0){
          this.getMealPackageListCluster(custerList);
        }else{
          this.toasterService.error(200);
        }
      }
      
    }catch(error){
      console.log('error while fetching cluster list ', error);
    } 
  }

  async getMealPackageListCluster(custerList:any){
    try{
      const mealPackage = await this.apiMainService.getMealPackageListCluster({custerList});
      if(mealPackage && mealPackage.length > 0){ 
        this.showSlider = true;
        const subCategoryObj:any = {};
        const subCategoryList = [];
        [...mealPackage].forEach((element:any,index:number) => {  
          element.count = element.count ? element.count : 0;
          element.mealType = 'subscription';
          element.readmore = false;
          if(this.packageCategoryList.indexOf(element.packageCategory) === -1){
            this.packageCategoryList.push(element.packageCategory);
          }
          if(index === 0){
            this.selectedPackage = element._id;
          }
          element.subPackageInfo = `${element.packageInfo.substring(0,70)}...`;
          if(subCategoryObj[element.packageSubCategory]){
            subCategoryObj[element.packageSubCategory].push(element);
          }else{
            subCategoryObj[element.packageSubCategory] = [];
            subCategoryObj[element.packageSubCategory].push(element);
          }
        });
        for(let prop in subCategoryObj){
          subCategoryList.push({
            subCategory: prop,
            mealList: subCategoryObj[prop]
          });
        }
        this.subCategoryGroupList = subCategoryList;
        this.filteredSubCategoryGroupList = subCategoryList;      
        this.updateCartAndPackage();
        this.checkSelectedPackageCategory()
      } 
    }catch(error){
      console.log('getMealPackageList error',error);
    }
  }

  updateCartAndPackage(){
    const cartObj = this.cartManagementService.getCart();        
    if (cartObj){
      this.cartObj = {...cartObj};
    }
    this.cartPackageCategory = undefined;
    if(this.packageCategoryQuery){
      this.cartPackageCategory = this.packageCategoryQuery;      
      this.subCategoryGroupList.forEach(group => {       
        group.mealList.forEach((item:any) => {
          if(group.subCategory === this.packageSubCategoryQuery && item.packageCategory === this.cartPackageCategory){
            this.selectedPackage = item._id; 
            this.packageSubCategoryQuery = undefined;                             
          }
        });
      });  
    }
    console.log(this.subCategoryGroupList)
    console.log(this.cartObj.itemList)
    this.cartObj.itemList.forEach((element:any) => {
      this.subCategoryGroupList.forEach(group => {
        group.mealList.forEach((item:any) => {
          if(element._id === item._id){
            item.count = element.count;
            if(!this.packageCategoryQuery){
              this.selectedPackage = item._id; 
              this.cartPackageCategory = item.packageCategory; 
            }                                          
          }
        });
      });            
    });
    this.packageCategoryQuery = undefined;
  }

  checkSelectedPackageCategory(){    
    if(this.cartPackageCategory){
      this.selectPackageCategory(this.cartPackageCategory);
    }else{
       if(this.packageCategoryList && this.packageCategoryList.length > 0){
          this.selectPackageCategory(this.packageCategoryList[0]);
        }
    }
  }

  selectPackageCategory(packageCategory:any){
    console.log('selectPackageCategory ',packageCategory);
    this.packageCategory = packageCategory;
    this.filteredSubCategoryGroupList = [];
    let selectedGrp:any, selectedPackge;
    this.subCategoryGroupList.forEach((group,index) => {
      const mealList:any[] = [];      
      group.mealList.forEach((item:any) => {
        if(packageCategory === item.packageCategory){
          mealList.push(item);            
        }
        if(this.selectedPackage === item._id){
          selectedGrp = item.packageSubCategory;
          selectedPackge = item.packageCategory;
        }
      });
      if(mealList.length > 0){
        this.filteredSubCategoryGroupList.push({
          subCategory: group.subCategory,
          mealList,
          closediv: true
        });
      }          
    });
    this.filteredSubCategoryGroupList.forEach((group,index) => {         
      if(index === 0){
        group.closediv = false;
      }else{
        group.closediv = true;
      }       
    });
    if(selectedPackge === packageCategory){
      this.filteredSubCategoryGroupList.forEach((group,index) => {         
        if(selectedGrp === group.subCategory){
          group.closediv = false;
        }else{
          group.closediv = true;
        }       
      });
    } 
    if(this.packageSubCategoryQuery){
      this.filteredSubCategoryGroupList.forEach((group,index) => {         
        if(this.packageSubCategoryQuery === group.subCategory){
          group.closediv = false;
        }else{
          group.closediv = true;
        }       
      }); 
      this.packageSubCategoryQuery = undefined;
    }  
  }

  async addToCart(pacakge:any){    
    const updatedItem = await this.cartManagementService.addItemToCart(pacakge,'mealawe Kitchen', 'abcd1233456789', 'subscription', {});
    this.cartManagementService.updateSubscribeOrder({
      subscriptionDays: pacakge.days,
      multiDateAllowed: pacakge.multiDateAllowed,
      lunchSubscription : true,
      dinnerSubscription: false,
      subscriptionDates: []
    })
    if(updatedItem){
      pacakge = updatedItem;
      this.resetOtherPackage(updatedItem);   
    }  
    this.updateCartAndPackage();
  }
  resetOtherPackage(pacakge:any){
    this.subCategoryGroupList.forEach(group => {
      group.mealList.forEach((element:any) => {
        if(element._id !== pacakge._id){
          element.count = 0;
        }
      });
    });
  }

  getTotalPrice(){
    let price = 0;     
    if(this.cartObj.orderType === 'subscription'){
      this.cartObj.itemList.forEach((ele: any) => {
        const packagePrice = ele.packagePrice ? ele.packagePrice : 0;
        price += packagePrice * ele.count;
        let discount = ele.discount ? ele.discount : 0;;
        price -= discount
      });
    }else{
      this.cartObj.itemList.forEach((ele: any) => {
        const itemPrice = ele.mealawePrice ? ele.mealawePrice : ele.itemPrice;
        price += itemPrice * ele.count;
      });
      this.cartObj.addOns.forEach((ele: any) => {
          const addOnPrice = ele.mealawePrice ? ele.mealawePrice : ele.addOnPrice;
          price += addOnPrice * ele.count;
      });
    }
    
    return price;
  }

  goToMainCart(){
    this.router.navigate(['/cart'])      
  }


  increaseCount(pacakge:any){ 
    pacakge.count++;
    this.cartManagementService.updateItemToCart(pacakge);
    this.updateCartAndPackage();
  }

  decreaseCount(pacakge:any){
    pacakge.count--;
    this.cartManagementService.updateItemToCart(pacakge);
    this.updateCartAndPackage();
  }

  scrollLeft(){
    console.log(this.scrollableContent.nativeElement.scrollLeft)
    this.scrollableContent.nativeElement.scrollTo({ left: (this.scrollableContent.nativeElement.scrollLeft + 500), behavior: 'smooth' });
  }

  scrollRight(){
    console.log(this.scrollableContent.nativeElement.scrollLeft)
    this.scrollableContent.nativeElement.scrollTo({ left: (this.scrollableContent.nativeElement.scrollLeft - 500), behavior: 'smooth' });
  }

  scrollToTop(event:any){
    console.log(event)
    if(event){
      window.scrollTo(0, 0);
    }
  }

}
