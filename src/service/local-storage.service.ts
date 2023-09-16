import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
  })
  export class LocalStorageService {

    private cacheObj = localStorage;

    checkItTimeIsValid(dataSetTime: number){
        const timeDiff = dataSetTime - (new Date()).getTime();
        if(timeDiff > 0){
            return true;
        }else{
            return false;
        }
    }

    getCacheData(key: string): any{
        const data:any = this.cacheObj.getItem(key);
        if(data){
            const localdata = JSON.parse(data)
            if ('data' in localdata){
                const cacheStorageModel:CacheStorageModel = JSON.parse(data);
                if(!cacheStorageModel.dataSetTime || this.checkItTimeIsValid(cacheStorageModel.dataSetTime)){
                    return cacheStorageModel.data;
                } else {
                    return null;
                }
            }else{
                return localdata; 
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
        this.cacheObj.setItem(key, JSON.stringify(cacheStorageModel));
    }

    resetCacheData(key: string): void{
        this.cacheObj.removeItem(key);
    }
    resetAllCacheData(): void{
        this.cacheObj.clear();
    }
    insertNewDataInArray(key: string, data: any, limit?: number){
        const existing = this.getCacheData(key);
        if (existing){
            if (existing.indexOf(data) < 0){
                if (limit){
                    if (existing.length === limit){
                        existing.pop();
                    }
                    existing.unshift(data);
                    this.setCacheData(key, existing);
                }else{
                    existing.push(data);
                    this.setCacheData(key, existing);
                }
            }
        }else{
            this.setCacheData(key, [data]);
        }
    }
    removeDataFromArray(key: string, data: any){
        const existing = this.getCacheData(key);
        if (existing){
            const index = existing.indexOf(data);
            if (index >= 0){
                existing.splice(index, 1);
                this.setCacheData(key, existing);
            }
        }
    }
  }

  class CacheStorageModel{
    data:any;
    dataSetTime!: number | null;
  }
