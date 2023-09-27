import { Injectable } from '@angular/core';
import { ApiMainService } from './apiService/api-main.service';
import { LocalStorageService } from './local-storage.service';
import { RuntimeStorageService } from './runtime-storage.service';

@Injectable({
    providedIn: 'root'
})
export class UtilityService {    
    constructor(private localStorageService: LocalStorageService,private apiMainService: ApiMainService,
        private runtimeStorageService: RuntimeStorageService){}

    configureCurrentLocation(address:any){
        if(address.lat && address.lng){
          address.latlng = {lat:address.lat,lng:address.lng}
        }      
        const selectedAddress = {
          tagLocation: address.tagLocation ? address.tagLocation : undefined,
          geolocation: address.geolocation ? address.geolocation : address.latlng,
          address: address.address ? address.address : undefined,
          location: address.location,
          landmark: address.landmark ? address.landmark : undefined,
          _id: address._id ? address._id : undefined
        };
        this.localStorageService.setCacheData('CURRENT_LOCATION',selectedAddress);
        //removing cache data
        this.runtimeStorageService.resetMatchingKeysCacheDate('FIND_KITCHEN_');
        this.runtimeStorageService.resetMatchingKeysCacheDate('NEAREST_KITCHEN_');
        this.runtimeStorageService.resetMatchingKeysCacheDate('LOOK_UP');
        this.runtimeStorageService.resetMatchingKeysCacheDate('CATEGORY_NEAR_ITEM_');
        this.runtimeStorageService.resetMatchingKeysCacheDate('SEARCH_NEAR_KITCHEN_');
        this.runtimeStorageService.resetMatchingKeysCacheDate('SEARCH_NEAR_MEAL_');
        this.runtimeStorageService.resetMatchingKeysCacheDate('SEARCH_NEAR_USER_');
        this.runtimeStorageService.resetMatchingKeysCacheDate('USER_SEARCH_');
        this.runtimeStorageService.resetMatchingKeysCacheDate('CATEGORY_SEARCH_');
        this.runtimeStorageService.resetMatchingKeysCacheDate('KITCHEN_DISTANCE_PROFILE_');
      }

      async getMealStdEndTime(){
        try{
          let ORDER_MIN_END_TIME_FINAL:any;
          let ORDER_MAX_END_TIME_FINAL:any;
          let ALLDAY_ORDER_START_TIME_FINAL:any;
          let ALLDAY_ORDER_END_TIME_FINAL:any;
          let cardDim= false;
          let allDayMissed = false;
          let allDayUpcoming = false;
          const stdTimeVariables:any = await this.apiMainService.getVariables(['ORDER_MIN_END_TIME','ORDER_MAX_END_TIME',
          'MEALAWE_INFLATE_PERCENTAGE','ALLDAY_ORDER_START_TIME','ALLDAY_ORDER_END_TIME','SPECIAL_INFLATE_PERCENTAGE',
          'ADV_INFLATE_PERCENTAGE','SUB_INFLATE_PERCENTAGE'],'STD_END_TIME');
          if(stdTimeVariables){
            if( stdTimeVariables.ORDER_MIN_END_TIME){
              let ORDER_MIN_END_TIME = stdTimeVariables.ORDER_MIN_END_TIME;
              const  stdarr = ORDER_MIN_END_TIME.split(':');
              const stdHour = stdarr[0];
              const stdMin = stdarr[1];
              const stdDate = new Date ();
              stdDate.setHours(stdHour-2);
              stdDate.setMinutes(stdMin);
              ORDER_MIN_END_TIME_FINAL =  stdDate;
            } 
            if( stdTimeVariables.ORDER_MAX_END_TIME){
              let ORDER_MAX_END_TIME = stdTimeVariables.ORDER_MAX_END_TIME;
              const  stdarr = ORDER_MAX_END_TIME.split(':');
              const stdHour = stdarr[0];
              const stdMin = stdarr[1];
              const stdDate = new Date ();
              stdDate.setHours(stdHour);
              stdDate.setMinutes(stdMin);
              ORDER_MAX_END_TIME_FINAL =  stdDate;
            }
            const currentTime = new Date();
            if(currentTime.getTime() < ORDER_MIN_END_TIME_FINAL.getTime() || currentTime.getTime() > ORDER_MAX_END_TIME_FINAL.getTime()){
              cardDim= true;
            }else{
              cardDim= false;
            }
            this.runtimeStorageService.setCacheData('DIM_KITCHEN_CARD',cardDim);
            if( stdTimeVariables.MEALAWE_INFLATE_PERCENTAGE){
              let inflatePercentage = stdTimeVariables.MEALAWE_INFLATE_PERCENTAGE;
              inflatePercentage = inflatePercentage ? inflatePercentage : 0;
              this.runtimeStorageService.setCacheData('MEALAWE_INFLATE_PERCENTAGE',inflatePercentage);
            }
            if( stdTimeVariables.ALLDAY_ORDER_START_TIME){
              let ALLDAY_ORDER_START_TIME = stdTimeVariables.ALLDAY_ORDER_START_TIME;
              const  stdarr = ALLDAY_ORDER_START_TIME.split(':');
              const stdHour = stdarr[0];
              const stdMin = stdarr[1];
              const stdDate = new Date ();
              stdDate.setHours(stdHour);
              stdDate.setMinutes(stdMin);
              ALLDAY_ORDER_START_TIME_FINAL =  stdDate;
              this.runtimeStorageService.setCacheData('ALLDAY_ORDER_START_TIME',stdDate);
            } 
            if( stdTimeVariables.ALLDAY_ORDER_END_TIME){
              let ALLDAY_ORDER_END_TIME = stdTimeVariables.ALLDAY_ORDER_END_TIME;
              const  stdarr = ALLDAY_ORDER_END_TIME.split(':');
              const stdHour = stdarr[0];
              const stdMin = stdarr[1];
              const stdDate = new Date ();
              stdDate.setHours(stdHour);
              stdDate.setMinutes(stdMin);
              ALLDAY_ORDER_END_TIME_FINAL =  stdDate;
              this.runtimeStorageService.setCacheData('ALLDAY_ORDER_END_TIME',stdDate);
            }
            if(currentTime.getTime() < ALLDAY_ORDER_START_TIME_FINAL.getTime() || 
                currentTime.getTime() > ALLDAY_ORDER_END_TIME_FINAL.getTime()){
                if(currentTime.getTime() < ALLDAY_ORDER_START_TIME_FINAL.getTime() && 
                  ALLDAY_ORDER_START_TIME_FINAL.getTime() - currentTime.getTime() <= 1000 * 60 * 60 * 2){
                    allDayMissed = false;
                    allDayUpcoming = true;
                }else{
                  allDayMissed= true;
                  allDayUpcoming = false
                }          
            }else{
              allDayMissed = false;
              allDayUpcoming = false;
            }
            if( stdTimeVariables.SPECIAL_INFLATE_PERCENTAGE){
              let specialInflatePercentage = stdTimeVariables.SPECIAL_INFLATE_PERCENTAGE;
              specialInflatePercentage = specialInflatePercentage ? specialInflatePercentage : 0;
              this.runtimeStorageService.setCacheData('SPECIAL_INFLATE_PERCENTAGE',specialInflatePercentage);
            }  
            if( stdTimeVariables.ADV_INFLATE_PERCENTAGE){
              let inflatePercentage = stdTimeVariables.ADV_INFLATE_PERCENTAGE;
              inflatePercentage = inflatePercentage ? inflatePercentage : 0;
              this.runtimeStorageService.setCacheData('ADV_INFLATE_PERCENTAGE',inflatePercentage);
            }
            if( stdTimeVariables.SUB_INFLATE_PERCENTAGE){
              let inflatePercentage = stdTimeVariables.SUB_INFLATE_PERCENTAGE;
              inflatePercentage = inflatePercentage ? inflatePercentage : 0;
              this.runtimeStorageService.setCacheData('SUB_INFLATE_PERCENTAGE',inflatePercentage);
            } 
               
            this.runtimeStorageService.setCacheData('ALL_DAY_MISSED',allDayMissed);
            this.runtimeStorageService.setCacheData('ALL_DAY_COMING_NEXT',allDayUpcoming);
          }
        }catch(error){
          console.log('Error while feching config variable ', error);
        }
      }

      checkOrderingTiming(startTime:string,endTime:string){
        const orderEndTime = endTime.split(':');  
        let orderEndHour = parseInt(orderEndTime[0]);
        let orderEndMin = parseInt(orderEndTime[1]);
        let endTimeDate = new Date();
        endTimeDate.setHours(orderEndHour);
        endTimeDate.setMinutes(orderEndMin);

        const orderStartTime = startTime.split(':');  
        let orderStartHour = parseInt(orderStartTime[0]);
        let orderStartMin = parseInt(orderStartTime[1]);
        let startTimeDate = new Date();
        startTimeDate.setHours(orderStartHour);
        startTimeDate.setMinutes(orderStartMin);

        const currentTime = new Date();
        if(currentTime.getTime() < startTimeDate.getTime() || currentTime.getTime() > endTimeDate.getTime()){
          return false;
        }else{
          return true;
        }

      }
}