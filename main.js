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



var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
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

module.exports = "<router-outlet></router-outlet>\n<app-introvideo [isWatch]=\"isWatch$ | async\" [onClickClose]=\"onCloseIntro.bind(this)\"></app-introvideo>"

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
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _root_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./root-store */ "./src/app/root-store/index.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(store$) {
        this.store$ = store$;
        this.title = 'cuzwebapp';
        this.isWatch$ = this.store$.select(_root_store__WEBPACK_IMPORTED_MODULE_3__["CommonStoreSelectors"].selectCommonIsWatch);
        // this.isWatch$ = this.store$.pipe(pluck('common', 'isWatch')); // Using pluck and select the state
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.onCloseIntro = function () {
        this.store$.dispatch(new _root_store__WEBPACK_IMPORTED_MODULE_3__["CommonStoreActions"].CloseIntroAction);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _root_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./root-store */ "./src/app/root-store/index.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _root_store__WEBPACK_IMPORTED_MODULE_8__["RootStoreModule"],
                _home_home_module__WEBPACK_IMPORTED_MODULE_9__["HomeModule"],
                _auth_auth_module__WEBPACK_IMPORTED_MODULE_11__["AuthModule"],
                _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_13__["DashboardModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_12__["CoreModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forRoot({})
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/welcome/welcome.component */ "./src/app/auth/components/welcome/welcome.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/auth/components/signup/signup.component.ts");
/* harmony import */ var _components_security_code_security_code_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/security-code/security-code.component */ "./src/app/auth/components/security-code/security-code.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/auth/components/login/login.component.ts");







var routes = [
    { path: 'welcome', component: _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"] },
    { path: 'sign-up', component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] },
    { path: 'security-code', component: _components_security_code_security_code_component__WEBPACK_IMPORTED_MODULE_5__["SecurityCodeComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
/* harmony import */ var _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/welcome/welcome.component */ "./src/app/auth/components/welcome/welcome.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/auth/components/signup/signup.component.ts");
/* harmony import */ var _components_security_code_security_code_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/security-code/security-code.component */ "./src/app/auth/components/security-code/security-code.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/auth/components/login/login.component.ts");
/* harmony import */ var ngx_countdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-countdown */ "./node_modules/ngx-countdown/fesm5/ngx-countdown.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");











var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__["WelcomeComponent"],
                _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"],
                _components_security_code_security_code_component__WEBPACK_IMPORTED_MODULE_7__["SecurityCodeComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                ngx_countdown__WEBPACK_IMPORTED_MODULE_9__["CountdownModule"],
                _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"],
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/components/login/login.component.html":
/*!************************************************************!*\
  !*** ./src/app/auth/components/login/login.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-section container\">\n  <div class=\"login-wrapper row\">\n      <div class=\"col-xs-12 col-sm-6 login-text-div\">\n        <h1 class=\"login-heading\">\n          Select a\n          <br />\n          <strong>Login Method</strong>\n        </h1>\n        <hr class=\"login-seperator\"/>\n        <p class=\"login-text-paragraph\">\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia lorem massa, in auctor ligula ultricies non. Donec nibh elit, venenatis eu erat id, cursus egestas tortor.\n        </p>\n        <a href=\"/sign-up\">Don't have an account? Create a new one now!</a>\n      </div>\n      <div class=\"col-xs-12 col-sm-6 login-button-div\">\n        <div class=\"login-tabbed-forms\">\n          <div class=\"login-tab-menus\">\n            <div \n              class=\"tab-item\"\n              [ngClass] = \"active_tab == 'password' ? 'active' : ''\"\n              data-tabname=\"password\"\n              (click)=\"onClickHandler($event)\"\n              >\n              Password\n            </div>\n            <div \n              class=\"tab-item\"\n              [ngClass] = \"active_tab == 'login-code' ? 'active' : ''\"\n              data-tabname=\"login-code\" \n              (click)=\"onClickHandler($event)\"\n              >\n              Login Code\n            </div>\n          </div>\n          <div class=\"login-tab-menu-contents\">\n            <div class=\"login-section-form\" *ngIf=\"active_tab == 'password'\" [ngClass]=\"active_tab == 'password' ? 'active' : ''\" data-tab-link=\"password\">\n              <form name=\"passwordform\" id=\"passwordForm\">\n                <input type=\"email\" name=\"email\" [(ngModel)]=\"email\" placeholder=\"Email\"/>\n                <input type=\"password\" name=\"password\" [(ngModel)]=\"password\" placeholder=\"Password\"/>\n              </form>\n            </div>\n            <div class=\"login-section-form\" *ngIf=\"active_tab == 'login-code'\" [ngClass]=\"active_tab == 'login-code' ? 'active' : ''\"  data-tab-link=\"login-code\">\n                <form name=\"logincodeform\" id=\"logincodeForm\">\n                  <input type=\"text\" name=\"logincode\" [(ngModel)]=\"logincode\" placeholder=\"Login Code\"/>\n                </form>\n              </div>\n          </div> \n        </div>\n        <app-login-section-button \n          route_dest=\"security-code\"\n          [ClickHandler]=\"onClickLoginBtn.bind(this)\"\n          >Let's Go!</app-login-section-button>\n        <a href=\"#\">Forgot Password?</a>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/auth/components/login/login.component.scss":
/*!************************************************************!*\
  !*** ./src/app/auth/components/login/login.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background-image: linear-gradient(180deg, #23b7bb, #607cf1);\n  height: 100vh; }\n\na {\n  color: white;\n  text-decoration: underline; }\n\na:hover {\n    color: white; }\n\n.login-section {\n  display: flex;\n  max-width: 80%;\n  height: 100vh;\n  flex-direction: column;\n  justify-content: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center; }\n\n.login-section .login-text-div img {\n    width: 82px; }\n\n.login-section .login-text-div .login-heading {\n    color: white;\n    font-weight: 400;\n    line-height: 160%; }\n\n.login-section .login-text-div .login-seperator {\n    height: 1px;\n    margin-top: 20px;\n    background-color: #fff;\n    border: none; }\n\n.login-section .login-text-div .login-text-paragraph {\n    margin-bottom: 20px;\n    color: white; }\n\n.login-section .login-button-div {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding-left: 40px; }\n\n.login-section .login-button-div .login-tabbed-forms {\n      width: 100%;\n      align-items: center;\n      display: flex;\n      flex-direction: column; }\n\n.login-section .login-button-div .login-tabbed-forms .login-tab-menus {\n        display: flex;\n        width: 320px;\n        margin-bottom: 20px;\n        border-radius: 50px;\n        background-color: rgba(255, 255, 255, 0.2);\n        transition: all .4s ease;\n        color: #fff;\n        font-size: 16px;\n        font-weight: 700; }\n\n.login-section .login-button-div .login-tabbed-forms .login-tab-menus .tab-item {\n          width: 50%;\n          padding: 10px 25px;\n          cursor: pointer;\n          text-align: center; }\n\n.login-section .login-button-div .login-tabbed-forms .login-tab-menus .tab-item.active {\n            border-radius: 50px;\n            background-color: #fff;\n            color: #464646; }\n\n.login-section .login-button-div .login-tabbed-forms .login-tab-menu-contents {\n        display: flex;\n        width: 100%;\n        height: 180px;\n        flex-direction: column;\n        justify-content: center; }\n\n.login-section .login-button-div .login-tabbed-forms .login-tab-menu-contents .login-section-form {\n          margin-bottom: 10px;\n          padding: 16px 30px;\n          background-color: #fff;\n          border-radius: 20px;\n          opacity: 0; }\n\n.login-section .login-button-div .login-tabbed-forms .login-tab-menu-contents .login-section-form.active {\n            opacity: 1;\n            transition: opacity 1s cubic-bezier(0.075, 0.82, 0.165, 1); }\n\n.login-section .login-button-div .login-tabbed-forms .login-tab-menu-contents .login-section-form form input {\n            display: block;\n            width: 100%;\n            height: 38px;\n            padding: 8px 12px;\n            margin-bottom: 10px;\n            font-size: 14px;\n            line-height: 1.42857143;\n            color: #333;\n            background-color: #fff;\n            border: 1px solid #ccc; }\n\n.login-section .login-button-div .login-tabbed-forms .login-tab-menu-contents .login-section-form form input[type='text'], .login-section .login-button-div .login-tabbed-forms .login-tab-menu-contents .login-section-form form input[type='password'], .login-section .login-button-div .login-tabbed-forms .login-tab-menu-contents .login-section-form form input[type='email'] {\n              padding: 25px 20px;\n              border-style: none none solid;\n              border-bottom-width: 1px;\n              border-bottom-color: #ededed;\n              font-size: 18px;\n              font-weight: 700; }\n\n.login-section .login-button-div .login-tabbed-forms .login-tab-menu-contents .login-section-form form input:focus {\n              outline: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9jb21wb25lbnRzL2xvZ2luL0c6XFxQcm9qZWN0XFxPcmhhbkNhbS1Gcm9udEVuZFxcd29ya1xcY3V6d2ViYXBwL3NyY1xcYXBwXFxhdXRoXFxjb21wb25lbnRzXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFSSw0REFBeUQ7RUFDekQsY0FBYSxFQUNoQjs7QUFFRDtFQUNJLGFBQVk7RUFDWiwyQkFBMEIsRUFJN0I7O0FBTkQ7SUFJUSxhQUFZLEVBQ2Y7O0FBS0w7RUFDSSxjQUFhO0VBQ2IsZUFBYztFQUNkLGNBQWE7RUFJYix1QkFBc0I7RUFJdEIsd0JBQXVCO0VBQ3ZCLDBCQUF5QjtFQUN6Qix1QkFBc0IsRUE2R3pCOztBQTFIRDtJQWdCWSxZQUFXLEVBQ2Q7O0FBakJUO0lBb0JZLGFBQVk7SUFDWixpQkFBZ0I7SUFDaEIsa0JBQWlCLEVBQ3BCOztBQXZCVDtJQTBCWSxZQUFXO0lBQ1gsaUJBQWdCO0lBQ2hCLHVCQUFzQjtJQUN0QixhQUFZLEVBQ2Y7O0FBOUJUO0lBaUNZLG9CQUFtQjtJQUNuQixhQUFZLEVBQ2Y7O0FBbkNUO0lBdUNRLGNBQWE7SUFDYix1QkFBc0I7SUFDdEIsd0JBQXVCO0lBQ3ZCLG9CQUFtQjtJQUNuQixtQkFBa0IsRUE4RXJCOztBQXpITDtNQTZDWSxZQUFXO01BQ1gsb0JBQW1CO01BQ25CLGNBQWE7TUFDYix1QkFBc0IsRUF3RXpCOztBQXhIVDtRQWtEZ0IsY0FBYTtRQUNiLGFBQVk7UUFDWixvQkFBbUI7UUFDbkIsb0JBQW1CO1FBQ25CLDJDQUFvQztRQUVwQyx5QkFBd0I7UUFDeEIsWUFBVztRQUNYLGdCQUFlO1FBQ2YsaUJBQWdCLEVBWW5COztBQXZFYjtVQTZEb0IsV0FBVTtVQUNWLG1CQUFrQjtVQUNsQixnQkFBZTtVQUNmLG1CQUFrQixFQU1yQjs7QUF0RWpCO1lBa0V3QixvQkFBbUI7WUFDbkIsdUJBQXNCO1lBQ3RCLGVBQWMsRUFDakI7O0FBckVyQjtRQXlFZ0IsY0FBYTtRQUNiLFlBQVc7UUFDWCxjQUFhO1FBR2IsdUJBQXNCO1FBSXRCLHdCQUF1QixFQXFDMUI7O0FBdkhiO1VBb0ZvQixvQkFBbUI7VUFDbkIsbUJBQWtCO1VBQ2xCLHVCQUFzQjtVQUN0QixvQkFBbUI7VUFDbkIsV0FBVSxFQThCYjs7QUF0SGpCO1lBMEZ3QixXQUFVO1lBQ1YsMkRBQTBELEVBQzdEOztBQTVGckI7WUErRjRCLGVBQWM7WUFDZCxZQUFXO1lBQ1gsYUFBWTtZQUNaLGtCQUFpQjtZQUNqQixvQkFBbUI7WUFDbkIsZ0JBQWU7WUFDZix3QkFBdUI7WUFDdkIsWUFBVztZQUNYLHVCQUFzQjtZQUN0Qix1QkFBc0IsRUFZekI7O0FBcEh6QjtjQTBHZ0MsbUJBQWtCO2NBQ2xCLDhCQUE2QjtjQUM3Qix5QkFBd0I7Y0FDeEIsNkJBQTRCO2NBQzVCLGdCQUFlO2NBQ2YsaUJBQWdCLEVBQ25COztBQWhIN0I7Y0FrSGdDLGNBQWEsRUFDaEIiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNYWluIEVsZW1lbnRzXHJcbmJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsbGVmdCB0b3AsbGVmdCBib3R0b20sZnJvbSgjMjNiN2JiKSx0bygjNjA3Y2YxKSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCMyM2I3YmIsIzYwN2NmMSk7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG5hIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy8gQ29tcG9uZW50IFN0eWxlXHJcbi5sb2dpbi1zZWN0aW9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXgtd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgICAubG9naW4tdGV4dC1kaXYge1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxvZ2luLWhlYWRpbmcge1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNjAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxvZ2luLXNlcGVyYXRvciB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubG9naW4tdGV4dC1wYXJhZ3JhcGgge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5sb2dpbi1idXR0b24tZGl2IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgICAgICAgLmxvZ2luLXRhYmJlZC1mb3JtcyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAubG9naW4tdGFiLW1lbnVzIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzIwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwwJSwxMDAlLC4yKTtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC40cyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC40cyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgLnRhYi1pdGVtIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjVweDtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0NjQ2NDY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5sb2dpbi10YWItbWVudS1jb250ZW50cyB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgLmxvZ2luLXNlY3Rpb24tZm9ybSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNnB4IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBmb3JtIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweCAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICZbdHlwZT0ndGV4dCddLCAmW3R5cGU9J3Bhc3N3b3JkJ10sICZbdHlwZT0nZW1haWwnXSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjVweCAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1zdHlsZTogbm9uZSBub25lIHNvbGlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZWRlZGVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/auth/components/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/auth/components/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var src_app_core_http_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/http/api.service */ "./src/app/core/http/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(apiService, router, route) {
        this.apiService = apiService;
        this.router = router;
        this.route = route;
        this.email = '';
        this.password = '';
        this.logincode = '';
        this.active_tab = "password";
        this.jobtypeUrl = "/job-type";
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onClickHandler = function (event) {
        var target = event.target || event.srcElement || event.currentTarget;
        this.active_tab = target.dataset.tabname;
    };
    LoginComponent.prototype.onClickLoginBtn = function () {
        var _this = this;
        if (this.active_tab == 'password') {
            this.apiService.login(3, this.email, this.password).subscribe(function (data) {
                _this.router.navigate([_this.jobtypeUrl]);
            }, function (error) {
                console.log(error.error.status.parameters.password[0]);
            });
        }
        else if (this.active_tab == 'login-code') {
            this.router.navigate([this.jobtypeUrl]);
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/components/login/login.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('enterAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => void', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }))
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/components/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_http_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/components/security-code/security-code.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/auth/components/security-code/security-code.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-section container\">\n    <div class=\"login-wrapper row\">\n        <div class=\"col-xs-12 col-sm-6 login-text-div\">\n          <h1 class=\"login-heading\">\n            Enter your\n            <br />\n            <strong>Security Code</strong>\n          </h1>\n          <hr class=\"login-seperator\"/>\n          <p class=\"login-text-paragraph\">\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia lorem massa, in auctor ligula ultricies non. Donec nibh elit, venenatis eu erat id, cursus egestas tortor.\n          </p>\n          <a href=\"/sign-up\">Wrong Email?</a>\n        </div>\n        <div class=\"col-xs-12 col-sm-6 login-button-div\">\n          <div class=\"login-section-form\">\n            <form name=\"logincodeform\" id=\"logincodeForm\">\n              <input type=\"text\" name=\"logincode\" [(ngModel)]=\"logincode\" placeholder=\"6 Digits Code\"/>\n              <div class=\"remaining-time-text\">\n                Remaining Time: \n                <strong>\n                  <countdown \n                    [config]=\"{leftTime: 180}\" \n                    (finish)=\"onFinishCountingDown()\"\n                    >$!m!:$!s!</countdown>\n                </strong>\n              </div>\n            </form>\n          </div>\n          <app-login-section-button \n            route_dest=\"job-type\"\n            [ClickHandler]=\"onClickContinueBtn.bind(this)\"\n            >Continue</app-login-section-button>\n          <a\n            href=\"#\"\n            (click)=\"onClickResendCode()\"\n            >Resend Code</a>\n        </div>\n    </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/auth/components/security-code/security-code.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/auth/components/security-code/security-code.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background-image: linear-gradient(180deg, #23b7bb, #607cf1);\n  height: 100vh; }\n\na {\n  color: white;\n  text-decoration: underline; }\n\na:hover {\n    color: white; }\n\n.login-section {\n  display: flex;\n  max-width: 80%;\n  height: 100vh;\n  flex-direction: column;\n  justify-content: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center; }\n\n.login-section .login-text-div img {\n    width: 82px; }\n\n.login-section .login-text-div .login-heading {\n    color: white;\n    font-weight: 400;\n    line-height: 160%; }\n\n.login-section .login-text-div .login-seperator {\n    height: 1px;\n    margin-top: 20px;\n    background-color: #fff;\n    border: none; }\n\n.login-section .login-text-div .login-text-paragraph {\n    margin-bottom: 20px;\n    color: white; }\n\n.login-section .login-button-div {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding-left: 40px; }\n\n.login-section .login-button-div .login-section-form {\n      display: flex;\n      width: 100%;\n      flex-direction: column;\n      justify-content: center;\n      margin-bottom: 10px;\n      padding: 16px 30px;\n      background-color: #fff;\n      border-radius: 20px; }\n\n.login-section .login-button-div .login-section-form form input {\n        display: block;\n        width: 100%;\n        height: 38px;\n        padding: 8px 12px;\n        margin-bottom: 10px;\n        font-size: 14px;\n        line-height: 1.42857143;\n        color: #333;\n        background-color: #fff;\n        border: 1px solid #ccc; }\n\n.login-section .login-button-div .login-section-form form input[type='text'], .login-section .login-button-div .login-section-form form input[type='password'], .login-section .login-button-div .login-section-form form input[type='email'] {\n          padding: 25px 20px;\n          border-style: none none solid;\n          border-bottom-width: 1px;\n          border-bottom-color: #ededed;\n          font-size: 18px;\n          font-weight: 700; }\n\n.login-section .login-button-div .login-section-form form input:focus {\n          outline: none; }\n\n.login-section .login-button-div .login-section-form form div.remaining-time-text {\n        margin-top: 16px;\n        margin-bottom: 16px;\n        padding-left: 20px;\n        color: #464646;\n        font-size: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9jb21wb25lbnRzL3NlY3VyaXR5LWNvZGUvRzpcXFByb2plY3RcXE9yaGFuQ2FtLUZyb250RW5kXFx3b3JrXFxjdXp3ZWJhcHAvc3JjXFxhcHBcXGF1dGhcXGNvbXBvbmVudHNcXHNlY3VyaXR5LWNvZGVcXHNlY3VyaXR5LWNvZGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFSSw0REFBeUQ7RUFDekQsY0FBYSxFQUNoQjs7QUFFRDtFQUNJLGFBQVk7RUFDWiwyQkFBMEIsRUFJN0I7O0FBTkQ7SUFJUSxhQUFZLEVBQ2Y7O0FBS0w7RUFDSSxjQUFhO0VBQ2IsZUFBYztFQUNkLGNBQWE7RUFJYix1QkFBc0I7RUFJdEIsd0JBQXVCO0VBQ3ZCLDBCQUF5QjtFQUN6Qix1QkFBc0IsRUFnRnpCOztBQTdGRDtJQWdCWSxZQUFXLEVBQ2Q7O0FBakJUO0lBb0JZLGFBQVk7SUFDWixpQkFBZ0I7SUFDaEIsa0JBQWlCLEVBQ3BCOztBQXZCVDtJQTBCWSxZQUFXO0lBQ1gsaUJBQWdCO0lBQ2hCLHVCQUFzQjtJQUN0QixhQUFZLEVBQ2Y7O0FBOUJUO0lBaUNZLG9CQUFtQjtJQUNuQixhQUFZLEVBQ2Y7O0FBbkNUO0lBdUNRLGNBQWE7SUFDYix1QkFBc0I7SUFDdEIsd0JBQXVCO0lBQ3ZCLG9CQUFtQjtJQUNuQixtQkFBa0IsRUFnRHJCOztBQTNGTDtNQTZDWSxjQUFhO01BQ2IsWUFBVztNQUdYLHVCQUFzQjtNQUl0Qix3QkFBdUI7TUFDdkIsb0JBQW1CO01BQ25CLG1CQUFrQjtNQUNsQix1QkFBc0I7TUFDdEIsb0JBQW1CLEVBaUN0Qjs7QUExRlQ7UUE0RG9CLGVBQWM7UUFDZCxZQUFXO1FBQ1gsYUFBWTtRQUNaLGtCQUFpQjtRQUNqQixvQkFBbUI7UUFDbkIsZ0JBQWU7UUFDZix3QkFBdUI7UUFDdkIsWUFBVztRQUNYLHVCQUFzQjtRQUN0Qix1QkFBc0IsRUFZekI7O0FBakZqQjtVQXVFd0IsbUJBQWtCO1VBQ2xCLDhCQUE2QjtVQUM3Qix5QkFBd0I7VUFDeEIsNkJBQTRCO1VBQzVCLGdCQUFlO1VBQ2YsaUJBQWdCLEVBQ25COztBQTdFckI7VUErRXdCLGNBQWEsRUFDaEI7O0FBaEZyQjtRQW1Gb0IsaUJBQWdCO1FBQ2hCLG9CQUFtQjtRQUNuQixtQkFBa0I7UUFDbEIsZUFBYztRQUNkLGdCQUFlLEVBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9jb21wb25lbnRzL3NlY3VyaXR5LWNvZGUvc2VjdXJpdHktY29kZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE1haW4gRWxlbWVudHNcclxuYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhcixsZWZ0IHRvcCxsZWZ0IGJvdHRvbSxmcm9tKCMyM2I3YmIpLHRvKCM2MDdjZjEpKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIzIzYjdiYiwjNjA3Y2YxKTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vLyBDb21wb25lbnQgU3R5bGVcclxuLmxvZ2luLXNlY3Rpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1heC13aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgIC5sb2dpbi10ZXh0LWRpdiB7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDgycHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubG9naW4taGVhZGluZyB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2MCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubG9naW4tc2VwZXJhdG9yIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5sb2dpbi10ZXh0LXBhcmFncmFwaCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmxvZ2luLWJ1dHRvbi1kaXYge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNDBweDtcclxuICAgICAgICAubG9naW4tc2VjdGlvbi1mb3JtIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcclxuICAgICAgICAgICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTZweCAzMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICBmb3JtIHtcclxuICAgICAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogOHB4IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgICAgICAgICAgICAgICZbdHlwZT0ndGV4dCddLCAmW3R5cGU9J3Bhc3N3b3JkJ10sICZbdHlwZT0nZW1haWwnXSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDI1cHggMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBub25lIG5vbmUgc29saWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2VkZWRlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkaXYucmVtYWluaW5nLXRpbWUtdGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzQ2NDY0NjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/auth/components/security-code/security-code.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/auth/components/security-code/security-code.component.ts ***!
  \**************************************************************************/
/*! exports provided: SecurityCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityCodeComponent", function() { return SecurityCodeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_http_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/http/api.service */ "./src/app/core/http/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");





var SecurityCodeComponent = /** @class */ (function () {
    function SecurityCodeComponent(store$, apiService, router, route) {
        this.store$ = store$;
        this.apiService = apiService;
        this.router = router;
        this.route = route;
        this.logincode = '';
        this.jobtypeUrl = '/job-type';
    }
    SecurityCodeComponent.prototype.ngOnInit = function () {
        // --- When stored in the store --- :
        // this.store$.select(
        //   AuthStoreSelectors.selectAuthEmail
        // ).subscribe(email => 
        //   this.email = email
        // );
        this.email = localStorage.getItem('email');
        this.apiService.requestTempPassword(1, this.email).subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    // On Finishing Count Down
    SecurityCodeComponent.prototype.onFinishCountingDown = function () {
        alert('Your Code is expired, Please Send Again.');
    };
    // On Click Continue Login or Sign Up
    SecurityCodeComponent.prototype.onClickContinueBtn = function () {
        var _this = this;
        this.apiService.login(3, this.email, this.logincode).subscribe(function (data) {
            _this.router.navigate([_this.jobtypeUrl]);
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    SecurityCodeComponent.prototype.onClickResendCode = function () {
    };
    SecurityCodeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-security-code',
            template: __webpack_require__(/*! ./security-code.component.html */ "./src/app/auth/components/security-code/security-code.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./security-code.component.scss */ "./src/app/auth/components/security-code/security-code.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _core_http_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], SecurityCodeComponent);
    return SecurityCodeComponent;
}());



/***/ }),

/***/ "./src/app/auth/components/signup/signup.component.html":
/*!**************************************************************!*\
  !*** ./src/app/auth/components/signup/signup.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-section container\">\n    <div class=\"login-wrapper row\">\n        <div class=\"col-xs-12 col-sm-6 login-text-div\">\n          <h1 class=\"login-heading\">\n            Create a\n            <br />\n            <strong>New Account</strong>\n          </h1>\n          <hr class=\"login-seperator\"/>\n          <p class=\"login-text-paragraph\">\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia lorem massa, in auctor ligula ultricies non. Donec nibh elit, venenatis eu erat id, cursus egestas tortor.\n          </p>\n          <a href=\"/login\">Already have an account? Login now.</a>\n        </div>\n        <div class=\"col-xs-12 col-sm-6 login-button-div\">\n          <div class=\"login-section-form\">\n            <form name=\"newaccountform\" id=\"newaccountForm\">\n              <input type=\"email\" [(ngModel)]=\"email\" placeholder=\"Email\" #ctrl=\"ngModel\" required [ngModelOptions]=\"{standalone: true}\"/>\n            </form>\n          </div>\n          <div class=\"terms-check\">\n              <input type=\"checkbox\" id=\"terms\" [(ngModel)]=\"isAgreed\" />\n              <label for=\"terms\">\n                  I've read & accepted <strong>terms of use</strong>.\n              </label>\n          </div>\n          <app-login-section-button \n            route_dest=\"security-code\"\n            [ClickHandler]=\"onClickCreateBtn.bind(this)\"\n            >Create a New Account</app-login-section-button>\n        </div>\n    </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/auth/components/signup/signup.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/auth/components/signup/signup.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background-image: linear-gradient(180deg, #23b7bb, #607cf1);\n  height: 100vh; }\n\na {\n  color: white;\n  text-decoration: underline; }\n\na:hover {\n    color: white; }\n\n.login-section {\n  display: flex;\n  max-width: 80%;\n  height: 100vh;\n  flex-direction: column;\n  justify-content: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center; }\n\n.login-section .login-text-div img {\n    width: 82px; }\n\n.login-section .login-text-div .login-heading {\n    color: white;\n    font-weight: 400;\n    line-height: 160%; }\n\n.login-section .login-text-div .login-seperator {\n    height: 1px;\n    margin-top: 20px;\n    background-color: #fff;\n    border: none; }\n\n.login-section .login-text-div .login-text-paragraph {\n    margin-bottom: 20px;\n    color: white; }\n\n.login-section .login-button-div {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding-left: 40px; }\n\n.login-section .login-button-div .login-section-form {\n      display: flex;\n      width: 100%;\n      flex-direction: column;\n      justify-content: center;\n      margin-bottom: 10px;\n      padding: 16px 30px;\n      background-color: #fff;\n      border-radius: 20px; }\n\n.login-section .login-button-div .login-section-form form input {\n        display: block;\n        width: 100%;\n        height: 38px;\n        padding: 8px 12px;\n        margin-bottom: 10px;\n        font-size: 14px;\n        line-height: 1.42857143;\n        color: #333;\n        background-color: #fff;\n        border: 1px solid #ccc; }\n\n.login-section .login-button-div .login-section-form form input[type='text'], .login-section .login-button-div .login-section-form form input[type='password'], .login-section .login-button-div .login-section-form form input[type='email'] {\n          padding: 25px 20px;\n          border-style: none none solid;\n          border-bottom-width: 1px;\n          border-bottom-color: #ededed;\n          font-size: 18px;\n          font-weight: 700; }\n\n.login-section .login-button-div .login-section-form form input:focus {\n          outline: none; }\n\n.login-section .login-button-div .login-section-form form div.remaining-time-text {\n        margin-top: 16px;\n        margin-bottom: 16px;\n        padding-left: 20px;\n        color: #464646;\n        font-size: 20px; }\n\n.login-section .login-button-div .terms-check {\n      margin-top: 20px;\n      margin-bottom: 20px; }\n\n.login-section .login-button-div .terms-check input {\n        width: 20px;\n        height: 20px;\n        vertical-align: middle;\n        margin-right: 10px; }\n\n.login-section .login-button-div .terms-check label {\n        color: white;\n        display: inline-block;\n        cursor: pointer;\n        font-weight: 400;\n        margin-bottom: 0;\n        font-size: 18px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9jb21wb25lbnRzL3NpZ251cC9HOlxcUHJvamVjdFxcT3JoYW5DYW0tRnJvbnRFbmRcXHdvcmtcXGN1endlYmFwcC9zcmNcXGFwcFxcYXV0aFxcY29tcG9uZW50c1xcc2lnbnVwXFxzaWdudXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFSSw0REFBeUQ7RUFDekQsY0FBYSxFQUNoQjs7QUFFRDtFQUNJLGFBQVk7RUFDWiwyQkFBMEIsRUFJN0I7O0FBTkQ7SUFJUSxhQUFZLEVBQ2Y7O0FBSUw7RUFDSSxjQUFhO0VBQ2IsZUFBYztFQUNkLGNBQWE7RUFJYix1QkFBc0I7RUFJdEIsd0JBQXVCO0VBQ3ZCLDBCQUF5QjtFQUN6Qix1QkFBc0IsRUFtR3pCOztBQWhIRDtJQWdCWSxZQUFXLEVBQ2Q7O0FBakJUO0lBb0JZLGFBQVk7SUFDWixpQkFBZ0I7SUFDaEIsa0JBQWlCLEVBQ3BCOztBQXZCVDtJQTBCWSxZQUFXO0lBQ1gsaUJBQWdCO0lBQ2hCLHVCQUFzQjtJQUN0QixhQUFZLEVBQ2Y7O0FBOUJUO0lBaUNZLG9CQUFtQjtJQUNuQixhQUFZLEVBQ2Y7O0FBbkNUO0lBdUNRLGNBQWE7SUFDYix1QkFBc0I7SUFDdEIsd0JBQXVCO0lBQ3ZCLG9CQUFtQjtJQUNuQixtQkFBa0IsRUFtRXJCOztBQTlHTDtNQTZDWSxjQUFhO01BQ2IsWUFBVztNQUdYLHVCQUFzQjtNQUl0Qix3QkFBdUI7TUFDdkIsb0JBQW1CO01BQ25CLG1CQUFrQjtNQUNsQix1QkFBc0I7TUFDdEIsb0JBQW1CLEVBaUN0Qjs7QUExRlQ7UUE0RG9CLGVBQWM7UUFDZCxZQUFXO1FBQ1gsYUFBWTtRQUNaLGtCQUFpQjtRQUNqQixvQkFBbUI7UUFDbkIsZ0JBQWU7UUFDZix3QkFBdUI7UUFDdkIsWUFBVztRQUNYLHVCQUFzQjtRQUN0Qix1QkFBc0IsRUFZekI7O0FBakZqQjtVQXVFd0IsbUJBQWtCO1VBQ2xCLDhCQUE2QjtVQUM3Qix5QkFBd0I7VUFDeEIsNkJBQTRCO1VBQzVCLGdCQUFlO1VBQ2YsaUJBQWdCLEVBQ25COztBQTdFckI7VUErRXdCLGNBQWEsRUFDaEI7O0FBaEZyQjtRQW1Gb0IsaUJBQWdCO1FBQ2hCLG9CQUFtQjtRQUNuQixtQkFBa0I7UUFDbEIsZUFBYztRQUNkLGdCQUFlLEVBQ2xCOztBQXhGakI7TUE2RlksaUJBQWdCO01BQ2hCLG9CQUFtQixFQWV0Qjs7QUE3R1Q7UUFnR2dCLFlBQVc7UUFDWCxhQUFZO1FBQ1osdUJBQXNCO1FBQ3RCLG1CQUFrQixFQUNyQjs7QUFwR2I7UUFzR2dCLGFBQVk7UUFDWixzQkFBcUI7UUFDckIsZ0JBQWU7UUFDZixpQkFBZ0I7UUFDaEIsaUJBQWdCO1FBQ2hCLGdCQUFlLEVBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9jb21wb25lbnRzL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNYWluIEVsZW1lbnRzXHJcbmJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsbGVmdCB0b3AsbGVmdCBib3R0b20sZnJvbSgjMjNiN2JiKSx0bygjNjA3Y2YxKSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCMyM2I3YmIsIzYwN2NmMSk7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG5hIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBDb21wb25lbnQgU3R5bGVcclxuLmxvZ2luLXNlY3Rpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1heC13aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgIC5sb2dpbi10ZXh0LWRpdiB7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDgycHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubG9naW4taGVhZGluZyB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2MCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubG9naW4tc2VwZXJhdG9yIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5sb2dpbi10ZXh0LXBhcmFncmFwaCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmxvZ2luLWJ1dHRvbi1kaXYge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNDBweDtcclxuICAgICAgICAubG9naW4tc2VjdGlvbi1mb3JtIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcclxuICAgICAgICAgICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTZweCAzMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICBmb3JtIHtcclxuICAgICAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogOHB4IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgICAgICAgICAgICAgICZbdHlwZT0ndGV4dCddLCAmW3R5cGU9J3Bhc3N3b3JkJ10sICZbdHlwZT0nZW1haWwnXSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDI1cHggMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBub25lIG5vbmUgc29saWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2VkZWRlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkaXYucmVtYWluaW5nLXRpbWUtdGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzQ2NDY0NjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50ZXJtcy1jaGVjayB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/auth/components/signup/signup.component.ts":
/*!************************************************************!*\
  !*** ./src/app/auth/components/signup/signup.component.ts ***!
  \************************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_http_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/http/api.service */ "./src/app/core/http/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _root_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../root-store */ "./src/app/root-store/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");






var SignupComponent = /** @class */ (function () {
    function SignupComponent(apiService, router, route, store$) {
        this.apiService = apiService;
        this.router = router;
        this.route = route;
        this.store$ = store$;
        this.email = '';
        this.isAgreed = false;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.nextUrl = '/security-code';
    };
    SignupComponent.prototype.onClickCreateBtn = function () {
        var _this = this;
        if (this.isAgreed == true) {
            this.apiService.signupWithEmail(this.email).subscribe(function (data) {
                _this.store$.dispatch(new _root_store__WEBPACK_IMPORTED_MODULE_4__["AuthStoreActions"].SET_EMAIL({
                    email: _this.email
                }));
                localStorage.setItem('email', _this.email);
                _this.router.navigate([_this.nextUrl]);
            }, function (error) {
                console.log('some error', error);
            });
        }
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/auth/components/signup/signup.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/auth/components/signup/signup.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_http_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/auth/components/welcome/welcome.component.html":
/*!****************************************************************!*\
  !*** ./src/app/auth/components/welcome/welcome.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-section container\">\n  <div class=\"login-wrapper row\">\n      <div class=\"col-xs-12 col-sm-6 login-text-div\">\n        <img src=\"../../assets/imgs/cuz-logo-white.png\" alt=\"cuz-logo-gray\">\n        <h1 class=\"login-heading\">\n          Welcome to\n          <br />\n          <strong>Cuz Translation</strong>\n        </h1>\n        <hr class=\"login-seperator\"/>\n        <p class=\"login-text-paragraph\">\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia lorem massa, in auctor ligula ultricies non. Donec nibh elit, venenatis eu erat id, cursus egestas tortor.\n        </p>\n        <app-introbutton [onClick]=\"watchIntro.bind(this)\">Watch Intro!</app-introbutton>\n      </div>\n      <div class=\"col-xs-12 col-sm-6 login-button-div\">\n        <app-login-section-button \n          route_dest=\"sign-up\" \n          icon=\"new-user\"\n          [ClickHandler]=\"onClickNewAccountBtn.bind(this)\"\n          >I am new</app-login-section-button>\n        <app-login-section-button \n          route_dest=\"login\" \n          icon=\"login\"\n          [ClickHandler]=\"onClickLoginBtn.bind(this)\"\n          >I have an account</app-login-section-button>\n      </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/auth/components/welcome/welcome.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/auth/components/welcome/welcome.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background-image: linear-gradient(180deg, #23b7bb, #607cf1);\n  height: 100vh; }\n\n.login-section {\n  display: flex;\n  max-width: 80%;\n  height: 100vh;\n  flex-direction: column;\n  justify-content: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center; }\n\n.login-section .login-text-div img {\n    width: 82px; }\n\n.login-section .login-text-div .login-heading {\n    color: white;\n    font-weight: 400;\n    line-height: 160%; }\n\n.login-section .login-text-div .login-seperator {\n    height: 1px;\n    margin-top: 20px;\n    background-color: #fff;\n    border: none; }\n\n.login-section .login-text-div .login-text-paragraph {\n    margin-bottom: 20px;\n    color: white; }\n\n.login-section .login-button-div {\n    justify-content: center;\n    align-items: center;\n    display: flex;\n    flex-direction: column; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9jb21wb25lbnRzL3dlbGNvbWUvRzpcXFByb2plY3RcXE9yaGFuQ2FtLUZyb250RW5kXFx3b3JrXFxjdXp3ZWJhcHAvc3JjXFxhcHBcXGF1dGhcXGNvbXBvbmVudHNcXHdlbGNvbWVcXHdlbGNvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFSSw0REFBeUQ7RUFDekQsY0FBYSxFQUNoQjs7QUFHRDtFQUNJLGNBQWE7RUFDYixlQUFjO0VBQ2QsY0FBYTtFQUliLHVCQUFzQjtFQUl0Qix3QkFBdUI7RUFDdkIsMEJBQXlCO0VBQ3pCLHVCQUFzQixFQStCekI7O0FBNUNEO0lBZ0JZLFlBQVcsRUFDZDs7QUFqQlQ7SUFvQlksYUFBWTtJQUNaLGlCQUFnQjtJQUNoQixrQkFBaUIsRUFDcEI7O0FBdkJUO0lBMEJZLFlBQVc7SUFDWCxpQkFBZ0I7SUFDaEIsdUJBQXNCO0lBQ3RCLGFBQVksRUFDZjs7QUE5QlQ7SUFpQ1ksb0JBQW1CO0lBQ25CLGFBQVksRUFDZjs7QUFuQ1Q7SUF1Q1Esd0JBQXVCO0lBQ3ZCLG9CQUFtQjtJQUNuQixjQUFhO0lBQ2IsdUJBQXNCLEVBQ3pCIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9jb21wb25lbnRzL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE1haW4gRWxlbWVudHNcclxuYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhcixsZWZ0IHRvcCxsZWZ0IGJvdHRvbSxmcm9tKCMyM2I3YmIpLHRvKCM2MDdjZjEpKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIzIzYjdiYiwjNjA3Y2YxKTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi8vIENvbXBvbmVudCBTdHlsZVxyXG4ubG9naW4tc2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcclxuICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gICAgLmxvZ2luLXRleHQtZGl2IHtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogODJweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5sb2dpbi1oZWFkaW5nIHtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTYwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5sb2dpbi1zZXBlcmF0b3Ige1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDFweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxvZ2luLXRleHQtcGFyYWdyYXBoIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubG9naW4tYnV0dG9uLWRpdiB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/auth/components/welcome/welcome.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/auth/components/welcome/welcome.component.ts ***!
  \**************************************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _root_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../root-store */ "./src/app/root-store/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent(store$, router, route) {
        this.store$ = store$;
        this.router = router;
        this.route = route;
        this.signupUrl = '/sign-up';
        this.loginUrl = '/login';
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent.prototype.watchIntro = function () {
        this.store$.dispatch(new _root_store__WEBPACK_IMPORTED_MODULE_3__["CommonStoreActions"].WatchIntroAction);
    };
    WelcomeComponent.prototype.onClickNewAccountBtn = function () {
        this.router.navigate([this.signupUrl]);
    };
    WelcomeComponent.prototype.onClickLoginBtn = function () {
        this.router.navigate([this.loginUrl]);
    };
    WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/auth/components/welcome/welcome.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./welcome.component.scss */ "./src/app/auth/components/welcome/welcome.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/app/core/authentication/authentication.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/core/authentication/authentication.service.ts ***!
  \***************************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http/api.service */ "./src/app/core/http/api.service.ts");



var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(apiService) {
        this.apiService = apiService;
    }
    AuthenticationService.prototype.signUp = function (email) {
        return this.apiService.signupWithEmail(email).subscribe(function (data) {
            return data;
        }, function (error) {
            return error;
        });
    };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication/authentication.service */ "./src/app/core/authentication/authentication.service.ts");
/* harmony import */ var _http_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./http/api.service */ "./src/app/core/http/api.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
            ],
            providers: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
                _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
                _http_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/http/api.service.ts":
/*!******************************************!*\
  !*** ./src/app/core/http/api.service.ts ***!
  \******************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.API_URL = 'http://cuz-test-dot-cuz-tech.appspot.com';
        this.API_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImZ1cmthbnptY0BvdXRsb29rLmNvbSIsIm9yaWdfaWF0IjoxNTQ2NTY4MzQxLCJ1c2VyX2lkIjo4NiwiZW1haWwiOiJmdXJrYW56bWNAb3V0bG9vay5jb20iLCJleHAiOjE1NDkxNjAzNDF9.BZeopEK0o9UkcXnuYoVOdIhdxnsfnH_tHhYrRI66fyw';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        this.httpOptionsPrice = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': 'JWT ' + this.API_TOKEN
            })
        };
    }
    // Sign With Email into Cuz
    ApiService.prototype.signupWithEmail = function (email) {
        return this.http.post(this.API_URL + "/register/", {
            email: email
        }, this.httpOptions);
    };
    // Login With Email and Password(Account PW or Temp PW)
    ApiService.prototype.login = function (platform, email, password) {
        return this.http.post(this.API_URL + "/login/", {
            platform: platform,
            email: email,
            password: password
        }, this.httpOptions);
    };
    // Request Temp Password to login, signup or reset password
    ApiService.prototype.requestTempPassword = function (password_type, email) {
        return this.http.post(this.API_URL + "/users/temporary-password/", {
            password_type: password_type,
            email: email
        }, this.httpOptions);
    };
    // Get List of Langs
    ApiService.prototype.getListOfLanguages = function () {
        return this.http.get(this.API_URL + "/languages/", this.httpOptionsPrice);
    };
    // Get List of Nature
    ApiService.prototype.getListOfNatuers = function () {
        return this.http.get(this.API_URL + "/nature-groups/", this.httpOptionsPrice);
    };
    // Create Job Document
    ApiService.prototype.createJobDocument = function (request) {
        return this.http.post(this.API_URL + "/jobs/documents/", request, this.httpOptionsPrice);
    };
    // Upload to the Google Cloud Storage with job document Url of the job document instance.
    ApiService.prototype.uploadToStorage = function (url, file) {
        return this.http.post(url, { data: file }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Access-Control-Allow-Origin': 'http://localhost:4200'
            })
        });
    };
    // Check status of document
    ApiService.prototype.checkStatusOfDoc = function (fileId) {
        return this.http.get(this.API_URL + "/jobs/documents/" + fileId, this.httpOptionsPrice);
    };
    // Get Document from API
    ApiService.prototype.getDocument = function (fileId) {
        return this.http.get(this.API_URL + "/jobs/documents/" + fileId, this.httpOptionsPrice);
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/dashboard/components/doc-trans-project-card/doc-trans-project-card.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/dashboard/components/doc-trans-project-card/doc-trans-project-card.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"project-card row\">\n  <div class=\"col-sm-6 project-left-col\">\n    <div class=\"lang row\">\n      <div class=\"col-sm-6 source-lang\">\n        <app-select-lang type=\"source\"></app-select-lang>\n        \n      </div>\n      <div class=\"col-sm-6 target-lang\">\n        <app-select-lang type=\"target\"></app-select-lang>\n      </div>\n    </div>\n    <div class=\"detail\">\n      <input \n        type=\"text\" \n        class=\"project-detail-input title\" \n        name=\"title\"\n        maxlength=\"256\"\n        autofocus=\"true\"\n        required\n        (click)=\"onClickHandler($event)\"\n        placeholder=\"Project Title\" />\n      <app-doc-uploader></app-doc-uploader>\n      <app-doc-type-selector></app-doc-type-selector>\n      <div \n        class=\"project-detail-picker dress-code\"\n        (click)=\"onClickHandler($event)\"\n        >\n        Dress Code\n      </div>\n      <textarea \n        type=\"textarea\" \n        class=\"note-field\" \n        name=\"note\" \n        placeholder=\"Add Note\"></textarea>\n    </div>\n  </div>\n  <div class=\"col-sm-6 project-right-col\">\n      <div class=\"row heading\">\n        <div class=\"col-sm-8 text-div\">\n          <h3>Heading</h3>\n          <p>This is some text inside of a div block.</p>\n        </div>\n        <div class=\"col-sm-4 checkbox-div\">\n            <app-custom-switch></app-custom-switch>\n        </div>\n      </div>\n      <app-deadline-selector></app-deadline-selector>\n      <div class=\"price-wrapper\">\n        <div class=\"price-item-wrapper duration\">\n          <div class=\"price-item-text\">DURATION</div>\n          <div class=\"price-item-back\">\n            <div class=\"price-item-amount\">2 Hours</div>\n          </div>\n        </div> \n        <div class=\"price-item-wrapper project-amount\">\n          <div class=\"price-item-text\">PROJECT AMOUNT</div>\n          <div class=\"price-item-back\">\n            <div class=\"price-item-amount\">C$ 123</div>\n          </div>\n        </div>\n        <div class=\"price-item-wrapper tax\">\n          <div class=\"price-item-text\">TAX</div>\n          <div class=\"price-item-back\">\n            <div class=\"price-item-amount\">C$ 17</div>\n          </div>\n        </div>\n        <div class=\"price-item-wrapper final-fee\">\n          <div class=\"price-item-text\">FINAL FEE</div>\n          <div class=\"price-item-back\">\n            <div class=\"price-item-amount\">C$ 140</div>\n          </div>\n        </div> \n      </div>\n  </div>\n</div>\n<div class=\"button-row row\">\n  <app-login-section-button>\n    FIND TRANSLATOR NOW\n  </app-login-section-button>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/components/doc-trans-project-card/doc-trans-project-card.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/dashboard/components/doc-trans-project-card/doc-trans-project-card.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".project-card {\n  padding: 20px;\n  border-radius: 20px;\n  margin: 0;\n  background-color: white;\n  justify-content: center;\n  overflow: hidden; }\n  .project-card .project-left-col .lang {\n    height: 15%;\n    align-items: center;\n    justify-content: center;\n    margin-right: 30px; }\n  .project-card .project-left-col .detail {\n    display: flex;\n    flex-direction: column;\n    padding-right: 30px; }\n  .project-card .project-left-col .detail input, .project-card .project-left-col .detail .project-detail-input {\n      display: block;\n      height: 38px;\n      padding: 25px 20px;\n      font-weight: 700;\n      border: none;\n      border-bottom: 1px solid #EDEDED;\n      margin-bottom: 10px;\n      font-size: 18px;\n      color: #333;\n      background-color: #fff; }\n  .project-card .project-left-col .detail input:focus, .project-card .project-left-col .detail .project-detail-input:focus {\n        outline: none; }\n  .project-card .project-left-col .detail input::-webkit-input-placeholder, .project-card .project-left-col .detail .project-detail-input::-webkit-input-placeholder {\n        font-weight: 700;\n        font-size: 18px; }\n  .project-card .project-left-col .detail input::-ms-input-placeholder, .project-card .project-left-col .detail .project-detail-input::-ms-input-placeholder {\n        font-weight: 700;\n        font-size: 18px; }\n  .project-card .project-left-col .detail input::placeholder, .project-card .project-left-col .detail .project-detail-input::placeholder {\n        font-weight: 700;\n        font-size: 18px; }\n  .project-card .project-left-col .detail input.title, .project-card .project-left-col .detail .project-detail-input.title {\n        border-bottom-color: #607CF1;\n        background-image: none;\n        color: #607CF1; }\n  .project-card .project-left-col .detail input.title::-webkit-input-placeholder, .project-card .project-left-col .detail .project-detail-input.title::-webkit-input-placeholder {\n          color: #607CF1; }\n  .project-card .project-left-col .detail input.title::-ms-input-placeholder, .project-card .project-left-col .detail .project-detail-input.title::-ms-input-placeholder {\n          color: #607CF1; }\n  .project-card .project-left-col .detail input.title::placeholder, .project-card .project-left-col .detail .project-detail-input.title::placeholder {\n          color: #607CF1; }\n  .project-card .project-left-col .detail .project-detail-picker {\n      cursor: pointer;\n      margin-bottom: 10px;\n      height: 50px;\n      padding: 10px 20px 9px 56px;\n      border-bottom: solid 1px #EDEDED;\n      font-size: 18px;\n      font-weight: 700;\n      color: #8E8E8E;\n      background-repeat: no-repeat; }\n  .project-card .project-left-col .detail .project-detail-picker.dress-code {\n        background-image: url('dress-code-icon.png');\n        background-position: 21px 50%;\n        background-size: 17px; }\n  .project-card .project-left-col .detail .note-field {\n      height: 80px;\n      padding-left: 56px;\n      border-style: none none solid;\n      border-width: 1px;\n      border-color: black black #EBC83C;\n      background-image: url('note-icon.png');\n      background-position: 18px 8px;\n      background-size: 24px;\n      background-repeat: no-repeat;\n      color: #EBC83C;\n      font-size: 18px;\n      font-weight: 600; }\n  .project-card .project-left-col .detail .note-field:focus {\n        outline: none; }\n  .project-card .project-left-col .detail .note-field::-webkit-input-placeholder {\n        color: #EBC83C; }\n  .project-card .project-left-col .detail .note-field::-ms-input-placeholder {\n        color: #EBC83C; }\n  .project-card .project-left-col .detail .note-field::placeholder {\n        color: #EBC83C; }\n  .project-card .project-right-col .heading {\n    display: flex;\n    margin: 0;\n    justify-content: space-between;\n    align-items: center;\n    border-radius: 10px;\n    background-color: #F8F8F8;\n    color: #464646; }\n  .project-card .project-right-col .heading .text-div {\n      width: 80%;\n      padding: 15px; }\n  .project-card .project-right-col .heading .text-div h3 {\n        margin: 0;\n        font-size: 18px;\n        line-height: 160%;\n        font-weight: 700; }\n  .project-card .project-right-col .heading .text-div p {\n        font-size: 14px;\n        margin: 0; }\n  .project-card .project-right-col .heading .checkbox-div {\n      display: flex;\n      align-items: center;\n      justify-content: flex-end;\n      height: 100%;\n      margin-top: 10px; }\n  .project-card .project-right-col .project-detail-picker {\n    cursor: pointer;\n    margin-bottom: 10px;\n    height: 50px;\n    padding: 10px 20px 9px 56px;\n    border-bottom: solid 1px #EDEDED;\n    font-size: 18px;\n    font-weight: 700;\n    color: #8E8E8E;\n    background-repeat: no-repeat; }\n  .project-card .project-right-col .project-detail-picker.date {\n      background-image: url('nature-icon.png');\n      background-position: 20px 50%;\n      background-size: 15px; }\n  .project-card .project-right-col .price-wrapper {\n    display: flex;\n    margin-top: 20px;\n    margin-right: -65px;\n    flex-direction: column;\n    justify-content: center;\n    align-items: flex-end; }\n  .project-card .project-right-col .price-wrapper ul {\n      display: flex;\n      list-style: none; }\n  .project-card .project-right-col .price-wrapper ul li.value {\n        width: 30%; }\n  .project-card .project-right-col .price-wrapper .price-item-wrapper {\n      display: flex;\n      margin-bottom: 10px;\n      justify-content: center;\n      align-items: center; }\n  .project-card .project-right-col .price-wrapper .price-item-wrapper .price-item-text {\n        margin-right: 15px;\n        color: #23B7BB; }\n  .project-card .project-right-col .price-wrapper .price-item-wrapper .price-item-back {\n        display: flex;\n        width: 200px;\n        height: 40px;\n        padding-left: 20px;\n        border-top-left-radius: 50px;\n        border-bottom-left-radius: 50px;\n        justify-content: flex-start;\n        align-items: center;\n        background-color: #E8FEFF; }\n  .project-card .project-right-col .price-wrapper .price-item-wrapper .price-item-back .price-item-amount {\n          color: #23B7BB;\n          font-weight: 700; }\n  .project-card .project-right-col .price-wrapper .price-item-wrapper.duration .price-item-text {\n        color: #23B7BB; }\n  .project-card .project-right-col .price-wrapper .price-item-wrapper.duration .price-item-back {\n        background-color: #E8FEFF; }\n  .project-card .project-right-col .price-wrapper .price-item-wrapper.duration .price-item-back .price-item-amount {\n          color: #23B7BB; }\n  .project-card .project-right-col .price-wrapper .price-item-wrapper.project-amount .price-item-text {\n        color: #8E8E8E; }\n  .project-card .project-right-col .price-wrapper .price-item-wrapper.project-amount .price-item-back {\n        background-color: #EDEDED; }\n  .project-card .project-right-col .price-wrapper .price-item-wrapper.project-amount .price-item-back .price-item-amount {\n          color: #8E8E8E; }\n  .project-card .project-right-col .price-wrapper .price-item-wrapper.tax .price-item-text {\n        color: #8E8E8E; }\n  .project-card .project-right-col .price-wrapper .price-item-wrapper.tax .price-item-back {\n        background-color: #EDEDED; }\n  .project-card .project-right-col .price-wrapper .price-item-wrapper.tax .price-item-back .price-item-amount {\n          color: #8E8E8E; }\n  .project-card .project-right-col .price-wrapper .price-item-wrapper.final-fee .price-item-text {\n        color: #44D85C; }\n  .project-card .project-right-col .price-wrapper .price-item-wrapper.final-fee .price-item-back {\n        background-color: #E6FFDE; }\n  .project-card .project-right-col .price-wrapper .price-item-wrapper.final-fee .price-item-back .price-item-amount {\n          color: #44D85C; }\n  .button-row {\n  display: flex;\n  margin: 0;\n  margin-top: 20px;\n  justify-content: flex-end; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2NvbXBvbmVudHMvZG9jLXRyYW5zLXByb2plY3QtY2FyZC9HOlxcUHJvamVjdFxcT3JoYW5DYW0tRnJvbnRFbmRcXHdvcmtcXGN1endlYmFwcC9zcmNcXGFwcFxcZGFzaGJvYXJkXFxjb21wb25lbnRzXFxkb2MtdHJhbnMtcHJvamVjdC1jYXJkXFxkb2MtdHJhbnMtcHJvamVjdC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvY29tcG9uZW50cy9kb2MtdHJhbnMtcHJvamVjdC1jYXJkL0c6XFxQcm9qZWN0XFxPcmhhbkNhbS1Gcm9udEVuZFxcd29ya1xcY3V6d2ViYXBwL3NyY1xcYXNzZXRzXFxzY3NzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxjQUFhO0VBQ2Isb0JBQW1CO0VBQ25CLFVBQVM7RUFDVCx3QkFBdUI7RUFDdkIsd0JBQXVCO0VBQ3ZCLGlCQUFnQixFQXNQbkI7RUE1UEQ7SUFTWSxZQUFXO0lBQ1gsb0JBQW1CO0lBQ25CLHdCQUF1QjtJQUN2QixtQkFBa0IsRUFDckI7RUFiVDtJQWVZLGNBQWE7SUFDYix1QkFBc0I7SUFDdEIsb0JBQW1CLEVBaUV0QjtFQWxGVDtNQW1CZ0IsZUFBYztNQUNkLGFBQVk7TUFDWixtQkFBa0I7TUFDbEIsaUJBQWdCO01BQ2hCLGFBQVk7TUFDWixpQ0NKRDtNREtDLG9CQUFtQjtNQUNuQixnQkFBZTtNQUNmLFlBQVc7TUFDWCx1QkFBc0IsRUFnQnpCO0VBNUNiO1FBOEJvQixjQUFhLEVBQ2hCO0VBL0JqQjtRQWlDb0IsaUJBQWdCO1FBQ2hCLGdCQUFlLEVBQ2xCO0VBbkNqQjtRQWlDb0IsaUJBQWdCO1FBQ2hCLGdCQUFlLEVBQ2xCO0VBbkNqQjtRQWlDb0IsaUJBQWdCO1FBQ2hCLGdCQUFlLEVBQ2xCO0VBbkNqQjtRQXFDb0IsNkJDcENBO1FEcUNBLHVCQUFzQjtRQUN0QixlQ3RDQSxFRDBDSDtFQTNDakI7VUF5Q3dCLGVDeENKLEVEeUNDO0VBMUNyQjtVQXlDd0IsZUN4Q0osRUR5Q0M7RUExQ3JCO1VBeUN3QixlQ3hDSixFRHlDQztFQTFDckI7TUE4Q2dCLGdCQUFlO01BQ2Ysb0JBQW1CO01BQ25CLGFBQVk7TUFDWiw0QkFBMkI7TUFDM0IsaUNDOUJEO01EK0JDLGdCQUFlO01BQ2YsaUJBQWdCO01BQ2hCLGVDbkNGO01Eb0NFLDZCQUE0QixFQU0vQjtFQTVEYjtRQXdEb0IsNkNBQXVCO1FBQ3ZCLDhCQUE2QjtRQUM3QixzQkFBcUIsRUFDeEI7RUEzRGpCO01BK0RnQixhQUFZO01BQ1osbUJBQWtCO01BQ2xCLDhCQUE2QjtNQUM3QixrQkFBaUI7TUFDakIsa0NDN0RGO01EOERFLHVDQUF1QjtNQUN2Qiw4QkFBNkI7TUFDN0Isc0JBQXFCO01BQ3JCLDZCQUE0QjtNQUM1QixlQ2xFRjtNRG1FRSxnQkFBZTtNQUNmLGlCQUFnQixFQU9uQjtFQWpGYjtRQTRFb0IsY0FBYSxFQUNoQjtFQTdFakI7UUErRW9CLGVDekVOLEVEMEVHO0VBaEZqQjtRQStFb0IsZUN6RU4sRUQwRUc7RUFoRmpCO1FBK0VvQixlQ3pFTixFRDBFRztFQWhGakI7SUF1RlksY0FBYTtJQUNiLFVBQVM7SUFJVCwrQkFBOEI7SUFJOUIsb0JBQW1CO0lBQ25CLG9CQUFtQjtJQUNuQiwwQkM3RVM7SUQ4RVQsZUNsRk0sRUR3R1Q7RUF6SFQ7TUFxR2dCLFdBQVU7TUFDVixjQUFhLEVBV2hCO0VBakhiO1FBd0dvQixVQUFTO1FBQ1QsZ0JBQWU7UUFDZixrQkFBaUI7UUFDakIsaUJBQWdCLEVBQ25CO0VBNUdqQjtRQThHb0IsZ0JBQWU7UUFDZixVQUFTLEVBQ1o7RUFoSGpCO01BbUhnQixjQUFhO01BQ2Isb0JBQW1CO01BQ25CLDBCQUF5QjtNQUN6QixhQUFZO01BQ1osaUJBQWdCLEVBQ25CO0VBeEhiO0lBNEhZLGdCQUFlO0lBQ2Ysb0JBQW1CO0lBQ25CLGFBQVk7SUFDWiw0QkFBMkI7SUFDM0IsaUNDNUdHO0lENkdILGdCQUFlO0lBQ2YsaUJBQWdCO0lBQ2hCLGVDakhFO0lEa0hGLDZCQUE0QixFQU0vQjtFQTFJVDtNQXNJZ0IseUNBQXVCO01BQ3ZCLDhCQUE2QjtNQUM3QixzQkFBcUIsRUFDeEI7RUF6SWI7SUE2SVksY0FBYTtJQUNiLGlCQUFnQjtJQUNoQixvQkFBbUI7SUFLbkIsdUJBQXNCO0lBSXRCLHdCQUF1QjtJQUl2QixzQkFBcUIsRUE2RnhCO0VBelBUO01BOEpnQixjQUFhO01BQ2IsaUJBQWdCLEVBTW5CO0VBcktiO1FBa0t3QixXQUFVLEVBQ2I7RUFuS3JCO01Bd0tnQixjQUFhO01BQ2Isb0JBQW1CO01BSW5CLHdCQUF1QjtNQUl2QixvQkFBbUIsRUF1RXRCO0VBeFBiO1FBbUxvQixtQkFBa0I7UUFDbEIsZUNsTEQsRURtTEY7RUFyTGpCO1FBdUxvQixjQUFhO1FBQ2IsYUFBWTtRQUNaLGFBQVk7UUFDWixtQkFBa0I7UUFDbEIsNkJBQTRCO1FBQzVCLGdDQUErQjtRQUkvQiw0QkFBMkI7UUFJM0Isb0JBQW1CO1FBQ25CLDBCQzNMTCxFRGdNRTtFQTFNakI7VUF1TXdCLGVDck1MO1VEc01LLGlCQUFnQixFQUNuQjtFQXpNckI7UUE4TXdCLGVDNU1MLEVENk1FO0VBL01yQjtRQWlOd0IsMEJDdk1ULEVEMk1NO0VBck5yQjtVQW1ONEIsZUNqTlQsRURrTk07RUFwTnpCO1FBeU53QixlQ3ZNVixFRHdNTztFQTFOckI7UUE0TndCLDBCQ3hNVCxFRDRNTTtFQWhPckI7VUE4TjRCLGVDNU1kLEVENk1XO0VBL056QjtRQW9Pd0IsZUNsTlYsRURtTk87RUFyT3JCO1FBdU93QiwwQkNuTlQsRUR1Tk07RUEzT3JCO1VBeU80QixlQ3ZOZCxFRHdOVztFQTFPekI7UUErT3dCLGVDM09KLEVENE9DO0VBaFByQjtRQWtQd0IsMEJDdE9OLEVEME9HO0VBdFByQjtVQW9QNEIsZUNoUFIsRURpUEs7RUFTekI7RUFDSSxjQUFhO0VBQ2IsVUFBUztFQUNULGlCQUFnQjtFQUNoQiwwQkFDSixFQUFDIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2NvbXBvbmVudHMvZG9jLXRyYW5zLXByb2plY3QtY2FyZC9kb2MtdHJhbnMtcHJvamVjdC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInZhcmlhYmxlc1wiO1xyXG5cclxuLnByb2plY3QtY2FyZCB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLnByb2plY3QtbGVmdC1jb2wge1xyXG4gICAgICAgIC5sYW5nIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNSU7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICAgICAgfSAgIFxyXG4gICAgICAgIC5kZXRhaWwge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICBpbnB1dCwgLnByb2plY3QtZGV0YWlsLWlucHV0IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMjVweCAyMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkc21va2U7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICRyb3lhbC1ibHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRyb3lhbC1ibHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICY6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRyb3lhbC1ibHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvamVjdC1kZXRhaWwtcGlja2VyIHtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHggOXB4IDU2cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggJHNtb2tlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkZ3JleTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgICAmLmRyZXNzLWNvZGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgjeyRpbWctcGF0aH0vZHJlc3MtY29kZS1pY29uLnBuZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMjFweCA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxN3B4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubm90ZS1maWVsZCB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDU2cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItc3R5bGU6IG5vbmUgbm9uZSBzb2xpZDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiBibGFjayBibGFjayAkZ29sZDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgjeyRpbWctcGF0aH0vbm90ZS1pY29uLnBuZyk7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxOHB4IDhweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJGdvbGQ7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGdvbGQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2plY3QtcmlnaHQtY29sIHtcclxuICAgICAgICAuaGVhZGluZyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcclxuICAgICAgICAgICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGUtc21va2U7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkZGltLWdyZXk7XHJcbiAgICAgICAgICAgIC50ZXh0LWRpdiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNjAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jaGVja2JveC1kaXYge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnByb2plY3QtZGV0YWlsLXBpY2tlciB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHggOXB4IDU2cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAkc21va2U7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgY29sb3I6ICRncmV5O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAmLmRhdGUge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCN7JGltZy1wYXRofS9uYXR1cmUtaWNvbi5wbmcpO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMjBweCA1MCU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wcmljZS13cmFwcGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAtNjVweDtcclxuICAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgICAgICAgICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XHJcbiAgICAgICAgICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcclxuICAgICAgICAgICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGVuZDtcclxuICAgICAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgIC1tcy1mbGV4LWFsaWduOiBlbmQ7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJi52YWx1ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAucHJpY2UtaXRlbS13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgLnByaWNlLWl0ZW0tdGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkc2VhLWdyZWVuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnByaWNlLWl0ZW0tYmFjayB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtcGFjazogc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgLW1zLWZsZXgtcGFjazogc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXp1cmU7XHJcbiAgICAgICAgICAgICAgICAgICAgLnByaWNlLWl0ZW0tYW1vdW50IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRzZWEtZ3JlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICYuZHVyYXRpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIC5wcmljZS1pdGVtLXRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHNlYS1ncmVlbjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnByaWNlLWl0ZW0tYmFjayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhenVyZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnByaWNlLWl0ZW0tYW1vdW50IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkc2VhLWdyZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi5wcm9qZWN0LWFtb3VudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgLnByaWNlLWl0ZW0tdGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkZ3JleTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnByaWNlLWl0ZW0tYmFjayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzbW9rZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnByaWNlLWl0ZW0tYW1vdW50IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkZ3JleTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYudGF4IHtcclxuICAgICAgICAgICAgICAgICAgICAucHJpY2UtaXRlbS10ZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRncmV5O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucHJpY2UtaXRlbS1iYWNrIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNtb2tlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAucHJpY2UtaXRlbS1hbW91bnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRncmV5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi5maW5hbC1mZWUge1xyXG4gICAgICAgICAgICAgICAgICAgIC5wcmljZS1pdGVtLXRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGxpbWUtZ3JlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wcmljZS1pdGVtLWJhY2sge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaG9uZXlkZXc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wcmljZS1pdGVtLWFtb3VudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGxpbWUtZ3JlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuLmJ1dHRvbi1yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kXHJcbn0iLCIkZm9udC1mYW1pbHk6IFF1aWNrc2FuZCxzYW5zLXNlcmlmO1xyXG4kaW1nLXBhdGg6IFwic3JjL2Fzc2V0cy9pbWdzXCI7XHJcblxyXG4kcm95YWwtYmx1ZTogIzYwN0NGMTtcclxuJHNlYS1ncmVlbjogIzIzQjdCQjtcclxuJHB1cnBsZTogIzlDNkJDRTtcclxuJGxpbWUtZ3JlZW46ICM0NEQ4NUM7XHJcbiRibHVlOiAjMEE3MkY0O1xyXG4kZ29sZDogI0VCQzgzQztcclxuJHJlZDogI0VCNUEyRDtcclxuXHJcbiRsYXZlbmRlcjogI0VBRUVGRjtcclxuJGF6dXJlOiAjRThGRUZGO1xyXG4kcGluay1sYXZlbmRlcjogI0YxRTRGRjtcclxuJGhvbmV5ZGV3OiAjRTZGRkRFO1xyXG4kYWxpY2UtYmx1ZTogI0RFRURGRjtcclxuJGNvcm5zaWxrOiAjRkZGOERDO1xyXG4kbWlzdHktcm9zZTogI0ZGRThFMTtcclxuXHJcbiRkaW0tZ3JleTogIzQ2NDY0NjtcclxuJGdyZXk6ICM4RThFOEU7XHJcbiRsaWdodC1ncmV5OiAjRDRENEQ0O1xyXG4kc21va2U6ICNFREVERUQ7XHJcbiR3aGl0ZS1zbW9rZTogI0Y4RjhGODtcclxuIl19 */"

/***/ }),

/***/ "./src/app/dashboard/components/doc-trans-project-card/doc-trans-project-card.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/dashboard/components/doc-trans-project-card/doc-trans-project-card.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: DocTransProjectCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocTransProjectCardComponent", function() { return DocTransProjectCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DocTransProjectCardComponent = /** @class */ (function () {
    function DocTransProjectCardComponent() {
    }
    DocTransProjectCardComponent.prototype.ngOnInit = function () {
    };
    DocTransProjectCardComponent.prototype.onClickHandler = function (event) {
    };
    DocTransProjectCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-doc-trans-project-card',
            template: __webpack_require__(/*! ./doc-trans-project-card.component.html */ "./src/app/dashboard/components/doc-trans-project-card/doc-trans-project-card.component.html"),
            styles: [__webpack_require__(/*! ./doc-trans-project-card.component.scss */ "./src/app/dashboard/components/doc-trans-project-card/doc-trans-project-card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DocTransProjectCardComponent);
    return DocTransProjectCardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/header/header.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard/components/header/header.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"find-job-section-heading\">\n  <a href=\"/\" class=\"logo\"></a>\n  <div class=\"find-job-section-nav\">\n    <div class=\"nav-content-title\">\n      There are some text inside of a div block\n    </div>\n    <div class=\"nav-content-menus\">\n      <nav>\n\n      </nav>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/components/header/header.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard/components/header/header.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".find-job-section-heading {\n  display: flex;\n  width: 100%;\n  height: 90px;\n  justify-content: flex-start; }\n  .find-job-section-heading a.logo {\n    width: 20%;\n    min-width: 240px;\n    background-image: url('cuz-white-logo-text.png');\n    background-size: 100px;\n    background-repeat: no-repeat;\n    background-position: 50% 50%; }\n  .find-job-section-heading .find-job-section-nav {\n    display: flex;\n    width: 80%;\n    margin-right: 25px;\n    margin-left: 25px;\n    padding-right: 10px;\n    padding-left: 10px;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 1px solid #fff; }\n  .find-job-section-heading .find-job-section-nav .nav-content-title {\n      display: block;\n      margin-right: auto;\n      margin-left: auto;\n      color: #fff;\n      font-weight: 700;\n      font-size: 18px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2NvbXBvbmVudHMvaGVhZGVyL0c6XFxQcm9qZWN0XFxPcmhhbkNhbS1Gcm9udEVuZFxcd29ya1xcY3V6d2ViYXBwL3NyY1xcYXBwXFxkYXNoYm9hcmRcXGNvbXBvbmVudHNcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksY0FBYTtFQUNiLFlBQVc7RUFDWCxhQUFZO0VBSVosNEJBQTJCLEVBc0M5QjtFQTdDRDtJQVNRLFdBQVU7SUFDVixpQkFBZ0I7SUFDaEIsaURBQXVCO0lBQ3ZCLHVCQUFzQjtJQUN0Qiw2QkFBNEI7SUFDNUIsNkJBQTRCLEVBQy9CO0VBZkw7SUFtQlEsY0FBYTtJQUNiLFdBQVU7SUFDVixtQkFBa0I7SUFDbEIsa0JBQWlCO0lBQ2pCLG9CQUFtQjtJQUNuQixtQkFBa0I7SUFFbEIsb0JBQW1CO0lBSW5CLCtCQUE4QjtJQUk5QixvQkFBbUI7SUFDbkIsOEJBQTZCLEVBU2hDO0VBNUNMO01BcUNZLGVBQWM7TUFDZCxtQkFBa0I7TUFDbEIsa0JBQWlCO01BQ2pCLFlBQVc7TUFDWCxpQkFBZ0I7TUFDaEIsZ0JBQWUsRUFDbEIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInZhcmlhYmxlc1wiO1xyXG5cclxuLmZpbmQtam9iLXNlY3Rpb24taGVhZGluZyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICAtd2Via2l0LWJveC1wYWNrOiBzdGFydDtcclxuICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgLW1zLWZsZXgtcGFjazogc3RhcnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhLmxvZ28ge1xyXG4gICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgbWluLXdpZHRoOiAyNDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoI3skaW1nLXBhdGh9L2N1ei13aGl0ZS1sb2dvLXRleHQucG5nKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuICAgIH1cclxuICAgIC5maW5kLWpvYi1zZWN0aW9uLW5hdiB7XHJcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xyXG4gICAgICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcclxuICAgICAgICAubmF2LWNvbnRlbnQtdGl0bGUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/components/header/header.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard/components/header/header.component.ts ***!
  \*****************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dashboard-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/dashboard/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/dashboard/components/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/job-types/job-types.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard/components/job-types/job-types.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"job-type-wrapper\">\n  <div class=\"job-type-wrapper-header\">\n    Select a job type to start!\n  </div>\n  <app-job-button job_type=\"on-site-interpretation\" dest=\"dashboard/on-site-project\"></app-job-button>\n  <app-job-button job_type=\"document-translation\" dest=\"dashboard/doc-trans-project\"></app-job-button>\n  <app-job-button job_type=\"video-audio-interpretation\" dest='/'></app-job-button>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/components/job-types/job-types.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard/components/job-types/job-types.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".job-type-wrapper {\n  display: flex;\n  padding: 20px;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center; }\n  .job-type-wrapper .job-type-wrapper-header {\n    color: white;\n    margin-bottom: 40px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2NvbXBvbmVudHMvam9iLXR5cGVzL0c6XFxQcm9qZWN0XFxPcmhhbkNhbS1Gcm9udEVuZFxcd29ya1xcY3V6d2ViYXBwL3NyY1xcYXBwXFxkYXNoYm9hcmRcXGNvbXBvbmVudHNcXGpvYi10eXBlc1xcam9iLXR5cGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYTtFQUNiLGNBQWE7RUFLYix1QkFBc0I7RUFJdEIsd0JBQXVCO0VBSXZCLG9CQUFtQixFQUt0QjtFQXBCRDtJQWlCUSxhQUFZO0lBQ1osb0JBQW1CLEVBQ3RCIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2NvbXBvbmVudHMvam9iLXR5cGVzL2pvYi10eXBlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5qb2ItdHlwZS13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLmpvYi10eXBlLXdyYXBwZXItaGVhZGVyIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/components/job-types/job-types.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard/components/job-types/job-types.component.ts ***!
  \***********************************************************************/
/*! exports provided: JobTypesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobTypesComponent", function() { return JobTypesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var JobTypesComponent = /** @class */ (function () {
    function JobTypesComponent() {
    }
    JobTypesComponent.prototype.ngOnInit = function () {
    };
    JobTypesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-job-types',
            template: __webpack_require__(/*! ./job-types.component.html */ "./src/app/dashboard/components/job-types/job-types.component.html"),
            styles: [__webpack_require__(/*! ./job-types.component.scss */ "./src/app/dashboard/components/job-types/job-types.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], JobTypesComponent);
    return JobTypesComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/on-site-project-card/on-site-project-card.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/dashboard/components/on-site-project-card/on-site-project-card.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"project-card row\">                                                                                  \n  <div class=\"col-sm-6 project-left-col\">\n    <div class=\"lang row\">\n      <div class=\"col-sm-6 source-lang\">\n        <app-select-lang type=\"source\" color=\"sea-green\"></app-select-lang>\n        \n      </div>\n      <div class=\"col-sm-6 target-lang\">\n        <app-select-lang type=\"target\" color=\"sea-green\"></app-select-lang>\n      </div>\n    </div>\n    <div class=\"detail\">\n      <app-location-selector></app-location-selector>\n      <input \n        type=\"text\" \n        class=\"project-detail-input title\" \n        name=\"title\"\n        maxlength=\"256\"\n        autofocus=\"true\"\n        required\n        (click)=\"onClickHandler($event)\"\n        placeholder=\"Project Title\" />\n      <app-doc-type-selector></app-doc-type-selector>\n      <div \n        class=\"project-detail-picker dress-code\"\n        (click)=\"onClickHandler($event)\"\n        >\n        Dress Code\n      </div>\n      <textarea \n        type=\"textarea\" \n        class=\"note-field\" \n        name=\"note\" \n        placeholder=\"Add Note\"></textarea>\n    </div>\n  </div>\n  <div class=\"col-sm-6 project-right-col\">\n      <div class=\"row heading\">\n        <div class=\"col-sm-8 text-div\">\n          <h3>Heading</h3>\n          <p>This is some text inside of a div block.</p>\n        </div>\n        <div class=\"col-sm-4 checkbox-div\">\n            <app-custom-switch></app-custom-switch>\n        </div>\n      </div>\n      <div \n        class=\"project-detail-picker date\"\n        (click)=\"onClickHandler($event)\"\n        >\n        Appointment Starts At\n      </div>\n      <div \n        class=\"project-detail-picker date\"\n        (click)=\"onClickHandler($event)\"\n        >\n        Appointment Ends At                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   \n      </div>\n      <div class=\"price-wrapper\">\n        <div class=\"price-item-wrapper duration\">\n          <div class=\"price-item-text\">DURATION</div>\n          <div class=\"price-item-back\">\n            <div class=\"price-item-amount\">2 Hours</div>\n          </div>\n        </div> \n        <div class=\"price-item-wrapper project-amount\">\n          <div class=\"price-item-text\">PROJECT AMOUNT</div>\n          <div class=\"price-item-back\">\n            <div class=\"price-item-amount\">C$ 123</div>\n          </div>\n        </div>\n        <div class=\"price-item-wrapper tax\">\n          <div class=\"price-item-text\">TAX</div>\n          <div class=\"price-item-back\">\n            <div class=\"price-item-amount\">C$ 17</div>\n          </div>\n        </div>\n        <div class=\"price-item-wrapper final-fee\">\n          <div class=\"price-item-text\">FINAL FEE</div>\n          <div class=\"price-item-back\">\n            <div class=\"price-item-amount\">C$ 140</div>\n          </div>\n        </div> \n      </div>\n  </div>\n</div>\n<div class=\"button-row row\">\n  <app-login-section-button>\n    FIND INTERPRETER NOW\n  </app-login-section-button>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/components/on-site-project-card/on-site-project-card.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/dashboard/components/on-site-project-card/on-site-project-card.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".project-card {\n  padding: 20px;\n  border-radius: 20px;\n  margin: 0;\n  background-color: white;\n  justify-content: center;\n  overflow: hidden; }\n  .project-card .project-left-col .lang {\n    height: 15%;\n    align-items: center;\n    justify-content: center;\n    margin-right: 30px; }\n  .project-card .project-left-col .detail {\n    display: flex;\n    flex-direction: column;\n    padding-right: 30px; }\n  .project-card .project-left-col .detail input, .project-card .project-left-col .detail .project-detail-input {\n      display: block;\n      height: 38px;\n      padding: 25px 20px;\n      font-weight: 700;\n      border: none;\n      border-bottom: 1px solid #EDEDED;\n      margin-bottom: 10px;\n      font-size: 18px;\n      color: #333;\n      background-color: #fff; }\n  .project-card .project-left-col .detail input:focus, .project-card .project-left-col .detail .project-detail-input:focus {\n        outline: none; }\n  .project-card .project-left-col .detail input::-webkit-input-placeholder, .project-card .project-left-col .detail .project-detail-input::-webkit-input-placeholder {\n        font-weight: 700;\n        font-size: 18px; }\n  .project-card .project-left-col .detail input::-ms-input-placeholder, .project-card .project-left-col .detail .project-detail-input::-ms-input-placeholder {\n        font-weight: 700;\n        font-size: 18px; }\n  .project-card .project-left-col .detail input::placeholder, .project-card .project-left-col .detail .project-detail-input::placeholder {\n        font-weight: 700;\n        font-size: 18px; }\n  .project-card .project-left-col .detail input.title, .project-card .project-left-col .detail .project-detail-input.title {\n        border-bottom-color: #23B7BB;\n        background-image: none;\n        color: #23B7BB; }\n  .project-card .project-left-col .detail input.title::-webkit-input-placeholder, .project-card .project-left-col .detail .project-detail-input.title::-webkit-input-placeholder {\n          color: #23B7BB; }\n  .project-card .project-left-col .detail input.title::-ms-input-placeholder, .project-card .project-left-col .detail .project-detail-input.title::-ms-input-placeholder {\n          color: #23B7BB; }\n  .project-card .project-left-col .detail input.title::placeholder, .project-card .project-left-col .detail .project-detail-input.title::placeholder {\n          color: #23B7BB; }\n  .project-card .project-left-col .detail .project-detail-picker {\n      cursor: pointer;\n      margin-bottom: 10px;\n      height: 50px;\n      padding: 10px 20px 9px 56px;\n      border-bottom: solid 1px #EDEDED;\n      font-size: 18px;\n      font-weight: 700;\n      color: #8E8E8E;\n      background-repeat: no-repeat; }\n  .project-card .project-left-col .detail .project-detail-picker.nature {\n        background-image: url('nature-icon.png');\n        background-position: 20px 50%;\n        background-size: 15px; }\n  .project-card .project-left-col .detail .project-detail-picker.location {\n        background-image: url('location-icon.png');\n        background-position: 19px 50%;\n        background-size: 22px; }\n  .project-card .project-left-col .detail .project-detail-picker.dress-code {\n        background-image: url('dress-code-icon.png');\n        background-position: 21px 50%;\n        background-size: 17px; }\n  .project-card .project-left-col .detail .note-field {\n      height: 80px;\n      padding-left: 56px;\n      border-style: none none solid;\n      border-width: 1px;\n      border-color: black black #EBC83C;\n      background-image: url('note-icon.png');\n      background-position: 18px 8px;\n      background-size: 24px;\n      background-repeat: no-repeat;\n      color: #EBC83C;\n      font-size: 18px;\n      font-weight: 600; }\n  .project-card .project-left-col .detail .note-field:focus {\n        outline: none; }\n  .project-card .project-left-col .detail .note-field::-webkit-input-placeholder {\n        color: #EBC83C; }\n  .project-card .project-left-col .detail .note-field::-ms-input-placeholder {\n        color: #EBC83C; }\n  .project-card .project-left-col .detail .note-field::placeholder {\n        color: #EBC83C; }\n  .project-card .project-right-col .heading {\n    display: flex;\n    margin-bottom: 29px;\n    padding-right: 18px;\n    justify-content: space-between;\n    align-items: center;\n    border-radius: 10px;\n    background-color: #F8F8F8;\n    color: #464646;\n    margin: 0; }\n  .project-card .project-right-col .heading .text-div {\n      width: 80%;\n      padding: 15px; }\n  .project-card .project-right-col .heading .text-div h3 {\n        margin: 0;\n        font-size: 18px;\n        line-height: 160%;\n        font-weight: 700; }\n  .project-card .project-right-col .heading .text-div p {\n        font-size: 14px;\n        margin: 0; }\n  .project-card .project-right-col .heading .checkbox-div {\n      display: flex;\n      align-items: center;\n      justify-content: flex-end;\n      height: 100%;\n      margin-top: 10px; }\n  .project-card .project-right-col .project-detail-picker {\n    cursor: pointer;\n    margin-bottom: 10px;\n    height: 50px;\n    padding: 10px 20px 9px 56px;\n    border-bottom: solid 1px #EDEDED;\n    font-size: 18px;\n    font-weight: 700;\n    color: #8E8E8E;\n    background-repeat: no-repeat; }\n  .project-card .project-right-col .project-detail-picker.date {\n      background-image: url('nature-icon.png');\n      background-position: 20px 50%;\n      background-size: 15px; }\n  .project-card .project-right-col .price-wrapper {\n    display: flex;\n    margin-top: 20px;\n    margin-right: -65px;\n    flex-direction: column;\n    justify-content: center;\n    align-items: flex-end; }\n  .project-card .project-right-col .price-wrapper ul {\n      display: flex;\n      list-style: none; }\n  .project-card .project-right-col .price-wrapper ul li.value {\n        width: 30%; }\n  .project-card .project-right-col .price-wrapper .price-item-wrapper {\n      display: flex;\n      margin-bottom: 10px;\n      justify-content: center;\n      align-items: center; }\n  .project-card .project-right-col .price-wrapper .price-item-wrapper .price-item-text {\n        margin-right: 15px;\n        color: #23B7BB; }\n  .project-card .project-right-col .price-wrapper .price-item-wrapper .price-item-back {\n        display: flex;\n        width: 200px;\n        height: 40px;\n        padding-left: 20px;\n        border-top-left-radius: 50px;\n        border-bottom-left-radius: 50px;\n        justify-content: flex-start;\n        align-items: center;\n        background-color: #E8FEFF; }\n  .project-card .project-right-col .price-wrapper .price-item-wrapper .price-item-back .price-item-amount {\n          color: #23B7BB;\n          font-weight: 700; }\n  .project-card .project-right-col .price-wrapper .price-item-wrapper.duration .price-item-text {\n        color: #23B7BB; }\n  .project-card .project-right-col .price-wrapper .price-item-wrapper.duration .price-item-back {\n        background-color: #E8FEFF; }\n  .project-card .project-right-col .price-wrapper .price-item-wrapper.duration .price-item-back .price-item-amount {\n          color: #23B7BB; }\n  .project-card .project-right-col .price-wrapper .price-item-wrapper.project-amount .price-item-text {\n        color: #8E8E8E; }\n  .project-card .project-right-col .price-wrapper .price-item-wrapper.project-amount .price-item-back {\n        background-color: #EDEDED; }\n  .project-card .project-right-col .price-wrapper .price-item-wrapper.project-amount .price-item-back .price-item-amount {\n          color: #8E8E8E; }\n  .project-card .project-right-col .price-wrapper .price-item-wrapper.tax .price-item-text {\n        color: #8E8E8E; }\n  .project-card .project-right-col .price-wrapper .price-item-wrapper.tax .price-item-back {\n        background-color: #EDEDED; }\n  .project-card .project-right-col .price-wrapper .price-item-wrapper.tax .price-item-back .price-item-amount {\n          color: #8E8E8E; }\n  .project-card .project-right-col .price-wrapper .price-item-wrapper.final-fee .price-item-text {\n        color: #44D85C; }\n  .project-card .project-right-col .price-wrapper .price-item-wrapper.final-fee .price-item-back {\n        background-color: #E6FFDE; }\n  .project-card .project-right-col .price-wrapper .price-item-wrapper.final-fee .price-item-back .price-item-amount {\n          color: #44D85C; }\n  .button-row {\n  display: flex;\n  justify-content: flex-end;\n  margin: 0;\n  margin-top: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2NvbXBvbmVudHMvb24tc2l0ZS1wcm9qZWN0LWNhcmQvRzpcXFByb2plY3RcXE9yaGFuQ2FtLUZyb250RW5kXFx3b3JrXFxjdXp3ZWJhcHAvc3JjXFxhcHBcXGRhc2hib2FyZFxcY29tcG9uZW50c1xcb24tc2l0ZS1wcm9qZWN0LWNhcmRcXG9uLXNpdGUtcHJvamVjdC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvY29tcG9uZW50cy9vbi1zaXRlLXByb2plY3QtY2FyZC9HOlxcUHJvamVjdFxcT3JoYW5DYW0tRnJvbnRFbmRcXHdvcmtcXGN1endlYmFwcC9zcmNcXGFzc2V0c1xcc2Nzc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksY0FBYTtFQUNiLG9CQUFtQjtFQUNuQixVQUFTO0VBQ1Qsd0JBQXVCO0VBQ3ZCLHdCQUF1QjtFQUN2QixpQkFBZ0IsRUFrUW5CO0VBeFFEO0lBU1ksWUFBVztJQUNYLG9CQUFtQjtJQUNuQix3QkFBdUI7SUFDdkIsbUJBQWtCLEVBQ3JCO0VBYlQ7SUFlWSxjQUFhO0lBQ2IsdUJBQXNCO0lBQ3RCLG9CQUFtQixFQTJFdEI7RUE1RlQ7TUFtQmdCLGVBQWM7TUFDZCxhQUFZO01BQ1osbUJBQWtCO01BQ2xCLGlCQUFnQjtNQUNoQixhQUFZO01BQ1osaUNDSkQ7TURLQyxvQkFBbUI7TUFDbkIsZ0JBQWU7TUFDZixZQUFXO01BQ1gsdUJBQXNCLEVBZ0J6QjtFQTVDYjtRQThCb0IsY0FBYSxFQUNoQjtFQS9CakI7UUFpQ29CLGlCQUFnQjtRQUNoQixnQkFBZSxFQUNsQjtFQW5DakI7UUFpQ29CLGlCQUFnQjtRQUNoQixnQkFBZSxFQUNsQjtFQW5DakI7UUFpQ29CLGlCQUFnQjtRQUNoQixnQkFBZSxFQUNsQjtFQW5DakI7UUFxQ29CLDZCQ25DRDtRRG9DQyx1QkFBc0I7UUFDdEIsZUNyQ0QsRUR5Q0Y7RUEzQ2pCO1VBeUN3QixlQ3ZDTCxFRHdDRTtFQTFDckI7VUF5Q3dCLGVDdkNMLEVEd0NFO0VBMUNyQjtVQXlDd0IsZUN2Q0wsRUR3Q0U7RUExQ3JCO01BOENnQixnQkFBZTtNQUNmLG9CQUFtQjtNQUNuQixhQUFZO01BQ1osNEJBQTJCO01BQzNCLGlDQzlCRDtNRCtCQyxnQkFBZTtNQUNmLGlCQUFnQjtNQUNoQixlQ25DRjtNRG9DRSw2QkFBNEIsRUFnQi9CO0VBdEViO1FBd0RvQix5Q0FBdUI7UUFDdkIsOEJBQTZCO1FBQzdCLHNCQUFxQixFQUN4QjtFQTNEakI7UUE2RG9CLDJDQUF1QjtRQUN2Qiw4QkFBNkI7UUFDN0Isc0JBQXFCLEVBQ3hCO0VBaEVqQjtRQWtFb0IsNkNBQXVCO1FBQ3ZCLDhCQUE2QjtRQUM3QixzQkFBcUIsRUFDeEI7RUFyRWpCO01BeUVnQixhQUFZO01BQ1osbUJBQWtCO01BQ2xCLDhCQUE2QjtNQUM3QixrQkFBaUI7TUFDakIsa0NDdkVGO01Ed0VFLHVDQUF1QjtNQUN2Qiw4QkFBNkI7TUFDN0Isc0JBQXFCO01BQ3JCLDZCQUE0QjtNQUM1QixlQzVFRjtNRDZFRSxnQkFBZTtNQUNmLGlCQUFnQixFQU9uQjtFQTNGYjtRQXNGb0IsY0FBYSxFQUNoQjtFQXZGakI7UUF5Rm9CLGVDbkZOLEVEb0ZHO0VBMUZqQjtRQXlGb0IsZUNuRk4sRURvRkc7RUExRmpCO1FBeUZvQixlQ25GTixFRG9GRztFQTFGakI7SUFpR1ksY0FBYTtJQUNiLG9CQUFtQjtJQUNuQixvQkFBbUI7SUFJbkIsK0JBQThCO0lBSTlCLG9CQUFtQjtJQUNuQixvQkFBbUI7SUFDbkIsMEJDeEZTO0lEeUZULGVDN0ZNO0lEOEZOLFVBQVMsRUFzQlo7RUFySVQ7TUFpSGdCLFdBQVU7TUFDVixjQUFhLEVBV2hCO0VBN0hiO1FBb0hvQixVQUFTO1FBQ1QsZ0JBQWU7UUFDZixrQkFBaUI7UUFDakIsaUJBQWdCLEVBQ25CO0VBeEhqQjtRQTBIb0IsZ0JBQWU7UUFDZixVQUFTLEVBQ1o7RUE1SGpCO01BK0hnQixjQUFhO01BQ2Isb0JBQW1CO01BQ25CLDBCQUF5QjtNQUN6QixhQUFZO01BQ1osaUJBQWdCLEVBQ25CO0VBcEliO0lBd0lZLGdCQUFlO0lBQ2Ysb0JBQW1CO0lBQ25CLGFBQVk7SUFDWiw0QkFBMkI7SUFDM0IsaUNDeEhHO0lEeUhILGdCQUFlO0lBQ2YsaUJBQWdCO0lBQ2hCLGVDN0hFO0lEOEhGLDZCQUE0QixFQU0vQjtFQXRKVDtNQWtKZ0IseUNBQXVCO01BQ3ZCLDhCQUE2QjtNQUM3QixzQkFBcUIsRUFDeEI7RUFySmI7SUF5SlksY0FBYTtJQUNiLGlCQUFnQjtJQUNoQixvQkFBbUI7SUFLbkIsdUJBQXNCO0lBSXRCLHdCQUF1QjtJQUl2QixzQkFBcUIsRUE2RnhCO0VBclFUO01BMEtnQixjQUFhO01BQ2IsaUJBQWdCLEVBTW5CO0VBakxiO1FBOEt3QixXQUFVLEVBQ2I7RUEvS3JCO01Bb0xnQixjQUFhO01BQ2Isb0JBQW1CO01BSW5CLHdCQUF1QjtNQUl2QixvQkFBbUIsRUF1RXRCO0VBcFFiO1FBK0xvQixtQkFBa0I7UUFDbEIsZUM5TEQsRUQrTEY7RUFqTWpCO1FBbU1vQixjQUFhO1FBQ2IsYUFBWTtRQUNaLGFBQVk7UUFDWixtQkFBa0I7UUFDbEIsNkJBQTRCO1FBQzVCLGdDQUErQjtRQUkvQiw0QkFBMkI7UUFJM0Isb0JBQW1CO1FBQ25CLDBCQ3ZNTCxFRDRNRTtFQXROakI7VUFtTndCLGVDak5MO1VEa05LLGlCQUFnQixFQUNuQjtFQXJOckI7UUEwTndCLGVDeE5MLEVEeU5FO0VBM05yQjtRQTZOd0IsMEJDbk5ULEVEdU5NO0VBak9yQjtVQStONEIsZUM3TlQsRUQ4Tk07RUFoT3pCO1FBcU93QixlQ25OVixFRG9OTztFQXRPckI7UUF3T3dCLDBCQ3BOVCxFRHdOTTtFQTVPckI7VUEwTzRCLGVDeE5kLEVEeU5XO0VBM096QjtRQWdQd0IsZUM5TlYsRUQrTk87RUFqUHJCO1FBbVB3QiwwQkMvTlQsRURtT007RUF2UHJCO1VBcVA0QixlQ25PZCxFRG9PVztFQXRQekI7UUEyUHdCLGVDdlBKLEVEd1BDO0VBNVByQjtRQThQd0IsMEJDbFBOLEVEc1BHO0VBbFFyQjtVQWdRNEIsZUM1UFIsRUQ2UEs7RUFTekI7RUFDSSxjQUFhO0VBQ2IsMEJBQXlCO0VBQ3pCLFVBQVM7RUFDVCxpQkFBZ0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvY29tcG9uZW50cy9vbi1zaXRlLXByb2plY3QtY2FyZC9vbi1zaXRlLXByb2plY3QtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcclxuXHJcbi5wcm9qZWN0LWNhcmQge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIC5wcm9qZWN0LWxlZnQtY29sIHtcclxuICAgICAgICAubGFuZyB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTUlO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZGV0YWlsIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICAgICAgICAgICAgaW5wdXQsIC5wcm9qZWN0LWRldGFpbC1pbnB1dCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzhweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDI1cHggMjBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHNtb2tlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLnRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAkc2VhLWdyZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRzZWEtZ3JlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHNlYS1ncmVlbjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2plY3QtZGV0YWlsLXBpY2tlciB7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4IDlweCA1NnB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICRzbW9rZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJGdyZXk7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgJi5uYXR1cmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgjeyRpbWctcGF0aH0vbmF0dXJlLWljb24ucG5nKTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyMHB4IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLmxvY2F0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoI3skaW1nLXBhdGh9L2xvY2F0aW9uLWljb24ucG5nKTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxOXB4IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLmRyZXNzLWNvZGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgjeyRpbWctcGF0aH0vZHJlc3MtY29kZS1pY29uLnBuZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMjFweCA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxN3B4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubm90ZS1maWVsZCB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDU2cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItc3R5bGU6IG5vbmUgbm9uZSBzb2xpZDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiBibGFjayBibGFjayAkZ29sZDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgjeyRpbWctcGF0aH0vbm90ZS1pY29uLnBuZyk7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxOHB4IDhweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJGdvbGQ7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGdvbGQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2plY3QtcmlnaHQtY29sIHtcclxuICAgICAgICAuaGVhZGluZyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI5cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XHJcbiAgICAgICAgICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlLXNtb2tlO1xyXG4gICAgICAgICAgICBjb2xvcjogJGRpbS1ncmV5O1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIC50ZXh0LWRpdiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNjAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jaGVja2JveC1kaXYge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnByb2plY3QtZGV0YWlsLXBpY2tlciB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHggOXB4IDU2cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAkc21va2U7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgY29sb3I6ICRncmV5O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAmLmRhdGUge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCN7JGltZy1wYXRofS9uYXR1cmUtaWNvbi5wbmcpO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMjBweCA1MCU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wcmljZS13cmFwcGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAtNjVweDtcclxuICAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgICAgICAgICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XHJcbiAgICAgICAgICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcclxuICAgICAgICAgICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGVuZDtcclxuICAgICAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgIC1tcy1mbGV4LWFsaWduOiBlbmQ7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJi52YWx1ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAucHJpY2UtaXRlbS13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgLnByaWNlLWl0ZW0tdGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkc2VhLWdyZWVuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnByaWNlLWl0ZW0tYmFjayB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtcGFjazogc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgLW1zLWZsZXgtcGFjazogc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXp1cmU7XHJcbiAgICAgICAgICAgICAgICAgICAgLnByaWNlLWl0ZW0tYW1vdW50IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRzZWEtZ3JlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICYuZHVyYXRpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIC5wcmljZS1pdGVtLXRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHNlYS1ncmVlbjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnByaWNlLWl0ZW0tYmFjayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhenVyZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnByaWNlLWl0ZW0tYW1vdW50IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkc2VhLWdyZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi5wcm9qZWN0LWFtb3VudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgLnByaWNlLWl0ZW0tdGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkZ3JleTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnByaWNlLWl0ZW0tYmFjayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzbW9rZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnByaWNlLWl0ZW0tYW1vdW50IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkZ3JleTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYudGF4IHtcclxuICAgICAgICAgICAgICAgICAgICAucHJpY2UtaXRlbS10ZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRncmV5O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucHJpY2UtaXRlbS1iYWNrIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNtb2tlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAucHJpY2UtaXRlbS1hbW91bnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRncmV5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi5maW5hbC1mZWUge1xyXG4gICAgICAgICAgICAgICAgICAgIC5wcmljZS1pdGVtLXRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGxpbWUtZ3JlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wcmljZS1pdGVtLWJhY2sge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaG9uZXlkZXc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wcmljZS1pdGVtLWFtb3VudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGxpbWUtZ3JlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuLmJ1dHRvbi1yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59IiwiJGZvbnQtZmFtaWx5OiBRdWlja3NhbmQsc2Fucy1zZXJpZjtcclxuJGltZy1wYXRoOiBcInNyYy9hc3NldHMvaW1nc1wiO1xyXG5cclxuJHJveWFsLWJsdWU6ICM2MDdDRjE7XHJcbiRzZWEtZ3JlZW46ICMyM0I3QkI7XHJcbiRwdXJwbGU6ICM5QzZCQ0U7XHJcbiRsaW1lLWdyZWVuOiAjNDREODVDO1xyXG4kYmx1ZTogIzBBNzJGNDtcclxuJGdvbGQ6ICNFQkM4M0M7XHJcbiRyZWQ6ICNFQjVBMkQ7XHJcblxyXG4kbGF2ZW5kZXI6ICNFQUVFRkY7XHJcbiRhenVyZTogI0U4RkVGRjtcclxuJHBpbmstbGF2ZW5kZXI6ICNGMUU0RkY7XHJcbiRob25leWRldzogI0U2RkZERTtcclxuJGFsaWNlLWJsdWU6ICNERUVERkY7XHJcbiRjb3Juc2lsazogI0ZGRjhEQztcclxuJG1pc3R5LXJvc2U6ICNGRkU4RTE7XHJcblxyXG4kZGltLWdyZXk6ICM0NjQ2NDY7XHJcbiRncmV5OiAjOEU4RThFO1xyXG4kbGlnaHQtZ3JleTogI0Q0RDRENDtcclxuJHNtb2tlOiAjRURFREVEO1xyXG4kd2hpdGUtc21va2U6ICNGOEY4Rjg7XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/components/on-site-project-card/on-site-project-card.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/dashboard/components/on-site-project-card/on-site-project-card.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: OnSiteProjectCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnSiteProjectCardComponent", function() { return OnSiteProjectCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OnSiteProjectCardComponent = /** @class */ (function () {
    function OnSiteProjectCardComponent() {
    }
    OnSiteProjectCardComponent.prototype.ngOnInit = function () {
    };
    OnSiteProjectCardComponent.prototype.onClickHandler = function (event) {
    };
    OnSiteProjectCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-on-site-project-card',
            template: __webpack_require__(/*! ./on-site-project-card.component.html */ "./src/app/dashboard/components/on-site-project-card/on-site-project-card.component.html"),
            styles: [__webpack_require__(/*! ./on-site-project-card.component.scss */ "./src/app/dashboard/components/on-site-project-card/on-site-project-card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OnSiteProjectCardComponent);
    return OnSiteProjectCardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/sidebar/sidebar.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/components/sidebar/sidebar.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"job-section-side-menu-wrapper\">\n  <div class=\"job-section-side-menu\">\n    <a href=\"/job-type\" \n      class=\"find\" \n      data-sidemenu=\"find\" \n      (click)=\"onClickHander($event)\"\n      [class.active]=\"active_sidemenu == 'find'\"\n      >FIND</a>\n    <a href=\"/\" \n      class=\"jobs\" \n      data-sidemenu=\"jobs\" \n      (click)=\"onClickHander($event)\"\n      [class.active]=\"active_sidemenu == 'jobs'\"\n      >JOBS</a>\n  </div>\n  <div class=\"job-section-side-footer-menu\">\n    <a href=\"#\">\n      Get Desktop App \n      <img src=\"../../assets/imgs/windows.png\" class=\"desktop-app\" />\n      <img src=\"../../assets/imgs/mac.png\" class=\"desktop-app\" />\n    </a>\n    <a  href=\"#\">\n      Home Page\n    </a>\n    <a href=\"#\">\n      Cotact Us\n    </a>\n    <a href=\"#\">\n      Support\n    </a>\n    <a href=\"#\">\n      Logout\n      <img src=\"../../assets/imgs/logout.png\" class=\"logout\"/>\n    </a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/components/sidebar/sidebar.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/components/sidebar/sidebar.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".job-section-side-menu-wrapper {\n  display: block;\n  height: 70vh;\n  padding-top: 20px; }\n  .job-section-side-menu-wrapper .job-section-side-menu {\n    height: 70%;\n    border-radius: 20px;\n    background-color: rgba(255, 255, 255, 0.2); }\n  .job-section-side-menu-wrapper .job-section-side-menu a {\n      display: inline-block;\n      width: 100%;\n      color: #fff;\n      line-height: inherit;\n      text-decoration: none;\n      cursor: pointer;\n      padding: 24px 22px;\n      transition: all .4s ease;\n      font-size: 18px;\n      font-weight: 700;\n      padding-left: 60px;\n      border-style: none;\n      border-radius: 20px;\n      border-color: rgba(255, 255, 255, 0);\n      background-position: 20px 50%;\n      background-repeat: no-repeat;\n      background-size: 26px; }\n  .job-section-side-menu-wrapper .job-section-side-menu a:hover {\n        background-color: rgba(255, 255, 255, 0.2); }\n  .job-section-side-menu-wrapper .job-section-side-menu a.active {\n        background-color: white;\n        color: #607CF1; }\n  .job-section-side-menu-wrapper .job-section-side-menu a.find {\n        background-image: url('job-find@2x.png'); }\n  .job-section-side-menu-wrapper .job-section-side-menu a.find.active {\n          background-image: url('job-find_active@2x.png'); }\n  .job-section-side-menu-wrapper .job-section-side-menu a.jobs {\n        background-image: url('jobs@2x.png'); }\n  .job-section-side-menu-wrapper .job-section-side-menu a.jobs.active {\n          background-image: url('jobs_active@2x.png'); }\n  .job-section-side-menu-wrapper .job-section-side-footer-menu {\n    height: 30%;\n    padding-top: 15px;\n    font-size: 16px;\n    font-weight: 400; }\n  .job-section-side-menu-wrapper .job-section-side-footer-menu a {\n      display: inline-block;\n      width: 100%;\n      padding-left: 20px;\n      color: white; }\n  .job-section-side-menu-wrapper .job-section-side-footer-menu a img.desktop-app {\n        width: 20px;\n        height: 20px;\n        margin-left: 5px; }\n  .job-section-side-menu-wrapper .job-section-side-footer-menu a img.logout {\n        width: 20px;\n        margin-left: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2NvbXBvbmVudHMvc2lkZWJhci9HOlxcUHJvamVjdFxcT3JoYW5DYW0tRnJvbnRFbmRcXHdvcmtcXGN1endlYmFwcC9zcmNcXGFwcFxcZGFzaGJvYXJkXFxjb21wb25lbnRzXFxzaWRlYmFyXFxzaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvY29tcG9uZW50cy9zaWRlYmFyL0c6XFxQcm9qZWN0XFxPcmhhbkNhbS1Gcm9udEVuZFxcd29ya1xcY3V6d2ViYXBwL3NyY1xcYXNzZXRzXFxzY3NzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxlQUFjO0VBQ2QsYUFBWTtFQUNaLGtCQUFpQixFQW1FcEI7RUF0RUQ7SUFLUSxZQUFXO0lBQ1gsb0JBQW1CO0lBQ25CLDJDQUFvQyxFQXlDdkM7RUFoREw7TUFTWSxzQkFBcUI7TUFDckIsWUFBVztNQUNYLFlBQVc7TUFDWCxxQkFBb0I7TUFDcEIsc0JBQXFCO01BQ3JCLGdCQUFlO01BQ2YsbUJBQWtCO01BRWxCLHlCQUF3QjtNQUN4QixnQkFBZTtNQUNmLGlCQUFnQjtNQUNoQixtQkFBa0I7TUFDbEIsbUJBQWtCO01BQ2xCLG9CQUFtQjtNQUNuQixxQ0FBK0I7TUFDL0IsOEJBQTZCO01BQzdCLDZCQUE0QjtNQUM1QixzQkFBcUIsRUFxQnhCO0VBL0NUO1FBNkJnQiwyQ0FBb0MsRUFDdkM7RUE5QmI7UUFnQ2dCLHdCQUF1QjtRQUN2QixlQ2hDSSxFRGlDUDtFQWxDYjtRQW9DZ0IseUNBQXVCLEVBSTFCO0VBeENiO1VBc0NvQixnREFBdUIsRUFDMUI7RUF2Q2pCO1FBMENnQixxQ0FBdUIsRUFJMUI7RUE5Q2I7VUE0Q29CLDRDQUF1QixFQUMxQjtFQTdDakI7SUFrRFEsWUFBVztJQUNYLGtCQUFpQjtJQUNqQixnQkFBZTtJQUNmLGlCQUFnQixFQWdCbkI7RUFyRUw7TUF1RFksc0JBQXFCO01BQ3JCLFlBQVc7TUFDWCxtQkFBa0I7TUFDbEIsYUFBWSxFQVVmO0VBcEVUO1FBNERnQixZQUFXO1FBQ1gsYUFBWTtRQUNaLGlCQUFnQixFQUNuQjtFQS9EYjtRQWlFZ0IsWUFBVztRQUNYLGlCQUFnQixFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcclxuXHJcbi5qb2Itc2VjdGlvbi1zaWRlLW1lbnUtd3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jazsgICAgXHJcbiAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIC5qb2Itc2VjdGlvbi1zaWRlLW1lbnUge1xyXG4gICAgICAgIGhlaWdodDogNzAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLDAlLDEwMCUsLjIpO1xyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyNHB4IDIycHg7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC40cyBlYXNlO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjRzIGVhc2U7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xyXG4gICAgICAgICAgICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogaHNsYSgwLDAlLDEwMCUsMCk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDIwcHggNTAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDI2cHg7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwwJSwxMDAlLC4yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkcm95YWwtYmx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLmZpbmQge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCN7JGltZ19wYXRofS9qb2ItZmluZEAyeC5wbmcpO1xyXG4gICAgICAgICAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgjeyRpbWdfcGF0aH0vam9iLWZpbmRfYWN0aXZlQDJ4LnBuZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5qb2JzIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgjeyRpbWdfcGF0aH0vam9ic0AyeC5wbmcpO1xyXG4gICAgICAgICAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgjeyRpbWdfcGF0aH0vam9ic19hY3RpdmVAMngucG5nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5qb2Itc2VjdGlvbi1zaWRlLWZvb3Rlci1tZW51IHtcclxuICAgICAgICBoZWlnaHQ6IDMwJTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBhIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGltZy5kZXNrdG9wLWFwcCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW1nLmxvZ291dCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIkZm9udC1mYW1pbHk6IFF1aWNrc2FuZCxzYW5zLXNlcmlmO1xyXG4kaW1nLXBhdGg6IFwic3JjL2Fzc2V0cy9pbWdzXCI7XHJcblxyXG4kcm95YWwtYmx1ZTogIzYwN0NGMTtcclxuJHNlYS1ncmVlbjogIzIzQjdCQjtcclxuJHB1cnBsZTogIzlDNkJDRTtcclxuJGxpbWUtZ3JlZW46ICM0NEQ4NUM7XHJcbiRibHVlOiAjMEE3MkY0O1xyXG4kZ29sZDogI0VCQzgzQztcclxuJHJlZDogI0VCNUEyRDtcclxuXHJcbiRsYXZlbmRlcjogI0VBRUVGRjtcclxuJGF6dXJlOiAjRThGRUZGO1xyXG4kcGluay1sYXZlbmRlcjogI0YxRTRGRjtcclxuJGhvbmV5ZGV3OiAjRTZGRkRFO1xyXG4kYWxpY2UtYmx1ZTogI0RFRURGRjtcclxuJGNvcm5zaWxrOiAjRkZGOERDO1xyXG4kbWlzdHktcm9zZTogI0ZGRThFMTtcclxuXHJcbiRkaW0tZ3JleTogIzQ2NDY0NjtcclxuJGdyZXk6ICM4RThFOEU7XHJcbiRsaWdodC1ncmV5OiAjRDRENEQ0O1xyXG4kc21va2U6ICNFREVERUQ7XHJcbiR3aGl0ZS1zbW9rZTogI0Y4RjhGODtcclxuIl19 */"

/***/ }),

/***/ "./src/app/dashboard/components/sidebar/sidebar.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard/components/sidebar/sidebar.component.ts ***!
  \*******************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
        this.active_sidemenu = 'find';
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent.prototype.onClickHander = function (event) {
        event.preventDefault();
        var target = event.target || event.srcElement || event.currentTarget;
        this.active_sidemenu = target.dataset.sidemenu;
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dashboard-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/dashboard/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/dashboard/components/sidebar/sidebar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_doc_trans_project_card_doc_trans_project_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/doc-trans-project-card/doc-trans-project-card.component */ "./src/app/dashboard/components/doc-trans-project-card/doc-trans-project-card.component.ts");
/* harmony import */ var _dashboard_pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dashboard/pages/home/home.component */ "./src/app/dashboard/pages/home/home.component.ts");
/* harmony import */ var _components_job_types_job_types_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/job-types/job-types.component */ "./src/app/dashboard/components/job-types/job-types.component.ts");
/* harmony import */ var _components_on_site_project_card_on_site_project_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/on-site-project-card/on-site-project-card.component */ "./src/app/dashboard/components/on-site-project-card/on-site-project-card.component.ts");







var routes = [
    { path: 'dashboard', component: _dashboard_pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        children: [
            { path: '', component: _components_job_types_job_types_component__WEBPACK_IMPORTED_MODULE_5__["JobTypesComponent"] },
            { path: 'doc-trans-project', component: _components_doc_trans_project_card_doc_trans_project_card_component__WEBPACK_IMPORTED_MODULE_3__["DocTransProjectCardComponent"] },
            { path: 'on-site-project', component: _components_on_site_project_card_on_site_project_card_component__WEBPACK_IMPORTED_MODULE_6__["OnSiteProjectCardComponent"] }
        ]
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/dashboard/components/sidebar/sidebar.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/dashboard/components/header/header.component.ts");
/* harmony import */ var _components_doc_trans_project_card_doc_trans_project_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/doc-trans-project-card/doc-trans-project-card.component */ "./src/app/dashboard/components/doc-trans-project-card/doc-trans-project-card.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/dashboard/pages/home/home.component.ts");
/* harmony import */ var _components_job_types_job_types_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/job-types/job-types.component */ "./src/app/dashboard/components/job-types/job-types.component.ts");
/* harmony import */ var _components_on_site_project_card_on_site_project_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/on-site-project-card/on-site-project-card.component */ "./src/app/dashboard/components/on-site-project-card/on-site-project-card.component.ts");












var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _components_doc_trans_project_card_doc_trans_project_card_component__WEBPACK_IMPORTED_MODULE_8__["DocTransProjectCardComponent"], _pages_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], _components_job_types_job_types_component__WEBPACK_IMPORTED_MODULE_10__["JobTypesComponent"], _components_on_site_project_card_on_site_project_card_component__WEBPACK_IMPORTED_MODULE_11__["OnSiteProjectCardComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["DashboardRoutingModule"]
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/pages/home/home.component.html":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/pages/home/home.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"find-job-section\">\n  <dashboard-header></dashboard-header>\n  <div class=\"find-job-section-main\">\n    <div class=\"side-menu-section\">\n      <dashboard-sidebar></dashboard-sidebar>\n    </div>\n    <div class=\"main-section\">\n      <router-outlet></router-outlet>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/pages/home/home.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/pages/home/home.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background-image: linear-gradient(180deg, #23b7bb, #607cf1);\n  height: 100vh; }\n\n.find-job-section {\n  padding: 0 5% 5%; }\n\n.find-job-section .find-job-section-main {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    -webkit-box-align: center;\n    grid-auto-columns: 1fr;\n    grid-column-gap: 16px;\n    grid-row-gap: 16px;\n    -ms-grid-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n    -ms-grid-rows: 1fr 1fr 1fr 1fr 1fr 1fr;\n    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr; }\n\n.find-job-section .find-job-section-main .side-menu-section {\n      width: 20%; }\n\n.find-job-section .find-job-section-main .main-section {\n      width: 80%;\n      padding: 20px;\n      flex-direction: column;\n      -webkit-box-pack: center;\n      -ms-flex-pack: center;\n      align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3BhZ2VzL2hvbWUvRzpcXFByb2plY3RcXE9yaGFuQ2FtLUZyb250RW5kXFx3b3JrXFxjdXp3ZWJhcHAvc3JjXFxhcHBcXGRhc2hib2FyZFxccGFnZXNcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFSSw0REFBeUQ7RUFDekQsY0FBYSxFQUNoQjs7QUFDRDtFQUNJLGlCQUFnQixFQXFDbkI7O0FBdENEO0lBR1EsY0FBYTtJQUliLG9CQUFtQjtJQUluQiw0QkFBMkI7SUFDM0IsMEJBQXlCO0lBQ3pCLHVCQUFzQjtJQUN0QixzQkFBcUI7SUFDckIsbUJBQWtCO0lBQ2xCLGtFQUFpRTtJQUNqRSx1RUFBc0U7SUFDdEUsdUNBQXNDO0lBQ3RDLDRDQUEyQyxFQWtCOUM7O0FBckNMO01BcUJZLFdBQVUsRUFDYjs7QUF0QlQ7TUF3QlksV0FBVTtNQUNWLGNBQWE7TUFLYix1QkFBc0I7TUFDdEIseUJBQXdCO01BQ3hCLHNCQUFxQjtNQUdyQixvQkFBbUIsRUFDdEIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTWFpbiBFbGVtZW50c1xyXG5ib2R5IHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLGxlZnQgdG9wLGxlZnQgYm90dG9tLGZyb20oIzIzYjdiYiksdG8oIzYwN2NmMSkpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE4MGRlZywjMjNiN2JiLCM2MDdjZjEpO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG4uZmluZC1qb2Itc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAwIDUlIDUlO1xyXG4gICAgLmZpbmQtam9iLXNlY3Rpb24tbWFpbiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIC13ZWJraXQtYm94LXBhY2s6IHN0YXJ0O1xyXG4gICAgICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIC1tcy1mbGV4LXBhY2s6IHN0YXJ0O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGdyaWQtYXV0by1jb2x1bW5zOiAxZnI7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tZ2FwOiAxNnB4O1xyXG4gICAgICAgIGdyaWQtcm93LWdhcDogMTZweDtcclxuICAgICAgICAtbXMtZ3JpZC1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmcjtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyO1xyXG4gICAgICAgIC1tcy1ncmlkLXJvd3M6IDFmciAxZnIgMWZyIDFmciAxZnIgMWZyO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgMWZyIDFmciAxZnI7XHJcbiAgICAgICAgLnNpZGUtbWVudS1zZWN0aW9uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDIwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1haW4tc2VjdGlvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gICAgICAgICAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcclxuICAgICAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/dashboard/pages/home/home.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/pages/home/home.component.ts ***!
  \********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/dashboard/pages/home/home.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/dashboard/pages/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/components/doc-tran-price-card/doc-tran-price-card.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/home/components/doc-tran-price-card/doc-tran-price-card.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"doc-trans-price-card row\">\n    <div class=\"col-xs-12 col-sm-6 left-col\">\n      <div class=\"row select-lang\">\n        <div class=\"col-sm-6 source-lang\">\n          <app-select-lang type=\"source\"></app-select-lang>\n        </div>\n        <div class=\"col-sm-6 target-lang\">\n          <app-select-lang type=\"target\"></app-select-lang>\n        </div>\n      </div>\n      <app-doc-uploader></app-doc-uploader>\n      <app-doc-type-selector></app-doc-type-selector>\n      <app-deadline-selector></app-deadline-selector>\n      <div class=\"row legal-aid\">\n        <div class=\"col-sm-9 heading\">\n          <h3>Legal Aid Case</h3>\n        </div>\n        <div class=\"col-sm-3 switch\">\n          <app-custom-switch (checkEvent)=\"onCheckHandler($event)\"></app-custom-switch>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xs-12 col-sm-6 right-col\">\n      <div class=\"calc-result\">\n        <app-calc-result-wrapper\n          item_name=\"WORD COUNT\"\n          amount=\"354\"\n          color=\"royal-blue\"\n          ></app-calc-result-wrapper>\n        <app-calc-result-wrapper\n          item_name=\"PROJECT AMOUNT\"\n          amount=\"123\"\n          unit=\"C$\"\n          color=\"grey\"\n          ></app-calc-result-wrapper>\n        <app-calc-result-wrapper\n          item_name=\"TAX\"\n          amount=\"17\"\n          unit=\"C$\"\n          color=\"grey\"\n          ></app-calc-result-wrapper>\n        <app-calc-result-wrapper\n          item_name=\"PROJECT AMOUNT\"\n          amount=\"140\"\n          unit=\"C$\"\n          color=\"lime-green\"\n          ></app-calc-result-wrapper>\n      </div>\n      <div class=\"button-div\">\n        <app-general-button\n         color=\"lime-green\">\n         FNID TRANSLATE NOW >\n        </app-general-button>\n      </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/home/components/doc-tran-price-card/doc-tran-price-card.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/home/components/doc-tran-price-card/doc-tran-price-card.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".doc-trans-price-card {\n  display: flex;\n  width: 960px;\n  padding: 30px;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: stretch;\n  box-shadow: 0 40px 120px -20px rgba(96, 124, 241, 0.8);\n  color: #8E8E8E;\n  border-radius: 20px;\n  background-color: #fff;\n  margin-left: 0;\n  margin-right: 0; }\n  .doc-trans-price-card .select-lang {\n    width: 100%;\n    margin-bottom: 15px; }\n  .doc-trans-price-card .select-lang div {\n      padding-right: 0;\n      padding-left: 10px; }\n  .doc-trans-price-card .legal-aid {\n    display: flex;\n    margin-top: 1px;\n    padding-right: 18px;\n    justify-content: space-between;\n    align-items: center;\n    border-radius: 10px;\n    background-color: #F8F8F8;\n    margin-left: 0;\n    margin-right: 0; }\n  .doc-trans-price-card .legal-aid .heading h3 {\n      margin-top: 0;\n      font-size: 18px; }\n  .doc-trans-price-card .legal-aid .switch {\n      display: flex;\n      align-items: center;\n      justify-content: flex-end;\n      height: 70px;\n      padding-top: 10px; }\n  .doc-trans-price-card .right-col .button-div {\n    margin-left: 160px;\n    margin-top: 40px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jb21wb25lbnRzL2RvYy10cmFuLXByaWNlLWNhcmQvRzpcXFByb2plY3RcXE9yaGFuQ2FtLUZyb250RW5kXFx3b3JrXFxjdXp3ZWJhcHAvc3JjXFxhcHBcXGhvbWVcXGNvbXBvbmVudHNcXGRvYy10cmFuLXByaWNlLWNhcmRcXGRvYy10cmFuLXByaWNlLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvY29tcG9uZW50cy9kb2MtdHJhbi1wcmljZS1jYXJkL0c6XFxQcm9qZWN0XFxPcmhhbkNhbS1Gcm9udEVuZFxcd29ya1xcY3V6d2ViYXBwL3NyY1xcYXNzZXRzXFxzY3NzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFJSSxjQUFhO0VBQ2IsYUFBWTtFQUNaLGNBQWE7RUFLYixvQkFBbUI7RUFJbkIsK0JBQThCO0VBSTlCLHFCQUFvQjtFQUNwQix1RENuQmdCO0VEb0JoQixlQ0hVO0VESVYsb0JBQW1CO0VBQ25CLHVCQUFzQjtFQUN0QixlQUFjO0VBQ2QsZ0JBQWUsRUFnRGxCO0VBekVEO0lBMkJRLFlBQVc7SUFDWCxvQkFBbUIsRUFLdEI7RUFqQ0w7TUE4QlksaUJBQWdCO01BQ2hCLG1CQUFrQixFQUNyQjtFQWhDVDtJQXFDUSxjQUFhO0lBQ2IsZ0JBQWU7SUFDZixvQkFBbUI7SUFJbkIsK0JBQThCO0lBSTlCLG9CQUFtQjtJQUNuQixvQkFBbUI7SUFDbkIsMEJDNUJhO0lENkJiLGVBQWM7SUFDZCxnQkFBZSxFQWNsQjtFQWpFTDtNQXNEZ0IsY0FBYTtNQUNiLGdCQUFlLEVBQ2xCO0VBeERiO01BMkRZLGNBQWE7TUFDYixvQkFBbUI7TUFDbkIsMEJBQXlCO01BQ3pCLGFBQVk7TUFDWixrQkFBaUIsRUFDcEI7RUFoRVQ7SUFxRVksbUJBQWtCO0lBQ2xCLGlCQUFnQixFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY29tcG9uZW50cy9kb2MtdHJhbi1wcmljZS1jYXJkL2RvYy10cmFuLXByaWNlLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwidmFyaWFibGVzXCI7XHJcblxyXG4uZG9jLXRyYW5zLXByaWNlLWNhcmQge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogOTYwcHg7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xyXG4gICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XHJcbiAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xyXG4gICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IHN0cmV0Y2g7XHJcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgLW1zLWZsZXgtYWxpZ246IHN0cmV0Y2g7XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgIGJveC1zaGFkb3c6IDAgNDBweCAxMjBweCAtMjBweCByZ2JhKCRyb3lhbC1ibHVlLCAwLjgpO1xyXG4gICAgY29sb3I6ICRncmV5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIC5zZWxlY3QtbGFuZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5sZWdhbC1haWQge1xyXG4gICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMXB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE4cHg7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcclxuICAgICAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGUtc21va2U7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgIC5oZWFkaW5nIHtcclxuICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuc3dpdGNoIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnJpZ2h0LWNvbCB7XHJcbiAgICAgICAgLmJ1dHRvbi1kaXYge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTYwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiJGZvbnQtZmFtaWx5OiBRdWlja3NhbmQsc2Fucy1zZXJpZjtcclxuJGltZy1wYXRoOiBcInNyYy9hc3NldHMvaW1nc1wiO1xyXG5cclxuJHJveWFsLWJsdWU6ICM2MDdDRjE7XHJcbiRzZWEtZ3JlZW46ICMyM0I3QkI7XHJcbiRwdXJwbGU6ICM5QzZCQ0U7XHJcbiRsaW1lLWdyZWVuOiAjNDREODVDO1xyXG4kYmx1ZTogIzBBNzJGNDtcclxuJGdvbGQ6ICNFQkM4M0M7XHJcbiRyZWQ6ICNFQjVBMkQ7XHJcblxyXG4kbGF2ZW5kZXI6ICNFQUVFRkY7XHJcbiRhenVyZTogI0U4RkVGRjtcclxuJHBpbmstbGF2ZW5kZXI6ICNGMUU0RkY7XHJcbiRob25leWRldzogI0U2RkZERTtcclxuJGFsaWNlLWJsdWU6ICNERUVERkY7XHJcbiRjb3Juc2lsazogI0ZGRjhEQztcclxuJG1pc3R5LXJvc2U6ICNGRkU4RTE7XHJcblxyXG4kZGltLWdyZXk6ICM0NjQ2NDY7XHJcbiRncmV5OiAjOEU4RThFO1xyXG4kbGlnaHQtZ3JleTogI0Q0RDRENDtcclxuJHNtb2tlOiAjRURFREVEO1xyXG4kd2hpdGUtc21va2U6ICNGOEY4Rjg7XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/components/doc-tran-price-card/doc-tran-price-card.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/home/components/doc-tran-price-card/doc-tran-price-card.component.ts ***!
  \**************************************************************************************/
/*! exports provided: DocTranPriceCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocTranPriceCardComponent", function() { return DocTranPriceCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _root_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../root-store */ "./src/app/root-store/index.ts");




var DocTranPriceCardComponent = /** @class */ (function () {
    function DocTranPriceCardComponent(store$) {
        this.store$ = store$;
    }
    DocTranPriceCardComponent.prototype.ngOnInit = function () {
    };
    DocTranPriceCardComponent.prototype.onCheckHandler = function (event) {
        this.store$.dispatch(new _root_store__WEBPACK_IMPORTED_MODULE_3__["PricemodelStoreActions"].SET_LAO_PROJECT({
            is_lao_project: event
        }));
    };
    DocTranPriceCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-doc-tran-price-card',
            template: __webpack_require__(/*! ./doc-tran-price-card.component.html */ "./src/app/home/components/doc-tran-price-card/doc-tran-price-card.component.html"),
            styles: [__webpack_require__(/*! ./doc-tran-price-card.component.scss */ "./src/app/home/components/doc-tran-price-card/doc-tran-price-card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], DocTranPriceCardComponent);
    return DocTranPriceCardComponent;
}());



/***/ }),

/***/ "./src/app/home/components/document-translation-hero/document-translation-hero.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/home/components/document-translation-hero/document-translation-hero.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"document-translation-hero\">\n  <div class=\"hero-text\">\n    <strong>Document Translation</strong>\n    for\n    <strong>Companies</strong>\n  </div>\n  <h1 class=\"hero-head-text\">\n    Reduce your translation bills up to 50%\n  </h1>\n  <h3 class=\"hero-subhead-text\">\n    Globalize your company by giving it the ability to communicate in 87 Languages.\n  </h3>\n</header>"

/***/ }),

/***/ "./src/app/home/components/document-translation-hero/document-translation-hero.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/home/components/document-translation-hero/document-translation-hero.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".document-translation-hero {\n  display: -ms-flexbox;\n  display: flex;\n  padding-right: 10%;\n  padding-left: 10%;\n  flex-direction: column;\n  -webkit-box-pack: center;\n  color: #fff;\n  height: 70vh;\n  align-items: flex-start;\n  justify-content: center;\n  background-image: url('hero-company.jpg');\n  background-size: cover;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  text-align: left; }\n  .document-translation-hero .hero-text {\n    padding: 10px;\n    border-radius: 6px;\n    text-align: center;\n    background-color: rgba(96, 124, 241, 0.35); }\n  .document-translation-hero .hero-head-text {\n    width: 700px;\n    margin-bottom: 5px;\n    font-size: 34px;\n    font-weight: 700; }\n  .document-translation-hero .hero-subhead-text {\n    margin-top: 0;\n    font-size: 24px;\n    width: 600px;\n    margin-bottom: 20px;\n    font-weight: 400; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jb21wb25lbnRzL2RvY3VtZW50LXRyYW5zbGF0aW9uLWhlcm8vRzpcXFByb2plY3RcXE9yaGFuQ2FtLUZyb250RW5kXFx3b3JrXFxjdXp3ZWJhcHAvc3JjXFxhcHBcXGhvbWVcXGNvbXBvbmVudHNcXGRvY3VtZW50LXRyYW5zbGF0aW9uLWhlcm9cXGRvY3VtZW50LXRyYW5zbGF0aW9uLWhlcm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFHSSxxQkFBb0I7RUFFcEIsY0FBYTtFQUNiLG1CQUFrQjtFQUNsQixrQkFBaUI7RUFFakIsdUJBQXNCO0VBQ3RCLHlCQUF3QjtFQUN4QixZQUFXO0VBQ1gsYUFBWTtFQUtaLHdCQUF1QjtFQUl2Qix3QkFBdUI7RUFDdkIsMENBQXVCO0VBQ3ZCLHVCQUFzQjtFQUN0Qiw2QkFBNEI7RUFDNUIsNkJBQTRCO0VBQzVCLGlCQUFnQixFQXdCbkI7RUFsREQ7SUE2QlEsY0FBYTtJQUNiLG1CQUFrQjtJQUNsQixtQkFBa0I7SUFDbEIsMkNBQTRELEVBQy9EO0VBakNMO0lBb0NRLGFBQVk7SUFDWixtQkFBa0I7SUFDbEIsZ0JBQWU7SUFDZixpQkFBZ0IsRUFDbkI7RUF4Q0w7SUEyQ1EsY0FBYTtJQUNiLGdCQUFlO0lBQ2YsYUFBWTtJQUNaLG9CQUFtQjtJQUNuQixpQkFBZ0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2NvbXBvbmVudHMvZG9jdW1lbnQtdHJhbnNsYXRpb24taGVyby9kb2N1bWVudC10cmFuc2xhdGlvbi1oZXJvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInZhcmlhYmxlc1wiO1xyXG5cclxuLmRvY3VtZW50LXRyYW5zbGF0aW9uLWhlcm8ge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwJTtcclxuICAgIHBhZGRpbmctbGVmdDogMTAlO1xyXG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyOyBcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgaGVpZ2h0OiA3MHZoO1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIC13ZWJraXQtYm94LWFsaWduOiBzdGFydDtcclxuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAtbXMtZmxleC1hbGlnbjogc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcclxuICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgjeyRpbWctcGF0aH0vaGVyby1jb21wYW55LmpwZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cclxuICAgIC5oZXJvLXRleHQge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDIyOC40MTM3OTMxMDM0NDgyOCw4My44MiUsNjYuMDglLC4zNSk7XHJcbiAgICB9XHJcblxyXG4gICAgLmhlcm8taGVhZC10ZXh0IHtcclxuICAgICAgICB3aWR0aDogNzAwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzRweDtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5oZXJvLXN1YmhlYWQtdGV4dCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIH1cclxuXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/components/document-translation-hero/document-translation-hero.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/home/components/document-translation-hero/document-translation-hero.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: DocumentTranslationHeroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentTranslationHeroComponent", function() { return DocumentTranslationHeroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DocumentTranslationHeroComponent = /** @class */ (function () {
    function DocumentTranslationHeroComponent() {
    }
    DocumentTranslationHeroComponent.prototype.ngOnInit = function () {
    };
    DocumentTranslationHeroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-document-translation-hero',
            template: __webpack_require__(/*! ./document-translation-hero.component.html */ "./src/app/home/components/document-translation-hero/document-translation-hero.component.html"),
            styles: [__webpack_require__(/*! ./document-translation-hero.component.scss */ "./src/app/home/components/document-translation-hero/document-translation-hero.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DocumentTranslationHeroComponent);
    return DocumentTranslationHeroComponent;
}());



/***/ }),

/***/ "./src/app/home/components/navbar/navbar.component.html":
/*!**************************************************************!*\
  !*** ./src/app/home/components/navbar/navbar.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-navbar\">\n  <a href=\"/\" class=\"cuz-logo\">\n    <div class=\"cuz-logo-img\"></div>  \n  </a>\n  <nav role=\"navigation\" class=\"app-nav-menu\">\n    <a href=\"#\" class=\"app-nav-link\">Services</a>\n    <a href=\"#\" class=\"app-nav-link\">Download</a>\n    <a href=\"#\" class=\"app-nav-link\">About</a>\n    <a href=\"/welcome\" class=\"app-nav-link\">Dashboard</a>\n    <a href=\"#\" class=\"app-nav-link\">Contact Us</a>\n  </nav>\n</div>"

/***/ }),

/***/ "./src/app/home/components/navbar/navbar.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/home/components/navbar/navbar.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-navbar {\n  height: 74px;\n  justify-content: space-between;\n  background-color: #fff; }\n  .app-navbar .cuz-logo {\n    display: flex;\n    height: 100%;\n    padding-right: 22px;\n    padding-left: 22px;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    float: left; }\n  .app-navbar .cuz-logo .cuz-logo-img {\n      width: 50px;\n      height: 50px;\n      background-image: url('cuz-logo-gray.png');\n      background-repeat: no-repeat;\n      background-position: center;\n      background-size: contain; }\n  .app-navbar .app-nav-menu {\n    display: flex;\n    height: 100%;\n    align-items: center;\n    font-size: 1.3em;\n    float: right;\n    padding-right: 30px; }\n  .app-navbar .app-nav-menu .app-nav-link {\n      padding: 20px;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      font-size: 14px;\n      line-height: 160%;\n      color: #464646;\n      text-decoration: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jb21wb25lbnRzL25hdmJhci9HOlxcUHJvamVjdFxcT3JoYW5DYW0tRnJvbnRFbmRcXHdvcmtcXGN1endlYmFwcC9zcmNcXGFwcFxcaG9tZVxcY29tcG9uZW50c1xcbmF2YmFyXFxuYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvY29tcG9uZW50cy9uYXZiYXIvRzpcXFByb2plY3RcXE9yaGFuQ2FtLUZyb250RW5kXFx3b3JrXFxjdXp3ZWJhcHAvc3JjXFxhc3NldHNcXHNjc3NcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNJLGFBQVk7RUFJWiwrQkFBOEI7RUFDOUIsdUJBQXNCLEVBc0R6QjtFQTVERDtJQVFRLGNBQWE7SUFDYixhQUFZO0lBQ1osb0JBQW1CO0lBQ25CLG1CQUFrQjtJQUdsQix1QkFBc0I7SUFJdEIsd0JBQXVCO0lBSXZCLG9CQUFtQjtJQUNuQixZQUFXLEVBU2Q7RUFoQ0w7TUF5QlksWUFBVztNQUNYLGFBQVk7TUFDWiwyQ0FBdUI7TUFDdkIsNkJBQTRCO01BQzVCLDRCQUEyQjtNQUMzQix5QkFBd0IsRUFDM0I7RUEvQlQ7SUFrQ1EsY0FBYTtJQUNiLGFBQVk7SUFDWixvQkFBbUI7SUFDbkIsaUJBQWdCO0lBQ2hCLGFBQVk7SUFDWixvQkFBbUIsRUFtQnRCO0VBMURMO01BeUNZLGNBQWE7TUFHYix1QkFBc0I7TUFJdEIsd0JBQXVCO01BSXZCLG9CQUFtQjtNQUNuQixnQkFBZTtNQUNmLGtCQUFpQjtNQUNqQixlQ3hDTTtNRHlDTixzQkFBcUIsRUFDeEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydCBnbG9iYWwgc3R5bGVzIGFuZCB2YXJpYWJsZXM7XHJcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcclxuXHJcbi8vIENvbXBvbmVudCBTdHlsZXNcclxuLmFwcC1uYXZiYXIge1xyXG4gICAgaGVpZ2h0OiA3NHB4O1xyXG4gICAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcclxuICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAuY3V6LWxvZ28ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIycHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMnB4O1xyXG4gICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcbiAgICAgICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIC5jdXotbG9nby1pbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoI3skaW1nLXBhdGh9L2N1ei1sb2dvLWdyYXkucG5nKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmFwcC1uYXYtbWVudSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG4gICAgICAgIC5hcHAtbmF2LWxpbmsge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gICAgICAgICAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2MCU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkZGltLWdyZXk7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG4iLCIkZm9udC1mYW1pbHk6IFF1aWNrc2FuZCxzYW5zLXNlcmlmO1xyXG4kaW1nLXBhdGg6IFwic3JjL2Fzc2V0cy9pbWdzXCI7XHJcblxyXG4kcm95YWwtYmx1ZTogIzYwN0NGMTtcclxuJHNlYS1ncmVlbjogIzIzQjdCQjtcclxuJHB1cnBsZTogIzlDNkJDRTtcclxuJGxpbWUtZ3JlZW46ICM0NEQ4NUM7XHJcbiRibHVlOiAjMEE3MkY0O1xyXG4kZ29sZDogI0VCQzgzQztcclxuJHJlZDogI0VCNUEyRDtcclxuXHJcbiRsYXZlbmRlcjogI0VBRUVGRjtcclxuJGF6dXJlOiAjRThGRUZGO1xyXG4kcGluay1sYXZlbmRlcjogI0YxRTRGRjtcclxuJGhvbmV5ZGV3OiAjRTZGRkRFO1xyXG4kYWxpY2UtYmx1ZTogI0RFRURGRjtcclxuJGNvcm5zaWxrOiAjRkZGOERDO1xyXG4kbWlzdHktcm9zZTogI0ZGRThFMTtcclxuXHJcbiRkaW0tZ3JleTogIzQ2NDY0NjtcclxuJGdyZXk6ICM4RThFOEU7XHJcbiRsaWdodC1ncmV5OiAjRDRENEQ0O1xyXG4kc21va2U6ICNFREVERUQ7XHJcbiR3aGl0ZS1zbW9rZTogI0Y4RjhGODtcclxuIl19 */"

/***/ }),

/***/ "./src/app/home/components/navbar/navbar.component.ts":
/*!************************************************************!*\
  !*** ./src/app/home/components/navbar/navbar.component.ts ***!
  \************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/home/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/home/components/navbar/navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/home/components/on-site-interpreter-price-card/on-site-interpreter-price-card.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/home/components/on-site-interpreter-price-card/on-site-interpreter-price-card.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"on-site-interpreter-price-card\">\n  <div class=\"col-xs-12 col-sm-6 left-col\">\n    <div class=\"row select-lang\">\n      <div class=\"col-sm-6 source-lang\">\n        <app-select-lang type=\"source\" color=\"sea-green\"></app-select-lang>\n      </div>\n      <div class=\"col-sm-6 target-lang\">\n        <app-select-lang type=\"target\" color=\"sea-green\"></app-select-lang>\n      </div>\n    </div>\n    <app-location-selector></app-location-selector>\n    <app-interpretation-type-selector></app-interpretation-type-selector>\n    <app-date-picker type=\"starting-date\"></app-date-picker>\n    <app-date-picker type=\"ending-date\"></app-date-picker>\n    <div class=\"row legal-aid\">\n      <div class=\"col-sm-9 heading\">\n        <h3>Legal Aid Case</h3>\n      </div>\n      <div class=\"col-sm-3 switch\">\n        <app-custom-switch (checkEvent)=\"onCheckHandler($event)\"></app-custom-switch>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xs-12 col-sm-6 right-col\">\n    <div class=\"calc-result\">\n      <app-calc-result-wrapper\n        item_name=\"DURATION\"\n        amount=\"2 Hours\"\n        color=\"royal-blue\"\n        ></app-calc-result-wrapper>\n      <app-calc-result-wrapper\n        item_name=\"PROJECT AMOUNT\"\n        amount=\"123\"\n        unit=\"C$\"\n        color=\"grey\"\n        ></app-calc-result-wrapper>\n      <app-calc-result-wrapper\n        item_name=\"TAX\"\n        amount=\"17\"\n        unit=\"C$\"\n        color=\"grey\"\n        ></app-calc-result-wrapper>\n      <app-calc-result-wrapper\n        item_name=\"PROJECT AMOUNT\"\n        amount=\"140\"\n        unit=\"C$\"\n        color=\"lime-green\"\n        ></app-calc-result-wrapper>\n    </div>\n    <div class=\"button-div\">\n      <app-general-button\n       color=\"lime-green\">\n       FNID TRANSLATE NOW >\n      </app-general-button>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/components/on-site-interpreter-price-card/on-site-interpreter-price-card.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/home/components/on-site-interpreter-price-card/on-site-interpreter-price-card.component.scss ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".on-site-interpreter-price-card {\n  display: flex;\n  width: 960px;\n  margin-top: 40px;\n  padding: 30px;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: stretch;\n  box-shadow: 0 40px 120px -20px rgba(96, 124, 241, 0.8);\n  color: #8E8E8E;\n  border-radius: 20px;\n  background-color: #fff;\n  margin-left: 0;\n  margin-right: 0; }\n  .on-site-interpreter-price-card .select-lang {\n    width: 100%;\n    margin-bottom: 15px; }\n  .on-site-interpreter-price-card .select-lang div {\n      padding-right: 0;\n      padding-left: 10px; }\n  .on-site-interpreter-price-card .legal-aid {\n    display: flex;\n    margin-top: 1px;\n    padding-right: 18px;\n    justify-content: space-between;\n    align-items: center;\n    border-radius: 10px;\n    background-color: #F8F8F8;\n    margin-left: 0;\n    margin-right: 0; }\n  .on-site-interpreter-price-card .legal-aid .heading h3 {\n      margin-top: 0;\n      font-size: 18px; }\n  .on-site-interpreter-price-card .legal-aid .switch {\n      display: flex;\n      align-items: center;\n      justify-content: flex-end;\n      height: 70px;\n      padding-top: 10px; }\n  .on-site-interpreter-price-card .right-col .button-div {\n    margin-left: 160px;\n    margin-top: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jb21wb25lbnRzL29uLXNpdGUtaW50ZXJwcmV0ZXItcHJpY2UtY2FyZC9HOlxcUHJvamVjdFxcT3JoYW5DYW0tRnJvbnRFbmRcXHdvcmtcXGN1endlYmFwcC9zcmNcXGFwcFxcaG9tZVxcY29tcG9uZW50c1xcb24tc2l0ZS1pbnRlcnByZXRlci1wcmljZS1jYXJkXFxvbi1zaXRlLWludGVycHJldGVyLXByaWNlLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvY29tcG9uZW50cy9vbi1zaXRlLWludGVycHJldGVyLXByaWNlLWNhcmQvRzpcXFByb2plY3RcXE9yaGFuQ2FtLUZyb250RW5kXFx3b3JrXFxjdXp3ZWJhcHAvc3JjXFxhc3NldHNcXHNjc3NcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUlJLGNBQWE7RUFDYixhQUFZO0VBQ1osaUJBQWdCO0VBQ2hCLGNBQWE7RUFLYixvQkFBbUI7RUFJbkIsK0JBQThCO0VBSTlCLHFCQUFvQjtFQUNwQix1RENwQmdCO0VEcUJoQixlQ0pVO0VES1Ysb0JBQW1CO0VBQ25CLHVCQUFzQjtFQUN0QixlQUFjO0VBQ2QsZ0JBQWUsRUFnRGxCO0VBMUVEO0lBNEJRLFlBQVc7SUFDWCxvQkFBbUIsRUFLdEI7RUFsQ0w7TUErQlksaUJBQWdCO01BQ2hCLG1CQUFrQixFQUNyQjtFQWpDVDtJQXNDUSxjQUFhO0lBQ2IsZ0JBQWU7SUFDZixvQkFBbUI7SUFJbkIsK0JBQThCO0lBSTlCLG9CQUFtQjtJQUNuQixvQkFBbUI7SUFDbkIsMEJDN0JhO0lEOEJiLGVBQWM7SUFDZCxnQkFBZSxFQWNsQjtFQWxFTDtNQXVEZ0IsY0FBYTtNQUNiLGdCQUFlLEVBQ2xCO0VBekRiO01BNERZLGNBQWE7TUFDYixvQkFBbUI7TUFDbkIsMEJBQXlCO01BQ3pCLGFBQVk7TUFDWixrQkFBaUIsRUFDcEI7RUFqRVQ7SUFzRVksbUJBQWtCO0lBQ2xCLGlCQUFnQixFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY29tcG9uZW50cy9vbi1zaXRlLWludGVycHJldGVyLXByaWNlLWNhcmQvb24tc2l0ZS1pbnRlcnByZXRlci1wcmljZS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInZhcmlhYmxlc1wiO1xyXG5cclxuLm9uLXNpdGUtaW50ZXJwcmV0ZXItcHJpY2UtY2FyZCB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiA5NjBweDtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xyXG4gICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XHJcbiAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xyXG4gICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IHN0cmV0Y2g7XHJcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgLW1zLWZsZXgtYWxpZ246IHN0cmV0Y2g7XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgIGJveC1zaGFkb3c6IDAgNDBweCAxMjBweCAtMjBweCByZ2JhKCRyb3lhbC1ibHVlLCAwLjgpO1xyXG4gICAgY29sb3I6ICRncmV5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIC5zZWxlY3QtbGFuZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5sZWdhbC1haWQge1xyXG4gICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMXB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE4cHg7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcclxuICAgICAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGUtc21va2U7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgIC5oZWFkaW5nIHtcclxuICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuc3dpdGNoIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnJpZ2h0LWNvbCB7XHJcbiAgICAgICAgLmJ1dHRvbi1kaXYge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTYwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiJGZvbnQtZmFtaWx5OiBRdWlja3NhbmQsc2Fucy1zZXJpZjtcclxuJGltZy1wYXRoOiBcInNyYy9hc3NldHMvaW1nc1wiO1xyXG5cclxuJHJveWFsLWJsdWU6ICM2MDdDRjE7XHJcbiRzZWEtZ3JlZW46ICMyM0I3QkI7XHJcbiRwdXJwbGU6ICM5QzZCQ0U7XHJcbiRsaW1lLWdyZWVuOiAjNDREODVDO1xyXG4kYmx1ZTogIzBBNzJGNDtcclxuJGdvbGQ6ICNFQkM4M0M7XHJcbiRyZWQ6ICNFQjVBMkQ7XHJcblxyXG4kbGF2ZW5kZXI6ICNFQUVFRkY7XHJcbiRhenVyZTogI0U4RkVGRjtcclxuJHBpbmstbGF2ZW5kZXI6ICNGMUU0RkY7XHJcbiRob25leWRldzogI0U2RkZERTtcclxuJGFsaWNlLWJsdWU6ICNERUVERkY7XHJcbiRjb3Juc2lsazogI0ZGRjhEQztcclxuJG1pc3R5LXJvc2U6ICNGRkU4RTE7XHJcblxyXG4kZGltLWdyZXk6ICM0NjQ2NDY7XHJcbiRncmV5OiAjOEU4RThFO1xyXG4kbGlnaHQtZ3JleTogI0Q0RDRENDtcclxuJHNtb2tlOiAjRURFREVEO1xyXG4kd2hpdGUtc21va2U6ICNGOEY4Rjg7XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/components/on-site-interpreter-price-card/on-site-interpreter-price-card.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/home/components/on-site-interpreter-price-card/on-site-interpreter-price-card.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: OnSiteInterpreterPriceCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnSiteInterpreterPriceCardComponent", function() { return OnSiteInterpreterPriceCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OnSiteInterpreterPriceCardComponent = /** @class */ (function () {
    function OnSiteInterpreterPriceCardComponent() {
    }
    OnSiteInterpreterPriceCardComponent.prototype.ngOnInit = function () {
    };
    OnSiteInterpreterPriceCardComponent.prototype.onCheckHandler = function (event) {
    };
    OnSiteInterpreterPriceCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-on-site-interpreter-price-card',
            template: __webpack_require__(/*! ./on-site-interpreter-price-card.component.html */ "./src/app/home/components/on-site-interpreter-price-card/on-site-interpreter-price-card.component.html"),
            styles: [__webpack_require__(/*! ./on-site-interpreter-price-card.component.scss */ "./src/app/home/components/on-site-interpreter-price-card/on-site-interpreter-price-card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OnSiteInterpreterPriceCardComponent);
    return OnSiteInterpreterPriceCardComponent;
}());



/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/home/pages/home/home.component.ts");
/* harmony import */ var _pages_doc_trans_page_doc_trans_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/doc-trans-page/doc-trans-page.component */ "./src/app/home/pages/doc-trans-page/doc-trans-page.component.ts");
/* harmony import */ var _pages_on_site_interpreter_on_site_interpreter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/on-site-interpreter/on-site-interpreter.component */ "./src/app/home/pages/on-site-interpreter/on-site-interpreter.component.ts");






var routes = [
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'doc-trans', component: _pages_doc_trans_page_doc_trans_page_component__WEBPACK_IMPORTED_MODULE_4__["DocTransPageComponent"] },
    { path: 'on-site', component: _pages_on_site_interpreter_on_site_interpreter_component__WEBPACK_IMPORTED_MODULE_5__["OnSiteInterpreterComponent"] }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _pages_doc_trans_page_doc_trans_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/doc-trans-page/doc-trans-page.component */ "./src/app/home/pages/doc-trans-page/doc-trans-page.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/home/pages/home/home.component.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _components_doc_tran_price_card_doc_tran_price_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/doc-tran-price-card/doc-tran-price-card.component */ "./src/app/home/components/doc-tran-price-card/doc-tran-price-card.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/home/components/navbar/navbar.component.ts");
/* harmony import */ var _pages_on_site_interpreter_on_site_interpreter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/on-site-interpreter/on-site-interpreter.component */ "./src/app/home/pages/on-site-interpreter/on-site-interpreter.component.ts");
/* harmony import */ var _components_on_site_interpreter_price_card_on_site_interpreter_price_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/on-site-interpreter-price-card/on-site-interpreter-price-card.component */ "./src/app/home/components/on-site-interpreter-price-card/on-site-interpreter-price-card.component.ts");
/* harmony import */ var _components_document_translation_hero_document_translation_hero_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/document-translation-hero/document-translation-hero.component */ "./src/app/home/components/document-translation-hero/document-translation-hero.component.ts");












var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pages_doc_trans_page_doc_trans_page_component__WEBPACK_IMPORTED_MODULE_4__["DocTransPageComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _components_doc_tran_price_card_doc_tran_price_card_component__WEBPACK_IMPORTED_MODULE_7__["DocTranPriceCardComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _pages_on_site_interpreter_on_site_interpreter_component__WEBPACK_IMPORTED_MODULE_9__["OnSiteInterpreterComponent"],
                _components_on_site_interpreter_price_card_on_site_interpreter_price_card_component__WEBPACK_IMPORTED_MODULE_10__["OnSiteInterpreterPriceCardComponent"],
                _components_document_translation_hero_document_translation_hero_component__WEBPACK_IMPORTED_MODULE_11__["DocumentTranslationHeroComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomeRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/home/pages/doc-trans-page/doc-trans-page.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/home/pages/doc-trans-page/doc-trans-page.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<app-document-translation-hero></app-document-translation-hero>\n<div class=\"price-card-wrapper\">\n    <app-doc-tran-price-card></app-doc-tran-price-card>\n</div>"

/***/ }),

/***/ "./src/app/home/pages/doc-trans-page/doc-trans-page.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/home/pages/doc-trans-page/doc-trans-page.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".price-card-wrapper {\n  display: flex;\n  margin-top: -120px;\n  padding-bottom: 60px;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wYWdlcy9kb2MtdHJhbnMtcGFnZS9HOlxcUHJvamVjdFxcT3JoYW5DYW0tRnJvbnRFbmRcXHdvcmtcXGN1endlYmFwcC9zcmNcXGFwcFxcaG9tZVxccGFnZXNcXGRvYy10cmFucy1wYWdlXFxkb2MtdHJhbnMtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUlJLGNBQWE7RUFDYixtQkFBa0I7RUFDbEIscUJBQW9CO0VBS3BCLHVCQUFzQjtFQUl0Qiw0QkFBMkI7RUFJM0Isb0JBQW1CLEVBQ3RCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9wYWdlcy9kb2MtdHJhbnMtcGFnZS9kb2MtdHJhbnMtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcclxuXHJcbi5wcmljZS1jYXJkLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNjBweDtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIC13ZWJraXQtYm94LXBhY2s6IHN0YXJ0O1xyXG4gICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAtbXMtZmxleC1wYWNrOiBzdGFydDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/pages/doc-trans-page/doc-trans-page.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/home/pages/doc-trans-page/doc-trans-page.component.ts ***!
  \***********************************************************************/
/*! exports provided: DocTransPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocTransPageComponent", function() { return DocTransPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _root_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../root-store */ "./src/app/root-store/index.ts");




var DocTransPageComponent = /** @class */ (function () {
    function DocTransPageComponent(store$) {
        this.store$ = store$;
    }
    DocTransPageComponent.prototype.ngOnInit = function () {
        this.store$.dispatch(new _root_store__WEBPACK_IMPORTED_MODULE_3__["PricemodelStoreActions"].INIT_JOB_TYPE({
            job_type: 2
        }));
    };
    DocTransPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-doc-trans-page',
            template: __webpack_require__(/*! ./doc-trans-page.component.html */ "./src/app/home/pages/doc-trans-page/doc-trans-page.component.html"),
            styles: [__webpack_require__(/*! ./doc-trans-page.component.scss */ "./src/app/home/pages/doc-trans-page/doc-trans-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], DocTransPageComponent);
    return DocTransPageComponent;
}());



/***/ }),

/***/ "./src/app/home/pages/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/home/pages/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n"

/***/ }),

/***/ "./src/app/home/pages/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/home/pages/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/pages/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/home/pages/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/pages/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/pages/on-site-interpreter/on-site-interpreter.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/home/pages/on-site-interpreter/on-site-interpreter.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"on-site-interpreter-hero\">\n    <h1 class=\"heading\">Hire the professional translators on their fields</h1>\n    <h3 class=\"subheading\">Make your company global with speaking in 85 Languages</h3>\n    <div class=\"text\">\n        <strong>On-Site Interpretation</strong> for <strong>Companies</strong>\n    </div>\n    <app-on-site-interpreter-price-card></app-on-site-interpreter-price-card>\n</div> "

/***/ }),

/***/ "./src/app/home/pages/on-site-interpreter/on-site-interpreter.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/home/pages/on-site-interpreter/on-site-interpreter.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".on-site-interpreter-hero {\n  display: flex;\n  padding: 30px 10% 70px;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-image: url('on-site-page-background.png'), linear-gradient(180deg, #e8feff, #fff);\n  background-position: 50% 0,0 0;\n  background-size: 950px,auto;\n  background-repeat: repeat-x,repeat;\n  color: #23b7bb;\n  text-align: center; }\n  .on-site-interpreter-hero .heading {\n    margin-bottom: 5px;\n    font-weight: 700;\n    text-align: center; }\n  .on-site-interpreter-hero .subheading {\n    margin-top: 0;\n    margin-bottom: 27px;\n    font-weight: 400;\n    text-align: center; }\n  .on-site-interpreter-hero .text {\n    padding: 10px;\n    color: #23b7bb;\n    text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wYWdlcy9vbi1zaXRlLWludGVycHJldGVyL0c6XFxQcm9qZWN0XFxPcmhhbkNhbS1Gcm9udEVuZFxcd29ya1xcY3V6d2ViYXBwL3NyY1xcYXBwXFxob21lXFxwYWdlc1xcb24tc2l0ZS1pbnRlcnByZXRlclxcb24tc2l0ZS1pbnRlcnByZXRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGNBQWE7RUFDYix1QkFBc0I7RUFFdEIsdUJBQXNCO0VBSXRCLHdCQUF1QjtFQUl2QixvQkFBbUI7RUFFbkIsNkZBQTREO0VBQzVELCtCQUE4QjtFQUM5Qiw0QkFBMkI7RUFDM0IsbUNBQWtDO0VBQ2xDLGVBQWM7RUFDZCxtQkFBa0IsRUFpQnJCO0VBcENEO0lBcUJRLG1CQUFrQjtJQUNsQixpQkFBZ0I7SUFDaEIsbUJBQWtCLEVBQ3JCO0VBeEJMO0lBMEJRLGNBQWE7SUFDYixvQkFBbUI7SUFDbkIsaUJBQWdCO0lBQ2hCLG1CQUFrQixFQUNyQjtFQTlCTDtJQWdDUSxjQUFhO0lBQ2IsZUFBYztJQUNkLG1CQUFrQixFQUNyQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcGFnZXMvb24tc2l0ZS1pbnRlcnByZXRlci9vbi1zaXRlLWludGVycHJldGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInZhcmlhYmxlc1wiO1xyXG5cclxuLm9uLXNpdGUtaW50ZXJwcmV0ZXItaGVybyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZzogMzBweCAxMCUgNzBweDtcclxuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcclxuICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgjeyRpbWctcGF0aH0vb24tc2l0ZS1wYWdlLWJhY2tncm91bmQucG5nKSwtd2Via2l0LWdyYWRpZW50KGxpbmVhcixsZWZ0IHRvcCxsZWZ0IGJvdHRvbSxmcm9tKCNlYWVlZmYpLHRvKCNmZmYpKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgjeyRpbWctcGF0aH0vb24tc2l0ZS1wYWdlLWJhY2tncm91bmQucG5nKSxsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCNlOGZlZmYsI2ZmZik7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgMCwwIDA7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDk1MHB4LGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXgscmVwZWF0O1xyXG4gICAgY29sb3I6ICMyM2I3YmI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAuaGVhZGluZyB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnN1YmhlYWRpbmcge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjdweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC50ZXh0IHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMjNiN2JiO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/pages/on-site-interpreter/on-site-interpreter.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/home/pages/on-site-interpreter/on-site-interpreter.component.ts ***!
  \*********************************************************************************/
/*! exports provided: OnSiteInterpreterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnSiteInterpreterComponent", function() { return OnSiteInterpreterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OnSiteInterpreterComponent = /** @class */ (function () {
    function OnSiteInterpreterComponent() {
    }
    OnSiteInterpreterComponent.prototype.ngOnInit = function () {
    };
    OnSiteInterpreterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-on-site-interpreter',
            template: __webpack_require__(/*! ./on-site-interpreter.component.html */ "./src/app/home/pages/on-site-interpreter/on-site-interpreter.component.html"),
            styles: [__webpack_require__(/*! ./on-site-interpreter.component.scss */ "./src/app/home/pages/on-site-interpreter/on-site-interpreter.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OnSiteInterpreterComponent);
    return OnSiteInterpreterComponent;
}());



/***/ }),

/***/ "./src/app/root-store/auth-store/actions.ts":
/*!**************************************************!*\
  !*** ./src/app/root-store/auth-store/actions.ts ***!
  \**************************************************/
/*! exports provided: ActionTypes, SET_EMAIL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_EMAIL", function() { return SET_EMAIL; });
var ActionTypes;
(function (ActionTypes) {
    ActionTypes["SET_EMAIL"] = "[Auth Action] SET EMAIL";
})(ActionTypes || (ActionTypes = {}));
var SET_EMAIL = /** @class */ (function () {
    function SET_EMAIL(payload) {
        this.payload = payload;
        this.type = ActionTypes.SET_EMAIL;
    }
    return SET_EMAIL;
}());



/***/ }),

/***/ "./src/app/root-store/auth-store/auth-store.module.ts":
/*!************************************************************!*\
  !*** ./src/app/root-store/auth-store/auth-store.module.ts ***!
  \************************************************************/
/*! exports provided: AuthStoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthStoreModule", function() { return AuthStoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducer */ "./src/app/root-store/auth-store/reducer.ts");





var AuthStoreModule = /** @class */ (function () {
    function AuthStoreModule() {
    }
    AuthStoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature('auth', _reducer__WEBPACK_IMPORTED_MODULE_4__["authReducer"])
            ]
        })
    ], AuthStoreModule);
    return AuthStoreModule;
}());



/***/ }),

/***/ "./src/app/root-store/auth-store/index.ts":
/*!************************************************!*\
  !*** ./src/app/root-store/auth-store/index.ts ***!
  \************************************************/
/*! exports provided: AuthStoreModule, AuthStoreActions, AuthStoreState, AuthStoreSelectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/app/root-store/auth-store/actions.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "AuthStoreActions", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ "./src/app/root-store/auth-store/state.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "AuthStoreState", function() { return _state__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors */ "./src/app/root-store/auth-store/selectors.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "AuthStoreSelectors", function() { return _selectors__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _auth_store_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-store.module */ "./src/app/root-store/auth-store/auth-store.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthStoreModule", function() { return _auth_store_module__WEBPACK_IMPORTED_MODULE_3__["AuthStoreModule"]; });








/***/ }),

/***/ "./src/app/root-store/auth-store/reducer.ts":
/*!**************************************************!*\
  !*** ./src/app/root-store/auth-store/reducer.ts ***!
  \**************************************************/
/*! exports provided: authReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return authReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./src/app/root-store/auth-store/actions.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ "./src/app/root-store/auth-store/state.ts");



function authReducer(state, action) {
    if (state === void 0) { state = _state__WEBPACK_IMPORTED_MODULE_2__["initialState"]; }
    switch (action.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].SET_EMAIL:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { email: action.payload.email });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/root-store/auth-store/selectors.ts":
/*!****************************************************!*\
  !*** ./src/app/root-store/auth-store/selectors.ts ***!
  \****************************************************/
/*! exports provided: selectAuthState, selectAuthEmail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAuthState", function() { return selectAuthState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAuthEmail", function() { return selectAuthEmail; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var getEmail = function (state) { return state.email; };
var selectAuthState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('auth');
var selectAuthEmail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectAuthState, getEmail);


/***/ }),

/***/ "./src/app/root-store/auth-store/state.ts":
/*!************************************************!*\
  !*** ./src/app/root-store/auth-store/state.ts ***!
  \************************************************/
/*! exports provided: initialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
var initialState = {
    email: ''
};


/***/ }),

/***/ "./src/app/root-store/common-store/actions.ts":
/*!****************************************************!*\
  !*** ./src/app/root-store/common-store/actions.ts ***!
  \****************************************************/
/*! exports provided: ActionTypes, WatchIntroAction, CloseIntroAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchIntroAction", function() { return WatchIntroAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseIntroAction", function() { return CloseIntroAction; });
var ActionTypes;
(function (ActionTypes) {
    ActionTypes["WATCH_INTRO"] = "[Common Action] WATCH INTRO";
    ActionTypes["CLOSE_INTRO"] = "[Common Action] CLOSE INTRO";
})(ActionTypes || (ActionTypes = {}));
var WatchIntroAction = /** @class */ (function () {
    function WatchIntroAction() {
        this.type = ActionTypes.WATCH_INTRO;
    }
    return WatchIntroAction;
}());

var CloseIntroAction = /** @class */ (function () {
    function CloseIntroAction() {
        this.type = ActionTypes.CLOSE_INTRO;
    }
    return CloseIntroAction;
}());



/***/ }),

/***/ "./src/app/root-store/common-store/common-store.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/root-store/common-store/common-store.module.ts ***!
  \****************************************************************/
/*! exports provided: CommonStoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonStoreModule", function() { return CommonStoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducer */ "./src/app/root-store/common-store/reducer.ts");





var CommonStoreModule = /** @class */ (function () {
    function CommonStoreModule() {
    }
    CommonStoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature('common', _reducer__WEBPACK_IMPORTED_MODULE_4__["commonReducer"])
            ],
            providers: []
        })
    ], CommonStoreModule);
    return CommonStoreModule;
}());



/***/ }),

/***/ "./src/app/root-store/common-store/index.ts":
/*!**************************************************!*\
  !*** ./src/app/root-store/common-store/index.ts ***!
  \**************************************************/
/*! exports provided: CommonStoreModule, CommonStoreActions, CommonStoreState, CommonStoreSelectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/app/root-store/common-store/actions.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "CommonStoreActions", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ "./src/app/root-store/common-store/state.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "CommonStoreState", function() { return _state__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors */ "./src/app/root-store/common-store/selectors.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "CommonStoreSelectors", function() { return _selectors__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _common_store_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common-store.module */ "./src/app/root-store/common-store/common-store.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommonStoreModule", function() { return _common_store_module__WEBPACK_IMPORTED_MODULE_3__["CommonStoreModule"]; });








/***/ }),

/***/ "./src/app/root-store/common-store/reducer.ts":
/*!****************************************************!*\
  !*** ./src/app/root-store/common-store/reducer.ts ***!
  \****************************************************/
/*! exports provided: commonReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commonReducer", function() { return commonReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./src/app/root-store/common-store/actions.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ "./src/app/root-store/common-store/state.ts");



function commonReducer(state, action) {
    if (state === void 0) { state = _state__WEBPACK_IMPORTED_MODULE_2__["initialState"]; }
    switch (action.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].WATCH_INTRO:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { isWatch: true });
        case _actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].CLOSE_INTRO:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { isWatch: false });
        default: {
            return state;
        }
    }
}


/***/ }),

/***/ "./src/app/root-store/common-store/selectors.ts":
/*!******************************************************!*\
  !*** ./src/app/root-store/common-store/selectors.ts ***!
  \******************************************************/
/*! exports provided: selectCommonState, selectCommonIsWatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCommonState", function() { return selectCommonState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCommonIsWatch", function() { return selectCommonIsWatch; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var getIsWatch = function (state) { return state.isWatch; };
var selectCommonState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('common');
var selectCommonIsWatch = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectCommonState, getIsWatch);


/***/ }),

/***/ "./src/app/root-store/common-store/state.ts":
/*!**************************************************!*\
  !*** ./src/app/root-store/common-store/state.ts ***!
  \**************************************************/
/*! exports provided: initialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
var initialState = {
    isWatch: false
};


/***/ }),

/***/ "./src/app/root-store/index.ts":
/*!*************************************!*\
  !*** ./src/app/root-store/index.ts ***!
  \*************************************/
/*! exports provided: RootStoreState, RootStoreModule, RootStoreSelectors, CommonStoreModule, CommonStoreActions, CommonStoreState, CommonStoreSelectors, PricemodelStoreModule, PricemodelStoreActions, PricemodelStoreState, PriceModelStoreSelectors, AuthStoreModule, AuthStoreActions, AuthStoreState, AuthStoreSelectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _root_store_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./root-store.module */ "./src/app/root-store/root-store.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RootStoreModule", function() { return _root_store_module__WEBPACK_IMPORTED_MODULE_0__["RootStoreModule"]; });

/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectors */ "./src/app/root-store/selectors.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "RootStoreSelectors", function() { return _selectors__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ "./src/app/root-store/state.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_state__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "RootStoreState", function() { return _state__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _common_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common-store */ "./src/app/root-store/common-store/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommonStoreModule", function() { return _common_store__WEBPACK_IMPORTED_MODULE_3__["CommonStoreModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommonStoreActions", function() { return _common_store__WEBPACK_IMPORTED_MODULE_3__["CommonStoreActions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommonStoreState", function() { return _common_store__WEBPACK_IMPORTED_MODULE_3__["CommonStoreState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommonStoreSelectors", function() { return _common_store__WEBPACK_IMPORTED_MODULE_3__["CommonStoreSelectors"]; });

/* harmony import */ var _pricemodel_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pricemodel-store */ "./src/app/root-store/pricemodel-store/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PricemodelStoreModule", function() { return _pricemodel_store__WEBPACK_IMPORTED_MODULE_4__["PricemodelStoreModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PricemodelStoreActions", function() { return _pricemodel_store__WEBPACK_IMPORTED_MODULE_4__["PricemodelStoreActions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PricemodelStoreState", function() { return _pricemodel_store__WEBPACK_IMPORTED_MODULE_4__["PricemodelStoreState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PriceModelStoreSelectors", function() { return _pricemodel_store__WEBPACK_IMPORTED_MODULE_4__["PriceModelStoreSelectors"]; });

/* harmony import */ var _auth_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-store */ "./src/app/root-store/auth-store/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthStoreModule", function() { return _auth_store__WEBPACK_IMPORTED_MODULE_5__["AuthStoreModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthStoreActions", function() { return _auth_store__WEBPACK_IMPORTED_MODULE_5__["AuthStoreActions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthStoreState", function() { return _auth_store__WEBPACK_IMPORTED_MODULE_5__["AuthStoreState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthStoreSelectors", function() { return _auth_store__WEBPACK_IMPORTED_MODULE_5__["AuthStoreSelectors"]; });










/***/ }),

/***/ "./src/app/root-store/pricemodel-store/actions.ts":
/*!********************************************************!*\
  !*** ./src/app/root-store/pricemodel-store/actions.ts ***!
  \********************************************************/
/*! exports provided: ActionTypes, INIT_JOB_TYPE, SET_FROM_LANG, SET_TO_LANG, SET_NATURE, SET_START_DATE, SET_END_DATE, SET_LAO_PROJECT, SET_WORD_COUNT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INIT_JOB_TYPE", function() { return INIT_JOB_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_FROM_LANG", function() { return SET_FROM_LANG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_TO_LANG", function() { return SET_TO_LANG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_NATURE", function() { return SET_NATURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_START_DATE", function() { return SET_START_DATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_END_DATE", function() { return SET_END_DATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_LAO_PROJECT", function() { return SET_LAO_PROJECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_WORD_COUNT", function() { return SET_WORD_COUNT; });
var ActionTypes;
(function (ActionTypes) {
    ActionTypes["INIT_JOB_TYPE"] = "[Pricemodel Action] INIT JOB TYPE";
    ActionTypes["SET_FROM_LANG"] = "[Pricemodel Action] SET SOURCE LANG";
    ActionTypes["SET_TO_LANG"] = "[Pricemodel Action] SET TARGET LANG";
    ActionTypes["SET_START_DATE"] = "[Pricemodel Action] SET START DATE";
    ActionTypes["SET_END_DATE"] = "[Pricemodel Action] SET END DATE";
    ActionTypes["SET_NATURE"] = "[Pricemodel Action] SET NATURE";
    ActionTypes["SET_WORD_COUNT"] = "[Pricemodel Action] SET WORD COUNT";
    ActionTypes["UPLOAD_DOCUMENT"] = "[Pricemodel Action] SET UPLOAD DOCUMENT";
    ActionTypes["SET_CURRENCY"] = "[Pricemodel Action] SET CURRENCY";
    ActionTypes["SET_PROOF_READING"] = "[Pricemodel Action] SET PROOF READING";
    ActionTypes["SET_LAO_PROJECT"] = "[Pricemodel Action] SET LAO PROJECT";
    ActionTypes["SET_JOB"] = "[Pricemodel Action] SET JOB";
    ActionTypes["SET_COUNTRY"] = "[Pricemodel Action] SET COUNTRY";
    ActionTypes["SET_PROVINCE"] = "[Pricemodel Action] SET PROVINCE";
    ActionTypes["SET_PROMOTION_CODE"] = "[Pricemodel Action] SET PROMOTION CODE";
})(ActionTypes || (ActionTypes = {}));
var INIT_JOB_TYPE = /** @class */ (function () {
    function INIT_JOB_TYPE(payload) {
        this.payload = payload;
        this.type = ActionTypes.INIT_JOB_TYPE;
    }
    return INIT_JOB_TYPE;
}());

var SET_FROM_LANG = /** @class */ (function () {
    function SET_FROM_LANG(payload) {
        this.payload = payload;
        this.type = ActionTypes.SET_FROM_LANG;
    }
    return SET_FROM_LANG;
}());

var SET_TO_LANG = /** @class */ (function () {
    function SET_TO_LANG(payload) {
        this.payload = payload;
        this.type = ActionTypes.SET_TO_LANG;
    }
    return SET_TO_LANG;
}());

var SET_NATURE = /** @class */ (function () {
    function SET_NATURE(payload) {
        this.payload = payload;
        this.type = ActionTypes.SET_NATURE;
    }
    return SET_NATURE;
}());

var SET_START_DATE = /** @class */ (function () {
    function SET_START_DATE(payload) {
        this.payload = payload;
        this.type = ActionTypes.SET_START_DATE;
    }
    return SET_START_DATE;
}());

var SET_END_DATE = /** @class */ (function () {
    function SET_END_DATE(payload) {
        this.payload = payload;
        this.type = ActionTypes.SET_END_DATE;
    }
    return SET_END_DATE;
}());

var SET_LAO_PROJECT = /** @class */ (function () {
    function SET_LAO_PROJECT(payload) {
        this.payload = payload;
        this.type = ActionTypes.SET_LAO_PROJECT;
    }
    return SET_LAO_PROJECT;
}());

var SET_WORD_COUNT = /** @class */ (function () {
    function SET_WORD_COUNT(payload) {
        this.payload = payload;
        this.type = ActionTypes.SET_WORD_COUNT;
    }
    return SET_WORD_COUNT;
}());



/***/ }),

/***/ "./src/app/root-store/pricemodel-store/index.ts":
/*!******************************************************!*\
  !*** ./src/app/root-store/pricemodel-store/index.ts ***!
  \******************************************************/
/*! exports provided: PricemodelStoreModule, PricemodelStoreActions, PricemodelStoreState, PriceModelStoreSelectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/app/root-store/pricemodel-store/actions.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "PricemodelStoreActions", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ "./src/app/root-store/pricemodel-store/state.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "PricemodelStoreState", function() { return _state__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors */ "./src/app/root-store/pricemodel-store/selectors.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "PriceModelStoreSelectors", function() { return _selectors__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _pricemodel_store_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pricemodel-store.module */ "./src/app/root-store/pricemodel-store/pricemodel-store.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PricemodelStoreModule", function() { return _pricemodel_store_module__WEBPACK_IMPORTED_MODULE_3__["PricemodelStoreModule"]; });








/***/ }),

/***/ "./src/app/root-store/pricemodel-store/pricemodel-store.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/root-store/pricemodel-store/pricemodel-store.module.ts ***!
  \************************************************************************/
/*! exports provided: PricemodelStoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricemodelStoreModule", function() { return PricemodelStoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducer */ "./src/app/root-store/pricemodel-store/reducer.ts");





var PricemodelStoreModule = /** @class */ (function () {
    function PricemodelStoreModule() {
    }
    PricemodelStoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature('pricemodel', _reducer__WEBPACK_IMPORTED_MODULE_4__["pricemodelReducer"])
            ]
        })
    ], PricemodelStoreModule);
    return PricemodelStoreModule;
}());



/***/ }),

/***/ "./src/app/root-store/pricemodel-store/reducer.ts":
/*!********************************************************!*\
  !*** ./src/app/root-store/pricemodel-store/reducer.ts ***!
  \********************************************************/
/*! exports provided: pricemodelReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pricemodelReducer", function() { return pricemodelReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./src/app/root-store/pricemodel-store/actions.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ "./src/app/root-store/pricemodel-store/state.ts");



function pricemodelReducer(state, action) {
    if (state === void 0) { state = _state__WEBPACK_IMPORTED_MODULE_2__["initialState"]; }
    switch (action.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].INIT_JOB_TYPE:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { job_type: action.payload.job_type });
        case _actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].SET_FROM_LANG:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { from_language: action.payload.from_language });
        case _actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].SET_TO_LANG:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { to_languaage: action.payload.to_language });
        case _actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].SET_NATURE:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { nature: action.payload.nature });
        case _actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].SET_START_DATE:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { start_date: action.payload.start_date });
        case _actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].SET_END_DATE:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { end_date: action.payload.end_date });
        case _actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].SET_LAO_PROJECT:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { is_lao_project: action.payload.is_lao_project });
        default: {
            return state;
        }
    }
}


/***/ }),

/***/ "./src/app/root-store/pricemodel-store/selectors.ts":
/*!**********************************************************!*\
  !*** ./src/app/root-store/pricemodel-store/selectors.ts ***!
  \**********************************************************/
/*! exports provided: selectCommonState, selectFromLang, selectToLang */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCommonState", function() { return selectCommonState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFromLang", function() { return selectFromLang; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectToLang", function() { return selectToLang; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var getFromLang = function (state) { return state.from_language; };
var getToLang = function (state) { return state.to_languaage; };
var selectCommonState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('pricemodel');
var selectFromLang = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectCommonState, getFromLang);
var selectToLang = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectCommonState, getToLang);


/***/ }),

/***/ "./src/app/root-store/pricemodel-store/state.ts":
/*!******************************************************!*\
  !*** ./src/app/root-store/pricemodel-store/state.ts ***!
  \******************************************************/
/*! exports provided: initialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
var initialState = {
    job_type: 1,
    start_date: '2018-1-11T1:14',
    end_date: '2018-1-12T5:15',
    from_language: null,
    to_languaage: null,
    nature: 3,
    word_count: 340,
    currency: 'CAD',
    job_distance: 12,
    proof_reading_enabled: true,
    is_lao_project: false,
    job: 2,
    country: 1,
    province: 2,
    promotion_code: 'asdfqwer',
};


/***/ }),

/***/ "./src/app/root-store/root-store.module.ts":
/*!*************************************************!*\
  !*** ./src/app/root-store/root-store.module.ts ***!
  \*************************************************/
/*! exports provided: RootStoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootStoreModule", function() { return RootStoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _common_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common-store */ "./src/app/root-store/common-store/index.ts");
/* harmony import */ var _pricemodel_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pricemodel-store */ "./src/app/root-store/pricemodel-store/index.ts");
/* harmony import */ var _auth_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth-store */ "./src/app/root-store/auth-store/index.ts");







var RootStoreModule = /** @class */ (function () {
    function RootStoreModule() {
    }
    RootStoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _common_store__WEBPACK_IMPORTED_MODULE_4__["CommonStoreModule"],
                _pricemodel_store__WEBPACK_IMPORTED_MODULE_5__["PricemodelStoreModule"],
                _auth_store__WEBPACK_IMPORTED_MODULE_6__["AuthStoreModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forRoot({})
            ],
        })
    ], RootStoreModule);
    return RootStoreModule;
}());



/***/ }),

/***/ "./src/app/root-store/selectors.ts":
/*!*****************************************!*\
  !*** ./src/app/root-store/selectors.ts ***!
  \*****************************************/
/*! exports provided: selectIsWatch, selectEmail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIsWatch", function() { return selectIsWatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEmail", function() { return selectEmail; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _common_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common-store */ "./src/app/root-store/common-store/index.ts");
/* harmony import */ var _auth_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-store */ "./src/app/root-store/auth-store/index.ts");



var selectIsWatch = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_common_store__WEBPACK_IMPORTED_MODULE_1__["CommonStoreSelectors"].selectCommonIsWatch, function (commonIsWatch) {
    return commonIsWatch;
});
var selectEmail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_auth_store__WEBPACK_IMPORTED_MODULE_2__["AuthStoreSelectors"].selectAuthEmail, function (authEmail) {
    return authEmail;
});


/***/ }),

/***/ "./src/app/root-store/state.ts":
/*!*************************************!*\
  !*** ./src/app/root-store/state.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/app/shared/helper/helper.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/helper/helper.service.ts ***!
  \*************************************************/
/*! exports provided: HelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelperService", function() { return HelperService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HelperService = /** @class */ (function () {
    function HelperService() {
    }
    HelperService.prototype.getFormattedDate = function (date) {
        var str = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        return str;
    };
    HelperService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HelperService);
    return HelperService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var _uicomponents_select_lang_select_lang_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./uicomponents/select-lang/select-lang.component */ "./src/app/shared/uicomponents/select-lang/select-lang.component.ts");
/* harmony import */ var _uicomponents_info_select_modal_info_select_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./uicomponents/info-select-modal/info-select-modal.component */ "./src/app/shared/uicomponents/info-select-modal/info-select-modal.component.ts");
/* harmony import */ var _uicomponents_general_button_general_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./uicomponents/general-button/general-button.component */ "./src/app/shared/uicomponents/general-button/general-button.component.ts");
/* harmony import */ var _uicomponents_custom_switch_custom_switch_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./uicomponents/custom-switch/custom-switch.component */ "./src/app/shared/uicomponents/custom-switch/custom-switch.component.ts");
/* harmony import */ var _uicomponents_introbutton_introbutton_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./uicomponents/introbutton/introbutton.component */ "./src/app/shared/uicomponents/introbutton/introbutton.component.ts");
/* harmony import */ var _uicomponents_introvideo_introvideo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./uicomponents/introvideo/introvideo.component */ "./src/app/shared/uicomponents/introvideo/introvideo.component.ts");
/* harmony import */ var _uicomponents_job_button_job_button_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./uicomponents/job-button/job-button.component */ "./src/app/shared/uicomponents/job-button/job-button.component.ts");
/* harmony import */ var _uicomponents_login_section_button_login_section_button_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./uicomponents/login-section-button/login-section-button.component */ "./src/app/shared/uicomponents/login-section-button/login-section-button.component.ts");
/* harmony import */ var _uicomponents_doc_type_selector_doc_type_selector_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./uicomponents/doc-type-selector/doc-type-selector.component */ "./src/app/shared/uicomponents/doc-type-selector/doc-type-selector.component.ts");
/* harmony import */ var _uicomponents_doc_uploader_doc_uploader_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./uicomponents/doc-uploader/doc-uploader.component */ "./src/app/shared/uicomponents/doc-uploader/doc-uploader.component.ts");
/* harmony import */ var _uicomponents_deadline_selector_deadline_selector_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./uicomponents/deadline-selector/deadline-selector.component */ "./src/app/shared/uicomponents/deadline-selector/deadline-selector.component.ts");
/* harmony import */ var _uicomponents_calc_result_wrapper_calc_result_wrapper_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./uicomponents/calc-result-wrapper/calc-result-wrapper.component */ "./src/app/shared/uicomponents/calc-result-wrapper/calc-result-wrapper.component.ts");
/* harmony import */ var _uicomponents_search_input_search_input_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./uicomponents/search-input/search-input.component */ "./src/app/shared/uicomponents/search-input/search-input.component.ts");
/* harmony import */ var _uicomponents_location_selector_location_selector_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./uicomponents/location-selector/location-selector.component */ "./src/app/shared/uicomponents/location-selector/location-selector.component.ts");
/* harmony import */ var _uicomponents_interpretation_type_selector_interpretation_type_selector_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./uicomponents/interpretation-type-selector/interpretation-type-selector.component */ "./src/app/shared/uicomponents/interpretation-type-selector/interpretation-type-selector.component.ts");
/* harmony import */ var _uicomponents_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./uicomponents/date-picker/date-picker.component */ "./src/app/shared/uicomponents/date-picker/date-picker.component.ts");
/* harmony import */ var _helper_helper_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./helper/helper.service */ "./src/app/shared/helper/helper.service.ts");






















var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _uicomponents_select_lang_select_lang_component__WEBPACK_IMPORTED_MODULE_5__["SelectLangComponent"],
                _uicomponents_info_select_modal_info_select_modal_component__WEBPACK_IMPORTED_MODULE_6__["InfoSelectModalComponent"],
                _uicomponents_general_button_general_button_component__WEBPACK_IMPORTED_MODULE_7__["GeneralButtonComponent"],
                _uicomponents_custom_switch_custom_switch_component__WEBPACK_IMPORTED_MODULE_8__["CustomSwitchComponent"],
                _uicomponents_introbutton_introbutton_component__WEBPACK_IMPORTED_MODULE_9__["IntrobuttonComponent"],
                _uicomponents_introvideo_introvideo_component__WEBPACK_IMPORTED_MODULE_10__["IntrovideoComponent"],
                _uicomponents_job_button_job_button_component__WEBPACK_IMPORTED_MODULE_11__["JobButtonComponent"],
                _uicomponents_login_section_button_login_section_button_component__WEBPACK_IMPORTED_MODULE_12__["LoginSectionButtonComponent"],
                _uicomponents_doc_type_selector_doc_type_selector_component__WEBPACK_IMPORTED_MODULE_13__["DocTypeSelectorComponent"],
                _uicomponents_doc_uploader_doc_uploader_component__WEBPACK_IMPORTED_MODULE_14__["DocUploaderComponent"],
                _uicomponents_deadline_selector_deadline_selector_component__WEBPACK_IMPORTED_MODULE_15__["DeadlineSelectorComponent"],
                _uicomponents_calc_result_wrapper_calc_result_wrapper_component__WEBPACK_IMPORTED_MODULE_16__["CalcResultWrapperComponent"],
                _uicomponents_search_input_search_input_component__WEBPACK_IMPORTED_MODULE_17__["SearchInputComponent"],
                _uicomponents_location_selector_location_selector_component__WEBPACK_IMPORTED_MODULE_18__["LocationSelectorComponent"],
                _uicomponents_interpretation_type_selector_interpretation_type_selector_component__WEBPACK_IMPORTED_MODULE_19__["InterpretationTypeSelectorComponent"],
                _uicomponents_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_20__["DatePickerComponent"]
            ],
            exports: [
                _uicomponents_select_lang_select_lang_component__WEBPACK_IMPORTED_MODULE_5__["SelectLangComponent"],
                _uicomponents_info_select_modal_info_select_modal_component__WEBPACK_IMPORTED_MODULE_6__["InfoSelectModalComponent"],
                _uicomponents_general_button_general_button_component__WEBPACK_IMPORTED_MODULE_7__["GeneralButtonComponent"],
                _uicomponents_custom_switch_custom_switch_component__WEBPACK_IMPORTED_MODULE_8__["CustomSwitchComponent"],
                _uicomponents_introbutton_introbutton_component__WEBPACK_IMPORTED_MODULE_9__["IntrobuttonComponent"],
                _uicomponents_introvideo_introvideo_component__WEBPACK_IMPORTED_MODULE_10__["IntrovideoComponent"],
                _uicomponents_job_button_job_button_component__WEBPACK_IMPORTED_MODULE_11__["JobButtonComponent"],
                _uicomponents_login_section_button_login_section_button_component__WEBPACK_IMPORTED_MODULE_12__["LoginSectionButtonComponent"],
                _uicomponents_doc_type_selector_doc_type_selector_component__WEBPACK_IMPORTED_MODULE_13__["DocTypeSelectorComponent"],
                _uicomponents_doc_uploader_doc_uploader_component__WEBPACK_IMPORTED_MODULE_14__["DocUploaderComponent"],
                _uicomponents_deadline_selector_deadline_selector_component__WEBPACK_IMPORTED_MODULE_15__["DeadlineSelectorComponent"],
                _uicomponents_calc_result_wrapper_calc_result_wrapper_component__WEBPACK_IMPORTED_MODULE_16__["CalcResultWrapperComponent"],
                _uicomponents_search_input_search_input_component__WEBPACK_IMPORTED_MODULE_17__["SearchInputComponent"],
                _uicomponents_location_selector_location_selector_component__WEBPACK_IMPORTED_MODULE_18__["LocationSelectorComponent"],
                _uicomponents_interpretation_type_selector_interpretation_type_selector_component__WEBPACK_IMPORTED_MODULE_19__["InterpretationTypeSelectorComponent"],
                _uicomponents_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_20__["DatePickerComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_4__["OwlDateTimeModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_4__["OwlNativeDateTimeModule"]
            ],
            providers: [
                _helper_helper_service__WEBPACK_IMPORTED_MODULE_21__["HelperService"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/uicomponents/calc-result-wrapper/calc-result-wrapper.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/shared/uicomponents/calc-result-wrapper/calc-result-wrapper.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"calc-result-wrapper\" [ngClass]=\"color\">\n  <div class=\"result-item-text\">\n    {{ item_name }}\n  </div>\n  <div class=\"result-amount\">\n    {{ unit }}&nbsp;{{ amount }}\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/uicomponents/calc-result-wrapper/calc-result-wrapper.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/shared/uicomponents/calc-result-wrapper/calc-result-wrapper.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".calc-result-wrapper {\n  display: flex;\n  margin-bottom: 10px;\n  justify-content: flex-end;\n  align-items: center;\n  margin-right: -45px; }\n  .calc-result-wrapper .result-item-text {\n    margin-right: 15px; }\n  .calc-result-wrapper .result-amount {\n    width: 200px;\n    height: 40px;\n    padding-left: 20px;\n    border-top-left-radius: 50px;\n    border-bottom-left-radius: 50px;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    font-weight: 700; }\n  .calc-result-wrapper.royal-blue .result-item-text {\n    color: #607CF1; }\n  .calc-result-wrapper.royal-blue .result-amount {\n    background-color: #EAEEFF;\n    color: #607CF1; }\n  .calc-result-wrapper.grey .result-item-text {\n    color: #8E8E8E; }\n  .calc-result-wrapper.grey .result-amount {\n    background-color: #EDEDED;\n    color: #8E8E8E; }\n  .calc-result-wrapper.lime-green .result-item-text {\n    color: #44D85C; }\n  .calc-result-wrapper.lime-green .result-amount {\n    background-color: #E6FFDE;\n    color: #44D85C; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3VpY29tcG9uZW50cy9jYWxjLXJlc3VsdC13cmFwcGVyL0c6XFxQcm9qZWN0XFxPcmhhbkNhbS1Gcm9udEVuZFxcd29ya1xcY3V6d2ViYXBwL3NyY1xcYXBwXFxzaGFyZWRcXHVpY29tcG9uZW50c1xcY2FsYy1yZXN1bHQtd3JhcHBlclxcY2FsYy1yZXN1bHQtd3JhcHBlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL3VpY29tcG9uZW50cy9jYWxjLXJlc3VsdC13cmFwcGVyL0c6XFxQcm9qZWN0XFxPcmhhbkNhbS1Gcm9udEVuZFxcd29ya1xcY3V6d2ViYXBwL3NyY1xcYXNzZXRzXFxzY3NzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxjQUFhO0VBQ2Isb0JBQW1CO0VBSW5CLDBCQUF5QjtFQUl6QixvQkFBbUI7RUFDbkIsb0JBQW1CLEVBcUR0QjtFQWhFRDtJQWFRLG1CQUFrQixFQUNyQjtFQWRMO0lBZ0JRLGFBQVk7SUFDWixhQUFZO0lBQ1osbUJBQWtCO0lBQ2xCLDZCQUE0QjtJQUM1QixnQ0FBK0I7SUFDL0IsY0FBYTtJQUliLDRCQUEyQjtJQUkzQixvQkFBbUI7SUFDbkIsaUJBQWdCLEVBQ25CO0VBL0JMO0lBbUNZLGVDbENRLEVEbUNYO0VBcENUO0lBc0NZLDBCQzdCTTtJRDhCTixlQ3RDUSxFRHVDWDtFQXhDVDtJQTZDWSxlQzNCRSxFRDRCTDtFQTlDVDtJQWdEWSwwQkM1Qkc7SUQ2QkgsZUMvQkUsRURnQ0w7RUFsRFQ7SUF1RFksZUNuRFEsRURvRFg7RUF4RFQ7SUEwRFksMEJDOUNNO0lEK0NOLGVDdkRRLEVEd0RYIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3VpY29tcG9uZW50cy9jYWxjLXJlc3VsdC13cmFwcGVyL2NhbGMtcmVzdWx0LXdyYXBwZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwidmFyaWFibGVzXCI7XHJcblxyXG4uY2FsYy1yZXN1bHQtd3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcclxuICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtNDVweDtcclxuICAgIC5yZXN1bHQtaXRlbS10ZXh0IHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAucmVzdWx0LWFtb3VudCB7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTBweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtcGFjazogc3RhcnQ7XHJcbiAgICAgICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgLW1zLWZsZXgtcGFjazogc3RhcnQ7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgfVxyXG5cclxuICAgICYucm95YWwtYmx1ZSB7XHJcbiAgICAgICAgLnJlc3VsdC1pdGVtLXRleHQge1xyXG4gICAgICAgICAgICBjb2xvcjogJHJveWFsLWJsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yZXN1bHQtYW1vdW50IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxhdmVuZGVyO1xyXG4gICAgICAgICAgICBjb2xvcjogJHJveWFsLWJsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYuZ3JleSB7XHJcbiAgICAgICAgLnJlc3VsdC1pdGVtLXRleHQge1xyXG4gICAgICAgICAgICBjb2xvcjogJGdyZXk7XHJcbiAgICAgICAgfVxyXG4gICAgLnJlc3VsdC1hbW91bnQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc21va2U7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkZ3JleTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi5saW1lLWdyZWVuIHtcclxuICAgICAgICAucmVzdWx0LWl0ZW0tdGV4dCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkbGltZS1ncmVlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJlc3VsdC1hbW91bnQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaG9uZXlkZXc7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkbGltZS1ncmVlbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxufSIsIiRmb250LWZhbWlseTogUXVpY2tzYW5kLHNhbnMtc2VyaWY7XHJcbiRpbWctcGF0aDogXCJzcmMvYXNzZXRzL2ltZ3NcIjtcclxuXHJcbiRyb3lhbC1ibHVlOiAjNjA3Q0YxO1xyXG4kc2VhLWdyZWVuOiAjMjNCN0JCO1xyXG4kcHVycGxlOiAjOUM2QkNFO1xyXG4kbGltZS1ncmVlbjogIzQ0RDg1QztcclxuJGJsdWU6ICMwQTcyRjQ7XHJcbiRnb2xkOiAjRUJDODNDO1xyXG4kcmVkOiAjRUI1QTJEO1xyXG5cclxuJGxhdmVuZGVyOiAjRUFFRUZGO1xyXG4kYXp1cmU6ICNFOEZFRkY7XHJcbiRwaW5rLWxhdmVuZGVyOiAjRjFFNEZGO1xyXG4kaG9uZXlkZXc6ICNFNkZGREU7XHJcbiRhbGljZS1ibHVlOiAjREVFREZGO1xyXG4kY29ybnNpbGs6ICNGRkY4REM7XHJcbiRtaXN0eS1yb3NlOiAjRkZFOEUxO1xyXG5cclxuJGRpbS1ncmV5OiAjNDY0NjQ2O1xyXG4kZ3JleTogIzhFOEU4RTtcclxuJGxpZ2h0LWdyZXk6ICNENEQ0RDQ7XHJcbiRzbW9rZTogI0VERURFRDtcclxuJHdoaXRlLXNtb2tlOiAjRjhGOEY4O1xyXG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/uicomponents/calc-result-wrapper/calc-result-wrapper.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/shared/uicomponents/calc-result-wrapper/calc-result-wrapper.component.ts ***!
  \******************************************************************************************/
/*! exports provided: CalcResultWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalcResultWrapperComponent", function() { return CalcResultWrapperComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CalcResultWrapperComponent = /** @class */ (function () {
    function CalcResultWrapperComponent() {
        this.item_name = 'PRICE AMOUNT';
        this.amount = '';
        this.color = '';
        this.unit = '';
    }
    CalcResultWrapperComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CalcResultWrapperComponent.prototype, "item_name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CalcResultWrapperComponent.prototype, "amount", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CalcResultWrapperComponent.prototype, "color", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CalcResultWrapperComponent.prototype, "unit", void 0);
    CalcResultWrapperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-calc-result-wrapper',
            template: __webpack_require__(/*! ./calc-result-wrapper.component.html */ "./src/app/shared/uicomponents/calc-result-wrapper/calc-result-wrapper.component.html"),
            styles: [__webpack_require__(/*! ./calc-result-wrapper.component.scss */ "./src/app/shared/uicomponents/calc-result-wrapper/calc-result-wrapper.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CalcResultWrapperComponent);
    return CalcResultWrapperComponent;
}());



/***/ }),

/***/ "./src/app/shared/uicomponents/custom-switch/custom-switch.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/shared/uicomponents/custom-switch/custom-switch.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input type=\"checkbox\" id=\"switch\" (click)=\"onCheck($event)\" />\n<label for=\"switch\" >Toggle</label>"

/***/ }),

/***/ "./src/app/shared/uicomponents/custom-switch/custom-switch.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/shared/uicomponents/custom-switch/custom-switch.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=checkbox] {\n  height: 0;\n  width: 0;\n  visibility: hidden;\n  position: absolute; }\n\nlabel {\n  cursor: pointer;\n  text-indent: -9999px;\n  width: 55px;\n  height: 30px;\n  background: #8E8E8E;\n  display: block;\n  border-radius: 15px;\n  position: relative; }\n\nlabel:after {\n  content: '';\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  width: 26px;\n  height: 26px;\n  background: white;\n  border-radius: 13px;\n  transition: 0.3s; }\n\ninput:checked + label {\n  background: #607CF1; }\n\ninput:checked + label:after {\n  left: calc(100% - 3px);\n  -webkit-transform: translateX(-100%);\n          transform: translateX(-100%); }\n\nlabel:active:after {\n  width: 36px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3VpY29tcG9uZW50cy9jdXN0b20tc3dpdGNoL0c6XFxQcm9qZWN0XFxPcmhhbkNhbS1Gcm9udEVuZFxcd29ya1xcY3V6d2ViYXBwL3NyY1xcYXBwXFxzaGFyZWRcXHVpY29tcG9uZW50c1xcY3VzdG9tLXN3aXRjaFxcY3VzdG9tLXN3aXRjaC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL3VpY29tcG9uZW50cy9jdXN0b20tc3dpdGNoL0c6XFxQcm9qZWN0XFxPcmhhbkNhbS1Gcm9udEVuZFxcd29ya1xcY3V6d2ViYXBwL3NyY1xcYXNzZXRzXFxzY3NzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDQyxVQUFTO0VBQ1QsU0FBUTtFQUNSLG1CQUFrQjtFQUNsQixtQkFBa0IsRUFDbEI7O0FBRUQ7RUFDQyxnQkFBZTtFQUNmLHFCQUFvQjtFQUNwQixZQUFXO0VBQ1gsYUFBWTtFQUNaLG9CQ01hO0VETGIsZUFBYztFQUNkLG9CQUFtQjtFQUNuQixtQkFBa0IsRUFDbEI7O0FBRUQ7RUFDQyxZQUFXO0VBQ1gsbUJBQWtCO0VBQ2xCLFNBQVE7RUFDUixVQUFTO0VBQ1QsWUFBVztFQUNYLGFBQVk7RUFDWixrQkFBaUI7RUFDakIsb0JBQW1CO0VBQ25CLGlCQUFnQixFQUNoQjs7QUFFRDtFQUNDLG9CQzlCbUIsRUQrQm5COztBQUVEO0VBQ0MsdUJBQXNCO0VBQ3RCLHFDQUE0QjtVQUE1Qiw2QkFBNEIsRUFDNUI7O0FBRUQ7RUFDQyxZQUFXLEVBQ1giLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvdWljb21wb25lbnRzL2N1c3RvbS1zd2l0Y2gvY3VzdG9tLXN3aXRjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcclxuXHJcbmlucHV0W3R5cGU9Y2hlY2tib3hde1xyXG5cdGhlaWdodDogMDtcclxuXHR3aWR0aDogMDtcclxuXHR2aXNpYmlsaXR5OiBoaWRkZW47XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdHRleHQtaW5kZW50OiAtOTk5OXB4O1xyXG5cdHdpZHRoOiA1NXB4O1xyXG5cdGhlaWdodDogMzBweDtcclxuXHRiYWNrZ3JvdW5kOiAkZ3JleTtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRib3JkZXItcmFkaXVzOiAxNXB4O1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxubGFiZWw6YWZ0ZXIge1xyXG5cdGNvbnRlbnQ6ICcnO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDJweDtcclxuXHRsZWZ0OiAycHg7XHJcblx0d2lkdGg6IDI2cHg7XHJcblx0aGVpZ2h0OiAyNnB4O1xyXG5cdGJhY2tncm91bmQ6IHdoaXRlO1xyXG5cdGJvcmRlci1yYWRpdXM6IDEzcHg7XHJcblx0dHJhbnNpdGlvbjogMC4zcztcclxufVxyXG5cclxuaW5wdXQ6Y2hlY2tlZCArIGxhYmVsIHtcclxuXHRiYWNrZ3JvdW5kOiAkcm95YWwtYmx1ZTtcclxufVxyXG5cclxuaW5wdXQ6Y2hlY2tlZCArIGxhYmVsOmFmdGVyIHtcclxuXHRsZWZ0OiBjYWxjKDEwMCUgLSAzcHgpO1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbn1cclxuXHJcbmxhYmVsOmFjdGl2ZTphZnRlciB7XHJcblx0d2lkdGg6IDM2cHg7XHJcbn0gICAiLCIkZm9udC1mYW1pbHk6IFF1aWNrc2FuZCxzYW5zLXNlcmlmO1xyXG4kaW1nLXBhdGg6IFwic3JjL2Fzc2V0cy9pbWdzXCI7XHJcblxyXG4kcm95YWwtYmx1ZTogIzYwN0NGMTtcclxuJHNlYS1ncmVlbjogIzIzQjdCQjtcclxuJHB1cnBsZTogIzlDNkJDRTtcclxuJGxpbWUtZ3JlZW46ICM0NEQ4NUM7XHJcbiRibHVlOiAjMEE3MkY0O1xyXG4kZ29sZDogI0VCQzgzQztcclxuJHJlZDogI0VCNUEyRDtcclxuXHJcbiRsYXZlbmRlcjogI0VBRUVGRjtcclxuJGF6dXJlOiAjRThGRUZGO1xyXG4kcGluay1sYXZlbmRlcjogI0YxRTRGRjtcclxuJGhvbmV5ZGV3OiAjRTZGRkRFO1xyXG4kYWxpY2UtYmx1ZTogI0RFRURGRjtcclxuJGNvcm5zaWxrOiAjRkZGOERDO1xyXG4kbWlzdHktcm9zZTogI0ZGRThFMTtcclxuXHJcbiRkaW0tZ3JleTogIzQ2NDY0NjtcclxuJGdyZXk6ICM4RThFOEU7XHJcbiRsaWdodC1ncmV5OiAjRDRENEQ0O1xyXG4kc21va2U6ICNFREVERUQ7XHJcbiR3aGl0ZS1zbW9rZTogI0Y4RjhGODtcclxuIl19 */"

/***/ }),

/***/ "./src/app/shared/uicomponents/custom-switch/custom-switch.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shared/uicomponents/custom-switch/custom-switch.component.ts ***!
  \******************************************************************************/
/*! exports provided: CustomSwitchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomSwitchComponent", function() { return CustomSwitchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CustomSwitchComponent = /** @class */ (function () {
    function CustomSwitchComponent() {
        this.checkEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    CustomSwitchComponent.prototype.ngOnInit = function () {
    };
    CustomSwitchComponent.prototype.onCheck = function (event) {
        var target = event.target || event.srcElement || event.currentTarget;
        this.checkEvent.emit(target.checked);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CustomSwitchComponent.prototype, "checkEvent", void 0);
    CustomSwitchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-custom-switch',
            template: __webpack_require__(/*! ./custom-switch.component.html */ "./src/app/shared/uicomponents/custom-switch/custom-switch.component.html"),
            styles: [__webpack_require__(/*! ./custom-switch.component.scss */ "./src/app/shared/uicomponents/custom-switch/custom-switch.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CustomSwitchComponent);
    return CustomSwitchComponent;
}());



/***/ }),

/***/ "./src/app/shared/uicomponents/date-picker/date-picker.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/shared/uicomponents/date-picker/date-picker.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  class=\"date-picker\"\n  (click)=\"onClickHandler($event)\"\n  >\n  {{ display_date_name }}\n</div>\n<app-info-select-modal  \n  [(showable)]=\"show_modal\"\n  [ClickDoneBtn]=\"onClickModalDoneBtn.bind(this)\"\n  >\n  <h3>Select the Date and Time</h3>\n</app-info-select-modal>"

/***/ }),

/***/ "./src/app/shared/uicomponents/date-picker/date-picker.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/shared/uicomponents/date-picker/date-picker.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".date-picker {\n  cursor: pointer;\n  margin-bottom: 10px;\n  height: 50px;\n  padding: 10px 20px 9px 56px;\n  border-bottom: solid 1px #EDEDED;\n  font-size: 18px;\n  font-weight: 700;\n  color: #8E8E8E;\n  background-repeat: no-repeat;\n  background-image: url('nature-icon.png');\n  background-position: 22px 50%;\n  background-size: 13px;\n  text-align: left; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3VpY29tcG9uZW50cy9kYXRlLXBpY2tlci9HOlxcUHJvamVjdFxcT3JoYW5DYW0tRnJvbnRFbmRcXHdvcmtcXGN1endlYmFwcC9zcmNcXGFwcFxcc2hhcmVkXFx1aWNvbXBvbmVudHNcXGRhdGUtcGlja2VyXFxkYXRlLXBpY2tlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL3VpY29tcG9uZW50cy9kYXRlLXBpY2tlci9HOlxcUHJvamVjdFxcT3JoYW5DYW0tRnJvbnRFbmRcXHdvcmtcXGN1endlYmFwcC9zcmNcXGFzc2V0c1xcc2Nzc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksZ0JBQWU7RUFDZixvQkFBbUI7RUFDbkIsYUFBWTtFQUNaLDRCQUEyQjtFQUMzQixpQ0NlVztFRGRYLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLGVDVVU7RURUViw2QkFBNEI7RUFDNUIseUNBQXVCO0VBQ3ZCLDhCQUE2QjtFQUM3QixzQkFBcUI7RUFDckIsaUJBQWdCLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3VpY29tcG9uZW50cy9kYXRlLXBpY2tlci9kYXRlLXBpY2tlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcclxuXHJcbi5kYXRlLXBpY2tlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4IDlweCA1NnB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICRzbW9rZTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogJGdyZXk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCN7JGltZy1wYXRofS9uYXR1cmUtaWNvbi5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMjJweCA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEzcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4iLCIkZm9udC1mYW1pbHk6IFF1aWNrc2FuZCxzYW5zLXNlcmlmO1xyXG4kaW1nLXBhdGg6IFwic3JjL2Fzc2V0cy9pbWdzXCI7XHJcblxyXG4kcm95YWwtYmx1ZTogIzYwN0NGMTtcclxuJHNlYS1ncmVlbjogIzIzQjdCQjtcclxuJHB1cnBsZTogIzlDNkJDRTtcclxuJGxpbWUtZ3JlZW46ICM0NEQ4NUM7XHJcbiRibHVlOiAjMEE3MkY0O1xyXG4kZ29sZDogI0VCQzgzQztcclxuJHJlZDogI0VCNUEyRDtcclxuXHJcbiRsYXZlbmRlcjogI0VBRUVGRjtcclxuJGF6dXJlOiAjRThGRUZGO1xyXG4kcGluay1sYXZlbmRlcjogI0YxRTRGRjtcclxuJGhvbmV5ZGV3OiAjRTZGRkRFO1xyXG4kYWxpY2UtYmx1ZTogI0RFRURGRjtcclxuJGNvcm5zaWxrOiAjRkZGOERDO1xyXG4kbWlzdHktcm9zZTogI0ZGRThFMTtcclxuXHJcbiRkaW0tZ3JleTogIzQ2NDY0NjtcclxuJGdyZXk6ICM4RThFOEU7XHJcbiRsaWdodC1ncmV5OiAjRDRENEQ0O1xyXG4kc21va2U6ICNFREVERUQ7XHJcbiR3aGl0ZS1zbW9rZTogI0Y4RjhGODtcclxuIl19 */"

/***/ }),

/***/ "./src/app/shared/uicomponents/date-picker/date-picker.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/uicomponents/date-picker/date-picker.component.ts ***!
  \**************************************************************************/
/*! exports provided: DatePickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePickerComponent", function() { return DatePickerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DatePickerComponent = /** @class */ (function () {
    function DatePickerComponent() {
        this.display_date_name = 'Starting Date';
        this.type = '';
        this.show_modal = false;
    }
    DatePickerComponent.prototype.ngOnInit = function () {
        if (this.type == 'starting-date') {
            this.display_date_name = 'Starting Date';
        }
        else {
            this.display_date_name = 'Ending Date';
        }
    };
    DatePickerComponent.prototype.onClickHandler = function (event) {
        this.show_modal = true;
    };
    DatePickerComponent.prototype.onClickModalDoneBtn = function () {
        this.show_modal = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DatePickerComponent.prototype, "display_date_name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DatePickerComponent.prototype, "type", void 0);
    DatePickerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-date-picker',
            template: __webpack_require__(/*! ./date-picker.component.html */ "./src/app/shared/uicomponents/date-picker/date-picker.component.html"),
            styles: [__webpack_require__(/*! ./date-picker.component.scss */ "./src/app/shared/uicomponents/date-picker/date-picker.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DatePickerComponent);
    return DatePickerComponent;
}());



/***/ }),

/***/ "./src/app/shared/uicomponents/deadline-selector/deadline-selector.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/shared/uicomponents/deadline-selector/deadline-selector.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  class=\"deadline-selector\"\n  (click)=\"onClickHandler($event)\"\n  >\n  {{ selected_datetime == null ? \"Deadline\" : selected_datetime }}\n</div>\n<app-info-select-modal \n  [(showable)]=\"show_modal\"\n  [ClickDoneBtn]=\"onClickModalDone.bind(this)\"\n  [ClickCancelBtn]=\"onClickModalCancel.bind(this)\"\n  >\n    <h1>Select the Deadline</h1>\n    <owl-date-time-inline [(ngModel)]=\"temptime\" hour12Timer = \"true\"></owl-date-time-inline>\n</app-info-select-modal>"

/***/ }),

/***/ "./src/app/shared/uicomponents/deadline-selector/deadline-selector.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/shared/uicomponents/deadline-selector/deadline-selector.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".deadline-selector {\n  cursor: pointer;\n  margin-bottom: 10px;\n  height: 50px;\n  padding: 10px 20px 9px 56px;\n  border-bottom: solid 1px #EDEDED;\n  font-size: 18px;\n  font-weight: 700;\n  color: #8E8E8E;\n  background-repeat: no-repeat;\n  background-image: url('nature-icon.png');\n  background-position: 22px 50%;\n  background-size: 13px;\n  text-align: left; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3VpY29tcG9uZW50cy9kZWFkbGluZS1zZWxlY3Rvci9HOlxcUHJvamVjdFxcT3JoYW5DYW0tRnJvbnRFbmRcXHdvcmtcXGN1endlYmFwcC9zcmNcXGFwcFxcc2hhcmVkXFx1aWNvbXBvbmVudHNcXGRlYWRsaW5lLXNlbGVjdG9yXFxkZWFkbGluZS1zZWxlY3Rvci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL3VpY29tcG9uZW50cy9kZWFkbGluZS1zZWxlY3Rvci9HOlxcUHJvamVjdFxcT3JoYW5DYW0tRnJvbnRFbmRcXHdvcmtcXGN1endlYmFwcC9zcmNcXGFzc2V0c1xcc2Nzc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksZ0JBQWU7RUFDZixvQkFBbUI7RUFDbkIsYUFBWTtFQUNaLDRCQUEyQjtFQUMzQixpQ0NlVztFRGRYLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLGVDVVU7RURUViw2QkFBNEI7RUFDNUIseUNBQXVCO0VBQ3ZCLDhCQUE2QjtFQUM3QixzQkFBcUI7RUFDckIsaUJBQWdCLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3VpY29tcG9uZW50cy9kZWFkbGluZS1zZWxlY3Rvci9kZWFkbGluZS1zZWxlY3Rvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcclxuXHJcbi5kZWFkbGluZS1zZWxlY3RvciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4IDlweCA1NnB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICRzbW9rZTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogJGdyZXk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCN7JGltZy1wYXRofS9uYXR1cmUtaWNvbi5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMjJweCA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEzcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4iLCIkZm9udC1mYW1pbHk6IFF1aWNrc2FuZCxzYW5zLXNlcmlmO1xyXG4kaW1nLXBhdGg6IFwic3JjL2Fzc2V0cy9pbWdzXCI7XHJcblxyXG4kcm95YWwtYmx1ZTogIzYwN0NGMTtcclxuJHNlYS1ncmVlbjogIzIzQjdCQjtcclxuJHB1cnBsZTogIzlDNkJDRTtcclxuJGxpbWUtZ3JlZW46ICM0NEQ4NUM7XHJcbiRibHVlOiAjMEE3MkY0O1xyXG4kZ29sZDogI0VCQzgzQztcclxuJHJlZDogI0VCNUEyRDtcclxuXHJcbiRsYXZlbmRlcjogI0VBRUVGRjtcclxuJGF6dXJlOiAjRThGRUZGO1xyXG4kcGluay1sYXZlbmRlcjogI0YxRTRGRjtcclxuJGhvbmV5ZGV3OiAjRTZGRkRFO1xyXG4kYWxpY2UtYmx1ZTogI0RFRURGRjtcclxuJGNvcm5zaWxrOiAjRkZGOERDO1xyXG4kbWlzdHktcm9zZTogI0ZGRThFMTtcclxuXHJcbiRkaW0tZ3JleTogIzQ2NDY0NjtcclxuJGdyZXk6ICM4RThFOEU7XHJcbiRsaWdodC1ncmV5OiAjRDRENEQ0O1xyXG4kc21va2U6ICNFREVERUQ7XHJcbiR3aGl0ZS1zbW9rZTogI0Y4RjhGODtcclxuIl19 */"

/***/ }),

/***/ "./src/app/shared/uicomponents/deadline-selector/deadline-selector.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/shared/uicomponents/deadline-selector/deadline-selector.component.ts ***!
  \**************************************************************************************/
/*! exports provided: DeadlineSelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeadlineSelectorComponent", function() { return DeadlineSelectorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _root_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../root-store */ "./src/app/root-store/index.ts");
/* harmony import */ var _helper_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helper/helper.service */ "./src/app/shared/helper/helper.service.ts");





var DeadlineSelectorComponent = /** @class */ (function () {
    function DeadlineSelectorComponent(store$, helperService) {
        this.store$ = store$;
        this.helperService = helperService;
        this.selected_datetime = null;
        this.temptime = null;
        this.show_modal = false;
    }
    DeadlineSelectorComponent.prototype.ngOnInit = function () {
    };
    DeadlineSelectorComponent.prototype.onClickHandler = function (event) {
        event.preventDefault();
        this.show_modal = true;
    };
    DeadlineSelectorComponent.prototype.onClickModalDone = function () {
        this.show_modal = false;
        this.selected_datetime = this.helperService.getFormattedDate(this.temptime); // Display Date
        localStorage.setItem('deadline', this.temptime.toString());
        // Set State End Date Value
        var dateTime = this.temptime.toISOString().substr(0, 16);
        this.store$.dispatch(new _root_store__WEBPACK_IMPORTED_MODULE_3__["PricemodelStoreActions"].SET_END_DATE({
            end_date: dateTime
        }));
    };
    DeadlineSelectorComponent.prototype.onClickModalCancel = function () {
        this.show_modal = false;
        this.temptime = new Date(localStorage.getItem('deadline'));
    };
    DeadlineSelectorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-deadline-selector',
            template: __webpack_require__(/*! ./deadline-selector.component.html */ "./src/app/shared/uicomponents/deadline-selector/deadline-selector.component.html"),
            styles: [__webpack_require__(/*! ./deadline-selector.component.scss */ "./src/app/shared/uicomponents/deadline-selector/deadline-selector.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _helper_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"]])
    ], DeadlineSelectorComponent);
    return DeadlineSelectorComponent;
}());



/***/ }),

/***/ "./src/app/shared/uicomponents/doc-type-selector/doc-type-selector.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/shared/uicomponents/doc-type-selector/doc-type-selector.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  class=\"doc-type-selector\"\n  (click)=\"onClickHandler($event)\"\n  >\n  {{ selected_nature == null ? 'Nature' : selected_nature.name }}\n</div>\n<app-info-select-modal  \n  [(showable)]=\"show_modal\"\n  [ClickDoneBtn]=\"onClickModalDoneBtn.bind(this)\"\n  [ClickCancelBtn]=\"onClickModalCancelBtn.bind(this)\"\n  >\n  <app-search-input></app-search-input>\n  <div class=\"modal-body\">\n    <div class=\"nature-group\" *ngFor=\"let nature_group of nature_groups\">\n      <div class=\"nature-group-name\">{{ nature_group.name }}</div>\n      <a\n        class=\"nature\"\n        href=\"#\"\n        *ngFor=\"let nature of nature_group.natures\"\n        [class.selected]=\"selected_nature != null && nature.id == selected_nature.id\"\n        (click)=\"onSelectDoctype(nature, $event)\"\n      >{{ nature.name }}</a>\n    </div>\n  </div>\n</app-info-select-modal>"

/***/ }),

/***/ "./src/app/shared/uicomponents/doc-type-selector/doc-type-selector.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/shared/uicomponents/doc-type-selector/doc-type-selector.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".doc-type-selector {\n  cursor: pointer;\n  margin-bottom: 10px;\n  height: 50px;\n  padding: 10px 20px 9px 56px;\n  border-bottom: solid 1px #EDEDED;\n  font-size: 18px;\n  font-weight: 700;\n  color: #8E8E8E;\n  background-repeat: no-repeat;\n  background-image: url('nature-icon.png');\n  background-position: 22px 50%;\n  background-size: 13px;\n  text-align: left; }\n\n.modal-body {\n  height: 50%;\n  overflow-y: scroll; }\n\n.modal-body .nature-group .nature-group-name {\n    display: flex;\n    width: 100%;\n    height: 30px;\n    padding-left: 25px;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center;\n    color: #464646;\n    font-weight: 700; }\n\n.modal-body .nature-group .nature {\n    display: flex;\n    max-width: 100%;\n    width: 100%;\n    height: 30px;\n    padding-left: 56px;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center;\n    background-position: -46px 50%;\n    transition: all .4s ease;\n    color: #8e8e8e;\n    font-weight: 700;\n    text-decoration: none;\n    background-size: 16px;\n    background-repeat: no-repeat;\n    background-image: url('Union-122x_1.png'); }\n\n.modal-body .nature-group .nature:hover {\n      background-position: 15px 50%;\n      color: #464646; }\n\n.modal-body .nature-group .nature:focus {\n      background-image: url('Union-122x.png');\n      background-position: 25px 50%;\n      color: #464646; }\n\n.modal-body .nature-group .nature.selected {\n      background-image: url('Union-122x.png');\n      background-position: 25px 50%;\n      color: #464646; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3VpY29tcG9uZW50cy9kb2MtdHlwZS1zZWxlY3Rvci9HOlxcUHJvamVjdFxcT3JoYW5DYW0tRnJvbnRFbmRcXHdvcmtcXGN1endlYmFwcC9zcmNcXGFwcFxcc2hhcmVkXFx1aWNvbXBvbmVudHNcXGRvYy10eXBlLXNlbGVjdG9yXFxkb2MtdHlwZS1zZWxlY3Rvci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL3VpY29tcG9uZW50cy9kb2MtdHlwZS1zZWxlY3Rvci9HOlxcUHJvamVjdFxcT3JoYW5DYW0tRnJvbnRFbmRcXHdvcmtcXGN1endlYmFwcC9zcmNcXGFzc2V0c1xcc2Nzc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksZ0JBQWU7RUFDZixvQkFBbUI7RUFDbkIsYUFBWTtFQUNaLDRCQUEyQjtFQUMzQixpQ0NlVztFRGRYLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLGVDVVU7RURUViw2QkFBNEI7RUFDNUIseUNBQXVCO0VBQ3ZCLDhCQUE2QjtFQUM3QixzQkFBcUI7RUFDckIsaUJBQWdCLEVBQ25COztBQUVEO0VBQ0ksWUFBVztFQUNYLG1CQUFrQixFQW9FckI7O0FBdEVEO0lBS1ksY0FBYTtJQUNiLFlBQVc7SUFDWCxhQUFZO0lBQ1osbUJBQWtCO0lBS2xCLG9CQUFtQjtJQUluQiw0QkFBMkI7SUFJM0Isb0JBQW1CO0lBQ25CLGVBQWM7SUFDZCxpQkFBZ0IsRUFDbkI7O0FBeEJUO0lBOEJZLGNBQWE7SUFDYixnQkFBZTtJQUNmLFlBQVc7SUFDWCxhQUFZO0lBQ1osbUJBQWtCO0lBQ2xCLG9CQUFtQjtJQUluQiw0QkFBMkI7SUFJM0Isb0JBQW1CO0lBQ25CLCtCQUE4QjtJQUU5Qix5QkFBd0I7SUFDeEIsZUFBYztJQUNkLGlCQUFnQjtJQUNoQixzQkFBcUI7SUFDckIsc0JBQXFCO0lBQ3JCLDZCQUE0QjtJQUM1QiwwQ0FBdUIsRUFlMUI7O0FBbkVUO01Bc0RnQiw4QkFBNkI7TUFDN0IsZUFBYyxFQUNqQjs7QUF4RGI7TUEwRGdCLHdDQUF1QjtNQUN2Qiw4QkFBNkI7TUFDN0IsZUFBYyxFQUNqQjs7QUE3RGI7TUErRGdCLHdDQUF1QjtNQUN2Qiw4QkFBNkI7TUFDN0IsZUFBYyxFQUNqQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC91aWNvbXBvbmVudHMvZG9jLXR5cGUtc2VsZWN0b3IvZG9jLXR5cGUtc2VsZWN0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwidmFyaWFibGVzXCI7XHJcblxyXG4uZG9jLXR5cGUtc2VsZWN0b3Ige1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweCA5cHggNTZweDtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAkc21va2U7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6ICRncmV5O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgjeyRpbWctcGF0aH0vbmF0dXJlLWljb24ucG5nKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDIycHggNTAlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxM3B4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLm1vZGFsLWJvZHkge1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAubmF0dXJlLWdyb3VwIHtcclxuICAgICAgICAubmF0dXJlLWdyb3VwLW5hbWUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDtcclxuICAgICAgICAgICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XHJcbiAgICAgICAgICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXBhY2s6IHN0YXJ0O1xyXG4gICAgICAgICAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgLW1zLWZsZXgtcGFjazogc3RhcnQ7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBjb2xvcjogIzQ2NDY0NjtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5hdHVyZSB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDtcclxuICAgICAgICAgICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1NnB4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAtd2Via2l0LWJveC1wYWNrOiBzdGFydDtcclxuICAgICAgICAgICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgIC1tcy1mbGV4LXBhY2s6IHN0YXJ0O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ2cHggNTAlO1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuNHMgZWFzZTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC40cyBlYXNlO1xyXG4gICAgICAgICAgICBjb2xvcjogIzhlOGU4ZTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgjeyRpbWctcGF0aH0vVW5pb24tMTIyeF8xLnBuZyk7XHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTVweCA1MCU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzQ2NDY0NjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgjeyRpbWctcGF0aH0vVW5pb24tMTIyeC5wbmcpO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMjVweCA1MCU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzQ2NDY0NjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLnNlbGVjdGVkIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgjeyRpbWctcGF0aH0vVW5pb24tMTIyeC5wbmcpO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMjVweCA1MCU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzQ2NDY0NjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIiwiJGZvbnQtZmFtaWx5OiBRdWlja3NhbmQsc2Fucy1zZXJpZjtcclxuJGltZy1wYXRoOiBcInNyYy9hc3NldHMvaW1nc1wiO1xyXG5cclxuJHJveWFsLWJsdWU6ICM2MDdDRjE7XHJcbiRzZWEtZ3JlZW46ICMyM0I3QkI7XHJcbiRwdXJwbGU6ICM5QzZCQ0U7XHJcbiRsaW1lLWdyZWVuOiAjNDREODVDO1xyXG4kYmx1ZTogIzBBNzJGNDtcclxuJGdvbGQ6ICNFQkM4M0M7XHJcbiRyZWQ6ICNFQjVBMkQ7XHJcblxyXG4kbGF2ZW5kZXI6ICNFQUVFRkY7XHJcbiRhenVyZTogI0U4RkVGRjtcclxuJHBpbmstbGF2ZW5kZXI6ICNGMUU0RkY7XHJcbiRob25leWRldzogI0U2RkZERTtcclxuJGFsaWNlLWJsdWU6ICNERUVERkY7XHJcbiRjb3Juc2lsazogI0ZGRjhEQztcclxuJG1pc3R5LXJvc2U6ICNGRkU4RTE7XHJcblxyXG4kZGltLWdyZXk6ICM0NjQ2NDY7XHJcbiRncmV5OiAjOEU4RThFO1xyXG4kbGlnaHQtZ3JleTogI0Q0RDRENDtcclxuJHNtb2tlOiAjRURFREVEO1xyXG4kd2hpdGUtc21va2U6ICNGOEY4Rjg7XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/uicomponents/doc-type-selector/doc-type-selector.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/shared/uicomponents/doc-type-selector/doc-type-selector.component.ts ***!
  \**************************************************************************************/
/*! exports provided: DocTypeSelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocTypeSelectorComponent", function() { return DocTypeSelectorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _root_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../root-store */ "./src/app/root-store/index.ts");
/* harmony import */ var src_app_core_http_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/http/api.service */ "./src/app/core/http/api.service.ts");





var DocTypeSelectorComponent = /** @class */ (function () {
    function DocTypeSelectorComponent(store$, apiService) {
        this.store$ = store$;
        this.apiService = apiService;
        this.show_modal = false;
        this.doctype = null;
        this.selected_nature = null;
        this.temp_nature = null;
        this.nature_groups = null;
    }
    DocTypeSelectorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getListOfNatuers().subscribe(function (data) {
            _this.nature_groups = data.nature_groups;
        }, function (error) {
            console.log(error);
        });
    };
    DocTypeSelectorComponent.prototype.onClickHandler = function (event) {
        event.preventDefault();
        this.show_modal = true;
    };
    DocTypeSelectorComponent.prototype.onSelectDoctype = function (nature, event) {
        event.preventDefault();
        this.selected_nature = nature;
    };
    DocTypeSelectorComponent.prototype.onClickModalDoneBtn = function () {
        this.show_modal = false;
        this.store$.dispatch(new _root_store__WEBPACK_IMPORTED_MODULE_3__["PricemodelStoreActions"].SET_NATURE({
            nature: this.selected_nature.id
        }));
        localStorage.setItem('nature', JSON.stringify(this.selected_nature));
    };
    DocTypeSelectorComponent.prototype.onClickModalCancelBtn = function () {
        this.show_modal = false;
        this.selected_nature = JSON.parse(localStorage.getItem('nature'));
    };
    DocTypeSelectorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-doc-type-selector',
            template: __webpack_require__(/*! ./doc-type-selector.component.html */ "./src/app/shared/uicomponents/doc-type-selector/doc-type-selector.component.html"),
            styles: [__webpack_require__(/*! ./doc-type-selector.component.scss */ "./src/app/shared/uicomponents/doc-type-selector/doc-type-selector.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            src_app_core_http_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
    ], DocTypeSelectorComponent);
    return DocTypeSelectorComponent;
}());



/***/ }),

/***/ "./src/app/shared/uicomponents/doc-uploader/doc-uploader.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/shared/uicomponents/doc-uploader/doc-uploader.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div \n  class=\"doc-uploader\"\n  (click)=\"onClickHandler($event)\"\n  >\n  Upload Documents\n</div>\n<app-info-select-modal \n  [(showable)]=\"show_modal\"\n  [ClickDoneBtn]=\"onClickModalDone.bind(this)\"\n  [ClickCancelBtn]=\"onClickModalCancel.bind(this)\"\n  >\n  <div \n    class=\"uploader-button\"\n    (click)=\"onClickUpload($event)\"\n    >\n    <input type=\"file\" #file style=\"display: none\" (change)=\"onFileAdded()\" accept=\"application/pdf,application/txt,application/xmb,application/xliff,application/xlf,application/ts,application/po,image/*\" />\n    <div>Add Document</div>\n  </div>\n\n  <div class=\"modal-body\">\n    <div class=\"document-card\" *ngIf=\"document_to_translate != null\">\n      <div class=\"title-wrapper\">\n        <div class=\"title-text\">\n          <div class=\"title\">\n            {{ document_title }}\n          </div>\n          <div \n            class=\"document-detail-short status\"\n            [ngClass]=\"{\n              'uploading': status == 1,\n              'failed': status == 2,\n              'success': status == 3\n            }\"\n            >\n            {{ status_message[status-1] }}\n          </div>\n        </div>\n        <div class=\"action-icon\">\n        </div>\n      </div>\n    </div>\n  </div>\n</app-info-select-modal>"

/***/ }),

/***/ "./src/app/shared/uicomponents/doc-uploader/doc-uploader.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/shared/uicomponents/doc-uploader/doc-uploader.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".doc-uploader {\n  width: 100%;\n  padding: 9px 20px 9px 56px;\n  border-style: none none solid;\n  border-bottom-width: 1px;\n  border-bottom-color: #607cf1;\n  background-position: 14px 50%;\n  background-size: 28px;\n  background-repeat: no-repeat;\n  background-image: url('upload-doc-icon.png');\n  color: #607cf1;\n  font-size: 18px;\n  text-align: left;\n  margin-bottom: 10px;\n  font-weight: 700;\n  cursor: pointer; }\n\n.uploader-button {\n  cursor: pointer;\n  max-width: 100%;\n  display: inline-block;\n  margin-bottom: 10px;\n  font-weight: 700;\n  width: 100%;\n  padding: 20px 20px 20px 80px;\n  border-width: 1px;\n  border-color: #000;\n  border-radius: 10px;\n  background-image: url('upload-doc-icon.png');\n  background-color: #eaeeff;\n  background-position: 19px 50%;\n  background-size: 40px;\n  background-repeat: no-repeat;\n  color: #607cf1; }\n\n.modal-body {\n  padding: 0; }\n\n.modal-body .document-card {\n    display: flex;\n    width: 100%;\n    margin-bottom: 10px;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: stretch;\n    border: 1px solid #ededed;\n    border-radius: 10px;\n    background-color: #f8f8f8;\n    overflow: hidden;\n    max-width: 100%; }\n\n.modal-body .document-card .title-wrapper {\n      display: flex;\n      padding-right: 20px;\n      padding-left: 80px;\n      flex-direction: row;\n      justify-content: space-between;\n      align-items: center;\n      background-image: url('doc-icon.png');\n      background-position: 21px 50%;\n      background-size: 34px;\n      background-repeat: no-repeat; }\n\n.modal-body .document-card .title-wrapper .title-text {\n        flex-direction: column; }\n\n.modal-body .document-card .title-wrapper .title-text .title {\n          font-size: 16px;\n          line-height: 160%;\n          font-weight: 700; }\n\n.modal-body .document-card .title-wrapper .title-text .document-detail-short {\n          color: #8e8e8e;\n          font-size: 12px;\n          line-height: 160%;\n          text-align: left; }\n\n.modal-body .document-card .title-wrapper .title-text .document-detail-short.uploading {\n            color: #607cf1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3VpY29tcG9uZW50cy9kb2MtdXBsb2FkZXIvRzpcXFByb2plY3RcXE9yaGFuQ2FtLUZyb250RW5kXFx3b3JrXFxjdXp3ZWJhcHAvc3JjXFxhcHBcXHNoYXJlZFxcdWljb21wb25lbnRzXFxkb2MtdXBsb2FkZXJcXGRvYy11cGxvYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFlBQVc7RUFDWCwyQkFBMEI7RUFDMUIsOEJBQTZCO0VBQzdCLHlCQUF3QjtFQUN4Qiw2QkFBNEI7RUFDNUIsOEJBQTZCO0VBQzdCLHNCQUFxQjtFQUNyQiw2QkFBNEI7RUFDNUIsNkNBQXVCO0VBQ3ZCLGVBQWM7RUFDZCxnQkFBZTtFQUNmLGlCQUFnQjtFQUNoQixvQkFBbUI7RUFDbkIsaUJBQWdCO0VBQ2hCLGdCQUFlLEVBQ2xCOztBQUVEO0VBQ0ksZ0JBQWU7RUFDZixnQkFBZTtFQUNmLHNCQUFxQjtFQUNyQixvQkFBbUI7RUFDbkIsaUJBQWdCO0VBQ2hCLFlBQVc7RUFDWCw2QkFBNEI7RUFDNUIsa0JBQWlCO0VBQ2pCLG1CQUFrQjtFQUNsQixvQkFBbUI7RUFDbkIsNkNBQXVCO0VBQ3ZCLDBCQUF5QjtFQUN6Qiw4QkFBNkI7RUFDN0Isc0JBQXFCO0VBQ3JCLDZCQUE0QjtFQUM1QixlQUFjLEVBQ2pCOztBQUNEO0VBQ0ksV0FBVSxFQWtFYjs7QUFuRUQ7SUFHUSxjQUFhO0lBQ2IsWUFBVztJQUNYLG9CQUFtQjtJQUNuQixrQkFBaUI7SUFDakIscUJBQW9CO0lBRXBCLHVCQUFzQjtJQUl0QiwrQkFBOEI7SUFJOUIscUJBQW9CO0lBQ3BCLDBCQUF5QjtJQUN6QixvQkFBbUI7SUFDbkIsMEJBQXlCO0lBQ3pCLGlCQUFnQjtJQUNoQixnQkFBZSxFQTRDbEI7O0FBbEVMO01Bd0JZLGNBQWE7TUFDYixvQkFBbUI7TUFDbkIsbUJBQWtCO01BS2xCLG9CQUFtQjtNQUluQiwrQkFBOEI7TUFJOUIsb0JBQW1CO01BQ25CLHNDQUF1QjtNQUN2Qiw4QkFBNkI7TUFDN0Isc0JBQXFCO01BQ3JCLDZCQUE0QixFQXNCL0I7O0FBakVUO1FBaURnQix1QkFBc0IsRUFlekI7O0FBaEViO1VBbURvQixnQkFBZTtVQUNmLGtCQUFpQjtVQUNqQixpQkFBZ0IsRUFDbkI7O0FBdERqQjtVQXdEb0IsZUFBYztVQUNkLGdCQUFlO1VBQ2Ysa0JBQWlCO1VBQ2pCLGlCQUFnQixFQUluQjs7QUEvRGpCO1lBNkR3QixlQUFjLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3VpY29tcG9uZW50cy9kb2MtdXBsb2FkZXIvZG9jLXVwbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInZhcmlhYmxlc1wiO1xyXG5cclxuLmRvYy11cGxvYWRlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDlweCAyMHB4IDlweCA1NnB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBub25lIG5vbmUgc29saWQ7XHJcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjNjA3Y2YxO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTRweCA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDI4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCN7JGltZy1wYXRofS91cGxvYWQtZG9jLWljb24ucG5nKTtcclxuICAgIGNvbG9yOiAjNjA3Y2YxO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udXBsb2FkZXItYnV0dG9uIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHggMjBweCA4MHB4O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICBib3JkZXItY29sb3I6ICMwMDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCN7JGltZy1wYXRofS91cGxvYWQtZG9jLWljb24ucG5nKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYWVlZmY7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxOXB4IDUwJTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogNDBweDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBjb2xvcjogIzYwN2NmMTtcclxufVxyXG4ubW9kYWwtYm9keSB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgLmRvY3VtZW50LWNhcmQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XHJcbiAgICAgICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IHN0cmV0Y2g7XHJcbiAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgICAgICAtbXMtZmxleC1hbGlnbjogc3RyZXRjaDtcclxuICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWRlZGVkO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAudGl0bGUtd3JhcHBlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogODBweDtcclxuICAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xyXG4gICAgICAgICAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAgICAgICAgICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcclxuICAgICAgICAgICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoI3skaW1nLXBhdGh9L2RvYy1pY29uLnBuZyk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDIxcHggNTAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDM0cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgIC50aXRsZS10ZXh0IHtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNjAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZG9jdW1lbnQtZGV0YWlsLXNob3J0IHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzhlOGU4ZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICAmLnVwbG9hZGluZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNjA3Y2YxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/uicomponents/doc-uploader/doc-uploader.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/uicomponents/doc-uploader/doc-uploader.component.ts ***!
  \****************************************************************************/
/*! exports provided: DocUploaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocUploaderComponent", function() { return DocUploaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var js_md5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-md5 */ "./node_modules/js-md5/src/md5.js");
/* harmony import */ var js_md5__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_md5__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_core_http_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/http/api.service */ "./src/app/core/http/api.service.ts");
/* harmony import */ var _root_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../root-store */ "./src/app/root-store/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");






var DocUploaderComponent = /** @class */ (function () {
    function DocUploaderComponent(apiService, store$) {
        this.apiService = apiService;
        this.store$ = store$;
        this.show_modal = false;
        this.document_to_translate = null;
        this.document_title = '';
        this.detail_file_size = 0;
        this.detail_pages_count = 0;
        this.detail_word_count = 0;
        this.status_message = ['Uploading...', 'Upload Failed', 'Successfully Uploaded'];
        this.status = 0; // 0: none, 1: uploading, 2: failed, 3: success
        this.upload_url = ''; // Upload Url to the Google Cloud Storage
        this.doc_status = null;
    }
    DocUploaderComponent.prototype.ngOnInit = function () {
    };
    DocUploaderComponent.prototype.onClickHandler = function (event) {
        event.preventDefault();
        this.show_modal = true;
    };
    DocUploaderComponent.prototype.onClickUpload = function (event) {
        this.file.nativeElement.click();
    };
    DocUploaderComponent.prototype.onFileAdded = function () {
        var _this = this;
        this.document_to_translate = this.file.nativeElement.files[0];
        console.log(this.document_to_translate);
        this.status = 1; // Uploading document
        this.document_title = this.document_to_translate.name;
        var request_to_upload = {
            "file_checksum": js_md5__WEBPACK_IMPORTED_MODULE_2__("File Upload"),
            "content_type": this.document_to_translate.type,
            "name": this.document_title,
            "language_code": "en"
        };
        // Create Job Document Instance to get Upload Url
        this.apiService.createJobDocument(request_to_upload).subscribe(function (data) {
            console.log(data);
            _this.status = 3;
            _this.upload_url = data.upload_url;
            _this.uploadToStorage();
        }, function (error) {
            console.log(error);
            _this.status = 2;
        });
    };
    // Upload Document to the Google Cloud Storage with url that is got from the Job Document Instance
    DocUploaderComponent.prototype.uploadToStorage = function () {
        var _this = this;
        this.apiService.uploadToStorage(this.upload_url, this.document_to_translate).subscribe(function (data) {
            console.log(data);
            //  Should Get File Id from the Response
            var fileId = data.fileId;
            // If success create setInterval for check status with job document ID
            _this.doc_status = window.setInterval(_this.checkStatusOfDoc(fileId), 3000);
        }, function (error) {
            console.log(error);
        });
    };
    // Check Status of the Document
    DocUploaderComponent.prototype.checkStatusOfDoc = function (fileId) {
        var _this = this;
        this.apiService.checkStatusOfDoc(fileId).subscribe(function (data) {
            console.log(data); // Status of the Doc
            if (data == 'n/a') {
                window.clearInterval(_this.doc_status);
                _this.getDocument(fileId);
            }
            else {
                return;
            }
        }, function (error) {
            console.log(error);
        });
    };
    // Get Document Object with WordCount
    DocUploaderComponent.prototype.getDocument = function (fileId) {
        var _this = this;
        this.apiService.getDocument(fileId).subscribe(function (data) {
            console.log(data);
            // this.detail_word_count = data.word_count;
            _this.detail_word_count = 1234;
            _this.store$.dispatch(new _root_store__WEBPACK_IMPORTED_MODULE_4__["PricemodelStoreActions"].SET_WORD_COUNT({
                word_count: _this.detail_word_count
            }));
        });
    };
    // On Click Modal Done Button
    DocUploaderComponent.prototype.onClickModalDone = function () {
        this.show_modal = false;
    };
    // On Click Modal Cancel Button
    DocUploaderComponent.prototype.onClickModalCancel = function () {
        this.show_modal = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('file'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DocUploaderComponent.prototype, "file", void 0);
    DocUploaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-doc-uploader',
            template: __webpack_require__(/*! ./doc-uploader.component.html */ "./src/app/shared/uicomponents/doc-uploader/doc-uploader.component.html"),
            styles: [__webpack_require__(/*! ./doc-uploader.component.scss */ "./src/app/shared/uicomponents/doc-uploader/doc-uploader.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_http_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]])
    ], DocUploaderComponent);
    return DocUploaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/uicomponents/general-button/general-button.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/uicomponents/general-button/general-button.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" class=\"general-button {{color}}\">\n  <ng-content></ng-content>\n</button>"

/***/ }),

/***/ "./src/app/shared/uicomponents/general-button/general-button.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/uicomponents/general-button/general-button.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".general-button {\n  margin: 5px;\n  padding: 14px 20px;\n  border-radius: 10px;\n  transition: box-shadow .4s ease;\n  color: #fff;\n  font-size: 16px;\n  font-weight: 700;\n  text-align: center;\n  border: none;\n  cursor: pointer;\n  width: 100%; }\n  .general-button:hover {\n    outline: none; }\n  .general-button:focus {\n    outline: none; }\n  .general-button.lime-green {\n    background-color: #44D85C; }\n  .general-button.lime-green:hover {\n      box-shadow: 0 10px 30px -5px rgba(68, 216, 92, 0.8); }\n  .general-button.light-grey {\n    background-color: #D4D4D4; }\n  .general-button.light-grey:hover {\n      box-shadow: 0 10px 30px -5px rgba(212, 212, 212, 0.8); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3VpY29tcG9uZW50cy9nZW5lcmFsLWJ1dHRvbi9HOlxcUHJvamVjdFxcT3JoYW5DYW0tRnJvbnRFbmRcXHdvcmtcXGN1endlYmFwcC9zcmNcXGFwcFxcc2hhcmVkXFx1aWNvbXBvbmVudHNcXGdlbmVyYWwtYnV0dG9uXFxnZW5lcmFsLWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL3VpY29tcG9uZW50cy9nZW5lcmFsLWJ1dHRvbi9HOlxcUHJvamVjdFxcT3JoYW5DYW0tRnJvbnRFbmRcXHdvcmtcXGN1endlYmFwcC9zcmNcXGFzc2V0c1xcc2Nzc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksWUFBVztFQUNYLG1CQUFrQjtFQUNsQixvQkFBbUI7RUFFbkIsZ0NBQStCO0VBQy9CLFlBQVc7RUFDWCxnQkFBZTtFQUNmLGlCQUFnQjtFQUNoQixtQkFBa0I7RUFDbEIsYUFBVztFQUNYLGdCQUFlO0VBQ2YsWUFBVyxFQW9CZDtFQWhDRDtJQWNRLGNBQWEsRUFDaEI7RUFmTDtJQWlCUSxjQUFhLEVBQ2hCO0VBbEJMO0lBb0JRLDBCQ2hCWSxFRG9CZjtFQXhCTDtNQXNCWSxvRENsQlEsRURtQlg7RUF2QlQ7SUEyQlEsMEJDUlksRURZZjtFQS9CTDtNQTZCWSxzRENWUSxFRFdYIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3VpY29tcG9uZW50cy9nZW5lcmFsLWJ1dHRvbi9nZW5lcmFsLWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcclxuXHJcbi5nZW5lcmFsLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIHBhZGRpbmc6IDE0cHggMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJveC1zaGFkb3cgLjRzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IC40cyBlYXNlO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgfVxyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgIH1cclxuICAgICYubGltZS1ncmVlbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxpbWUtZ3JlZW47XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IC01cHggcmdiYSgkbGltZS1ncmVlbiwuOCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYubGlnaHQtZ3JleSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LWdyZXk7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IC01cHggcmdiYSgkbGlnaHQtZ3JleSwuOCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiJGZvbnQtZmFtaWx5OiBRdWlja3NhbmQsc2Fucy1zZXJpZjtcclxuJGltZy1wYXRoOiBcInNyYy9hc3NldHMvaW1nc1wiO1xyXG5cclxuJHJveWFsLWJsdWU6ICM2MDdDRjE7XHJcbiRzZWEtZ3JlZW46ICMyM0I3QkI7XHJcbiRwdXJwbGU6ICM5QzZCQ0U7XHJcbiRsaW1lLWdyZWVuOiAjNDREODVDO1xyXG4kYmx1ZTogIzBBNzJGNDtcclxuJGdvbGQ6ICNFQkM4M0M7XHJcbiRyZWQ6ICNFQjVBMkQ7XHJcblxyXG4kbGF2ZW5kZXI6ICNFQUVFRkY7XHJcbiRhenVyZTogI0U4RkVGRjtcclxuJHBpbmstbGF2ZW5kZXI6ICNGMUU0RkY7XHJcbiRob25leWRldzogI0U2RkZERTtcclxuJGFsaWNlLWJsdWU6ICNERUVERkY7XHJcbiRjb3Juc2lsazogI0ZGRjhEQztcclxuJG1pc3R5LXJvc2U6ICNGRkU4RTE7XHJcblxyXG4kZGltLWdyZXk6ICM0NjQ2NDY7XHJcbiRncmV5OiAjOEU4RThFO1xyXG4kbGlnaHQtZ3JleTogI0Q0RDRENDtcclxuJHNtb2tlOiAjRURFREVEO1xyXG4kd2hpdGUtc21va2U6ICNGOEY4Rjg7XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/uicomponents/general-button/general-button.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/shared/uicomponents/general-button/general-button.component.ts ***!
  \********************************************************************************/
/*! exports provided: GeneralButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralButtonComponent", function() { return GeneralButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GeneralButtonComponent = /** @class */ (function () {
    function GeneralButtonComponent() {
    }
    GeneralButtonComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], GeneralButtonComponent.prototype, "color", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], GeneralButtonComponent.prototype, "type", void 0);
    GeneralButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-general-button',
            template: __webpack_require__(/*! ./general-button.component.html */ "./src/app/shared/uicomponents/general-button/general-button.component.html"),
            styles: [__webpack_require__(/*! ./general-button.component.scss */ "./src/app/shared/uicomponents/general-button/general-button.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GeneralButtonComponent);
    return GeneralButtonComponent;
}());



/***/ }),

/***/ "./src/app/shared/uicomponents/info-select-modal/info-select-modal.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/shared/uicomponents/info-select-modal/info-select-modal.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showable\" class=\"info-select-modal-wrapper\">\n  <div [@info-select-modal] *ngIf=\"showable\" class=\"info-select-modal\">\n      <ng-content></ng-content>    \n      <div class=\"info-select-modal-footer row\">\n        <div class=\"col-sm-9 btn-col\">\n          <app-general-button\n            (click)=\"ClickCancelBtn()\"\n            color=\"light-grey\"  \n          >\n            CANCEL\n          </app-general-button>\n        </div>\n        <div class=\"col-sm-3 btn-col\">\n          <app-general-button \n            (click)=\"ClickDoneBtn()\"\n            color=\"lime-green\"\n          >\n            DONE\n          </app-general-button>\n        </div>\n      </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/uicomponents/info-select-modal/info-select-modal.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/shared/uicomponents/info-select-modal/info-select-modal.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".info-select-modal-wrapper {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(70, 70, 70, 0.2);\n  z-index: 999;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .info-select-modal-wrapper .info-select-modal {\n    z-index: 1000;\n    position: fixed;\n    /* top: 20vh; */\n    display: flex;\n    overflow: hidden;\n    width: 600px;\n    height: 560px;\n    padding: 20px 39px 24px;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: stretch;\n    border-radius: 20px;\n    background-color: #fff;\n    box-shadow: 0 30px 120px -10px rgba(70, 70, 70, 0.8); }\n  .info-select-modal-wrapper .info-select-modal .info-select-modal-footer {\n      display: flex;\n      height: 70px;\n      flex-direction: row;\n      justify-content: center;\n      align-items: flex-end;\n      border-top: 1px solid #ededed; }\n  .info-select-modal-wrapper .info-select-modal .info-select-modal-footer .btn-col {\n        padding-left: 5px;\n        padding-right: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3VpY29tcG9uZW50cy9pbmZvLXNlbGVjdC1tb2RhbC9HOlxcUHJvamVjdFxcT3JoYW5DYW0tRnJvbnRFbmRcXHdvcmtcXGN1endlYmFwcC9zcmNcXGFwcFxcc2hhcmVkXFx1aWNvbXBvbmVudHNcXGluZm8tc2VsZWN0LW1vZGFsXFxpbmZvLXNlbGVjdC1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGdCQUFlO0VBQ2YsT0FBTTtFQUNOLFVBQVM7RUFDVCxRQUFPO0VBQ1AsU0FBUTtFQUNSLHdDQUFtQztFQUNuQyxhQUFZO0VBQ1osY0FBYTtFQUNiLG9CQUFtQjtFQUNuQix3QkFBdUIsRUFvQzFCO0VBOUNEO0lBWVEsY0FBYTtJQUNiLGdCQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWE7SUFDYixpQkFBZ0I7SUFDaEIsYUFBWTtJQUNaLGNBQWE7SUFDYix3QkFBdUI7SUFDdkIsdUJBQXNCO0lBQ3RCLCtCQUE4QjtJQUM5QixxQkFBb0I7SUFDcEIsb0JBQW1CO0lBQ25CLHVCQUFzQjtJQUN0QixxREFBb0QsRUFvQnZEO0VBN0NMO01BMkJZLGNBQWE7TUFDYixhQUFZO01BRVosb0JBQW1CO01BSW5CLHdCQUF1QjtNQUl2QixzQkFBcUI7TUFDckIsOEJBQTZCLEVBS2hDO0VBNUNUO1FBeUNnQixrQkFBaUI7UUFDakIsbUJBQWtCLEVBQ3JCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3VpY29tcG9uZW50cy9pbmZvLXNlbGVjdC1tb2RhbC9pbmZvLXNlbGVjdC1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcclxuXHJcbi5pbmZvLXNlbGVjdC1tb2RhbC13cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzAsNzAsNzAsLjIpO1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC5pbmZvLXNlbGVjdC1tb2RhbCB7XHJcbiAgICAgICAgei1pbmRleDogMTAwMDtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgLyogdG9wOiAyMHZoOyAqL1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB3aWR0aDogNjAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA1NjBweDtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4IDM5cHggMjRweDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAzMHB4IDEyMHB4IC0xMHB4IHJnYmEoNzAsIDcwLCA3MCwgMC44KTtcclxuICAgICAgICAuaW5mby1zZWxlY3QtbW9kYWwtZm9vdGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gICAgICAgICAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogZW5kO1xyXG4gICAgICAgICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgLW1zLWZsZXgtYWxpZ246IGVuZDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VkZWRlZDtcclxuICAgICAgICAgICAgLmJ0bi1jb2wge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/uicomponents/info-select-modal/info-select-modal.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/shared/uicomponents/info-select-modal/info-select-modal.component.ts ***!
  \**************************************************************************************/
/*! exports provided: InfoSelectModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoSelectModalComponent", function() { return InfoSelectModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");



var InfoSelectModalComponent = /** @class */ (function () {
    function InfoSelectModalComponent() {
        this.showableChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    InfoSelectModalComponent.prototype.ngOnInit = function () {
    };
    InfoSelectModalComponent.prototype.ClickCancelBtnEvent = function () {
        this.showableChange.emit(false);
    };
    ;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], InfoSelectModalComponent.prototype, "showable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
    ], InfoSelectModalComponent.prototype, "ClickDoneBtn", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
    ], InfoSelectModalComponent.prototype, "ClickCancelBtn", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InfoSelectModalComponent.prototype, "showableChange", void 0);
    InfoSelectModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-info-select-modal',
            template: __webpack_require__(/*! ./info-select-modal.component.html */ "./src/app/shared/uicomponents/info-select-modal/info-select-modal.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('info-select-modal', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'scale3d(.6,.6,.6) ', opacity: 0.8 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("400ms ease")
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => void', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("400ms ease", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'scale3d(0.6, 0.6, 0.6)', opacity: 0.6 }))
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./info-select-modal.component.scss */ "./src/app/shared/uicomponents/info-select-modal/info-select-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InfoSelectModalComponent);
    return InfoSelectModalComponent;
}());



/***/ }),

/***/ "./src/app/shared/uicomponents/interpretation-type-selector/interpretation-type-selector.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/shared/uicomponents/interpretation-type-selector/interpretation-type-selector.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  class=\"interpretation-type-selector\"\n  (click)=\"onClickHandler($event)\"\n  >\n  Interpretation Type\n</div>\n<app-info-select-modal  \n  [(showable)]=\"show_modal\"\n  [ClickDoneBtn]=\"onClickModalDoneBtn.bind(this)\"\n  >\n  <app-search-input></app-search-input>\n</app-info-select-modal>"

/***/ }),

/***/ "./src/app/shared/uicomponents/interpretation-type-selector/interpretation-type-selector.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/shared/uicomponents/interpretation-type-selector/interpretation-type-selector.component.scss ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".interpretation-type-selector {\n  cursor: pointer;\n  margin-bottom: 10px;\n  height: 50px;\n  padding: 10px 20px 9px 56px;\n  border-bottom: solid 1px #EDEDED;\n  font-size: 18px;\n  font-weight: 700;\n  color: #8E8E8E;\n  background-repeat: no-repeat;\n  background-image: url('nature-icon.png');\n  background-position: 22px 50%;\n  background-size: 13px;\n  text-align: left; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3VpY29tcG9uZW50cy9pbnRlcnByZXRhdGlvbi10eXBlLXNlbGVjdG9yL0c6XFxQcm9qZWN0XFxPcmhhbkNhbS1Gcm9udEVuZFxcd29ya1xcY3V6d2ViYXBwL3NyY1xcYXBwXFxzaGFyZWRcXHVpY29tcG9uZW50c1xcaW50ZXJwcmV0YXRpb24tdHlwZS1zZWxlY3RvclxcaW50ZXJwcmV0YXRpb24tdHlwZS1zZWxlY3Rvci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL3VpY29tcG9uZW50cy9pbnRlcnByZXRhdGlvbi10eXBlLXNlbGVjdG9yL0c6XFxQcm9qZWN0XFxPcmhhbkNhbS1Gcm9udEVuZFxcd29ya1xcY3V6d2ViYXBwL3NyY1xcYXNzZXRzXFxzY3NzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxnQkFBZTtFQUNmLG9CQUFtQjtFQUNuQixhQUFZO0VBQ1osNEJBQTJCO0VBQzNCLGlDQ2VXO0VEZFgsZ0JBQWU7RUFDZixpQkFBZ0I7RUFDaEIsZUNVVTtFRFRWLDZCQUE0QjtFQUM1Qix5Q0FBdUI7RUFDdkIsOEJBQTZCO0VBQzdCLHNCQUFxQjtFQUNyQixpQkFBZ0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvdWljb21wb25lbnRzL2ludGVycHJldGF0aW9uLXR5cGUtc2VsZWN0b3IvaW50ZXJwcmV0YXRpb24tdHlwZS1zZWxlY3Rvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcclxuXHJcbi5pbnRlcnByZXRhdGlvbi10eXBlLXNlbGVjdG9yIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHggOXB4IDU2cHg7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggJHNtb2tlO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAkZ3JleTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoI3skaW1nLXBhdGh9L25hdHVyZS1pY29uLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyMnB4IDUwJTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTNweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn0iLCIkZm9udC1mYW1pbHk6IFF1aWNrc2FuZCxzYW5zLXNlcmlmO1xyXG4kaW1nLXBhdGg6IFwic3JjL2Fzc2V0cy9pbWdzXCI7XHJcblxyXG4kcm95YWwtYmx1ZTogIzYwN0NGMTtcclxuJHNlYS1ncmVlbjogIzIzQjdCQjtcclxuJHB1cnBsZTogIzlDNkJDRTtcclxuJGxpbWUtZ3JlZW46ICM0NEQ4NUM7XHJcbiRibHVlOiAjMEE3MkY0O1xyXG4kZ29sZDogI0VCQzgzQztcclxuJHJlZDogI0VCNUEyRDtcclxuXHJcbiRsYXZlbmRlcjogI0VBRUVGRjtcclxuJGF6dXJlOiAjRThGRUZGO1xyXG4kcGluay1sYXZlbmRlcjogI0YxRTRGRjtcclxuJGhvbmV5ZGV3OiAjRTZGRkRFO1xyXG4kYWxpY2UtYmx1ZTogI0RFRURGRjtcclxuJGNvcm5zaWxrOiAjRkZGOERDO1xyXG4kbWlzdHktcm9zZTogI0ZGRThFMTtcclxuXHJcbiRkaW0tZ3JleTogIzQ2NDY0NjtcclxuJGdyZXk6ICM4RThFOEU7XHJcbiRsaWdodC1ncmV5OiAjRDRENEQ0O1xyXG4kc21va2U6ICNFREVERUQ7XHJcbiR3aGl0ZS1zbW9rZTogI0Y4RjhGODtcclxuIl19 */"

/***/ }),

/***/ "./src/app/shared/uicomponents/interpretation-type-selector/interpretation-type-selector.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/shared/uicomponents/interpretation-type-selector/interpretation-type-selector.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: InterpretationTypeSelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterpretationTypeSelectorComponent", function() { return InterpretationTypeSelectorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InterpretationTypeSelectorComponent = /** @class */ (function () {
    function InterpretationTypeSelectorComponent() {
        this.show_modal = false;
    }
    InterpretationTypeSelectorComponent.prototype.ngOnInit = function () {
    };
    InterpretationTypeSelectorComponent.prototype.onClickHandler = function (event) {
        this.show_modal = true;
    };
    InterpretationTypeSelectorComponent.prototype.onClickModalDoneBtn = function () {
        this.show_modal = false;
    };
    InterpretationTypeSelectorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-interpretation-type-selector',
            template: __webpack_require__(/*! ./interpretation-type-selector.component.html */ "./src/app/shared/uicomponents/interpretation-type-selector/interpretation-type-selector.component.html"),
            styles: [__webpack_require__(/*! ./interpretation-type-selector.component.scss */ "./src/app/shared/uicomponents/interpretation-type-selector/interpretation-type-selector.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InterpretationTypeSelectorComponent);
    return InterpretationTypeSelectorComponent;
}());



/***/ }),

/***/ "./src/app/shared/uicomponents/introbutton/introbutton.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/shared/uicomponents/introbutton/introbutton.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a href=\"\" class=\"watch-intro-button\" (click)=\"onClickHandler($event)\">\n  <div class=\"watch-button-text\">\n    <ng-content></ng-content>\n  </div>\n  <div class=\"watch-button-icon\"></div>\n</a>"

/***/ }),

/***/ "./src/app/shared/uicomponents/introbutton/introbutton.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/shared/uicomponents/introbutton/introbutton.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".watch-intro-button {\n  display: flex;\n  width: 200px;\n  margin-right: 0;\n  margin-left: 0;\n  padding: 15px 24px;\n  justify-content: center;\n  align-items: center;\n  border-radius: 100px;\n  background-color: #fff;\n  transition: background-color .4s ease,box-shadow .4s ease,color .4s ease;\n  color: #9C6BCE;\n  -webkit-transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);\n          transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  text-decoration: none; }\n  .watch-intro-button:hover {\n    background-color: #9C6BCE;\n    box-shadow: 0 20px 60px -10px rgba(156, 107, 206, 0.8);\n    color: #fff;\n    -webkit-transform: translate3d(0px, 0px, 0px) scale3d(1.1, 1.1, 1.1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);\n            transform: translate3d(0px, 0px, 0px) scale3d(1.1, 1.1, 1.1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);\n    transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1); }\n  .watch-intro-button .watch-button-text {\n    font-size: 18px;\n    font-weight: 700; }\n  .watch-intro-button .watch-button-icon {\n    width: 20px;\n    height: 20px;\n    margin-left: 10px;\n    background-image: url('play-icon.png');\n    background-position: 50% 50%;\n    background-size: contain;\n    background-repeat: no-repeat; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3VpY29tcG9uZW50cy9pbnRyb2J1dHRvbi9HOlxcUHJvamVjdFxcT3JoYW5DYW0tRnJvbnRFbmRcXHdvcmtcXGN1endlYmFwcC9zcmNcXGFwcFxcc2hhcmVkXFx1aWNvbXBvbmVudHNcXGludHJvYnV0dG9uXFxpbnRyb2J1dHRvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL3VpY29tcG9uZW50cy9pbnRyb2J1dHRvbi9HOlxcUHJvamVjdFxcT3JoYW5DYW0tRnJvbnRFbmRcXHdvcmtcXGN1endlYmFwcC9zcmNcXGFzc2V0c1xcc2Nzc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksY0FBYTtFQUNiLGFBQVk7RUFDWixnQkFBZTtFQUNmLGVBQWM7RUFDZCxtQkFBa0I7RUFJbEIsd0JBQXVCO0VBSXZCLG9CQUFtQjtFQUNuQixxQkFBb0I7RUFDcEIsdUJBQXNCO0VBRXRCLHlFQUF3RTtFQUN4RSxlQ2ZZO0VEZ0JaLDBIQUFpSDtVQUFqSCxrSEFBaUg7RUFDakgscUNBQTRCO1VBQTVCLDZCQUE0QjtFQUM1QixzQkFBcUIsRUFxQnhCO0VBMUNEO0lBdUJRLDBCQ3BCUTtJRHFCUix1REFBa0Q7SUFDbEQsWUFBVztJQUNYLGdJQUF1SDtZQUF2SCx3SEFBdUg7SUFDdkgsdURBQXNELEVBQ3pEO0VBNUJMO0lBOEJRLGdCQUFlO0lBQ2YsaUJBQWdCLEVBQ25CO0VBaENMO0lBa0NRLFlBQVc7SUFDWCxhQUFZO0lBQ1osa0JBQWlCO0lBQ2pCLHVDQUF1QjtJQUN2Qiw2QkFBNEI7SUFDNUIseUJBQXdCO0lBQ3hCLDZCQUE0QixFQUMvQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC91aWNvbXBvbmVudHMvaW50cm9idXR0b24vaW50cm9idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwidmFyaWFibGVzXCI7XHJcblxyXG4ud2F0Y2gtaW50cm8tYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIHBhZGRpbmc6IDE1cHggMjRweDtcclxuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcclxuICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuNHMgZWFzZSxib3gtc2hhZG93IC40cyBlYXNlLGNvbG9yIC40cyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuNHMgZWFzZSxib3gtc2hhZG93IC40cyBlYXNlLGNvbG9yIC40cyBlYXNlO1xyXG4gICAgY29sb3I6ICRwdXJwbGU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpIHNjYWxlM2QoMSwgMSwgMSkgcm90YXRlWCgwZGVnKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVooMGRlZykgc2tldygwZGVnLCAwZGVnKTtcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHVycGxlO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMjBweCA2MHB4IC0xMHB4IHJnYmEoMTU2LDEwNywyMDYsLjgpO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCkgc2NhbGUzZCgxLjEsIDEuMSwgMS4xKSByb3RhdGVYKDBkZWcpIHJvdGF0ZVkoMGRlZykgcm90YXRlWigwZGVnKSBza2V3KDBkZWcsIDBkZWcpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAxcyBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKTtcclxuICAgIH1cclxuICAgIC53YXRjaC1idXR0b24tdGV4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB9XHJcbiAgICAud2F0Y2gtYnV0dG9uLWljb24ge1xyXG4gICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoI3skaW1nLXBhdGh9L3BsYXktaWNvbi5wbmcpO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICB9XHJcbn0iLCIkZm9udC1mYW1pbHk6IFF1aWNrc2FuZCxzYW5zLXNlcmlmO1xyXG4kaW1nLXBhdGg6IFwic3JjL2Fzc2V0cy9pbWdzXCI7XHJcblxyXG4kcm95YWwtYmx1ZTogIzYwN0NGMTtcclxuJHNlYS1ncmVlbjogIzIzQjdCQjtcclxuJHB1cnBsZTogIzlDNkJDRTtcclxuJGxpbWUtZ3JlZW46ICM0NEQ4NUM7XHJcbiRibHVlOiAjMEE3MkY0O1xyXG4kZ29sZDogI0VCQzgzQztcclxuJHJlZDogI0VCNUEyRDtcclxuXHJcbiRsYXZlbmRlcjogI0VBRUVGRjtcclxuJGF6dXJlOiAjRThGRUZGO1xyXG4kcGluay1sYXZlbmRlcjogI0YxRTRGRjtcclxuJGhvbmV5ZGV3OiAjRTZGRkRFO1xyXG4kYWxpY2UtYmx1ZTogI0RFRURGRjtcclxuJGNvcm5zaWxrOiAjRkZGOERDO1xyXG4kbWlzdHktcm9zZTogI0ZGRThFMTtcclxuXHJcbiRkaW0tZ3JleTogIzQ2NDY0NjtcclxuJGdyZXk6ICM4RThFOEU7XHJcbiRsaWdodC1ncmV5OiAjRDRENEQ0O1xyXG4kc21va2U6ICNFREVERUQ7XHJcbiR3aGl0ZS1zbW9rZTogI0Y4RjhGODtcclxuIl19 */"

/***/ }),

/***/ "./src/app/shared/uicomponents/introbutton/introbutton.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/uicomponents/introbutton/introbutton.component.ts ***!
  \**************************************************************************/
/*! exports provided: IntrobuttonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntrobuttonComponent", function() { return IntrobuttonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IntrobuttonComponent = /** @class */ (function () {
    function IntrobuttonComponent() {
    }
    IntrobuttonComponent.prototype.ngOnInit = function () {
    };
    IntrobuttonComponent.prototype.onClickHandler = function (event) {
        event.preventDefault();
        this.onClick();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
    ], IntrobuttonComponent.prototype, "onClick", void 0);
    IntrobuttonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-introbutton',
            template: __webpack_require__(/*! ./introbutton.component.html */ "./src/app/shared/uicomponents/introbutton/introbutton.component.html"),
            styles: [__webpack_require__(/*! ./introbutton.component.scss */ "./src/app/shared/uicomponents/introbutton/introbutton.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IntrobuttonComponent);
    return IntrobuttonComponent;
}());



/***/ }),

/***/ "./src/app/shared/uicomponents/introvideo/introvideo.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/shared/uicomponents/introvideo/introvideo.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"introvideo-container\" [ngClass]=\"{'hide-video': !isWatch}\">\n  <div class=\"introvideo-content\" >\n      <iframe\n        class=\"videoframe\"\n        src=\"https://www.youtube.com/embed/cJ58Z1568lc\">\n      </iframe>\n      <div class=\"introvideo-close-button\" (click)=\"onClickClose()\"></div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/uicomponents/introvideo/introvideo.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/shared/uicomponents/introvideo/introvideo.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".introvideo-container {\n  position: absolute;\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  align-content: center;\n  justify-content: center;\n  top: 0;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.9); }\n  .introvideo-container.hide-video {\n    display: none;\n    transition: display 1s cubic-bezier(0.165, 0.84, 0.44, 1); }\n  .introvideo-container .videoframe {\n    width: 51.65vw;\n    height: 30vw;\n    border: none; }\n  .introvideo-container .introvideo-close-button {\n    position: absolute;\n    right: 24px;\n    height: 15px;\n    background-image: url('close.svg');\n    background-size: 18px;\n    opacity: 0.8;\n    width: 15px;\n    top: 20px;\n    background-repeat: no-repeat;\n    background-position: center; }\n  .introvideo-container .introvideo-close-button:hover {\n      cursor: pointer;\n      opacity: 1;\n      transition: opacity 0.3s cubic-bezier(0.075, 0.82, 0.165, 1); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3VpY29tcG9uZW50cy9pbnRyb3ZpZGVvL0c6XFxQcm9qZWN0XFxPcmhhbkNhbS1Gcm9udEVuZFxcd29ya1xcY3V6d2ViYXBwL3NyY1xcYXBwXFxzaGFyZWRcXHVpY29tcG9uZW50c1xcaW50cm92aWRlb1xcaW50cm92aWRlby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLG1CQUFrQjtFQUNsQixjQUFhO0VBQ2IsYUFBWTtFQUNaLGNBQWE7RUFDYixzQkFBcUI7RUFDckIsd0JBQXVCO0VBQ3ZCLE9BQU07RUFDTixvQkFBbUI7RUFDbkIscUNBQW9DLEVBOEJ2QztFQXZDRDtJQVdRLGNBQWE7SUFDYiwwREFBeUQsRUFDNUQ7RUFiTDtJQWdCUSxlQUFjO0lBQ2QsYUFBWTtJQUNaLGFBQVksRUFDZjtFQW5CTDtJQXNCUSxtQkFBa0I7SUFDbEIsWUFBVztJQUNYLGFBQVk7SUFDWixtQ0FBdUI7SUFDdkIsc0JBQXFCO0lBQ3JCLGFBQVk7SUFDWixZQUFXO0lBQ1gsVUFBUztJQUNULDZCQUE0QjtJQUM1Qiw0QkFBMkIsRUFNOUI7RUFyQ0w7TUFpQ1ksZ0JBQWU7TUFDZixXQUFVO01BQ1YsNkRBQTRELEVBQy9EIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3VpY29tcG9uZW50cy9pbnRyb3ZpZGVvL2ludHJvdmlkZW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwidmFyaWFibGVzXCI7XHJcblxyXG4uaW50cm92aWRlby1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRvcDogMDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XHJcbiAgICAmLmhpZGUtdmlkZW8ge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogZGlzcGxheSAxcyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAudmlkZW9mcmFtZSB7XHJcbiAgICAgICAgd2lkdGg6IDUxLjY1dnc7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHZ3O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAuaW50cm92aWRlby1jbG9zZS1idXR0b24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMjRweDtcclxuICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCN7JGltZy1wYXRofS9jbG9zZS5zdmcpO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMThweDtcclxuICAgICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICAgICAgd2lkdGg6IDE1cHg7XHJcbiAgICAgICAgdG9wOiAyMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/uicomponents/introvideo/introvideo.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/uicomponents/introvideo/introvideo.component.ts ***!
  \************************************************************************/
/*! exports provided: IntrovideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntrovideoComponent", function() { return IntrovideoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IntrovideoComponent = /** @class */ (function () {
    function IntrovideoComponent() {
        this.isWatch = false;
        this.videosource = "https://www.youtube.com/embed/cJ58Z1568lc";
    }
    IntrovideoComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], IntrovideoComponent.prototype, "isWatch", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
    ], IntrovideoComponent.prototype, "onClickClose", void 0);
    IntrovideoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-introvideo',
            template: __webpack_require__(/*! ./introvideo.component.html */ "./src/app/shared/uicomponents/introvideo/introvideo.component.html"),
            styles: [__webpack_require__(/*! ./introvideo.component.scss */ "./src/app/shared/uicomponents/introvideo/introvideo.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IntrovideoComponent);
    return IntrovideoComponent;
}());



/***/ }),

/***/ "./src/app/shared/uicomponents/job-button/job-button.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/shared/uicomponents/job-button/job-button.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a href=\"{{dest}}\" class=\"job-button\" [ngClass]=\"job_type\" [ngSwitch]=\"job_type\">\n    <div *ngSwitchCase=\"'on-site-interpretation'\">\n        <strong>ON-SITE</strong>\n        INTERPRETATION &nbsp;&nbsp;\n        <strong>&gt;</strong>\n    </div>\n    <div *ngSwitchCase=\"'document-translation'\">\n        <strong>Document</strong>\n        TRANSLATION &nbsp;&nbsp;\n        <strong>&gt;</strong>\n    </div>\n    <div *ngSwitchCase=\"'video-audio-interpretation'\">\n        <strong>VIDEO/AUDIO</strong>\n        INTERPRETATION &nbsp;&nbsp;\n        <strong>&gt;</strong>\n    </div>\n</a>"

/***/ }),

/***/ "./src/app/shared/uicomponents/job-button/job-button.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/shared/uicomponents/job-button/job-button.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".job-button {\n  display: inline-block;\n  cursor: pointer;\n  width: 600px;\n  margin: 10px;\n  padding: 24px 50px 24px 100px;\n  border-radius: 200px;\n  background-color: #fff;\n  background-position: 25px 50%;\n  background-repeat: no-repeat;\n  color: #23B7BB;\n  font-size: 26px;\n  line-height: 140%;\n  font-weight: 300;\n  text-decoration: none;\n  -webkit-transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);\n          transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d; }\n  .job-button:hover {\n    -webkit-transform: translate3d(0px, 0px, 0px) scale3d(1.1, 1.1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);\n            transform: translate3d(0px, 0px, 0px) scale3d(1.1, 1.1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);\n    -webkit-transform-style: preserve-3d;\n            transform-style: preserve-3d;\n    transition: -webkit-transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);\n    transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);\n    transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), -webkit-transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1); }\n  .job-button.on-site-interpretation {\n    background-image: url('on-site-interpretation.png');\n    background-position: 25px 50%;\n    background-size: 60px;\n    color: #23B7BB; }\n  .job-button.document-translation {\n    background-image: url('document-translation.png');\n    background-position: 39px 50%;\n    background-size: 32px;\n    color: #607CF1; }\n  .job-button.video-audio-interpretation {\n    background-image: url('video-audio-translation.png');\n    background-position: 39px 50%;\n    background-size: 26px;\n    color: #9C6BCE; }\n  .job-button div strong {\n    font-weight: 700; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3VpY29tcG9uZW50cy9qb2ItYnV0dG9uL0c6XFxQcm9qZWN0XFxPcmhhbkNhbS1Gcm9udEVuZFxcd29ya1xcY3V6d2ViYXBwL3NyY1xcYXBwXFxzaGFyZWRcXHVpY29tcG9uZW50c1xcam9iLWJ1dHRvblxcam9iLWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL3VpY29tcG9uZW50cy9qb2ItYnV0dG9uL0c6XFxQcm9qZWN0XFxPcmhhbkNhbS1Gcm9udEVuZFxcd29ya1xcY3V6d2ViYXBwL3NyY1xcYXNzZXRzXFxzY3NzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxzQkFBcUI7RUFDckIsZ0JBQWU7RUFDZixhQUFZO0VBQ1osYUFBWTtFQUNaLDhCQUE2QjtFQUM3QixxQkFBb0I7RUFDcEIsdUJBQXNCO0VBQ3RCLDhCQUE2QjtFQUM3Qiw2QkFBNEI7RUFDNUIsZUNSZTtFRFNmLGdCQUFlO0VBQ2Ysa0JBQWlCO0VBQ2pCLGlCQUFnQjtFQUNoQixzQkFBcUI7RUFDckIsMEhBQWlIO1VBQWpILGtIQUFpSDtFQUNqSCxxQ0FBNEI7VUFBNUIsNkJBQTRCLEVBK0IvQjtFQS9DRDtJQWtCUSw4SEFBcUg7WUFBckgsc0hBQXFIO0lBQ3JILHFDQUE0QjtZQUE1Qiw2QkFBNEI7SUFDNUIsc0VBQTZEO0lBQTdELDhEQUE2RDtJQUE3RCx5SEFBNkQsRUFDaEU7RUFyQkw7SUF1QlEsb0RBQXVCO0lBQ3ZCLDhCQUE2QjtJQUM3QixzQkFBcUI7SUFDckIsZUN4QlcsRUR5QmQ7RUEzQkw7SUE4QlEsa0RBQXVCO0lBQ3ZCLDhCQUE2QjtJQUM3QixzQkFBcUI7SUFDckIsZUNoQ1ksRURpQ2Y7RUFsQ0w7SUFvQ1EscURBQXVCO0lBQ3ZCLDhCQUE2QjtJQUM3QixzQkFBcUI7SUFDckIsZUNwQ1EsRURxQ1g7RUF4Q0w7SUE0Q1ksaUJBQ0osRUFBQyIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC91aWNvbXBvbmVudHMvam9iLWJ1dHRvbi9qb2ItYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInZhcmlhYmxlc1wiO1xyXG5cclxuLmpvYi1idXR0b24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMjRweCA1MHB4IDI0cHggMTAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyNXB4IDUwJTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBjb2xvcjogJHNlYS1ncmVlbjtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNDAlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCkgc2NhbGUzZCgxLCAxLCAxKSByb3RhdGVYKDBkZWcpIHJvdGF0ZVkoMGRlZykgcm90YXRlWigwZGVnKSBza2V3KDBkZWcsIDBkZWcpO1xyXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCkgc2NhbGUzZCgxLjEsIDEuMSwgMSkgcm90YXRlWCgwZGVnKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVooMGRlZykgc2tldygwZGVnLCAwZGVnKTtcclxuICAgICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSk7XHJcbiAgICB9XHJcbiAgICAmLm9uLXNpdGUtaW50ZXJwcmV0YXRpb24ge1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgjeyRpbWctcGF0aH0vb24tc2l0ZS1pbnRlcnByZXRhdGlvbi5wbmcpO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDI1cHggNTAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogNjBweDtcclxuICAgICAgICBjb2xvcjogJHNlYS1ncmVlbjtcclxuICAgIH1cclxuXHJcbiAgICAmLmRvY3VtZW50LXRyYW5zbGF0aW9uIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoI3skaW1nLXBhdGh9L2RvY3VtZW50LXRyYW5zbGF0aW9uLnBuZyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMzlweCA1MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAzMnB4O1xyXG4gICAgICAgIGNvbG9yOiAkcm95YWwtYmx1ZTtcclxuICAgIH1cclxuICAgICYudmlkZW8tYXVkaW8taW50ZXJwcmV0YXRpb24ge1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgjeyRpbWctcGF0aH0vdmlkZW8tYXVkaW8tdHJhbnNsYXRpb24ucG5nKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAzOXB4IDUwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDI2cHg7XHJcbiAgICAgICAgY29sb3I6ICRwdXJwbGVcclxuICAgIH1cclxuXHJcbiAgICBkaXZ7XHJcbiAgICAgICAgc3Ryb25nIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIiRmb250LWZhbWlseTogUXVpY2tzYW5kLHNhbnMtc2VyaWY7XHJcbiRpbWctcGF0aDogXCJzcmMvYXNzZXRzL2ltZ3NcIjtcclxuXHJcbiRyb3lhbC1ibHVlOiAjNjA3Q0YxO1xyXG4kc2VhLWdyZWVuOiAjMjNCN0JCO1xyXG4kcHVycGxlOiAjOUM2QkNFO1xyXG4kbGltZS1ncmVlbjogIzQ0RDg1QztcclxuJGJsdWU6ICMwQTcyRjQ7XHJcbiRnb2xkOiAjRUJDODNDO1xyXG4kcmVkOiAjRUI1QTJEO1xyXG5cclxuJGxhdmVuZGVyOiAjRUFFRUZGO1xyXG4kYXp1cmU6ICNFOEZFRkY7XHJcbiRwaW5rLWxhdmVuZGVyOiAjRjFFNEZGO1xyXG4kaG9uZXlkZXc6ICNFNkZGREU7XHJcbiRhbGljZS1ibHVlOiAjREVFREZGO1xyXG4kY29ybnNpbGs6ICNGRkY4REM7XHJcbiRtaXN0eS1yb3NlOiAjRkZFOEUxO1xyXG5cclxuJGRpbS1ncmV5OiAjNDY0NjQ2O1xyXG4kZ3JleTogIzhFOEU4RTtcclxuJGxpZ2h0LWdyZXk6ICNENEQ0RDQ7XHJcbiRzbW9rZTogI0VERURFRDtcclxuJHdoaXRlLXNtb2tlOiAjRjhGOEY4O1xyXG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/uicomponents/job-button/job-button.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/uicomponents/job-button/job-button.component.ts ***!
  \************************************************************************/
/*! exports provided: JobButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobButtonComponent", function() { return JobButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var JobButtonComponent = /** @class */ (function () {
    function JobButtonComponent() {
        this.job_type = '';
        this.dest = '';
    }
    JobButtonComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], JobButtonComponent.prototype, "job_type", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], JobButtonComponent.prototype, "dest", void 0);
    JobButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-job-button',
            template: __webpack_require__(/*! ./job-button.component.html */ "./src/app/shared/uicomponents/job-button/job-button.component.html"),
            styles: [__webpack_require__(/*! ./job-button.component.scss */ "./src/app/shared/uicomponents/job-button/job-button.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], JobButtonComponent);
    return JobButtonComponent;
}());



/***/ }),

/***/ "./src/app/shared/uicomponents/location-selector/location-selector.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/shared/uicomponents/location-selector/location-selector.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  class=\"location-selector\"\n  (click)=\"onClickHandler($event)\"\n  >\n  Location\n</div>\n<app-info-select-modal \n  [(showable)]=\"show_modal\"\n  [ClickDoneBtn]=\"onClickModalDone.bind(this)\"\n  >\n    <h1>Select the Location</h1>\n    \n</app-info-select-modal>"

/***/ }),

/***/ "./src/app/shared/uicomponents/location-selector/location-selector.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/shared/uicomponents/location-selector/location-selector.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".location-selector {\n  width: 100%;\n  padding: 9px 20px 9px 56px;\n  border-style: none none solid;\n  border-bottom-width: 1px;\n  border-bottom-color: #23B7BB;\n  background-position: 14px 50%;\n  background-size: 22px;\n  background-repeat: no-repeat;\n  background-image: url('map-icon.png');\n  color: #23B7BB;\n  font-size: 18px;\n  text-align: left;\n  margin-bottom: 10px;\n  font-weight: 700;\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3VpY29tcG9uZW50cy9sb2NhdGlvbi1zZWxlY3Rvci9HOlxcUHJvamVjdFxcT3JoYW5DYW0tRnJvbnRFbmRcXHdvcmtcXGN1endlYmFwcC9zcmNcXGFwcFxcc2hhcmVkXFx1aWNvbXBvbmVudHNcXGxvY2F0aW9uLXNlbGVjdG9yXFxsb2NhdGlvbi1zZWxlY3Rvci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL3VpY29tcG9uZW50cy9sb2NhdGlvbi1zZWxlY3Rvci9HOlxcUHJvamVjdFxcT3JoYW5DYW0tRnJvbnRFbmRcXHdvcmtcXGN1endlYmFwcC9zcmNcXGFzc2V0c1xcc2Nzc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksWUFBVztFQUNYLDJCQUEwQjtFQUMxQiw4QkFBNkI7RUFDN0IseUJBQXdCO0VBQ3hCLDZCQ0hlO0VESWYsOEJBQTZCO0VBQzdCLHNCQUFxQjtFQUNyQiw2QkFBNEI7RUFDNUIsc0NBQXVCO0VBQ3ZCLGVDUmU7RURTZixnQkFBZTtFQUNmLGlCQUFnQjtFQUNoQixvQkFBbUI7RUFDbkIsaUJBQWdCO0VBQ2hCLGdCQUFlLEVBQ2xCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3VpY29tcG9uZW50cy9sb2NhdGlvbi1zZWxlY3Rvci9sb2NhdGlvbi1zZWxlY3Rvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcclxuXHJcbi5sb2NhdGlvbi1zZWxlY3RvciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDlweCAyMHB4IDlweCA1NnB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBub25lIG5vbmUgc29saWQ7XHJcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAkc2VhLWdyZWVuO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTRweCA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIycHg7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCN7JGltZy1wYXRofS9tYXAtaWNvbi5wbmcpO1xyXG4gICAgY29sb3I6ICRzZWEtZ3JlZW47XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iLCIkZm9udC1mYW1pbHk6IFF1aWNrc2FuZCxzYW5zLXNlcmlmO1xyXG4kaW1nLXBhdGg6IFwic3JjL2Fzc2V0cy9pbWdzXCI7XHJcblxyXG4kcm95YWwtYmx1ZTogIzYwN0NGMTtcclxuJHNlYS1ncmVlbjogIzIzQjdCQjtcclxuJHB1cnBsZTogIzlDNkJDRTtcclxuJGxpbWUtZ3JlZW46ICM0NEQ4NUM7XHJcbiRibHVlOiAjMEE3MkY0O1xyXG4kZ29sZDogI0VCQzgzQztcclxuJHJlZDogI0VCNUEyRDtcclxuXHJcbiRsYXZlbmRlcjogI0VBRUVGRjtcclxuJGF6dXJlOiAjRThGRUZGO1xyXG4kcGluay1sYXZlbmRlcjogI0YxRTRGRjtcclxuJGhvbmV5ZGV3OiAjRTZGRkRFO1xyXG4kYWxpY2UtYmx1ZTogI0RFRURGRjtcclxuJGNvcm5zaWxrOiAjRkZGOERDO1xyXG4kbWlzdHktcm9zZTogI0ZGRThFMTtcclxuXHJcbiRkaW0tZ3JleTogIzQ2NDY0NjtcclxuJGdyZXk6ICM4RThFOEU7XHJcbiRsaWdodC1ncmV5OiAjRDRENEQ0O1xyXG4kc21va2U6ICNFREVERUQ7XHJcbiR3aGl0ZS1zbW9rZTogI0Y4RjhGODtcclxuIl19 */"

/***/ }),

/***/ "./src/app/shared/uicomponents/location-selector/location-selector.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/shared/uicomponents/location-selector/location-selector.component.ts ***!
  \**************************************************************************************/
/*! exports provided: LocationSelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationSelectorComponent", function() { return LocationSelectorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LocationSelectorComponent = /** @class */ (function () {
    function LocationSelectorComponent() {
        this.show_modal = false;
    }
    LocationSelectorComponent.prototype.ngOnInit = function () {
    };
    // Show Modal
    LocationSelectorComponent.prototype.onClickHandler = function (event) {
        this.show_modal = true;
    };
    // OnClick Done button
    LocationSelectorComponent.prototype.onClickModalDone = function () {
        this.show_modal = false;
    };
    LocationSelectorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-location-selector',
            template: __webpack_require__(/*! ./location-selector.component.html */ "./src/app/shared/uicomponents/location-selector/location-selector.component.html"),
            styles: [__webpack_require__(/*! ./location-selector.component.scss */ "./src/app/shared/uicomponents/location-selector/location-selector.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LocationSelectorComponent);
    return LocationSelectorComponent;
}());



/***/ }),

/***/ "./src/app/shared/uicomponents/login-section-button/login-section-button.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/shared/uicomponents/login-section-button/login-section-button.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a \n  href=\"javascript:;\"\n  class=\"login-section-button\"  \n  [ngClass]=\"icon != '' ? 'icon ' + icon : ''\"\n  (click)=\"ClickHandler()\"\n  >\n  <ng-content></ng-content>\n  <span>></span>\n</a>"

/***/ }),

/***/ "./src/app/shared/uicomponents/login-section-button/login-section-button.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/shared/uicomponents/login-section-button/login-section-button.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-section-button {\n  position: relative;\n  display: inline-block;\n  text-decoration: none;\n  width: 360px;\n  margin: 5px;\n  padding: 24px 22px;\n  border: 2px solid #fff;\n  border-radius: 14px;\n  background-color: transparent;\n  transition: all .4s ease;\n  color: #fff;\n  font-size: 18px;\n  font-weight: 700; }\n  .login-section-button:hover {\n    background-color: #fff;\n    color: #607CF1 !important; }\n  .login-section-button.icon {\n    padding-left: 60px;\n    background-position: 23px 50%;\n    background-size: 24px; }\n  .login-section-button.new-user {\n    background-image: url('signup-icon.png');\n    background-repeat: no-repeat; }\n  .login-section-button.new-user:hover {\n      background-image: url('signup-icon-hover.png'); }\n  .login-section-button.login {\n    background-image: url('login-icon.png');\n    background-repeat: no-repeat; }\n  .login-section-button.login:hover {\n      background-image: url('login-icon-hover.png'); }\n  .login-section-button span {\n    position: absolute;\n    right: 80px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3VpY29tcG9uZW50cy9sb2dpbi1zZWN0aW9uLWJ1dHRvbi9HOlxcUHJvamVjdFxcT3JoYW5DYW0tRnJvbnRFbmRcXHdvcmtcXGN1endlYmFwcC9zcmNcXGFwcFxcc2hhcmVkXFx1aWNvbXBvbmVudHNcXGxvZ2luLXNlY3Rpb24tYnV0dG9uXFxsb2dpbi1zZWN0aW9uLWJ1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLG1CQUFrQjtFQUNsQixzQkFBcUI7RUFDckIsc0JBQXFCO0VBQ3JCLGFBQVk7RUFDWixZQUFXO0VBQ1gsbUJBQWtCO0VBQ2xCLHVCQUFzQjtFQUN0QixvQkFBbUI7RUFDbkIsOEJBQTZCO0VBRTdCLHlCQUF3QjtFQUN4QixZQUFXO0VBQ1gsZ0JBQWU7RUFDZixpQkFBZ0IsRUE4Qm5CO0VBNUNEO0lBZ0JRLHVCQUFzQjtJQUN0QiwwQkFBNEIsRUFDL0I7RUFsQkw7SUFvQlEsbUJBQWtCO0lBQ2xCLDhCQUE2QjtJQUM3QixzQkFBcUIsRUFDeEI7RUF2Qkw7SUEwQlEseUNBQXVCO0lBQ3ZCLDZCQUE0QixFQUkvQjtFQS9CTDtNQTZCWSwrQ0FBdUIsRUFDMUI7RUE5QlQ7SUFrQ1Esd0NBQXVCO0lBQ3ZCLDZCQUE0QixFQUkvQjtFQXZDTDtNQXFDWSw4Q0FBdUIsRUFDMUI7RUF0Q1Q7SUF5Q1EsbUJBQWtCO0lBQ2xCLFlBQVcsRUFDZCIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC91aWNvbXBvbmVudHMvbG9naW4tc2VjdGlvbi1idXR0b24vbG9naW4tc2VjdGlvbi1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwidmFyaWFibGVzXCI7XHJcblxyXG4ubG9naW4tc2VjdGlvbi1idXR0b24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgd2lkdGg6IDM2MHB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAyNHB4IDIycHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjRzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjRzIGVhc2U7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGNvbG9yOiAkcm95YWwtYmx1ZSFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAmLmljb24ge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNjBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyM3B4IDUwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDI0cHg7IFxyXG4gICAgfVxyXG5cclxuICAgICYubmV3LXVzZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgjeyRpbWctcGF0aH0vc2lnbnVwLWljb24ucG5nKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoI3skaW1nLXBhdGh9L3NpZ251cC1pY29uLWhvdmVyLnBuZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYubG9naW4ge1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgjeyRpbWctcGF0aH0vbG9naW4taWNvbi5wbmcpO1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgjeyRpbWctcGF0aH0vbG9naW4taWNvbi1ob3Zlci5wbmcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNwYW4ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogODBweDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/shared/uicomponents/login-section-button/login-section-button.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/shared/uicomponents/login-section-button/login-section-button.component.ts ***!
  \********************************************************************************************/
/*! exports provided: LoginSectionButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginSectionButtonComponent", function() { return LoginSectionButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginSectionButtonComponent = /** @class */ (function () {
    function LoginSectionButtonComponent() {
        this.icon = '';
    }
    LoginSectionButtonComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], LoginSectionButtonComponent.prototype, "route_dest", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LoginSectionButtonComponent.prototype, "icon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
    ], LoginSectionButtonComponent.prototype, "ClickHandler", void 0);
    LoginSectionButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-section-button',
            template: __webpack_require__(/*! ./login-section-button.component.html */ "./src/app/shared/uicomponents/login-section-button/login-section-button.component.html"),
            styles: [__webpack_require__(/*! ./login-section-button.component.scss */ "./src/app/shared/uicomponents/login-section-button/login-section-button.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginSectionButtonComponent);
    return LoginSectionButtonComponent;
}());



/***/ }),

/***/ "./src/app/shared/uicomponents/search-input/search-input.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/shared/uicomponents/search-input/search-input.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"search-input-wrapper\">\n  <input class=\"search-input\" type=\"text\" />\n</div>"

/***/ }),

/***/ "./src/app/shared/uicomponents/search-input/search-input.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/shared/uicomponents/search-input/search-input.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-input-wrapper .search-input {\n  display: block;\n  height: 38px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  vertical-align: middle;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  margin-bottom: 10px;\n  font-size: 18px;\n  border-bottom-color: #ededed;\n  font-weight: 700;\n  width: 100%;\n  padding: 25px 20px 25px 56px;\n  border-style: none none solid;\n  border-bottom-width: 1px;\n  background-image: url('search-icon.png');\n  background-position: 17px 50%;\n  background-size: 26px;\n  background-repeat: no-repeat;\n  color: #464646; }\n  .search-input-wrapper .search-input:focus {\n    border-color: #3898EC;\n    outline: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3VpY29tcG9uZW50cy9zZWFyY2gtaW5wdXQvRzpcXFByb2plY3RcXE9yaGFuQ2FtLUZyb250RW5kXFx3b3JrXFxjdXp3ZWJhcHAvc3JjXFxhcHBcXHNoYXJlZFxcdWljb21wb25lbnRzXFxzZWFyY2gtaW5wdXRcXHNlYXJjaC1pbnB1dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVRLGVBQWM7RUFDZCxhQUFZO0VBQ1osZ0JBQWU7RUFDZix3QkFBdUI7RUFDdkIsdUJBQXNCO0VBQ3RCLHVCQUFzQjtFQUN0Qix1QkFBc0I7RUFDdEIsb0JBQW1CO0VBQ25CLGdCQUFlO0VBQ2YsNkJBQTRCO0VBQzVCLGlCQUFnQjtFQUNoQixZQUFXO0VBQ1gsNkJBQTRCO0VBQzVCLDhCQUE2QjtFQUM3Qix5QkFBd0I7RUFDeEIseUNBQXVCO0VBQ3ZCLDhCQUE2QjtFQUM3QixzQkFBcUI7RUFDckIsNkJBQTRCO0VBQzVCLGVBQWMsRUFLakI7RUExQkw7SUF1Qlksc0JBQXFCO0lBQ3JCLFdBQVUsRUFDYiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC91aWNvbXBvbmVudHMvc2VhcmNoLWlucHV0L3NlYXJjaC1pbnB1dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcclxuXHJcbi5zZWFyY2gtaW5wdXQtd3JhcHBlciB7XHJcbiAgICAuc2VhcmNoLWlucHV0IHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNlZGVkZWQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiAyNXB4IDIwcHggMjVweCA1NnB4O1xyXG4gICAgICAgIGJvcmRlci1zdHlsZTogbm9uZSBub25lIHNvbGlkO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoI3skaW1nLXBhdGh9L3NlYXJjaC1pY29uLnBuZyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTdweCA1MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAyNnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgY29sb3I6ICM0NjQ2NDY7XHJcbiAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzM4OThFQztcclxuICAgICAgICAgICAgb3V0bGluZTogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/shared/uicomponents/search-input/search-input.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/uicomponents/search-input/search-input.component.ts ***!
  \****************************************************************************/
/*! exports provided: SearchInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchInputComponent", function() { return SearchInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchInputComponent = /** @class */ (function () {
    function SearchInputComponent() {
    }
    SearchInputComponent.prototype.ngOnInit = function () {
    };
    SearchInputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-input',
            template: __webpack_require__(/*! ./search-input.component.html */ "./src/app/shared/uicomponents/search-input/search-input.component.html"),
            styles: [__webpack_require__(/*! ./search-input.component.scss */ "./src/app/shared/uicomponents/search-input/search-input.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SearchInputComponent);
    return SearchInputComponent;
}());



/***/ }),

/***/ "./src/app/shared/uicomponents/select-lang/select-lang.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/shared/uicomponents/select-lang/select-lang.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a href=\"#\" class=\"select-lang-button\" [ngClass]=\"[type, color]\" (click)=\"onClickHandler($event)\">\n  <div class=\"select-lang-arrow\"></div>\n  <div class=\"select-lang-main\">\n      <div class=\"select-lang-arrow-over\"></div>\n      <div class=\"select-lang-text\" *ngIf=\"selected_lang == null\">\n        {{ type == 'source' && 'Source Language' || 'Target Language'}}\n      </div>\n      <div class=\"select-lang-text\" *ngIf=\"selected_lang != null\">\n        {{ selected_lang.name }}\n      </div>\n  </div>\n</a>\n<app-info-select-modal \n  [(showable)]=\"show_modal\"\n  [ClickDoneBtn]=\"onClickModalDone.bind(this)\"\n  [ClickCancelBtn]=\"onClickModalCancel.bind(this)\"\n  >\n  <app-search-input></app-search-input>\n  <div class=\"modal-body\">\n    <a \n      href=\"#\" \n      class=\"lang-item\"\n      *ngFor=\"let lang of languages\"\n      [class.selected]=\"selected_lang != null && lang.id == selected_lang.id\"\n      [class.disabled]=\"notable_lang$ != null && lang.id == notable_lang$.id\"\n      (click)=\"onSelectLang(lang, $event)\">{{ lang.name }}</a>\n  </div>\n</app-info-select-modal>"

/***/ }),

/***/ "./src/app/shared/uicomponents/select-lang/select-lang.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/shared/uicomponents/select-lang/select-lang.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".select-lang-button {\n  display: inline-block;\n  position: relative;\n  z-index: 998;\n  width: 100%;\n  text-decoration: none; }\n  .select-lang-button .select-lang-arrow {\n    position: absolute;\n    z-index: 1;\n    width: 20px;\n    height: 20px;\n    border: 1px solid #23B7BB;\n    border-radius: 4px;\n    background-color: #E8FEFF;\n    -webkit-transform: rotate(45deg);\n    transform: rotate(45deg); }\n  .select-lang-button .select-lang-main {\n    position: relative;\n    z-index: 3;\n    height: 50px;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: 1px solid #23B7BB;\n    border-radius: 10px;\n    background-color: #E8FEFF; }\n  .select-lang-button .select-lang-main .select-lang-arrow-over {\n      position: absolute;\n      z-index: 2;\n      width: 20px;\n      height: 20px;\n      border-radius: 4px;\n      background-color: #E8FEFF;\n      -webkit-transform: rotate(45deg);\n      transform: rotate(45deg); }\n  .select-lang-button .select-lang-main .select-lang-text {\n      position: relative;\n      z-index: 4;\n      color: #23B7BB;\n      font-weight: 700; }\n  .select-lang-button.source {\n    margin-right: 10px; }\n  .select-lang-button.source .select-lang-arrow {\n      top: 9px;\n      right: -7px; }\n  .select-lang-button.source .select-lang-main .select-lang-arrow-over {\n      top: 8px;\n      right: -6px; }\n  .select-lang-button.target {\n    margin-left: 10px; }\n  .select-lang-button.target .select-lang-arrow {\n      top: 20px;\n      left: -7px; }\n  .select-lang-button.target .select-lang-main .select-lang-arrow-over {\n      top: 20px;\n      left: -6px; }\n  .select-lang-button.royal-blue .select-lang-arrow {\n    border: 1px solid #607CF1;\n    background-color: #EAEEFF; }\n  .select-lang-button.royal-blue .select-lang-main {\n    border: 1px solid #607CF1;\n    background-color: #EAEEFF; }\n  .select-lang-button.royal-blue .select-lang-main .select-lang-arrow-over {\n      background-color: #EAEEFF; }\n  .select-lang-button.royal-blue .select-lang-main .select-lang-text {\n      color: #607CF1; }\n  .select-lang-button.sea-green .select-lang-arrow {\n    border: 1px solid #23B7BB;\n    background-color: #E8FEFF; }\n  .select-lang-button.sea-green .select-lang-main {\n    border: 1px solid #23B7BB;\n    background-color: #E8FEFF; }\n  .select-lang-button.sea-green .select-lang-main .select-lang-arrow-over {\n      background-color: #E8FEFF; }\n  .select-lang-button.sea-green .select-lang-main .select-lang-text {\n      color: #23B7BB; }\n  .modal-body {\n  height: 50%;\n  overflow-y: scroll; }\n  .modal-body .lang-item {\n    display: flex;\n    max-width: 100%;\n    width: 100%;\n    height: 30px;\n    padding-left: 56px;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center;\n    background-position: -46px 50%;\n    transition: all .4s ease;\n    color: #8e8e8e;\n    font-weight: 700;\n    text-decoration: none;\n    background-size: 16px;\n    background-repeat: no-repeat;\n    background-image: url('Union-122x_1.png'); }\n  .modal-body .lang-item:hover {\n      background-position: 15px 50%;\n      color: #464646; }\n  .modal-body .lang-item:focus {\n      background-image: url('Union-122x.png');\n      background-position: 25px 50%;\n      color: #464646; }\n  .modal-body .lang-item.selected {\n      background-image: url('Union-122x.png');\n      background-position: 25px 50%;\n      color: #464646; }\n  .modal-body .lang-item.disabled {\n      background-image: none;\n      color: rgba(142, 142, 142, 0.5); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3VpY29tcG9uZW50cy9zZWxlY3QtbGFuZy9HOlxcUHJvamVjdFxcT3JoYW5DYW0tRnJvbnRFbmRcXHdvcmtcXGN1endlYmFwcC9zcmNcXGFwcFxcc2hhcmVkXFx1aWNvbXBvbmVudHNcXHNlbGVjdC1sYW5nXFxzZWxlY3QtbGFuZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL3VpY29tcG9uZW50cy9zZWxlY3QtbGFuZy9HOlxcUHJvamVjdFxcT3JoYW5DYW0tRnJvbnRFbmRcXHdvcmtcXGN1endlYmFwcC9zcmNcXGFzc2V0c1xcc2Nzc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksc0JBQXFCO0VBQ3JCLG1CQUFrQjtFQUNsQixhQUFZO0VBQ1osWUFBVztFQUdYLHNCQUFxQixFQWtIeEI7RUF6SEQ7SUFTUSxtQkFBa0I7SUFDbEIsV0FBVTtJQUNWLFlBQVc7SUFDWCxhQUFZO0lBQ1osMEJDWFc7SURZWCxtQkFBa0I7SUFDbEIsMEJDTE87SURNUCxpQ0FBZ0M7SUFFaEMseUJBQXdCLEVBQzNCO0VBbkJMO0lBc0JRLG1CQUFrQjtJQUNsQixXQUFVO0lBQ1YsYUFBWTtJQUNaLG1CQUFrQjtJQUdsQixjQUFhO0lBSWIsd0JBQXVCO0lBSXZCLG9CQUFtQjtJQUNuQiwwQkNuQ1c7SURvQ1gsb0JBQW1CO0lBQ25CLDBCQzdCTyxFRCtDVjtFQXpETDtNQXlDWSxtQkFBa0I7TUFDbEIsV0FBVTtNQUNWLFlBQVc7TUFDWCxhQUFZO01BQ1osbUJBQWtCO01BQ2xCLDBCQ3BDRztNRHFDSCxpQ0FBZ0M7TUFFaEMseUJBQXdCLEVBQzNCO0VBbERUO01Bb0RZLG1CQUFrQjtNQUNsQixXQUFVO01BQ1YsZUNwRE87TURxRFAsaUJBQWdCLEVBQ25CO0VBeERUO0lBNERRLG1CQUFrQixFQVdyQjtFQXZFTDtNQThEWSxTQUFRO01BQ1IsWUFBVyxFQUNkO0VBaEVUO01BbUVnQixTQUFRO01BQ1IsWUFBVyxFQUNkO0VBckViO0lBeUVRLGtCQUFpQixFQVdwQjtFQXBGTDtNQTJFWSxVQUFTO01BQ1QsV0FBVSxFQUNiO0VBN0VUO01BZ0ZnQixVQUFTO01BQ1QsV0FBVSxFQUNiO0VBbEZiO0lBeUZZLDBCQ3hGUTtJRHlGUiwwQkNqRk0sRURrRlQ7RUEzRlQ7SUE2RlksMEJDNUZRO0lENkZSLDBCQ3JGTSxFRDRGVDtFQXJHVDtNQWdHZ0IsMEJDdkZFLEVEd0ZMO0VBakdiO01BbUdnQixlQ2xHSSxFRG1HUDtFQXBHYjtJQTBHWSwwQkN4R087SUR5R1AsMEJDakdHLEVEa0dOO0VBNUdUO0lBOEdZLDBCQzVHTztJRDZHUCwwQkNyR0csRUQ0R047RUF0SFQ7TUFpSGdCLDBCQ3ZHRCxFRHdHRjtFQWxIYjtNQW9IZ0IsZUNsSEcsRURtSE47RUFNYjtFQUNJLFlBQVc7RUFDWCxtQkFBa0IsRUFnRHJCO0VBbEREO0lBUVEsY0FBYTtJQUNiLGdCQUFlO0lBQ2YsWUFBVztJQUNYLGFBQVk7SUFDWixtQkFBa0I7SUFDbEIsb0JBQW1CO0lBSW5CLDRCQUEyQjtJQUkzQixvQkFBbUI7SUFDbkIsK0JBQThCO0lBRTlCLHlCQUF3QjtJQUN4QixlQUFjO0lBQ2QsaUJBQWdCO0lBQ2hCLHNCQUFxQjtJQUNyQixzQkFBcUI7SUFDckIsNkJBQTRCO0lBQzVCLDBDQUF1QixFQW1CMUI7RUFqREw7TUFnQ1ksOEJBQTZCO01BQzdCLGVBQWMsRUFDakI7RUFsQ1Q7TUFvQ1ksd0NBQXVCO01BQ3ZCLDhCQUE2QjtNQUM3QixlQUFjLEVBQ2pCO0VBdkNUO01BeUNZLHdDQUF1QjtNQUN2Qiw4QkFBNkI7TUFDN0IsZUFBYyxFQUNqQjtFQTVDVDtNQThDWSx1QkFBc0I7TUFDdEIsZ0NBQTJCLEVBQzlCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3VpY29tcG9uZW50cy9zZWxlY3QtbGFuZy9zZWxlY3QtbGFuZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcclxuXHJcbi5zZWxlY3QtbGFuZy1idXR0b24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogOTk4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvLyB3aWR0aDogMTIuN3Z3O1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogJGF6dXJlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgLnNlbGVjdC1sYW5nLWFycm93IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHNlYS1ncmVlbjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGF6dXJlO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgfVxyXG5cclxuICAgIC5zZWxlY3QtbGFuZy1tYWluIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgei1pbmRleDogMztcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcclxuICAgICAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHNlYS1ncmVlbjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhenVyZTtcclxuICAgICAgICAuc2VsZWN0LWxhbmctYXJyb3ctb3ZlciB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXp1cmU7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zZWxlY3QtbGFuZy10ZXh0IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiA0O1xyXG4gICAgICAgICAgICBjb2xvcjogJHNlYS1ncmVlbjtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgICYuc291cmNlIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgLnNlbGVjdC1sYW5nLWFycm93IHtcclxuICAgICAgICAgICAgdG9wOiA5cHg7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAtN3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2VsZWN0LWxhbmctbWFpbiB7XHJcbiAgICAgICAgICAgIC5zZWxlY3QtbGFuZy1hcnJvdy1vdmVyIHtcclxuICAgICAgICAgICAgICAgIHRvcDogOHB4O1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IC02cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmLnRhcmdldCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgLnNlbGVjdC1sYW5nLWFycm93IHtcclxuICAgICAgICAgICAgdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICBsZWZ0OiAtN3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2VsZWN0LWxhbmctbWFpbiB7XHJcbiAgICAgICAgICAgIC5zZWxlY3QtbGFuZy1hcnJvdy1vdmVyIHtcclxuICAgICAgICAgICAgICAgIHRvcDogMjBweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IC02cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgICYucm95YWwtYmx1ZSB7XHJcbiAgICAgICAgLnNlbGVjdC1sYW5nLWFycm93IHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHJveWFsLWJsdWU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsYXZlbmRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNlbGVjdC1sYW5nLW1haW4ge1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkcm95YWwtYmx1ZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxhdmVuZGVyO1xyXG4gICAgICAgICAgICAuc2VsZWN0LWxhbmctYXJyb3ctb3ZlciB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGF2ZW5kZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNlbGVjdC1sYW5nLXRleHQge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRyb3lhbC1ibHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYuc2VhLWdyZWVuIHtcclxuICAgICAgICAuc2VsZWN0LWxhbmctYXJyb3cge1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkc2VhLWdyZWVuO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXp1cmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zZWxlY3QtbGFuZy1tYWluIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHNlYS1ncmVlbjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGF6dXJlO1xyXG4gICAgICAgICAgICAuc2VsZWN0LWxhbmctYXJyb3ctb3ZlciB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXp1cmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNlbGVjdC1sYW5nLXRleHQge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRzZWEtZ3JlZW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuLm1vZGFsLWJvZHkge1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAubGFuZy1pdGVtIHtcclxuICAgICAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xyXG4gICAgICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDU2cHg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAtd2Via2l0LWJveC1wYWNrOiBzdGFydDtcclxuICAgICAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAtbXMtZmxleC1wYWNrOiBzdGFydDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC00NnB4IDUwJTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuNHMgZWFzZTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjRzIGVhc2U7XHJcbiAgICAgICAgY29sb3I6ICM4ZThlOGU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCN7JGltZy1wYXRofS9Vbmlvbi0xMjJ4XzEucG5nKTtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTVweCA1MCU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNDY0NjQ2O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCN7JGltZy1wYXRofS9Vbmlvbi0xMjJ4LnBuZyk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDI1cHggNTAlO1xyXG4gICAgICAgICAgICBjb2xvcjogIzQ2NDY0NjtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5zZWxlY3RlZCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgjeyRpbWctcGF0aH0vVW5pb24tMTIyeC5wbmcpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyNXB4IDUwJTtcclxuICAgICAgICAgICAgY29sb3I6ICM0NjQ2NDY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuZGlzYWJsZWQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiYSgkY29sb3I6ICM4ZThlOGUsICRhbHBoYTogMC41KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIiRmb250LWZhbWlseTogUXVpY2tzYW5kLHNhbnMtc2VyaWY7XHJcbiRpbWctcGF0aDogXCJzcmMvYXNzZXRzL2ltZ3NcIjtcclxuXHJcbiRyb3lhbC1ibHVlOiAjNjA3Q0YxO1xyXG4kc2VhLWdyZWVuOiAjMjNCN0JCO1xyXG4kcHVycGxlOiAjOUM2QkNFO1xyXG4kbGltZS1ncmVlbjogIzQ0RDg1QztcclxuJGJsdWU6ICMwQTcyRjQ7XHJcbiRnb2xkOiAjRUJDODNDO1xyXG4kcmVkOiAjRUI1QTJEO1xyXG5cclxuJGxhdmVuZGVyOiAjRUFFRUZGO1xyXG4kYXp1cmU6ICNFOEZFRkY7XHJcbiRwaW5rLWxhdmVuZGVyOiAjRjFFNEZGO1xyXG4kaG9uZXlkZXc6ICNFNkZGREU7XHJcbiRhbGljZS1ibHVlOiAjREVFREZGO1xyXG4kY29ybnNpbGs6ICNGRkY4REM7XHJcbiRtaXN0eS1yb3NlOiAjRkZFOEUxO1xyXG5cclxuJGRpbS1ncmV5OiAjNDY0NjQ2O1xyXG4kZ3JleTogIzhFOEU4RTtcclxuJGxpZ2h0LWdyZXk6ICNENEQ0RDQ7XHJcbiRzbW9rZTogI0VERURFRDtcclxuJHdoaXRlLXNtb2tlOiAjRjhGOEY4O1xyXG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/uicomponents/select-lang/select-lang.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/uicomponents/select-lang/select-lang.component.ts ***!
  \**************************************************************************/
/*! exports provided: SelectLangComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectLangComponent", function() { return SelectLangComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_http_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/http/api.service */ "./src/app/core/http/api.service.ts");
/* harmony import */ var _root_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../root-store */ "./src/app/root-store/index.ts");





var SelectLangComponent = /** @class */ (function () {
    function SelectLangComponent(store$, apiService) {
        var _this = this;
        this.store$ = store$;
        this.apiService = apiService;
        this.type = 'source';
        this.color = 'royal-blue';
        this.show_modal = false;
        this.selected_lang = null;
        this.languages = null;
        this.notable_lang$ = null;
        this.apiService.getListOfLanguages().subscribe(function (data) {
            _this.languages = data.languages;
        }, function (error) {
            console.log(error);
        });
    }
    SelectLangComponent.prototype.ngOnInit = function () {
        localStorage.setItem('source_lang', null);
        localStorage.setItem('target_lang', null);
    };
    SelectLangComponent.prototype.onClickHandler = function (event) {
        event.preventDefault();
        this.show_modal = true;
        if (this.type == 'source') {
            this.notable_lang$ = JSON.parse(localStorage.getItem('target_lang'));
        }
        else if (this.type == 'target') {
            this.notable_lang$ = JSON.parse(localStorage.getItem('source_lang'));
        }
    };
    SelectLangComponent.prototype.onSelectLang = function (lang, event) {
        event.preventDefault();
        // Select Lang which is not same with the other lang
        if (this.notable_lang$ == null || this.notable_lang$.id != lang.id) {
            this.selected_lang = lang;
        }
    };
    SelectLangComponent.prototype.onClickModalDone = function () {
        this.show_modal = false;
        if (this.selected_lang !== null) {
            if (this.type == 'source') {
                localStorage.setItem('source_lang', JSON.stringify(this.selected_lang));
            }
            else if (this.type == 'target') {
                localStorage.setItem('target_lang', JSON.stringify(this.selected_lang));
            }
        }
        // Set Store Value
        if (this.type === 'source') {
            this.store$.dispatch(new _root_store__WEBPACK_IMPORTED_MODULE_4__["PricemodelStoreActions"].SET_FROM_LANG({
                from_language: this.selected_lang.id
            }));
        }
        else if (this.type === 'target') {
            this.store$.dispatch(new _root_store__WEBPACK_IMPORTED_MODULE_4__["PricemodelStoreActions"].SET_TO_LANG({
                to_language: this.selected_lang.id
            }));
        }
    };
    SelectLangComponent.prototype.onClickModalCancel = function () {
        this.show_modal = false;
        // Get Previous Lang
        if (this.type == 'source') {
            this.selected_lang = JSON.parse(localStorage.getItem('source_lang'));
        }
        else if (this.type == 'target') {
            this.selected_lang = JSON.parse(localStorage.getItem('target_lang'));
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SelectLangComponent.prototype, "type", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SelectLangComponent.prototype, "color", void 0);
    SelectLangComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-select-lang',
            template: __webpack_require__(/*! ./select-lang.component.html */ "./src/app/shared/uicomponents/select-lang/select-lang.component.html"),
            styles: [__webpack_require__(/*! ./select-lang.component.scss */ "./src/app/shared/uicomponents/select-lang/select-lang.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _core_http_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], SelectLangComponent);
    return SelectLangComponent;
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

module.exports = __webpack_require__(/*! G:\Project\OrhanCam-FrontEnd\work\cuzwebapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map