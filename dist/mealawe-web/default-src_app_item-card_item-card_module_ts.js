"use strict";
(self["webpackChunkMealaweWeb"] = self["webpackChunkMealaweWeb"] || []).push([["default-src_app_item-card_item-card_module_ts"],{

/***/ 8461:
/*!**************************************************!*\
  !*** ./src/app/item-card/item-card.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemCardComponent: () => (/* binding */ ItemCardComponent)
/* harmony export */ });
/* harmony import */ var E_My_workspace_MealAwe_CodeBase_userWebApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_service_cart_management_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/service/cart-management.service */ 5868);
/* harmony import */ var _toaster_toaster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toaster/toaster.service */ 5914);
/* harmony import */ var _service_runtime_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../service/runtime-storage.service */ 4235);
/* harmony import */ var src_service_order_booking_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/service/order-booking.service */ 7941);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);

var _class;







function ItemCardComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div", 20);
  }
}
function ItemCardComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div", 21);
  }
}
function ItemCardComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Jain");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a0, a1, a2) {
  return {
    "spicy1": a0,
    "spicy2": a1,
    "spicy3": a2
  };
};
function ItemCardComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div", 23);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction3"](1, _c0, ctx_r3.item.spicyLevel === 1, ctx_r3.item.spicyLevel === 2, ctx_r3.item.spicyLevel === 3));
  }
}
function ItemCardComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Serves ", ctx_r4.item.servesTo, " ");
  }
}
function ItemCardComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Per Unit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ItemCardComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", ctx_r6.item.servingQuantity, " ", ctx_r6.item.servingQuantityUnit, "");
  }
}
function ItemCardComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r7.item.kitchenName, "");
  }
}
function ItemCardComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r8.item.itemDescription);
  }
}
function ItemCardComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ItemCardComponent_div_17_Template_span_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r16.readmore = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "read more");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r9.item.subDescription, " ");
  }
}
function ItemCardComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Taste of region: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r10.item.tasteOfRegion);
  }
}
function ItemCardComponent_img_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 29);
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r11.imageUrl + ctx_r11.item.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
  }
}
function ItemCardComponent_div_23_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ItemCardComponent_div_23_div_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r20.addToCart());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "ADD");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ItemCardComponent_div_23_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 34)(1, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ItemCardComponent_div_23_div_2_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r22.decreaseCount(ctx_r22.item));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ItemCardComponent_div_23_div_2_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r24.increaseCount(ctx_r24.item));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r19.item.count);
  }
}
const _c1 = function (a0) {
  return {
    noImage: a0
  };
};
function ItemCardComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ItemCardComponent_div_23_div_1_Template, 2, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ItemCardComponent_div_23_div_2_Template, 9, 1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](3, _c1, !ctx_r12.item.imageUrl));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r12.item.count && (!ctx_r12.item.isSpecialMenu || ctx_r12.item.isSpecialMenu && ctx_r12.orderType === "allDay"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r12.item.count);
  }
}
function ItemCardComponent_div_24_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "JUST MISSED");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ItemCardComponent_div_24_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "COMING NEXT");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ItemCardComponent_div_24_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "NOT AVAILABLE");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ItemCardComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ItemCardComponent_div_24_div_1_Template, 2, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ItemCardComponent_div_24_div_2_Template, 2, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ItemCardComponent_div_24_div_3_Template, 2, 0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r13.missed);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r13.comingnext);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r13.item.itemAvailable && ctx_r13.orderType === "advance" || ctx_r13.item.quantityAvailable - ctx_r13.item.quantityBooked <= 0 && ctx_r13.orderType === "daily");
  }
}
function ItemCardComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("This item takes ", ctx_r14.item.preparationTime, "mins to prepare");
  }
}
function ItemCardComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div", 47);
  }
}
const _c2 = function (a0) {
  return {
    "specialMenu": a0
  };
};
class ItemCardComponent {
  constructor(cartManagementService, toasterService, runtimeStorageService, orderBookingService) {
    this.cartManagementService = cartManagementService;
    this.toasterService = toasterService;
    this.runtimeStorageService = runtimeStorageService;
    this.orderBookingService = orderBookingService;
    this.imageUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.imageUrl;
    this.showPartition = false;
    this.inflatePercentage = 0;
    this.specialInflatePercentage = 0;
    this.readmore = false;
    const specialInflatePercentage = this.runtimeStorageService.getCacheData('SPECIAL_INFLATE_PERCENTAGE');
    if (specialInflatePercentage) {
      this.specialInflatePercentage = specialInflatePercentage;
    }
  }
  ngOnInit() {
    const inflatePercentage = this.runtimeStorageService.getCacheData('MEALAWE_INFLATE_PERCENTAGE');
    const advInflatePercentage = this.runtimeStorageService.getCacheData('ADV_INFLATE_PERCENTAGE');
    const subInflatePercentage = this.runtimeStorageService.getCacheData('SUB_INFLATE_PERCENTAGE');
    if (this.item.inflatePrice) {
      if (inflatePercentage && this.orderType === 'allDay') {
        this.inflatePercentage = inflatePercentage;
      } else if (advInflatePercentage && this.orderType === 'advance') {
        this.inflatePercentage = advInflatePercentage;
      } else if (subInflatePercentage && this.orderType === 'subscription') {
        this.inflatePercentage = subInflatePercentage;
      }
    }
    this.item.quantityBooked = this.item.quantityBooked ? this.item.quantityBooked : 0;
    this.item.count = this.item.count ? this.item.count : 0;
    const item = this.cartManagementService.checkIfItemIsAdded(this.item, this.kitchenName, this.kitchenId, this.orderType);
    this.item = {
      ...item
    };
    const inflateBy = this.item.isSpecialMenu ? this.specialInflatePercentage : this.inflatePercentage;
    let mealawePrice = item.itemPrice + Math.ceil(item.itemPrice * inflateBy / 100);
    const reminderPrice = mealawePrice % 5;
    mealawePrice = mealawePrice - reminderPrice;
    if (reminderPrice > 2.5) {
      mealawePrice += 5;
    }
    this.item.mealawePrice = mealawePrice;
    this.item.subDescription = `${this.item.itemDescription.substring(0, 70)}...`;
    setTimeout(() => {
      this.showPartition = true;
    }, 500);
  }
  addToCart() {
    var _this = this;
    return (0,E_My_workspace_MealAwe_CodeBase_userWebApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const item = yield _this.cartManagementService.addItemToCart(_this.item, _this.kitchenName, _this.kitchenId, _this.orderType, _this.kitchen);
      if (item) {
        _this.item = item;
      }
    })();
  }
  increaseCount(item) {
    if (this.orderType === 'daily' && item.quantityAvailable - this.item.quantityBooked === item.count || item.isSpecialMenu && item.specialQuantityAvailable === item.count) {
      this.toasterService.error(108);
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
  }
  decreaseCount(item) {
    item.count--;
    this.cartManagementService.updateItemToCart(item);
  }
  bookSpecialItem(item) {
    return (0,E_My_workspace_MealAwe_CodeBase_userWebApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  } // const status = await this.orderBookingService.bookOrder(item,this.kitchen,this.orderType);
  // if(status){
  //   item.booked = true;
  // }
}
_class = ItemCardComponent;
_class.ɵfac = function ItemCardComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_service_cart_management_service__WEBPACK_IMPORTED_MODULE_2__.CartManagementService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_3__.ToasterService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_runtime_storage_service__WEBPACK_IMPORTED_MODULE_4__.RuntimeStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_service_order_booking_service__WEBPACK_IMPORTED_MODULE_5__.OrderBookingService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-item-card"]],
  inputs: {
    item: "item",
    kitchenName: "kitchenName",
    kitchenId: "kitchenId",
    orderType: "orderType",
    screenFrom: "screenFrom",
    kitchen: "kitchen",
    missed: "missed",
    comingnext: "comingnext"
  },
  decls: 27,
  vars: 21,
  consts: [[1, "container-fluid", "noBottomPadding", 3, "ngClass"], [1, "row"], [1, "col-7", "itemLeftTopPadding"], ["class", "vegIcon typeIcon inlineMargin", 4, "ngIf"], ["class", "nonvegIcon typeIcon inlineMargin", 4, "ngIf"], ["class", "capsule inlineMargin", 4, "ngIf"], ["class", "spicyLebel inlineMargin", 3, "ngClass", 4, "ngIf"], [1, "header3", "bold", "bgTopDownpadding2"], ["class", "header5", 4, "ngIf"], [1, "price"], ["class", "description", 4, "ngIf"], ["class", "tasteOfRegion", 4, "ngIf"], [1, "bgToppadding3"], ["src", "assets/moreimages/discountImg.png", 1, "discountImg"], [1, "col-5", "text-center", "pt-4"], ["class", "itemImage", 3, "src", 4, "ngIf"], ["class", "addPosition pointer", 3, "ngClass", 4, "ngIf"], ["class", "missedOuter", 4, "ngIf"], ["class", "preparationTimemsg", 4, "ngIf"], ["class", "partitionLine", 4, "ngIf"], [1, "vegIcon", "typeIcon", "inlineMargin"], [1, "nonvegIcon", "typeIcon", "inlineMargin"], [1, "capsule", "inlineMargin"], [1, "spicyLebel", "inlineMargin", 3, "ngClass"], [1, "header5"], [1, "description"], [1, "readmorestyle", 3, "click"], [1, "tasteOfRegion"], [1, "mainRegion", "grey"], [1, "itemImage", 3, "src"], [1, "addPosition", "pointer", 3, "ngClass"], ["class", "addButton white", 3, "click", 4, "ngIf"], ["class", "white addeditemStyle", 4, "ngIf"], [1, "addButton", "white", 3, "click"], [1, "white", "addeditemStyle"], [1, "incbutton", 3, "click"], [1, "indicator", "right", "leftdiv"], [1, "midsection"], [1, "indicator", "rightdiv"], [1, "missedOuter"], ["class", "missed", 4, "ngIf"], ["class", "comingnext", 4, "ngIf"], ["class", "notavailable", 4, "ngIf"], [1, "missed"], [1, "comingnext"], [1, "notavailable"], [1, "preparationTimemsg"], [1, "partitionLine"]],
  template: function ItemCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ItemCardComponent_div_4_Template, 1, 0, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ItemCardComponent_div_5_Template, 1, 0, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, ItemCardComponent_div_6_Template, 2, 0, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, ItemCardComponent_div_7_Template, 1, 5, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, ItemCardComponent_div_8_Template, 2, 1, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, ItemCardComponent_div_9_Template, 2, 0, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, ItemCardComponent_div_10_Template, 2, 2, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, ItemCardComponent_div_13_Template, 2, 1, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, ItemCardComponent_div_16_Template, 2, 1, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, ItemCardComponent_div_17_Template, 4, 1, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, ItemCardComponent_div_18_Template, 4, 1, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "img", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, ItemCardComponent_img_22_Template, 1, 1, "img", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, ItemCardComponent_div_23_Template, 3, 5, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, ItemCardComponent_div_24_Template, 4, 3, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, ItemCardComponent_div_25_Template, 2, 1, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, ItemCardComponent_div_26_Template, 1, 0, "div", 19);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](19, _c2, ctx.item.isSpecialMenu));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.item.itemType === "Veg");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.item.itemType === "NonVeg");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.item.itemType === "Jain");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.item.itemFlavour === "Sour" && ctx.item.spicyLevel > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.item.itemServingType === "perPerson");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.item.itemServingType === "perUnit");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.item.itemServingType === "perQuantity");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.item.itemName);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.screenFrom === "searchPage" || ctx.screenFrom === "categoryPage");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\u20B9", ctx.item.mealawePrice, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.readmore);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.readmore);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.item.tasteOfRegion);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.item.imageUrl);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !(ctx.screenFrom === "searchPage" || ctx.screenFrom === "categoryPage" || ctx.missed || ctx.comingnext || ctx.orderType === "advance" && !ctx.item.itemAvailable || ctx.item.quantityAvailable - ctx.item.quantityBooked === 0 && ctx.orderType === "daily"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.missed || ctx.comingnext || !ctx.item.itemAvailable && ctx.orderType === "advance" || ctx.item.quantityAvailable - ctx.item.quantityBooked === 0 && ctx.orderType === "daily");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.item.preparationTime > 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showPartition);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf],
  styles: [".noBottomPadding[_ngcontent-%COMP%] {\n  padding-bottom: 10px;\n  min-height: 162px;\n}\n\n.itemImage[_ngcontent-%COMP%] {\n  border-radius: 15px;\n  height: 135px;\n  width: 130px !important;\n}\n\n.partitionLine[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(164, 164, 164, 0.2588235294);\n  margin: 0 5%;\n  height: 1px;\n}\n\n.capsule[_ngcontent-%COMP%] {\n  font-size: 8px;\n  border: 1px solid #BBC0D0;\n  border-radius: 2px;\n  vertical-align: top;\n  padding: 2px 6px;\n}\n\n.addPosition[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  bottom: 19px;\n  left: 42%;\n}\n.addPosition.noImage[_ngcontent-%COMP%] {\n  top: 42px !important;\n}\n\n.addButton[_ngcontent-%COMP%] {\n  background: white;\n  width: 62px;\n  text-align: center;\n  border-radius: 8px;\n  padding: 4px 13px;\n  color: #15a292;\n  font-size: 14px;\n  font-weight: bold;\n  line-height: 20px;\n  box-shadow: 1px 3px 6px rgba(16, 24, 40, 0.55);\n}\n\n.bookButton[_ngcontent-%COMP%] {\n  background: #28ad9e;\n  width: 77px;\n  text-align: center;\n  border-radius: 8px;\n  padding: 4px 13px;\n  color: white;\n  font-size: 14px;\n  margin-left: -7px;\n}\n\n.bookedButton[_ngcontent-%COMP%] {\n  background: #af8c8c;\n  width: 89px;\n  text-align: center;\n  border-radius: 8px;\n  padding: 4px 13px;\n  color: white;\n  font-size: 14px;\n  margin-left: -13px;\n}\n\n.addeditemStyle[_ngcontent-%COMP%] {\n  height: 24px;\n  width: 100%;\n  font-size: 14px;\n  margin: 0;\n  display: flex;\n  flex-flow: row;\n  position: relative;\n  left: -17px;\n}\n\n.incbutton[_ngcontent-%COMP%] {\n  width: 40px;\n  text-align: center;\n  background: transparent;\n  border: 0px;\n  color: white;\n  height: 100%;\n  line-height: 25px;\n  padding: 0;\n  margin: 0px;\n}\n.incbutton[_ngcontent-%COMP%]   .indicator[_ngcontent-%COMP%] {\n  background: #15a292;\n  display: block;\n  width: 27px;\n  height: 100%;\n  font-size: 18px;\n}\n.incbutton[_ngcontent-%COMP%]   .leftdiv[_ngcontent-%COMP%] {\n  border-radius: 8px 0px 0px 8px;\n  padding-top: 0px;\n}\n.incbutton[_ngcontent-%COMP%]   .rightdiv[_ngcontent-%COMP%] {\n  border-radius: 0px 8px 8px 0px;\n  padding-top: 0px;\n}\n\n.midsection[_ngcontent-%COMP%] {\n  width: 20px;\n  text-align: center;\n  background: #15a292;\n  padding-top: 3px;\n}\n\n.spicyLebel[_ngcontent-%COMP%] {\n  background-repeat: no-repeat !important;\n  border: 1px solid rgb(185, 4, 28);\n  border-radius: 3px;\n  display: inline-block;\n  height: 14px;\n}\n\n.spicy1[_ngcontent-%COMP%] {\n  background: url('chili1.svg');\n  background-size: 11px;\n  background-position: 3px 1px !important;\n  width: 20px;\n}\n\n.spicy2[_ngcontent-%COMP%] {\n  background: url('chili2.svg');\n  background-size: 15px;\n  background-position: 2px 1px !important;\n  width: 25px;\n}\n\n.spicy3[_ngcontent-%COMP%] {\n  background: url('chili3.svg');\n  background-size: 22px;\n  background-position: 1px 1px !important;\n  width: 28px;\n}\n\n.capsuledislplay[_ngcontent-%COMP%] {\n  display: table-cell;\n}\n\n.missedOuter[_ngcontent-%COMP%] {\n  width: 133px;\n  position: absolute;\n  top: 2px;\n  left: 1px;\n  height: 141px;\n  border-radius: 15px;\n  background: rgba(4, 4, 4, 0.3098039216);\n}\n.missedOuter[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  background: #b9041c;\n  border-radius: 0px 0px 15px 15px;\n  height: 20px;\n  text-align: center;\n  padding: 6px 0px;\n  color: white;\n  font-size: 8px;\n  letter-spacing: 1px;\n  word-spacing: 2px;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  left: 0px;\n}\n.missedOuter[_ngcontent-%COMP%]   .missed[_ngcontent-%COMP%] {\n  background: black;\n}\n.missedOuter[_ngcontent-%COMP%]   .comingnext[_ngcontent-%COMP%] {\n  background: #15a292;\n}\n.missedOuter[_ngcontent-%COMP%]   .notavailable[_ngcontent-%COMP%] {\n  background: #fe8e9c;\n}\n\n.specialMenu[_ngcontent-%COMP%] {\n  background: linear-gradient(45deg, #FECF21, transparent);\n  border-radius: 11px;\n}\n\n.specialMenuIcon[_ngcontent-%COMP%] {\n  height: 48px;\n  position: relative;\n  left: -25px;\n  top: 21px;\n}\n\n.inlineMargin[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 10px;\n}\n\n.price[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: -0.0043em;\n  color: #676F81;\n}\n\n.description[_ngcontent-%COMP%] {\n  font-weight: 300;\n  font-size: 12px;\n  letter-spacing: 0.0006em;\n  color: #676F81;\n}\n\n.itemLeftTopPadding[_ngcontent-%COMP%] {\n  padding-top: 10px;\n}\n\n.tasteOfRegion[_ngcontent-%COMP%] {\n  font-size: 12px;\n  padding-top: 4px;\n}\n\n.discountImg[_ngcontent-%COMP%] {\n  height: 25px;\n}\n\n.readmorestyle[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #15a292;\n}\n\n.preparationTimemsg[_ngcontent-%COMP%] {\n  font-size: 11px;\n  padding-left: 10px;\n  font-style: italic;\n}\n\n@media only screen and (max-width: 600px) {\n  .addPosition[_ngcontent-%COMP%] {\n    left: 41px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaXRlbS1jYXJkL2l0ZW0tY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFDQTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBRUo7O0FBQUE7RUFDSSwwREFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBR0o7O0FBQUE7RUFDSSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFHSjs7QUFBQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQUdKO0FBRkk7RUFDSSxvQkFBQTtBQUlSOztBQURBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsOENBQUE7QUFJSjs7QUFGQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFLSjs7QUFIQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFNSjs7QUFIQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQU1KOztBQUpBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBT0o7QUFOSTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQVFSO0FBTkk7RUFDSSw4QkFBQTtFQUNBLGdCQUFBO0FBUVI7QUFOSTtFQUNJLDhCQUFBO0VBQ0EsZ0JBQUE7QUFRUjs7QUFMQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFRSjs7QUFOQTtFQUNJLHVDQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQVNKOztBQVBBO0VBQ0ksNkJBQUE7RUFDQSxxQkFBQTtFQUNBLHVDQUFBO0VBQ0EsV0FBQTtBQVVKOztBQVJBO0VBQ0ksNkJBQUE7RUFDQSxxQkFBQTtFQUNBLHVDQUFBO0VBQ0EsV0FBQTtBQVdKOztBQVRBO0VBQ0ksNkJBQUE7RUFDQSxxQkFBQTtFQUNBLHVDQUFBO0VBQ0EsV0FBQTtBQVlKOztBQVZBO0VBQ0ksbUJBQUE7QUFhSjs7QUFYQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUNBQUE7QUFjSjtBQWJJO0VBQ0ksbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFlUjtBQWJJO0VBQ0ksaUJBQUE7QUFlUjtBQWJJO0VBQ0ksbUJBQUE7QUFlUjtBQWJJO0VBQ0ksbUJBQUE7QUFlUjs7QUFYQTtFQUNJLHdEQUFBO0VBQ0EsbUJBQUE7QUFjSjs7QUFaQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBZUo7O0FBYkE7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0FBZ0JKOztBQWJBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUFnQko7O0FBZEE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7QUFpQko7O0FBZkE7RUFDSSxpQkFBQTtBQWtCSjs7QUFoQkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFtQko7O0FBaEJBO0VBQ0ksWUFBQTtBQW1CSjs7QUFqQkE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQW9CSjs7QUFqQkE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQW9CSjs7QUFqQkE7RUFDSTtJQUNJLFVBQUE7RUFvQk47QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5ub0JvdHRvbVBhZGRpbmd7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDE2MnB4O1xyXG59XHJcbi5pdGVtSW1hZ2V7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiAxMzVweDtcclxuICAgIHdpZHRoOiAxMzBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5wYXJ0aXRpb25MaW5le1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhNGE0YTQ0MjtcclxuICAgIG1hcmdpbjogMCA1JTtcclxuICAgIGhlaWdodDogMXB4O1xyXG59XHJcblxyXG4uY2Fwc3VsZXtcclxuICAgIGZvbnQtc2l6ZTogOHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0JCQzBEMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICBwYWRkaW5nOiAycHggNnB4O1xyXG59XHJcblxyXG4uYWRkUG9zaXRpb257XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3R0b206IDE5cHg7XHJcbiAgICBsZWZ0OiA0MiU7XHJcbiAgICAmLm5vSW1hZ2V7XHJcbiAgICAgICAgdG9wOiA0MnB4ICFpbXBvcnRhbnQ7ICBcclxuICAgIH1cclxufVxyXG4uYWRkQnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICB3aWR0aDogNjJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIHBhZGRpbmc6IDRweCAxM3B4O1xyXG4gICAgY29sb3I6ICMxNWEyOTI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDNweCA2cHggcmdiKDE2IDI0IDQwIC8gNTUlKTtcclxufVxyXG4uYm9va0J1dHRvbntcclxuICAgIGJhY2tncm91bmQ6ICMyOGFkOWU7XHJcbiAgICB3aWR0aDogNzdweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIHBhZGRpbmc6IDRweCAxM3B4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC03cHg7XHJcbn1cclxuLmJvb2tlZEJ1dHRvbntcclxuICAgIGJhY2tncm91bmQ6ICNhZjhjOGM7XHJcbiAgICB3aWR0aDogODlweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIHBhZGRpbmc6IDRweCAxM3B4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xM3B4O1xyXG59XHJcblxyXG4uYWRkZWRpdGVtU3R5bGV7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IC0xN3B4O1xyXG59XHJcbi5pbmNidXR0b257XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOjBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGxpbmUtaGVpZ2h0OjI1cHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICAuaW5kaWNhdG9ye1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMxNWEyOTI7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDI3cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuICAgIC5sZWZ0ZGl2e1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweCAwcHggMHB4IDhweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgfVxyXG4gICAgLnJpZ2h0ZGl2e1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCA4cHggOHB4IDBweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgfVxyXG59XHJcbi5taWRzZWN0aW9ue1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTVhMjkyO1xyXG4gICAgcGFkZGluZy10b3A6IDNweDtcclxufVxyXG4uc3BpY3lMZWJlbHtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxODUgNCAyOCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDE0cHg7XHJcbn1cclxuLnNwaWN5MXtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnfi9zcmMvYXNzZXRzL2ljb24vY2hpbGkxLnN2ZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMXB4O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogM3B4IDFweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbn0gIFxyXG4uc3BpY3kye1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCd+L3NyYy9hc3NldHMvaWNvbi9jaGlsaTIuc3ZnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAycHggMXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMjVweDtcclxufVxyXG4uc3BpY3kze1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCd+L3NyYy9hc3NldHMvaWNvbi9jaGlsaTMuc3ZnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIycHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxcHggMXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMjhweDtcclxufVxyXG4uY2Fwc3VsZWRpc2xwbGF5e1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxufVxyXG4ubWlzc2VkT3V0ZXJ7XHJcbiAgICB3aWR0aDogMTMzcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDJweDtcclxuICAgIGxlZnQ6IDFweDtcclxuICAgIGhlaWdodDogMTQxcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZDogIzA0MDQwNDRmO1xyXG4gICAgZGl2e1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNiOTA0MWM7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxNXB4IDE1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiA2cHggMHB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDhweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgIHdvcmQtc3BhY2luZzogMnB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbGVmdDogMHB4OyAgICBcclxuICAgIH1cclxuICAgIC5taXNzZWR7XHJcbiAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICB9XHJcbiAgICAuY29taW5nbmV4dHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMTVhMjkyO1xyXG4gICAgfVxyXG4gICAgLm5vdGF2YWlsYWJsZXtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmU4ZTljO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc3BlY2lhbE1lbnV7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNGRUNGMjEsIHRyYW5zcGFyZW50KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDExcHg7XHJcbn1cclxuLnNwZWNpYWxNZW51SWNvbntcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IC0yNXB4O1xyXG4gICAgdG9wOiAyMXB4O1xyXG59XHJcbi5pbmxpbmVNYXJnaW57XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5wcmljZXtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMDQzZW07XHJcbiAgICBjb2xvcjogIzY3NkY4MTtcclxufVxyXG4uZGVzY3JpcHRpb257XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDAwNmVtO1xyXG4gICAgY29sb3I6ICM2NzZGODE7XHJcbn1cclxuLml0ZW1MZWZ0VG9wUGFkZGluZ3tcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcbi50YXN0ZU9mUmVnaW9ueyAgICBcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHBhZGRpbmctdG9wOiA0cHg7XHJcblxyXG59XHJcbi5kaXNjb3VudEltZ3tcclxuICAgIGhlaWdodDogMjVweDtcclxufVxyXG4ucmVhZG1vcmVzdHlsZXtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgY29sb3I6ICMxNWEyOTI7XHJcbn1cclxuXHJcbi5wcmVwYXJhdGlvblRpbWVtc2d7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC5hZGRQb3NpdGlvbntcclxuICAgICAgICBsZWZ0OjQxcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 8207:
/*!***********************************************!*\
  !*** ./src/app/item-card/item-card.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemCardModule: () => (/* binding */ ItemCardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _item_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item-card.component */ 8461);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;



class ItemCardModule {}
_class = ItemCardModule;
_class.ɵfac = function ItemCardModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ItemCardModule, {
    declarations: [_item_card_component__WEBPACK_IMPORTED_MODULE_0__.ItemCardComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
    exports: [_item_card_component__WEBPACK_IMPORTED_MODULE_0__.ItemCardComponent]
  });
})();

/***/ }),

/***/ 7941:
/*!**********************************************!*\
  !*** ./src/service/order-booking.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderBookingService: () => (/* binding */ OrderBookingService)
/* harmony export */ });
/* harmony import */ var E_My_workspace_MealAwe_CodeBase_userWebApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local-storage.service */ 8798);
/* harmony import */ var _apiService_api_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apiService/api-main.service */ 2492);
/* harmony import */ var src_app_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/toaster/toaster.service */ 5914);

var _class;




// import { CommonPopupService } from './common-popup.service';
class OrderBookingService {
  constructor(localStorageService, apiMainService, toasterService) {
    this.localStorageService = localStorageService;
    this.apiMainService = apiMainService;
    this.toasterService = toasterService;
    this.userProfile = {};
  }
  // async bookOrder(item: { mainMenuItemId: any; itemName: any; },kitchenObj: any,orderType: string){
  //     return new Promise(async (resolve, reject) => {
  //         try{ 
  //             this.userProfile = this.localStorageService.getCacheData('USER_PROFILE');  
  //             if(this.userProfile && this.userProfile._id){
  //                 const profileSaved =await this.checkProfileNameAndEmail();
  //                 if(!profileSaved){
  //                     resolve(false);  
  //                 }
  //                 const addressSaved = await this.checkSavedAddress();
  //                 if(addressSaved){
  //                     const {orderBooked} = await this.apiMainService.isSpecialOrderBooked(this.userProfile._id,item.mainMenuItemId);
  //                     if(!orderBooked){
  //                         await this.createOrder(item,kitchenObj,orderType);
  //                         this.commonPopupService.showFlashOffer({
  //                             headerMsg: `'${item.itemName}' booked`,
  //                             mainMessage: `You special item booking is completed. Our contact person will call you soon.`,
  //                             subMessage: `Keep using mealawe and book special meals in every offer`
  //                         });
  //                         resolve(true);
  //                     }else{
  //                         this.toasterService.error(302);                    
  //                         resolve(false);
  //                     }
  //                 }else{
  //                     resolve(false);
  //                 }                    
  //             }else{
  //                 this.commonPopupService.showLogingPopup();                  
  //                 resolve(false);
  //             }              
  //         }catch (e){ 
  //             resolve(false);
  //         }
  //     });
  // }
  checkProfileNameAndEmail() {
    var _this = this;
    return (0,E_My_workspace_MealAwe_CodeBase_userWebApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _ref;
      return new Promise(function (_x, _x2) {
        return (_ref = _ref || (0,E_My_workspace_MealAwe_CodeBase_userWebApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
          try {
            if (_this.userProfile && _this.userProfile.userName && _this.userProfile.email) {
              resolve(true);
            } else {
              // await this.commonPopupService.openProfileAlert();
              resolve(false);
            }
          } catch (e) {
            resolve(false);
          }
        })).apply(this, arguments);
      });
    })();
  }
  // private async checkSavedAddress(){
  //     return new Promise(async (resolve, reject) => {
  //         const currentLocation = this.localStorageService.getCacheData('CURRENT_LOCATION');
  //         if(currentLocation && !currentLocation.address){   
  //             const savedAddress = await this.commonPopupService.selectSavedLocation();
  //             if(savedAddress){
  //                 resolve(true);
  //             }else{
  //                 resolve(false);
  //             }   
  //         }else{
  //             resolve(true);
  //         }
  //     });
  // }
  createOrder(item, kitchenObj, orderType) {
    var _this2 = this,
      _ref2;
    return new Promise(function (_x3, _x4) {
      return (_ref2 = _ref2 || (0,E_My_workspace_MealAwe_CodeBase_userWebApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
        try {
          _this2.userProfile = _this2.localStorageService.getCacheData('USER_PROFILE');
          const userProfile = _this2.userProfile;
          const currentLocation = _this2.localStorageService.getCacheData('CURRENT_LOCATION');
          const foodOrderObj = {
            customerId: userProfile._id,
            customerName: userProfile.userName,
            customerLocation: currentLocation,
            customerEmail: userProfile.email,
            customerPhoneNo: userProfile.phoneNo,
            kitchenId: kitchenObj._id,
            kitchenName: kitchenObj.kitchenName,
            kitchenPhoneNo: kitchenObj.phoneNo,
            orderType: orderType,
            amount: item.itemPrice,
            itemAmount: item.itemPrice,
            kitchenDiscount: 0,
            deliveryCharges: 0,
            discount: 0,
            taxes: 0,
            itemList: [{
              ...item,
              count: 1
            }],
            addOns: [],
            specialRequest: '',
            nonContactDelivery: false,
            orderDate: new Date(),
            moneyWalletPointsUsed: 0,
            mealaweWalletPointsUsed: 0,
            mealaweDeliveryDiscount: 0,
            mealaweItemDiscount: 0,
            mealaweTotalAmt: item.mealawePrice,
            mealaweKitchenDiscount: 0,
            specialMenuId: item.mainMenuItemId
          };
          if (kitchenObj.distance >= 0) {
            foodOrderObj.distance = kitchenObj.distance;
          }
          const deliveryDate = new Date(item.deliveryDate);
          deliveryDate.setHours(18);
          deliveryDate.setMinutes(0);
          foodOrderObj.orderComplitionDate = deliveryDate;
          foodOrderObj.orderComplitionTime = deliveryDate;
          yield _this2.apiMainService.saveOrderBooking(foodOrderObj);
          resolve(true);
        } catch (error) {
          reject(false);
        }
      })).apply(this, arguments);
    });
  }
}
_class = OrderBookingService;
_class.ɵfac = function OrderBookingService_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_local_storage_service__WEBPACK_IMPORTED_MODULE_1__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_apiService_api_main_service__WEBPACK_IMPORTED_MODULE_2__.ApiMainService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_toaster_toaster_service__WEBPACK_IMPORTED_MODULE_3__.ToasterService));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);
//# sourceMappingURL=default-src_app_item-card_item-card_module_ts.js.map