import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RuntimeStorageService {

  private cacheObj: any = {};

  checkItTimeIsValid(dataSetTime: number){
    const timeDiff = dataSetTime - (new Date()).getTime();
    if(timeDiff > 0){
        // console.log('checkItTimeIsValid true',timeDiff);
        return true;
    }else{
        // console.log('checkItTimeIsValid false',timeDiff);
        return false;
    }
}

  getCacheData(key: string): any{
    // const data = this.cacheObj[key];
    // return data ? data : null;
    const localdata = this.cacheObj[key];
    if(localdata){
        if(!localdata.dataSetTime || this.checkItTimeIsValid(localdata.dataSetTime)){
            return localdata.data;
        }else {
            return null;
        }
    }else{
        return null;
    }        
}


setCacheData(key: string, data: any, time?: number): void{        
    const cacheStorageModel = new CacheStorageModel();
    const currentTime:number = (new Date()).getTime();
    cacheStorageModel.data = data;
    cacheStorageModel.dataSetTime = time ? currentTime + time : null;
    this.cacheObj[key] = cacheStorageModel;
    // console.log('RuntimesetCacheDataStorageService',this.cacheObj);
}

resetAllCacheData(): void{
  this.cacheObj = {};
}

resetCacheData(key: string): void{
  delete this.cacheObj[key];
}

}

class CacheStorageModel{
  data:any;
  dataSetTime!:number | null
}
