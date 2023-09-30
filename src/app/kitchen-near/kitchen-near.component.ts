import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-kitchen-near',
  templateUrl: './kitchen-near.component.html',
  styleUrls: ['./kitchen-near.component.scss']
})
export class KitchenNearComponent implements OnInit {
  imageUrl = environment.imageUrl;
  @Input() kitchenList: any = [];
  
  ngOnInit(){
    this.kitchenList = [...this.kitchenList].map(kitchen =>{
        this.checkSpeciality(kitchen);
        this.checkForOffers(kitchen);
        return kitchen;
      });
   } 

  checkSpeciality(kitchen:any){
    const specialityList = kitchen.speciality.split(',').map((e: string) => e.trim());
    if(kitchen.mainSpeciality){
      const index = specialityList.indexOf(kitchen.mainSpeciality);
      if(index > -1){
        specialityList.splice(index,1);
      }    
    }
    kitchen.specialityList = specialityList.join(', ');
  }

  checkForOffers(kitchen:any){
    if(kitchen && kitchen.kitchenOpened && kitchen.discountOffer){
      const discountOffer = kitchen.discountOffer;
      const todaysDate = (new Date()).getTime();
      const startDate = (new Date(discountOffer.startDate)).getTime();
      const expiryDate = (new Date(discountOffer.expiryDate)).getTime();
      if(todaysDate >= startDate && todaysDate <= expiryDate){
        if(discountOffer.discountType === "percentage"){          
          kitchen.offerText = `Upto ${discountOffer.discountValue}% OFF`;    
        }else if(discountOffer.discountType === "flat"){
          kitchen.offerText = `FLAT ${discountOffer.discountValue} OFF`;
        }
      }      
    }
  }

}
