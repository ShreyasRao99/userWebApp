import { LocalStorageService } from 'src/service/local-storage.service';
import { Injectable } from '@angular/core';
import { ApiMainService } from './apiService/api-main.service';

@Injectable({
    providedIn: 'root'
})
export class FavouriteManagementService {
    userDBFavKithenList:any[] = [];
    changesHappened = false;
    constructor(private localStorageService: LocalStorageService,
                private apiMainService: ApiMainService ){}

    async getUserFavKitchenList(){
        try{
            const userProfile = this.localStorageService.getCacheData('USER_PROFILE'); 
            const favKitchenListObj = await this.apiMainService.getFavKitchenList(userProfile._id);
            if(favKitchenListObj && favKitchenListObj.favKitchens){
                this.userDBFavKithenList = favKitchenListObj.favKitchens;
                this.userDBFavKithenList.forEach(ele =>{
                    this.localStorageService.setCacheData('FAV_KITCHEN_'+ele.cluster, ele.kitchenIds);
                })
            }
        }catch(e){
            console.log('error while fetching fav kitchen',e);
        }       
    }
    async setFavKitchenList(){
        let clusters = this.localStorageService.getCacheData('USER_CLUSTERS');
        if(clusters && clusters[0] && this.changesHappened){
            try{
                const userCluster = clusters[0];
                let clusterPresent = false;
                this.userDBFavKithenList.forEach(ele =>{
                    if(ele.cluster === userCluster){
                        clusterPresent = true;
                    }
                    const savedList = this.localStorageService.getCacheData('FAV_KITCHEN_'+ele.cluster);
                    if(savedList){
                        ele.kitchenIds = savedList;
                    } 
                });
                if(!clusterPresent){
                    const savedList = this.localStorageService.getCacheData('FAV_KITCHEN_'+userCluster);
                    if(savedList){
                        this.userDBFavKithenList.push({
                            cluster: userCluster,
                            kitchenIds: savedList
                        });
                    }                    
                }
                const userProfile = this.localStorageService.getCacheData('USER_PROFILE');  
                if(userProfile && userProfile._id){
                    const payload = {customerId: userProfile._id, 
                        favKitchens: this.userDBFavKithenList};
                    const favKitchenListObj = await this.apiMainService.setFavKitchenList(payload);
                    if(favKitchenListObj && favKitchenListObj.favKitchens){
                        this.userDBFavKithenList = favKitchenListObj.favKitchens;
                    }
                    this.changesHappened = false;
                }               
                
            }catch(e){
                console.log('error while setting fav kitchen',e);
            }
        }
       
    }

    getFavKitchenList(){
        let clusters = this.localStorageService.getCacheData('USER_CLUSTERS');
        if(clusters && clusters[0]){
            const userCluster = clusters[0]
            const favkitchens = this.localStorageService.getCacheData('FAV_KITCHEN_'+userCluster);
            return favkitchens;
        }else{
            return [];
        }
    }
    addfavourites(kitchenId: any){
        let clusters = this.localStorageService.getCacheData('USER_CLUSTERS');
        if(clusters && clusters[0]){
            this.changesHappened = true;
            const userCluster = clusters[0]
            this.localStorageService.insertNewDataInArray('FAV_KITCHEN_'+userCluster, kitchenId);
        }
        
    }
    removefavourites(kitchenId: any){
        let clusters = this.localStorageService.getCacheData('USER_CLUSTERS');
        if(clusters && clusters[0]){
            this.changesHappened = true;
            const userCluster = clusters[0]
            this.localStorageService.removeDataFromArray('FAV_KITCHEN_'+userCluster, kitchenId);
        }
    }
    isFavourites(kitchenId: any){
        let clusters = this.localStorageService.getCacheData('USER_CLUSTERS');
        if(clusters && clusters[0]){
            const userCluster = clusters[0]
            const favkitchens = this.localStorageService.getCacheData('FAV_KITCHEN_'+userCluster);
            let isfavourites = false;
            if (favkitchens && favkitchens.length > 0){
                if (favkitchens.indexOf(kitchenId) >= 0){
                    isfavourites = true;
                }
            }
            return isfavourites;
        }else{
            return false;
        }
     
    }
}
