"use strict";
(self["webpackChunkMealaweWeb"] = self["webpackChunkMealaweWeb"] || []).push([["src_app_my-help_my-help_module_ts"],{

/***/ 3771:
/*!***************************************************!*\
  !*** ./src/app/my-help/my-help-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyHelpRoutingModule: () => (/* binding */ MyHelpRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _my_help_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-help.component */ 3650);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;




const routes = [{
  path: '',
  component: _my_help_component__WEBPACK_IMPORTED_MODULE_0__.MyHelpComponent
}];
class MyHelpRoutingModule {}
_class = MyHelpRoutingModule;
_class.ɵfac = function MyHelpRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MyHelpRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 3650:
/*!**********************************************!*\
  !*** ./src/app/my-help/my-help.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyHelpComponent: () => (/* binding */ MyHelpComponent)
/* harmony export */ });
/* harmony import */ var E_My_workspace_MealAwe_CodeBase_userWebApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_service_apiService_api_main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/service/apiService/api-main.service */ 2492);
/* harmony import */ var src_service_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/service/local-storage.service */ 8798);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);

var _class;




function MyHelpComponent_div_10_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "div")(2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Q: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 11)(7, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "A: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const faq_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](faq_r2.question);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](faq_r2.answer);
  }
}
function MyHelpComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5)(1, "div")(2, "div", 6)(3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "FAQs");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, MyHelpComponent_div_10_div_5_Template, 11, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.faqlist);
  }
}
const _c0 = function (a0) {
  return {
    selectedButton: a0
  };
};
class MyHelpComponent {
  constructor(apiMainService, localStorageService) {
    this.apiMainService = apiMainService;
    this.localStorageService = localStorageService;
    this.faqlist = [];
    this.userProfile = {};
    this.selectedTab = 'faq';
  }
  ngOnInit() {
    this.userProfile = this.localStorageService.getCacheData('USER_PROFILE');
    this.getUserFAQ();
  }
  getUserFAQ() {
    var _this = this;
    return (0,E_My_workspace_MealAwe_CodeBase_userWebApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const faqs = yield _this.apiMainService.getUserFAQ();
        if (faqs && faqs.length > 0) {
          _this.faqlist = faqs;
        }
      } catch (error) {
        console.log('error while fetching FAQs');
      }
    })();
  }
  tabChange(tab) {
    this.selectedTab = tab;
  }
  sendEmail() {
    if (this.userProfile) {
      const subject = `${this.userProfile.userName} - ${this.userProfile.phoneNo}`;
      const body = '';
      window.open(`mailto:contact@mealawe.com?subject=${subject}&body=${body}`);
    }
  }
}
_class = MyHelpComponent;
_class.ɵfac = function MyHelpComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_service_apiService_api_main_service__WEBPACK_IMPORTED_MODULE_1__.ApiMainService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_service_local_storage_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-my-help"]],
  decls: 11,
  vars: 7,
  consts: [[1, "headerBG"], [1, "inline-table", "headerText"], [1, "tabButton"], ["type", "button", 1, "unSelectedButton", 3, "ngClass", "click"], ["class", "pageContent px-3", 4, "ngIf"], [1, "pageContent", "px-3"], ["button", "", 1, "helplistStyle"], [1, "header4"], [4, "ngFor", "ngForOf"], [1, "bold"], [1, "header5"], [1, "grey"]],
  template: function MyHelpComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "span")(3, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Help");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 2)(6, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MyHelpComponent_Template_button_click_6_listener() {
        return ctx.tabChange("faq");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "FAQs");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MyHelpComponent_Template_button_click_8_listener() {
        ctx.tabChange("email");
        return ctx.sendEmail();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, MyHelpComponent_div_10_Template, 6, 1, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c0, ctx.selectedTab === "faq"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c0, ctx.selectedTab === "cashback"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.selectedTab == "faq");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
  styles: [".selectedButton[_ngcontent-%COMP%] {\n  background: #ffe3e6 !important;\n  color: #f85266 !important;\n  border: 1px solid rgba(181, 184, 191, 0.05);\n}\n\n.unSelectedButton[_ngcontent-%COMP%] {\n  width: 91px;\n  height: 36px;\n  background: #ffffff;\n  color: #b5b8bf;\n  border: 1px solid;\n  border-radius: 18px;\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbXktaGVscC9teS1oZWxwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7RUFDQSx5QkFBQTtFQUNBLDJDQUFBO0FBQ0o7O0FBRUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VsZWN0ZWRCdXR0b24ge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZTNlNiAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNmODUyNjYgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTgxLCAxODQsIDE5MSwgMC4wNSk7XHJcbiAgfVxyXG4gIFxyXG4gIC51blNlbGVjdGVkQnV0dG9uIHtcclxuICAgIHdpZHRoOiA5MXB4O1xyXG4gICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGNvbG9yOiAjYjViOGJmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgfSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 5667:
/*!*******************************************!*\
  !*** ./src/app/my-help/my-help.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyHelpModule: () => (/* binding */ MyHelpModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _my_help_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-help.component */ 3650);
/* harmony import */ var _my_help_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-help-routing.module */ 3771);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;




class MyHelpModule {}
_class = MyHelpModule;
_class.ɵfac = function MyHelpModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _my_help_routing_module__WEBPACK_IMPORTED_MODULE_1__.MyHelpRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MyHelpModule, {
    declarations: [_my_help_component__WEBPACK_IMPORTED_MODULE_0__.MyHelpComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _my_help_routing_module__WEBPACK_IMPORTED_MODULE_1__.MyHelpRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_my-help_my-help_module_ts.js.map