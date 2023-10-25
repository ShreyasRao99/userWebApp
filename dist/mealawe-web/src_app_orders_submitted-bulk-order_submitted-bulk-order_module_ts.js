"use strict";
(self["webpackChunkMealaweWeb"] = self["webpackChunkMealaweWeb"] || []).push([["src_app_orders_submitted-bulk-order_submitted-bulk-order_module_ts"],{

/***/ 1045:
/*!************************************************************************************!*\
  !*** ./src/app/orders/submitted-bulk-order/submitted-bulk-order-routing.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubmittedBulkOrderRoutingModule: () => (/* binding */ SubmittedBulkOrderRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _submitted_bulk_order_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./submitted-bulk-order.component */ 7533);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;




const routes = [{
  path: '',
  component: _submitted_bulk_order_component__WEBPACK_IMPORTED_MODULE_0__.SubmittedBulkOrderComponent
}];
class SubmittedBulkOrderRoutingModule {}
_class = SubmittedBulkOrderRoutingModule;
_class.ɵfac = function SubmittedBulkOrderRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SubmittedBulkOrderRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 7533:
/*!*******************************************************************************!*\
  !*** ./src/app/orders/submitted-bulk-order/submitted-bulk-order.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubmittedBulkOrderComponent: () => (/* binding */ SubmittedBulkOrderComponent)
/* harmony export */ });
/* harmony import */ var E_My_workspace_MealAwe_CodeBase_userWebApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_service_apiService_api_main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/service/apiService/api-main.service */ 2492);
/* harmony import */ var src_service_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/service/local-storage.service */ 8798);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);

var _class;




function SubmittedBulkOrderComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "div", 8)(3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const order_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](5, 7, order_r4.orderDate, "mediumDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Order No: ", order_r4.orderNo, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Customer Name: ", order_r4.customerName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Phone No: ", order_r4.customerPhoneNo, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Email: ", order_r4.customerEmail, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Order Type: ", order_r4.groupType, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Occassion: ", order_r4.occassion, "");
  }
}
function SubmittedBulkOrderComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " No Order Found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function SubmittedBulkOrderComponent_img_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 14);
  }
}
class SubmittedBulkOrderComponent {
  constructor(apiMainService, localStorageService) {
    this.apiMainService = apiMainService;
    this.localStorageService = localStorageService;
    this.userProfile = {};
    this.bulkOrderList = [];
    this.pageNumber = 1;
    this.showloader = false;
    this.paginationOver = false;
  }
  ngOnInit() {
    this.userProfile = this.localStorageService.getCacheData('USER_PROFILE');
    if (this.userProfile && this.userProfile._id) {
      this.getSubmittedBulkOrder();
    }
  }
  getSubmittedBulkOrder() {
    var _this = this;
    return (0,E_My_workspace_MealAwe_CodeBase_userWebApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const bulkOrderList = yield _this.apiMainService.getSubmittedBulkOrders(_this.userProfile._id, _this.pageNumber);
        if (bulkOrderList && bulkOrderList.length > 0) {
          _this.bulkOrderList = [..._this.bulkOrderList, ...bulkOrderList];
          _this.showloader = false;
        } else {
          _this.paginationOver = true;
          _this.showloader = false;
        }
      } catch (error) {
        _this.paginationOver = true;
        _this.showloader = false;
      }
    })();
  }
  logScrollEnd($event) {
    const element = $event.target;
    // if (element.clientHeight + 10 >= this.bulkOrdersListEndDiv.nativeElement.getBoundingClientRect().top) {
    //     if (!this.paginationOver) {
    //         this.showloader = true;
    //         this.pageNumber++;
    //         this.getSubmittedBulkOrder();
    //     }
    // }
  }

  goback() {
    // this.navCtrl.pop();
  }
}
_class = SubmittedBulkOrderComponent;
_class.ɵfac = function SubmittedBulkOrderComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_service_apiService_api_main_service__WEBPACK_IMPORTED_MODULE_1__.ApiMainService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_service_local_storage_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-submitted-bulk-order"]],
  decls: 8,
  vars: 3,
  consts: [[3, "click"], [1, "pageContent"], ["class", "listOrderStyle", 4, "ngFor", "ngForOf"], ["class", "header3 bold grey center bgpadding", 4, "ngIf"], ["bulkOrdersListEndDiv", ""], ["class", "listloader", "src", "assets/gif/loader.gif", 4, "ngIf"], [1, "listOrderStyle"], [1, "row"], [1, "info-div", "col-12"], [1, "header5", "grey", "right", "bgsidepadding2"], [1, "header5", "bold"], [1, "header5", "grey"], [1, "header5", "grey", "capitalize"], [1, "header3", "bold", "grey", "center", "bgpadding"], ["src", "assets/gif/loader.gif", 1, "listloader"]],
  template: function SubmittedBulkOrderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "span", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SubmittedBulkOrderComponent_Template_span_click_1_listener() {
        return ctx.goback();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, SubmittedBulkOrderComponent_div_3_Template, 18, 10, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, SubmittedBulkOrderComponent_div_4_Template, 2, 0, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", null, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, SubmittedBulkOrderComponent_img_7_Template, 1, 0, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.bulkOrderList);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.bulkOrderList.length === 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showloader);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe],
  styles: [".info-div[_ngcontent-%COMP%] {\n  border: 1px solid #afafaf;\n  margin-top: 1%;\n  padding: 1%;\n}\n\n.pageContent[_ngcontent-%COMP%] {\n  padding: 0 1%;\n}\n\n@media only screen and (max-width: 600px) {\n  .pageContent[_ngcontent-%COMP%] {\n    padding: 1% 3%;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvb3JkZXJzL3N1Ym1pdHRlZC1idWxrLW9yZGVyL3N1Ym1pdHRlZC1idWxrLW9yZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtBQUNKOztBQUVBO0VBQ0k7SUFDSSxjQUFBO0VBQ047QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5pbmZvLWRpdntcclxuICAgIGJvcmRlcjoxcHggc29saWQgI2FmYWZhZjtcclxuICAgIG1hcmdpbi10b3A6MSU7XHJcbiAgICBwYWRkaW5nOjElO1xyXG59XHJcblxyXG4ucGFnZUNvbnRlbnR7XHJcbiAgICBwYWRkaW5nOjAgMSU7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC5wYWdlQ29udGVudHtcclxuICAgICAgICBwYWRkaW5nOiAxJSAzJTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 6801:
/*!****************************************************************************!*\
  !*** ./src/app/orders/submitted-bulk-order/submitted-bulk-order.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubmittedBulkOrderModule: () => (/* binding */ SubmittedBulkOrderModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _submitted_bulk_order_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./submitted-bulk-order.component */ 7533);
/* harmony import */ var _submitted_bulk_order_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./submitted-bulk-order-routing.module */ 1045);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;




class SubmittedBulkOrderModule {}
_class = SubmittedBulkOrderModule;
_class.ɵfac = function SubmittedBulkOrderModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _submitted_bulk_order_routing_module__WEBPACK_IMPORTED_MODULE_1__.SubmittedBulkOrderRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SubmittedBulkOrderModule, {
    declarations: [_submitted_bulk_order_component__WEBPACK_IMPORTED_MODULE_0__.SubmittedBulkOrderComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _submitted_bulk_order_routing_module__WEBPACK_IMPORTED_MODULE_1__.SubmittedBulkOrderRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_orders_submitted-bulk-order_submitted-bulk-order_module_ts.js.map