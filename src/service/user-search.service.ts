import { Injectable } from '@angular/core';
import { ApiMainService } from './apiService/api-main.service';
import { GoogleMapService } from './google-map.service';
import { LocalStorageService } from './local-storage.service';


@Injectable({
    providedIn: 'root'
  })
  export class UserSearchService {
    lookupSearchResults:any = [];

    constructor(private apiMainService: ApiMainService,
        private localStorageService: LocalStorageService,
        private googleMapService: GoogleMapService){  
         this.getClusterList();        
    }

    async getClusterList(){
        const currentLocation = this.localStorageService.getCacheData('CURRENT_LOCATION');
        if(currentLocation){
            const currentGeoLocation = currentLocation.geolocation;
            const clusterList:any = await this.googleMapService.getClusterName(currentGeoLocation);
            if(clusterList && clusterList.length > 0){
                this.userlookupSearch(clusterList);
            }else{
                this.userlookupSearch([]);
            }        
        }
    }


    combineDishResults(todaysMenuList: any, kitchenMenuList: any){
        const nameKitchenList: string[] = [];
        let kmenuitemList: any[] = [];
        const tmenuitemList: any[] = [];
        let finalitemList = [];
        [...kitchenMenuList].forEach(kmenu => {
            kmenu.itemList.forEach((element: { kitchenName: any; kitchenId: any; distance: number; orderType: string; }) => {
                element.kitchenName = kmenu.kitchenName;
                element.kitchenId = kmenu.kitchenId;
                if(kmenu.distance){
                    element.distance =  Math.ceil(kmenu.distance/1000);
                }                
                element.orderType = 'advance';
                kmenuitemList.push(element)                
            });            
        });
        [...todaysMenuList].forEach(tmenu => {
            tmenu.itemList.forEach((element: { kitchenName: any; kitchenId: any; distance: number; orderType: string; itemName: any; }) => {
                element.kitchenName = tmenu.kitchenName;
                element.kitchenId = tmenu.kitchenId;
                if(tmenu.distance){
                    element.distance =  Math.ceil(tmenu.distance/1000);
                } 
                element.orderType = 'daily';
                if(nameKitchenList.indexOf(`${element.kitchenName}_${element.itemName}`) === -1){
                    tmenuitemList.push(element); 
                    nameKitchenList.push(`${element.kitchenName}_${element.itemName}`)
                }                               
            });            
        });
        kmenuitemList = kmenuitemList.filter(kItem => {
            let notFound = true;
            tmenuitemList.forEach(tItem => {
                if(kItem.kitchenId === tItem.kitchenId && kItem.itemName === tItem.itemName){
                    notFound = false;
                }
            });
            return notFound;
         });
         finalitemList = [...tmenuitemList, ...kmenuitemList];
         finalitemList.sort((a,b): number => {
            if(a.distance > b.distance){
                return 1;
            }else if(a.distance < b.distance){
                return -1
            }else{
                return 0;
            }
            
        });
        return finalitemList;
    }
    async userlookupSearch(clusters: any[]){
        try{
            this.lookupSearchResults = await this.apiMainService.lookup({clusters});
        }catch(e){
            console.log('error while fetching lookup search')
        }        
    }
    filterInLookupSearch(text: string){
        const filterResult = [...this.lookupSearchResults].filter(ele => {
            return ele.toLowerCase().indexOf(text.toLowerCase()) > -1 ? true : false;
        });
        return filterResult;
    }

    filterSearchResult(searchArr: any, filterObj: { level0: any; level1: any; level2: any; level3: any; Veg: any; NonVeg: any; Jain: any; rated4plus: any; bestseller: any; Bakery: any; Pickle: any; Snacks: any; Sweet: any; Barbecue: any; Spices: any; Combo: any; lowToHigh: any; highToLow: any; }){
        let filteredList;
        if(!filterObj.level0 && !filterObj.level1 && !filterObj.level2 && !filterObj.level3 &&
           !filterObj.Veg && !filterObj.NonVeg && !filterObj.Jain && !filterObj.rated4plus && !filterObj.bestseller &&
           !filterObj.Bakery && !filterObj.Pickle && !filterObj.Snacks && !filterObj.Sweet && !filterObj.Barbecue && !filterObj.Spices &&
           !filterObj.Combo){
            filteredList = [...searchArr]
        }else{
            filteredList = [...searchArr].filter(ele =>{
                let condition1 = false;
                let condition2 = false;
                let condition3 = false;
                let condition4 = false;
                if(!filterObj.Veg && !filterObj.NonVeg && !filterObj.Jain){
                    condition1 = true;
                }else if( (filterObj.Veg && (ele.itemType ==='Veg' || (ele.mealType && ele.mealType.indexOf('Veg')>-1 && ele.mealType.indexOf('NonVeg')===-1 )))
                    || (filterObj.NonVeg && (ele.itemType ==='NonVeg' || (ele.mealType && ele.mealType.indexOf('NonVeg')>-1)))
                    || (filterObj.Jain && (ele.itemType ==='Jain' || (ele.itemName && ele.itemName.indexOf('Jain')>-1) 
                        || (ele.mealType && ele.mealType.indexOf('Jain')>-1)))){
                        condition1 = true;
                }

                if(!filterObj.level0 && !filterObj.level1 && !filterObj.level2 && !filterObj.level3 ){
                    condition2 = true;
                }else if((filterObj.level0 && ele.spicyLevel === 0) || (filterObj.level1 && ele.spicyLevel === 1)
                    || (filterObj.level2 && ele.spicyLevel === 2) || (filterObj.level3 && ele.spicyLevel === 3)){
                        condition2 = true;
                }
                if(!filterObj.rated4plus && !filterObj.bestseller){
                    condition3 = true;
                }else if((filterObj.rated4plus && ele.rating > 4) || (filterObj.bestseller && ele.bestseller)){
                    condition3 = true;
                }
                if(!filterObj.Bakery && !filterObj.Pickle && !filterObj.Snacks && !filterObj.Sweet && !filterObj.Barbecue && !filterObj.Spices && !filterObj.Combo){
                    condition4 = true;
                }else if( (filterObj.Bakery &&  (ele.searchCategory && ele.searchCategory.indexOf('Bakery')>-1) )
                    || (filterObj.Pickle &&  (ele.searchCategory && ele.searchCategory.indexOf('Pickle')>-1) )
                    || (filterObj.Snacks &&  (ele.searchCategory && ele.searchCategory.indexOf('Snacks')>-1) )
                    || (filterObj.Sweet &&  (ele.searchCategory && ele.searchCategory.indexOf('Sweet')>-1) )
                    || (filterObj.Barbecue &&  (ele.searchCategory && ele.searchCategory.indexOf('Barbecue')>-1) )
                    || (filterObj.Spices &&  (ele.searchCategory && ele.searchCategory.indexOf('Spices')>-1) )
                    || (filterObj.Combo && ele.itemIsCombo) 
                ){
                    condition4 = true;
                }
                if(condition1 && condition2 && condition3 && condition4){
                    return true
                }else{
                    return false;
                }
            });
        }
        if(filterObj.lowToHigh){
            filteredList.sort((a,b): number => {
                if(a.itemPrice > b.itemPrice){
                    return 1;
                }else if(a.itemPrice < b.itemPrice){
                    return -1
                }else{
                    return 0;
                }
                
            });
        } 
        if(filterObj.highToLow){
            filteredList.sort((a,b): number => {
                if(a.itemPrice > b.itemPrice){
                    return -1;
                }else if(a.itemPrice < b.itemPrice){
                    return 1
                }else{
                    return 0;
                }
                
            });
        }
        return filteredList;

    }

    filterkitchenSearchResult(searchArr: any, filterObj: { Veg: any; NonVeg: any; Jain: any; rating: any; deliveryTime: any; }){
        let filteredList;
        if(!filterObj.Veg && !filterObj.NonVeg && !filterObj.Jain ){
            filteredList = [...searchArr]
        }else{
            filteredList = [...searchArr].filter(ele =>{
                if( (filterObj.Veg && (ele.itemType ==='Veg' || (ele.mealType && ele.mealType.indexOf('Veg')>-1 && ele.mealType.indexOf('NonVeg')===-1)))
                 || (filterObj.NonVeg && (ele.itemType ==='NonVeg' || (ele.mealType && ele.mealType.indexOf('NonVeg')>-1)))
                 || (filterObj.Jain && (ele.itemType ==='Jain' || (ele.mealType && ele.mealType.indexOf('Jain')>-1)))
                )
                {
                    return true
                }else{
                    return false;
                }
            });
        }
        if(filterObj.rating){
            filteredList.sort((a,b): number => {
                if(a.rating > b.rating){
                    return -1;
                }else if(a.rating < b.rating){
                    return 1
                }else{
                    return 0;
                }
                
            });
        }
        if(filterObj.deliveryTime){
            filteredList.sort((a,b): number => {
                if(a.distance > b.distance){
                    return 1;
                }else if(a.distance < b.distance){
                    return -1
                }else{
                    return 0;
                }                
            });
        }        
        return filteredList;
    }

    async getKitchenDistance(kitchenList: any){
        return new Promise(async (resolve,reject) =>{
            const currentLocation = this.localStorageService.getCacheData('CURRENT_LOCATION');
            const centerA = currentLocation.geolocation;
            // const promiseList = [];
            // kitchenList.forEach(ele => {
            //     promiseList.push(this.googleMapService.getKitchenDistance(ele, centerA, false));
            // });      
            kitchenList = await this.googleMapService.getKitchenGoogleDistance(kitchenList,centerA);      
            // Promise.all(promiseList).then(async (values) => {
            //     kitchenList = await this.googleMapService.getKitchenGoogleDistance(kitchenList,centerA);
                kitchenList.sort((a: { distance: number; },b: { distance: number; }): number => {
                    if(a.distance > b.distance){
                        return 1;
                    }else if(a.distance < b.distance){
                        return -1;
                    }else{
                        return 0;
                    }                
                });
                resolve(kitchenList);
            // }); 
        });               
    }

    initialSort(searchArr: any[], searchText: any){
        // searchArr.sort((a,b): number => {
        //     if( (a.itemAvailable === true && b.itemAvailable === true) ||
        //         (a.itemAvailable === false && b.itemAvailable === false) ){
        //         return 0;
        //     }else if(a.itemAvailable === true){
        //         return -1
        //     }else{
        //         return 1;
        //     }            
        // });
        searchArr.sort((a: { itemPrice: number; },b: { itemPrice: number; }): number => {
            if(a.itemPrice < b.itemPrice){
                return -1;
            }else if(a.itemPrice > b.itemPrice){
                return 1
            }else{
                return 0;
            }
            
        });
        if(searchText){
            searchArr.sort((a: { itemName: string | any[]; },b: { itemName: string | any[]; }): number => {
                if(a.itemName.indexOf(searchText)>-1){
                    return -1;
                }else if(b.itemName.indexOf(searchText)>-1){
                    return 1
                }else{
                    return 0;
                }
                
            });
        }                
        return searchArr;
    }

    filterItemsFilterResult(searchArr: any, filterObj: { Veg: any; NonVeg: any; Jain: any; }){
        let filteredList;
        if(!filterObj.Veg && !filterObj.NonVeg && !filterObj.Jain){
            filteredList = [...searchArr]
        }else{
            filteredList = [...searchArr].filter(ele =>{
                if( (filterObj.Veg && (ele.itemType ==='Veg' || (ele.mealType && ele.mealType.indexOf('Veg')>-1 && ele.mealType.indexOf('NonVeg')===-1)))
                 || (filterObj.NonVeg && (ele.itemType ==='NonVeg' || (ele.mealType && ele.mealType.indexOf('NonVeg')>-1)))
                 || (filterObj.Jain && (ele.itemType ==='Jain' || (ele.mealType && ele.mealType.indexOf('Jain')>-1)))
                )
                {
                    return true
                }else{
                    return false;
                }
            });
        }       
        return filteredList;
    }

    filterSearchGroupResult(searchArr: any[], filterObj: { level0: any; level1: any; level2: any; level3: any; Veg: any; NonVeg: any; Jain: any; rated4plus: any; bestseller: any; Bakery: any; Pickle: any; Snacks: any; Sweet: any; Barbecue: any; Spices: any; Combo: any; lowToHigh: any; highToLow: any; }, searchText: string){
        let filteredList: { groupName: any; count: any; itemList: any; }[] = [];
        if(searchText){
            searchText = searchText.toLowerCase();
        }
        if(!filterObj.level0 && !filterObj.level1 && !filterObj.level2 && !filterObj.level3 &&
           !filterObj.Veg && !filterObj.NonVeg && !filterObj.Jain && !filterObj.rated4plus && !filterObj.bestseller &&
           !filterObj.Bakery && !filterObj.Pickle && !filterObj.Snacks && !filterObj.Sweet && !filterObj.Barbecue && !filterObj.Spices &&
           !filterObj.Combo){
            searchArr.forEach((group: { itemList: any[]; groupName: any; }) =>{                
                const filteredItemList = group.itemList.filter((ele: { [x: string]: { toString: () => string; }; }) =>{
                    if(searchText){
                        if(ele['itemName'].toString().toLowerCase().indexOf(searchText) === -1){
                            return false;
                        }else{
                            return true;
                        }
                    }else{
                        return true;
                    }
                });
                if(filteredItemList.length > 0){
                    filteredList.push({groupName:group.groupName,count:filteredItemList.length,itemList:filteredItemList})
                }
            })
            
        }else{
            searchArr.forEach((group: { itemList: any[]; groupName: any; }) =>{                
                const filteredItemList = group.itemList.filter((ele: { [x: string]: { toString: () => string; }; itemType: string; mealType: string | string[]; itemName: string | string[]; spicyLevel: number; rating: number; bestseller: any; searchCategory: string | string[]; itemIsCombo: any; }) =>{
                    if(searchText){
                        if(ele['itemName'].toString().toLowerCase().indexOf(searchText) === -1){
                            return false;
                        }
                    }
                    let condition1 = false;
                    let condition2 = false;
                    let condition3 = false;
                    let condition4 = false;
                    if(!filterObj.Veg && !filterObj.NonVeg && !filterObj.Jain){
                        condition1 = true;
                    }else if( (filterObj.Veg && (ele.itemType ==='Veg' || (ele.mealType && ele.mealType.indexOf('Veg')>-1 && ele.mealType.indexOf('NonVeg')===-1 )))
                        || (filterObj.NonVeg && (ele.itemType ==='NonVeg' || (ele.mealType && ele.mealType.indexOf('NonVeg')>-1)))
                        || (filterObj.Jain && (ele.itemType ==='Jain' || (ele.itemName && ele.itemName.indexOf('Jain')>-1) 
                            || (ele.mealType && ele.mealType.indexOf('Jain')>-1)))){
                            condition1 = true;
                    }
    
                    if(!filterObj.level0 && !filterObj.level1 && !filterObj.level2 && !filterObj.level3 ){
                        condition2 = true;
                    }else if((filterObj.level0 && ele.spicyLevel === 0) || (filterObj.level1 && ele.spicyLevel === 1)
                        || (filterObj.level2 && ele.spicyLevel === 2) || (filterObj.level3 && ele.spicyLevel === 3)){
                            condition2 = true;
                    }
                    if(!filterObj.rated4plus && !filterObj.bestseller){
                        condition3 = true;
                    }else if((filterObj.rated4plus && ele.rating > 4) || (filterObj.bestseller && ele.bestseller)){
                        condition3 = true;
                    }
                    if(!filterObj.Bakery && !filterObj.Pickle && !filterObj.Snacks && !filterObj.Sweet && !filterObj.Barbecue && !filterObj.Spices && !filterObj.Combo){
                        condition4 = true;
                    }else if( (filterObj.Bakery &&  (ele.searchCategory && ele.searchCategory.indexOf('Bakery')>-1) )
                        || (filterObj.Pickle &&  (ele.searchCategory && ele.searchCategory.indexOf('Pickle')>-1) )
                        || (filterObj.Snacks &&  (ele.searchCategory && ele.searchCategory.indexOf('Snacks')>-1) )
                        || (filterObj.Sweet &&  (ele.searchCategory && ele.searchCategory.indexOf('Sweet')>-1) )
                        || (filterObj.Barbecue &&  (ele.searchCategory && ele.searchCategory.indexOf('Barbecue')>-1) )
                        || (filterObj.Spices &&  (ele.searchCategory && ele.searchCategory.indexOf('Spices')>-1) )
                        || (filterObj.Combo && ele.itemIsCombo) 
                    ){
                        condition4 = true;
                    }
                    if(condition1 && condition2 && condition3 && condition4){
                        return true
                    }else{
                        return false;
                    }
                });
                if(filteredItemList.length > 0){
                    filteredList.push({groupName:group.groupName,count:filteredItemList.length,itemList:filteredItemList})
                }
            });
            
        }
        if(filterObj.lowToHigh){
            filteredList.forEach(group =>{
                group.itemList.sort((a: { itemPrice: number; },b: { itemPrice: number; }): number => {
                    if(a.itemPrice > b.itemPrice){
                        return 1;
                    }else if(a.itemPrice < b.itemPrice){
                        return -1
                    }else{
                        return 0;
                    }
                    
                });
            });
        } 
        if(filterObj.highToLow){
            filteredList.forEach(group =>{
                group.itemList.sort((a: { itemPrice: number; },b: { itemPrice: number; }): number => {
                    if(a.itemPrice > b.itemPrice){
                        return -1;
                    }else if(a.itemPrice < b.itemPrice){
                        return 1
                    }else{
                        return 0;
                    }
                    
                });
            });
        }
        return filteredList;
    }

    filterSubscriptionGroupResult(searchArr: any,filterObj: any,mealType: string,searchText: string){
        if(searchText){
            searchText = searchText.toLowerCase();
        }
        const filteredList: { groupName: any; count: any; itemList: any; }[] = [];
        const newSearchArr = this.filterSearchGroupResult(searchArr,filterObj,searchText)
        newSearchArr.forEach(group =>{                
            const filteredItemList = group.itemList.filter((ele: { [x: string]: { toString: () => string; }; itemIsBreakfast: any; }) =>{     
                if(searchText){
                    if(ele['itemName'].toString().toLowerCase().indexOf(searchText) === -1){
                        return false;
                    }
                }           
                if(mealType === 'Breakfast'){
                    if(ele.itemIsBreakfast){
                        return true
                    }else{
                        return false;
                    }
                }else{
                    if(ele.itemIsBreakfast){
                        return false;
                    }else{
                        return true;
                    }
                }
            });
            if(filteredItemList.length > 0){
                filteredList.push({groupName:group.groupName,count:filteredItemList.length,itemList:filteredItemList})
            }
        });
        return filteredList;
    }

  }
