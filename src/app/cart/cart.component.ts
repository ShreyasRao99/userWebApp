import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CartManagementService } from 'src/service/cart-management.service';
import { orderStatusMapper } from 'src/config/order-status.config';
import { Router } from '@angular/router';
import { UtilityService } from 'src/service/utility.service';
import { RuntimeStorageService } from 'src/service/runtime-storage.service';
import { PaymentGatewayService } from 'src/service/payment-gateway.service';
import { ApiMainService } from 'src/service/apiService/api-main.service';
import { ConfirmationModalService } from '../confirmation-modal/confirmation-modal.service';
import { GoogleMapService } from 'src/service/google-map.service';
import { LocalStorageService } from 'src/service/local-storage.service';
import { UserProfileService } from 'src/service/user-profile.service';
import { SendDataToComponent } from 'src/service/sendDataToComponent';
import { AlertModalService } from '../alert-modal/alert-modal.service';
import { ToasterService } from '../toaster/toaster.service';
import { DatePipe } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
  @ViewChild('canvasAddress') canvasAddress!: ElementRef<HTMLElement>
  @ViewChild('voucherCanvas') voucherCanvas!: ElementRef<HTMLElement>
  @ViewChild('completeProfile') completeProfile!: ElementRef<HTMLElement>
  @ViewChild('closeProfile') closeProfile!: ElementRef<HTMLElement>
  @ViewChild("voucherContent") voucherContent: any;
  @ViewChild("lottieModal") lottieModal: any;
  imageUrl = environment.imageUrl;
  orderStatusMapper = orderStatusMapper;
  cartObj: any;
  totalAmt = 0;
  mealaweTotalAmt = 0;
  payAmt = 0;
  deliveryCharges = 0;
  taxes = 10;
  currentLocation!: string;
  tagLocation: string = '';
  saveCurrentLocation = false;
  showBackButton = false;
  // serviceAvailable = false;
  nonContactDelivery = false;
  customerLocation: any = {};
  searchText: string = ''

  allowedMinDate!: any;
  allowedMaxDate!: any;
  allowedMaxDateSub!: any;
  orderDbId: any;

  couponCode: any;
  offerId: any;
  selectedCoupon: any;

  voucherCode: any;
  selectedVoucherObj: any;
  voucherDiscount = 0;
  showVoucherWarning = false;
  voucherWarningmsg = '';


  advOrderStartTime!: string;
  advOrderEndTime!: string;
  kitchenDistance = 0;
  skipCommission = false;
  userProfile: any = {};
  gstPercentage = 5;
  moneyWalletRedeemPointsLimit = 100;
  mealaweWalletRedeemPointsLimit = 13;

  //reset variable
  specialRequest: any = '';
  orderComplitionDate: any;
  orderComplitionTime: any;
  discount = 0;
  mealaweDeliveryDiscount = 0;
  mealaweItemDiscount = 0;
  kitchenDiscount = 0;
  mealaweKitchenDiscount = 0;
  moneyWalletPointsUsed = 0;
  mealaweWalletPointsUsed = 0;
  payAmtBeforeDiscount = 0;
  moneyWalletPoinstAvailable = 0;
  mealaweWalletPoinstAvailable = 0;
  applyMoneyWalletPoints = false;
  applyMealaweWalletPoints = false;
  maxMoneyWalletPointsAllowed = 0;
  maxMealaweWalletPointsAllowed = 0;
  notInTimeSlot = true;
  minAdvOrderTime = '8:00AM';
  maxAdvOrderTime = '9:00PM';
  subscriptionText = '';
  subscribeFooterText = '';
  oneTimeDeliveryCharge = 0;
  subscriptionStartDate: any;
  subscriptionObj: any = {
    subscriptionDays: 1,
    multiDateAllowed: false,
    lunchSubscription: true,
    dinnerSubscription: false,
    subscriptionDates: []
  }
  subscriptionCount = 0;
  specialInflatePercentage = 0;
  deliveryInflatePercentage = 0;
  allDayOrderStartTime!: string;
  allDayOrderEndTime!: string;
  notInTimeSlotAllDay = true;
  minAllDayOrderTime = '8:00AM';
  maxAlldayOrderTime = '9:00PM';
  allDaySlotArray: any[] = [];
  allDaySlotIndex = 0;
  advSlotArray: any[] = [];
  advSlotIndex = 0;
  // checkoutDetails;
  slotCounter: any;
  advSlotCounter: any;

  deliveryServiceError = false;

  notInTimeSlotDaily = true;
  dailyOrderReadyTime: any;
  dailyOrderDeliveryTime: any;

  disableMealaweWallet = false;
  extraDiscountPercentage = 5;
  extraDiscount = 0;
  autoCoupon: any = {
    couponCode: 'WELCOME',
    couponHeader: 'Flat discount',
    couponScope: 'generic',
    couponUsage: 'everytime',
    description: 'flat discount on delivery charges and item price',
    discountOnDelivery: true,
    discountOnItems: true,
    discountType: 'flat',
    discountValue: 20,
    maxLimit: 2000,
    minAmount: 20,
    offerAppliedOn: 'itemAmount',
    orderTypes: ['advance', 'daily', 'allDay'],
    subDescription: 'Applicable on this order, max discount is Rs 2000',
    termsAndConditions: ['Discount is applied on delivery charges and item price']
  };
  packageTotalAmt = 0;
  mealPerdayCount = 1;
  useRazorpay = false;
  deliveryVendor = 'Dunzo';
  userSelectedDates: any[] = [];
  couponProps: any;
  modalVoucherCode: any;
  addressSelected: any;
  toggleSelected: boolean = true;
  mapId = 'mapid';
  showSkipButton: boolean = true
  showMap: boolean = false;
  headerMsg: string = '';
  mainMessage: string = '';
  subMessage: string = '';
  serviceNotAvailable: boolean = false;
  selectedAddressIndex: any;
  selectedDates: any;
  allTimeSlotSelected!: string;
  advanceTimeSlotSelected!: string;
  showCheckoutPage: boolean = false;
  subscription: any[] = [];
  profileForm: any;
  referralCodeValid: boolean = false;
  validationCompleted: boolean = false;
  showSpinner: boolean = false;
  codeValidationCounter: any;
  installReferrer: any;


  constructor(private cartManagementService: CartManagementService, private fb: FormBuilder, private datePipe: DatePipe, private toasterService: ToasterService, private alertModalService: AlertModalService, private chgDetRef: ChangeDetectorRef, private sendDataToComponent: SendDataToComponent, private userProfileService: UserProfileService, private localStorageService: LocalStorageService, private googleMapService: GoogleMapService, private confirmationModalService: ConfirmationModalService, private apiMainService: ApiMainService, private paymentGatewayService: PaymentGatewayService, private runtimeStorageService: RuntimeStorageService, private utilityService: UtilityService, private router: Router) {
    const currentDate = new Date();
    const after1Day = new Date((new Date()).setDate(currentDate.getDate() + 1));
    const after2Day = new Date((new Date()).setDate(currentDate.getDate() + 2));
    const after15Day = new Date((new Date()).setDate(currentDate.getDate() + 10));
    this.allowedMinDate = after1Day.toISOString();
    this.allowedMaxDate = after2Day.toISOString();
    this.allowedMaxDateSub = after15Day.toISOString();
    this.advOrderStartTime = '08:00';
    this.advOrderEndTime = '21:00';
    this.allDayOrderStartTime = '09:00';
    this.allDayOrderEndTime = '21:00';
    this.mapId += Math.ceil(Math.random() * 1000)
    this.subscribeEvents();
    this.getOrderGSTAndRedeemLimit();

    const specialInflatePercentage = this.runtimeStorageService.getCacheData('SPECIAL_INFLATE_PERCENTAGE');
    if (specialInflatePercentage) {
      this.specialInflatePercentage = specialInflatePercentage;
    }
    const deliveryInflatePercentage = this.runtimeStorageService.getCacheData('DELIVERY_INFLATE_PERCENTAGE');
    if (deliveryInflatePercentage) {
      this.deliveryInflatePercentage = deliveryInflatePercentage;
    }
    this.autoCoupon.startDate = currentDate;
    this.autoCoupon.expiryDate = after1Day;
  }
  ngOnDestroy(): void {
    this.sendDataToComponent.unsubscribe('ADDRESS_FROM_DELIVERY');
  }

  ngOnInit(): void {
    this.userProfile = this.localStorageService.getCacheData('USER_PROFILE');
    console.log(this.userProfile)
    const cartObj = this.cartManagementService.getCart();
    this.checkUserLoginProfile();
    this.getDBTimeSlots();
    this.validateDailyTimings();
    this.updateCart(cartObj);
    this.setCurrentLocation();
    this.createProfileForm();
    this.referralCodeVerify();
    if (this.userProfile) {
      this.getMoneyWalletBalance(true);
      this.getMealaweWalletBalance(true);
    }
    if (this.userSelectedDates.length === 0) {
      this.userSelectedDates.push(this.allowedMinDate);
    }
    // this.getCouponList()
  }

  referralCodeVerify() {
    this.profileForm.controls.code.valueChanges.subscribe((res: any) => {
      if (res) {
        this.installReferrer = true;
        this.validateInstallReferrer(res)
      }
    })
  }

  async validateInstallReferrer($event: any) {
    let searchText = $event;
    this.referralCodeValid = false;
    this.validationCompleted = false;
    if (searchText) {
      clearTimeout(this.codeValidationCounter);
      this.codeValidationCounter = setTimeout(async () => {
        try {
          searchText = searchText.toUpperCase();
          this.showSpinner = true;
          const { referralCodeValid } = await this.apiMainService.validateReferralCode(searchText);
          this.referralCodeValid = referralCodeValid;
          this.validationCompleted = true;
          this.showSpinner = false;
        } catch (e) {
          this.showSpinner = false;
        }
      }, 1000)
    }
  };

  getUserDetails() {
    this.checkUserLoginProfile()
    this.setCurrentLocation()
  }

  createProfileForm() {
    this.profileForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30), Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]],
      email: ['', [Validators.required,Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+(\\.[a-zA-Z]{2,4})+(\\.[a-zA-Z]{2,4})*$")]],
      code: ['']
    })
  }

  async submitCompletedProfile(){
    // const selectedList = this.favcuisinelist.filter( (item: any) => item.checked).map(ele => ele.name);
    // const preferences = selectedList.join(',');
    let form = this.profileForm.controls
    const userProfile = this.localStorageService.getCacheData('USER_PROFILE');
    if(this.profileForm && this.profileForm.value){
      // this.username = this.favCusineForm.value.username;
      // this.email = this.favCusineForm.value.email;
      // if(this.profileForm.email){
      //   this.email = this.email.toLowerCase();
      // }
    }
    if (userProfile){
      userProfile.userName = form.name.value.trim();
      userProfile.email = form.email.value.toLowerCase();
      // userProfile.preferences = preferences;
      if(this.installReferrer && this.referralCodeValid){
        userProfile.installReferrer = this.installReferrer.toUpperCase();
      }
      try{
        const updatedUserProfile = await this.apiMainService.updateUserProfile(userProfile._id, userProfile);
        this.userProfile = updatedUserProfile
        this.localStorageService.setCacheData('USER_PROFILE', updatedUserProfile);
        this.localStorageService.setCacheData('PREFERENCE_SET', true);
        let el = this.closeProfile.nativeElement
        el.click();
        // this.mixpanelservice.signup('Sign_Up',{id:userProfile._id});
      }catch (e){
        console.log('error while updating user address');
      }
  }
}

  validateDailyTimings() {
    if (this.cartObj && this.cartObj.orderType === 'daily') {
      this.cartObj.kitchen.mealTiming.forEach((element: any) => {
        if (element.mealType === this.cartObj.mealType) {
          const acceptOrderFrom = new Date(element.acceptOrderFrom);
          const fromHour = acceptOrderFrom.getHours();
          const fromMins = acceptOrderFrom.getMinutes();
          let startTimeDate = new Date();
          startTimeDate.setHours(fromHour);
          startTimeDate.setMinutes(fromMins);

          const acceptOrderTill = new Date(element.acceptOrderTill);
          const tillHour = acceptOrderTill.getHours();
          const tillMins = acceptOrderTill.getMinutes();
          let endTimeDate = new Date();
          endTimeDate.setHours(tillHour);
          endTimeDate.setMinutes(tillMins);
          const currentTime = new Date();
          if (currentTime.getTime() < startTimeDate.getTime() || currentTime.getTime() > endTimeDate.getTime()) {
            this.notInTimeSlotDaily = true;
          } else {
            this.notInTimeSlotDaily = false;
          }
          this.dailyOrderReadyTime = new Date(endTimeDate.getTime() + ((this.cartObj.kitchen.preparationTime) * 60 * 1000));
          const deliveryETA = this.cartObj.kitchen.deliveryTime ? this.cartObj.kitchen.deliveryTime : 40;
          this.dailyOrderDeliveryTime = new Date(endTimeDate.getTime() + ((this.cartObj.kitchen.preparationTime + deliveryETA) * 60 * 1000));
        }
      });
      const orderingTimeValid = !this.notInTimeSlotDaily;
      return orderingTimeValid;
    }
  }

  checkUserLoginProfile() {
    this.userProfile = this.localStorageService.getCacheData('USER_PROFILE');
  }

  async setCurrentLocation() {
    const currentStorageLocation = this.localStorageService.getCacheData('CURRENT_LOCATION');
    console.log(currentStorageLocation)
    if (currentStorageLocation) {
      const formatedAddess = this.userProfileService.getSavedAddress(currentStorageLocation);
      this.addressSelected = formatedAddess
      this.customerLocation = { ...formatedAddess };
      let address = '';
      if (formatedAddess.address && formatedAddess.landmark) {
        this.saveCurrentLocation = true;
        address = formatedAddess.address
      } else {
        this.saveCurrentLocation = false;
      }
      const landmark = formatedAddess.landmark ? `, Landmark: ${formatedAddess.landmark}, ` : '';
      this.currentLocation = formatedAddess.location ? `${address}${formatedAddess.location}${landmark}` : `${address}${landmark}`;
      this.tagLocation = formatedAddess.tagLocation;
      console.log(this.customerLocation)
      if (this.cartObj && this.cartObj.kitchen && this.cartObj.kitchen.geolocation) {
        // this.cartObj.kitchen = await this.googleMapService.getKitchenDistance(this.cartObj.kitchen, formatedAddess.geolocation, true);
        const kitchenList = await this.googleMapService.getKitchenGoogleDistance([this.cartObj.kitchen], formatedAddess.geolocation);
        this.cartObj.kitchen = kitchenList[0];
        this.getDeliveryChargeQuote();
      }
    }
  }

  async getOrderGSTAndRedeemLimit() {
    try {
      const gstRedeemValues: any = await this.paymentGatewayService
        .getVariables(['ORDER_GST', 'USER_WALLET_REDEEM_PERCENTAGE', 'USER_MEALAWE_WALLET_REDEEM_PERCENTAGE'], 'GST_REDEEM');
      if (gstRedeemValues) {
        if (gstRedeemValues.ORDER_GST) {
          this.gstPercentage = parseInt(gstRedeemValues.ORDER_GST);
        }
        if (gstRedeemValues.USER_WALLET_REDEEM_PERCENTAGE) {
          this.moneyWalletRedeemPointsLimit = parseInt(gstRedeemValues.USER_WALLET_REDEEM_PERCENTAGE);
        }
        if (gstRedeemValues.USER_MEALAWE_WALLET_REDEEM_PERCENTAGE) {
          this.mealaweWalletRedeemPointsLimit = parseInt(gstRedeemValues.USER_MEALAWE_WALLET_REDEEM_PERCENTAGE);
        }
        if (this.cartObj && this.cartObj.itemList) {
          this.getPayAmt();
        }
      }
    } catch (error) {
      console.log('error while fetching cluster list ', error);
    }
  }

  subscribeEvents() {
    this.sendDataToComponent.subscribe('UPDATE_CART', (cartObj) => {
      if (cartObj) {
        this.userSelectedDates = [this.allowedMinDate];
        this.updateCart(cartObj);
        this.getDBTimeSlots();
      }
    });

    this.sendDataToComponent.subscribe('ADDRESS_FROM_DELIVERY', (address) => {
      if (address.address) {
        this.userProfile.addressList ? this.userProfile.addressList.push(address) : this.userProfile.addressList = [address];
        console.log(this.userProfile)
        this.toggleAddressSelected(address);
        this.toggleCanvas();
        // this.setCurrentLocation()  
      }
      else {
        this.addressSelected = address
        this.saveCurrentLocation = false
      }
    })


    this.sendDataToComponent.subscribe('LOCATION_ADDED_UPDATE_CART_PAGE', (flag) => {
      if (flag) {
        this.updateLocationChange();
      }
    });
    this.sendDataToComponent.subscribe('RELOAD_CART_PAGE', (reload) => {
      try {
        if (reload) {
          this.getDBTimeSlots();
        }
      } catch (error) {
        console.log('erroe while reload ', error)
      }
    });
  }

  async getDBTimeSlots() {
    try {
      const advOrderTimings: any = await this.paymentGatewayService
        .getVariables(['ADV_ORDER_START_TIME', 'ADV_ORDER_END_TIME', 'ALLDAY_ORDER_START_TIME',
          'ALLDAY_ORDER_END_TIME', 'DELIVERY_INFLATE_PERCENTAGE', 'USE_RAZORPAY'], 'ADV_END_TIME');
      if (advOrderTimings) {
        if (advOrderTimings.ADV_ORDER_START_TIME) {
          this.advOrderStartTime = advOrderTimings.ADV_ORDER_START_TIME;
          const advOrderStartDate = new Date();
          const stdDefaultMinTime = this.advOrderStartTime.split(':');
          let advStartHour = parseInt(stdDefaultMinTime[0]);
          let advStartMin = parseInt(stdDefaultMinTime[1]);
          advOrderStartDate.setHours(advStartHour);
          advOrderStartDate.setMinutes(advStartMin);
          this.minAdvOrderTime = advOrderStartDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
        }
        if (advOrderTimings.ADV_ORDER_END_TIME) {
          this.advOrderEndTime = advOrderTimings.ADV_ORDER_END_TIME;
          const advOrderEndDate = new Date();
          const stdDefaultMaxTime = this.advOrderEndTime.split(':');
          let advEndHour = parseInt(stdDefaultMaxTime[0]);
          let advEndMin = parseInt(stdDefaultMaxTime[1]);
          advOrderEndDate.setHours(advEndHour);
          advOrderEndDate.setMinutes(advEndMin);
          this.maxAdvOrderTime = advOrderEndDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
        }
        if (advOrderTimings.ALLDAY_ORDER_START_TIME) {
          this.allDayOrderStartTime = advOrderTimings.ALLDAY_ORDER_START_TIME;
          const allDayOrderStartTime = this.allDayOrderStartTime.split(':');
          let allDayStartHour = parseInt(allDayOrderStartTime[0]);
          let allDayStartMin = parseInt(allDayOrderStartTime[1]);
          const allDayOrderStartDate = new Date();
          allDayOrderStartDate.setHours(allDayStartHour);
          allDayOrderStartDate.setMinutes(allDayStartMin);
          this.minAllDayOrderTime = allDayOrderStartDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
        }
        if (advOrderTimings.ALLDAY_ORDER_END_TIME) {
          this.allDayOrderEndTime = advOrderTimings.ALLDAY_ORDER_END_TIME;
          const allDayOrderEndTime = this.allDayOrderEndTime.split(':');
          let allDayEndHour = parseInt(allDayOrderEndTime[0]);
          let allDayEndMin = parseInt(allDayOrderEndTime[1]);
          const allDayOrderEndDate = new Date();
          allDayOrderEndDate.setHours(allDayEndHour);
          allDayOrderEndDate.setMinutes(allDayEndMin);
          this.maxAlldayOrderTime = allDayOrderEndDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
        }
        if (advOrderTimings.DELIVERY_INFLATE_PERCENTAGE) {
          let deliveryInflatePercentage = advOrderTimings.DELIVERY_INFLATE_PERCENTAGE;
          this.deliveryInflatePercentage = deliveryInflatePercentage ? deliveryInflatePercentage : 0;
          this.runtimeStorageService.setCacheData('DELIVERY_INFLATE_PERCENTAGE', this.deliveryInflatePercentage);
        }
        if (advOrderTimings.USE_RAZORPAY) {
          let USE_RAZORPAY = advOrderTimings.USE_RAZORPAY;
          this.useRazorpay = USE_RAZORPAY === 'YES' ? true : false;
        }
        this.validateAdvTimeSlot();
        this.calculateAdvDaySlots();
        this.validateAllDayTimeSlot();
        this.calculateAllDaySlots();

      }
    } catch (error) {
      console.log('error while fetching adv start end timing ', error);
    }
  }

  calculateAdvDaySlots() {
    if (this.cartObj && this.cartObj.orderType === 'advance') {
      this.advSlotArray = [];
      this.advSlotIndex = 0;
      const orderingTimeValid = this.utilityService.checkOrderingTiming(this.advOrderStartTime, this.advOrderEndTime);
      if (orderingTimeValid) {
        const advOrderEndTime = this.advOrderEndTime.split(':');
        let advEndHour = parseInt(advOrderEndTime[0]);
        let advEndMin = parseInt(advOrderEndTime[1]);
        const advOrderStartTime = this.advOrderStartTime.split(':');
        let advStartHour = parseInt(advOrderStartTime[0]);
        let advStartMin = parseInt(advOrderStartTime[1]);
        const startSlot = new Date();
        startSlot.setMinutes(advStartMin);
        this.advSlotArray = [];
        this.advSlotIndex = 0;
        for (let slotStartTime = advStartHour; slotStartTime < advEndHour; slotStartTime += 1) {
          const slotObj = {
            start: new Date(startSlot.setHours(slotStartTime)),
            end: new Date(startSlot.setHours(slotStartTime + 1)),
            allowExtraDiscount: true
          }
          this.advSlotArray.push(slotObj);
        }
        clearTimeout(this.advSlotCounter);
        this.advSlotCounter = setTimeout(() => {
          this.calculateAdvDaySlots();
        }, 1000 * 60 * 5);
      } else {
        this.validateAdvTimeSlot();
      }
    }
  }

  calculateAllDaySlots() {
    if (this.cartObj && (this.cartObj.orderType === 'allDay' || this.cartObj.orderType === 'subscription')) {
      const allDayOrderEndTime = this.allDayOrderEndTime.split(':');
      let allDayEndHour = parseInt(allDayOrderEndTime[0]);

      this.allDaySlotArray = [];
      this.allDaySlotIndex = 0;
      this.subscriptionStartDate = undefined;
      const orderingTimeValid = this.utilityService.checkOrderingTiming(this.allDayOrderStartTime, this.allDayOrderEndTime);
      if (orderingTimeValid) {
        const currentTime = new Date();
        let currentHour = currentTime.getHours();
        let maxItemPrepTime = 0;
        this.cartObj.itemList.forEach((item: any) => {
          if (item.preparationTime && item.preparationTime > maxItemPrepTime) {
            maxItemPrepTime = item.preparationTime;
          }
        });
        const startSlot = new Date();
        const currentMinutes = startSlot.getMinutes();
        if (currentHour < allDayEndHour) {
          if (maxItemPrepTime > 60) {
            const extraTime = maxItemPrepTime + currentMinutes;
            const extraHour = Math.floor(extraTime / 60);
            const extraMin = extraTime % 60;
            const reminderMin = extraMin % 5;
            const remaininigMin = 5 - reminderMin;
            startSlot.setHours(startSlot.getHours() + extraHour);
            const finalMin = extraMin + remaininigMin;
            startSlot.setMinutes(finalMin)
          } else {
            startSlot.setHours(startSlot.getHours() + 1);
            const reminderMin = currentMinutes % 5;
            const remaininigMin = 5 - reminderMin;
            const finalMin = currentMinutes + remaininigMin;
            startSlot.setMinutes(finalMin);
          }
          const startSlotHour = startSlot.getHours()
          if (startSlotHour < allDayEndHour + 1) {
            if (currentHour === allDayEndHour - 1) {
              const slotObj = {
                start: new Date(startSlot),
                end: new Date(startSlot.setHours(startSlot.getHours() + 1)),
                allowExtraDiscount: false
              }
              this.allDaySlotArray.push(slotObj);
            } else {
              for (let slotStartHour = startSlot.getHours(), i = 0; slotStartHour <= allDayEndHour - 1; slotStartHour++) {
                const slotObj = {
                  start: new Date(startSlot.setHours(slotStartHour)),
                  end: new Date(startSlot.setHours(slotStartHour + 1)),
                  allowExtraDiscount: false
                }
                if (i > 1) {
                  slotObj.allowExtraDiscount = true;
                }
                this.allDaySlotArray.push(slotObj);
                i++;
              }
            }
          }
          clearTimeout(this.slotCounter);
          this.slotCounter = setTimeout(() => {
            this.calculateAllDaySlots();
          }, 1000 * 60 * 2);
        } else {
          this.validateAllDayTimeSlot();
        }
      } else {
        this.validateAllDayTimeSlot();
      }
    }
  }

  async updateLocationChange() {
    this.setCurrentLocation();
    const checkServicability = await this.checkServicability(this.customerLocation.geolocation);
    if (!checkServicability) {
      this.toasterService.error(200)
    }
  }

  async checkServicability(latlnjObj: any) {
    return new Promise(async (resolve, reject) => {
      try {
        let serviceAvailable = false
        const custerList: any = await this.googleMapService.getClusterName(latlnjObj);
        if (custerList && custerList.length > 0) {
          if (this.cartObj.orderType === 'subscription') {
            serviceAvailable = true;
          } else {
            this.cartObj.kitchen.clusters.forEach((cluster: any) => {
              if (custerList.indexOf(cluster) > -1) {
                serviceAvailable = true;
              }
            });
          }
        } else {
          serviceAvailable = false;
        }
        resolve(serviceAvailable);
      } catch (error) {
        console.log('error while fetching cluster list ', error);
      }
    });
  }

  selectDays(days: any) {
    this.subscriptionObj.subscriptionDays = days;
    this.cartManagementService.updateSubscribeOrder(this.subscriptionObj);
    this.validateAndApplyCoupon(this.selectedCoupon, false);
  }

  async mealaweWalletApplied() {
    if (this.voucherCode || this.couponCode) {
      try {
        this.confirmationModalService.modal(`Your previously applied coupon will be removed, do you want to continue?`,
          () => this.walletAppliedConfirm(), this);
        // const alert = await this.alertController.create({
        //   cssClass: 'my-alert-class',
        //   header: 'Confirmation',
        //   backdropDismiss: false,
        //   message: 'Your previously applied coupon will be removed, do you want to continue?',
        //   buttons: [
        //       {
        //         text: 'No',
        //         role: 'cancel',
        //         cssClass: 'primary1 bold',
        //         handler: (blah) => {
        //           console.log('Confirm Cancel: blah');
        //         }
        //       },
        //       {
        //         text: 'Yes',
        //         cssClass: 'secondary-color3 bold',
        //         handler: () => {
        // this.removeCoupon();
        // this.removeVoucher();   
        // this.disableMealaweWallet = false;
        // this.applyMealaweWalletPoints = true; 
        // this.manageMealaweDiscount();
        // this.getPayAmt();      
        //         }
        //       }
        //     ]
        // });  
        // await alert.present();
      }
      catch (error) {
        console.log('error while showing alert ', error);
      }
    } else {
      this.applyMealaweWalletPoints = !this.applyMealaweWalletPoints;
      if (this.applyMealaweWalletPoints) {
        this.removeCoupon();
        this.removeVoucher();
        this.manageMealaweDiscount();
      } else {
        this.mealaweDeliveryDiscount = 0;
        this.mealaweItemDiscount = 0;
      }
      this.getPayAmt();
    }
  }

  walletAppliedConfirm() {
    this.removeCoupon();
    this.removeVoucher();
    this.disableMealaweWallet = false;
    this.applyMealaweWalletPoints = true;
    this.manageMealaweDiscount();
    this.getPayAmt();
  }

  manageMealaweDiscount() {
    let couponDiscount = this.maxMealaweWalletPointsAllowed;
    if (couponDiscount > this.deliveryCharges) {
      this.mealaweDeliveryDiscount = this.deliveryCharges;
    } else {
      this.mealaweDeliveryDiscount = couponDiscount;
    }
    couponDiscount -= this.mealaweDeliveryDiscount;
    if (couponDiscount > 0) {
      this.mealaweItemDiscount = couponDiscount;
      couponDiscount -= this.mealaweItemDiscount;
    }
    this.showCashBackFlashOffer();
  }

  async showCashBackFlashOffer() {
    // this.commonPopupService.showFlashOffer({
    //   headerMsg: `Cashback applied`,
    //   mainMessage: `You are saving ₹${this.maxMealaweWalletPointsAllowed} with cashback`,
    //   subMessage: `Keep using cashback and save more with each order`
    // });
  }

  applyExtraDiscount(slotList: any, index: any) {
    try {
      this.allDaySlotIndex = index + 1;
      this.advSlotIndex = index + 1
      // const selectedIndex = index -1;
      const selectedIndex = index;
      if (selectedIndex >= 0) {
        const slotObj = slotList[selectedIndex];
        if (slotObj && slotObj.allowExtraDiscount) {
          const amtBeforeDiscount = this.mealaweTotalAmt - this.mealaweKitchenDiscount;
          this.extraDiscount = Math.floor((amtBeforeDiscount * this.extraDiscountPercentage) / 100);
          this.getPayAmt();
        } else {
          this.removeExtraDiscount();
        }
      } else {
        this.allDaySlotIndex = 0;
        this.removeExtraDiscount();
      }
    } catch (error) {
      this.removeExtraDiscount();
    }

  }

  removeExtraDiscount() {
    this.extraDiscount = 0;
    this.getPayAmt();
  }

  checkPaymentTiming() {
    let timeOutofSlot = true;
    let msg: any;
    if (this.cartObj && this.cartObj.orderType === 'daily') {
      const orderingTimeValid = this.validateDailyTimings();
      if (orderingTimeValid) {
        this.notInTimeSlotDaily = false;
        timeOutofSlot = this.notInTimeSlotDaily;
      } else {
        this.notInTimeSlotDaily = true;
        timeOutofSlot = this.notInTimeSlotDaily;
        msg = `You have missed ${this.cartObj.mealType} ordering time of ${this.cartObj.kitchenName}`;
      }
    } else if (this.cartObj && this.cartObj.orderType === 'advance') {
      const orderingTimeValid = this.utilityService.checkOrderingTiming(this.advOrderStartTime, this.advOrderEndTime);
      if (orderingTimeValid) {
        this.notInTimeSlot = false;
        timeOutofSlot = this.notInTimeSlot;
      } else {
        this.notInTimeSlot = true;
        timeOutofSlot = this.notInTimeSlot;
        msg = `You can place advance order between ${this.minAdvOrderTime} to ${this.maxAdvOrderTime} only`;
      }
    } else if (this.cartObj && (this.cartObj.orderType === 'allDay' || this.cartObj.orderType === 'subscription')) {
      const orderingTimeValid = this.utilityService.checkOrderingTiming(this.allDayOrderStartTime, this.allDayOrderEndTime);
      if (orderingTimeValid) {
        this.notInTimeSlotAllDay = false;
        timeOutofSlot = this.notInTimeSlotAllDay;
      } else {
        this.notInTimeSlotAllDay = true;
        timeOutofSlot = this.notInTimeSlotAllDay;
        msg = `You can place order between ${this.minAllDayOrderTime} to ${this.maxAlldayOrderTime} only`;
      }
    }
    if (timeOutofSlot) {
      this.toasterService.error(msg);
    }
    return timeOutofSlot;
  }

  async checkUserProfile() {
    if (this.userProfile && this.userProfile.userName && this.userProfile.email) {
      if (this.checkPaymentTiming()) {
        return;
      } else if (this.cartObj.orderType === 'allDay' && this.deliveryServiceError) {
        this.toasterService.error(115);
        return;
      } else if ((this.cartObj.orderType === 'allDay' && this.allDaySlotIndex === 0) ||
        (this.cartObj.orderType === 'advance' && this.advSlotIndex === 0)) {
        this.toasterService.error(116);
        return;
      } else if (this.cartObj.orderType === 'subscription') {
        this.makePaymentSubscirption();
      } else if (this.deliveryCharges && this.deliveryCharges > 0) {
        this.makePayment();
      } else {
        this.toasterService.warning(111);
      }
    }
    else {
      try {
        this.confirmationModalService.modal(`You have not set up your profile yet, Kindly set your profile?`,
          () => {
            let el = this.completeProfile.nativeElement;
            el.click()
          }, this);

        // const alert = await this.alertController.create({
        //   cssClass: 'my-alert-class',
        //   header: 'Set Your Profile',
        //   backdropDismiss: false,
        //   message: 'You have not set your profile yet, kindly set your profile. ',
        //   buttons: [
        //       {
        //         text: 'Ok',
        //         cssClass: 'secondary-color3 bold',
        //         handler: () => {
        //           this.openProfileModel()           
        //         }
        //       }
        //     ]
        // });  
        // await alert.present();
      } catch (error) {
        console.log('error while showing alert ', error);
      }
    }
  }


  async openProfileModel() {
    // try{
    //   const modal = await this.modalController.create({
    //     component: ChooseFavCuisineComponent,
    //     componentProps: {openedInModal:true}
    //   });
    //   modal.onDidDismiss().then((event: any) => {
    //     const data = event.data;
    //     if (data && data.back){
    //       this.toasterService.success(110);
    //       this.userProfile = this.localStorageService.getCacheData('USER_PROFILE'); 
    //     }
    //   });
    //   return await modal.present();
    // }catch(error){
    //   console.log('error while fetching couponlist ',error);
    // }
  }

  async makePayment() {
    const checkServicability = await this.checkServicability(this.customerLocation.geolocation);
    if (checkServicability) {
      const userProfile = this.userProfile;
      const foodOrderObj: any = {
        customerId: userProfile._id,
        customerName: userProfile.userName,
        customerLocation: this.customerLocation,
        customerEmail: userProfile.email,
        customerPhoneNo: userProfile.phoneNo,
        kitchenId: this.cartObj.kitchenId,
        kitchenName: this.cartObj.kitchenName,
        kitchenPhoneNo: this.cartObj.kitchen.phoneNo,
        kitchenAddress: this.cartObj.kitchen.address,
        kitchenGeolocation: this.cartObj.kitchen.geolocation,
        orderType: this.cartObj.orderType,
        mealType: this.cartObj.mealType,
        amount: this.payAmt,
        itemAmount: this.totalAmt,
        kitchenDiscount: this.kitchenDiscount,
        deliveryCharges: this.deliveryCharges,
        discount: this.discount,
        taxes: this.taxes,
        couponCode: this.couponCode,
        itemList: this.cartObj.itemList,
        addOns: this.cartObj.addOns ? this.cartObj.addOns : [],
        specialRequest: this.specialRequest,
        nonContactDelivery: this.nonContactDelivery,
        orderDbId: this.orderDbId,
        offer: this.offerId,
        orderDate: new Date(),
        moneyWalletPointsUsed: this.moneyWalletPointsUsed,
        mealaweWalletPointsUsed: this.mealaweWalletPointsUsed,
        extraDiscount: this.extraDiscount,
        mealaweDeliveryDiscount: this.mealaweDeliveryDiscount,
        mealaweItemDiscount: this.mealaweItemDiscount,
        mealaweTotalAmt: this.mealaweTotalAmt,
        mealaweKitchenDiscount: this.mealaweKitchenDiscount,
        voucherCode: this.voucherCode,
        voucherDiscount: this.voucherDiscount,
        orderCreatedBy: 'User',
        deliveryVendor: this.deliveryVendor
      }
      if (this.cartObj.kitchen && this.cartObj.kitchen.distance >= 0) {
        foodOrderObj.distance = this.cartObj.kitchen.distance;
      }
      if (this.cartObj.orderType === 'advance') {
        if (this.orderComplitionDate && this.advSlotIndex > 0) {
          const seletedSlot = this.advSlotArray[this.advSlotIndex - 1];
          foodOrderObj.slotStartTime = seletedSlot.start;
          foodOrderObj.slotEndTime = seletedSlot.end;
          foodOrderObj.orderComplitionDate = this.orderComplitionDate;
          foodOrderObj.orderComplitionTime = seletedSlot.start;
        } else {
          this.toasterService.error(201);
          return false;
        }
      }
      if (this.cartObj.orderType === 'daily') {
        foodOrderObj.orderComplitionTime = this.dailyOrderReadyTime;
        foodOrderObj.dailyOrderDeliveryTime = this.dailyOrderDeliveryTime;
      }
      if (this.cartObj.orderType === 'allDay') {
        const seletedSlot = this.allDaySlotArray[this.allDaySlotIndex - 1];
        foodOrderObj.slotStartTime = seletedSlot.start;
        foodOrderObj.slotEndTime = seletedSlot.end;
      }
      try {
        this.openCheckoutPage(foodOrderObj);
      } catch (error) {
        if (error) {
          this.toasterService.error(300);
        }
      }
    } else {
      this.toasterService.error(200);
    }
  }

  async makePaymentSubscirption() {
    if (this.subscriptionObj.multiDateAllowed) {
      if (this.userSelectedDates.length !== this.cartObj.subscriptionObj.subscriptionDays) {
        this.toasterService.error(`You must select ${this.cartObj.subscriptionObj.subscriptionDays} Delivery Dates.`);
        return;
      }
    } else if (!this.subscriptionStartDate) {
      this.toasterService.error(204);
      return;
    }
    const checkServicability = await this.checkServicability(this.customerLocation.geolocation);
    if (checkServicability) {
      const userProfile = this.userProfile;
      const foodOrderObj: any = {
        customerId: userProfile._id,
        customerName: userProfile.userName,
        customerLocation: this.customerLocation,
        customerEmail: userProfile.email,
        customerPhoneNo: userProfile.phoneNo,
        orderType: 'subscriptionPackage',
        amount: this.payAmt,
        mealaweTotalAmt: this.payAmt,
        mealPackage: this.cartObj.itemList[0],
        discount: this.discount,
        specialRequest: this.specialRequest,
        orderDate: new Date(),
        moneyWalletPointsUsed: this.moneyWalletPointsUsed,
        subscriptionStartDate: this.subscriptionStartDate,
        subscriptionDays: this.cartObj.subscriptionObj.subscriptionDays,
        orderCreatedBy: 'User',
        deliveryVendor: this.deliveryVendor,
        userSelectedDates: this.userSelectedDates,
        multiDateAllowed: this.subscriptionObj.multiDateAllowed,
        voucherCode: this.voucherCode,
        voucherDiscount: this.voucherDiscount,
        taxes: this.taxes
      }
      if (this.cartObj.subscriptionObj.lunchSubscription) {
        foodOrderObj.mealTimeLunch = true;
      }
      if (this.cartObj.subscriptionObj.dinnerSubscription) {
        foodOrderObj.mealTimeDinner = true;
      }
      try {
        this.openCheckoutPage(foodOrderObj);
      } catch (error) {
        if (error) {
          this.toasterService.error(300);
        }
      }
    } else {
      this.toasterService.error(200)
    }
  }

  async openCheckoutPage(foodOrderObj: any) {
    try {
      const success: any = await this.pay(foodOrderObj);
      const orderType = foodOrderObj.orderType;
      if (success) {
        this.cartManagementService.resetCart();
        this.cartObj = this.cartManagementService.getCart();
        this.toasterService.success(101);
        this.orderDbId = undefined;
        // this.checkoutDetails = undefined;       
        this.removeCoupon();
        this.resetCartProps();
        this.openOrderPlaced(orderType, true);
        this.sendDataToComponent.publish('UPDATE_OPEN_ORDERS', true);
      } else {
        this.openOrderPlaced(orderType, false);
      }
    } catch (error) {
      console.log('error while fetching couponlist ', error);
    }
  }

  async pay(orderInfo: any) {
    return new Promise(async (resolve, reject) => {
      try {
        let order, orderType;
        if (orderInfo) {
          order = orderInfo;
          orderType = orderInfo.orderType;
        }
        if (order && order.amount >= 0) {
          const checkoutDetails = await this.paymentGatewayService.startPaytmPaymentProcess(order);
          if (checkoutDetails.amount > 0) {
            this.showCheckoutPage = true;
            order = checkoutDetails;
            const res = await this.paymentGatewayService.payPaytmGatewayWeb(checkoutDetails, order);
            resolve(res);
          } else {
            resolve(true);
          }
        }
      } catch (error) {
        reject(error);
      }
    })
  }

  async selectMealTime(mealType: any) {
    // try{
    //   const alert = await this.alertController.create({
    //     cssClass: 'my-alert-class',
    //     header: 'Attention!',
    //     backdropDismiss: false,
    //     message: `You are changing subscription meal time to ${mealType}`,
    //     buttons: [
    //         {
    //           text: 'Ok',
    //           cssClass: 'secondary-color3 bold',
    //           handler: () => {
    //             this.mealTimeSelected(mealType)           
    //           }
    //         }
    //       ]
    //   });  
    //   await alert.present();
    //   }catch(error){
    //     console.log('error while showing alert ',error);
    //   }    
  }

  async selectSavedLocation() {
    // const modal = await this.modalController.create({
    //   component: SearchLocationManualComponent,
    //   componentProps: {showBackIcon: true,showOnlySaved:true},
    //   backdropDismiss: false
    // });
    // modal.onDidDismiss().then(async (event: any) => {
    //   const data = event.data;
    //     if (data && !data.back){ 
    //       if(data.address){
    //         this.utilityService.configureCurrentLocation(data.address); 
    //         this.updateLocationChange();  
    //       }  
    //     }
    // });
    // return await modal.present();  
  }


  async openOrderPlaced(orderType: any, success: any) {
    this.runtimeStorageService.resetCacheData('OPEN_ORDERS');
    this.router.navigate(['/order-placed'], { queryParams: { success, orderType } })
    // const modal = await this.modalController.create({
    //   component: OrderPlacedComponent,
    //   componentProps: {paymentSucess: success},
    // });
    // modal.onDidDismiss().then((event: any) => {
    //   const data = event.data;
    //   if (data && data.back){
    //     if(orderType === 'subscriptionParent' || orderType === 'subscriptionPackage'){
    //       this.navCtrl.navigateForward(['/myOrders/subscriptionOrder']);
    //     }else{
    //       this.navCtrl.navigateForward(['/myOrders/pastOrder']);
    //     }        
    //   }
    // });
    // return await modal.present();
  }

  updateCart(cartObj: any) {
    if (cartObj) {
      this.cartObj = cartObj;
    }
    const count = this.cartManagementService.getItemCount();
    if (count === 0) {
      this.resetCartProps();
    } else {
      if (cartObj && cartObj.orderType === 'subscription') {
        this.subscriptionObj = { ...cartObj.subscriptionObj };
      }
      if (cartObj && cartObj.specialMenuPresent && cartObj.deliveryDate) {
        const deliveryDate = new Date(cartObj.deliveryDate);
        this.allowedMinDate = deliveryDate.toISOString();
        this.allowedMaxDate = deliveryDate.toISOString();
      }
      this.getSubscriptionText();
      this.getPayAmt();
      // this.prepareAutoCoupon();
      // this.validateAdvTimeSlot();
      // this.validateAllDayTimeSlot();
      this.validateAndApplyCoupon(this.selectedCoupon, false);
    }
  }

  resetCartProps() {
    this.specialRequest = '';
    this.orderComplitionDate = undefined;
    this.orderComplitionTime = undefined;
    this.discount = 0;
    this.kitchenDiscount = 0;
    this.moneyWalletPointsUsed = 0;
    this.applyMealaweWalletPoints = false;
    this.mealaweWalletPointsUsed = 0;
    this.maxMealaweWalletPointsAllowed = 0;
    this.extraDiscount = 0;
    this.payAmtBeforeDiscount = 0;
    this.moneyWalletPoinstAvailable = 0;
    this.applyMoneyWalletPoints = false;
    this.maxMoneyWalletPointsAllowed = 0;
    this.notInTimeSlot = true;
    this.offerId = undefined;
    this.couponCode = undefined;
    this.selectedCoupon = undefined;
    this.mealaweDeliveryDiscount = 0;
    this.mealaweItemDiscount = 0;
    this.mealaweKitchenDiscount = 0;
    this.mealaweTotalAmt = 0;
    // this.checkoutDetails = undefined;
    this.selectedVoucherObj = undefined;
    this.voucherCode = undefined;
    this.voucherDiscount = 0;
    this.allDaySlotArray = [];
    this.allDaySlotIndex = 0;
    this.advSlotArray = [];
    this.advSlotIndex = 0;
    this.disableMealaweWallet = false;
    clearTimeout(this.slotCounter);
    clearTimeout(this.advSlotCounter);
    if (this.userProfile) {
      this.getMoneyWalletBalance(false);
      this.getMealaweWalletBalance(false);
    }
    this.userSelectedDates = [this.allowedMinDate];
  }
  getSubscriptionText() {
    if (this.cartObj && this.cartObj.orderType === 'subscription') {
      let text = '';

      if (this.cartObj.subscriptionObj.lunchSubscription) {
        text = `Lunch meal subscription`;
      }
      if (this.cartObj.subscriptionObj.dinnerSubscription) {
        text = `Dinner meal subscription`;
      }
      if (this.cartObj.subscriptionObj.lunchSubscription && this.cartObj.subscriptionObj.dinnerSubscription) {
        text = `Lunch & Dinner meal subscription`;
      }
      const days = this.cartObj.subscriptionObj.subscriptionDays;
      days > 1 ? text += ` for ${days} days ` : text += ` for ${days} day `;
      this.subscriptionText = text;
      this.subscribeFooterText = text;
      // let subText = ''; 
      // if(this.cartObj && this.cartObj.itemList && this.cartObj.itemList.length > 0){
      //     let itemCount = 0;
      //     this.cartObj.itemList.forEach((ele: any) => {
      //         itemCount += ele.count;
      //     });

      //     if(this.cartObj.subscriptionObj.subscriptionTime !== 'Breakfast'){
      //       itemCount > 1 ? subText += `${itemCount} meals ` : subText += `${itemCount} meal `; 
      //       subText += `on ${this.cartObj.subscriptionObj.subscriptionTime} `;
      //     }
      //     if(this.cartObj.subscriptionObj.subscriptionTime === 'Breakfast'){
      //       subText += `${itemCount} Breakfast `;
      //     }
      //     if(this.cartObj.subscriptionObj.subscriptionDays){
      //       const days = this.cartObj.subscriptionObj.subscriptionDays;
      //       days > 1 ? subText += `for ${days} days ` : subText += `for ${days} day `;
      //     }
      //     this.subscribeFooterText = subText;            
      // }
    }
  }
  getPayAmt() {
    if (this.cartObj.orderType === 'subscription') {
      this.getSubscriptionPayAmt();
    } else {
      this.getOtherPayAmt();
    }
  }
  getSubscriptionPayAmt() {
    let mealaweTotalAmt = 0;
    let addonTotalAmt = 0
    let discount = 0;
    this.mealPerdayCount = 1;
    if (this.subscriptionObj.dinnerSubscription && this.subscriptionObj.lunchSubscription) {
      this.mealPerdayCount = 2;
    }
    this.cartObj.itemList.forEach((ele: any) => {
      let totalDays = ele.days;
      mealaweTotalAmt = ele.packagePrice * ele.count * this.mealPerdayCount;
      discount = discount + ele.discount;

      ele.addonsList.forEach((addon: any) => {
        if (addon.selected) {
          if ((addon.day === 1 || addon.day === 7) && !ele.deliveryOnWeekends) {
            totalDays += addon.dayCount;
          }
        }
      })

      ele.addonsList.forEach((addon: any) => {
        if (addon.selected) {
          if (addon.daily) {
            const userAmount = (addon.extraPrice * ele.count * this.mealPerdayCount * totalDays);
            addonTotalAmt += userAmount;
            addon.userAmount = userAmount;
          } else {
            const userAmount = (addon.extraPrice * ele.count * this.mealPerdayCount * addon.dayCount);
            addonTotalAmt += userAmount;
            addon.userAmount = userAmount;
          }
        } else {
          addon.userAmount = 0;
        }
      });
      ele.userAmount = mealaweTotalAmt;
      this.subscriptionObj.subscriptionDays = totalDays;
      this.cartObj.subscriptionObj.subscriptionDays = totalDays;
    });
    this.packageTotalAmt = mealaweTotalAmt;
    this.discount = discount;

    this.taxes = parseFloat((((mealaweTotalAmt + addonTotalAmt) / 100) * this.gstPercentage).toFixed(2));


    const maxMoneyWalletPointsAllowed = parseFloat((mealaweTotalAmt + addonTotalAmt + this.taxes - this.discount - this.voucherDiscount).toFixed(2));
    if (this.moneyWalletPoinstAvailable > maxMoneyWalletPointsAllowed) {
      this.maxMoneyWalletPointsAllowed = maxMoneyWalletPointsAllowed;
    } else {
      this.maxMoneyWalletPointsAllowed = this.moneyWalletPoinstAvailable;
    }

    if (this.applyMoneyWalletPoints) {
      this.moneyWalletPointsUsed = this.maxMoneyWalletPointsAllowed;
    } else {
      this.moneyWalletPointsUsed = 0;
    }
    this.totalAmt = mealaweTotalAmt + addonTotalAmt - this.discount;
    const payAmtFinal = mealaweTotalAmt + addonTotalAmt + this.taxes - this.moneyWalletPointsUsed - this.discount - this.voucherDiscount;
    this.payAmt = parseFloat(payAmtFinal.toFixed(2));
    this.getSubscriptionText();
  }

  getOtherPayAmt() {
    this.payAmtBeforeDiscount = 0;
    let total = 0;
    let mealaweTotalAmt = 0;
    let subscriptionCount = 1;
    this.cartObj.itemList.forEach((ele: any) => {
      total += (ele.itemPrice * ele.count * subscriptionCount);
      if (ele.mealawePrice && ele.mealawePrice > ele.itemPrice) {
        mealaweTotalAmt += (ele.mealawePrice * ele.count * subscriptionCount)
      } else {
        mealaweTotalAmt += (ele.itemPrice * ele.count * subscriptionCount);
      }
    });
    this.cartObj.addOns.forEach((ele: any) => {
      total += (ele.addOnPrice * ele.count * subscriptionCount);
      if (ele.mealawePrice && ele.mealawePrice > ele.addOnPrice) {
        mealaweTotalAmt += (ele.mealawePrice * ele.count * subscriptionCount)
      } else {
        mealaweTotalAmt += (ele.addOnPrice * ele.count * subscriptionCount);
      }
    });
    this.totalAmt = total;
    this.mealaweTotalAmt = mealaweTotalAmt;
    this.getKitchenDiscount(this.totalAmt);
    this.getKitchenSubscriptionDiscount(this.totalAmt, subscriptionCount)
    this.taxes = parseFloat((((this.mealaweTotalAmt - this.mealaweKitchenDiscount) / 100) * this.gstPercentage).toFixed(2));
    let amtBeforeDiscount = this.mealaweTotalAmt + this.deliveryCharges + this.taxes;
    this.payAmtBeforeDiscount = amtBeforeDiscount;
    // if(this.mealaweKitchenDiscount || this.discount || this.mealaweDeliveryDiscount 
    //   || this.mealaweItemDiscount || this.voucherDiscount || this.extraDiscount){
    //     amtBeforeDiscount = amtBeforeDiscount - this.mealaweDeliveryDiscount;
    // }  
    const itemPriceAfterDiscount = this.totalAmt - this.extraDiscount;
    const maxMealaweWalletPointsAllowed = Math.floor((itemPriceAfterDiscount / 100) * this.mealaweWalletRedeemPointsLimit);
    if (this.mealaweWalletPoinstAvailable > maxMealaweWalletPointsAllowed) {
      this.maxMealaweWalletPointsAllowed = maxMealaweWalletPointsAllowed;
    } else {
      this.maxMealaweWalletPointsAllowed = this.mealaweWalletPoinstAvailable;
    }
    if (this.applyMealaweWalletPoints) {
      this.mealaweWalletPointsUsed = this.maxMealaweWalletPointsAllowed;
    } else {
      this.mealaweWalletPointsUsed = 0;
    }

    let payAmtBeforeMoneyWalletPoints = 0;
    if (this.mealaweWalletPointsUsed > 0) {
      payAmtBeforeMoneyWalletPoints = this.payAmtBeforeDiscount - this.mealaweKitchenDiscount - this.voucherDiscount
        - this.mealaweWalletPointsUsed - this.extraDiscount;
    } else {
      payAmtBeforeMoneyWalletPoints = this.payAmtBeforeDiscount - this.mealaweKitchenDiscount - this.discount - this.voucherDiscount
        - this.mealaweItemDiscount - this.extraDiscount - this.mealaweDeliveryDiscount;
    }


    // const maxMoneyWalletPointsAllowed = Math.floor((payAmtBeforeMoneyWalletPoints/100)*this.moneyWalletRedeemPointsLimit);
    const maxMoneyWalletPointsAllowed = parseFloat(((payAmtBeforeMoneyWalletPoints / 100) * this.moneyWalletRedeemPointsLimit).toFixed(2));
    if (this.moneyWalletPoinstAvailable > maxMoneyWalletPointsAllowed) {
      this.maxMoneyWalletPointsAllowed = maxMoneyWalletPointsAllowed;
    } else {
      this.maxMoneyWalletPointsAllowed = this.moneyWalletPoinstAvailable;
    }
    if (this.applyMoneyWalletPoints) {
      this.moneyWalletPointsUsed = this.maxMoneyWalletPointsAllowed;
    } else {
      this.moneyWalletPointsUsed = 0;
    }
    const payAmtFinal = payAmtBeforeMoneyWalletPoints - this.moneyWalletPointsUsed;
    this.payAmt = parseFloat(payAmtFinal.toFixed(2));
    this.prepareAutoCoupon();
  }

  getKitchenDiscount(payAmtBeforeDiscount: any) {
    if (this.cartObj.kitchen && this.cartObj.kitchen.discountOffer
      && this.cartObj.orderType !== 'subscription' && !this.cartObj.specialMenuPresent) {
      let inflatePercentage = 0;
      const discountOffer = this.cartObj.kitchen.discountOffer;
      const todaysDate = (new Date()).getTime();
      const startDate = (new Date(discountOffer.startDate)).getTime();
      const expiryDate = (new Date(discountOffer.expiryDate)).getTime();
      const mealaweMinAmount = discountOffer.minAmount + Math.ceil((discountOffer.minAmount * inflatePercentage) / 100);
      if (todaysDate >= startDate && todaysDate <= expiryDate && payAmtBeforeDiscount > mealaweMinAmount) {
        if (discountOffer.discountType === 'percentage') {
          let kitchenDiscount = Math.floor((payAmtBeforeDiscount / 100) * discountOffer.discountValue);
          let mealaweKitchenDiscount = Math.floor((payAmtBeforeDiscount / 100) * discountOffer.discountValue);
          const mealaweMaxAmount = discountOffer.maxLimit + Math.floor((discountOffer.maxLimit * inflatePercentage) / 100);
          if (mealaweKitchenDiscount > mealaweMaxAmount) {
            kitchenDiscount = discountOffer.maxLimit;
            mealaweKitchenDiscount = mealaweMaxAmount;
          }
          this.kitchenDiscount = kitchenDiscount;
          this.mealaweKitchenDiscount = mealaweKitchenDiscount;
        } else if (discountOffer.discountType === 'flat') {
          this.kitchenDiscount = discountOffer.discountValue;
          this.mealaweKitchenDiscount = discountOffer.discountValue;
        }
      } else {
        this.kitchenDiscount = 0;
        this.mealaweKitchenDiscount = 0;
      }
    }
  }

  getKitchenSubscriptionDiscount(payAmtBeforeDiscount: any, subscriptionCount: any) {
    if (this.cartObj.kitchen && this.cartObj.kitchen.subscriptionDiscount && this.cartObj.orderType === 'subscription') {
      const subscriptionDiscount = this.cartObj.kitchen.subscriptionDiscount;
      let kitchenDiscount = 0;
      let mealaweKitchenDiscount = 0;
      subscriptionDiscount.forEach((discountOffer: any) => {
        if (subscriptionCount === discountOffer.days) {
          if (discountOffer.discountType === 'percentage') {
            kitchenDiscount = Math.floor((payAmtBeforeDiscount / 100) * discountOffer.discountValue);
            mealaweKitchenDiscount = Math.floor((payAmtBeforeDiscount / 100) * discountOffer.discountValue);
          } else if (discountOffer.discountType === 'flat') {
            kitchenDiscount = discountOffer.discountValue;
            mealaweKitchenDiscount = discountOffer.discountValue;
          }
        }
      });
      this.kitchenDiscount = kitchenDiscount;
      this.mealaweKitchenDiscount = mealaweKitchenDiscount;
    }
  }

  validateAdvTimeSlot() {
    if (this.cartObj && this.cartObj.orderType === 'advance') {
      const orderingTimeValid = this.utilityService.checkOrderingTiming(this.advOrderStartTime, this.advOrderEndTime);
      if (orderingTimeValid) {
        this.notInTimeSlot = false;
      } else {
        this.notInTimeSlot = true;
        this.advSlotArray = [];
        this.advSlotIndex = 0;
      }
    }
  }

  validateAllDayTimeSlot() {
    if (this.cartObj && (this.cartObj.orderType === 'allDay' || this.cartObj.orderType === 'subscription')) {
      const orderingTimeValid = this.utilityService.checkOrderingTiming(this.allDayOrderStartTime, this.allDayOrderEndTime);
      if (orderingTimeValid) {
        this.notInTimeSlotAllDay = false;
      } else {
        this.notInTimeSlotAllDay = true;
        this.allDaySlotArray = [];
        this.allDaySlotIndex = 0;
        this.subscriptionStartDate = undefined;
      }
    }
  }

  async validateAndApplyCoupon(offer: any, showFlash: any) {
    if (offer) {
      let amtBeforeDiscount = this.totalAmt - this.mealaweKitchenDiscount;
      if (offer.offerAppliedOn === 'billAmount') {
        amtBeforeDiscount = amtBeforeDiscount + this.deliveryCharges + this.taxes;
      }
      this.mealaweDeliveryDiscount = 0;
      this.mealaweItemDiscount = 0;
      this.discount = 0;
      if (amtBeforeDiscount >= offer.minAmount) {
        try {
          const userId = this.userProfile ? this.userProfile._id : null;
          let coponStatus;
          if (offer.couponCode === 'WELCOME') {
            coponStatus = true;
          } else {
            const { status }: any = await this.paymentGatewayService.validateCouponForUser(offer.couponCode, userId);
            coponStatus = status;
          }
          if (coponStatus) {
            this.offerId = offer._id;
            this.couponCode = offer.couponCode;
            if (offer.applyFullDiscount) {
              let total = amtBeforeDiscount;
              if (offer.maxLimit < total) {
                total = offer.maxLimit;
              }
              this.discount = total;
              if (showFlash) {
                this.removeVoucher();
                this.showFlashOffer(offer.couponCode, total);
              }
            } else {

              let couponDiscount = 0;
              if (offer.discountType === 'flat') {
                couponDiscount = offer.discountValue;
              } else if (offer.discountType === 'percentage') {
                const discount = Math.floor((amtBeforeDiscount * offer.discountValue) / 100);
                couponDiscount = discount;
              }

              if (couponDiscount > offer.maxLimit) {
                couponDiscount = offer.maxLimit;
              }
              if (offer.discountOnDelivery) {
                if (couponDiscount > this.deliveryCharges) {
                  this.mealaweDeliveryDiscount = this.deliveryCharges;
                } else {
                  this.mealaweDeliveryDiscount = couponDiscount;
                }
                couponDiscount -= this.mealaweDeliveryDiscount;
              }
              if (offer.discountOnItems && couponDiscount > 0) {
                this.mealaweItemDiscount = couponDiscount;
                couponDiscount -= this.mealaweItemDiscount;
              }
              this.discount = couponDiscount;
              const total = this.mealaweDeliveryDiscount + this.mealaweItemDiscount + this.discount;
              if (showFlash) {
                this.removeVoucher();
                this.showFlashOffer(offer.couponCode, total);
              }
            }
          }
          this.getPayAmt();
        } catch (error) {
          this.removeCoupon();
        }
      } else {
        if (this.couponCode && this.router.url === '/tabs/tabCart') {
          this.toasterService.warning(109);
        }
        this.removeCoupon();
      }
    } else {
      this.removeCoupon();

    }
    if (this.selectedVoucherObj) {
      this.validateAndApplyVoucher(this.selectedVoucherObj, false);
    }
  }

  async validateAndApplyVoucher(voucherObj: any, showFlash: any) {
    const amtBeforeDiscount = this.totalAmt - this.mealaweKitchenDiscount;
    this.voucherDiscount = 0;
    this.showVoucherWarning = false;
    this.voucherWarningmsg = '';
    try {
      if (voucherObj && voucherObj._id) {
        this.selectedVoucherObj = voucherObj;
        this.voucherCode = voucherObj.voucherCode
        if (amtBeforeDiscount >= voucherObj.minAmount) {
          let voucherDiscount = 0;
          if (voucherObj.discountType === 'flat') {
            voucherDiscount = voucherObj.discountValue;
          } else if (voucherObj.discountType === 'percentage') {
            const discount = Math.floor((amtBeforeDiscount * voucherObj.discountValue) / 100);
            voucherDiscount = discount;
            if (discount > voucherObj.maxLimit) {
              voucherDiscount = voucherObj.maxLimit;
            }
          }
          this.voucherDiscount = voucherDiscount;
          if (showFlash) {
            this.removeCoupon();
            this.showFlashOffer(this.voucherCode, voucherDiscount);
          }
        } else {
          this.showVoucherWarning = true;
          this.voucherWarningmsg = `Kindly add ₹${voucherObj.minAmount - amtBeforeDiscount} to avail ${this.voucherCode} voucher.`;
        }
      } else {
        this.removeVoucher();
        this.showVoucherWarning = true;
        this.voucherWarningmsg = `Voucher code ${this.voucherCode} is invalid.`;
      }
      this.getPayAmt();
    } catch (error) {
      this.removeVoucher();
    }
  }

  removeVoucher(manualRemove?: Boolean) {
    this.voucherCode = undefined;
    this.selectedVoucherObj = undefined;
    this.voucherDiscount = 0;
    this.showVoucherWarning = false;
    this.voucherWarningmsg = '';
    // if(manualRemove){
    //   this.disableMealaweWallet = false;
    //   this.applyMealaweWalletPoints = false;
    // }
    this.getPayAmt();
  }

  removeCoupon(manualRemove?: Boolean) {
    this.offerId = undefined;
    this.couponCode = undefined;
    this.selectedCoupon = undefined;
    this.discount = 0;
    this.mealaweDeliveryDiscount = 0;
    this.mealaweItemDiscount = 0;
    // if(manualRemove){
    //   this.disableMealaweWallet = false;
    //   this.applyMealaweWalletPoints = false;
    // }
    this.getPayAmt();
  }

  async showFlashOffer(couponCode: any, savingAmount: any) {
    let data = { couponCode, savingAmount, type: 'lottie' }
    this.alertModalService.modal(data,
      () => this.removeMealaweWallet(), this);
    this.headerMsg = `'${couponCode}' applied`,
      this.mainMessage = `You are saving ₹${savingAmount} with this coupon`,
      this.subMessage = `Keep using ${couponCode} and save more with each order`
    // this.commonPopupService.showFlashOffer({
    //   headerMsg: `'${couponCode}' applied`,
    //   mainMessage: `You are saving ₹${savingAmount} with this coupon`,
    //   subMessage: `Keep using ${couponCode} and save more with each order`
    // });

  }

  async getMoneyWalletBalance(checkPayAmt: any) {
    try {
      const wallet: any = await this.paymentGatewayService.getMoneyWalletBalance(this.userProfile._id);
      if (wallet && wallet.wallet_balance > 0) {
        this.moneyWalletPoinstAvailable = wallet.wallet_balance;
        if (checkPayAmt) {
          this.getPayAmt();
        }
      }
    } catch (error) {
      console.log('error while fetching FAQs')
    }
  }

  async getMealaweWalletBalance(checkPayAmt: any) {
    try {
      const wallet_balance: any = await this.paymentGatewayService.getMealaweWalletBalance(this.userProfile._id);
      if (wallet_balance && wallet_balance > 0) {
        this.mealaweWalletPoinstAvailable = wallet_balance;
        if (checkPayAmt) {
          this.getPayAmt();
        }
      }
    } catch (error) {
      console.log('error while fetching FAQs')
    }
  }

  prepareAutoCoupon() {
    const moneyDifference = this.mealaweTotalAmt - this.totalAmt;
    this.autoCoupon.couponHeader = `Flat ₹${moneyDifference}`,
      this.autoCoupon.description = `Flat ₹${moneyDifference} discount on delivery charges and item price`;
    this.autoCoupon.discountValue = moneyDifference;
    if (!this.disableMealaweWallet && this.mealaweWalletPointsUsed === 0) {
      this.selectedCoupon = this.autoCoupon;
      this.removeMealaweWallet();
    }
  }

  removeMealaweWallet() {
    this.disableMealaweWallet = true;
    this.applyMealaweWalletPoints = false;
    this.mealaweWalletPointsUsed = 0;
  }

  goToKitchenAgain() {
    this.runtimeStorageService.setCacheData('KITCHEN_SELECTED', this.cartObj.kitchen);
    if (this.cartObj.orderType === 'daily') {
      // this.navCtrl.navigateForward(['/kitchenInside/allDay/'+this.cartObj.kitchen._id]);
    } else if (this.cartObj.orderType === 'subscription') {
      // this.navCtrl.navigateForward(['/kitchenInside/subscription/'+this.cartObj.kitchen._id]);
    } else if (this.cartObj.orderType === 'allDay') {
      // this.navCtrl.navigateForward(['/kitchenInside/allDay/'+this.cartObj.kitchen._id]);
    } else if (this.cartObj.orderType === 'advance') {
      // this.navCtrl.navigateForward(['/kitchenInside/advance/'+this.cartObj.kitchen._id]);
    } else {
      // this.navCtrl.navigateForward(['/kitchenInside/allDay/'+this.cartObj.kitchen._id]);
    }
  }

  increaseAddOnCount(addon: any) {
    if (this.cartManagementService.validateTotalItemCount()) {
      this.toasterService.error(114);
      return;
    }
    addon.count++;
    this.cartManagementService.udpateAddonToCart(addon);
    this.getPayAmt();
    this.validateAndApplyCoupon(this.selectedCoupon, false);
  }

  decreaseAddOnCount(addon: any) {
    addon.count--;
    this.cartManagementService.udpateAddonToCart(addon);
    this.getPayAmt();
    this.validateAndApplyCoupon(this.selectedCoupon, false);
  }

  changePackageAddons(item: any) {
    this.cartManagementService.updateItemToCart(item);
    this.getPayAmt();
  }

  increaseCount(item: any) {
    if (this.cartObj && this.cartObj.orderType === 'daily') {
      const quantityBooked = item.quantityBooked ? item.quantityBooked : 0;
      if ((item.quantityAvailable - quantityBooked) <= item.count) {
        this.toasterService.error(108)
        return;
      }
    }
    if (item.isSpecialMenu && item.specialQuantityAvailable === item.count) {
      this.toasterService.error(108)
      return;
    }
    if (this.cartManagementService.validateComboCount(item)) {
      this.toasterService.error(113);
      return;
    }
    if (this.cartManagementService.validateTotalItemCount()) {
      this.toasterService.error(114);
      return;
    }
    item.count++;
    this.cartManagementService.updateItemToCart(item);
    this.getSubscriptionText();
    this.getPayAmt();
    this.validateAndApplyCoupon(this.selectedCoupon, false);
  }
  decreaseCount(item: any) {
    item.count--;
    this.cartManagementService.updateItemToCart(item);
    this.getSubscriptionText();
    this.getPayAmt();
    this.validateAndApplyCoupon(this.selectedCoupon, false);
  }

  async getCouponList() {
    try {
      let profileId = null;
      if (this.userProfile && this.userProfile._id) {
        profileId = this.userProfile._id;
      }
      let filterDBList = [];
      if (this.cartObj.orderType !== 'subscription') {
        const couponList: any = await this.paymentGatewayService.getValidUserCouponList(profileId);
        filterDBList = couponList.filter((coupon: any) => {
          if (coupon.orderTypes.indexOf(this.cartObj.orderType) > -1) {
            return true;
          } else {
            return false;
          }
        });
        filterDBList.sort((a: any, b: any) => {
          if (a.seqWeightage < b.seqWeightage) {
            return 1;
          } else if (a.seqWeightage > b.seqWeightage) {
            return -1;
          } else {
            return 0;
          }
        });
        filterDBList.unshift(this.autoCoupon);
      }
      this.couponProps = {
        offerList: filterDBList,
        itemPrice: this.mealaweTotalAmt - this.mealaweKitchenDiscount,
        specialMenuPresent: this.cartObj.specialMenuPresent,
        couponApplied: this.disableMealaweWallet,
        mealaweWalletApplied: this.mealaweWalletPointsUsed,
        userId: this.userProfile ? this.userProfile._id : null
      }
      // const modal = await this.modalController.create({
      //   component: OffersCouponComponent,
      //   componentProps: {
      //                     offerList: filterDBList,
      //                     itemPrice: this.mealaweTotalAmt - this.mealaweKitchenDiscount,
      //                     specialMenuPresent: this.cartObj.specialMenuPresent,
      //                     couponApplied: this.disableMealaweWallet,
      //                     mealaweWalletApplied: this.mealaweWalletPointsUsed,
      //                     userId : this.userProfile ? this.userProfile._id : null
      //                   }
      // });
      // modal.onDidDismiss().then((event: any) => {
      //   const data = event.data;
      //   if (data && data.back){
      //     this.selectedCoupon = data.offer;
      //     if(this.selectedCoupon.type === 'voucher'){
      //       this.validateAndApplyVoucher(data.offer,true);
      //     }else{
      //       this.validateAndApplyCoupon(data.offer,true);
      //     }         
      //   }
      // });
      // return await modal.present();
    } catch (error) {
      console.log('error while fetching couponlist ', error);
    }
  }

  async getDeliveryChargeQuote() {
    try {
      this.deliveryServiceError = false;
      if (this.cartObj && this.cartObj.itemList && this.cartObj.itemList.length > 0) {
        this.deliveryCharges = 0;
        this.kitchenDistance = 0;
        if (this.cartObj.kitchen && this.cartObj.kitchen.distance === 0) {
          this.customerLocation.geolocation.lat += 0.0006;
          // const getNewDistnace:any = await this.googleMapService.getKitchenDistance({...this.cartObj.kitchen},this.customerLocation.geolocation,true);
          const kitchenList = await this.googleMapService.getKitchenGoogleDistance([{ ...this.cartObj.kitchen }], this.customerLocation.geolocation);
          const getNewDistnace: any = kitchenList[0];
          if (getNewDistnace && getNewDistnace.distance === 0) {
            this.customerLocation.geolocation.lat -= 0.0012;
          }
        }
        const deliveryObj: any = {
          optimised_route: true,
          pickup_details: [{ ...this.cartObj.kitchen.geolocation, reference_id: 'pickup_location' }],
          drop_details: [{ ...this.customerLocation.geolocation, reference_id: 'drop_location' }]
        };
        if (this.userProfile) {
          deliveryObj.customer = {
            name: this.userProfile.userName,
            mobile: {
              country_code: "+91",
              number: this.userProfile.phoneNo
            }
          }
        }
        const quaotObj = await this.paymentGatewayService.getdeliveryAmount(deliveryObj);
        if (quaotObj.estimated_price >= 0) {
          if (quaotObj.deliveryVendor) {
            this.deliveryVendor = quaotObj.deliveryVendor
          }
          this.deliveryCharges = quaotObj.estimated_price > 0 ? quaotObj.estimated_price : 36;
          // this.deliveryCharges = this.deliveryCharges + Math.ceil((this.deliveryCharges*this.deliveryInflatePercentage)/100);
          if (quaotObj.distance) {
            this.kitchenDistance = quaotObj.distance;
          }
          this.oneTimeDeliveryCharge = this.deliveryCharges
          if (this.kitchenDistance > 5) {
            // alert('kitchen more than 5kms away')
            this.showAlert()
          }
          this.getPayAmt();
          this.validateAndApplyCoupon(this.selectedCoupon, false);
        } else {
          this.calculateManualQuote();
        }
      }
    } catch (error) {
      this.deliveryServiceError = true;
      this.calculateManualQuote();
      console.log('error while fetching dunzo quote ', error);
    }
  }

  calculateManualQuote() {
    const quaotObj = this.googleMapService.getDeliveryQuote(this.cartObj.kitchen.distance);
    if (quaotObj.estimated_price >= 0) {
      this.deliveryCharges = quaotObj.estimated_price > 0 ? quaotObj.estimated_price : 36;
      // this.deliveryCharges = this.deliveryCharges + Math.ceil((this.deliveryCharges*this.deliveryInflatePercentage)/100);
      this.kitchenDistance = quaotObj.distance;
      this.oneTimeDeliveryCharge = this.deliveryCharges;
      if (this.kitchenDistance > 5) {
        this.showAlert()
      }
    }
    this.getPayAmt();
  }

  showAlert() {
    this.confirmationModalService.modal(`You are ordering from a kitchen which is more than 5kms away. Extra delivery time and charges are applicable.`,
      () => '', this);
  }

  isWeekday = (dateString: any) => {
    const date = new Date(dateString);
    const utcDay = date.getUTCDay();
    if (this.cartObj && this.cartObj.itemList && this.cartObj.itemList.length > 0) {
      if (this.cartObj.itemList[0] && this.cartObj.itemList[0].deliveryOnWeekends === false) {
        return utcDay !== 0 && utcDay !== 6;
      } else {
        return true;
      }
    }
  };

  async toggleAddressSelected(address: any, index?: any) {
    if (address) {
      const checkServicability = await this.checkServicability(address.geolocation);
      if (checkServicability) {
        this.addressSelected = address
        this.customerLocation = address
        this.toggleSelected = true;
        this.serviceNotAvailable = false;
        if (this.cartObj.orderType !== 'subscription') {
          this.getDeliveryChargeQuote()
        }
        this.saveCurrentLocation = true
      }
      else {
        this.serviceNotAvailable = true
        this.selectedAddressIndex = index
      }
    }
    else {
      this.toggleSelected = false;
    }
  }

  // toggleMap() {
  //   this.showMap = true
  // }

  toggleCanvas() {
    let el = this.canvasAddress?.nativeElement;
    el?.click();
  }

  mealTimeSelected(prop: any) {
    this.subscriptionObj[prop] = !this.subscriptionObj[prop];
    if (!this.subscriptionObj.dinnerSubscription && !this.subscriptionObj.lunchSubscription) {
      this.subscriptionObj.lunchSubscription = true;
    }
    this.cartManagementService.updateSubscribeOrder(this.subscriptionObj);
  }
  advOrderDateChanged(value: any) {
    this.orderComplitionDate = new Date(value.getTime() - value.getTimezoneOffset() * 60000).toISOString();
  }
  advOrderTimeChanged(value: any) {
    this.orderComplitionTime = new Date(value);
  }
  subOrderDateChanged(value: any) {
    this.subscriptionStartDate = new Date(value.getTime() - value.getTimezoneOffset() * 60000).toISOString();
  }
  multiSubOrderDateChanged(subscriptionDays: any) {
    if (this.selectedDates) {
      if (this.selectedDates.length > subscriptionDays) {
        this.toasterService.error(`You must select ${subscriptionDays} Delivery Dates.`);
      }
      this.userSelectedDates = this.selectedDates.map((el: any) => {
        let date = new Date(el.getTime() - el.getTimezoneOffset() * 60000).toISOString()
        return date
      });
      // this.chgDetRef.detectChanges();
    }
  }

  showAllDayTimeSlot(slot: any) {
    let x = this.datePipe.transform(slot.start, 'shortTime')
    let y = this.datePipe.transform(slot.end, 'shortTime')
    this.allTimeSlotSelected = x + ' - ' + y
  }

  showAdvanceTimeSlot(slot: any) {
    let x = this.datePipe.transform(slot.start, 'shortTime')
    let y = this.datePipe.transform(slot.end, 'shortTime')
    this.advanceTimeSlotSelected = x + ' - ' + y
  }


  // <-------------- Coupons ts code ---------------->
  openVoucherSection() {
    this.getCouponList()
    // this.getDeliveryChargeQuote();
    // const modalRef = this.modalService.open(this.voucherContent, {ariaLabelledBy: 'modal-basic-title', size: 'xl',windowClass: 'menuModel'});
    // modalRef.componentInstance.nearKitchenList = kitchenList;

    // modalRef.result.then((result) => {       
    //    console.log(`Closed with: ${result}`, kitchenList);
    //    if(result === 'add'){
    //       let selectedKitchen:any = {};
    //       this.nearKitchenList.forEach((kitchen:any) => {
    //         if(kitchen.loginId === this.nearestKitchen){
    //           selectedKitchen = kitchen;
    //         }
    //       }); 
    //       if(selectedKitchen && selectedKitchen._id){
    //         this.assignKitctenObj(selectedKitchen);
    //         this.getDeliveryChargeQuote();
    //       }
    //    }
    //    this.nearestKitchen = '';
    // }, (reason) => {
    //   console.log( `Model Dismissed`);
    //   this.nearestKitchen = '';
    // });
  }

  validateVoucher() {
    try {
      if (this.voucherCode) {
        this.validateAndApplyModalVoucher(this.voucherCode);
      }
    } catch (error) {
      console.log('error while validating voucher ', error);
    }
  }

  async validateAndApplyModalVoucher(voucherCode: any) {
    try {
      const { status, msg, voucher }: any = await this.apiMainService.validateVoucherCode(voucherCode, this.couponProps.userId);
      if (status === 'VALID_OFFER') {
        this.showConfirmationAlert({ ...voucher, type: 'voucher' });
      } else {
        if (msg) {
          this.showMessage(msg);
        }
      }
      // if(voucherObj && voucherObj._id){
      //   this.showConfirmationAlert({...voucherObj, type: 'voucher'});  
      // }else{
      //   const voucherWarningmsg  = `Voucher code ${voucherCode} is invalid.`;
      //   this.showMessage(voucherWarningmsg)
      // }   
    } catch (error) {
      console.log('validateAndApplyVoucher ', error);
    }
  }

  async showMessage(message: any) {
    setTimeout(() => {
      this.confirmationModalService.modal(`${message}`,
        () => console.log(''), this);
    }, 100);

    // try{
    //     const alert = await this.alertController.create({
    //       cssClass: 'my-alert-class',
    //       header: 'Agghh',
    //       backdropDismiss: true,
    //       message,
    //       buttons: [
    //          {
    //             text: 'OK',
    //             cssClass: 'primary1 bold',
    //             handler: () => {}
    //           }
    //         ]
    //     }); 
    //     await alert.present();       
    // }catch(error){
    //   console.log('Error while checking app update ',error)
    // }    
  }

  async showConfirmationAlert(offer: any) {
    try {
      if (this.couponProps.couponApplied) {
        this.confirmationModalService.modal(`Your previously applied coupon will be removed, do you want to continue?`,
          () => this.selectCoupon(offer), this);
      } else if (this.couponProps.mealaweWalletApplied) {
        this.confirmationModalService.modal(`Your cashback applied points will be removed, do you want to continue?`,
          () => this.selectCoupon(offer), this);
      }

      // if(msg){
      //   const alert = await this.alertController.create({
      //     cssClass: 'my-alert-class',
      //     header: 'Confirmation',
      //     backdropDismiss: false,
      //     message: msg,
      //     buttons: [
      //         {
      //           text: 'No',
      //           role: 'cancel',
      //           cssClass: 'primary1 bold',
      //           handler: (blah: any) => {
      //             console.log('Confirm Cancel: blah');
      //           }
      //         },
      //         {
      //           text: 'Yes',
      //           cssClass: 'secondary-color3 bold',
      //           handler: () => {
      //             this.selectCoupon(offer);        
      //           }
      //         }
      //       ]
      //   });  
      //   await alert.present();
      // }else{
      //   this.selectCoupon(offer);  
      // }      
    } catch (error) {
      console.log('error while showing alert ', error);
    }
  }

  selectCoupon(offer: any) {
    console.log(offer)
    if (offer.appliedOnlyOnSpecial && !this.couponProps.specialMenuPresent) {
      const msg = `This coupon is applicable only on special Items`;
      this.showMessage(msg);
    } else if (this.couponProps.itemPrice && this.couponProps.itemPrice < offer.minAmount) {
      const differenceAmt = offer.minAmount - this.couponProps.itemPrice;
      // const msg = `Kindly add &#8377;${differenceAmt} to avail this coupon`;
      const msg = `Kindly add Rs.${differenceAmt} to avail this coupon`;
      this.showMessage(msg);
    } else {
      this.validateAndApplyVoucher(offer, true);
    }
    this.selectedCoupon = offer;
    if (this.selectedCoupon.type === 'voucher') {
      this.validateAndApplyVoucher(offer, true);
    } else {
      this.validateAndApplyCoupon(offer, true);
    }
    this.getDeliveryChargeQuote()
    let el = this.voucherCanvas.nativeElement;
    el.click();
  }

  goBack() {
    this.toggleSelected = !this.toggleSelected;
  }


  test() {
    alert('')
  }

}
