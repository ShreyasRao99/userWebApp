"use strict";
(self["webpackChunkMealaweWeb"] = self["webpackChunkMealaweWeb"] || []).push([["src_app_home_home_module_ts"],{

/***/ 5399:
/*!************************************************************!*\
  !*** ./src/app/category-items/category-items.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoryItemsComponent: () => (/* binding */ CategoryItemsComponent)
/* harmony export */ });
/* harmony import */ var _config_categorylist_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../config/categorylist.config */ 7687);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../environments/environment */ 553);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
var _class;






const _c0 = ["scrollableContent"];
function CategoryItemsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CategoryItemsComponent_div_12_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const item_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.lookForCategory(item_r2.category));
    })("click", function CategoryItemsComponent_div_12_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const item_r2 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.lookForCategory(item_r2.category));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", item_r2.url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r2.name);
  }
}
class CategoryItemsComponent {
  constructor(router) {
    this.router = router;
    this.categorylist = _config_categorylist_config__WEBPACK_IMPORTED_MODULE_0__.categorylist;
    this.imageUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.imageUrl;
    this.rightDisabled = false;
    this.leftDisabled = false;
  }
  ngOnInit() {}
  lookForCategory(category) {
    // this.mixpanelservice.track('food-category',{category: category})
    this.router.navigate(['/categorySearch'], {
      queryParams: {
        category
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
_class = CategoryItemsComponent;
_class.ɵfac = function CategoryItemsComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-category-items"]],
  viewQuery: function CategoryItemsComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.scrollableContent = _t.first);
    }
  },
  decls: 13,
  vars: 3,
  consts: [[1, "category-container"], [1, "d-flex", "flex-row", "mt-4"], [1, "sectionHeader", "col-lg-6", "col-12", "col-md-12"], [1, "col-lg-6", "mt-3", "col-12", "col-md-12", "alignRight", "scrollBtns"], [1, "me-2", 3, "disabled", "click"], [1, "bi", "bi-arrow-left"], [3, "disabled", "click"], [1, "bi", "bi-arrow-right"], [1, "container", "bgBottompadding2"], ["scrollX", "true", 1, "scroll"], ["scrollableContent", ""], ["class", "itemStyle", 3, "click", 4, "ngFor", "ngForOf"], [1, "itemStyle", 3, "click"], [1, "imageRegionalStyle", 3, "src"], [1, "itemName"]],
  template: function CategoryItemsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Whats your crave");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3)(5, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CategoryItemsComponent_Template_button_click_5_listener() {
        return ctx.scrollRight();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CategoryItemsComponent_Template_button_click_7_listener() {
        return ctx.scrollLeft();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8)(10, "div", 9, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, CategoryItemsComponent_div_12_Template, 4, 2, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.leftDisabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.rightDisabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.categorylist);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf],
  styles: ["div[scrollx=true][_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: nowrap;\n  overflow-x: scroll;\n}\ndiv[scrollx=true][_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\ndiv[scrollx=true][_ngcontent-%COMP%]   .itemStyle[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  margin: 0 5% 0 0;\n}\n\n.imageRegionalStyle[_ngcontent-%COMP%] {\n  width: 140px;\n  height: 140px;\n}\n\n.scrollBtns[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 7%;\n  border: none;\n  border-radius: 15px;\n}\n.scrollBtns[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n\n.itemName[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #364152;\n  text-align: center;\n}\n\n.container[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.category-container[_ngcontent-%COMP%] {\n  padding: 0 3% 0 3%;\n}\n\n@media only screen and (max-width: 820px) {\n  .scrollBtns[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY2F0ZWdvcnktaXRlbXMvY2F0ZWdvcnktaXRlbXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNGO0FBQ0U7RUFDRSxhQUFBO0FBQ0o7QUFFRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUlBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUFERjs7QUFLRTtFQUNFLFNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFGSjtBQUtFO0VBQ0UsZUFBQTtBQUhKOztBQU9BO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUpGOztBQU9BO0VBQ0UsVUFBQTtBQUpGOztBQU9BO0VBQ0Usa0JBQUE7QUFKRjs7QUFPQTtFQUNFO0lBQ0UsYUFBQTtFQUpGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJkaXZbc2Nyb2xseD10cnVlXSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICBvdmVyZmxvdy14OiBzY3JvbGw7XHJcblxyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuaXRlbVN0eWxlIHtcclxuICAgIGZsZXg6IDAgMCBhdXRvO1xyXG4gICAgbWFyZ2luOiAwIDUlIDAgMDtcclxuICB9XHJcbn1cclxuXHJcbi5pbWFnZVJlZ2lvbmFsU3R5bGUge1xyXG4gIHdpZHRoOiAxNDBweDtcclxuICBoZWlnaHQ6IDE0MHB4O1xyXG59XHJcblxyXG4uc2Nyb2xsQnRucyB7XHJcbiAgYnV0dG9uIHtcclxuICAgIHdpZHRoOiA3JTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgfVxyXG5cclxuICBpIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcbn1cclxuXHJcbi5pdGVtTmFtZSB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGNvbG9yOiAjMzY0MTUyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmNhdGVnb3J5LWNvbnRhaW5lcntcclxuICBwYWRkaW5nOjAgMyUgMCAzJTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MjBweCkge1xyXG4gIC5zY3JvbGxCdG5zIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4236:
/*!*********************************************************!*\
  !*** ./src/app/category-items/category-items.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoryItemsModule: () => (/* binding */ CategoryItemsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _category_items_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category-items.component */ 5399);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;



class CategoryItemsModule {}
_class = CategoryItemsModule;
_class.ɵfac = function CategoryItemsModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CategoryItemsModule, {
    declarations: [_category_items_component__WEBPACK_IMPORTED_MODULE_0__.CategoryItemsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
    exports: [_category_items_component__WEBPACK_IMPORTED_MODULE_0__.CategoryItemsComponent]
  });
})();

/***/ }),

/***/ 6058:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeRoutingModule: () => (/* binding */ HomeRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ 6459);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;




const routes = [{
  path: '',
  component: _home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}];
class HomeRoutingModule {}
_class = HomeRoutingModule;
_class.ɵfac = function HomeRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomeRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 6459:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var E_My_workspace_MealAwe_CodeBase_userWebApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var src_config_banners_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/config/banners.config */ 2762);
/* harmony import */ var src_service_apiService_api_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/service/apiService/api-main.service */ 2492);
/* harmony import */ var src_service_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/service/utility.service */ 7381);
/* harmony import */ var src_service_sendDataToComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/service/sendDataToComponent */ 3176);
/* harmony import */ var src_service_local_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/service/local-storage.service */ 8798);
/* harmony import */ var src_service_google_map_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/service/google-map.service */ 9808);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _no_service_no_service_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../no-service/no-service.component */ 1317);
/* harmony import */ var _regional_items_regional_items_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../regional-items/regional-items.component */ 7596);
/* harmony import */ var _category_items_category_items_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../category-items/category-items.component */ 5399);
/* harmony import */ var _main_slider_main_slider_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../main-slider/main-slider.component */ 6316);
/* harmony import */ var _kitchen_card_kitchen_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../kitchen-card/kitchen-card.component */ 5120);
/* harmony import */ var _kitchen_near_kitchen_near_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../kitchen-near/kitchen-near.component */ 8782);
/* harmony import */ var _header_header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../header/header/header.component */ 5723);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../footer/footer.component */ 6515);

var _class;


















const _c0 = ["scrollableContent"];
function HomeComponent_ng_container_2_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "app-kitchen-card", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const kitchen_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("kitchen", kitchen_r5);
  }
}
function HomeComponent_ng_container_2_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 23)(1, "div", 24)(2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3, "Restaurants Nearby");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](5, "app-kitchen-near", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("kitchenList", ctx_r4.kitchenList);
  }
}
function HomeComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "div", 3)(2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](3, "app-main-slider", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "div", 6)(5, "div", 7)(6, "div", 8)(7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](8, "Restaurants with online food delivery in Pune");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "div", 10)(10, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function HomeComponent_ng_container_2_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r6.scrollRight());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](11, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](12, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function HomeComponent_ng_container_2_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r7);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r8.scrollLeft());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](13, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](14, "div", 15)(15, "div", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](17, HomeComponent_ng_container_2_div_17_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](18, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](19, "app-regional-items")(20, "app-category-items");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](21, HomeComponent_ng_container_2_div_21_Template, 6, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("bannerList", ctx_r0.mainBannerList);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx_r0.nearKitchenList);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r0.kitchenList.length > 0);
  }
}
function HomeComponent_app_no_service_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "app-no-service");
  }
}
class HomeComponent {
  constructor(apiMainService, utilityService, sendDataToComponent, localStorageService, googleMapService) {
    this.apiMainService = apiMainService;
    this.utilityService = utilityService;
    this.sendDataToComponent = sendDataToComponent;
    this.localStorageService = localStorageService;
    this.googleMapService = googleMapService;
    this.kitchenList = [];
    this.imageUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.imageUrl;
    this.showMap = false;
    this.mainBannerList = src_config_banners_config__WEBPACK_IMPORTED_MODULE_2__.mainBannerList;
  }
  ngOnInit() {
    this.susbcribeEvents();
    this.checkServicability();
  }
  susbcribeEvents() {
    this.sendDataToComponent.subscribe('ADDRESS_FROM_DELIVERY', address => {
      console.log(address);
      if (address) {
        this.showMap = false;
        // this.toggleCanvas()
        this.utilityService.configureCurrentLocation(address);
        this.currentAddress = address;
        this.checkServicability();
      }
    });
  }
  checkServicability() {
    var _this = this;
    return (0,E_My_workspace_MealAwe_CodeBase_userWebApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this.currentGeoLocation = _this.localStorageService.getCacheData('CURRENT_LOCATION');
        const clusterList = yield _this.googleMapService.getClusterName(_this.currentGeoLocation.geolocation);
        if (clusterList && clusterList.length > 0) {
          _this.serviceAvailable = true;
          // this.showLoadingPage = false;
          _this.kitchenList = [];
          _this.paginationOver = false;
          _this.pageNumber = 1;
          _this.getKitchenList(clusterList, true);
          // this.loadKitchenDeepLink();       
        } else {
          _this.serviceAvailable = false;
          // this.showLoadingPage = false;
        }
      } catch (error) {}
    })();
  }
  getKitchenList(clusterList, doRefresh) {
    var _this2 = this;
    return (0,E_My_workspace_MealAwe_CodeBase_userWebApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this2.clusterList = clusterList;
        let kitchenList = yield _this2.apiMainService.getNearestKitchen({
          clusterList
        }, _this2.pageNumber, _this2.currentGeoLocation.geolocation);
        if (kitchenList && kitchenList.length > 0) {
          // const promiseList = [];
          // kitchenList.forEach(ele => {
          //   promiseList.push(this.googleMapService.getKitchenDistance(ele,this.currentGeoLocation,false));
          // });  
          kitchenList = yield _this2.googleMapService.getKitchenGoogleDistance(kitchenList, _this2.currentGeoLocation.geolocation);
          kitchenList.sort((a, b) => {
            if (a.distance > b.distance) {
              return 1;
            } else if (a.distance < b.distance) {
              return -1;
            } else {
              return 0;
            }
          });
          //Promise.all(promiseList).then((values) => {
          const sortedKitchenList = kitchenList;
          if (doRefresh) {
            _this2.kitchenList = [...sortedKitchenList];
          } else {
            _this2.kitchenList = [..._this2.kitchenList, ...sortedKitchenList];
          }
          if (_this2.pageNumber === 1) {
            _this2.nearKitchenList = _this2.kitchenList.splice(0, 5);
          }
          // });           
          // this.showloader = true;                  
        } else {
          _this2.paginationOver = true;
          // this.showloader = false;
        }
      } catch (e) {
        console.log('error while fetching kitchen list');
      }
    })();
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
_class = HomeComponent;
_class.ɵfac = function HomeComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_service_apiService_api_main_service__WEBPACK_IMPORTED_MODULE_3__.ApiMainService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_service_utility_service__WEBPACK_IMPORTED_MODULE_4__.UtilityService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_service_sendDataToComponent__WEBPACK_IMPORTED_MODULE_5__.SendDataToComponent), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_service_local_storage_service__WEBPACK_IMPORTED_MODULE_6__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_service_google_map_service__WEBPACK_IMPORTED_MODULE_7__.GoogleMapService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-home"]],
  viewQuery: function HomeComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_16__.ElementRef);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵloadQuery"]()) && (ctx.scrollableContent = _t.first);
    }
  },
  decls: 5,
  vars: 2,
  consts: [[1, "container-fluid"], [4, "ngIf"], [1, "mt-5"], [1, "row"], [1, "col-lg-8", "col-sm-12", "offset-lg-2", "p-0"], [3, "bannerList"], [1, "scrollable-kitchen"], [1, "near-kitchen-list"], [1, "d-flex", "flex-row", "mt-4"], [1, "sectionHeader", "col-8"], [1, "col-4", "alignRight", "scrollBtns"], [1, "me-2", 3, "click"], [1, "bi", "bi-arrow-left"], [3, "click"], [1, "bi", "bi-arrow-right"], [1, "row", "mt-4"], ["scrollX", "true", 1, "scroll"], ["scrollableContent", ""], ["class", "col-lg-3 col-10 col-md-4 itemStyle", 4, "ngFor", "ngForOf"], [1, "banner-section"], ["class", "kitchen-section mt-4", 4, "ngIf"], [1, "col-lg-3", "col-10", "col-md-4", "itemStyle"], [3, "kitchen"], [1, "kitchen-section", "mt-4"], [1, "kitchen-list", "bgpadding3"], [1, "left", "sectionHeader"], [3, "kitchenList"]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "app-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](2, HomeComponent_ng_container_2_Template, 22, 3, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](3, "app-footer", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](4, HomeComponent_app_no_service_4_Template, 1, 0, "app-no-service", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.serviceAvailable);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.serviceAvailable === false);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _no_service_no_service_component__WEBPACK_IMPORTED_MODULE_8__.NoServiceComponent, _regional_items_regional_items_component__WEBPACK_IMPORTED_MODULE_9__.RegionalItemsComponent, _category_items_category_items_component__WEBPACK_IMPORTED_MODULE_10__.CategoryItemsComponent, _main_slider_main_slider_component__WEBPACK_IMPORTED_MODULE_11__.MainSliderComponent, _kitchen_card_kitchen_card_component__WEBPACK_IMPORTED_MODULE_12__.KitchenCardComponent, _kitchen_near_kitchen_near_component__WEBPACK_IMPORTED_MODULE_13__.KitchenNearComponent, _header_header_header_component__WEBPACK_IMPORTED_MODULE_14__.HeaderComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_15__.FooterComponent],
  styles: [".navbar[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%] {\n  margin-right: 150px;\n}\n.navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 500;\n  padding: 10px 25px;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n  margin-left: 100px;\n}\n.navbar[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  font-size: 14px;\n  cursor: pointer;\n}\n\n.near-kitchen-list[_ngcontent-%COMP%] {\n  padding: 3% 3% 0 3%;\n}\n\ndiv[scrollx=true][_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: nowrap;\n  overflow-x: scroll;\n}\ndiv[scrollx=true][_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\ndiv[scrollx=true][_ngcontent-%COMP%]   .itemStyle[_ngcontent-%COMP%] {\n  margin: 0 4% 0 0;\n}\n\n.scrollBtns[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 10%;\n  border: none;\n  border-radius: 15px;\n}\n.scrollBtns[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n\n.offcanvas[_ngcontent-%COMP%] {\n  width: 35%;\n}\n.offcanvas[_ngcontent-%COMP%]   .offcanvas-div[_ngcontent-%COMP%] {\n  padding: 3% 1% 0 20%;\n}\n.offcanvas[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50px;\n  border-radius: 0;\n}\n\n.getLocation[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 80px;\n  padding: 5%;\n  border: 1px solid #adadad;\n  cursor: pointer;\n}\n\n.search-form[_ngcontent-%COMP%]   .savedAddresses[_ngcontent-%COMP%], .search-form[_ngcontent-%COMP%]   .recentSearches[_ngcontent-%COMP%] {\n  height: 80%;\n  border: 1px solid #adadad;\n  margin-top: 15px;\n  padding: 4%;\n  cursor: pointer;\n}\n.search-form[_ngcontent-%COMP%]   .savedAddresses[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], .search-form[_ngcontent-%COMP%]   .recentSearches[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin-left: 8%;\n  font-size: 13px;\n  color: #adadad;\n  margin-bottom: 0;\n}\n.search-form[_ngcontent-%COMP%]   .flex-content[_ngcontent-%COMP%] {\n  padding-left: 3%;\n}\n\n.location-canvas-info[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #adadad;\n}\n\n.user-popover[_ngcontent-%COMP%] {\n  color: red;\n}\n\n@media only screen and (max-width: 820px) {\n  .scrollBtns[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtJO0VBQ0ksbUJBQUE7QUFKUjtBQU9JO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFMUjtBQVFJO0VBQ0ksa0JBQUE7QUFOUjtBQVNJO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBUFI7O0FBV0E7RUFDSSxtQkFBQTtBQVJKOztBQVdBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFSSjtBQVVJO0VBQ0UsYUFBQTtBQVJOO0FBV0k7RUFHRSxnQkFBQTtBQVhOOztBQWdCSTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFiTjtBQWdCSTtFQUNFLGVBQUE7QUFkTjs7QUFrQkE7RUFDSSxVQUFBO0FBZko7QUFrQkk7RUFDSSxvQkFBQTtBQWhCUjtBQW1CSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFqQlI7O0FBcUJBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBbEJKOztBQXVCSTs7RUFFSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBcEJSO0FBc0JROztFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBbkJaO0FBd0JJO0VBQ0ksZ0JBQUE7QUF0QlI7O0FBMkJBO0VBRUksZUFBQTtFQUNBLGNBQUE7QUF6Qko7O0FBNEJBO0VBQ0ksVUFBQTtBQXpCSjs7QUE0QkE7RUFDSTtJQUNJLGFBQUE7RUF6Qk47QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5jb250YWluZXItZmx1aWQge1xyXG4vLyAgICAgcGFkZGluZzogMDtcclxuLy8gfVxyXG5cclxuLm5hdmJhciB7XHJcbiAgICAubmF2YmFyLWNvbGxhcHNlIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGxpIHtcclxuICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDI1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm5hdmJhci1icmFuZCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5sb2NhdGlvbiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5uZWFyLWtpdGNoZW4tbGlzdHtcclxuICAgIHBhZGRpbmc6IDMlIDMlIDAgMyU7XHJcbn1cclxuXHJcbmRpdltzY3JvbGx4PXRydWVdIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuICBcclxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICBcclxuICAgIC5pdGVtU3R5bGUge1xyXG4gICAgLy8gICBmbGV4OiAwIDAgYXV0bztcclxuICAgIC8vICAgaGVpZ2h0OiAxNjBweDtcclxuICAgICAgbWFyZ2luOiAwIDQlIDAgMDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnNjcm9sbEJ0bnMge1xyXG4gICAgYnV0dG9uIHtcclxuICAgICAgd2lkdGg6IDEwJTtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgaSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4ub2ZmY2FudmFzIHtcclxuICAgIHdpZHRoOiAzNSU7XHJcblxyXG4gICAgLy8gcGFkZGluZy1sZWZ0OjUlO1xyXG4gICAgLm9mZmNhbnZhcy1kaXYge1xyXG4gICAgICAgIHBhZGRpbmc6IDMlIDElIDAgMjAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZ2V0TG9jYXRpb24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBwYWRkaW5nOiA1JTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhZGFkYWQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zZWFyY2gtZm9ybSB7XHJcblxyXG4gICAgLnNhdmVkQWRkcmVzc2VzLFxyXG4gICAgLnJlY2VudFNlYXJjaGVzIHtcclxuICAgICAgICBoZWlnaHQ6IDgwJTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYWRhZGFkO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgcGFkZGluZzogNCU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICBoNntcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDglO1xyXG4gICAgICAgICAgICBmb250LXNpemU6MTNweDtcclxuICAgICAgICAgICAgY29sb3I6I2FkYWRhZDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTowO1xyXG4gICAgICAgICAgICAvLyBwYWRkaW5nLXRvcDoyJTsgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5mbGV4LWNvbnRlbnQge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMyU7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4ubG9jYXRpb24tY2FudmFzLWluZm8ge1xyXG4gICAgLy8gcGFkZGluZy1sZWZ0OiA3JTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiAjYWRhZGFkO1xyXG59XHJcblxyXG4udXNlci1wb3BvdmVye1xyXG4gICAgY29sb3I6cmVkO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ODIwcHgpe1xyXG4gICAgLnNjcm9sbEJ0bnN7XHJcbiAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 4320:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeModule: () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 6058);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component */ 6459);
/* harmony import */ var _no_service_no_service_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../no-service/no-service.module */ 4874);
/* harmony import */ var _regional_items_regional_items_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../regional-items/regional-items.module */ 915);
/* harmony import */ var _category_items_category_items_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../category-items/category-items.module */ 4236);
/* harmony import */ var _meal_time_meal_time_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../meal-time/meal-time.module */ 5190);
/* harmony import */ var _set_delivery_location_set_delivery_location_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../set-delivery-location/set-delivery-location.module */ 1613);
/* harmony import */ var _main_slider_main_slider_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../main-slider/main-slider.module */ 7001);
/* harmony import */ var _kitchen_card_kitchen_card_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../kitchen-card/kitchen-card.module */ 4040);
/* harmony import */ var _kitchen_near_kitchen_near_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../kitchen-near/kitchen-near.module */ 7382);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../header/header.module */ 2103);
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../footer/footer.module */ 1853);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;















class HomeModule {}
_class = HomeModule;
_class.ɵfac = function HomeModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeRoutingModule, _no_service_no_service_module__WEBPACK_IMPORTED_MODULE_2__.NoServiceModule, _regional_items_regional_items_module__WEBPACK_IMPORTED_MODULE_3__.RegionalItemsModule, _category_items_category_items_module__WEBPACK_IMPORTED_MODULE_4__.CategoryItemsModule, _meal_time_meal_time_module__WEBPACK_IMPORTED_MODULE_5__.MealTimeModule, _set_delivery_location_set_delivery_location_module__WEBPACK_IMPORTED_MODULE_6__.SetDeliveryLocationModule, _main_slider_main_slider_module__WEBPACK_IMPORTED_MODULE_7__.MainSliderModule, _kitchen_card_kitchen_card_module__WEBPACK_IMPORTED_MODULE_8__.KitchenCardModule, _kitchen_near_kitchen_near_module__WEBPACK_IMPORTED_MODULE_9__.KitchenNearModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbPopoverModule, _header_header_module__WEBPACK_IMPORTED_MODULE_10__.HeaderModule, _footer_footer_module__WEBPACK_IMPORTED_MODULE_11__.FooterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](HomeModule, {
    declarations: [_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeRoutingModule, _no_service_no_service_module__WEBPACK_IMPORTED_MODULE_2__.NoServiceModule, _regional_items_regional_items_module__WEBPACK_IMPORTED_MODULE_3__.RegionalItemsModule, _category_items_category_items_module__WEBPACK_IMPORTED_MODULE_4__.CategoryItemsModule, _meal_time_meal_time_module__WEBPACK_IMPORTED_MODULE_5__.MealTimeModule, _set_delivery_location_set_delivery_location_module__WEBPACK_IMPORTED_MODULE_6__.SetDeliveryLocationModule, _main_slider_main_slider_module__WEBPACK_IMPORTED_MODULE_7__.MainSliderModule, _kitchen_card_kitchen_card_module__WEBPACK_IMPORTED_MODULE_8__.KitchenCardModule, _kitchen_near_kitchen_near_module__WEBPACK_IMPORTED_MODULE_9__.KitchenNearModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbPopoverModule, _header_header_module__WEBPACK_IMPORTED_MODULE_10__.HeaderModule, _footer_footer_module__WEBPACK_IMPORTED_MODULE_11__.FooterModule]
  });
})();

/***/ }),

/***/ 8782:
/*!********************************************************!*\
  !*** ./src/app/kitchen-near/kitchen-near.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KitchenNearComponent: () => (/* binding */ KitchenNearComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_service_runtime_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/service/runtime-storage.service */ 4235);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
var _class;





function KitchenNearComponent_div_0_span_16_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 17);
  }
}
function KitchenNearComponent_div_0_span_16_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 18);
  }
}
function KitchenNearComponent_div_0_span_16_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Jain");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function KitchenNearComponent_div_0_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, KitchenNearComponent_div_0_span_16_div_1_Template, 1, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, KitchenNearComponent_div_0_span_16_div_2_Template, 1, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, KitchenNearComponent_div_0_span_16_div_3_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const type_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", type_r3 === "Veg");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", type_r3 === "NonVeg");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", type_r3 === "Jain");
  }
}
function KitchenNearComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function KitchenNearComponent_div_0_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const kitchen_r1 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.goInsideKitchen(kitchen_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 4)(4, "div", 5)(5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 7)(8, "span", 8)(9, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div")(15, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, KitchenNearComponent_div_0_span_16_Template, 4, 3, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 12)(18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 13)(21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const kitchen_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r0.imageUrl + kitchen_r1.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](kitchen_r1.kitchenName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](kitchen_r1.mainSpeciality);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](kitchen_r1.specialityList);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", kitchen_r1.mealType);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", kitchen_r1.distance, " ", kitchen_r1.distance > 1 ? "Kms" : "Km", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](kitchen_r1.rating);
  }
}
class KitchenNearComponent {
  constructor(runtimeStorageService, router) {
    this.runtimeStorageService = runtimeStorageService;
    this.router = router;
    this.imageUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.imageUrl;
    this.kitchenList = [];
  }
  ngOnInit() {
    this.kitchenList = [...this.kitchenList].map(kitchen => {
      this.checkSpeciality(kitchen);
      this.checkForOffers(kitchen);
      return kitchen;
    });
  }
  checkSpeciality(kitchen) {
    const specialityList = kitchen.speciality.split(',').map(e => e.trim());
    if (kitchen.mainSpeciality) {
      const index = specialityList.indexOf(kitchen.mainSpeciality);
      if (index > -1) {
        specialityList.splice(index, 1);
      }
    }
    kitchen.specialityList = specialityList.join(', ');
  }
  checkForOffers(kitchen) {
    if (kitchen && kitchen.kitchenOpened && kitchen.discountOffer) {
      const discountOffer = kitchen.discountOffer;
      const todaysDate = new Date().getTime();
      const startDate = new Date(discountOffer.startDate).getTime();
      const expiryDate = new Date(discountOffer.expiryDate).getTime();
      if (todaysDate >= startDate && todaysDate <= expiryDate) {
        if (discountOffer.discountType === "percentage") {
          kitchen.offerText = `Upto ${discountOffer.discountValue}% OFF`;
        } else if (discountOffer.discountType === "flat") {
          kitchen.offerText = `FLAT ${discountOffer.discountValue} OFF`;
        }
      }
    }
  }
  goInsideKitchen(kitchen) {
    this.runtimeStorageService.setCacheData('KITCHEN_SELECTED', kitchen);
    this.router.navigate(['/kitchenInside/allDay/' + kitchen._id]);
  }
}
_class = KitchenNearComponent;
_class.ɵfac = function KitchenNearComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_service_runtime_storage_service__WEBPACK_IMPORTED_MODULE_1__.RuntimeStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-kitchen-near"]],
  inputs: {
    kitchenList: "kitchenList"
  },
  decls: 1,
  vars: 1,
  consts: [["class", "col-lg-3 col-sm-12 pointer", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-lg-3", "col-sm-12", "pointer", 3, "click"], [1, "card", "mb-5", "bg-white", "rounded"], ["alt", "Card image cap", 1, "card-img-top", "img-fluid", 3, "src"], [1, "card-body"], [1, "lowerpart"], [1, "kitchenName", "bold"], [1, "specialdiv"], [1, "speacial"], [1, "speciality"], [1, "inline"], [4, "ngFor", "ngForOf"], [1, "deliveryTime", "inline"], [1, "ratingStar", "inline"], ["class", "vegIcon typeIcon inline", 4, "ngIf"], ["class", "nonvegIcon typeIcon inline", 4, "ngIf"], ["class", "jainIcon inline", 4, "ngIf"], [1, "vegIcon", "typeIcon", "inline"], [1, "nonvegIcon", "typeIcon", "inline"], [1, "jainIcon", "inline"]],
  template: function KitchenNearComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, KitchenNearComponent_div_0_Template, 23, 8, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.kitchenList);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
  styles: [".card[_ngcontent-%COMP%] {\n  border: none;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n.card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 155px;\n  max-width: 232px;\n  border-radius: 5%;\n}\n\np[_ngcontent-%COMP%] {\n  text-align: left;\n  margin: 0;\n}\n\nh6[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.kitchenImage[_ngcontent-%COMP%] {\n  height: 110px;\n  width: 110px;\n  border-radius: 12.3px;\n}\n\n.cardheight[_ngcontent-%COMP%] {\n  min-height: 92px;\n}\n.cardheight[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 0px 0px;\n}\n\n.borderbottom[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(164, 164, 164, 0.2588235294);\n  margin-bottom: 3px;\n  padding-bottom: 3px;\n}\n\n.speacial[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n\n.ratingStar[_ngcontent-%COMP%] {\n  background: url('starIcon.png');\n  background-size: 13px;\n  background-repeat: no-repeat;\n  background-position: 0px 0px;\n  padding-left: 12px;\n  padding-right: 5px;\n  font-size: 12px;\n}\n\n.deliveryTime[_ngcontent-%COMP%] {\n  background: url('distanceIcon.png');\n  background-size: 10px;\n  background-repeat: no-repeat;\n  background-position: 0px 0px;\n  padding-left: 12px;\n  padding-right: 5px;\n  font-size: 12px;\n}\n\n.card-container[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.favdivCard[_ngcontent-%COMP%] {\n  background: url('nofavheart.svg');\n  height: 30px;\n  width: 30px;\n  background-repeat: no-repeat !important;\n  background-size: 25px !important;\n  position: relative;\n  float: right;\n}\n\n.kitchenfav[_ngcontent-%COMP%] {\n  background: url('favheart.svg');\n}\n\n.closed[_ngcontent-%COMP%] {\n  width: 82px;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  height: 86px;\n  border-radius: 12px;\n}\n.closed[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 4px;\n  height: 24px;\n  text-align: center;\n  padding: 6px 0px;\n  color: #e62841;\n  font-size: 11px;\n  letter-spacing: 0px;\n  word-spacing: 2px;\n  position: absolute;\n  bottom: -9px;\n  width: 83%;\n  left: 6px;\n  font-weight: bold;\n  box-shadow: 1px 1px 10px 5px rgba(131, 126, 126, 0.1803921569);\n}\n\n.kithenDetails[_ngcontent-%COMP%] {\n  padding-left: 12px !important;\n}\n\n.ratingPosition[_ngcontent-%COMP%] {\n  position: relative;\n  top: -1px;\n  display: inline-block;\n  right: -1px;\n}\n\n.offer[_ngcontent-%COMP%] {\n  background: url('offerBigIcon.png');\n  padding-right: 5px;\n  width: 100px;\n  height: 26px;\n  position: relative;\n  top: -86px;\n  left: -4px;\n  background-size: 90px 40px;\n  background-position: 1px -14px;\n  background-repeat: no-repeat;\n  margin-left: 0px;\n  margin-bottom: -29px;\n}\n.offer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: white;\n  padding: 1px 8px;\n  position: relative;\n  top: 5px;\n}\n\n.greyScale[_ngcontent-%COMP%] {\n  filter: grayscale(1);\n  -webkit-filter: grayscale(100%);\n}\n\n.mainSpeciality[_ngcontent-%COMP%] {\n  border: 1px solid #a4a4a4;\n  padding-right: 2px;\n  border-radius: 7px;\n}\n\n.subOfferText[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: right;\n  padding-right: 5px;\n  width: 100%;\n}\n.subOfferText[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #ffb300;\n  border: 1px solid #ffb300;\n  padding: 1px 8px;\n  width: -moz-fit-content;\n  width: fit-content;\n  border-radius: 6px;\n}\n\n.subscriptionOffer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n.subscriptionOffer[_ngcontent-%COMP%]   .offerSub[_ngcontent-%COMP%] {\n  background: white;\n  font-size: 10px;\n  color: #ffb300;\n  border: 1px solid #ffb300;\n  padding: 1px 8px;\n  border-radius: 6px;\n  margin: 0px 2px;\n  width: 33%;\n}\n\n.speciality[_ngcontent-%COMP%] {\n  padding: 2px 6px;\n  background: #e9e9e9;\n  border-radius: 7px;\n}\n\n.kitchenName[_ngcontent-%COMP%] {\n  font-size: 17px;\n  padding: 4px 0px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAva2l0Y2hlbi1uZWFyL2tpdGNoZW4tbmVhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSjtBQUNJO0VBQ0ksWUFBQTtBQUNSO0FBRUk7RUFDSSxTQUFBO0FBQVI7O0FBSUE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQURKOztBQUlBO0VBQ0ksZ0JBQUE7RUFDQSxTQUFBO0FBREo7O0FBSUE7RUFDSSxnQkFBQTtBQURKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQURKOztBQUdBO0VBQ0ksZ0JBQUE7QUFBSjtBQUNJO0VBQ0ksZ0JBQUE7QUFDUjs7QUFFQTtFQUNJLDBEQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUNBO0VBQ0ksZUFBQTtBQUVKOztBQUFBO0VBQ0ksK0JBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUdKOztBQURBO0VBQ0ksbUNBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUlKOztBQUZBO0VBQ0ksYUFBQTtBQUtKOztBQUhBO0VBQ0ksaUNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHVDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFNSjs7QUFKQTtFQUNJLCtCQUFBO0FBT0o7O0FBTEE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQVFKO0FBUEk7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsOERBQUE7QUFTUjs7QUFOQTtFQUNJLDZCQUFBO0FBU0o7O0FBUEE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUFVSjs7QUFQQTtFQUNJLG1DQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSwwQkFBQTtFQUNBLDhCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FBVUo7QUFUSTtFQUNHLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUFXUDs7QUFSQTtFQUNJLG9CQUFBO0VBQ0EsK0JBQUE7QUFXSjs7QUFSQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQVdKOztBQVJBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBV0o7QUFWSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxrQkFBQTtBQVlSOztBQVJBO0VBQ0ksYUFBQTtFQUVBLG1CQUFBO0FBVUo7QUFUSTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQVdSOztBQVBBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBVUo7O0FBUEE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFVSiIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuXHJcbiAgICAuY2FyZC1ib2R5IHtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtdGl0bGUge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxufVxyXG5cclxuLmNhcmQgaW1nIHtcclxuICAgIGhlaWdodDogMTU1cHg7XHJcbiAgICBtYXgtd2lkdGg6MjMycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcclxufVxyXG5cclxucCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5oNiB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4ua2l0Y2hlbkltYWdleyAgICBcclxuICAgIGhlaWdodDogMTEwcHg7XHJcbiAgICB3aWR0aDogMTEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMi4zcHg7XHJcbn1cclxuLmNhcmRoZWlnaHR7XHJcbiAgICBtaW4taGVpZ2h0OiA5MnB4O1xyXG4gICAgaW9uLWNvbHtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMHB4O1xyXG4gICAgfSAgICBcclxufVxyXG4uYm9yZGVyYm90dG9te1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhNGE0YTQ0MjtcclxuICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XHJcbn1cclxuLnNwZWFjaWFse1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcbi5yYXRpbmdTdGFye1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCd+L3NyYy9hc3NldHMvaWNvbi9zdGFySWNvbi5wbmcnKTsgIFxyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxM3B4O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEycHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLmRlbGl2ZXJ5VGltZXtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnfi9zcmMvYXNzZXRzL2ljb24vZGlzdGFuY2VJY29uLnBuZycpOyBcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTBweDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5jYXJkLWNvbnRhaW5lcntcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLmZhdmRpdkNhcmR7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJ34vc3JjL2Fzc2V0cy9mYXZvcml0ZXMvbm9mYXZoZWFydC5zdmcnKTsgICAgXHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMjVweCAhaW1wb3J0YW50O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi5raXRjaGVuZmF2e1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCd+L3NyYy9hc3NldHMvZmF2b3JpdGVzL2ZhdmhlYXJ0LnN2ZycpO1xyXG59XHJcbi5jbG9zZWR7XHJcbiAgICB3aWR0aDogODJweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgaGVpZ2h0OiA4NnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGRpdntcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiA2cHggMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjZTYyODQxO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgICAgIHdvcmQtc3BhY2luZzogMnB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IC05cHg7XHJcbiAgICAgICAgd2lkdGg6IDgzJTtcclxuICAgICAgICBsZWZ0OiA2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IDVweCAjODM3ZTdlMmU7ICAgXHJcbiAgICB9XHJcbn1cclxuLmtpdGhlbkRldGFpbHN7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEycHggIWltcG9ydGFudDtcclxufVxyXG4ucmF0aW5nUG9zaXRpb257XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC0xcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICByaWdodDogLTFweDtcclxufVxyXG5cclxuLm9mZmVye1xyXG4gICAgYmFja2dyb3VuZDogIHVybCgnfi9zcmMvYXNzZXRzL21vcmVpbWFnZXMvb2ZmZXJCaWdJY29uLnBuZycpOyAgXHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC04NnB4O1xyXG4gICAgbGVmdDogLTRweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogOTBweCA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMXB4IC0xNHB4O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMjlweDtcclxuICAgIGRpdntcclxuICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgIHBhZGRpbmc6IDFweCA4cHg7XHJcbiAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICB0b3A6IDVweDtcclxuICAgIH1cclxufVxyXG4uZ3JleVNjYWxle1xyXG4gICAgZmlsdGVyOiBncmF5c2NhbGUoMSk7XHJcbiAgICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xyXG59XHJcblxyXG4ubWFpblNwZWNpYWxpdHl7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYTRhNGE0O1xyXG4gICAgcGFkZGluZy1yaWdodDogMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG59XHJcblxyXG4uc3ViT2ZmZXJUZXh0eyBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXZ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZiMzAwO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmIzMDA7XHJcbiAgICAgICAgcGFkZGluZzogMXB4IDhweDtcclxuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uc3Vic2NyaXB0aW9uT2ZmZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAub2ZmZXJTdWJ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZiMzAwO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmIzMDA7XHJcbiAgICAgICAgcGFkZGluZzogMXB4IDhweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggMnB4O1xyXG4gICAgICAgIHdpZHRoOiAzMyU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zcGVjaWFsaXR5e1xyXG4gICAgcGFkZGluZzogMnB4IDZweDtcclxuICAgIGJhY2tncm91bmQ6ICNlOWU5ZTk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbn1cclxuXHJcbi5raXRjaGVuTmFtZXtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIHBhZGRpbmc6IDRweCAwcHg7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 7382:
/*!*****************************************************!*\
  !*** ./src/app/kitchen-near/kitchen-near.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KitchenNearModule: () => (/* binding */ KitchenNearModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _kitchen_near_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kitchen-near.component */ 8782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;



class KitchenNearModule {}
_class = KitchenNearModule;
_class.ɵfac = function KitchenNearModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](KitchenNearModule, {
    declarations: [_kitchen_near_component__WEBPACK_IMPORTED_MODULE_0__.KitchenNearComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
    exports: [_kitchen_near_component__WEBPACK_IMPORTED_MODULE_0__.KitchenNearComponent]
  });
})();

/***/ }),

/***/ 2999:
/*!**************************************************!*\
  !*** ./src/app/meal-time/meal-time.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MealTimeComponent: () => (/* binding */ MealTimeComponent)
/* harmony export */ });
/* harmony import */ var _config_mealtimelist_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../config/mealtimelist.config */ 4041);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
var _class;




function MealTimeComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MealTimeComponent_div_4_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const meal_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.lookForMealTime(meal_r1.searchStr, meal_r1.name, meal_r1.type));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const meal_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", meal_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
class MealTimeComponent {
  constructor(router) {
    this.router = router;
    this.mealtimelist = _config_mealtimelist_config__WEBPACK_IMPORTED_MODULE_0__.mealtimelist;
  }
  lookForMealTime(mealTime, name, type) {
    if (type === 'meal') {
      // this.mixpanelservice.track('meal-type', { mealtime: name });
      // this.navCtrl.navigateForward(['/kitchenSearch'], { queryParams: { category: 'mealTime', text: mealTime, name } });
      this.router.navigate(['/kitchenSearch'], {
        queryParams: {
          category: 'mealTime',
          text: mealTime,
          name
        }
      });
    } else if (type === 'subscription') {
      this.router.navigate(['/subscription']);
    } else {
      this.router.navigate(['/bulk-order']);
    }
  }
  lookForSpecial(mealTime, name) {
    // this.mixpanelservice.track('meal-type', { mealtime: name });
    this.router.navigate(['/kitchenSearch'], {
      queryParams: {
        category: 'special',
        text: mealTime,
        name
      }
    });
  }
}
_class = MealTimeComponent;
_class.ɵfac = function MealTimeComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-meal-time"]],
  decls: 5,
  vars: 1,
  consts: [[1, "sectionHeader"], ["scrollX", "true", 1, "scroll"], ["class", "itemStyle mealStyle", 3, "click", 4, "ngFor", "ngForOf"], [1, "itemStyle", "mealStyle", 3, "click"], [1, "mealImageStyle", 3, "src"]],
  template: function MealTimeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Order Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MealTimeComponent_div_4_Template, 2, 1, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.mealtimelist);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf],
  styles: ["div[scrollx=true][_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: nowrap;\n  overflow-x: scroll;\n}\ndiv[scrollx=true][_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\ndiv[scrollx=true][_ngcontent-%COMP%]   .itemStyle[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n}\n\n.mealStyle[_ngcontent-%COMP%] {\n  width: 140px;\n  margin: 0px 4px 0px 4px;\n  padding: 0px 2px;\n}\n\n.mealImageStyle[_ngcontent-%COMP%] {\n  width: 140px;\n  height: 140px;\n}\n\n.mealName[_ngcontent-%COMP%] {\n  position: relative;\n  top: 23px;\n  text-align: center;\n  font-size: 12px;\n  font-weight: bold;\n  display: inline-block;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWVhbC10aW1lL21lYWwtdGltZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0o7QUFBSTtFQUNHLGFBQUE7QUFFUDtBQUFLO0VBQ0UsY0FBQTtBQUVQOztBQUVBO0VBQ0ksWUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFDQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBRUo7O0FBQUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQUdKIiwic291cmNlc0NvbnRlbnQiOlsiZGl2W3Njcm9sbHg9dHJ1ZV0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgICAuaXRlbVN0eWxlIHtcclxuICAgICAgIGZsZXg6IDAgMCBhdXRvOyAgICAgICBcclxuICAgIH1cclxuICB9XHJcblxyXG4ubWVhbFN0eWxle1xyXG4gICAgd2lkdGg6IDE0MHB4O1xyXG4gICAgbWFyZ2luOiAwcHggNHB4IDBweCA0cHg7XHJcbiAgICBwYWRkaW5nOiAwcHggMnB4O1xyXG59XHJcbi5tZWFsSW1hZ2VTdHlsZXtcclxuICAgIHdpZHRoOiAxNDBweDtcclxuICAgIGhlaWdodDogMTQwcHg7XHJcbn1cclxuLm1lYWxOYW1le1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAyM3B4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLy8gLnNwZWNpYWxTdHlsZXtcclxuLy8gICAgIHdpZHRoOiAyMDZweDtcclxuLy8gICAgIG1hcmdpbjogN3B4IDlweCA0cHggOHB4O1xyXG4vLyAgICAgaW1ne1xyXG4vLyAgICAgICAgIGhlaWdodDogMTAxcHg7XHJcbi8vICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuLy8gICAgIH1cclxuLy8gfVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 5190:
/*!***********************************************!*\
  !*** ./src/app/meal-time/meal-time.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MealTimeModule: () => (/* binding */ MealTimeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _meal_time_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meal-time.component */ 2999);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;



class MealTimeModule {}
_class = MealTimeModule;
_class.ɵfac = function MealTimeModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MealTimeModule, {
    declarations: [_meal_time_component__WEBPACK_IMPORTED_MODULE_0__.MealTimeComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
    exports: [_meal_time_component__WEBPACK_IMPORTED_MODULE_0__.MealTimeComponent]
  });
})();

/***/ }),

/***/ 1317:
/*!****************************************************!*\
  !*** ./src/app/no-service/no-service.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NoServiceComponent: () => (/* binding */ NoServiceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_service_sendDataToComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/service/sendDataToComponent */ 3176);
var _class;


class NoServiceComponent {
  constructor(sendDataToComponent) {
    this.sendDataToComponent = sendDataToComponent;
  }
  editLocation() {
    // this.navCtrl.navigateForward(['/myAddress']);
  }
  changeLocation() {
    this.sendDataToComponent.publish('TOGGLE_MAP_OFFCANVAS', true);
  }
}
_class = NoServiceComponent;
_class.ɵfac = function NoServiceComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_service_sendDataToComponent__WEBPACK_IMPORTED_MODULE_0__.SendDataToComponent));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-no-service"]],
  decls: 12,
  vars: 0,
  consts: [[1, "center"], ["src", "assets/images/no_service.svg", 1, "imageStyle"], [1, "header2", "bold"], [1, "header4", "grey"], [1, "bgToppadding1"], [1, "editlocation", 3, "click"]],
  template: function NoServiceComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div")(3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "We wish we were here!");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Delivery is not available at your current");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "location, please change your location");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4)(10, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NoServiceComponent_Template_button_click_10_listener() {
        return ctx.changeLocation();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "CHANGE LOCATION");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    }
  },
  styles: [".imageStyle[_ngcontent-%COMP%] {\n  height: 400px;\n  width: 500px;\n}\n\n.editlocation[_ngcontent-%COMP%] {\n  padding: 14px 24px;\n  background: #e62841;\n  color: white;\n  font-size: 18px;\n  font-weight: bold;\n  letter-spacing: 2px;\n  border-radius: 12px;\n  box-shadow: 4px 4px 7px rgba(6, 6, 6, 0.5882352941);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbm8tc2VydmljZS9uby1zZXJ2aWNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksYUFBQTtFQUNBLFlBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1EQUFBO0FBQUoiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2VTdHlsZXtcclxuICAgIC8vIG1hcmdpbi10b3A6IC02MXB4O1xyXG4gICAgaGVpZ2h0OjQwMHB4O1xyXG4gICAgd2lkdGg6NTAwcHg7XHJcbn1cclxuXHJcbi5lZGl0bG9jYXRpb257XHJcbiAgICBwYWRkaW5nOiAxNHB4IDI0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTYyODQxO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGJveC1zaGFkb3c6IDRweCA0cHggN3B4ICMwNjA2MDY5NjtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 4874:
/*!*************************************************!*\
  !*** ./src/app/no-service/no-service.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NoServiceModule: () => (/* binding */ NoServiceModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _no_service_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./no-service.component */ 1317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;



class NoServiceModule {}
_class = NoServiceModule;
_class.ɵfac = function NoServiceModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NoServiceModule, {
    declarations: [_no_service_component__WEBPACK_IMPORTED_MODULE_0__.NoServiceComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
    exports: [_no_service_component__WEBPACK_IMPORTED_MODULE_0__.NoServiceComponent]
  });
})();

/***/ }),

/***/ 2762:
/*!**************************************!*\
  !*** ./src/config/banners.config.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mainBannerList: () => (/* binding */ mainBannerList)
/* harmony export */ });
const mainBannerList = [{
  imageUrl: 'assets/banner/banner1.jpg',
  type: 'subscription',
  packageCategory: 'Full Meal',
  packageSubCategory: 'Weekly'
}, {
  imageUrl: 'assets/banner/banner2.jpg',
  type: 'subscription',
  packageCategory: 'Half Meal',
  packageSubCategory: 'Weekly'
}, {
  imageUrl: 'assets/banner/banner3.jpg',
  type: 'subscription',
  packageCategory: 'Special',
  packageSubCategory: 'Weekly'
}, {
  imageUrl: 'assets/banner/banner4.jpg',
  type: 'subscription',
  packageCategory: 'Jain',
  packageSubCategory: 'Weekly'
}, {
  imageUrl: 'assets/banner/banner5.jpg',
  type: 'subscription',
  packageCategory: 'Healthy',
  packageSubCategory: 'Weekly'
}, {
  imageUrl: 'assets/banner/banner6.jpg',
  type: 'bulkOrder',
  packageCategory: '',
  packageSubCategory: ''
}];

/***/ }),

/***/ 4041:
/*!*******************************************!*\
  !*** ./src/config/mealtimelist.config.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mealtimelist: () => (/* binding */ mealtimelist)
/* harmony export */ });
const mealtimelist = [{
  name: 'All Day',
  searchStr: 'allDay',
  url: 'assets/mealtime/allDay.png',
  type: 'meal'
}, {
  name: 'Advance',
  searchStr: 'advance',
  url: 'assets/mealtime/advance.png',
  type: 'meal'
}, {
  name: 'Subscription',
  searchStr: 'subscription',
  url: 'assets/mealtime/subscription.png',
  type: 'subscription'
}, {
  name: 'Bulk Order',
  searchStr: 'bulkOrder',
  url: 'assets/mealtime/bulkOrder.png',
  type: 'bulk'
}, {
  name: 'Breakfast',
  searchStr: 'Breakfast',
  url: 'assets/mealtime/breakfast.png',
  type: 'meal'
}, {
  name: 'Lunch',
  searchStr: 'Lunch',
  url: 'assets/mealtime/lunch.png',
  type: 'meal'
}, {
  name: 'High Tea',
  searchStr: 'HighTea',
  url: 'assets/mealtime/hightea.png',
  type: 'meal'
}, {
  name: 'Dinner',
  searchStr: 'Dinner',
  url: 'assets/mealtime/dinner.png',
  type: 'meal'
}];

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map