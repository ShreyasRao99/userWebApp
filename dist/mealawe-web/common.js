"use strict";
(self["webpackChunkMealaweWeb"] = self["webpackChunkMealaweWeb"] || []).push([["common"],{

/***/ 1853:
/*!*****************************************!*\
  !*** ./src/app/footer/footer.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterModule: () => (/* binding */ FooterModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.component */ 6515);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;



class FooterModule {}
_class = FooterModule;
_class.ɵfac = function FooterModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FooterModule, {
    declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
    exports: [_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent]
  });
})();

/***/ }),

/***/ 6316:
/*!******************************************************!*\
  !*** ./src/app/main-slider/main-slider.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainSliderComponent: () => (/* binding */ MainSliderComponent)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_service_runtime_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/service/runtime-storage.service */ 4235);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
var _class;





function MainSliderComponent_swiper_slide_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "swiper-slide")(1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MainSliderComponent_swiper_slide_4_Template_img_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const banner_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.gotoSubscription(banner_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const banner_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", banner_r1.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
// import { mainBannerList } from 'src/config/banners.config';
class MainSliderComponent {
  constructor(router, runtimeStorageService) {
    this.router = router;
    this.runtimeStorageService = runtimeStorageService;
    this.imageUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.imageUrl;
  }
  ngOnInit() {
    const swiperEl = document.querySelector('swiper-container');
    const swiperParams = {
      slidesPerView: 3,
      spaceBetween: 10,
      breakpoints: {
        480: {
          slidesPerView: 1
        },
        640: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 3
        }
      },
      on: {
        init() {}
      }
    };
    Object.assign(swiperEl, swiperParams);
  }
  gotoSubscription(banner) {
    if (banner.type === 'subscription') {
      this.runtimeStorageService.setCacheData('SUBSCRIPTION_LOOKED', {
        packageCategory: banner.packageCategory,
        packageSubCategory: banner.packageSubCategory
      });
      this.router.navigate(['/subscription']);
    } else if (banner.type === 'bulkOrder') {
      // this.navCtrl.navigateForward(['/bulkOrder']);
    }
  }
}
_class = MainSliderComponent;
_class.ɵfac = function MainSliderComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_service_runtime_storage_service__WEBPACK_IMPORTED_MODULE_1__.RuntimeStorageService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-main-slider"]],
  inputs: {
    bannerList: "bannerList"
  },
  decls: 5,
  vars: 1,
  consts: [[1, "slider-container", "pointer"], [1, "sectionHeader", "col-6", "mt-4"], ["autoplay", "true", "pagination", "true", "speed", "700", "css-mode", "true", 1, "mt-4"], [4, "ngFor", "ngForOf"], ["alt", "Card image cap", 1, "card-img-top", 3, "src", "click"]],
  template: function MainSliderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "What we offer");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "swiper-container", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, MainSliderComponent_swiper_slide_4_Template, 2, 1, "swiper-slide", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.bannerList);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf],
  styles: ["img[_ngcontent-%COMP%] {\n  border-radius: 5%;\n}\n\n.slider-container[_ngcontent-%COMP%] {\n  padding: 0 3% 0 3%;\n}\n\n.test[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFpbi1zbGlkZXIvbWFpbi1zbGlkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcclxufVxyXG5cclxuLnNsaWRlci1jb250YWluZXJ7XHJcbiAgICBwYWRkaW5nOiAwIDMlIDAgMyU7XHJcbn1cclxuXHJcbi50ZXN0IHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAvLyBoZWlnaHQ6IDEwMCU7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 7001:
/*!***************************************************!*\
  !*** ./src/app/main-slider/main-slider.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainSliderModule: () => (/* binding */ MainSliderModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _main_slider_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-slider.component */ 6316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;



class MainSliderModule {}
_class = MainSliderModule;
_class.ɵfac = function MainSliderModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MainSliderModule, {
    declarations: [_main_slider_component__WEBPACK_IMPORTED_MODULE_0__.MainSliderComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
    exports: [_main_slider_component__WEBPACK_IMPORTED_MODULE_0__.MainSliderComponent]
  });
})();

/***/ }),

/***/ 9083:
/*!*********************************************!*\
  !*** ./src/service/user-profile.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserProfileService: () => (/* binding */ UserProfileService)
/* harmony export */ });
/* harmony import */ var E_My_workspace_MealAwe_CodeBase_userWebApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _geolocation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./geolocation.service */ 8534);
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local-storage.service */ 8798);
/* harmony import */ var _google_map_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./google-map.service */ 9808);

var _class;




class UserProfileService {
  constructor(geoLocationService, localStorageService, googleMapService) {
    this.geoLocationService = geoLocationService;
    this.localStorageService = localStorageService;
    this.googleMapService = googleMapService;
  }
  // async loginUser(){
  //     this.navCntrl.navigateForward(['/mobile/true']);
  // }
  checkLocationChange() {
    var _this = this;
    return (0,E_My_workspace_MealAwe_CodeBase_userWebApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const newGeo = yield _this.geoLocationService.getCurrentCoordinate(false, true);
      if (newGeo) {
        if (newGeo && newGeo.addedManually) {
          return {
            changeLocation: true,
            center: newGeo,
            addedManually: true,
            address: newGeo.address,
            savedAddress: newGeo.savedAddress
          };
        } else {
          return {
            changeLocation: true,
            center: newGeo,
            addedManually: false
          };
        }
      } else {
        return {};
      }
    })();
  }
  getCurrntCoordinate() {
    var _this2 = this;
    return (0,E_My_workspace_MealAwe_CodeBase_userWebApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const newGeo = yield _this2.geoLocationService.getCurrentCoordinate(false, true);
      return {
        center: newGeo
      };
    })();
  }
  getSavedAddress(currentLocation) {
    const userProfile = this.localStorageService.getCacheData('USER_PROFILE');
    console.log(userProfile);
    let finalLocation = currentLocation;
    console.log(finalLocation);
    if (userProfile && userProfile._id) {
      if (userProfile.addressList && userProfile.addressList.length > 0) {
        if (currentLocation && currentLocation.geolocation) {
          let currentlatlng = currentLocation.geolocation;
          userProfile.addressList.forEach(address => {
            if (address.geolocation) {
              let addlatlng = address.geolocation;
              if (currentlatlng.lat && currentlatlng.lng && addlatlng.lat && addlatlng.lng) {
                const distance = this.googleMapService.calulateDistance(currentlatlng.lat, currentlatlng.lng, addlatlng.lat, addlatlng.lng);
                const distanceInMeter = Math.round(distance * 1000);
                console.log(distanceInMeter);
                if (distanceInMeter < 100) {
                  this.localStorageService.setCacheData('CURRENT_LOCATION', address);
                  finalLocation = address;
                }
              }
            }
          });
        }
      }
    }
    return finalLocation;
  }
}
_class = UserProfileService;
_class.ɵfac = function UserProfileService_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_geolocation_service__WEBPACK_IMPORTED_MODULE_1__.GeolocationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_local_storage_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_google_map_service__WEBPACK_IMPORTED_MODULE_3__.GoogleMapService));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);
//# sourceMappingURL=common.js.map