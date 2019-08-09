(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _gamemid_gamemid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gamemid/gamemid.component */ "./src/app/gamemid/gamemid.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _forpas_forpas_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forpas/forpas.component */ "./src/app/forpas/forpas.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _middlepart_middlepart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./middlepart/middlepart.component */ "./src/app/middlepart/middlepart.component.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _otp_otp_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./otp/otp.component */ "./src/app/otp/otp.component.ts");













var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: 'middlepart', component: _middlepart_middlepart_component__WEBPACK_IMPORTED_MODULE_9__["MiddlepartComponent"] },
    { path: 'otp', component: _otp_otp_component__WEBPACK_IMPORTED_MODULE_12__["OtpComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
    { path: 'game', component: _gamemid_gamemid_component__WEBPACK_IMPORTED_MODULE_5__["GamemidComponent"] },
    { path: 'forgot-password', component: _forpas_forpas_component__WEBPACK_IMPORTED_MODULE_7__["ForpasComponent"] },
    { path: 'lobby', component: _middlepart_middlepart_component__WEBPACK_IMPORTED_MODULE_9__["MiddlepartComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_10__["FlashMessagesModule"].forRoot()
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <router-outlet></router-outlet>\n  <flash-messages></flash-messages>\n</section>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ng7-aaarummy';
    }
    AppComponent.prototype.showAlert = function () {
        UIkit.modal.alert('UIkit alert!');
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _leftbtn_leftbtn_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./leftbtn/leftbtn.component */ "./src/app/leftbtn/leftbtn.component.ts");
/* harmony import */ var _btndownbanner_btndownbanner_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./btndownbanner/btndownbanner.component */ "./src/app/btndownbanner/btndownbanner.component.ts");
/* harmony import */ var _middlepart_middlepart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./middlepart/middlepart.component */ "./src/app/middlepart/middlepart.component.ts");
/* harmony import */ var _gamemid_gamemid_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./gamemid/gamemid.component */ "./src/app/gamemid/gamemid.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _forpas_forpas_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./forpas/forpas.component */ "./src/app/forpas/forpas.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _otp_otp_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./otp/otp.component */ "./src/app/otp/otp.component.ts");





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__["NavComponent"],
                _leftbtn_leftbtn_component__WEBPACK_IMPORTED_MODULE_8__["LeftbtnComponent"],
                _btndownbanner_btndownbanner_component__WEBPACK_IMPORTED_MODULE_9__["BtndownbannerComponent"],
                _middlepart_middlepart_component__WEBPACK_IMPORTED_MODULE_10__["MiddlepartComponent"],
                _gamemid_gamemid_component__WEBPACK_IMPORTED_MODULE_11__["GamemidComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                _forpas_forpas_component__WEBPACK_IMPORTED_MODULE_13__["ForpasComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                _otp_otp_component__WEBPACK_IMPORTED_MODULE_19__["OtpComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_17__["FlashMessagesModule"].forRoot()
            ],
            providers: [_services_validate_service__WEBPACK_IMPORTED_MODULE_15__["ValidateService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_16__["AuthService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/btndownbanner/btndownbanner.component.html":
/*!************************************************************!*\
  !*** ./src/app/btndownbanner/btndownbanner.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-grid backcard1\">\n    <div class=\"uk-width-1-5\">\n      <div uk-switcher=\"animation: uk-animation-fade; toggle: > *\">\n        <button class=\"yourbtn uk-button uk-button-default uk-button-large uk-margin-left  uk-margin-bottom\" style=\"width:72%;\"> my game</button>\n      </div>  \n    </div>\n    <!-- <div class=\"banner uk-width-1-2\">\n      <div class=\"uk-flex uk-flex-center\">\n        <p>Banner</p>\n      </div>\n    </div> -->\n</div>\n"

/***/ }),

/***/ "./src/app/btndownbanner/btndownbanner.component.scss":
/*!************************************************************!*\
  !*** ./src/app/btndownbanner/btndownbanner.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".yourbtn {\n  color: white;\n  border-radius: 50%;\n  font-size: 1rem;\n  margin-top: 180px; }\n\n.yourbtn:hover {\n  background-color: green;\n  font-size: 1rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnRuZG93bmJhbm5lci9DOlxcVXNlcnNcXGJ1amppLkRFU0tUT1AtSE43VUI1VFxcTXVzaWNcXGFhYXJ1bW15LWZpbmFsOWp1bFxcYWFhcnVtbXktZmluYWw5anVsXFxhYWFydW1teS1mcm9udGxpdmUvc3JjXFxhcHBcXGJ0bmRvd25iYW5uZXJcXGJ0bmRvd25iYW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBRWxCLGVBQWU7RUFDZixpQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRyx1QkFBdUI7RUFDeEIsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYnRuZG93bmJhbm5lci9idG5kb3duYmFubmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnlvdXJidG4ge1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLy8gaGVpZ2h0OiAxNXZoO1xuICBmb250LXNpemU6IDFyZW07XG4gIG1hcmdpbi10b3A6MTgwcHg7XG59XG4ueW91cmJ0bjpob3ZlcntcbiAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICBmb250LXNpemU6IDFyZW07XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/btndownbanner/btndownbanner.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/btndownbanner/btndownbanner.component.ts ***!
  \**********************************************************/
/*! exports provided: BtndownbannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtndownbannerComponent", function() { return BtndownbannerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BtndownbannerComponent = /** @class */ (function () {
    function BtndownbannerComponent() {
    }
    BtndownbannerComponent.prototype.ngOnInit = function () {
    };
    BtndownbannerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-btndownbanner',
            template: __webpack_require__(/*! ./btndownbanner.component.html */ "./src/app/btndownbanner/btndownbanner.component.html"),
            styles: [__webpack_require__(/*! ./btndownbanner.component.scss */ "./src/app/btndownbanner/btndownbanner.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BtndownbannerComponent);
    return BtndownbannerComponent;
}());



/***/ }),

/***/ "./src/app/forpas/forpas.component.html":
/*!**********************************************!*\
  !*** ./src/app/forpas/forpas.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"forgotpass\">\n<div class=\"uk-card uk-card-default uk-width-1-2@m uk-width-1-1@s forpass\">\n    <div class=\"uk-card-header\">\n        <div class=\"uk-grid-small uk-flex-middle\" uk-grid>\n            <div class=\"uk-width-auto\">\n                <h3 class=\"uk-card-title titl\">Forgot Password</h3>\n            </div>\n        </div>\n    </div>\n    <div class=\"uk-card-body\">\n      <form>\n        <fieldset class=\"uk-fieldset\">\n            <div class=\"uk-margin inp4\">\n              <br>\n              <input class=\"uk-input ip4\" type=\"text\" placeholder=\"Registered mobile or email\">\n            </div>\n        </fieldset>\n      </form>\n    </div>\n    <div class=\"uk-card-footer\">\n        <span>we will send u a link</span>\n    </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/forpas/forpas.component.scss":
/*!**********************************************!*\
  !*** ./src/app/forpas/forpas.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".forgotpass {\n  background-color: #3b5999;\n  padding-right: 5px;\n  padding-top: 5px;\n  padding-bottom: 359px; }\n\n.line {\n  position: relative;\n  bottom: 18px; }\n\n.titl {\n  position: relative;\n  bottom: 12px; }\n\n.inp4 {\n  border-radius: 5px;\n  width: 300px; }\n\n.ip4 {\n  border-radius: 4px;\n  position: relative;\n  bottom: 20px; }\n\n.butt {\n  width: 320px;\n  border-radius: 5px;\n  position: relative;\n  bottom: 22px; }\n\n@media screen and (min-width: 320px) and (max-width: 2950px) {\n  .forpass {\n    border-radius: 10px;\n    margin-top: 100px;\n    width: 360px;\n    left: 35%;\n    height: 40vh; } }\n\n@media screen and (min-width: 320px) and (max-width: 515px) {\n  .forpass {\n    border-radius: 10px;\n    margin-top: 100px;\n    right: 30%;\n    width: 340px;\n    left: 5%; }\n  .forgotpass {\n    padding-right: 5px;\n    padding-top: 5px;\n    padding-bottom: 279px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ycGFzL0M6XFxVc2Vyc1xcYnVqamkuREVTS1RPUC1ITjdVQjVUXFxNdXNpY1xcYWFhcnVtbXktZmluYWw5anVsXFxhYWFydW1teS1maW5hbDlqdWxcXGFhYXJ1bW15LWZyb250bGl2ZS9zcmNcXGFwcFxcZm9ycGFzXFxmb3JwYXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBd0I7RUFDeEIsa0JBQWlCO0VBQ2pCLGdCQUFlO0VBQ2YscUJBQW9CLEVBQUE7O0FBSXRCO0VBQ0ksa0JBQWlCO0VBQ2pCLFlBQVcsRUFBQTs7QUFFZjtFQUNJLGtCQUFpQjtFQUNqQixZQUFXLEVBQUE7O0FBRWY7RUFDRSxrQkFBaUI7RUFDakIsWUFBVyxFQUFBOztBQUViO0VBQ0Usa0JBQWlCO0VBQ2pCLGtCQUFpQjtFQUNqQixZQUFXLEVBQUE7O0FBRWI7RUFDRSxZQUFXO0VBQ1gsa0JBQWlCO0VBQ2pCLGtCQUFpQjtFQUNqQixZQUFXLEVBQUE7O0FBSWI7RUFDRTtJQUNJLG1CQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsWUFBVztJQUNYLFNBQVM7SUFDVCxZQUFXLEVBQUEsRUFDZDs7QUFFSDtFQUNFO0lBQ0ksbUJBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsWUFBWTtJQUNaLFFBQVEsRUFBQTtFQUdaO0lBQ0Usa0JBQWlCO0lBQ2pCLGdCQUFlO0lBQ2YscUJBQW9CLEVBQUEsRUFDckIiLCJmaWxlIjoic3JjL2FwcC9mb3JwYXMvZm9ycGFzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcmdvdHBhc3N7XG4gIGJhY2tncm91bmQtY29sb3I6IzNiNTk5OTtcbiAgcGFkZGluZy1yaWdodDo1cHg7XG4gIHBhZGRpbmctdG9wOjVweDtcbiAgcGFkZGluZy1ib3R0b206MzU5cHg7XG59XG5cblxuLmxpbmV7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgYm90dG9tOjE4cHg7XG59XG4udGl0bHtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICBib3R0b206MTJweDtcbn1cbi5pbnA0e1xuICBib3JkZXItcmFkaXVzOjVweDtcbiAgd2lkdGg6MzAwcHg7XG59XG4uaXA0e1xuICBib3JkZXItcmFkaXVzOjRweDtcbiAgcG9zaXRpb246cmVsYXRpdmU7XG4gIGJvdHRvbToyMHB4O1xufVxuLmJ1dHR7XG4gIHdpZHRoOjMyMHB4O1xuICBib3JkZXItcmFkaXVzOjVweDtcbiAgcG9zaXRpb246cmVsYXRpdmU7XG4gIGJvdHRvbToyMnB4O1xufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogMjk1MHB4KSB7XG4gIC5mb3JwYXNze1xuICAgICAgYm9yZGVyLXJhZGl1czoxMHB4O1xuICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgICB3aWR0aDozNjBweDtcbiAgICAgIGxlZnQ6IDM1JTtcbiAgICAgIGhlaWdodDo0MHZoO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDUxNXB4KSB7XG4gIC5mb3JwYXNze1xuICAgICAgYm9yZGVyLXJhZGl1czoxMHB4O1xuICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgICByaWdodDogMzAlO1xuICAgICAgd2lkdGg6IDM0MHB4O1xuICAgICAgbGVmdDogNSU7XG5cbiAgfVxuICAuZm9yZ290cGFzc3tcbiAgICBwYWRkaW5nLXJpZ2h0OjVweDtcbiAgICBwYWRkaW5nLXRvcDo1cHg7XG4gICAgcGFkZGluZy1ib3R0b206Mjc5cHg7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/forpas/forpas.component.ts":
/*!********************************************!*\
  !*** ./src/app/forpas/forpas.component.ts ***!
  \********************************************/
/*! exports provided: ForpasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForpasComponent", function() { return ForpasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ForpasComponent = /** @class */ (function () {
    function ForpasComponent() {
    }
    ForpasComponent.prototype.ngOnInit = function () {
    };
    ForpasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forpas',
            template: __webpack_require__(/*! ./forpas.component.html */ "./src/app/forpas/forpas.component.html"),
            styles: [__webpack_require__(/*! ./forpas.component.scss */ "./src/app/forpas/forpas.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ForpasComponent);
    return ForpasComponent;
}());



/***/ }),

/***/ "./src/app/gamemid/gamemid.component.html":
/*!************************************************!*\
  !*** ./src/app/gamemid/gamemid.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <app-nav></app-nav>\n  <app-leftbtn></app-leftbtn>\n  <app-btndownbanner></app-btndownbanner>\n</section>\n<div class=\"backcard2\">\n          <img src=\"assets/img/avatar5.png\" alt=\"avatar\" class=\"avatar1\"/>\n          <img src=\"assets/img/avatar5.png\" alt=\"avatar\" class=\"avatar2\"/>\n          <img src=\"assets/img/avatar5.png\" alt=\"avatar\" class=\"avatar3\"/>\n          <img src=\"assets/img/avatar5.png\" alt=\"avatar\" class=\"avatar4\" />\n          <img src=\"assets/img/avatar5.png\" alt=\"avatar\" class=\"avatar5\" />\n          <img src=\"assets/img/avatar5.png\" alt=\"avatar\" class=\"avatar6\" />\n</div>\n"

/***/ }),

/***/ "./src/app/gamemid/gamemid.component.scss":
/*!************************************************!*\
  !*** ./src/app/gamemid/gamemid.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imgtable {\n  height: 520px;\n  margin-left: -40px; }\n\n.avatar1 {\n  width: 8vw;\n  height: 15vh;\n  border-radius: 50%;\n  position: absolute;\n  top: 20%;\n  left: 8%; }\n\n.avatar2 {\n  width: 8vw;\n  height: 15vh;\n  border-radius: 50%;\n  position: absolute;\n  top: 0%;\n  left: 25%; }\n\n.avatar3 {\n  width: 8vw;\n  height: 15vh;\n  border-radius: 50%;\n  position: absolute;\n  top: 0%;\n  left: 45%; }\n\n.avatar4 {\n  width: 8vw;\n  height: 15vh;\n  border-radius: 80%;\n  position: absolute;\n  top: 20%;\n  left: 85%; }\n\n.avatar5 {\n  width: 8vw;\n  height: 15vh;\n  border-radius: 50%;\n  position: absolute;\n  top: 77%;\n  left: 45%; }\n\n.avatar6 {\n  width: 8vw;\n  height: 15vh;\n  border-radius: 50%;\n  position: absolute;\n  top: 0%;\n  left: 65%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZW1pZC9DOlxcVXNlcnNcXGJ1amppLkRFU0tUT1AtSE43VUI1VFxcTXVzaWNcXGFhYXJ1bW15LWZpbmFsOWp1bFxcYWFhcnVtbXktZmluYWw5anVsXFxhYWFydW1teS1mcm9udGxpdmUvc3JjXFxhcHBcXGdhbWVtaWRcXGdhbWVtaWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0MsVUFBUztFQUNULFlBQVc7RUFDWCxrQkFBaUI7RUFDakIsa0JBQWlCO0VBQ2pCLFFBQU87RUFDUCxRQUFPLEVBQUE7O0FBRVI7RUFDQyxVQUFTO0VBQ1QsWUFBVztFQUNYLGtCQUFpQjtFQUNqQixrQkFBaUI7RUFDakIsT0FBTTtFQUNOLFNBQVEsRUFBQTs7QUFFVDtFQUNDLFVBQVM7RUFDVCxZQUFXO0VBQ1gsa0JBQWlCO0VBQ2pCLGtCQUFpQjtFQUNqQixPQUFNO0VBQ04sU0FBUSxFQUFBOztBQUVUO0VBQ0MsVUFBUztFQUNULFlBQVc7RUFDWCxrQkFBaUI7RUFDakIsa0JBQWlCO0VBQ2pCLFFBQU87RUFDUCxTQUFRLEVBQUE7O0FBRVQ7RUFDQyxVQUFTO0VBQ1QsWUFBVztFQUNYLGtCQUFpQjtFQUNqQixrQkFBaUI7RUFDakIsUUFBTztFQUNQLFNBQVEsRUFBQTs7QUFFVDtFQUNDLFVBQVM7RUFDVCxZQUFXO0VBQ1gsa0JBQWlCO0VBQ2pCLGtCQUFpQjtFQUNqQixPQUFNO0VBQ04sU0FBUSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZ2FtZW1pZC9nYW1lbWlkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZ3RhYmxle1xuICBoZWlnaHQ6IDUyMHB4O1xuICBtYXJnaW4tbGVmdDogLTQwcHg7XG59XG4uYXZhdGFyMXtcblx0d2lkdGg6OHZ3O1xuXHRoZWlnaHQ6MTV2aDtcblx0Ym9yZGVyLXJhZGl1czo1MCU7XG5cdHBvc2l0aW9uOmFic29sdXRlO1xuXHR0b3A6MjAlO1xuXHRsZWZ0OjglO1xufVxuLmF2YXRhcjJ7XG5cdHdpZHRoOjh2dztcblx0aGVpZ2h0OjE1dmg7XG5cdGJvcmRlci1yYWRpdXM6NTAlO1xuXHRwb3NpdGlvbjphYnNvbHV0ZTtcblx0dG9wOjAlO1xuXHRsZWZ0OjI1JTtcbn1cbi5hdmF0YXIze1xuXHR3aWR0aDo4dnc7XG5cdGhlaWdodDoxNXZoO1xuXHRib3JkZXItcmFkaXVzOjUwJTtcblx0cG9zaXRpb246YWJzb2x1dGU7XG5cdHRvcDowJTtcblx0bGVmdDo0NSU7XG59XG4uYXZhdGFyNHtcblx0d2lkdGg6OHZ3O1xuXHRoZWlnaHQ6MTV2aDtcblx0Ym9yZGVyLXJhZGl1czo4MCU7XG5cdHBvc2l0aW9uOmFic29sdXRlO1xuXHR0b3A6MjAlO1xuXHRsZWZ0Ojg1JTtcbn1cbi5hdmF0YXI1e1xuXHR3aWR0aDo4dnc7XG5cdGhlaWdodDoxNXZoO1xuXHRib3JkZXItcmFkaXVzOjUwJTtcblx0cG9zaXRpb246YWJzb2x1dGU7XG5cdHRvcDo3NyU7XG5cdGxlZnQ6NDUlO1xufVxuLmF2YXRhcjZ7XG5cdHdpZHRoOjh2dztcblx0aGVpZ2h0OjE1dmg7XG5cdGJvcmRlci1yYWRpdXM6NTAlO1xuXHRwb3NpdGlvbjphYnNvbHV0ZTtcblx0dG9wOjAlO1xuXHRsZWZ0OjY1JTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/gamemid/gamemid.component.ts":
/*!**********************************************!*\
  !*** ./src/app/gamemid/gamemid.component.ts ***!
  \**********************************************/
/*! exports provided: GamemidComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamemidComponent", function() { return GamemidComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GamemidComponent = /** @class */ (function () {
    function GamemidComponent() {
    }
    GamemidComponent.prototype.ngOnInit = function () {
    };
    GamemidComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gamemid',
            template: __webpack_require__(/*! ./gamemid.component.html */ "./src/app/gamemid/gamemid.component.html"),
            styles: [__webpack_require__(/*! ./gamemid.component.scss */ "./src/app/gamemid/gamemid.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GamemidComponent);
    return GamemidComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"uk-navbar-container uk-margin nbar navcol\" uk-navbar>\n    <div class=\"uk-navbar-left\">\n        <a class=\"uk-navbar-item uk-logo log\" href=\"#\"><img src=\"assets/img/logo3.png\" alt=\"image\" /></a>\n    </div>\n\n    <div class=\"uk-navbar-right\">\n       <ul class=\"uk-navbar-nav\">\n           <li>\n              <a class=\"uk-button uk-button-default fstbtn\" href=\"/login\">Login</a>\n              <a class=\"uk-button uk-button-default sndbtn\" href=\"#modal-sections\" uk-toggle><span class=\"lck\" uk-icon=\"icon: lock;\"></span>Register\n                  <div id=\"modal-sections\" uk-modal>\n                     <div class=\"uk-modal-dialog\">\n                       <a   class=\" arrow\" href=\"\" uk-icon=\"icon:  arrow-left\"></a>\n                        <!--<button class=\"uk-modal-close-default\" type=\"button\" uk-close></button>-->\n                        <ul class=\"uk-modal-header\" uk-switcher=\"animation: uk-animation-fade; toggle: > *\">\n                            <button class=\"uk-button uk-button-default btn1\" type=\"button\">Register</button>\n                        </ul>\n                        \n                        <ul class=\"uk-modal-body uk-switcher uk-margin\">\n                          <li>\n                            <form (submit)=\"onRegisterSubmit()\" >\n                              <fieldset class=\"uk-fieldset\">\n                                  \n                                <div class=\"uk-margin\"  [formGroup]=\"userAddressValidations\">\n\n                                    <input class=\"uk-input ipt1\" type=\"text\" placeholder=\"Enter username\"  [(ngModel)]=\"username\" name=\"username\" formControlName=\"username\">\n                                    <p *ngIf=\"userAddressValidations.get('username').hasError('required')\">\n                                        <!-- <span style=\"margin-left: 82px; color: red;\">First Name is Required!</span> -->\n                                    </p>\n                                    <p *ngIf=\"userAddressValidations.get('username').hasError('minlength')\">\n                                        <span style=\"margin-left: 65px; color: red;\"> Username should be atleast 4 characters long!</span>\n                                    </p>\n                                \n                                    <p *ngIf=\"userAddressValidations.get('username').hasError('maxlength')\">\n                                        <span style=\"margin-left: 65px; color: red;\">username can be atmax n characters long!</span>\n                                    </p>\n                                \n                                    <p *ngIf=\"userAddressValidations.get('username').hasError('pattern')\">\n                                        <span style=\"margin-left: 65px; color: red;\">  username must follow this pattern!</span>\n                                    </p>\n                                \n \n<!--                 \n                                  <input class=\"uk-input ipt1\" type=\"text\" formControlName=\"username\" [(ngModel)]=\"username\" name=\"username\" maxlength=\"20\" placeholder=\"Enter username\"> -->\n                      \n                                  \n<!--                                 \n                                <div class=\"uk-margin\"  [formGroup]=\"userAddressValidations\"> -->\n                                    <input class=\"uk-input ipt2\" formControlName=\"mobileNumber\" type=\"number\" [(ngModel)]=\"contact\" name=\"contact\" maxlength=\"10\" placeholder=\"Your mobile number\" >\n                                    <P  *ngIf=\"userAddressValidations.get('mobileNumber').hasError('required')\">\n                                       \n                                        <!-- <span style=\"margin-left: 82px; color: red;\">Please fill out this field..</span>    -->\n                                    </P>\n                                    <P *ngIf=\"userAddressValidations.get('mobileNumber').hasError('pattern')\">\n                                     <span style=\"margin-left: 82px; color: red;\">It is not a valid mobile number.</span> \n                                    </P>\n\n                                  <!-- <input class=\"uk-input ipt2\" type=\"number\" [(ngModel)]=\"contact\" name=\"contact\" placeholder=\"Your mobile number\" required  max=\"9\"  pattern=\"[0-9]{5}[-][0-9]{7}[-][0-9]{1}\"> -->\n                                 \n                                <!-- <div class=\"uk-margin\" [formGroup]=\"userAddressValidations\"> -->\n    \n                                  <input class=\"uk-input ipt3\" type=\"password\" formControlName=\"password\"  [(ngModel)]=\"password\" name=\"password\"   placeholder=\"Secure password\" >\n                                  <p *ngIf=\"userAddressValidations.get('password').hasError('required')\">\n                                      <!-- <span style=\"margin-left: 82px; color: red;\">Password is Required!</span> -->\n                                  </p>\n                                 \n                                  <p *ngIf=\"userAddressValidations.get('password').hasError('minlength')\">\n                                      <span style=\"margin-left: 82px; color: red;\"> password should be atleast 6 characters long!</span>\n                                  </p>\n                                  <p *ngIf=\"userAddressValidations.get('password').hasError('pattern')\">\n                                      <span style=\"margin-left: 82px; color: red;\">   First Name must follow this pattern!</span>\n                                  </p>\n                              \n                               \n                               \n                               \n                                </div>\n                                  <p class=\"p1\">By registering you are agreeing to our Terms & Conditions</p>\n                                  <button class=\"uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom btn3\" type=\"submit\"><span class=\"lck2\" uk-icon=\"lock\"></span>Register and Play</button>\n                                  <p class=\"p2\">Or login in one click</p>\n                                  <p uk-margin>\n                                    <a class=\"uk-button uk-button-default lnk1\" href=\"#\"><span class=\"fb\" uk-icon=\"facebook\"></span>Facebook</a>\n                                    <a class=\"uk-button uk-button-default lnk2\" href=\"#\"><span class=\"gl\" uk-icon=\"google\"></span>Google</a>\n                                  </p>\n                                \n\n                                \n                              </fieldset>\n                            </form>\n                          </li>\n                        </ul>\n                        <hr>  \n\n\n                        <div class=\"logoo\">\n                          <img  src=\" assets/img/logo1.png\">\n                        </div>\n                        <hr>\n\n                      </div>\n                 </div>\n              </a>\n           </li>\n       </ul>\n       \n   </div>\n</nav>\n<!-- <div class=\"border\"></div> -->\n<div uk-grid>\n  <div class=\"uk-width-auto uk-width-2-3@m\">\n    <div class=\"imgh\" uk-switcher=\"animation: uk-animation-fade; toggle: > *\">\n      <button class=\"uk-button uk-button-danger\">Welcome Bonous</button>\n      <button class=\"uk-button uk-button-danger\">Booster Bonous</button>\n      <button class=\"uk-button uk-button-danger\">Happy Hour Bonous</button>\n    </div>\n    <ul class=\"uk-switcher imghml\">\n      <li><img class=\"uk-border-rounded imgs1\" src=\"assets/img/slider1.jpeg\" uk-img></li>\n      <li><img class=\"uk-border-rounded imgs1\" src=\"assets/img/slider2.jpeg\" uk-img></li>\n      <li><img class=\"uk-border-rounded imgs1\" src=\"assets/img/slider3.jpeg\" uk-img></li>\n    </ul>\n  </div>\n  <div class=\"uk-width-expand cardr cardrl\">\n    <div class=\"uk-card uk-card-default uk-width-1-1@m\">\n\n      <div class=\"uk-card-body\">\n        <p class=\"lohp\">Login in One Click</p>\n        <div class=\"uk-flex uk-flex-center\"><button class=\"uk-button uk-button-danger uk-border-rounded\"><i class=\"fab fa-google-plus\"></i> Google Plus</button></div>\n        <p class=\"lohp1\">Or Enter Your Details</p>\n        <form>\n          <div class=\"uk-margin\">\n            <div class=\"uk-inline uk-margin-medium-left\">\n              <span class=\"uk-form-icon\" uk-icon=\"icon: user\"></span>\n              <input name=\"username\" class=\"uk-input uk-form-large uk-border-rounded\" type=\"text\" placeholder=\"Username\">\n            </div>\n          </div>\n          <div class=\"uk-margin\">\n            <div class=\"uk-inline uk-margin-medium-left\">\n              <span class=\"uk-form-icon\" uk-icon=\"icon: user\"></span>\n              <input name=\"phone\" class=\"uk-input uk-form-large uk-border-rounded\" type=\"text\" placeholder=\"Phone\">\n            </div>\n          </div>\n\n          <div class=\"uk-margin\">\n            <div class=\"uk-inline uk-margin-medium-left\">\n              <span class=\"uk-form-icon\" uk-icon=\"icon: lock\"></span>\n              <input name=\"Password\" class=\"uk-input uk-form-large uk-border-rounded\" type=\"text\" placeholder=\"Password\">\n            </div>\n          </div>\n        </form>\n        <br>\n        <button class=\"uk-button uk-button-primary uk-width-1-1 uk-border-rounded\"><i class=\"fas fa-lock\"></i> Register & Play</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"uk-container-large wucush\">\n  <br>\n  <br>\n  <div class=\"uk-text-center\">\n    <h2 class=\"wucush1\">Why U Choose US</h2>\n    <span class=\"uk-flex uk-flex-center\">\n      <hr class=\"deep-purple accent-2\" style=\"width: 195px;\"></span>\n\n    <div class=\"uk-child-width-expand@s uk-text-center\" uk-grid>\n      <div>\n        <div class=\"uk-card uk-card-body fc_fr\">\n          <img data-src=\"assets/img/design.jpg\" width=\"60\" height=\"60\" alt=\"image\" uk-img>\n          <h4 class=\"inner_head1\">Best-in-class experience</h4>\n          <ul class=\"uk-list\">\n            <li><span class=\"uk-margin-small-right\" uk-icon=\"check\"></span>Lightweight & high speed app</li>\n            <li><span class=\"uk-margin-small-right\" uk-icon=\"check\"></span>Cash games & Free Tournaments</li>\n            <li><span class=\"uk-margin-small-right\" uk-icon=\"check\"></span>Best offers & Unlimited Bonuses</li>\n          </ul>\n        </div>\n      </div>\n      <div>\n        <div class=\"uk-card uk-card-body sc_fr\">\n          <img data-src=\"assets/img/launch.jpg\" width=\"60\" height=\"60\" alt=\"image\" uk-img>\n          <h4 class=\"inner_head2\">Lifetime Same Day cash withdrawal</h4>\n          <ul class=\"uk-list\">\n            <li><span class=\"uk-margin-small-right\" uk-icon=\"check\"></span>Withdraw your winnings instantly</li>\n            <li><span class=\"uk-margin-small-right\" uk-icon=\"check\"></span>Payments can be made 24*7</li>\n            <li><span class=\"uk-margin-small-right\" uk-icon=\"check\"></span>Valid on bank holidays</li>\n          </ul>\n        </div>\n      </div>\n      <div>\n        <div class=\"uk-card uk-card-body tc_fr\">\n          <img data-src=\"assets/img/ds.png\" width=\"70\" height=\"80\" alt=\"image\" uk-img>\n          <h4 class=\"inner_head3\">Best Customer Support</h4>\n          <ul class=\"uk-list\">\n            <li><span class=\"uk-margin-small-right\" uk-icon=\"check\"></span>Withdraw your winnings instantly</li>\n            <li><span class=\"uk-margin-small-right\" uk-icon=\"check\"></span>Payments can be made 24*7</li>\n            <li><span class=\"uk-margin-small-right\" uk-icon=\"check\"></span>Valid on bank holidays</li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"uk-container-large\">\n  <ul class=\"mtsb\" uk-tab>\n    <li class=\"swc1\"><a href=\"#\">Cash Games</a></li>\n    <li class=\"swc1\"><a href=\"#\">Tournaments</a></li>\n    <li class=\"swc1 uk-visible@l\"><a href=\"#\">Practice</a></li>\n  </ul>\n\n  <ul class=\"uk-switcher uk-margin\">\n    <li>\n      <div class=\"uk-text-center \" uk-grid>\n        <div uk-slider>\n\n          <div class=\"uk-position-relative uk-visible-toggle\" tabindex=\"-1\">\n            <ul class=\"uk-slider-items uk-slider-items uk-child-width-1-4@m uk-grid\">\n              <li class=\"mrtcard1\">\n                <div class=\"uk-width-1-1@s\">\n                  <div class=\"uk-card uk-card-default uk-card-body uk-border-rounded\">\n                    <img class=\"uk-border-rounded img101\" src=\"assets/img/card1.jpg\" alt=\"image of game\">\n                    <div class=\"uk-margin-top cards1\">\n                      <span class=\"uk-float-left\">Point Values</span>\n                      <span><i class=\"fas fa-rupee-sign ics1\"></i></span>\n                      <span class=\"uk-float-right\">0.1 to 40</span>\n                    </div>\n                    <div class=\"ptmt\">\n                      <span class=\"uk-float-left\"><span class=\"ncs\">6</span> Players table</span>\n                      <span class=\"uk-float-right\"><span class=\"ncs\">1317</span> Online</span>\n                    </div>\n                    <br>\n                    <a class=\"btns1 uk-margin-top uk-button uk-button-primary uk-width-1-1 uk-border-rounded\" href=\"/lobby\"><span class=\"btnsp1\">Play & Win</span></a>\n                  </div>\n                </div>\n              </li>\n              <li class=\"mrtcard2\">\n                <div class=\"uk-width-1-1@s\">\n                  <div class=\"uk-card uk-card-default uk-card-body uk-border-rounded\">\n                    <img class=\"img101\" src=\"assets/img/card2.jpg\" alt=\"image of game\">\n                    <div class=\"uk-margin-top cards1\">\n                      <span class=\"uk-float-left\">Point Value</span>\n                      <span><i class=\"fas fa-rupee-sign ics1\"></i></span>\n                      <span class=\"uk-float-right\">0.1 to 40</span>\n                    </div>\n                    <div class=\"ptmt\">\n                      <span class=\"uk-float-left\"><span class=\"ncs\">6</span> Players table</span>\n                      <span class=\"uk-float-right\"><span class=\"ncs\">1317</span> Online</span>\n                    </div>\n                    <br>\n                    <a class=\"btns1 uk-margin-top uk-button uk-button-primary uk-width-1-1 uk-border-rounded\" href=\"/lobby\"><span class=\"btnsp1\">Play & Win</span></a>\n                  </div>\n                </div>\n                <br>\n                <br>\n              </li>\n              <li class=\"mrtcard2\">\n                <div class=\"uk-width-1-1@s\">\n                  <div class=\"uk-card uk-card-default uk-card-body  uk-border-rounded\">\n                    <img class=\"uk-border-rounded img101\" src=\"assets/img/deal.jpg\" alt=\"image of game\">\n                    <div class=\"uk-margin-top cards1\">\n                      <span class=\"uk-float-left\">Point Value</span>\n                      <span><i class=\"fas fa-rupee-sign ics1\"></i></span>\n                      <span class=\"uk-float-right\">0.1 to 40</span>\n                    </div>\n                    <div class=\"ptmt\">\n                      <span class=\"uk-float-left\"><span class=\"ncs\">6</span> Players table</span>\n                      <span class=\"uk-float-right\"><span class=\"ncs\">1317</span> Online</span>\n                    </div>\n                    <br>\n                    <a class=\"btns1 uk-margin-top uk-button uk-button-primary uk-width-1-1 uk-border-rounded\" href=\"/lobby\"><span class=\"btnsp1\">Play & Win</span></a>\n                  </div>\n                </div>\n              </li>\n              <li class=\"mrtcard3\">\n                <div class=\"uk-width-1-1@s\">\n                  <div class=\"uk-card uk-card-default uk-card-body uk-border-rounded\">\n                    <img class=\"img102\" src=\"assets/img/point.jpg\" alt=\"image of game\">\n                    <div class=\"uk-margin-top cards1\">\n                      <span class=\"uk-float-left\">Point Value</span>\n                      <span><i class=\"fas fa-rupee-sign ics1\"></i></span>\n                      <span class=\"uk-float-right\">0.1 to 40</span>\n                    </div>\n                    <div class=\"ptmt\">\n                      <span class=\"uk-float-left\"><span class=\"ncs\">6</span> Players table</span>\n                      <span class=\"uk-float-right\"><span class=\"ncs\">1317</span> Online</span>\n                    </div>\n                    <br>\n                    <a class=\"btns1 uk-margin-top uk-button uk-button-primary uk-width-1-1 uk-border-rounded\" href=\"/lobby\"><span class=\"btnsp1\">Play & Win</span></a>\n                  </div>\n                </div>\n              </li>\n\n            </ul>\n\n            <a class=\"uk-position-center-left uk-position-small uk-hidden-hover\" href=\"#\" uk-slidenav-previous uk-slider-item=\"previous\"></a>\n            <a class=\"uk-position-center-right uk-position-small uk-hidden-hover\" href=\"#\" uk-slidenav-next uk-slider-item=\"next\"></a>\n\n          </div>\n\n\n\n        </div>\n      </div>\n    </li>\n    <li class=\"mrtcard1\">\n      <div class=\"uk-width-1-1@s uk-width-1-4@l uk-width-1-4@m\">\n        <div class=\"uk-card uk-card-default uk-card-body uk-border-rounded\">\n          <div class=\"uk-flex uk-flex-center\">\n            <div><img class=\"uk-border-rounded img102\" src=\"assets/img/point.jpg\" alt=\"image of game\"></div>\n          </div>\n\n          <div class=\"uk-margin-top cards1\">\n            <span class=\"uk-float-left\">Point Value</span>\n            <span class=\"tourbsi1\"><i class=\"fas fa-rupee-sign ics1\"></i></span>\n            <span class=\"uk-float-right\">0.1 to 40</span>\n          </div>\n          <div class=\"ptmt\">\n            <span class=\"uk-float-left\"><span class=\"ncs\">6</span> Players table</span>\n            <span class=\"uk-float-right\"><span class=\"ncs\">1317</span> Online</span>\n          </div>\n          <br>\n          <a class=\"btns1 uk-margin-top uk-button uk-button-primary uk-width-1-1 uk-border-rounded\" href=\"/lobby\"><span class=\"btnsp1\">Play & Win</span></a>\n        </div>\n      </div>\n    </li>\n    <li>\n      <div class=\"uk-child-width-1-4 uk-grid-small uk-text-center\" uk-grid>\n        <div class=\"mrtcard1\">\n          <div class=\"uk-card uk-card-default uk-card-body\">\n            <img class=\"img101\" src=\"assets/img/card1.jpg\" alt=\"image of game\">\n            <div class=\"uk-margin-top cards1\">\n              <span class=\"uk-float-left\">Point Value</span>\n              <span><i class=\"fas fa-rupee-sign ics1\"></i></span>\n              <span class=\"uk-float-right\">0.1 to 40</span>\n            </div>\n            <div class=\"ptmt\">\n              <span class=\"uk-float-left\"><span class=\"ncs\">6</span> Players table</span>\n              <span class=\"uk-float-right\"><span class=\"ncs\">1317</span> Online</span>\n            </div>\n            <br>\n            <a class=\"btns1 uk-margin-top uk-button uk-button-primary uk-width-1-1 uk-border-rounded\" href=\"/lobby\"><span class=\"btnsp1\">Play & Win</span></a>\n          </div>\n        </div>\n        <div class=\"mrtcard2\">\n          <div class=\"uk-card uk-card-default uk-card-body\">\n            <img class=\"img101\" src=\"assets/img/card2.jpg\" alt=\"image of game\">\n            <div class=\"uk-margin-top cards1\">\n              <span class=\"uk-float-left\">Point Value</span>\n              <span><i class=\"fas fa-rupee-sign ics1\"></i></span>\n              <span class=\"uk-float-right\">0.1 to 40</span>\n            </div>\n            <div class=\"ptmt\">\n              <span class=\"uk-float-left\"><span class=\"ncs\">6</span> Players table</span>\n              <span class=\"uk-float-right\"><span class=\"ncs\">1317</span> Online</span>\n            </div>\n            <br>\n              <a class=\"btns1 uk-margin-top uk-button uk-button-primary uk-width-1-1 uk-border-rounded\" href=\"/lobby\"><span class=\"btnsp1\">Play & Win</span></a>\n          </div>\n        </div>\n        <div class=\"mrtcard2\">\n          <div class=\"uk-card uk-card-default uk-card-body\">\n            <img class=\"img101\" src=\"assets/img/deal.jpg\" alt=\"image of game\">\n            <div class=\"uk-margin-top cards1\">\n              <span class=\"uk-float-left\">Point Value</span>\n              <span><i class=\"fas fa-rupee-sign ics1\"></i></span>\n              <span class=\"uk-float-right\">0.1 to 40</span>\n            </div>\n            <div class=\"ptmt\">\n              <span class=\"uk-float-left\"><span class=\"ncs\">6</span> Players table</span>\n              <span class=\"uk-float-right\"><span class=\"ncs\">1317</span> Online</span>\n            </div>\n            <br>\n              <a class=\"btns1 uk-margin-top uk-button uk-button-primary uk-width-1-1 uk-border-rounded\" href=\"/lobby\"><span class=\"btnsp1\">Play & Win</span></a>\n          </div>\n        </div>\n        <div class=\"mrtcard3\">\n          <div class=\"uk-card uk-card-default uk-card-body\">\n            <img class=\"img102\" src=\"assets/img/point.jpg\" alt=\"image of game\">\n            <div class=\"uk-margin-top cards1\">\n              <span class=\"uk-float-left\">Point Value</span>\n              <span><i class=\"fas fa-rupee-sign ics1\"></i></span>\n              <span class=\"uk-float-right\">0.1 to 40</span>\n            </div>\n            <div class=\"ptmt\">\n              <span class=\"uk-float-left\"><span class=\"ncs\">6</span> Players table</span>\n              <span class=\"uk-float-right\"><span class=\"ncs\">1317</span> Online</span>\n            </div>\n            <br>\n              <a class=\"btns1 uk-margin-top uk-button uk-button-primary uk-width-1-1 uk-border-rounded\" href=\"/lobby\"><span class=\"btnsp1\">Play & Win</span></a>\n          </div>\n        </div>\n      </div>\n    </li>\n  </ul>\n  <br>\n</div>\n\n\n\n\n\n\n<div class=\"uk-text-center\">\n  <h2 class=\"wucush1\">Client Testimonials</h2>\n  <span class=\"uk-flex uk-flex-center\">\n    <hr class=\"deep-purple accent-2\" style=\"width: 195px;\"></span>\n</div>\n<div class=\"uk-grid\">\n  <div class=\"uk-width-1-3@l uk-width-1-1@s comh1\">\n    <div>\n      <div class=\"uk-card uk-card-default uk-card-large uk-card-body uk-box-shadow-large\">\n        <h3 class=\"uk-card-title uk-flex uk-flex-center\"><i class=\"fas fa-quote-right\"></i></h3>\n        <p class=\"cm1\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n        <div class=\"uk-flex uk-flex-center\"><img src=\"assets/img/1.png\" alt=\"image of game\"></div>\n        <p class=\"uk-card-title uk-flex uk-flex-center\">Fouad Badawy</p>\n      </div>\n    </div>\n  </div>\n  <div class=\"uk-width-1-3@l uk-width-1-1@s comh2\">\n    <div>\n      <div class=\"uk-card uk-card-default uk-card-large uk-card-body uk-box-shadow-large\">\n        <h3 class=\"uk-card-title uk-flex uk-flex-center\"><i class=\"fas fa-quote-right\"></i></h3>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n        <div class=\"uk-flex uk-flex-center\"><img src=\"assets/img/1.png\" alt=\"image of game\"></div>\n        <p class=\"uk-card-title uk-flex uk-flex-center\">Fouad Badawy</p>\n      </div>\n    </div>\n  </div>\n  <div class=\"uk-width-1-3@l uk-width-1-1@s comh3\">\n    <div>\n      <div class=\"uk-card uk-card-default uk-card-large uk-card-body uk-box-shadow-large \">\n        <h3 class=\"uk-card-title uk-flex uk-flex-center\"><i class=\"fas fa-quote-right\"></i></h3>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n        <div class=\"uk-flex uk-flex-center\"><img src=\"assets/img/1.png\" alt=\"image of game\"></div>\n        <p class=\"uk-card-title uk-flex uk-flex-center\">Fouad Badawy</p>\n      </div>\n    </div>\n  </div>\n</div>\n\n<br>\n\n<!---------------------------------------Footer------------------------------------------------------>\n\n<div class=\"uk-card uk-width-1-1\">\n  <div class=\"uk-card-header foothead\">\n    <nav class=\"\" uk-navbar>\n      <div class=\"uk-navbar-left\">\n      <ul class=\"uk-navbar-nav\">\n          <li>Get Connected to the Social Media</li>\n        </ul>\n      </div>\n      <div class=\"uk-navbar-right\">\n        <ul class=\"uk-navbar-nav\">\n          <li><a href=\"\"><i class=\"fab fa-facebook-f footheadi\"></i></a></li>\n          <li><a href=\"\"><i class=\"fab fa-twitter footheadi\"></i></a></li>\n          <li><a href=\"\"><i class=\"fab fa-google-plus-g footheadi\"></i></a></li>\n        </ul>\n      </div>\n    </nav>\n  </div>\n  <div class=\"uk-card-body footbody\">\n    <div class=\"uk-grid\">\n      <div class=\"uk-width-1-3@l uk-width-1-1@s comh1\">\n        <div>\n          <div class=\"uk-card\">\n            <h3 class=\"uk-card-title uk-flex uk-flex-center footerheadings\">Company</h3>\n            <div class=\"uk-flex uk-flex-center\"><hr class=\"deep-purple accent-2 ftll\" style=\"width: 115px;\"></div>\n            <p class=\"uk-margin-top  footstarth\">AAARummyculture.com offers is your go to app for Cash rummy games online. If offers best-in-class playing experience, highest welcome bonus, free and multilingual customer support and complete digital safety. Play on the website or\n              the Android App.</p>\n              <p class=\"footstarth\"><i class=\"fas fa-envelope\"></i> aaarummy@gmail.com</p>\n              <p class=\"footstarth\"><i class=\"fas fa-phone\"></i> 1900-000-9999</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"uk-width-1-3@l uk-width-1-1@s comh1\">\n        <div>\n          <div class=\"uk-card\">\n            <h3 class=\"uk-card-title uk-flex uk-flex-center footerheadings\">Quick Links</h3>\n            <div class=\"uk-flex uk-flex-center\"><hr class=\"deep-purple accent-2 ftll\" style=\"width: 115px;\"></div>\n            <p class=\"cm1\"><a class=\"textunder\" href=\"\"><span class=\"footbodycon\">About</span></a></p>\n            <p class=\"cm1\"><a class=\"textunder\" href=\"\"><span class=\"footbodycon\">Blog</span></a></p>\n            <p class=\"cm1\"><a class=\"textunder\" href=\"\"><span class=\"footbodycon\">Contact Us</span></a></p>\n            <p class=\"cm1\"><a class=\"textunder\" href=\"\"><span class=\"footbodycon\">About Us</span></a></p>\n          </div>\n        </div>\n      </div>\n      <div class=\"uk-width-1-3@l uk-width-1-1@s comh1\">\n        <div>\n          <div class=\"uk-card\">\n            <h3 class=\"uk-card-title uk-flex uk-flex-center footerheadings\">Links</h3>\n            <div class=\"uk-flex uk-flex-center\"><hr class=\"deep-purple accent-2 ftll\" style=\"width: 85px;\"></div>\n            <p class=\"cm1\"><a class=\"textunder\" href=\"\"><span class=\"footbodycon\">Offers</span></a></p>\n            <p class=\"cm1\"><a class=\"textunder\" href=\"\"><span class=\"footbodycon\">Referrals</span></a></p>\n            <p class=\"cm1\"><a class=\"textunder\" href=\"\"><span class=\"footbodycon\">How to Play</span></a></p>\n            <p class=\"cm1\"><a class=\"textunder\" href=\"\"><span class=\"footbodycon\">Terms of Service</span></a></p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"uk-card-footer footend\">\n    <h3 class=\"uk-card-title uk-flex uk-flex-center footendh\">&copy; AAARummyculture.All Right Reserved</h3>\n  </div>\n</div>\n<script>\n  var app = angular.module('myApp', []);\n\n  app.controller('mainCtrl', function($scope) {\n    $scope.phoneNumbr = /^\\+?\\d{2}[- ]?\\d{3}[- ]?\\d{5}$/;\n  });\n</script>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".arrow {\n  padding-left: 30px;\n  margin-top: 30px;\n  width: 50px; }\n\n.bord {\n  border: 1px solid;\n  background-color: #dd4b39;\n  height: 10px;\n  width: 100%;\n  top: 20px; }\n\n.imgh {\n  position: absolute;\n  margin-top: 482px;\n  margin-left: 100px; }\n\n.imghml {\n  margin-left: 40px;\n  margin-top: 5%; }\n\n.cardrl {\n  margin-top: 50px;\n  margin-right: 25px; }\n\n.dot {\n  height: 30px;\n  width: 30px;\n  background-color: #bbb;\n  border-radius: 50%;\n  display: inline-block; }\n\n.text {\n  margin-top: 2px;\n  font-size: 30px;\n  color: Green;\n  margin-left: 13px; }\n\n.hwct {\n  text-align: left; }\n\n.hwct2 {\n  text-align: center; }\n\n.hwct2 {\n  text-align: right; }\n\n.cm1 {\n  text-align: justify;\n  -moz-text-align-last: center;\n       text-align-last: center; }\n\n.imgs {\n  height: 900px; }\n\n.lohh3 {\n  font-size: 40px; }\n\n.lohp {\n  font-size: 25px;\n  padding-left: 50px; }\n\n.lohp1 {\n  font-size: 15px; }\n\n.in1 {\n  width: 100%; }\n\n.imgs1 {\n  height: 420px; }\n\n.uk-flex-center {\n  padding-right: 80px; }\n\n.uk-logo {\n  width: 200px;\n  height: 100px;\n  padding-bottom: 25px; }\n\n.uk-list {\n  text-align: justify; }\n\n.uk-margin-small-right {\n  color: green; }\n\n.fc_fr, .sc_fr, .tc_fr {\n  width: 345px;\n  height: 320px; }\n\n.fc_sr, .sc_sr, .tc_sr {\n  width: 345px;\n  height: 320px; }\n\n.sec_head {\n  margin-top: 50px; }\n\n.thrd_head {\n  margin-top: 50px; }\n\n.inner_head1 {\n  font-weight: bold; }\n\n.inner_head2 {\n  font-weight: bold; }\n\n.inner_head3 {\n  font-weight: bold; }\n\n.inner_head4 {\n  font-weight: bold; }\n\n.inner_head5 {\n  font-weight: bold; }\n\n.inner_head6 {\n  font-weight: bold; }\n\n.cards1 {\n  background-color: yellow;\n  border: 2px solid yellow;\n  border-radius: 12px; }\n\n.ics1 {\n  font-size: 20px; }\n\n.ncs {\n  font-size: 25px; }\n\n.ptmt {\n  margin-top: 6px; }\n\n.ptmtb {\n  margin-top: 30px; }\n\n.swc1 a {\n  font-size: 30px; }\n\n.bsc {\n  margin-top: 30px; }\n\n.wucush {\n  margin-top: 30px; }\n\n.wucush1 {\n  font-size: 50px; }\n\n.btns1 {\n  background-color: green; }\n\n.btns1:hover {\n  background-color: #26ae60; }\n\n.btnsp1 {\n  color: white;\n  font-size: 20px; }\n\n.tourbsi1 {\n  margin-left: 20%; }\n\n.img101 {\n  height: 270px;\n  border-radius: 12%; }\n\n.img102 {\n  height: 270px;\n  border-radius: 15%; }\n\n.uk-grid-small {\n  margin-left: 0; }\n\n.mrtcard1 {\n  margin-top: 30px;\n  margin-left: 0; }\n\n.mrtcard2 {\n  margin-top: 30px; }\n\n.uk-icon {\n  color: #019031;\n  visibility: visible; }\n\n.uk-slidenav-position .uk-slidenav {\n  display: block; }\n\n.mrtcard3 {\n  margin-top: 30px; }\n\n@media screen and (min-device-width: 281px) and (max-device-width: 768px) {\n  .comh2 {\n    margin-top: 20px;\n    margin-left: 10px;\n    margin-right: 10px; }\n  .comh1 {\n    margin-top: 20px;\n    margin-left: 10px;\n    margin-right: 10px; }\n  .comh3 {\n    margin-top: 20px;\n    margin-left: 10px;\n    margin-right: 10px; } }\n\n.foothead {\n  background-color: #6351CE;\n  color: white; }\n\n.footheadi {\n  color: white; }\n\n.footbody {\n  background-color: #1C2331;\n  color: white; }\n\n.nj {\n  color: red; }\n\n.footbodycon {\n  text-decoration: none;\n  color: white; }\n\n.textunder:hover {\n  text-decoration: none; }\n\n.footerheadings {\n  color: white;\n  font-size: 25px; }\n\n.footend {\n  background-color: #161C27; }\n\n.footendh {\n  color: white; }\n\n.footstarth {\n  text-align: justify;\n  -moz-text-align-last: left;\n       text-align-last: left; }\n\n/* styles for the nav */\n\n.nbar {\n  background-color: #3CB371;\n  position: relative;\n  bottom: 20px; }\n\n.log img {\n  position: relative;\n  top: 10px;\n  margin-left: 100px; }\n\n.fstbtn {\n  min-height: 30px;\n  margin: 10px;\n  position: relative;\n  top: 25px;\n  left: -180px;\n  border-radius: 5px;\n  font-weight: bold;\n  background: #ffffff;\n  border: 1px solid #000000;\n  color: #000000; }\n\n.fstbtn:hover {\n  color: #000000; }\n\n.sndbtn {\n  min-height: 30px;\n  max-width: 115px;\n  position: relative;\n  top: -25px;\n  left: 5px;\n  margin-right: 50px;\n  border-radius: 5px;\n  font-weight: bold;\n  background: #ffffff;\n  border: 1px solid #000000;\n  color: #000000; }\n\n.sndbtn:hover {\n  color: #000000; }\n\n.lck {\n  padding-right: 5px;\n  position: relative;\n  bottom: 0px;\n  color: darkgreen; }\n\n/* styles for the modal */\n\n#modal-sections {\n  background-color: #3b5999; }\n\nhr {\n  height: 1px;\n  color: red;\n  margin-left: 50px;\n  margin-right: 50px;\n  background-color: red;\n  border: none; }\n\n.uk-modal-header {\n  height: 60px;\n  padding-top: 30px;\n  padding-bottom: 12px;\n  border-radius: 10px; }\n\n.logoo {\n  width: 300px;\n  padding-left: 50px;\n  padding-bottom: 30px; }\n\n.uk-modal-dialog {\n  height: auto;\n  width: 420px;\n  border-radius: 10px; }\n\n.btn1 {\n  padding-left: 20px;\n  font-size: 30px;\n  font-weight: bold;\n  border-radius: 5px;\n  position: relative;\n  bottom: 4px;\n  width: 360px;\n  height: 60px; }\n\n.btn3 {\n  position: relative;\n  top: 5px;\n  left: 20px;\n  width: 380px;\n  border-radius: 5px; }\n\n.ipt1 {\n  position: relative;\n  left: 20px;\n  top: -5px;\n  width: 380px;\n  border-radius: 5px; }\n\n.ipt2 {\n  position: relative;\n  left: 20px;\n  top: 12px;\n  width: 380px;\n  border-radius: 5px; }\n\n.ipt3 {\n  position: relative;\n  left: 20px;\n  top: 28px;\n  width: 380px;\n  border-radius: 5px; }\n\n.p1 {\n  font-size: 12px;\n  position: relative;\n  left: 20px;\n  top: 15px;\n  width: 380px; }\n\n.p2 {\n  font-size: 12px;\n  position: relative;\n  left: 20px;\n  bottom: 18px;\n  width: 380px; }\n\n.lnk1 {\n  width: 180px;\n  margin-top: 8px;\n  margin-right: 30px;\n  position: relative;\n  bottom: 40px;\n  left: 20px;\n  border-radius: 5px;\n  background-color: #3b5999;\n  color: white; }\n\n.lnk2 {\n  width: 188px;\n  margin-top: 8px;\n  position: relative;\n  bottom: 40px;\n  border-radius: 5px;\n  background-color: #dd4b39;\n  color: white; }\n\n.fb {\n  position: relative;\n  right: 16px;\n  bottom: 2px;\n  color: #3b5999;\n  background-color: white; }\n\n.gl {\n  position: relative;\n  right: 12px;\n  bottom: 2px; }\n\n.forgot {\n  font-size: 14px;\n  position: relative;\n  top: 25px;\n  left: 290px; }\n\n.lck2 {\n  position: relative;\n  right: 5px;\n  bottom: 3px; }\n\n.uk-margin {\n  margin-bottom: 0px;\n  margin-top: 30px; }\n\n.uk-close {\n  position: absolute;\n  top: -22px;\n  left: 390px;\n  color: black;\n  background-color: white; }\n\n.mtsb {\n  margin-top: 60px; }\n\n.navcol {\n  background: #318c20;\n  background: -webkit-gradient(left top, right top, color-stop(0%, #318c20), color-stop(100%, #77d624));\n  background: -webkit-gradient(linear, left top, right top, from(#318c20), to(#77d624));\n  background: linear-gradient(to right, #318c20 0%, #77d624 100%);\n  margin-bottom: 20;\n  height: auto; }\n\n/* Media Queries for the modal part */\n\n@media screen and (max-width: 640px) {\n  .uk-modal-dialog {\n    height: 450px; }\n  .btn1 {\n    font-size: 20px;\n    max-width: 135px; }\n  .btn2 {\n    font-size: 20px;\n    max-width: 135px; }\n  .ipt1, .ipt2, .ipt3, .ipt4, .ipt5 {\n    max-width: 290px; }\n  .p1 {\n    max-width: 250px; }\n  .p3 {\n    max-width: 250px; }\n  .btn3 {\n    max-width: 290px; }\n  .btn4 {\n    max-width: 290px; }\n  .lnk1 {\n    position: relative;\n    left: 18px;\n    max-width: 150px; }\n  .lnk2 {\n    max-width: 136px;\n    position: relative;\n    right: 5px; }\n  .lnk3 {\n    position: relative;\n    left: 18px;\n    max-width: 150px; }\n  .lnk4 {\n    max-width: 136px;\n    position: relative;\n    right: 5px; }\n  .fb {\n    position: relative;\n    right: 8px;\n    bottom: 2px;\n    color: #3b5999;\n    background-color: white; }\n  .gl {\n    position: relative;\n    right: 5px;\n    bottom: 2px; }\n  .forgot {\n    position: absolute;\n    top: 205px;\n    left: 200px; }\n  .footstarth {\n    text-align: justify;\n    -moz-text-align-last: center;\n         text-align-last: center; } }\n\n@media screen and (max-width: 320px) {\n  .uk-modal-dialog {\n    height: 450px; }\n  .btn1 {\n    font-size: 20px;\n    max-width: 135px; }\n  .btn2 {\n    font-size: 20px;\n    max-width: 135px; }\n  .ipt1, .ipt2, .ipt3, .ipt4, .ipt5 {\n    max-width: 290px; }\n  .p1 {\n    max-width: 250px; }\n  .p3 {\n    max-width: 250px; }\n  .btn3 {\n    max-width: 290px; }\n  .btn4 {\n    max-width: 290px; }\n  .lnk1 {\n    position: relative;\n    left: 18px;\n    max-width: 150px; }\n  .lnk2 {\n    max-width: 136px;\n    position: relative;\n    right: 5px; }\n  .lnk3 {\n    position: relative;\n    left: 18px;\n    max-width: 150px; }\n  .lnk4 {\n    max-width: 136px;\n    position: relative;\n    right: 5px; }\n  .fb {\n    position: relative;\n    right: 8px;\n    bottom: 2px;\n    color: #3b5999;\n    background-color: white; }\n  .gl {\n    position: relative;\n    right: 5px;\n    bottom: 2px; }\n  .forgot {\n    position: absolute;\n    top: 205px;\n    left: 200px; }\n  .footstarth {\n    text-align: justify;\n    -moz-text-align-last: center;\n         text-align-last: center; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXGJ1amppLkRFU0tUT1AtSE43VUI1VFxcTXVzaWNcXGFhYXJ1bW15LWZpbmFsOWp1bFxcYWFhcnVtbXktZmluYWw5anVsXFxhYWFydW1teS1mcm9udGxpdmUvc3JjXFxhcHBcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0M7RUFDQyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFdBQVcsRUFBQTs7QUFJWjtFQUNFLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFdBQVc7RUFDZCxTQUNDLEVBQUE7O0FBR0Q7RUFFRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUNGLEVBQUE7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsY0FBYyxFQUFBOztBQUVoQjtFQUNFLGdCQUFlO0VBQ2Ysa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHFCQUFxQixFQUFBOztBQUV2QjtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2YsWUFBWTtFQUNaLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLGdCQUFlLEVBQUE7O0FBRWpCO0VBQ0Usa0JBQWlCLEVBQUE7O0FBRW5CO0VBQ0UsaUJBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsbUJBQW1CO0VBQ25CLDRCQUF1QjtPQUF2Qix1QkFBdUIsRUFBQTs7QUFFekI7RUFFRSxhQUFhLEVBQUE7O0FBRWY7RUFDRSxlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsZUFBZTtFQUNmLGtCQUNGLEVBQUE7O0FBQ0E7RUFDRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsV0FBVyxFQUFBOztBQUViO0VBQ0UsYUFBYSxFQUFBOztBQU9mO0VBQ0UsbUJBQW1CLEVBQUE7O0FBRXJCO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixvQkFBb0IsRUFBQTs7QUFJdEI7RUFDRSxtQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxZQUFXLEVBQUE7O0FBRWI7RUFDRSxZQUFZO0VBQ1osYUFBWSxFQUFBOztBQUVkO0VBQ0UsWUFBVztFQUNYLGFBQVksRUFBQTs7QUFHZDtFQUNFLGdCQUFlLEVBQUE7O0FBRWpCO0VBQ0UsZ0JBQWUsRUFBQTs7QUFHakI7RUFDRSxpQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxpQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxpQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxpQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxpQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxpQkFBZ0IsRUFBQTs7QUFJbEI7RUFDRSx3QkFBd0I7RUFDeEIsd0JBQXdCO0VBQ3hCLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsZUFBZSxFQUFBOztBQUVqQjtFQUNFLGdCQUFlLEVBQUE7O0FBRWpCO0VBQ0UsZUFBZSxFQUFBOztBQUVqQjtFQUNFLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGVBQWUsRUFBQTs7QUFFakI7RUFDRSx1QkFBdUIsRUFBQTs7QUFFekI7RUFDRSx5QkFBeUIsRUFBQTs7QUFFM0I7RUFDRSxZQUFZO0VBQ1osZUFBZSxFQUFBOztBQUVqQjtFQUNFLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLGFBQWE7RUFFYixrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxhQUFhO0VBRWIsa0JBQWtCLEVBQUE7O0FBS3BCO0VBQ0UsY0FBYyxFQUFBOztBQU9oQjtFQUNFLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7O0FBRWhCO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsY0FBYztFQUNkLG1CQUFtQixFQUFBOztBQUdyQjtFQUNJLGNBQWMsRUFBQTs7QUFHbEI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRztJQUNFLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCLEVBQUE7RUFFcEI7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQixFQUFBO0VBRXBCO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0IsRUFBQSxFQUNuQjs7QUFFSjtFQUNFLHlCQUF5QjtFQUN6QixZQUFZLEVBQUE7O0FBRWQ7RUFDRSxZQUFZLEVBQUE7O0FBRWQ7RUFDRSx5QkFBeUI7RUFDekIsWUFBWSxFQUFBOztBQUVkO0VBQ0UsVUFBVSxFQUFBOztBQUVaO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVksRUFBQTs7QUFFZDtFQUVFLHFCQUFxQixFQUFBOztBQUV2QjtFQUNFLFlBQVk7RUFDWixlQUFlLEVBQUE7O0FBRWpCO0VBQ0UseUJBQXlCLEVBQUE7O0FBRTNCO0VBQ0UsWUFBWSxFQUFBOztBQUVkO0VBQ0UsbUJBQW1CO0VBQ25CLDBCQUFvQjtPQUFwQixxQkFBb0IsRUFBQTs7QUFJdEIsdUJBQUE7O0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWlCO0VBQ2pCLFlBQVcsRUFBQTs7QUFFYjtFQUNFLGtCQUFpQjtFQUNqQixTQUFRO0VBQ1Isa0JBQWlCLEVBQUE7O0FBSW5CO0VBQ0UsZ0JBQWU7RUFDZixZQUFXO0VBQ1gsa0JBQWlCO0VBQ2pCLFNBQVE7RUFDUixZQUFXO0VBQ1gsa0JBQWlCO0VBQ2pCLGlCQUFnQjtFQUNoQixtQkFBa0I7RUFDbEIseUJBQXdCO0VBQ3hCLGNBQWEsRUFBQTs7QUFFZjtFQUNFLGNBQWEsRUFBQTs7QUFFZjtFQUNFLGdCQUFlO0VBQ2YsZ0JBQWU7RUFDZixrQkFBaUI7RUFDakIsVUFBUztFQUNULFNBQVE7RUFDUixrQkFBaUI7RUFDakIsa0JBQWlCO0VBQ2pCLGlCQUFnQjtFQUNoQixtQkFBa0I7RUFDbEIseUJBQXdCO0VBQ3hCLGNBQWEsRUFBQTs7QUFFZjtFQUNFLGNBQWEsRUFBQTs7QUFFZjtFQUNFLGtCQUFpQjtFQUNqQixrQkFBaUI7RUFDakIsV0FBVTtFQUNWLGdCQUFlLEVBQUE7O0FBR2pCLHlCQUFBOztBQUNBO0VBQ0UseUJBQXdCLEVBQUE7O0FBRTFCO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxZQUFXO0VBQ1gsaUJBQWdCO0VBQ2hCLG9CQUFtQjtFQUNuQixtQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG9CQUFvQixFQUFBOztBQUd0QjtFQUNFLFlBQVc7RUFDWCxZQUFXO0VBQ1gsbUJBQWtCLEVBQUE7O0FBRXBCO0VBQ0Usa0JBQWlCO0VBQ2pCLGVBQWM7RUFDZCxpQkFBZ0I7RUFDaEIsa0JBQWlCO0VBQ2pCLGtCQUFpQjtFQUNqQixXQUFVO0VBQ1YsWUFBVztFQUNYLFlBQVcsRUFBQTs7QUFFYjtFQUNFLGtCQUFpQjtFQUNqQixRQUFPO0VBQ1AsVUFBUztFQUNULFlBQVc7RUFDWCxrQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxrQkFBaUI7RUFDakIsVUFBUztFQUNULFNBQVE7RUFDUixZQUFXO0VBQ1gsa0JBQWlCLEVBQUE7O0FBRW5CO0VBQ0Usa0JBQWlCO0VBQ2pCLFVBQVM7RUFDVCxTQUFRO0VBQ1IsWUFBVztFQUNYLGtCQUFpQixFQUFBOztBQUVuQjtFQUNFLGtCQUFpQjtFQUNqQixVQUFTO0VBQ1QsU0FBUTtFQUNSLFlBQVc7RUFDWCxrQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxlQUFjO0VBQ2Qsa0JBQWlCO0VBQ2pCLFVBQVM7RUFDVCxTQUFRO0VBQ1IsWUFBVyxFQUFBOztBQUViO0VBQ0UsZUFBYztFQUNkLGtCQUFpQjtFQUNqQixVQUFTO0VBQ1QsWUFBVztFQUNYLFlBQVcsRUFBQTs7QUFHYjtFQUNFLFlBQVc7RUFDWCxlQUFjO0VBQ2Qsa0JBQWlCO0VBQ2pCLGtCQUFpQjtFQUNqQixZQUFXO0VBQ1gsVUFBUztFQUNULGtCQUFpQjtFQUNqQix5QkFBd0I7RUFDeEIsWUFBVyxFQUFBOztBQUViO0VBQ0UsWUFBVztFQUNYLGVBQWM7RUFDZCxrQkFBaUI7RUFDakIsWUFBVztFQUNYLGtCQUFpQjtFQUNqQix5QkFBd0I7RUFDeEIsWUFBVyxFQUFBOztBQUdiO0VBQ0Usa0JBQWlCO0VBQ2pCLFdBQVU7RUFDVixXQUFVO0VBQ1YsY0FBYTtFQUNiLHVCQUFzQixFQUFBOztBQUV4QjtFQUNFLGtCQUFpQjtFQUNqQixXQUFVO0VBQ1YsV0FBVSxFQUFBOztBQUVaO0VBQ0UsZUFBYztFQUNkLGtCQUFpQjtFQUNqQixTQUFRO0VBQ1IsV0FBVSxFQUFBOztBQUVaO0VBQ0Usa0JBQWlCO0VBQ2pCLFVBQVM7RUFDVCxXQUFVLEVBQUE7O0FBRVo7RUFDRSxrQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0Usa0JBQWlCO0VBQ2pCLFVBQVM7RUFDVCxXQUFVO0VBQ1YsWUFBVztFQUNYLHVCQUFzQixFQUFBOztBQUd4QjtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUVFLG1CQUE2QjtFQUUvQixxR0FBMEg7RUFJMUgscUZBQW9GO0VBQXBGLCtEQUFvRjtFQUVqRixpQkFBaUI7RUFDbEIsWUFBWSxFQUFBOztBQUlkLHFDQUFBOztBQUNBO0VBQ0U7SUFDRSxhQUFZLEVBQUE7RUFFZDtJQUNFLGVBQWM7SUFDZCxnQkFBZSxFQUFBO0VBRWpCO0lBQ0UsZUFBYztJQUNkLGdCQUFlLEVBQUE7RUFFakI7SUFDRSxnQkFBZSxFQUFBO0VBRWpCO0lBQ0UsZ0JBQWUsRUFBQTtFQUVqQjtJQUNFLGdCQUFlLEVBQUE7RUFFakI7SUFDRSxnQkFBZSxFQUFBO0VBRWpCO0lBQ0UsZ0JBQWUsRUFBQTtFQUVqQjtJQUNFLGtCQUFpQjtJQUNqQixVQUFTO0lBQ1QsZ0JBQWUsRUFBQTtFQUVqQjtJQUNFLGdCQUFlO0lBQ2Ysa0JBQWlCO0lBQ2pCLFVBQVMsRUFBQTtFQUVYO0lBQ0Usa0JBQWlCO0lBQ2pCLFVBQVM7SUFDVCxnQkFBZSxFQUFBO0VBRWpCO0lBQ0UsZ0JBQWU7SUFDZixrQkFBaUI7SUFDakIsVUFBUyxFQUFBO0VBRVg7SUFDRSxrQkFBaUI7SUFDakIsVUFBUztJQUNULFdBQVU7SUFDVixjQUFhO0lBQ2IsdUJBQXNCLEVBQUE7RUFFeEI7SUFDRSxrQkFBaUI7SUFDakIsVUFBUztJQUNULFdBQVUsRUFBQTtFQUVaO0lBQ0Usa0JBQWlCO0lBQ2pCLFVBQVM7SUFDVCxXQUFVLEVBQUE7RUFFWjtJQUNFLG1CQUFtQjtJQUNuQiw0QkFBc0I7U0FBdEIsdUJBQXNCLEVBQUEsRUFDdkI7O0FBSUg7RUFDRTtJQUNFLGFBQVksRUFBQTtFQUVkO0lBQ0UsZUFBYztJQUNkLGdCQUFlLEVBQUE7RUFFakI7SUFDRSxlQUFjO0lBQ2QsZ0JBQWUsRUFBQTtFQUVqQjtJQUNFLGdCQUFlLEVBQUE7RUFFakI7SUFDRSxnQkFBZSxFQUFBO0VBRWpCO0lBQ0UsZ0JBQWUsRUFBQTtFQUVqQjtJQUNFLGdCQUFlLEVBQUE7RUFFakI7SUFDRSxnQkFBZSxFQUFBO0VBRWpCO0lBQ0Usa0JBQWlCO0lBQ2pCLFVBQVM7SUFDVCxnQkFBZSxFQUFBO0VBRWpCO0lBQ0UsZ0JBQWU7SUFDZixrQkFBaUI7SUFDakIsVUFBUyxFQUFBO0VBRVg7SUFDRSxrQkFBaUI7SUFDakIsVUFBUztJQUNULGdCQUFlLEVBQUE7RUFFakI7SUFDRSxnQkFBZTtJQUNmLGtCQUFpQjtJQUNqQixVQUFTLEVBQUE7RUFFWDtJQUNFLGtCQUFpQjtJQUNqQixVQUFTO0lBQ1QsV0FBVTtJQUNWLGNBQWE7SUFDYix1QkFBc0IsRUFBQTtFQUV4QjtJQUNFLGtCQUFpQjtJQUNqQixVQUFTO0lBQ1QsV0FBVSxFQUFBO0VBRVo7SUFDRSxrQkFBaUI7SUFDakIsVUFBUztJQUNULFdBQVUsRUFBQTtFQUVaO0lBQ0UsbUJBQW1CO0lBQ25CLDRCQUFzQjtTQUF0Qix1QkFBc0IsRUFBQSxFQUN2QiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuIC5hcnJvd3tcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICB3aWR0aDogNTBweDtcblxufVxuXG4gLmJvcmR7XG4gICBib3JkZXI6IDFweCBzb2xpZDtcbiAgIGJhY2tncm91bmQtY29sb3I6ICNkZDRiMzk7XG4gICBoZWlnaHQ6IDEwcHg7XG4gICB3aWR0aDogMTAwJTtcbnRvcDoyMHB4XG4gfVxuXG5cbi5pbWdoXG57XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXRvcDogNDgycHg7XG4gIG1hcmdpbi1sZWZ0OiAxMDBweFxufVxuLmltZ2htbHtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gIG1hcmdpbi10b3A6IDUlO1xufVxuLmNhcmRybHtcbiAgbWFyZ2luLXRvcDo1MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG59XG4uZG90IHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JiYjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4udGV4dCB7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogR3JlZW47XG4gIG1hcmdpbi1sZWZ0OiAxM3B4O1xufVxuLmh3Y3R7XG4gIHRleHQtYWxpZ246bGVmdDtcbn1cbi5od2N0MntcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XG59XG4uaHdjdDJ7XG4gIHRleHQtYWxpZ246cmlnaHQ7XG59XG4uY20xe1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICB0ZXh0LWFsaWduLWxhc3Q6IGNlbnRlcjtcbn1cbi5pbWdzXG57XG4gIGhlaWdodDogOTAwcHg7XG59XG4ubG9oaDN7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cbi5sb2hwe1xuICBmb250LXNpemU6IDI1cHg7XG4gIHBhZGRpbmctbGVmdDogNTBweFxufVxuLmxvaHAxe1xuICBmb250LXNpemU6IDE1cHg7XG5cbn1cbi5pbjF7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmltZ3Mxe1xuICBoZWlnaHQ6IDQyMHB4O1xufVxuXG5cblxuXG5cbi51ay1mbGV4LWNlbnRlcntcbiAgcGFkZGluZy1yaWdodDogODBweDtcbn1cbi51ay1sb2dve1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyNXB4O1xufVxuXG5cbi51ay1saXN0e1xuICB0ZXh0LWFsaWduOmp1c3RpZnk7XG59XG4udWstbWFyZ2luLXNtYWxsLXJpZ2h0e1xuICBjb2xvcjpncmVlbjtcbn1cbi5mY19mciwgLnNjX2ZyLCAudGNfZnJ7XG4gIHdpZHRoOiAzNDVweDtcbiAgaGVpZ2h0OjMyMHB4O1xufVxuLmZjX3NyLCAuc2Nfc3IsIC50Y19zciB7XG4gIHdpZHRoOjM0NXB4O1xuICBoZWlnaHQ6MzIwcHg7XG59XG5cbi5zZWNfaGVhZHtcbiAgbWFyZ2luLXRvcDo1MHB4O1xufVxuLnRocmRfaGVhZHtcbiAgbWFyZ2luLXRvcDo1MHB4O1xufVxuXG4uaW5uZXJfaGVhZDF7XG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XG59XG4uaW5uZXJfaGVhZDJ7XG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XG59XG4uaW5uZXJfaGVhZDN7XG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XG59XG4uaW5uZXJfaGVhZDR7XG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XG59XG4uaW5uZXJfaGVhZDV7XG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XG59XG4uaW5uZXJfaGVhZDZ7XG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XG59XG5cblxuLmNhcmRzMXtcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xuICBib3JkZXI6IDJweCBzb2xpZCB5ZWxsb3c7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG59XG4uaWNzMXtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLm5jc3tcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuLnB0bXR7XG4gIG1hcmdpbi10b3A6IDZweDtcbn1cbi5wdG10YntcbiAgbWFyZ2luLXRvcDozMHB4O1xufVxuLnN3YzEgYXtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuLmJzY3tcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cbi53dWN1c2h7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG5cbn1cbi53dWN1c2gxe1xuICBmb250LXNpemU6IDUwcHg7XG59XG4uYnRuczF7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xufVxuLmJ0bnMxOmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjZhZTYwO1xufVxuLmJ0bnNwMXtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDIwcHg7XG59XG4udG91cmJzaTF7XG4gIG1hcmdpbi1sZWZ0OiAyMCU7XG59XG4uaW1nMTAxe1xuICBoZWlnaHQ6IDI3MHB4O1xuICAvLyB3aWR0aDogMzAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEyJTtcbn1cbi5pbWcxMDJ7XG4gIGhlaWdodDogMjcwcHg7XG4gIC8vIHdpZHRoOiAzMDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTUlO1xufVxuLy8gLnVrLWdyaWR7XG4vLyAgIG1hcmdpbi10b3A6IDUwcHhcbi8vIH1cbi51ay1ncmlkLXNtYWxse1xuICBtYXJnaW4tbGVmdDogMDtcblxuICBcbn1cbi51ay1zd2l0Y2hlcntcbiAgLy8gbWFyZ2luLWxlZnQ6XG59XG4ubXJ0Y2FyZDF7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuLm1ydGNhcmQye1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4udWstaWNvbntcbiAgY29sb3I6ICMwMTkwMzE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi51ay1zbGlkZW5hdi1wb3NpdGlvbiAudWstc2xpZGVuYXYge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubXJ0Y2FyZDN7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMjgxcHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogNzY4cHgpIHtcbiAgIC5jb21oMntcbiAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgIH1cbiAgIC5jb21oMXtcbiAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgIH1cbiAgIC5jb21oM3tcbiAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgIH1cbn1cbi5mb290aGVhZHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYzNTFDRTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmZvb3RoZWFkaXtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmZvb3Rib2R5e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUMyMzMxO1xuICBjb2xvcjogd2hpdGU7XG59XG4ubmp7XG4gIGNvbG9yOiByZWQ7XG59XG4uZm9vdGJvZHljb257XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnRleHR1bmRlcjpob3Zlclxue1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uZm9vdGVyaGVhZGluZ3N7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuLmZvb3RlbmR7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNjFDMjc7XG59XG4uZm9vdGVuZGh7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5mb290c3RhcnRoe1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICB0ZXh0LWFsaWduLWxhc3Q6bGVmdDtcbn1cblxuXG4vKiBzdHlsZXMgZm9yIHRoZSBuYXYgKi9cbi5uYmFye1xuICBiYWNrZ3JvdW5kLWNvbG9yOlx0IzNDQjM3MTtcbiAgcG9zaXRpb246cmVsYXRpdmU7XG4gIGJvdHRvbToyMHB4O1xufVxuLmxvZyBpbWd7XG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xuICB0b3A6MTBweDtcbiAgbWFyZ2luLWxlZnQ6MTAwcHg7XG5cbiAgLy8gaGVpZ2h0Ojg1cHhcbn1cbi5mc3RidG57XG4gIG1pbi1oZWlnaHQ6MzBweDtcbiAgbWFyZ2luOjEwcHg7XG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xuICB0b3A6MjVweDtcbiAgbGVmdDotMTgwcHg7XG4gIGJvcmRlci1yYWRpdXM6NXB4O1xuICBmb250LXdlaWdodDpib2xkO1xuICBiYWNrZ3JvdW5kOiNmZmZmZmY7XG4gIGJvcmRlcjoxcHggc29saWQgIzAwMDAwMDtcbiAgY29sb3I6IzAwMDAwMDtcbn1cbi5mc3RidG46aG92ZXJ7XG4gIGNvbG9yOiMwMDAwMDA7XG59XG4uc25kYnRue1xuICBtaW4taGVpZ2h0OjMwcHg7XG4gIG1heC13aWR0aDoxMTVweDtcbiAgcG9zaXRpb246cmVsYXRpdmU7XG4gIHRvcDotMjVweDtcbiAgbGVmdDo1cHg7XG4gIG1hcmdpbi1yaWdodDo1MHB4O1xuICBib3JkZXItcmFkaXVzOjVweDtcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgYmFja2dyb3VuZDojZmZmZmZmO1xuICBib3JkZXI6MXB4IHNvbGlkICMwMDAwMDA7XG4gIGNvbG9yOiMwMDAwMDA7XG59XG4uc25kYnRuOmhvdmVye1xuICBjb2xvcjojMDAwMDAwO1xufVxuLmxja3tcbiAgcGFkZGluZy1yaWdodDo1cHg7XG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xuICBib3R0b206MHB4O1xuICBjb2xvcjpkYXJrZ3JlZW47XG59XG5cbi8qIHN0eWxlcyBmb3IgdGhlIG1vZGFsICovXG4jbW9kYWwtc2VjdGlvbnN7XG4gIGJhY2tncm91bmQtY29sb3I6IzNiNTk5OTtcbn1cbmhyeyBcbiAgaGVpZ2h0OiAxcHg7XG4gIGNvbG9yOiByZWQ7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4udWstbW9kYWwtaGVhZGVye1xuICBoZWlnaHQ6NjBweDtcbiAgcGFkZGluZy10b3A6MzBweDtcbiAgcGFkZGluZy1ib3R0b206MTJweDtcbiAgYm9yZGVyLXJhZGl1czoxMHB4O1xufVxuXG4ubG9nb297XG4gIHdpZHRoOiAzMDBweDtcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgXG59XG4udWstbW9kYWwtZGlhbG9ne1xuICBoZWlnaHQ6YXV0bztcbiAgd2lkdGg6NDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6MTBweDtcbn1cbi5idG4xe1xuICBwYWRkaW5nLWxlZnQ6MjBweDtcbiAgZm9udC1zaXplOjMwcHg7XG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XG4gIGJvcmRlci1yYWRpdXM6NXB4O1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgYm90dG9tOjRweDtcbiAgd2lkdGg6MzYwcHg7XG4gIGhlaWdodDo2MHB4O1xufVxuLmJ0bjN7XG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xuICB0b3A6NXB4O1xuICBsZWZ0OjIwcHg7XG4gIHdpZHRoOjM4MHB4O1xuICBib3JkZXItcmFkaXVzOjVweDtcbn1cblxuLmlwdDF7XG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xuICBsZWZ0OjIwcHg7XG4gIHRvcDotNXB4O1xuICB3aWR0aDozODBweDtcbiAgYm9yZGVyLXJhZGl1czo1cHg7XG59XG4uaXB0MntcbiAgcG9zaXRpb246cmVsYXRpdmU7XG4gIGxlZnQ6MjBweDtcbiAgdG9wOjEycHg7XG4gIHdpZHRoOjM4MHB4O1xuICBib3JkZXItcmFkaXVzOjVweDtcbn1cbi5pcHQze1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgbGVmdDoyMHB4O1xuICB0b3A6MjhweDtcbiAgd2lkdGg6MzgwcHg7XG4gIGJvcmRlci1yYWRpdXM6NXB4O1xufVxuXG4ucDF7XG4gIGZvbnQtc2l6ZToxMnB4O1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgbGVmdDoyMHB4O1xuICB0b3A6MTVweDtcbiAgd2lkdGg6MzgwcHg7XG59XG4ucDJ7XG4gIGZvbnQtc2l6ZToxMnB4O1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgbGVmdDoyMHB4O1xuICBib3R0b206MThweDtcbiAgd2lkdGg6MzgwcHg7XG59XG5cbi5sbmsxe1xuICB3aWR0aDoxODBweDtcbiAgbWFyZ2luLXRvcDo4cHg7XG4gIG1hcmdpbi1yaWdodDozMHB4O1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgYm90dG9tOjQwcHg7XG4gIGxlZnQ6MjBweDtcbiAgYm9yZGVyLXJhZGl1czo1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IzNiNTk5OTtcbiAgY29sb3I6d2hpdGU7XG59XG4ubG5rMntcbiAgd2lkdGg6MTg4cHg7XG4gIG1hcmdpbi10b3A6OHB4O1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgYm90dG9tOjQwcHg7XG4gIGJvcmRlci1yYWRpdXM6NXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiNkZDRiMzk7XG4gIGNvbG9yOndoaXRlO1xufVxuXG4uZmJ7XG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xuICByaWdodDoxNnB4O1xuICBib3R0b206MnB4O1xuICBjb2xvcjojM2I1OTk5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xufVxuLmdse1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgcmlnaHQ6MTJweDtcbiAgYm90dG9tOjJweDtcbn1cbi5mb3Jnb3R7XG4gIGZvbnQtc2l6ZToxNHB4O1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgdG9wOjI1cHg7XG4gIGxlZnQ6MjkwcHg7XG59XG4ubGNrMntcbiAgcG9zaXRpb246cmVsYXRpdmU7XG4gIHJpZ2h0OjVweDtcbiAgYm90dG9tOjNweDtcbn1cbi51ay1tYXJnaW57XG4gIG1hcmdpbi1ib3R0b206MHB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuLnVrLWNsb3Nle1xuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgdG9wOi0yMnB4O1xuICBsZWZ0OjM5MHB4O1xuICBjb2xvcjpibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbn1cblxuLm10c2J7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG59XG5cbi5uYXZjb2x7XG5cbiAgYmFja2dyb3VuZDogcmdiYSg0OSwxNDAsMzIsMSk7XG5iYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDQ5LDE0MCwzMiwxKSAwJSwgcmdiYSgxMTksMjE0LDM2LDEpIDEwMCUpO1xuYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsZWZ0IHRvcCwgcmlnaHQgdG9wLCBjb2xvci1zdG9wKDAlLCByZ2JhKDQ5LDE0MCwzMiwxKSksIGNvbG9yLXN0b3AoMTAwJSwgcmdiYSgxMTksMjE0LDM2LDEpKSk7XG5iYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDQ5LDE0MCwzMiwxKSAwJSwgcmdiYSgxMTksMjE0LDM2LDEpIDEwMCUpO1xuYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoNDksMTQwLDMyLDEpIDAlLCByZ2JhKDExOSwyMTQsMzYsMSkgMTAwJSk7XG5iYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoNDksMTQwLDMyLDEpIDAlLCByZ2JhKDExOSwyMTQsMzYsMSkgMTAwJSk7XG5iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoNDksMTQwLDMyLDEpIDAlLCByZ2JhKDExOSwyMTQsMzYsMSkgMTAwJSk7XG4gIFxuICAgbWFyZ2luLWJvdHRvbTogMjA7XG4gIGhlaWdodDogYXV0bztcblxuXG59XG4vKiBNZWRpYSBRdWVyaWVzIGZvciB0aGUgbW9kYWwgcGFydCAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo2NDBweCl7XG4gIC51ay1tb2RhbC1kaWFsb2d7XG4gICAgaGVpZ2h0OjQ1MHB4O1xuICB9XG4gIC5idG4xe1xuICAgIGZvbnQtc2l6ZToyMHB4O1xuICAgIG1heC13aWR0aDoxMzVweDtcbiAgfVxuICAuYnRuMntcbiAgICBmb250LXNpemU6MjBweDtcbiAgICBtYXgtd2lkdGg6MTM1cHg7XG4gIH1cbiAgLmlwdDEsIC5pcHQyLCAuaXB0MywgLmlwdDQsIC5pcHQ1e1xuICAgIG1heC13aWR0aDoyOTBweDtcbiAgfVxuICAucDF7XG4gICAgbWF4LXdpZHRoOjI1MHB4O1xuICB9XG4gIC5wM3tcbiAgICBtYXgtd2lkdGg6MjUwcHg7XG4gIH1cbiAgLmJ0bjN7XG4gICAgbWF4LXdpZHRoOjI5MHB4O1xuICB9XG4gIC5idG40e1xuICAgIG1heC13aWR0aDoyOTBweDtcbiAgfVxuICAubG5rMXtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICBsZWZ0OjE4cHg7XG4gICAgbWF4LXdpZHRoOjE1MHB4O1xuICB9XG4gIC5sbmsye1xuICAgIG1heC13aWR0aDoxMzZweDtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICByaWdodDo1cHg7XG4gIH1cbiAgLmxuazN7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgbGVmdDoxOHB4O1xuICAgIG1heC13aWR0aDoxNTBweDtcbiAgfVxuICAubG5rNHtcbiAgICBtYXgtd2lkdGg6MTM2cHg7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgcmlnaHQ6NXB4O1xuICB9XG4gIC5mYntcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICByaWdodDo4cHg7XG4gICAgYm90dG9tOjJweDtcbiAgICBjb2xvcjojM2I1OTk5O1xuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG4gIH1cbiAgLmdse1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgIHJpZ2h0OjVweDtcbiAgICBib3R0b206MnB4O1xuICB9XG4gIC5mb3Jnb3R7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgdG9wOjIwNXB4O1xuICAgIGxlZnQ6MjAwcHg7XG4gIH1cbiAgLmZvb3RzdGFydGh7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICB0ZXh0LWFsaWduLWxhc3Q6Y2VudGVyO1xuICB9XG59XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDozMjBweCl7XG4gIC51ay1tb2RhbC1kaWFsb2d7XG4gICAgaGVpZ2h0OjQ1MHB4O1xuICB9XG4gIC5idG4xe1xuICAgIGZvbnQtc2l6ZToyMHB4O1xuICAgIG1heC13aWR0aDoxMzVweDtcbiAgfVxuICAuYnRuMntcbiAgICBmb250LXNpemU6MjBweDtcbiAgICBtYXgtd2lkdGg6MTM1cHg7XG4gIH1cbiAgLmlwdDEsIC5pcHQyLCAuaXB0MywgLmlwdDQsIC5pcHQ1e1xuICAgIG1heC13aWR0aDoyOTBweDtcbiAgfVxuICAucDF7XG4gICAgbWF4LXdpZHRoOjI1MHB4O1xuICB9XG4gIC5wM3tcbiAgICBtYXgtd2lkdGg6MjUwcHg7XG4gIH1cbiAgLmJ0bjN7XG4gICAgbWF4LXdpZHRoOjI5MHB4O1xuICB9XG4gIC5idG40e1xuICAgIG1heC13aWR0aDoyOTBweDtcbiAgfVxuICAubG5rMXtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICBsZWZ0OjE4cHg7XG4gICAgbWF4LXdpZHRoOjE1MHB4O1xuICB9XG4gIC5sbmsye1xuICAgIG1heC13aWR0aDoxMzZweDtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICByaWdodDo1cHg7XG4gIH1cbiAgLmxuazN7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgbGVmdDoxOHB4O1xuICAgIG1heC13aWR0aDoxNTBweDtcbiAgfVxuICAubG5rNHtcbiAgICBtYXgtd2lkdGg6MTM2cHg7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgcmlnaHQ6NXB4O1xuICB9XG4gIC5mYntcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICByaWdodDo4cHg7XG4gICAgYm90dG9tOjJweDtcbiAgICBjb2xvcjojM2I1OTk5O1xuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG4gIH1cbiAgLmdse1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgIHJpZ2h0OjVweDtcbiAgICBib3R0b206MnB4O1xuICB9XG4gIC5mb3Jnb3R7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgdG9wOjIwNXB4O1xuICAgIGxlZnQ6MjAwcHg7XG4gIH1cbiAgLmZvb3RzdGFydGh7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICB0ZXh0LWFsaWduLWxhc3Q6Y2VudGVyO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var HomeComponent = /** @class */ (function () {
    function HomeComponent(validateService, authService, flashMessage, router, formBuilder) {
        this.validateService = validateService;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.formBuilder = formBuilder;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.userAddressValidations = this.formBuilder.group({
            mobileNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('[6-9]\\d{9}')]],
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('[a-zA-Z]+')]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(20)]],
        });
    };
    HomeComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            contact: this.contact,
            password: this.password,
        };
        // Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show(UIkit.notification({ message: 'Please fill in all fields', status: 'danger', pos: 'top-right', timeout: 4000 }));
            return false;
        }
        //Register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                // tslint:disable-next-line:max-line-length
                _this.flashMessage.show(UIkit.notification({ message: 'You are now registered and can now login', status: 'success', pos: 'top-right', timeout: 4000 }));
                _this.router.navigate(['/otp']);
            }
            else {
                _this.flashMessage.show(UIkit.notification({ message: 'Something went wrong', status: 'danger', pos: 'top-right', timeout: 4000 }));
                _this.router.navigate(['/']);
            }
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_validate_service__WEBPACK_IMPORTED_MODULE_2__["ValidateService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/leftbtn/leftbtn.component.html":
/*!************************************************!*\
  !*** ./src/app/leftbtn/leftbtn.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-grid backcard1\">\n    <div class=\"uk-width-1-5 buttonleft  \" style=\"margin-top: 100px\">\n      <div    uk-switcher=\"animation: uk-animation-fade; toggle:  > *\">\n       <button  onclick=\"window.location.href ='/middlepart';\" class=\"uk-button uk-button-default  uk-margin-left uk-margin-top   data-uk-button active\"   style=\"width:65%; \">\n          \n          \n     <img   class=\"img-responsive shadow\" width=\"30px\" height=\" 20px\" src=\"assets/img/tr1.png\">   CashGames</button> <br>\n        <button class=\"uk-button uk-button-default  uk-margin-left uk-margin-top  target\" style=\"width:65%;\">\n            <img class=\"img-responsive shadow\" width=\"30px\" height=\" 20px\" src=\"assets/img/tr2.png\"> Tournaments</button><br>\n             <button     onclick=\"window.location.href ='./middlepart';\" class=\"uk-button uk-button-default  uk-margin-left uk-margin-top focus\" style=\"width:65%; \">\n            <img  class=\"img-responsive shadow\" width=\"30px\" height=\" 20px\" src=\"assets/img/tr3.png\"> Practice</button><br>\n        <!-- <button class=\"uk-button uk-button-default  btng uk-margin-top\" style=\"width:54%\">Game 1</button><br>\n        <button class=\"uk-button uk-button-default  btng uk-margin-top\" style=\"width:54%;\">Game 2</button><br>\n        <button class=\"uk-button uk-button-default  btng uk-margin-top\" style=\"width:54%;\">Ga me 3</button><br> -->\n      </div>\n    </div>\n</div>\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/leftbtn/leftbtn.component.scss":
/*!************************************************!*\
  !*** ./src/app/leftbtn/leftbtn.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".buttonleft button {\n  margin-top: 13px;\n  color: white;\n  font-size: 1rem;\n  border-radius: 5px;\n  color: white;\n  border-radius: 5px;\n  padding-left: 30px; }\n\n.data-uk-button:active {\n  background-color: red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGVmdGJ0bi9DOlxcVXNlcnNcXGJ1amppLkRFU0tUT1AtSE43VUI1VFxcTXVzaWNcXGFhYXJ1bW15LWZpbmFsOWp1bFxcYWFhcnVtbXktZmluYWw5anVsXFxhYWFydW1teS1mcm9udGxpdmUvc3JjXFxhcHBcXGxlZnRidG5cXGxlZnRidG4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWTtFQUVaLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTs7QUFZcEI7RUFDRSxxQkFBcUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xlZnRidG4vbGVmdGJ0bi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b25sZWZ0IGJ1dHRvbntcbiAgbWFyZ2luLXRvcDogMTNweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6IHdoaXRlO1xuICAvLyBmb250LXNpemU6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xufVxuLy8gLnVrLWdyaWR7XG4vLyAgIHBhZGRpbmctdG9wOiAyMHB4O1xuLy8gfWMgICBcbi8vIC51ay1idXR0b24tZGVmYXVsdHtcbi8vICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4vLyB9XG4vLyAuYnV0dG9ubGVmdCBidXR0b246dGFyZ2V0e1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4vLyB9XG5cbi5kYXRhLXVrLWJ1dHRvbjphY3RpdmV7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/leftbtn/leftbtn.component.ts":
/*!**********************************************!*\
  !*** ./src/app/leftbtn/leftbtn.component.ts ***!
  \**********************************************/
/*! exports provided: LeftbtnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftbtnComponent", function() { return LeftbtnComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LeftbtnComponent = /** @class */ (function () {
    function LeftbtnComponent() {
    }
    LeftbtnComponent.prototype.ngOnInit = function () {
    };
    LeftbtnComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-leftbtn',
            template: __webpack_require__(/*! ./leftbtn.component.html */ "./src/app/leftbtn/leftbtn.component.html"),
            styles: [__webpack_require__(/*! ./leftbtn.component.scss */ "./src/app/leftbtn/leftbtn.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LeftbtnComponent);
    return LeftbtnComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login\">\n<!-- <a   class=\" arrow\" href=\"\" uk-icon=\"icon:  arrow-left; ratio: 2  \"></a>  -->\n<a   class=\" arrow\" href=\"\" uk-icon=\"icon:  arrow-left\"></a>\n\n\n<div class=\"uk-card uk-card-default uk-width-1-2@m uk-width-1-1@s log\">\n    \n  <ul class=\"uk-modal-header\" uk-switcher=\"animation: uk-animation-fade; toggle: > *\">\n    <button class=\"uk-button uk-button-default btn2\" type=\"button\">Login</button>\n  </ul>\n  <ul class=\"uk-modal-body uk-switcher uk-margin\">\n    <li>\n      <form (submit)=\"onLoginSubmit()\">\n        <fieldset class=\"uk-fieldset\">\n          <div class=\"uk-margin\">\n              <!-- <input class=\"uk-input ipt4\" type=\"text\" [(ngModel)]=\"mobilenumber\" name=\"mobilenumber\" placeholder=\"mobile\"> -->\n            <input class=\"uk-input ipt4\" type=\"text\" [(ngModel)]=\"username\" name=\"username\" placeholder=\"Your username/mobile\">\n            <input class=\"uk-input ipt5\" type=\"password\" [(ngModel)]=\"password\" name=\"password\" placeholder=\"Secure password\">\n            <a class=\"forgot\" routerLink=\"/forgot-password\">Forgot Password</a>\n            <p class=\"p3\">By registering you are agreeing to our Terms & Conditions</p>\n            <button  class=\"uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom btn4\" type=\"submit\"><span class=\"lck1\" uk-icon=\"lock\"></span>Login</button>\n            <p class=\"p4\">Or login in one click</p>\n            <p uk-margin>\n              <a href=\"/auth/facebook \"class=\"uk-button uk-button-default lnk3\" ><span class=\"fb\" uk-icon=\"facebook\"></span>Facebook</a>\n              <a class=\"uk-button uk-button-default lnk4\" href=\"/auth/google\"><span class=\"gl\" uk-icon=\"google\"></span>Google</a>\n              \n            </p>\n\n           \n          </div>\n        </fieldset>\n      </form>\n    </li>\n    \n  </ul>\n  <hr>  \n\n\n  <div class=\"logoo\">\n    <img  src=\" assets/img/logo1.png\">\n  </div>\n  <hr>\n\n  \n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn2 {\n  font-size: 30px;\n  font-weight: bold;\n  border-radius: 5px;\n  position: relative;\n  bottom: 4px;\n  width: 360px;\n  height: 60px; }\n\n.arrow {\n  padding-left: 30%;\n  margin-top: 10px;\n  width: 50px;\n  color: white; }\n\n.btn4 {\n  position: relative;\n  top: 5px;\n  left: 20px;\n  width: 380px;\n  border-radius: 5px; }\n\n.ipt4 {\n  position: relative;\n  left: 20px;\n  top: -4px;\n  width: 380px;\n  border-radius: 5px; }\n\n.ipt5 {\n  position: relative;\n  left: 20px;\n  top: 12px;\n  width: 380px;\n  border-radius: 5px; }\n\n.p3 {\n  font-size: 12px;\n  position: relative;\n  left: 20px;\n  top: 10px;\n  width: 380px; }\n\n.p4 {\n  font-size: 12px;\n  position: relative;\n  left: 20px;\n  bottom: 12px;\n  width: 380px; }\n\n.lnk3 {\n  width: 180px;\n  margin-top: 25px;\n  margin-right: 30px;\n  position: relative;\n  bottom: 40px;\n  left: 20px;\n  border-radius: 5px;\n  background-color: #3b5999;\n  color: white; }\n\n.lnk4 {\n  width: 188px;\n  margin-top: 25px;\n  position: relative;\n  bottom: 40px;\n  border-radius: 5px;\n  background-color: #dd4b39;\n  color: white; }\n\n.fb {\n  position: relative;\n  right: 16px;\n  bottom: 2px;\n  color: #3b5999;\n  background-color: white; }\n\n.gl {\n  position: relative;\n  right: 12px;\n  bottom: 2px; }\n\n.forgot {\n  font-size: 14px;\n  position: relative;\n  top: 25px;\n  left: 290px; }\n\n.lck1 {\n  position: relative;\n  right: 5px;\n  bottom: 3px; }\n\n.uk-margin {\n  margin-bottom: 0px; }\n\n.login {\n  background-color: #272749;\n  overflow: auto;\n  padding-top: 50px;\n  padding-bottom: 20%; }\n\n.logoo {\n  width: 300px;\n  padding-left: 50px; }\n\nhr {\n  height: 1px;\n  color: red;\n  margin-left: 50px;\n  margin-right: 50px;\n  background-color: red;\n  border: none; }\n\n.log {\n  border-radius: 10px;\n  position: relative;\n  width: 420px;\n  height: 650px;\n  top: 40px;\n  left: 500px; }\n\n.uk-modal-header {\n  height: 60px;\n  padding-bottom: 12px;\n  border-radius: 10px; }\n\n/* Media Queries for the modal part */\n\n@media screen and (max-width: 640px) {\n  .btn2 {\n    font-size: 20px;\n    max-width: 135px; }\n  .ipt4, .ipt5 {\n    max-width: 290px; }\n  .p3 {\n    max-width: 250px; }\n  .btn4 {\n    max-width: 290px; }\n  .lnk3 {\n    position: relative;\n    left: 18px;\n    max-width: 150px; }\n  .lnk4 {\n    max-width: 136px;\n    position: relative;\n    right: 5px; }\n  .fb {\n    position: relative;\n    right: 8px;\n    bottom: 2px;\n    color: #3b5999;\n    background-color: white; }\n  .gl {\n    position: relative;\n    right: 5px;\n    bottom: 2px; }\n  .forgot {\n    position: absolute;\n    top: 205px;\n    left: 200px; }\n  .login {\n    background-color: #3b5999;\n    padding-right: 5px;\n    padding-top: 5px;\n    padding-bottom: 80px; }\n  .log {\n    position: relative;\n    width: 420px;\n    height: 440px;\n    top: 40px;\n    left: 500px; } }\n\n@media screen and (max-width: 320px) {\n  .btn2 {\n    font-size: 20px;\n    max-width: 135px; }\n  .ipt4, .ipt5 {\n    max-width: 290px; }\n  .p3 {\n    max-width: 250px; }\n  .btn4 {\n    max-width: 290px; }\n  .lnk3 {\n    position: relative;\n    left: 18px;\n    max-width: 150px; }\n  .lnk4 {\n    max-width: 136px;\n    position: relative;\n    right: 5px; }\n  .fb {\n    position: relative;\n    right: 8px;\n    bottom: 2px;\n    color: #3b5999;\n    background-color: white; }\n  .gl {\n    position: relative;\n    right: 5px;\n    bottom: 2px; }\n  .forgot {\n    position: absolute;\n    top: 205px;\n    left: 200px; }\n  .login {\n    background-color: #3b5999;\n    padding-right: 5px;\n    padding-top: 5px;\n    padding-bottom: 80px; }\n  .log {\n    position: relative;\n    width: 420px;\n    height: 440px;\n    top: 40px;\n    left: 300px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxidWpqaS5ERVNLVE9QLUhON1VCNVRcXE11c2ljXFxhYWFydW1teS1maW5hbDlqdWxcXGFhYXJ1bW15LWZpbmFsOWp1bFxcYWFhcnVtbXktZnJvbnRsaXZlL3NyY1xcYXBwXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFjO0VBQ2QsaUJBQWdCO0VBQ2hCLGtCQUFpQjtFQUNqQixrQkFBaUI7RUFDakIsV0FBVTtFQUNWLFlBQVc7RUFDWCxZQUFXLEVBQUE7O0FBR2I7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBRWhCLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBSWQ7RUFDRSxrQkFBaUI7RUFDakIsUUFBTztFQUNQLFVBQVM7RUFDVCxZQUFXO0VBQ1gsa0JBQWlCLEVBQUE7O0FBRW5CO0VBQ0Usa0JBQWlCO0VBQ2pCLFVBQVM7RUFDVCxTQUFRO0VBQ1IsWUFBVztFQUNYLGtCQUFpQixFQUFBOztBQUVuQjtFQUNFLGtCQUFpQjtFQUNqQixVQUFTO0VBQ1QsU0FBUTtFQUNSLFlBQVc7RUFDWCxrQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSxlQUFjO0VBQ2Qsa0JBQWlCO0VBQ2pCLFVBQVM7RUFDVCxTQUFRO0VBQ1IsWUFBVyxFQUFBOztBQUViO0VBQ0UsZUFBYztFQUNkLGtCQUFpQjtFQUNqQixVQUFTO0VBQ1QsWUFBVztFQUNYLFlBQVcsRUFBQTs7QUFFYjtFQUNFLFlBQVc7RUFDWCxnQkFBZTtFQUNmLGtCQUFpQjtFQUNqQixrQkFBaUI7RUFDakIsWUFBVztFQUNYLFVBQVM7RUFDVCxrQkFBaUI7RUFDakIseUJBQXdCO0VBQ3hCLFlBQVcsRUFBQTs7QUFFYjtFQUNFLFlBQVc7RUFDWCxnQkFBZTtFQUNmLGtCQUFpQjtFQUNqQixZQUFXO0VBQ1gsa0JBQWlCO0VBQ2pCLHlCQUF3QjtFQUN4QixZQUFXLEVBQUE7O0FBRWI7RUFDRSxrQkFBaUI7RUFDakIsV0FBVTtFQUNWLFdBQVU7RUFDVixjQUFhO0VBQ2IsdUJBQXNCLEVBQUE7O0FBRXhCO0VBQ0Usa0JBQWlCO0VBQ2pCLFdBQVU7RUFDVixXQUFVLEVBQUE7O0FBRVo7RUFDRSxlQUFjO0VBQ2Qsa0JBQWlCO0VBQ2pCLFNBQVE7RUFDUixXQUFVLEVBQUE7O0FBRVo7RUFDRSxrQkFBaUI7RUFDakIsVUFBUztFQUNULFdBQVUsRUFBQTs7QUFFWjtFQUNFLGtCQUFpQixFQUFBOztBQUVuQjtFQUNFLHlCQUFpQztFQUNqQyxjQUFjO0VBQ2QsaUJBQWdCO0VBQ2hCLG1CQUFrQixFQUFBOztBQUdwQjtFQUNFLFlBQVk7RUFDWixrQkFDRixFQUFBOztBQVVBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixZQUFZLEVBQUE7O0FBRWQ7RUFDRSxtQkFBa0I7RUFDbEIsa0JBQWlCO0VBQ2pCLFlBQVc7RUFDWCxhQUFZO0VBQ1osU0FBUTtFQUNSLFdBQVUsRUFBQTs7QUFFWjtFQUNFLFlBQVc7RUFFWCxvQkFBbUI7RUFDbkIsbUJBQWtCLEVBQUE7O0FBR3BCLHFDQUFBOztBQUNBO0VBQ0U7SUFDRSxlQUFjO0lBQ2QsZ0JBQWUsRUFBQTtFQUVqQjtJQUNFLGdCQUFlLEVBQUE7RUFFakI7SUFDRSxnQkFBZSxFQUFBO0VBRWpCO0lBQ0UsZ0JBQWUsRUFBQTtFQUVqQjtJQUNFLGtCQUFpQjtJQUNqQixVQUFTO0lBQ1QsZ0JBQWUsRUFBQTtFQUVqQjtJQUNFLGdCQUFlO0lBQ2Ysa0JBQWlCO0lBQ2pCLFVBQVMsRUFBQTtFQUVYO0lBQ0Usa0JBQWlCO0lBQ2pCLFVBQVM7SUFDVCxXQUFVO0lBQ1YsY0FBYTtJQUNiLHVCQUFzQixFQUFBO0VBRXhCO0lBQ0Usa0JBQWlCO0lBQ2pCLFVBQVM7SUFDVCxXQUFVLEVBQUE7RUFFWjtJQUNFLGtCQUFpQjtJQUNqQixVQUFTO0lBQ1QsV0FBVSxFQUFBO0VBRVo7SUFDRSx5QkFBd0I7SUFDeEIsa0JBQWlCO0lBQ2pCLGdCQUFlO0lBQ2Ysb0JBQ0YsRUFBQTtFQUNBO0lBQ0Usa0JBQWlCO0lBQ2pCLFlBQVc7SUFDWCxhQUFZO0lBQ1osU0FBUTtJQUNSLFdBQVUsRUFBQSxFQUNYOztBQUVIO0VBQ0U7SUFDRSxlQUFjO0lBQ2QsZ0JBQWUsRUFBQTtFQUVqQjtJQUNFLGdCQUFlLEVBQUE7RUFFakI7SUFDRSxnQkFBZSxFQUFBO0VBRWpCO0lBQ0UsZ0JBQWUsRUFBQTtFQUVqQjtJQUNFLGtCQUFpQjtJQUNqQixVQUFTO0lBQ1QsZ0JBQWUsRUFBQTtFQUVqQjtJQUNFLGdCQUFlO0lBQ2Ysa0JBQWlCO0lBQ2pCLFVBQVMsRUFBQTtFQUVYO0lBQ0Usa0JBQWlCO0lBQ2pCLFVBQVM7SUFDVCxXQUFVO0lBQ1YsY0FBYTtJQUNiLHVCQUFzQixFQUFBO0VBRXhCO0lBQ0Usa0JBQWlCO0lBQ2pCLFVBQVM7SUFDVCxXQUFVLEVBQUE7RUFFWjtJQUNFLGtCQUFpQjtJQUNqQixVQUFTO0lBQ1QsV0FBVSxFQUFBO0VBRVo7SUFDRSx5QkFBd0I7SUFDeEIsa0JBQWlCO0lBQ2pCLGdCQUFlO0lBQ2Ysb0JBQ0YsRUFBQTtFQUNBO0lBQ0Usa0JBQWlCO0lBQ2pCLFlBQVc7SUFDWCxhQUFZO0lBQ1osU0FBUTtJQUNSLFdBQVUsRUFBQSxFQUNYIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuMntcbiAgZm9udC1zaXplOjMwcHg7XG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XG4gIGJvcmRlci1yYWRpdXM6NXB4O1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgYm90dG9tOjRweDtcbiAgd2lkdGg6MzYwcHg7XG4gIGhlaWdodDo2MHB4O1xufVxuXG4uYXJyb3d7XG4gIHBhZGRpbmctbGVmdDogMzAlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICAvLyBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBjb2xvcjogd2hpdGU7XG5cblxufVxuLmJ0bjR7XG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xuICB0b3A6NXB4O1xuICBsZWZ0OjIwcHg7XG4gIHdpZHRoOjM4MHB4O1xuICBib3JkZXItcmFkaXVzOjVweDtcbn1cbi5pcHQ0e1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgbGVmdDoyMHB4O1xuICB0b3A6LTRweDtcbiAgd2lkdGg6MzgwcHg7XG4gIGJvcmRlci1yYWRpdXM6NXB4O1xufVxuLmlwdDV7XG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xuICBsZWZ0OjIwcHg7XG4gIHRvcDoxMnB4O1xuICB3aWR0aDozODBweDtcbiAgYm9yZGVyLXJhZGl1czo1cHg7XG59XG4ucDN7XG4gIGZvbnQtc2l6ZToxMnB4O1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgbGVmdDoyMHB4O1xuICB0b3A6MTBweDtcbiAgd2lkdGg6MzgwcHg7XG59XG4ucDR7XG4gIGZvbnQtc2l6ZToxMnB4O1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgbGVmdDoyMHB4O1xuICBib3R0b206MTJweDtcbiAgd2lkdGg6MzgwcHg7XG59XG4ubG5rM3tcbiAgd2lkdGg6MTgwcHg7XG4gIG1hcmdpbi10b3A6MjVweDtcbiAgbWFyZ2luLXJpZ2h0OjMwcHg7XG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xuICBib3R0b206NDBweDtcbiAgbGVmdDoyMHB4O1xuICBib3JkZXItcmFkaXVzOjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjojM2I1OTk5O1xuICBjb2xvcjp3aGl0ZTtcbn1cbi5sbms0e1xuICB3aWR0aDoxODhweDtcbiAgbWFyZ2luLXRvcDoyNXB4O1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgYm90dG9tOjQwcHg7XG4gIGJvcmRlci1yYWRpdXM6NXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiNkZDRiMzk7XG4gIGNvbG9yOndoaXRlO1xufVxuLmZie1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgcmlnaHQ6MTZweDtcbiAgYm90dG9tOjJweDtcbiAgY29sb3I6IzNiNTk5OTtcbiAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbn1cbi5nbHtcbiAgcG9zaXRpb246cmVsYXRpdmU7XG4gIHJpZ2h0OjEycHg7XG4gIGJvdHRvbToycHg7XG59XG4uZm9yZ290e1xuICBmb250LXNpemU6MTRweDtcbiAgcG9zaXRpb246cmVsYXRpdmU7XG4gIHRvcDoyNXB4O1xuICBsZWZ0OjI5MHB4O1xufVxuLmxjazF7XG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xuICByaWdodDo1cHg7XG4gIGJvdHRvbTozcHg7XG59XG4udWstbWFyZ2lue1xuICBtYXJnaW4tYm90dG9tOjBweDtcbn1cbi5sb2dpbntcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM5LCAzOSwgNzMpO1xuICBvdmVyZmxvdzogYXV0bztcbiAgcGFkZGluZy10b3A6NTBweDtcbiAgcGFkZGluZy1ib3R0b206MjAlO1xuICBcbn1cbi5sb2dvb3tcbiAgd2lkdGg6IDMwMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDUwcHhcbn1cblxuXG4vLyAuYm9yZGRlcntcbi8vICAgYm9yZGVyOiAxcHggc29saWQ7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICNkZDRiMzk7XG4vLyAgIGhlaWdodDogcHg7XG4vLyAgIHdpZHRoOiBweFxuXG4vLyB9XG5ocnsgXG4gIGhlaWdodDogMXB4O1xuICBjb2xvcjogcmVkO1xuICBtYXJnaW4tbGVmdDogNTBweDtcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5sb2cge1xuICBib3JkZXItcmFkaXVzOjEwcHg7XG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xuICB3aWR0aDo0MjBweDtcbiAgaGVpZ2h0OjY1MHB4O1xuICB0b3A6NDBweDtcbiAgbGVmdDo1MDBweDtcbn1cbi51ay1tb2RhbC1oZWFkZXJ7XG4gIGhlaWdodDo2MHB4O1xuICAvLyBwYWRkaW5nLXRvcDo1MHB4O1xuICBwYWRkaW5nLWJvdHRvbToxMnB4O1xuICBib3JkZXItcmFkaXVzOjEwcHg7XG59XG5cbi8qIE1lZGlhIFF1ZXJpZXMgZm9yIHRoZSBtb2RhbCBwYXJ0ICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjY0MHB4KXtcbiAgLmJ0bjJ7XG4gICAgZm9udC1zaXplOjIwcHg7XG4gICAgbWF4LXdpZHRoOjEzNXB4O1xuICB9XG4gIC5pcHQ0LCAuaXB0NXtcbiAgICBtYXgtd2lkdGg6MjkwcHg7XG4gIH1cbiAgLnAze1xuICAgIG1heC13aWR0aDoyNTBweDtcbiAgfVxuICAuYnRuNHtcbiAgICBtYXgtd2lkdGg6MjkwcHg7XG4gIH1cbiAgLmxuazN7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgbGVmdDoxOHB4O1xuICAgIG1heC13aWR0aDoxNTBweDtcbiAgfVxuICAubG5rNHtcbiAgICBtYXgtd2lkdGg6MTM2cHg7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgcmlnaHQ6NXB4O1xuICB9XG4gIC5mYntcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICByaWdodDo4cHg7XG4gICAgYm90dG9tOjJweDtcbiAgICBjb2xvcjojM2I1OTk5O1xuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG4gIH1cbiAgLmdse1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgIHJpZ2h0OjVweDtcbiAgICBib3R0b206MnB4O1xuICB9XG4gIC5mb3Jnb3R7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgdG9wOjIwNXB4O1xuICAgIGxlZnQ6MjAwcHg7XG4gIH1cbiAgLmxvZ2lue1xuICAgIGJhY2tncm91bmQtY29sb3I6IzNiNTk5OTtcbiAgICBwYWRkaW5nLXJpZ2h0OjVweDtcbiAgICBwYWRkaW5nLXRvcDo1cHg7XG4gICAgcGFkZGluZy1ib3R0b206ODBweFxuICB9XG4gIC5sb2d7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgd2lkdGg6NDIwcHg7XG4gICAgaGVpZ2h0OjQ0MHB4O1xuICAgIHRvcDo0MHB4O1xuICAgIGxlZnQ6NTAwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MzIwcHgpe1xuICAuYnRuMntcbiAgICBmb250LXNpemU6MjBweDtcbiAgICBtYXgtd2lkdGg6MTM1cHg7XG4gIH1cbiAgLmlwdDQsIC5pcHQ1e1xuICAgIG1heC13aWR0aDoyOTBweDtcbiAgfVxuICAucDN7XG4gICAgbWF4LXdpZHRoOjI1MHB4O1xuICB9XG4gIC5idG40e1xuICAgIG1heC13aWR0aDoyOTBweDtcbiAgfVxuICAubG5rM3tcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICBsZWZ0OjE4cHg7XG4gICAgbWF4LXdpZHRoOjE1MHB4O1xuICB9XG4gIC5sbms0e1xuICAgIG1heC13aWR0aDoxMzZweDtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICByaWdodDo1cHg7XG4gIH1cbiAgLmZie1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgIHJpZ2h0OjhweDtcbiAgICBib3R0b206MnB4O1xuICAgIGNvbG9yOiMzYjU5OTk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbiAgfVxuICAuZ2x7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgcmlnaHQ6NXB4O1xuICAgIGJvdHRvbToycHg7XG4gIH1cbiAgLmZvcmdvdHtcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICB0b3A6MjA1cHg7XG4gICAgbGVmdDoyMDBweDtcbiAgfVxuICAubG9naW57XG4gICAgYmFja2dyb3VuZC1jb2xvcjojM2I1OTk5O1xuICAgIHBhZGRpbmctcmlnaHQ6NXB4O1xuICAgIHBhZGRpbmctdG9wOjVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTo4MHB4XG4gIH1cbiAgLmxvZ3tcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICB3aWR0aDo0MjBweDtcbiAgICBoZWlnaHQ6NDQwcHg7XG4gICAgdG9wOjQwcHg7XG4gICAgbGVmdDozMDBweDtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LoginComponent = /** @class */ (function () {
    // email:string;
    //  mobilenumber:string;
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password,
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show(UIkit.notification({ message: 'You are now logged in', status: 'success', pos: 'top-right', timeout: 4000 }));
                _this.router.navigate(['/lobby']);
            }
            else {
                _this.flashMessage.show(UIkit.notification({ message: data.msg, status: 'danger', pos: 'top-right', timeout: 4000 }));
                _this.router.navigate(['/login']);
            }
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/middlepart/middlepart.component.html":
/*!******************************************************!*\
  !*** ./src/app/middlepart/middlepart.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <app-nav></app-nav>\n  <app-leftbtn></app-leftbtn>\n  <app-btndownbanner></app-btndownbanner>\n</section>\n<div class=\"backcard1\">\n   <div class=\"uk-grid-small uk-child-width-expand@s uk-text-center\" uk-grid style=\"margin-left:15px;\">\n     <div class=\"uk-card uk-card-default uk-card-hover uk-card-body uk-width-1-6 card1mid\" style=\"width:22%; margin:-17px 10px 10px 25px; height:373px; border-radius:15px;\">\n       <div class=\"uk-card-media-top\">\n        <a href=\"/game\"> <img src=\"assets/img/card1.jpg\" alt=\"image of game\"></a>\n       </div>\n\n\n\n<!-- poppup box 101 -->\n\n<!-- .game-card:hover {\n  cursor: pointer;\n  box-shadow: 0 0 30px #ff0; -->\n\n\n\n\n\n\n\n\n       <div class=\"uk-card-body\">\n          <button class=\"uk-button uk-button-default uk-margin-small-right\" type=\"button\" uk-toggle=\"target: #modal-close-default\" style=\"   color: white;; background-color: green;border-radius:10px;\">play</button>\n         <!-- <div class=\"uk-flex uk-flex-center buttonselect\"><a class=\"uk-button uk-button-primary\" routerLink=\"/game\" style=\"border-radius:10px;\"></a></div> -->\n       </div>\n     </div>\n     <div class=\"uk-card uk-card-default uk-card-hover uk-card-body uk-width-1-6 card1mid\" style=\"width:22%; margin:-17px 10px 10px 9px;height:373px;  border-radius:15px;\">\n       <div class=\"uk-card-media-top\">\n        <a href=\"/game\"> <img src=\"assets/img/card2.jpg\" alt=\"image of game\"></a>\n       </div>\n       <div class=\"uk-card-body\">\n         <div class=\"uk-flex uk-flex-center buttonselect\"><a class=\"uk-button uk-button-primary\" routerLink=\"/game\" style=\"border-radius:10px;\">Play</a></div>\n       </div>\n     </div>\n     <div class=\"uk-card uk-card-default uk-card-hover uk-card-body uk-width-1-6 card1mid\" style=\"width:22%; margin:-17px 10px 10px 9px; height:373px; border-radius:15px\">\n       <div class=\"uk-card-media-top\">\n       <a href=\"/game\">  <img src=\"assets/img/deal.jpg\" alt=\"image of game\"></a>\n       </div>\n       <div class=\"uk-card-body\">\n         <div class=\"uk-flex uk-flex-center buttonselect\"><a class=\"uk-button uk-button-primary\" routerLink=\"/game\" style=\"border-radius:10px;\">Play</a></div>\n       </div>\n     </div>\n     <div class=\"uk-card uk-card-default uk-card-hover uk-card-body uk-width-1-6 card1mid\" style=\"width:22%; margin:-17px 10px 10px 9px; height:373px; border-radius:15px;\">\n       <div class=\"uk-card-media-top\">\n        <a href=\"/game\"> <img src=\"assets/img/point.jpg\" alt=\"image of game\"></a>\n       </div>\n       <div class=\"uk-card-body\">\n         <div class=\"uk-flex uk-flex-center buttonselect\"><a class=\"uk-button uk-button-primary\" routerLink=\"/game\" style=\"border-radius:10px;\">Play</a></div>\n       </div>\n     </div>\n   </div>\n </div>\n"

/***/ }),

/***/ "./src/app/middlepart/middlepart.component.scss":
/*!******************************************************!*\
  !*** ./src/app/middlepart/middlepart.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".backcard1 {\n  background-size: cover;\n  margin-left: 13%;\n  position: absolute;\n  top: 20%;\n  width: 80vw;\n  height: 60vh;\n  margin-top: 20px; }\n\n.uk-grid {\n  padding-top: 50px; }\n\n.buttonselect a {\n  background-color: green; }\n\n.buttonselect a:hover {\n  background-color: #ff0; }\n\n.card1mid {\n  background-color: #FFF1D6; }\n\n.card1mid:hover {\n  cursor: pointer;\n  box-shadow: 0 0 30px #ff0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWlkZGxlcGFydC9DOlxcVXNlcnNcXGJ1amppLkRFU0tUT1AtSE43VUI1VFxcTXVzaWNcXGFhYXJ1bW15LWZpbmFsOWp1bFxcYWFhcnVtbXktZmluYWw5anVsXFxhYWFydW1teS1mcm9udGxpdmUvc3JjXFxhcHBcXG1pZGRsZXBhcnRcXG1pZGRsZXBhcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsZ0JBQWU7RUFFZixrQkFBaUI7RUFDakIsUUFBTztFQUNQLFdBQVU7RUFDVixZQUFXO0VBQ1gsZ0JBQWdCLEVBQUE7O0FBSWxCO0VBQ0UsaUJBQWlCLEVBQUE7O0FBSW5CO0VBRUUsdUJBQXVCLEVBQUE7O0FBSXpCO0VBRUUsc0JBQ0YsRUFBQTs7QUFDQTtFQUNFLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLGVBQWU7RUFDZix5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21pZGRsZXBhcnQvbWlkZGxlcGFydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrY2FyZDF7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIG1hcmdpbi1sZWZ0OjEzJTtcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgbGltZTtcbiAgcG9zaXRpb246YWJzb2x1dGU7XG4gIHRvcDoyMCU7XG4gIHdpZHRoOjgwdnc7XG4gIGhlaWdodDo2MHZoO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICAvLyBwYWRkaW5nLXRvcDogNTBweFxuXG59XG4udWstZ3JpZHtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG59XG5cblxuLmJ1dHRvbnNlbGVjdCBhe1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyNTIsIDIyMywgMjIzKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIFxufVxuIFxuLmJ1dHRvbnNlbGVjdCBhOmhvdmVye1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOmdyZWVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwXG59XG4uY2FyZDFtaWR7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkYxRDY7XG59XG5cbi5jYXJkMW1pZDpob3ZlcntcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2hhZG93OiAwIDAgMzBweCAjZmYwO1xuXG5cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/middlepart/middlepart.component.ts":
/*!****************************************************!*\
  !*** ./src/app/middlepart/middlepart.component.ts ***!
  \****************************************************/
/*! exports provided: MiddlepartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiddlepartComponent", function() { return MiddlepartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MiddlepartComponent = /** @class */ (function () {
    function MiddlepartComponent() {
    }
    MiddlepartComponent.prototype.ngOnInit = function () {
    };
    MiddlepartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-middlepart',
            template: __webpack_require__(/*! ./middlepart.component.html */ "./src/app/middlepart/middlepart.component.html"),
            styles: [__webpack_require__(/*! ./middlepart.component.scss */ "./src/app/middlepart/middlepart.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MiddlepartComponent);
    return MiddlepartComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <div class=\"navbarcard\">\n      <nav class=\"uk-navbar-container uk-navbar navh\" style=\"background-color:#3B5902;\">\n        <div class=\"uk-navbar-left\">\n          <li><a routerLink=\"/home\" class=\"uk-navbar-item uk-logo navlogo\" style=\"margin-left:555px;\"><img src=\"assets/img/logo3.png\" uk-img></a></li>\n        </div>\n  \n        <div class=\"uk-navbar-right\">\n  \n          <ul class=\"uk-navbar-nav\" >\n              <img   class=\" uk-navbar-subtitle  uk-position-left  left-img\" src=\"user.profile.picture\">\n            <li class=\"profilenav\">\n              <div>\n                <div class=\"profile\" uk-toggle=\"target: #offcanvas-overlay\">\n  \n                <span class=\"headnav  uk-position-left uk-margin-left\" style=\"color:white;\"><b>Welcome</b></span>\n  \n                  <div class=\" uk-position-left uk-margin-left  headnav1\" style=\"color:white; top:40px;\"> <span><b>{{user.username|uppercase}}</b></span></div>\n                </div>\n              </div>\n            </li>\n        \n  \n            <li class=\"cashnav\">\n                \n              <div>\n              \n                <span class=\"headnav\" style=\"color:white;\">Cash</span>\n                <div class=\"uk-navbar-subtitle\" style=\"color:white;\">0</div>\n              </div>\n            </li>\n            <li class=\"addnav\">\n              <button class=\"uk-button uk-button-default\" href=\"#modal-sections\" uk-toggle><i class=\"fas fa-plus-circle\"></i><span class=\"headnav add\" style=\"color:white;\">ADD CASH</span></button>\n            </li>\n          </ul>\n        </div>\n      </nav>\n    </div>\n  \n    <div id=\"modal-sections\" uk-modal>\n      <div class=\"uk-modal-dialog ug  modaladd\">\n        <button class=\"uk-modal-close-default closebtn\" type=\"button\" uk-close></button>\n        <div class=\"uk-modal-header ug\">\n          <h2 class=\"uk-modal-title\">Cash Account</h2>\n        </div>\n        <div class=\"uk-modal-body\" uk-overflow-auto>\n            <ul uk-accordion>\n              <li>\n                <a class=\"uk-accordion-title\" href=\"#\">Balance</a>\n                <div class=\"uk-accordion-content\">\n                  <span class=\"uk-float-left\">Deposit</span>\n                  <span class=\"ulc\">Withdrawable</span>\n                  <span class=\"uk-float-right\">Total</span><br>\n                  <span class=\"uk-float-left\">&#x20b9;0</span>\n                  <span class=\"ulcs\">&#x20b9;0</span>\n                  <span class=\"uk-float-right\">&#x20b9;0</span>\n  \n                  \n                  <!-- <p><button class=\"uk-button uk-button-danger uk-border-rounded uk-align-center\">Add Cash</button></p> -->\n  \n                  <!-- This is a button toggling the modal -->\n  <button class=\"uk-button uk-button-default uk-margin-small-right\" type=\"button\"  uk-toggle=\"target: #modal-center\">Add Cash</button>\n  \n  <!-- <a class=\"uk-button uk-button-default\" href=\"#modal-center\" uk-toggle>Open</a> -->\n  \n  <div id=\"modal-center\" class=\"uk-flex-top\" uk-modal>\n      <div class=\"uk-modal-dialog uk-modal-body uk-margin-auto-vertical    addcash-pp\">\n  \n          <button class=\"uk-modal-close-default   ukcls\" type=\"button\" uk-close></button>\n  \n  \n  \n          <div class=\" adcash-box\">\n            <div class=\"ad-box\">\n                <!-- <button class=\"buton\">Back</button> -->\n            <h5>Add Cash</h5>\n            <!-- <button>Back</button> -->\n            </div>\n  \n  <hr>\n              <div class=\"uk-child-width-1-2@s\" uk-grid>\n                \n                  <div>\n                      <div class=\"uk-card uk-card-default  uk-card-large uk-card-body\">\n                          \n                           <h4><b>1. Select Your Amount to add</b></h4>\n                           <button class=\"uk-button uk-button-primary uk-bu3\">100</button>\n                           <button class=\"uk-button uk-button-primary uk-bu3\">200</button>\n                           <button class=\"uk-button uk-button-primary uk-bu3\">500</button>\n                           <button class=\"uk-button uk-button-primary uk-bu\">1000</button>\n                           <button class=\"uk-button uk-button-primary uk-bu\">2000</button>\n                           <button class=\"uk-button uk-button-primary uk-bu\">5000</button>\n  \n                           <h4><b>Amount to be added (Max ₹ 50,000)</b></h4>\n                           <!-- <button class=\"uk-button uk-button-default uk-button-small  conbut1\"></button> -->\n                           <div class=\"uk-margin\">\n                            <input class=\"uk-input uk-form-success uk-form-width-medium conbut1\" type=\"text\" placeholder=\" min-100rupees\">\n                        </div>\n                        \n  \n  \n  \n                      \n                           \n                        </div>\n                  </div>\n                  <div>\n                      <div class=\"uk-card uk-card-default uk-card-small uk-card-body\">\n                        <h4>2. Select your bonus</h4>\n                        <button class=\"uk-button uk-button-primary uk-bu1\">10%</button>\n                        <span style=\"margin-left: 50px\">min:200</span>\n                           <button class=\"uk-button uk-button-primary uk-bu1\">15%</button>\n                           <span style=\"margin-left: 50px\">min:500</span>\n                           <button class=\"uk-button uk-button-primary uk-bu1\">25%</button>\n                           <span style=\"margin-left: 50px\"  >min:2000</span>\n  \n  \n                        </div>\n                  </div>\n  \n                  <button class=\"uk-button uk-button-default uk-button-small  confbut\">Conform</button>\n                  <button class=\"uk-button uk-button-default uk-button-small  confbut3\">Cancel</button>\n                  \n              </div>\n           \n  \n  \n    \n        </div>\n    \n  \n  \n         \n  \n  \n  \n  \n  \n      </div>\n  </div>\n  \n  <!-- This is an anchor toggling the modal -->\n  <!-- <a href=\"#modal-example\" uk-toggle></a> -->\n  \n  <!-- This is the modal -->\n  <div id=\"modal-close-default\" uk-modal>\n      <div class=\"uk-modal-dialog uk-modal-body  addch\">\n          <button class=\"uk-modal-close-default   plycls\" type=\"button\" uk-close></button>\n          <!-- <h2 class=\"uk-modal-title\">Add Cash</h2> -->\n          <h2>Add Cash</h2>\n          <hr>\n        \n        <div class=\"box\">\n            <div class=\"borbx\">\n              <p><b>25</b></p>\n              <p>ENTRY FEE</p>\n            </div>\n            <div class=\"borbox1\">\n                <span> <b>open table:0/6</b> </span>\n    <button class=\"uk-button uk-button-default uk-button-small\"> Add Cash</button>\n    <p><span> <b>576 Players online</b> </span></p>\n    </div> \n            </div>\n            \n            <div class=\"box\">\n                <div class=\"borbx\">\n                    <p><b>50</b></p>\n                    <p>ENTRY FEE</p>\n                  </div>\n                  <div class=\"borbox1\">\n                      <span> <b>open table:0/6</b> </span>\n                      <button class=\"uk-button uk-button-default uk-button-small\"> Add Cash</button>\n                      <p><span> <b>576 Players online</b> </span></p>\n                      </div> \n              \n            </div>\n            <div class=\"box\">\n                <div class=\"borbx\">\n                    <p><b>100</b></p>\n                    <p>ENTRY FEE</p>\n                  </div>\n                  <div class=\"borbox1\">\n                      <span> <b>open table:0/6</b> </span>\n                      <button class=\"uk-button uk-button-primary uk-button-small\"> Add Cash</button>\n                      <p><span> <b>576 Players online</b> </span></p>\n                      </div> \n    \n    \n              </div>\n              \n              <div class=\"box\">\n                  <div class=\"borbx\">\n                      <p><b>250</b></p>\n                      <p>ENTRY FEE</p>\n                    </div>\n                    <div class=\"borbox1\">\n                        <span> <b>open table:0/6</b> </span>\n                        <button class=\"uk-button uk-button-default uk-button-small\"> Add Cash</button>\n                        <p><span> <b>576 Players online</b> </span></p>\n                        </div> \n                \n              </div>\n  \n              <div class=\"box\">\n                  <div class=\"borbx\">\n                      <p><b>500</b></p>\n                      <p>ENTRY FEE</p>\n                    </div>\n                    <div class=\"borbox1\">\n                        <span> <b>open table:0/6</b> </span>\n                        <button class=\"uk-button uk-button-default uk-button-small\"> Add Cash</button>\n                        <p><span> <b>576 Players online</b> </span></p>\n                        </div> \n                \n                </div>\n                <div class=\"box\">\n                    <div class=\"borbx\">\n                        <p><b>1000</b></p>\n                        <p>ENTRY FEE</p>\n                      </div>\n                      <div class=\"borbox1\">\n                          <span> <b>open table:0/6</b> </span>\n                          <button class=\"uk-button uk-button-default uk-button-small\"> Add Cash</button>\n                          <p><span> <b>576 Players online</b> </span></p>\n                          </div> \n                \n                  </div>\n                  <div class=\"box bx\">\n                      <div class=\"borbx\">\n                          <p>2000</p>\n                          <p>ENTRY FEE</p>\n                        </div>\n                        <div class=\"borbox1\">\n                            <span> <b>open table:0/6</b> </span>\n                            <button class=\"uk-button uk-button-default uk-button-small\"> Add Cash</button>\n                            <p><span> <b>576 Players online</b> </span></p>\n                            </div> \n                \n                    </div>\n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n      </div>\n  </div>\n                  <!-- <button class=\"uk-button uk-button-default\" href=\"#modal-sections\" uk-toggle><i class=\"fas fa-plus-circle\"></i><span class=\"headnav add\" style=\"color:white;\">ADD CASH</span></button> -->\n                <p>  <span>Your Money is always safe with us. Refer your account statement anytime to track your transactions.</span></p>\n                </div>\n              </li>\n              <li>\n                <a class=\"uk-accordion-title\" href=\"#\">Account Statement</a>\n                <div class=\"uk-accordion-content\">\n                  <div class=\"uk-overflow-auto uk-height-small\">\n                    <table class=\"uk-table\">\n                      <thead>\n                        <tr>\n                          <th>Date Description</th>\n                          <th>Amount</th>\n                          <th>Balance</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr>\n                          <td>Table Data</td>\n                          <td>Table Data</td>\n                          <td>Table Data</td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </div>\n                </div>\n              </li>\n              <li>\n                <a class=\"uk-accordion-title\" href=\"#\">Withdrawals</a>\n                <div class=\"uk-accordion-content\">\n                  <div class=\"uk-overflow-auto uk-height-small\">\n                    <table class=\"uk-table uk-text-nowrap\">\n                      <thead>\n                        <tr>\n                          <th>Id Date</th>\n                          <th>Amount Details</th>\n                          <th>Amount Status</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr>\n                          <td>Table Data</td>\n                          <td>Table Data</td>\n                          <td>Table Data</td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </div>\n                </div>\n              </li>\n              <li>\n                <a class=\"uk-accordion-title\" href=\"#\">TDS</a>\n                <div class=\"uk-accordion-content\">\n                  <div class=\"uk-overflow-auto uk-height-small\">\n                    <table class=\"uk-table\">\n                      <thead>\n                        <tr>\n                          <th>Date</th>\n                          <th>Description</th>\n                          <th>TDS Amount</th>\n                          <th>Status</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr>\n                          <td>Table Data</td>\n                          <td>Table Data</td>\n                          <td>Table Data</td>\n                          <td>Table Data</td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </div>\n                </div>\n              </li>\n              <li>\n                <a class=\"uk-accordion-title\" href=\"#\">Contact Us</a>\n                <div class=\"uk-accordion-content\">\n                  <p>For any concern, please connect to us at 18001202188 between 11am and 10pm.</p>\n                  <p>write to us at support@rummyculture.com</p>\n                </div>\n              </li>\n            </ul>\n          </div>\n      </div>\n    </div>\n  \n    <div id=\"offcanvas-overlay\" uk-offcanvas=\"overlay: true\">\n      <div class=\"uk-offcanvas-bar\">\n  \n        <button class=\"uk-offcanvas-close\" type=\"button\" uk-close></button>\n        <!-- <div class=\"uk-modal \"> -->\n        <h3 class=\"modalprof\">Profile</h3>\n        <hr>\n        <!-- </div> -->\n        <ul uk-accordion>\n          <li>\n           <a class=\"uk-accordion-title \"  href=\"#\">Personal Details     </a>\n           <a class=\"edit \" href=\"#offcanvas-usages\" uk-icon=\"icon:  pencil\" uk-toggle></a>\n            <div id=\"offcanvas-usages\" uk-offcanvas>\n                <div class=\"uk-offcanvas-bar navp\">\n  \n                  <button class=\"uk-offcanvas-close\" type=\"button\" uk-close></button>\n           <h3>Edit datials</h3>\n           <form (submit)=\"onEditSubmit()\"  #myform=\"ngForm\"  >\n               <div class=\"uk-margin\">\n                   <input class=\"uk-input uk-form-width-large\" type=\"text\"    [(ngModel)]=\"Fullname\"name=\"Fullname\" minlength=\"5\" placeholder=\"FULL NAME\" required=\"required\"     maxlength=\"20\" pattern=\"^[a-zA-Z ]*$\" #control1=\"ngModel\">\n                   <span class=\"error\"*ngIf=\"control1.touched && control1.invalid && control1.errors.required\">Full Name\n                   can't be blank</span>\n                   <span class=\"error\" *ngIf=\"control1.touched && control1.invalid && control1.errors.minlength\">Min: 4\n                   characters</span>\n                   <span class=\"error\" *ngIf=\"control1.touched && control1.invalid && control1.errors.pattern\">Alphabets only\n                   allowed</span>\n                   <br>\n                   \n               </div>\n               <div class=\"uk-margin\">\n                   <input class=\"uk-input uk-form-width-large\" type=\"text\" [(ngModel)]=\"Email\" name=\"Email\" placeholder=\"EMAIL\" minlength=\"5\" maxlength=\"20\"\n                    #control3=\"ngModel\">\n                   <span class=\"error\"*ngIf=\"control3.touched && control3.invalid && control3.errors.required\">Email can't\n                   be blank</span>\n                   <span class=\"error\"*ngIf=\"control3.touched && control3.invalid && control3.errors.pattern\">Email is not\n                   valid</span>\n                   <br>\n               </div>\n  \n                <div class=\"uk-margin\">\n                   <input class=\"uk-input uk-form-width-large\" type=\"text\"  [(ngModel)]=\"Mobilenumber\" name=\"Mobilenumber\"placeholder=\"MOBILENUMBER\" pattern=\"^[0-9]*$\"\n                   #control4=\"ngModel\">\n                   <span class=\"error\"  *ngIf=\"control4.touched && control4.invalid && control4.errors.required\">Mobile Number\n                   can't be blank</span>\n                   <span class=\"error\" *ngIf=\"control4.touched && control4.invalid && control4.errors.pattern\">Alphabets\n                   not allowed</span>\n                   <br>\n               </div>\n            \n           \n  \n  \n  \n  \n  \n  \n               \n               <p class=\"uk-margin\">\n                   <button class=\"uk-button  uk-button-default\" type=\"submit\">Save</button>\n  \n  \n               </p>\n               \n               \n           </form>\n  \n          \n  \n         </div>\n       </div>\n     <hr class=\"divline\">\n     <div class=\"uk-accordion-content\">\n        <p>Display Name:-{{user.username|uppercase}}</p>\n        <hr>\n        <p>Fullname:-{{Edit.Fullname| uppercase}}</p>\n        <hr>\n        <p>Email:{{Edit.Email| uppercase}}   </p>\n        <hr>\n       <p>Mobilenumber:-{{user.contact | uppercase}}</p>\n       <hr>\n      \n  \n     </div>\n   </li>\n   <li>\n  \n  \n     <a class=\"uk-accordion-title\" href=\"#\">KYC Documents </a>\n    \n  \n  \n     <a class=\"edit\"href=\"#offcanvas-usage\"  uk-icon=\"icon:  pencil\"uk-toggle></a>\n  \n  <div id=\"offcanvas-usage\" uk-offcanvas>\n  <div class=\"uk-offcanvas-bar\">\n  \n   <button class=\"uk-offcanvas-close\" type=\"button\" uk-close></button>\n  \n   <h3>Edit  Personal Details</h3>\n  <form (submit)=\"onEditSubmit()\"  action=\"/addnew\">\n\n\n\n       <div class=\"uk-margin\">\n     <input class=\"uk-input uk-form-width-large\"  [(ngModel)]=\"Pan\"type=\"text\" name=\"Pan\" required=\"required\"     minlength=\"5\" maxlength=\"10\"  placeholder=\"Pan Number\" pattern=\"^[0-9]*$\"\n     #control5=\"ngModel\">\n     <span class=\"error\"  *ngIf=\"control5.touched && control5.invalid && control5.errors.required\">Pan Number\n     can't be blank</span>\n     <span class=\"error\" *ngIf=\"control5.touched && control4.invalid && control5.errors.pattern\">Alphabets\n     not allowed</span>\n     <br>\n  </div>\n  \n  <div class=\"uk-margin\">\n     <input class=\"uk-input uk-form-width-large\"  [(ngModel)]=\"AdharNumber\" type=\"text\"  name=\"AdharNumber\"placeholder=\"Adhar Number\" minlength=\"8\" maxlength=\"20\" pattern=\"^[0-9]*$\"\n     #control6=\"ngModel\">\n     <span class=\"error\"  *ngIf=\"control6.touched && control6.invalid && control6.errors.required\">Adhar Number\n     can't be blank</span>\n     <span class=\"error\" *ngIf=\"control6.touched && control6.invalid && control6.errors.pattern\">Alphabets\n     not allowed</span>\n     <br>\n  </div>\n  \n  <div class=\"uk-margin\">\n     <input class=\"uk-input uk-form-width-large\" type=\"text\" [(ngModel)]=\"BankAccount\" name=\"BankAccount\"   minlength=\"8\" maxlength=\"20\"    placeholder=\"Bank Account\"  pattern=\"^[0-9]*$\"\n     #control7=\"ngModel\">\n     <span class=\"error\"  *ngIf=\"control7.touched && control4.invalid && control7.errors.required\"> BankAccount\n     can't be blank</span>\n     <span class=\"error\" *ngIf=\"control7.touched && control7.invalid && control7.errors.pattern\">Alphabets\n     not allowed</span>\n     <br>\n  </div>\n  \n     <button class=\"uk-button uk-button-default\" type=\"submit\">Save</button>\n  \n  \n  </form> \n  \n  \n  </div>\n  </div>\n  \n  \n     <hr class=\"divline\">\n     \n  \n  \n     <div class=\"uk-accordion-content\">\n       <p>AdharNumber :<span style=\"color:white\"><b>{{Edit.AdharNumber}}</b></span></p>\n       <hr>\n       <p>PAN:        <span style=\"color:white\"><b>{{Edit.Pan}}</b></span></p>\n       <hr>\n       <p>BankAccount: <span style=\"color:white\"><b>{{Edit.BankAccount}}</b></span></p>\n              <hr>\n              <p>NOTE: Do NOT send any documents over email. Upload them here only.</p>\n              <p>Term & conditions</p>\n            </div>\n          </li>\n          <!-- <li>\n            <a class=\"uk-accordion-title\" href=\"#\">Security</a>\n            <div class=\"uk-accordion-content\">\n              <p>Great! You are currently logged in.</p>\n              <!-- <p><a class=\"uk-button uk-button-danger uk-border-rounded uk-align-center\" (click)=\"onLogoutClick()\" href=\"#\">Log Out</a></p> -->\n            <!-- </div>\n          </li> --> \n          <li>\n            <a class=\"uk-accordion-title\" href=\"#\">Contact us</a>\n            <hr class=\"divline\"> \n           \n            <div class=\"uk-accordion-content\">\n              <p>For any concern, please connect to us at 18001202188 between 11am and 10pm.</p>\n              <p>write to us at support@rummyculture.com</p>\n            </div>\n          </li>\n         <li>\n            <p><a class=\"uk-button uk-button-danger uk-border-rounded uk-align-center\" (click)=\"onLogoutClick()\" href=\"#\">Log Out</a></p>\n  \n         </li>\n  \n  \n        </ul>\n      </div>\n    </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/nav/nav.component.scss":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input.ng-invalid.ng-touched {\n  border: 2px solid red; }\n\ninput.ng-valid.ng-touched {\n  border: 2px solid green; }\n\n.error {\n  color: red; }\n\n.edit {\n  margin-left: 180px;\n  margin-bottom: 20px; }\n\n.cashnav {\n  padding-right: 40px; }\n\n.profilenav {\n  padding-right: 40px; }\n\n.uk-navbar-nav {\n  list-style: none; }\n\n.uk-position-left {\n  top: 20px;\n  bottom: 0;\n  left: 30px; }\n\n.uk-margin-left {\n  padding-left: 60px; }\n\n.none {\n  list-style: none; }\n\n.left-img {\n  border-radius: 50px;\n  height: 60px;\n  width: 60px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center right;\n     object-position: center right; }\n\n.addnav a {\n  padding-right: 30px; }\n\n.add {\n  padding-left: 10px; }\n\n.headnav {\n  font-size: 15px; }\n\n.headnav1 {\n  font-size: 25px;\n  padding-top: 5px; }\n\n.uk-margin a {\n  text-align: center; }\n\n.navlogo {\n  margin-top: -35px;\n  width: 15vw;\n  height: 15vh; }\n\n.profile:hover {\n  cursor: pointer; }\n\n.navh {\n  height: 13vh; }\n\n.ulc {\n  padding-left: 30%; }\n\n.ulcs {\n  padding-bottom: 50px;\n  padding-left: 40%; }\n\n.ug {\n  background-color: #2ecc72; }\n\n.modaladd h2 {\n  color: white;\n  padding-left: 150px;\n  font-family: -webkit-pictograph; }\n\n.modaladd a {\n  color: white; }\n\n.ug th {\n  color: black; }\n\n.closebtn {\n  color: white;\n  color: red;\n  padding-top: 20px;\n  padding-right: 40px; }\n\n.modalprof {\n  padding-left: 20px;\n  font-family: -webkit-body; }\n\n.uk-divider-small {\n  padding-left: 20px; }\n\n.divline {\n  margin-left: 30px;\n  margin-right: 30px; }\n\n.uk-margin-small-right {\n  margin-top: 80px;\n  margin-right: 30px; }\n\n.addch {\n  height: auto;\n  width: 65vw;\n  background-color: #043415e8;\n  border-radius: 47px; }\n\n.addch h2 {\n  color: white;\n  margin-left: 45%;\n  font-family: -webkit-body; }\n\n.plycls {\n  color: brown;\n  position: absolute;\n  z-index: 1010;\n  top: 25px;\n  right: 44px;\n  padding: 14px; }\n\n.uk-card-large {\n  margin-top: 0;\n  margin-left: 20px;\n  background-color: #9BECAA;\n  height: 386px;\n  border-radius: 27px;\n  width: 488px; }\n\n.uk-card-large h4 {\n  color: white; }\n\n.uk-card-small h4 {\n  color: white; }\n\n.uk-bu {\n  border-radius: 10px;\n  margin-top: 10px;\n  margin-left: 10px; }\n\n.uk-bu1 {\n  margin-top: 7px;\n  border-radius: 0px;\n  margin-left: 42px;\n  height: 57px;\n  width: 121px; }\n\n.uk-bu3 {\n  border-radius: 10px;\n  margin-top: 10px;\n  margin-left: 15px; }\n\n.ad-box h5 {\n  margin-left: 297px;\n  font-family: webkit-body;\n  margin-top: 7px;\n  font-size: 2rem;\n  color: red; }\n\n.ukcls {\n  position: absolute;\n  z-index: 1010;\n  top: 10px;\n  right: 41px;\n  padding: 22px;\n  color: red; }\n\n.uk-card-small {\n  margin-top: 0;\n  margin-left: 125px;\n  height: 376px;\n  width: 220px;\n  background-color: #9BECAA;\n  border-radius: 27px; }\n\n.adcash-box1 {\n  border: 1px solid;\n  background-color: #22342A;\n  height: 300px;\n  width: 400px; }\n\n.adcash-box2 {\n  border: 1px solid;\n  background-color: #22342A;\n  height: 200px;\n  width: 300px;\n  float: left; }\n\n.uk-margin-auto-vertical {\n  height: 84vh;\n  width: 58vw;\n  border-radius: 50px; }\n\n.uk-cls {\n  margin-left: 100px; }\n\n.buton {\n  margin-left: 500px; }\n\n.confbut {\n  border: 2px solid;\n  border-radius: 50px;\n  height: 40px;\n  width: 30%;\n  margin-left: 200px;\n  font-family: webkit-body; }\n\n.confbut3 {\n  border: 2px solid;\n  border-radius: 50px;\n  height: 40px;\n  width: 20%;\n  margin-left: 150px;\n  font-family: webkit-body; }\n\n.confbut3:hover {\n  background-color: #2ecc72; }\n\n.confbut:hover {\n  background-color: #2ecc72; }\n\n.conbut1 {\n  height: 40px;\n  width: 200px;\n  margin-left: 91px;\n  border-radius: 10px;\n  background-color: white; }\n\n.borbox1 {\n  margin-top: 20px; }\n\n.borbx {\n  color: white;\n  border: 1px solid brown;\n  height: 70px;\n  margin-top: 10px;\n  width: 130px;\n  margin-left: 20px;\n  background-color: brown;\n  border-radius: 5px; }\n\n.border-rounded {\n  border-radius: 5px; }\n\n.borbx p {\n  padding-left: 30x; }\n\n.box {\n  -webkit-transition: box-shadow .3s;\n  transition: box-shadow .3s;\n  width: 169px;\n  height: 220px;\n  margin: 20px;\n  border-radius: 10px;\n  border: 1px solid #ccc;\n  background: #fff;\n  float: left;\n  text-align: center; }\n\n.uk-button-small {\n  margin-top: 10px; }\n\n.box:hover {\n  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L0M6XFxVc2Vyc1xcYnVqamkuREVTS1RPUC1ITjdVQjVUXFxNdXNpY1xcYWFhcnVtbXktZmluYWw5anVsXFxhYWFydW1teS1maW5hbDlqdWxcXGFhYXJ1bW15LWZyb250bGl2ZS9zcmNcXGFwcFxcbmF2XFxuYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFQSxxQkFBcUIsRUFBQTs7QUFFckI7RUFFQSx1QkFBdUIsRUFBQTs7QUFFdkI7RUFFQSxVQUFVLEVBQUE7O0FBSVY7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7O0FBSXJCO0VBQ0UsbUJBQW1CLEVBQUE7O0FBRXJCO0VBQ0UsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBT2xCO0VBQ0EsU0FBUztFQUNULFNBQVM7RUFDVCxVQUFVLEVBQUE7O0FBRVY7RUFDRSxrQkFDRixFQUFBOztBQUNBO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBSWxCO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixXQUFXO0VBQ1gsb0JBQWlCO0tBQWpCLGlCQUFpQjtFQUNqQixnQ0FBNkI7S0FBN0IsNkJBQTZCLEVBQUE7O0FBTS9CO0VBQ0UsbUJBQW1CLEVBQUE7O0FBRXJCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsZUFBYyxFQUFBOztBQUVoQjtFQUNHLGVBQWU7RUFDZixnQkFDSCxFQUFBOztBQUVBO0VBQ0csa0JBQWlCLEVBQUE7O0FBRXBCO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVU7RUFDVixZQUFXLEVBQUE7O0FBRWI7RUFDRSxlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsWUFBVyxFQUFBOztBQUViO0VBQ0UsaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0Usb0JBQW9CO0VBQ3BCLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLHlCQUF5QixFQUFBOztBQUUzQjtFQUNFLFlBQVc7RUFDWCxtQkFBbUI7RUFDbkIsK0JBQStCLEVBQUE7O0FBR2pDO0VBQ0UsWUFBVyxFQUFBOztBQUViO0VBQ0UsWUFBWSxFQUFBOztBQUVkO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsbUJBQW1CLEVBQUE7O0FBSXJCO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF3QixFQUFBOztBQUcxQjtFQUNFLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLGlCQUFpQjtFQUNqQixrQkFDRixFQUFBOztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUluQjtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsMkJBQTJCO0VBQzNCLG1CQUFtQixFQUFBOztBQUtyQjtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIseUJBQXlCLEVBQUE7O0FBRTNCO0VBQ0UsWUFBWTtFQUNWLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsU0FBUztFQUNULFdBQVc7RUFDWCxhQUFhLEVBQUE7O0FBb0JqQjtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWSxFQUFBOztBQUdkO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UsWUFBWSxFQUFBOztBQUlkO0VBQ0UsbUJBQW1CO0VBRW5CLGdCQUFnQjtFQUNoQixpQkFFRixFQUFBOztBQUNBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFlBQVksRUFBQTs7QUFHZDtFQUNFLG1CQUFtQjtFQUVuQixnQkFBZ0I7RUFDaEIsaUJBRUYsRUFBQTs7QUFDQTtFQUNFLGtCQUFpQjtFQUNmLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsZUFBZTtFQUNmLFVBQVUsRUFBQTs7QUFHZDtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsU0FBUztFQUNULFdBQVc7RUFDWCxhQUFhO0VBQ2IsVUFBVSxFQUFBOztBQUVaO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUdsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixtQkFBbUIsRUFBQTs7QUFJckI7RUFDRSxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGFBQVk7RUFDWixZQUNGLEVBQUE7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGFBQVk7RUFDWixZQUFZO0VBQ1osV0FBVSxFQUFBOztBQU9aO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxrQkFBa0IsRUFBQTs7QUFZcEI7RUFHQyxpQkFBaUI7RUFDaEIsbUJBQW1CO0VBRW5CLFlBQVk7RUFDVixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLHdCQUF3QixFQUFBOztBQUc1QjtFQUdFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsd0JBQXdCLEVBQUE7O0FBRzFCO0VBQ0EseUJBQ0EsRUFBQTs7QUFDQTtFQUNFLHlCQUF5QixFQUFBOztBQUUzQjtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ2QsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQix1QkFBdUIsRUFBQTs7QUFHdkI7RUFDRSxnQkFDRixFQUFBOztBQUNBO0VBQ0UsWUFBWTtFQUVaLHVCQUF1QjtFQUN2QixZQUFZO0VBRVosZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixpQkFBaUI7RUFHakIsdUJBQXVCO0VBR3ZCLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGlCQUFpQixFQUFBOztBQUluQjtFQUNFLGtDQUEwQjtFQUExQiwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLDBDQUFzQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkXG57XG5ib3JkZXI6IDJweCBzb2xpZCByZWQ7XG59XG5pbnB1dC5uZy12YWxpZC5uZy10b3VjaGVkXG57XG5ib3JkZXI6IDJweCBzb2xpZCBncmVlbjtcbn1cbi5lcnJvclxue1xuY29sb3I6IHJlZDtcbn1cblxuXG4uZWRpdHtcbiAgbWFyZ2luLWxlZnQ6IDE4MHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5cbi5jYXNobmF2e1xuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xufVxuLnByb2ZpbGVuYXZ7XG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG59XG5cbi51ay1uYXZiYXItbmF2e1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLy8gLnVrLXBvc2l0aW9uLXJpZ2h0e1xuLy8gICAvLyB0b3A6NXB4O1xuLy8gICBwYWRkaW5nLXJpZ2h0OiAzNTBweDtcbi8vICAgIHRvcDoyMHB4O1xuLy8gfVxuLnVrLXBvc2l0aW9uLWxlZnR7XG50b3A6IDIwcHg7XG5ib3R0b206IDA7XG5sZWZ0OiAzMHB4O1xufVxuLnVrLW1hcmdpbi1sZWZ0e1xuICBwYWRkaW5nLWxlZnQ6IDYwcHhcbn1cbi5ub25le1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuICBcblxuLmxlZnQtaW1ne1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBoZWlnaHQ6IDYwcHg7O1xuICB3aWR0aDogNjBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG9iamVjdC1wb3NpdGlvbjogY2VudGVyIHJpZ2h0O1xufVxuLy8gZWxlbWVudC5zdHlsZSB7XG4vLyAgIGNvbG9yOiB3aGl0ZTsgXG4vLyAgIC8vIHBhZGRpbmctdG9wOiA0MHB4O1xuLy8gfVxuLmFkZG5hdiBhe1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xufVxuLmFkZHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLmhlYWRuYXZ7XG4gIGZvbnQtc2l6ZToxNXB4O1xufVxuLmhlYWRuYXYxe1xuICAgZm9udC1zaXplOiAyNXB4O1xuICAgcGFkZGluZy10b3A6IDVweFxufVxuXG4udWstbWFyZ2luIGF7XG4gICB0ZXh0LWFsaWduOmNlbnRlcjtcbn1cbi5uYXZsb2dve1xuICBtYXJnaW4tdG9wOiAtMzVweDtcbiAgd2lkdGg6MTV2dztcbiAgaGVpZ2h0OjE1dmg7XG59XG4ucHJvZmlsZTpob3ZlcntcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm5hdmh7XG4gIGhlaWdodDoxM3ZoO1xufVxuLnVsY3tcbiAgcGFkZGluZy1sZWZ0OiAzMCU7XG59XG4udWxjc3tcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XG4gIHBhZGRpbmctbGVmdDogNDAlO1xufVxuLnVne1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmVjYzcyO1xufVxuLm1vZGFsYWRkIGgye1xuICBjb2xvcjp3aGl0ZTtcbiAgcGFkZGluZy1sZWZ0OiAxNTBweDtcbiAgZm9udC1mYW1pbHk6IC13ZWJraXQtcGljdG9ncmFwaDtcblxufVxuLm1vZGFsYWRkIGF7XG4gIGNvbG9yOndoaXRlO1xufVxuLnVnIHRoe1xuICBjb2xvcjogYmxhY2s7XG59XG4uY2xvc2VidG57XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IHJlZDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG5cbn1cblxuLm1vZGFscHJvZntcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBmb250LWZhbWlseTotd2Via2l0LWJvZHk7XG59XG5cbi51ay1kaXZpZGVyLXNtYWxse1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG4uZGl2bGluZXtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIG1hcmdpbi1yaWdodDogMzBweFxufVxuLnVrLW1hcmdpbi1zbWFsbC1yaWdodHtcbiAgbWFyZ2luLXRvcDogODBweDtcbiBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gXG4gIFxufVxuLmFkZGNoe1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiA2NXZ3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQzNDE1ZTg7XG4gIGJvcmRlci1yYWRpdXM6IDQ3cHg7XG4gIFxufVxuXG5cbi5hZGRjaCBoMntcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tbGVmdDogNDUlO1xuICBmb250LWZhbWlseTogLXdlYmtpdC1ib2R5O1xufVxuLnBseWNsc3tcbiAgY29sb3I6IGJyb3duO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxMDEwO1xuICAgIHRvcDogMjVweDtcbiAgICByaWdodDogNDRweDtcbiAgICBwYWRkaW5nOiAxNHB4O1xuXG59XG5cbi8vIC5hZGNhc2gtYm94IHtcbi8vICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAuM3M7XG4vLyAgIC8vIHdpZHRoOiA4NSU7XG4vLyAgIHdpZHRoOiA5NiU7XG4vLyAgIGhlaWdodDogNDg4cHg7XG4vLyAgIG1hcmdpbjogNTBweDtcbi8vICAgYm9yZGVyLXJhZGl1czo1MHB4O1xuLy8gICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuLy8gICBiYWNrZ3JvdW5kOiAjZmZmO1xuLy8gICBmbG9hdDogbGVmdDtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogIzBBNTQxQSBcbiAgXG4vLyB9XG5cblxuXG4udWstY2FyZC1sYXJnZXtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5QkVDQUE7XG4gIGhlaWdodDogMzg2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDI3cHg7XG4gIHdpZHRoOiA0ODhweDtcblxufVxuLnVrLWNhcmQtbGFyZ2UgaDR7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnVrLWNhcmQtc21hbGwgaDR7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuXG4udWstYnV7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIC8vIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHhcblxufVxuLnVrLWJ1MXtcbiAgbWFyZ2luLXRvcDogN3B4O1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiA0MnB4O1xuICBoZWlnaHQ6IDU3cHg7XG4gIHdpZHRoOiAxMjFweDtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogI0I2QzEwOTsgIFxufVxuLnVrLWJ1M3tcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgLy8gY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMTVweFxuXG59XG4uYWQtYm94IGg1e1xuICBtYXJnaW4tbGVmdDoyOTdweDtcbiAgICBmb250LWZhbWlseTogd2Via2l0LWJvZHk7XG4gICAgbWFyZ2luLXRvcDogN3B4O1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBjb2xvcjogcmVkO1xufVxuXG4udWtjbHN7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTAxMDtcbiAgdG9wOiAxMHB4O1xuICByaWdodDogNDFweDtcbiAgcGFkZGluZzogMjJweDtcbiAgY29sb3I6IHJlZDtcbn1cbi51ay1jYXJkLXNtYWxse1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tbGVmdDogMTI1cHg7XG5cblxuICBoZWlnaHQ6IDM3NnB4O1xuICB3aWR0aDogMjIwcHg7IFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOUJFQ0FBOyAgXG4gIGJvcmRlci1yYWRpdXM6IDI3cHg7XG5cbn0gXG5cbi5hZGNhc2gtYm94MXtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjM0MkE7XG4gIGhlaWdodDozMDBweDtcbiAgd2lkdGg6IDQwMHB4XG59XG5cbi5hZGNhc2gtYm94MntcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjM0MkE7XG4gIGhlaWdodDoyMDBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBmbG9hdDpsZWZ0O1xuICBcbn1cbi8vIC5hZGNhc2gtYm94OmhvdmVyIHsgIFxuLy8gICBib3gtc2hhZG93OiAwIDAgMTFweCByZ2JhKDMzLDMzLDMzLC4yKTsgXG4vLyB9XG5cbi51ay1tYXJnaW4tYXV0by12ZXJ0aWNhbCB7XG4gIGhlaWdodDogODR2aDtcbiAgd2lkdGg6IDU4dnc7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLnVrLWNsc3sgXG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcblxufVxuLmJ1dG9ue1xuICBtYXJnaW4tbGVmdDogNTAwcHg7XG59XG4vLyAuYWQtYm94e1xuLy8gICBib3JkZXI6IDFweCBzb2xpZDtcbi8vICAgaGVpZ2h0Ojk0cHg7XG4vLyAgIHdpZHRoOiAxMDYlO1xuLy8gICBib3JkZXItcmFkaXVzOiA0M3B4IDUycHggMCAwO1xuLy8gICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiA7XG4vLyAgIGNvbG9yOiB3aGl0ZTtcbi8vICAgbWFyZ2luLXRvcDogLTMwcHg7XG4vLyAgIG1hcmdpbi1sZWZ0OiAtMjZweDtcbi8vIH1cbi5jb25mYnV0e1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjQTVCMTEwICA7XG4gIC8vIGNvbG9yOiB3aGl0ZTtcbiBib3JkZXI6IDJweCBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgLy8gYm9yZGVyLWJsb2NrLWNvbG9yOiBibGFjaztcbiAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiAzMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xuICAgIGZvbnQtZmFtaWx5OiB3ZWJraXQtYm9keTtcblxufVxuLmNvbmZidXQze1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjQTVCMTEwICA7XG4gIC8vIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAycHggc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDIwJTtcbiAgbWFyZ2luLWxlZnQ6IDE1MHB4O1xuICBmb250LWZhbWlseTogd2Via2l0LWJvZHk7XG5cbn1cbi5jb25mYnV0Mzpob3ZlcntcbmJhY2tncm91bmQtY29sb3I6ICMyZWNjNzJcbn1cbi5jb25mYnV0OmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmVjYzcyO1xufVxuLmNvbmJ1dDF7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDIwMHB4O1xubWFyZ2luLWxlZnQ6IDkxcHg7XG5ib3JkZXItcmFkaXVzOiAxMHB4O1xuYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4vLyBjb2xvcjogcmVkO1xufVxuLmJvcmJveDF7XG4gIG1hcmdpbi10b3A6IDIwcHhcbn1cbi5ib3JieHtcbiAgY29sb3I6IHdoaXRlO1xuICAvLyBmb250LXNpemU6IDJyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJyb3duO1xuICBoZWlnaHQ6IDcwcHg7XG5cbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgd2lkdGg6IDEzMHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgLy8gbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBicm93bjtcbiAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5ib3JkZXItcm91bmRlZCB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmJvcmJ4IHB7XG4gIHBhZGRpbmctbGVmdDogMzB4O1xuXG59XG5cbi5ib3gge1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IC4zcztcbiAgd2lkdGg6IDE2OXB4O1xuICBoZWlnaHQ6IDIyMHB4O1xuICBtYXJnaW46IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6MTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgXG59XG4udWstYnV0dG9uLXNtYWxse1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmJveDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAxMXB4IHJnYmEoMzMsMzMsMzMsLjIpOyBcbn1cbi51ay1idXR0b24tc21hbGx7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICM3Mjg2MEQ7XG4gIC8vIGNvbG9yOiB3aGl0ZTtcblxuXG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var NavComponent = /** @class */ (function () {
    function NavComponent(validateService, authService, router, flashMessage) {
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    NavComponent.prototype.onEditSubmit = function () {
        var _this = this;
        this.Edit = {
            Fullname: this.Fullname,
            Email: this.Email,
            // Mobilenumber: this.Mobilenumber,
            //  username: this.username,
            AdharNumber: this.AdharNumber,
            Pan: this.Pan,
            BankAccount: this.BankAccount,
        };
        var user1 = JSON.parse(localStorage.getItem('user'));
        console.log('user', user1);
        // update details user
        this.authService.EditUser(this.Edit, user1.id).subscribe(function (data) {
            if (data.success) {
                // tslint:disable-next-line:max-line-length
                _this.flashMessage.show(UIkit.notification({ message: 'You are now registered and can now login', status: 'success', pos: 'top-right', timeout: 4000 }));
            }
            else {
                _this.flashMessage.show(UIkit.notification({ message: 'Something went wrong', status: 'danger', pos: 'top-right', timeout: 4000 }));
                _this.router.navigate(['/']);
            }
        });
    };
    NavComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show(UIkit.notification({ message: 'You are now logged out', status: 'success', pos: 'top-right', timeout: 3000 }));
        this.router.navigate(['login']);
        return false;
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/nav/nav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_validate_service__WEBPACK_IMPORTED_MODULE_3__["ValidateService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/otp/otp.component.html":
/*!****************************************!*\
  !*** ./src/app/otp/otp.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"forgotpass\">\n  <div class=\"uk-card uk-card-default uk-width-1-2@m uk-width-1-1@s forpass\">\n      <div class=\"uk-card-header\">\n          <div class=\"uk-grid-small uk-flex-middle\" uk-grid>\n              <div class=\"uk-width-auto\">\n                  <h4 class=\"uk-card-title titl\"> Mobile Number Verification </h4>\n              </div>\n          </div>\n      </div>\n      <div class=\"uk-card-body\">\n        <form (submit)=\"onverify()\">\n          <fieldset class=\"uk-fieldset\">\n              <p> OTP sent ur mobile number </p>\n              <div class=\"uk-margin inp4\">\n                <br>\n               \n\n                <input class=\"uk-input ip4\" type=\"text\" placeholder=\" enter the otp\">\n                <button class=\"uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom\" type=\"submit\">verify  ur otp</button>\n              </div>\n          </fieldset>\n        </form>\n      </div>\n      <!-- <div class=\"uk-card-footer\"> -->\n          <!-- <span>we will send u a link</span> -->\n      <!-- </div> -->\n  </div>\n  </div>\n  \n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/otp/otp.component.scss":
/*!****************************************!*\
  !*** ./src/app/otp/otp.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".forgotpass {\n  background-color: #3b5999;\n  padding-right: 5px;\n  padding-top: 5px;\n  padding-bottom: 359px; }\n\n.line {\n  position: relative;\n  bottom: 18px; }\n\n.titl {\n  position: relative;\n  bottom: 12px; }\n\n.inp4 {\n  border-radius: 5px;\n  width: 300px; }\n\n.ip4 {\n  border-radius: 4px;\n  position: relative;\n  bottom: 20px; }\n\n.butt {\n  width: 320px;\n  border-radius: 5px;\n  position: relative;\n  bottom: 22px; }\n\n@media screen and (min-width: 320px) and (max-width: 2950px) {\n  .forpass {\n    border-radius: 10px;\n    margin-top: 100px;\n    width: 360px;\n    left: 35%;\n    height: 50vh; } }\n\n@media screen and (min-width: 320px) and (max-width: 515px) {\n  .forpass {\n    border-radius: 10px;\n    margin-top: 100px;\n    right: 30%;\n    width: 400px;\n    left: 5%; }\n  .forgotpass {\n    padding-right: 5px;\n    padding-top: 5px;\n    padding-bottom: 279px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3RwL0M6XFxVc2Vyc1xcYnVqamkuREVTS1RPUC1ITjdVQjVUXFxNdXNpY1xcYWFhcnVtbXktZmluYWw5anVsXFxhYWFydW1teS1maW5hbDlqdWxcXGFhYXJ1bW15LWZyb250bGl2ZS9zcmNcXGFwcFxcb3RwXFxvdHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBd0I7RUFDeEIsa0JBQWlCO0VBQ2pCLGdCQUFlO0VBQ2YscUJBQW9CLEVBQUE7O0FBSXRCO0VBQ0ksa0JBQWlCO0VBQ2pCLFlBQVcsRUFBQTs7QUFFZjtFQUNJLGtCQUFpQjtFQUNqQixZQUFXLEVBQUE7O0FBRWY7RUFDRSxrQkFBaUI7RUFDakIsWUFBVyxFQUFBOztBQUViO0VBQ0Usa0JBQWlCO0VBQ2pCLGtCQUFpQjtFQUNqQixZQUFXLEVBQUE7O0FBRWI7RUFDRSxZQUFXO0VBQ1gsa0JBQWlCO0VBQ2pCLGtCQUFpQjtFQUNqQixZQUFXLEVBQUE7O0FBSWI7RUFDRTtJQUNJLG1CQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsWUFBVztJQUNYLFNBQVM7SUFDVCxZQUFXLEVBQUEsRUFDZDs7QUFFSDtFQUNFO0lBQ0ksbUJBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsWUFBWTtJQUNaLFFBQVEsRUFBQTtFQUdaO0lBQ0Usa0JBQWlCO0lBQ2pCLGdCQUFlO0lBQ2YscUJBQW9CLEVBQUEsRUFDckIiLCJmaWxlIjoic3JjL2FwcC9vdHAvb3RwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcmdvdHBhc3N7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzYjU5OTk7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjVweDtcclxuICAgIHBhZGRpbmctdG9wOjVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOjM1OXB4O1xyXG4gIH1cclxuICBcclxuICBcclxuICAubGluZXtcclxuICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgIGJvdHRvbToxOHB4O1xyXG4gIH1cclxuICAudGl0bHtcclxuICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgIGJvdHRvbToxMnB4O1xyXG4gIH1cclxuICAuaW5wNHtcclxuICAgIGJvcmRlci1yYWRpdXM6NXB4O1xyXG4gICAgd2lkdGg6MzAwcHg7XHJcbiAgfVxyXG4gIC5pcDR7XHJcbiAgICBib3JkZXItcmFkaXVzOjRweDtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgYm90dG9tOjIwcHg7XHJcbiAgfVxyXG4gIC5idXR0e1xyXG4gICAgd2lkdGg6MzIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjVweDtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgYm90dG9tOjIycHg7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogMjk1MHB4KSB7XHJcbiAgICAuZm9ycGFzc3tcclxuICAgICAgICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICAgICAgd2lkdGg6MzYwcHg7XHJcbiAgICAgICAgbGVmdDogMzUlO1xyXG4gICAgICAgIGhlaWdodDo1MHZoO1xyXG4gICAgfVxyXG4gIH1cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDUxNXB4KSB7XHJcbiAgICAuZm9ycGFzc3tcclxuICAgICAgICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICAgICAgcmlnaHQ6IDMwJTtcclxuICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgICAgbGVmdDogNSU7XHJcbiAgXHJcbiAgICB9XHJcbiAgICAuZm9yZ290cGFzc3tcclxuICAgICAgcGFkZGluZy1yaWdodDo1cHg7XHJcbiAgICAgIHBhZGRpbmctdG9wOjVweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206Mjc5cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/otp/otp.component.ts":
/*!**************************************!*\
  !*** ./src/app/otp/otp.component.ts ***!
  \**************************************/
/*! exports provided: OtpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpComponent", function() { return OtpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



// import { ValidateService } from '../services/validate.service';


var OtpComponent = /** @class */ (function () {
    function OtpComponent(
    // private validateService: ValidateService,
    authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    OtpComponent.prototype.ngOnInit = function () {
    };
    OtpComponent.prototype.onverify = function () {
        var _this = this;
        // console.log('hellooo verify');/
        this.verify = {
            verified: this.verified,
        };
        var verifiUser = JSON.parse(localStorage.getItem('user'));
        console.log('user', verifiUser);
        // update details user
        this.authService.VerifyUser(this.verify, verifiUser.id).subscribe(function (data) {
            if (data.success) {
                // tslint:disable-next-line:max-line-length
                _this.flashMessage.show(UIkit.notification({ message: 'You are verification process complted', status: 'success', pos: 'top-right', timeout: 4000 }));
                _this.router.navigate(['/lobby']);
            }
            else {
                _this.flashMessage.show(UIkit.notification({ message: 'Something went wrong', status: 'danger', pos: 'top-right', timeout: 4000 }));
                _this.router.navigate(['/']);
            }
        });
    };
    OtpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-otp',
            template: __webpack_require__(/*! ./otp.component.html */ "./src/app/otp/otp.component.html"),
            styles: [__webpack_require__(/*! ./otp.component.scss */ "./src/app/otp/otp.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]])
    ], OtpComponent);
    return OtpComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_3__);




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    //update details
    AuthService.prototype.EditUser = function (Edit, id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('content-Type', 'application/json');
        return this.http.post("http://localhost:3000/users/nav/" + id, Edit, { headers: headers });
    };
    // Backend API where we can make that post request to register
    AuthService.prototype.registerUser = function (user) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/register', user, { headers: headers });
    };
    AuthService.prototype.VerifyUser = function (verify, id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post("http://localhost:3000/users/otp/" + id, verify, { headers: headers });
    };
    // Backend API where we can make that post request to authenticate
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/authenticate', user, { headers: headers });
    };
    // get the profile of the user with the appropriate token
    AuthService.prototype.getProfile = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.loadToken();
        headers = headers.append('Authorization', this.authToken);
        headers = headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/users/profile', { headers: headers });
    };
    // Store the user data in the local storage along with the JWT-token
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    // Loading the token by fetching it from the local storage
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    // To check if the user is logged in then some options gets hidden and only the required will be shown
    AuthService.prototype.loggedIn = function () {
        return Object(angular2_jwt__WEBPACK_IMPORTED_MODULE_3__["tokenNotExpired"])('id_token');
    };
    // logout where everything gets clear in the local storage along with the user data
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    // To validate the feilds for the register form
    ValidateService.prototype.validateRegister = function (user) {
        if (user.username == undefined || user.contact == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEditUser = function (Edit) {
        if (Edit.AdharNumber == undefined || Edit.Pan == undefined || Edit.BankAccount == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\bujji.DESKTOP-HN7UB5T\Music\aaarummy-final9jul\aaarummy-final9jul\aaarummy-frontlive\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map