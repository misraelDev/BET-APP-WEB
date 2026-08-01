// Angular import
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const _c0 = () => ["/"];
const _c1 = () => ["/login"];
function AuthRegisterComponent_For_52_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 29)(1, "div", 39)(2, "button", 40);
    i0.ɵɵelement(3, "img", 41);
    i0.ɵɵelementStart(4, "span", 42);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("src", i0.ɵɵinterpolate(item_r1.image), i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r1.name);
} }
export class AuthRegisterComponent {
    constructor() {
        // public method
        this.SignUpOptions = [
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
    static { this.ɵfac = function AuthRegisterComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AuthRegisterComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AuthRegisterComponent, selectors: [["app-auth-register"]], decls: 70, vars: 4, consts: [[1, "auth-main"], [1, "auth-wrapper", "v3"], [1, "auth-form"], [1, "auth-header"], [3, "routerLink"], ["src", "assets/images/logo-dark.svg", "alt", "logo img"], [1, "card", "my-5"], [1, "card-body"], [1, "d-flex", "justify-content-between", "align-items-end", "mb-4"], [1, "mb-0"], [1, "link-primary", 3, "routerLink"], [1, "row"], [1, "col-md-6"], [1, "form-group", "mb-3"], ["for", "firstName", 1, "form-label"], ["type", "text", "id", "firstName", "placeholder", "First Name", 1, "form-control"], ["for", "lastName", 1, "form-label"], ["type", "text", "id", "lastName", "placeholder", "Last Name", 1, "form-control"], ["for", "company", 1, "form-label"], ["type", "text", "id", "company", "placeholder", "Company", 1, "form-control"], ["for", "emailAddress", 1, "form-label"], ["type", "email", "id", "emailAddress", "placeholder", "Email Address", 1, "form-control"], ["for", "password", 1, "form-label"], ["type", "password", "id", "password", "placeholder", "Password", 1, "form-control"], [1, "mt-4", "text-sm", "text-muted"], ["type", "button", 1, "btn", "btn-link", "text-primary", "p-0", "text-decoration-none", "align-baseline", 2, "font-size", "inherit", "font-weight", "inherit", "line-height", "inherit"], [1, "d-grid", "mt-3"], ["type", "button", 1, "btn", "btn-primary"], [1, "saprator", "mt-3"], [1, "col-4"], [1, "auth-footer", "row"], [1, "col", "my-1"], [1, "m-0"], ["href", "https://codedthemes.com/", "target", "_blank"], [1, "col-auto", "my-1"], [1, "list-inline", "footer-link", "mb-0"], [1, "list-inline-item"], ["href", "https://codedthemes.com/privacy-policy/", "target", "_blank"], ["href", "https://codedthemes.support-hub.io/", "target", "_blank"], [1, "d-grid"], ["type", "button", 1, "btn", "mt-2", "btn-light-primary", "bg-light", "text-muted"], ["alt", "google img", 3, "src"], [1, "d-none", "d-sm-inline-block"]], template: function AuthRegisterComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
            i0.ɵɵelement(5, "img", 5);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "h3", 9)(10, "b");
            i0.ɵɵtext(11, "Sign up");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(12, "a", 10);
            i0.ɵɵtext(13, "Already have an account?");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(14, "div", 11)(15, "div", 12)(16, "div", 13)(17, "label", 14);
            i0.ɵɵtext(18, "First Name*");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(19, "input", 15);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(20, "div", 12)(21, "div", 13)(22, "label", 16);
            i0.ɵɵtext(23, "Last Name*");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(24, "input", 17);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(25, "div", 13)(26, "label", 18);
            i0.ɵɵtext(27, "Company");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(28, "input", 19);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "div", 13)(30, "label", 20);
            i0.ɵɵtext(31, "Email Address*");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(32, "input", 21);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "div", 13)(34, "label", 22);
            i0.ɵɵtext(35, "Password");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(36, "input", 23);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(37, "p", 24);
            i0.ɵɵtext(38, " By Signing up, you agree to our ");
            i0.ɵɵelementStart(39, "button", 25);
            i0.ɵɵtext(40, "Terms of Service");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(41, " and ");
            i0.ɵɵelementStart(42, "button", 25);
            i0.ɵɵtext(43, "Privacy Policy");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(44, "div", 26)(45, "button", 27);
            i0.ɵɵtext(46, "Create Account");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(47, "div", 28)(48, "span");
            i0.ɵɵtext(49, "Sign up with");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(50, "div", 11);
            i0.ɵɵrepeaterCreate(51, AuthRegisterComponent_For_52_Template, 6, 3, "div", 29, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(53, "div", 30)(54, "div", 31)(55, "p", 32);
            i0.ɵɵtext(56, " Copyright \u00A9 ");
            i0.ɵɵelementStart(57, "a", 33);
            i0.ɵɵtext(58, "CodedThemes");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(59, "div", 34)(60, "ul", 35)(61, "li", 36)(62, "a", 33);
            i0.ɵɵtext(63, "Home");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(64, "li", 36)(65, "a", 37);
            i0.ɵɵtext(66, "Privacy Policy");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(67, "li", 36)(68, "a", 38);
            i0.ɵɵtext(69, "Contact us");
            i0.ɵɵelementEnd()()()()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(2, _c0));
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(3, _c1));
            i0.ɵɵadvance(39);
            i0.ɵɵrepeater(ctx.SignUpOptions);
        } }, dependencies: [RouterModule, i1.RouterLink], styles: ["@import '../../../../../scss/settings/color-variables.scss';\n\n.auth-main[_ngcontent-%COMP%] {\n  position: relative;\n\n  .auth-wrapper {\n    height: 100%;\n    width: 100%;\n    min-height: 100vh;\n\n    .saprator {\n      position: relative;\n      display: flex;\n      align-self: center;\n      justify-content: center;\n\n      &:after {\n        content: '';\n        position: absolute;\n        top: 50%;\n        left: 0;\n        width: 100%;\n        height: 1px;\n        background: var(--bs-border-color);\n        z-index: 1;\n      }\n\n      span {\n        font-size: 0.875rem;\n        padding: 8px 24px;\n        background: $white;\n        z-index: 5;\n        text-transform: capitalize;\n        color: $gray-800;\n        font-weight: 500;\n      }\n    }\n\n    &.v3 {\n      display: flex;\n      align-items: center;\n\n      .auth-form {\n        flex-direction: column;\n        background: url('../../../../../assets/images/authentication/img-auth-bg.svg');\n        min-height: 100vh;\n        padding: 24px;\n        background-repeat: no-repeat;\n        background-size: auto 82%;\n        background-position: left bottom;\n        position: relative;\n        justify-content: space-between;\n        > * {\n          position: relative;\n          z-index: 5;\n        }\n        &:after {\n          content: '';\n          position: absolute;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          background: rgba($white, 0.2);\n          backdrop-filter: blur(16px);\n        }\n      }\n    }\n    .auth-form {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      flex-grow: 1;\n\n      .card {\n        width: 100%;\n        max-width: 495px;\n        box-shadow: none;\n      }\n\n      img + span {\n        padding-left: 15px;\n      }\n\n      h5 {\n        span {\n          text-decoration: underline;\n        }\n      }\n    }\n    .auth-footer,\n    .auth-header {\n      width: 100%;\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n    }\n  }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthRegisterComponent, [{
        type: Component,
        args: [{ selector: 'app-auth-register', imports: [RouterModule], template: "<div class=\"auth-main\">\n  <div class=\"auth-wrapper v3\">\n    <div class=\"auth-form\">\n      <div class=\"auth-header\">\n        <a [routerLink]=\"['/']\"><img src=\"assets/images/logo-dark.svg\" alt=\"logo img\" /></a>\n      </div>\n      <div class=\"card my-5\">\n        <div class=\"card-body\">\n          <div class=\"d-flex justify-content-between align-items-end mb-4\">\n            <h3 class=\"mb-0\"><b>Sign up</b></h3>\n            <a [routerLink]=\"['/login']\" class=\"link-primary\">Already have an account?</a>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"form-group mb-3\">\n                <label class=\"form-label\" for=\"firstName\">First Name*</label>\n                <input type=\"text\" class=\"form-control\" id=\"firstName\" placeholder=\"First Name\" />\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group mb-3\">\n                <label class=\"form-label\" for=\"lastName\">Last Name*</label>\n                <input type=\"text\" class=\"form-control\" id=\"lastName\" placeholder=\"Last Name\" />\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group mb-3\">\n            <label class=\"form-label\" for=\"company\">Company</label>\n            <input type=\"text\" class=\"form-control\" id=\"company\" placeholder=\"Company\" />\n          </div>\n          <div class=\"form-group mb-3\">\n            <label class=\"form-label\" for=\"emailAddress\">Email Address*</label>\n            <input type=\"email\" class=\"form-control\" id=\"emailAddress\" placeholder=\"Email Address\" />\n          </div>\n          <div class=\"form-group mb-3\">\n            <label class=\"form-label\" for=\"password\">Password</label>\n            <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Password\" />\n          </div>\n          <p class=\"mt-4 text-sm text-muted\">\n            By Signing up, you agree to our\n            <button type=\"button\" class=\"btn btn-link text-primary p-0 text-decoration-none align-baseline\" style=\"font-size: inherit; font-weight: inherit; line-height: inherit;\">Terms of Service</button>\n            and\n            <button type=\"button\" class=\"btn btn-link text-primary p-0 text-decoration-none align-baseline\" style=\"font-size: inherit; font-weight: inherit; line-height: inherit;\">Privacy Policy</button>\n          </p>\n          <div class=\"d-grid mt-3\">\n            <button type=\"button\" class=\"btn btn-primary\">Create Account</button>\n          </div>\n          <div class=\"saprator mt-3\">\n            <span>Sign up with</span>\n          </div>\n          <div class=\"row\">\n            @for (item of SignUpOptions; track item) {\n              <div class=\"col-4\">\n                <div class=\"d-grid\">\n                  <button type=\"button\" class=\"btn mt-2 btn-light-primary bg-light text-muted\">\n                    <img src=\"{{ item.image }}\" alt=\"google img\" />\n                    <span class=\"d-none d-sm-inline-block\">{{ item.name }}</span>\n                  </button>\n                </div>\n              </div>\n            }\n          </div>\n        </div>\n      </div>\n      <div class=\"auth-footer row\">\n        <!-- <div class=\"\"> -->\n        <div class=\"col my-1\">\n          <p class=\"m-0\">\n            Copyright \u00A9\n            <a href=\"https://codedthemes.com/\" target=\"_blank\">CodedThemes</a>\n          </p>\n        </div>\n        <div class=\"col-auto my-1\">\n          <ul class=\"list-inline footer-link mb-0\">\n            <li class=\"list-inline-item\"><a href=\"https://codedthemes.com/\" target=\"_blank\">Home</a></li>\n            <li class=\"list-inline-item\"><a href=\"https://codedthemes.com/privacy-policy/\" target=\"_blank\">Privacy Policy</a></li>\n            <li class=\"list-inline-item\"><a href=\"https://codedthemes.support-hub.io/\" target=\"_blank\">Contact us</a></li>\n          </ul>\n        </div>\n        <!-- </div> -->\n      </div>\n    </div>\n  </div>\n</div>\n", styles: ["@import '../../../../../scss/settings/color-variables.scss';\n\n.auth-main {\n  position: relative;\n\n  .auth-wrapper {\n    height: 100%;\n    width: 100%;\n    min-height: 100vh;\n\n    .saprator {\n      position: relative;\n      display: flex;\n      align-self: center;\n      justify-content: center;\n\n      &:after {\n        content: '';\n        position: absolute;\n        top: 50%;\n        left: 0;\n        width: 100%;\n        height: 1px;\n        background: var(--bs-border-color);\n        z-index: 1;\n      }\n\n      span {\n        font-size: 0.875rem;\n        padding: 8px 24px;\n        background: $white;\n        z-index: 5;\n        text-transform: capitalize;\n        color: $gray-800;\n        font-weight: 500;\n      }\n    }\n\n    &.v3 {\n      display: flex;\n      align-items: center;\n\n      .auth-form {\n        flex-direction: column;\n        background: url('../../../../../assets/images/authentication/img-auth-bg.svg');\n        min-height: 100vh;\n        padding: 24px;\n        background-repeat: no-repeat;\n        background-size: auto 82%;\n        background-position: left bottom;\n        position: relative;\n        justify-content: space-between;\n        > * {\n          position: relative;\n          z-index: 5;\n        }\n        &:after {\n          content: '';\n          position: absolute;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          background: rgba($white, 0.2);\n          backdrop-filter: blur(16px);\n        }\n      }\n    }\n    .auth-form {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      flex-grow: 1;\n\n      .card {\n        width: 100%;\n        max-width: 495px;\n        box-shadow: none;\n      }\n\n      img + span {\n        padding-left: 15px;\n      }\n\n      h5 {\n        span {\n          text-decoration: underline;\n        }\n      }\n    }\n    .auth-footer,\n    .auth-header {\n      width: 100%;\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n    }\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AuthRegisterComponent, { className: "AuthRegisterComponent", filePath: "src/app/demo/pages/authentication/auth-register/auth-register.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=auth-register.component.js.map