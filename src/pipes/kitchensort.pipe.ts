import { PipeTransform, Pipe } from "@angular/core";

@Pipe({name: 'kitchensort'})
export class KitchenSortPipe implements PipeTransform {
    transform(kitchenList: any){
        if(!kitchenList) {return [];};
        const filterList:any = [];
        if(kitchenList.length > 0){
            kitchenList.sort((a: any, b: any) => {
                const timing1 = this.getlowestTime(a['mealTiming']);
                const timing2 = this.getlowestTime(b['mealTiming']);
                if ( timing1 < timing2 ) {
                  return 1;
                } else if (timing1 > timing2) {
                  return -1;
                } else {
                  return 0;
                }
              });
        }
        return kitchenList;
    }

    getlowestTime(mealTiming:any){
        const currentTime = (new Date()).getTime();
        let timedifference = 0;
        mealTiming.forEach((mealTime: any) => {
            const acceptOrderTill = new Date(mealTime.acceptOrderTill);
            const acceptTime = (new Date()).setHours(acceptOrderTill.getHours(),acceptOrderTill.getMinutes());
            if(acceptTime >= currentTime){
                const tempTimeDiff = acceptTime - currentTime;
                if(tempTimeDiff < timedifference || timedifference === 0 ){
                    timedifference = tempTimeDiff;
                }
            }
        });
        return timedifference;
    }
}