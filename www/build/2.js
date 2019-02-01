webpackJsonp([2],{

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPackagePageModule", function() { return SignUpPackagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_up_package__ = __webpack_require__(304);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignUpPackagePageModule = /** @class */ (function () {
    function SignUpPackagePageModule() {
    }
    SignUpPackagePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sign_up_package__["a" /* SignUpPackagePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sign_up_package__["a" /* SignUpPackagePage */]),
            ],
        })
    ], SignUpPackagePageModule);
    return SignUpPackagePageModule;
}());

//# sourceMappingURL=sign-up-package.module.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPackagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SignUpPackagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignUpPackagePage = /** @class */ (function () {
    function SignUpPackagePage(mDomSanitizer, navCtrl, navParams) {
        this.mDomSanitizer = mDomSanitizer;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.url = "#";
        if (this.navParams.data["url"]) {
            console.log(this.navParams.get("url"));
            this.url = this.mDomSanitizer.bypassSecurityTrustResourceUrl(this.navParams.get("url"));
        }
    }
    SignUpPackagePage.prototype.ionViewDidLoad = function () {
    };
    SignUpPackagePage.prototype.closeFrame = function () {
        this.navCtrl.pop();
    };
    SignUpPackagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sign-up-package',template:/*ion-inline-start:"/Users/admin/workspace/ionic/viettel-4g-ads/src/pages/sign-up-package/sign-up-package.html"*/'<!--\n  Generated template for the SignUpPackagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding>\n  <div class="backdrop a1-absolute" navPop></div>\n  <div class="white-bg iframe-container a1-relative a1-z-10">\n    <div class="header-popup a1-relative" text-center padding>\n        Mã xác thực từ Viettel Telecom\n        <div class="a1-absolute left-right">\n          <button ion-button clear icon-only class="white-color" navPop>\n            <ion-icon name="ios-close-circle-outline"></ion-icon>\n          </button>\n        </div>\n    </div>\n    <iframe [src]="url" ></iframe>\n\n    <div class="footer-popup" padding text-center>\n        Quý khách vui lòng nhập số Điện Thoại và ấn Xác Nhận, vui lòng bấm 1 để đồng ý đăng ký, bấm 0 để huỷ.\n        <br>\n        Xin chân thành cảm ơn Quý Khách.\n    </div>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/admin/workspace/ionic/viettel-4g-ads/src/pages/sign-up-package/sign-up-package.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], SignUpPackagePage);
    return SignUpPackagePage;
}());

//# sourceMappingURL=sign-up-package.js.map

/***/ })

});
//# sourceMappingURL=2.js.map