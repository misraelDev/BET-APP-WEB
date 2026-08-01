// project import
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const _c0 = () => ["/"];
const _c1 = () => ["/register"];
function AuthLoginComponent_For_38_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 26)(1, "div", 36)(2, "button", 37);
    i0.ɵɵelement(3, "img", 38);
    i0.ɵɵelementStart(4, "span", 39);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("src", i0.ɵɵinterpolate(item_r1.image), i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r1.name);
} }
export class AuthLoginComponent {
    constructor() {
        // public method
        this.SignInOptions = [
            {
                image: 'assets/images/authentication/google.svg',
                name: 'Google'
            },
            {
                image: 'assets/images/authentication/twitter.svg',
                name: 'Twitter'
            },
            {
                image: 'assets/images/authentication/facebook.svg',
                name: 'Facebook'
            }
        ];
    }
    static { this.ɵfac = function AuthLoginComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AuthLoginComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AuthLoginComponent, selectors: [["app-auth-login"]], decls: 56, vars: 4, consts: [[1, "auth-main"], [1, "auth-wrapper", "v3"], [1, "auth-form"], [1, "auth-header"], [3, "routerLink"], ["src", "assets/images/logo-dark.svg", "alt", "logo"], [1, "card", "my-5"], [1, "card-body"], [1, "d-flex", "justify-content-between", "align-items-end", "mb-4"], [1, "mb-0"], [1, "link-primary", 3, "routerLink"], [1, "form-group", "mb-3"], ["for", "email", 1, "form-label"], ["type", "email", "id", "email", "placeholder", "Email Address", "value", "info@codedthemes.com", 1, "form-control"], ["for", "password", 1, "form-label"], ["type", "password", "id", "password", "placeholder", "Password", "value", "123456789", 1, "form-control"], [1, "d-flex", "mt-1", "justify-content-between"], [1, "form-check"], ["type", "checkbox", "id", "customCheckc1", "checked", "", 1, "form-check-input", "input-primary"], ["for", "customCheckc1", 1, "form-check-label", "text-muted"], [1, "text-secondary", "f-w-400"], ["type", "button", 1, "btn", "btn-link", "text-secondary", "p-0", "text-decoration-none", 2, "font-size", "inherit", "font-weight", "inherit", "line-height", "inherit", "vertical-align", "baseline"], [1, "d-grid", "mt-4"], ["type", "button", 1, "btn", "btn-primary"], [1, "saprator", "mt-3"], [1, "row"], [1, "col-4"], [1, "auth-footer", "row"], [1, "col", "my-1"], [1, "m-0"], ["href", "https://codedthemes.com/", "target", "_blank"], [1, "col-auto", "my-1"], [1, "list-inline", "footer-link", "mb-0"], [1, "list-inline-item"], ["href", "https://codedthemes.com/privacy-policy/", "target", "_blank"], ["href", "https://codedthemes.support-hub.io/", "target", "_blank"], [1, "d-grid"], ["type", "button", 1, "btn", "mt-2", "btn-light-primary", "bg-light", "text-muted"], ["alt", "google img", 3, "src"], [1, "d-none", "d-sm-inline-block"]], template: function AuthLoginComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
            i0.ɵɵelement(5, "img", 5);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "h3", 9)(10, "b");
            i0.ɵɵtext(11, "Login");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(12, "a", 10);
            i0.ɵɵtext(13, "Don't have an account?");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(14, "div", 11)(15, "label", 12);
            i0.ɵɵtext(16, "Email Address");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(17, "input", 13);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "div", 11)(19, "label", 14);
            i0.ɵɵtext(20, "Password");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(21, "input", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "div", 16)(23, "div", 17);
            i0.ɵɵelement(24, "input", 18);
            i0.ɵɵelementStart(25, "label", 19);
            i0.ɵɵtext(26, "Keep me sign in");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(27, "h5", 20)(28, "button", 21);
            i0.ɵɵtext(29, "Forgot Password?");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(30, "div", 22)(31, "button", 23);
            i0.ɵɵtext(32, "Login");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(33, "div", 24)(34, "span");
            i0.ɵɵtext(35, "Login with");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(36, "div", 25);
            i0.ɵɵrepeaterCreate(37, AuthLoginComponent_For_38_Template, 6, 3, "div", 26, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(39, "div", 27)(40, "div", 28)(41, "p", 29);
            i0.ɵɵtext(42, " Copyright \u00A9 ");
            i0.ɵɵelementStart(43, "a", 30);
            i0.ɵɵtext(44, "CodedThemes");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(45, "div", 31)(46, "ul", 32)(47, "li", 33)(48, "a", 30);
            i0.ɵɵtext(49, "Home");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(50, "li", 33)(51, "a", 34);
            i0.ɵɵtext(52, "Privacy Policy");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(53, "li", 33)(54, "a", 35);
            i0.ɵɵtext(55, "Contact us");
            i0.ɵɵelementEnd()()()()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(2, _c0));
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(3, _c1));
            i0.ɵɵadvance(25);
            i0.ɵɵrepeater(ctx.SignInOptions);
        } }, dependencies: [RouterModule, i1.RouterLink], styles: ["@import '../../../../../scss/settings/color-variables.scss';\n\n.auth-main[_ngcontent-%COMP%] {\n  position: relative;\n\n  .auth-wrapper {\n    height: 100%;\n    width: 100%;\n    min-height: 100vh;\n\n    .saprator {\n      position: relative;\n      display: flex;\n      align-self: center;\n      justify-content: center;\n\n      &:after {\n        content: '';\n        position: absolute;\n        top: 50%;\n        left: 0;\n        width: 100%;\n        height: 1px;\n        background: var(--bs-border-color);\n        z-index: 1;\n      }\n\n      span {\n        font-size: 0.875rem;\n        padding: 8px 24px;\n        background: $white;\n        z-index: 5;\n        text-transform: capitalize;\n        color: $gray-800;\n        font-weight: 500;\n      }\n    }\n\n    &.v3 {\n      display: flex;\n      align-items: center;\n\n      .auth-form {\n        flex-direction: column;\n        background: url('../../../../../assets/images/authentication/img-auth-bg.svg');\n        min-height: 100vh;\n        padding: 24px;\n        background-repeat: no-repeat;\n        background-size: auto 82%;\n        background-position: left bottom;\n        position: relative;\n        justify-content: space-between;\n        > * {\n          position: relative;\n          z-index: 5;\n        }\n        &:after {\n          content: '';\n          position: absolute;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          background: rgba($white, 0.2);\n          backdrop-filter: blur(16px);\n        }\n      }\n    }\n    .auth-form {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      flex-grow: 1;\n\n      .card {\n        width: 100%;\n        max-width: 495px;\n        box-shadow: none;\n      }\n\n      img + span {\n        padding-left: 15px;\n      }\n\n      h5 {\n        span {\n          text-decoration: underline;\n        }\n      }\n    }\n    .auth-footer,\n    .auth-header {\n      width: 100%;\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n    }\n  }\n}\n\nform[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0px -12px 0px 0px;\n  cursor: pointer;\n  padding: 12px;\n  font-size: 18px;\n  position: absolute;\n  top: 203px;\n  right: 45px;\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthLoginComponent, [{
        type: Component,
        args: [{ selector: 'app-auth-login', imports: [RouterModule], template: "<div class=\"auth-main\">\n  <div class=\"auth-wrapper v3\">\n    <div class=\"auth-form\">\n      <div class=\"auth-header\">\n        <a [routerLink]=\"['/']\"><img src=\"assets/images/logo-dark.svg\" alt=\"logo\" /></a>\n      </div>\n      <div class=\"card my-5\">\n        <div class=\"card-body\">\n          <div class=\"d-flex justify-content-between align-items-end mb-4\">\n            <h3 class=\"mb-0\"><b>Login</b></h3>\n            <a [routerLink]=\"['/register']\" class=\"link-primary\">Don't have an account?</a>\n          </div>\n          <div class=\"form-group mb-3\">\n            <label class=\"form-label\" for=\"email\">Email Address</label>\n            <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Email Address\" value=\"info@codedthemes.com\" />\n          </div>\n          <div class=\"form-group mb-3\">\n            <label class=\"form-label\" for=\"password\">Password</label>\n            <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Password\" value=\"123456789\" />\n          </div>\n          <div class=\"d-flex mt-1 justify-content-between\">\n            <div class=\"form-check\">\n              <input class=\"form-check-input input-primary\" type=\"checkbox\" id=\"customCheckc1\" checked=\"\" />\n              <label class=\"form-check-label text-muted\" for=\"customCheckc1\">Keep me sign in</label>\n            </div>\n            <h5 class=\"text-secondary f-w-400\"><button type=\"button\" class=\"btn btn-link text-secondary p-0 text-decoration-none\" style=\"font-size: inherit; font-weight: inherit; line-height: inherit; vertical-align: baseline;\">Forgot Password?</button></h5>\n          </div>\n          <div class=\"d-grid mt-4\">\n            <button type=\"button\" class=\"btn btn-primary\">Login</button>\n          </div>\n          <div class=\"saprator mt-3\">\n            <span>Login with</span>\n          </div>\n          <div class=\"row\">\n            @for (item of SignInOptions; track item) {\n              <div class=\"col-4\">\n                <div class=\"d-grid\">\n                  <button type=\"button\" class=\"btn mt-2 btn-light-primary bg-light text-muted\">\n                    <img src=\"{{ item.image }}\" alt=\"google img\" />\n                    <span class=\"d-none d-sm-inline-block\">{{ item.name }}</span>\n                  </button>\n                </div>\n              </div>\n            }\n          </div>\n        </div>\n      </div>\n      <div class=\"auth-footer row\">\n        <div class=\"col my-1\">\n          <p class=\"m-0\">\n            Copyright \u00A9\n            <a href=\"https://codedthemes.com/\" target=\"_blank\">CodedThemes</a>\n          </p>\n        </div>\n        <div class=\"col-auto my-1\">\n          <ul class=\"list-inline footer-link mb-0\">\n            <li class=\"list-inline-item\"><a href=\"https://codedthemes.com/\" target=\"_blank\">Home</a></li>\n            <li class=\"list-inline-item\"><a href=\"https://codedthemes.com/privacy-policy/\" target=\"_blank\">Privacy Policy</a></li>\n            <li class=\"list-inline-item\"><a href=\"https://codedthemes.support-hub.io/\" target=\"_blank\">Contact us</a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n", styles: ["@import '../../../../../scss/settings/color-variables.scss';\n\n.auth-main {\n  position: relative;\n\n  .auth-wrapper {\n    height: 100%;\n    width: 100%;\n    min-height: 100vh;\n\n    .saprator {\n      position: relative;\n      display: flex;\n      align-self: center;\n      justify-content: center;\n\n      &:after {\n        content: '';\n        position: absolute;\n        top: 50%;\n        left: 0;\n        width: 100%;\n        height: 1px;\n        background: var(--bs-border-color);\n        z-index: 1;\n      }\n\n      span {\n        font-size: 0.875rem;\n        padding: 8px 24px;\n        background: $white;\n        z-index: 5;\n        text-transform: capitalize;\n        color: $gray-800;\n        font-weight: 500;\n      }\n    }\n\n    &.v3 {\n      display: flex;\n      align-items: center;\n\n      .auth-form {\n        flex-direction: column;\n        background: url('../../../../../assets/images/authentication/img-auth-bg.svg');\n        min-height: 100vh;\n        padding: 24px;\n        background-repeat: no-repeat;\n        background-size: auto 82%;\n        background-position: left bottom;\n        position: relative;\n        justify-content: space-between;\n        > * {\n          position: relative;\n          z-index: 5;\n        }\n        &:after {\n          content: '';\n          position: absolute;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          background: rgba($white, 0.2);\n          backdrop-filter: blur(16px);\n        }\n      }\n    }\n    .auth-form {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      flex-grow: 1;\n\n      .card {\n        width: 100%;\n        max-width: 495px;\n        box-shadow: none;\n      }\n\n      img + span {\n        padding-left: 15px;\n      }\n\n      h5 {\n        span {\n          text-decoration: underline;\n        }\n      }\n    }\n    .auth-footer,\n    .auth-header {\n      width: 100%;\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n    }\n  }\n}\n\nform i {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0px -12px 0px 0px;\n  cursor: pointer;\n  padding: 12px;\n  font-size: 18px;\n  position: absolute;\n  top: 203px;\n  right: 45px;\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AuthLoginComponent, { className: "AuthLoginComponent", filePath: "src/app/demo/pages/authentication/auth-login/auth-login.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=auth-login.component.js.map