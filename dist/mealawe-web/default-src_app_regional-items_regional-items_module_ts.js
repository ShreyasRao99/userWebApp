"use strict";
(self["webpackChunkMealaweWeb"] = self["webpackChunkMealaweWeb"] || []).push([["default-src_app_regional-items_regional-items_module_ts"],{

/***/ 7596:
/*!************************************************************!*\
  !*** ./src/app/regional-items/regional-items.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegionalItemsComponent: () => (/* binding */ RegionalItemsComponent)
/* harmony export */ });
/* harmony import */ var _config_favcuisinelist_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../config/favcuisinelist.config */ 6502);
/* harmony import */ var _config_categorylist_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../config/categorylist.config */ 7687);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../environments/environment */ 553);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
var _class;







const _c0 = ["scrollableContent"];
function RegionalItemsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RegionalItemsComponent_div_12_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const item_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.lookForRegional(item_r2.name));
    })("click", function RegionalItemsComponent_div_12_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const item_r2 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r5.lookForRegional(item_r2.name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", item_r2.url, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r2.name);
  }
}
class RegionalItemsComponent {
  constructor(router) {
    this.router = router;
    this.regionalList = _config_favcuisinelist_config__WEBPACK_IMPORTED_MODULE_0__.regionList;
    this.imageUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.imageUrl;
    this.categorylist = _config_categorylist_config__WEBPACK_IMPORTED_MODULE_1__.categorylist;
    this.rightDisabled = false;
    this.leftDisabled = false;
  }
  ngOnInit() {}
  lookForRegional(region) {
    console.log(region);
    // this.mixpanelservice.track('cuisine',{regional: region});
    this.router.navigate(['/kitchenSearch'], {
      queryParams: {
        category: 'region',
        text: region
      }
    });
  }
  scrollLeft() {
    console.log(this.scrollableContent.nativeElement.scrollLeft);
    this.scrollableContent.nativeElement.scrollTo({
      left: this.scrollableContent.nativeElement.scrollLeft + 500,
      behavior: 'smooth'
    });
  }
  scrollRight() {
    console.log(this.scrollableContent.nativeElement.scrollLeft);
    this.scrollableContent.nativeElement.scrollTo({
      left: this.scrollableContent.nativeElement.scrollLeft - 500,
      behavior: 'smooth'
    });
  }
}
_class = RegionalItemsComponent;
_class.ɵfac = function RegionalItemsComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-regional-items"]],
  viewQuery: function RegionalItemsComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.scrollableContent = _t.first);
    }
  },
  decls: 13,
  vars: 3,
  consts: [[1, "regional-container"], [1, "d-flex", "flex-row", "mt-4"], [1, "sectionHeader", "col-6"], [1, "col-6", "mt-3", "alignRight", "scrollBtns"], [1, "me-2", 3, "disabled", "click"], [1, "bi", "bi-arrow-left"], [3, "disabled", "click"], [1, "bi", "bi-arrow-right"], [1, "container", "pointer"], ["scrollX", "true", 1, "scroll"], ["scrollableContent", ""], ["class", "itemStyle", 3, "click", 4, "ngFor", "ngForOf"], [1, "itemStyle", 3, "click"], [1, "itemImageStyle", 3, "src"], [1, "itemName", "center"]],
  template: function RegionalItemsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Whats Cooking");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3)(5, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RegionalItemsComponent_Template_button_click_5_listener() {
        return ctx.scrollRight();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RegionalItemsComponent_Template_button_click_7_listener() {
        return ctx.scrollLeft();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 8)(10, "div", 9, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, RegionalItemsComponent_div_12_Template, 4, 2, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.leftDisabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.rightDisabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.regionalList);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf],
  styles: ["div[scrollx=true][_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: nowrap;\n  overflow-x: scroll;\n}\ndiv[scrollx=true][_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\ndiv[scrollx=true][_ngcontent-%COMP%]   .itemStyle[_ngcontent-%COMP%] {\n  margin: 0 4% 0 0;\n}\n\n.scrollBtns[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 7%;\n  border: none;\n  border-radius: 15px;\n}\n.scrollBtns[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n\n.itemImageStyle[_ngcontent-%COMP%] {\n  width: 140px;\n  height: 140px;\n}\n\n.itemName[_ngcontent-%COMP%] {\n  font-size: 13px;\n  line-height: 12px;\n  color: #364152;\n}\n\n.imageRegionalStyle[_ngcontent-%COMP%] {\n  width: 140px;\n  height: 140px;\n}\n\n.container[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.regional-container[_ngcontent-%COMP%] {\n  padding: 0 3% 0 3%;\n}\n\n@media only screen and (max-width: 820px) {\n  .scrollBtns[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmVnaW9uYWwtaXRlbXMvcmVnaW9uYWwtaXRlbXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQURGO0FBR0U7RUFDRSxhQUFBO0FBREo7QUFJRTtFQUdFLGdCQUFBO0FBSko7O0FBU0U7RUFDRSxTQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBTko7QUFTRTtFQUNFLGVBQUE7QUFQSjs7QUFXQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBUkY7O0FBV0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBUkY7O0FBV0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQVJGOztBQVdBO0VBQ0UsVUFBQTtBQVJGOztBQVdBO0VBQ0Usa0JBQUE7QUFSRjs7QUFXQTtFQUNFO0lBQ0UsYUFBQTtFQVJGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAaW1wb3J0IFwifi9zcmMvc3R5bGVzLnNjc3NcIjtcclxuXHJcbmRpdltzY3JvbGx4PXRydWVdIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuXHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5pdGVtU3R5bGUge1xyXG4gICAgLy8gZmxleDogMCAwIGF1dG87XHJcbiAgICAvLyBoZWlnaHQ6IDE2MHB4O1xyXG4gICAgbWFyZ2luOiAwIDQlIDAgMDtcclxuICB9XHJcbn1cclxuXHJcbi5zY3JvbGxCdG5zIHtcclxuICBidXR0b24ge1xyXG4gICAgd2lkdGg6IDclO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICB9XHJcblxyXG4gIGkge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLml0ZW1JbWFnZVN0eWxlIHtcclxuICB3aWR0aDogMTQwcHg7XHJcbiAgaGVpZ2h0OiAxNDBweDtcclxufVxyXG5cclxuLml0ZW1OYW1lIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEycHg7XHJcbiAgY29sb3I6ICMzNjQxNTI7XHJcbn1cclxuXHJcbi5pbWFnZVJlZ2lvbmFsU3R5bGUge1xyXG4gIHdpZHRoOiAxNDBweDtcclxuICBoZWlnaHQ6IDE0MHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4ucmVnaW9uYWwtY29udGFpbmVye1xyXG4gIHBhZGRpbmc6MCAzJSAwIDMlO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgyMHB4KSB7XHJcbiAgLnNjcm9sbEJ0bnMge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 915:
/*!*********************************************************!*\
  !*** ./src/app/regional-items/regional-items.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegionalItemsModule: () => (/* binding */ RegionalItemsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _regional_items_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regional-items.component */ 7596);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;



class RegionalItemsModule {}
_class = RegionalItemsModule;
_class.ɵfac = function RegionalItemsModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RegionalItemsModule, {
    declarations: [_regional_items_component__WEBPACK_IMPORTED_MODULE_0__.RegionalItemsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
    exports: [_regional_items_component__WEBPACK_IMPORTED_MODULE_0__.RegionalItemsComponent]
  });
})();

/***/ }),

/***/ 7687:
/*!*******************************************!*\
  !*** ./src/config/categorylist.config.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   categorylist: () => (/* binding */ categorylist)
/* harmony export */ });
const categorylist = [{
  name: 'Combo',
  category: 'Combo',
  url: 'assets/category/combo.png',
  headerUrl: 'assets/category/header/comboHeader.png',
  backTick: 'assets/regional/arrow-white.svg'
}, {
  name: 'Biryani',
  category: 'Biryani',
  url: 'assets/category/biryani.png',
  headerUrl: 'assets/category/header/biryaniHeader.png',
  backTick: 'assets/regional/arrow-white.svg'
}, {
  name: 'Veg',
  category: 'Vegetarian',
  url: 'assets/category/veg.png',
  headerUrl: 'assets/category/header/vegHeader.png',
  backTick: 'assets/regional/arrow-white.svg'
}, {
  name: 'NonVeg',
  category: 'NonVeg',
  url: 'assets/category/nonVeg.png',
  headerUrl: 'assets/category/header/non-vegHeader.png',
  backTick: 'assets/regional/arrow-white.svg'
}, {
  name: 'Jain',
  category: 'Jain',
  url: 'assets/category/jain.png',
  headerUrl: 'assets/category/header/jainHeader.png',
  backTick: 'assets/regional/arrow-white.svg'
}, {
  name: 'Snacks',
  category: 'Snacks',
  url: 'assets/category/snacks.png',
  headerUrl: 'assets/category/header/snacksHeader.png',
  backTick: 'assets/regional/arrow-white.svg'
}, {
  name: 'Sweet',
  category: 'Sweet',
  url: 'assets/category/sweets.png',
  headerUrl: 'assets/category/header/sweetHeader.png',
  backTick: 'assets/regional/arrow-white.svg'
}, {
  name: 'Bakery',
  category: 'Bakery',
  url: 'assets/category/bakery.png',
  headerUrl: 'assets/category/header/bakeryHeader.png',
  backTick: 'assets/regional/arrow-white.svg'
}, {
  name: 'Barbecue',
  category: 'Barbecue',
  url: 'assets/category/barbecue.png',
  headerUrl: 'assets/category/header/barbequeHeader.png',
  backTick: 'assets/regional/arrow-white.svg'
}, {
  name: 'Salad',
  category: 'Salad',
  url: 'assets/category/salad.png',
  headerUrl: 'assets/category/header/saladHeader.png',
  backTick: 'assets/regional/arrow-white.svg'
}, {
  name: 'Cakes',
  category: 'Cakes',
  url: 'assets/category/cakes.png',
  headerUrl: 'assets/category/header/cakeHeader.png',
  backTick: 'assets/regional/arrow-white.svg'
}, {
  name: 'Healthy',
  category: 'Healthy',
  url: 'assets/category/healthy.png',
  headerUrl: 'assets/category/header/healthyHeader.png',
  backTick: 'assets/regional/arrow-white.svg'
},
//,
// {
//     name: 'Pickle',
//     category: 'Pickle',
//     url: 'assets/category/pickle.png',
//     headerUrl: 'assets/category/header/pickle.png',
//     backTick: 'assets/regional/arrow-white.svg'
// },
{
  name: 'Spices',
  category: 'Spices',
  url: 'assets/category/spices.png',
  headerUrl: 'assets/category/header/spicesHeader.png',
  backTick: 'assets/regional/arrow-white.svg'
}, {
  name: 'Gourmet',
  category: 'Gourmet',
  url: 'assets/category/gourmet.png',
  headerUrl: 'assets/category/header/gourmetHeader.png',
  backTick: 'assets/regional/arrow-white.svg'
}];

/***/ }),

/***/ 6502:
/*!*********************************************!*\
  !*** ./src/config/favcuisinelist.config.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   regionList: () => (/* binding */ regionList)
/* harmony export */ });
const regionList = [{
  name: 'Maharashtrian',
  url: 'assets/moreimages/region/marathi.png'
}, {
  name: 'Punjabi',
  url: 'assets/moreimages/region/punjabi.png'
}, {
  name: 'Rajasthani',
  url: 'assets/moreimages/region/rajasthani.png'
}, {
  name: 'Gujrati',
  url: 'assets/moreimages/region/gujrati.png'
}, {
  name: 'Bengali',
  url: 'assets/moreimages/region/bengali.png'
}, {
  name: 'Bihari',
  url: 'assets/moreimages/region/bihari.png'
}, {
  name: 'South Indian',
  url: 'assets/moreimages/region/southIndian.png'
}, {
  name: 'North Eastern',
  url: 'assets/moreimages/region/northeastern.png'
}, {
  name: 'Western',
  url: 'assets/moreimages/region/western.png'
}, {
  name: 'Hyderabadi',
  url: 'assets/moreimages/region/hyderabadi.png'
}, {
  name: 'Kashmiri',
  url: 'assets/moreimages/region/kashmiri.png'
}];

/***/ })

}]);
//# sourceMappingURL=default-src_app_regional-items_regional-items_module_ts.js.map