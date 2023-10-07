import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartManagementService } from 'src/service/cart-management.service';
import { ToasterService } from '../toaster/toaster.service';
import { environment } from 'src/environments/environment';
import { RuntimeStorageService } from 'src/service/runtime-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addon-popup',
  templateUrl: './addon-popup.component.html',
  styleUrls: ['./addon-popup.component.scss']
})
export class AddonPopupComponent implements OnInit {
  @Input() addOns: any;
  @Output() closeModal:EventEmitter<any> = new EventEmitter<any>()
  imageUrl = environment.imageUrl;
  inflatePercentage = 0;

  constructor(private cartManagementService: CartManagementService, private router:Router, private runtimeStorageService:RuntimeStorageService, private toasterService: ToasterService) { }

  ngOnInit(): void {
    const inflatePercentage = this.runtimeStorageService.getCacheData('MEALAWE_INFLATE_PERCENTAGE');
    console.log(this.addOns.addOnList)
    if (inflatePercentage) {
      this.inflatePercentage = inflatePercentage;
    }
    if (this.addOns.addOnList) {
      this.addOns.addOnList = [...this.addOns.addOnList].map((addon: any) => {
        let mealawePrice = addon.addOnPrice + Math.ceil((addon.addOnPrice * this.inflatePercentage) / 100);
        const reminderPrice = mealawePrice % 5;
        mealawePrice = mealawePrice - reminderPrice;
        if (reminderPrice > 2.5) {
          mealawePrice += 5;
        }
        addon.mealawePrice = mealawePrice;
        addon = this.cartManagementService.checkIfAddonIsAdded(addon);
        return addon;
      })
    }
  }

  addToCart(addon: any) {
    if (this.cartManagementService.validateTotalItemCount()) {
      this.toasterService.error(114);
      return;
    }
    addon = this.cartManagementService.addAddonToCart(addon);
    addon.count = 1;
  }

  increaseCount(addon: any) {
    if (this.cartManagementService.validateTotalItemCount()) {
      this.toasterService.error(114);
      return;
    }
    addon.count++;
    this.cartManagementService.udpateAddonToCart(addon);
  }
  decreaseCount(addon: any) {
    addon.count--;
    this.cartManagementService.udpateAddonToCart(addon);
  }
  goToCart() {
    this.closeModal.emit()
    this.router.navigate(['/cart'])
    // this.dismiss(true);
    //this.navCntrl.navigateForward('/tabs/tabCart');
  }

  dismiss() {
    this.closeModal.emit()
  }

}
