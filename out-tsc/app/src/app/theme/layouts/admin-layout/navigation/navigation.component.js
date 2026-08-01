// Angular import
import { Component, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NavContentComponent } from './nav-content/nav-content.component';
import * as i0 from "@angular/core";
const _c0 = () => ["/dashboard/default"];
export class NavigationComponent {
    // Constructor
    constructor() {
        // media 1025 After Use Menu Open
        this.NavCollapsedMob = output();
        this.SubmenuCollapse = output();
        this.windowWidth = window.innerWidth;
        this.navCollapsedMob = false;
    }
    // public method
    navCollapseMob() {
        if (this.windowWidth < 1025) {
            this.NavCollapsedMob.emit();
        }
    }
    navSubmenuCollapse() {
        document.querySelector('app-navigation.pc-sidebar')?.classList.add('coded-trigger');
    }
    static { this.ɵfac = function NavigationComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || NavigationComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NavigationComponent, selectors: [["app-navigation"]], outputs: { NavCollapsedMob: "NavCollapsedMob", SubmenuCollapse: "SubmenuCollapse" }, decls: 7, vars: 2, consts: [[1, "navbar-wrapper"], [1, "m-header"], [1, "b-brand", 3, "routerLink"], ["src", "assets/images/logo-dark.svg", "alt", "theme-logo", 1, "logo", "logo-dark", "logo-lg"], ["src", "assets/images/logo-white.svg", "alt", "", 1, "logo", "logo-light", "logo-lg"], [1, "scroll-div", "w-100", "compact", 3, "NavCollapsedMob", "SubmenuCollapse"]], template: function NavigationComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "nav")(1, "div", 0)(2, "div", 1)(3, "a", 2);
            i0.ɵɵelement(4, "img", 3)(5, "img", 4);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(6, "app-nav-content", 5);
            i0.ɵɵlistener("NavCollapsedMob", function NavigationComponent_Template_app_nav_content_NavCollapsedMob_6_listener() { return ctx.navCollapseMob(); })("SubmenuCollapse", function NavigationComponent_Template_app_nav_content_SubmenuCollapse_6_listener() { return ctx.navSubmenuCollapse(); });
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(1, _c0));
        } }, dependencies: [SharedModule, NavContentComponent, CommonModule, RouterLink], styles: ["// This file is intentionally left empty to allow customers to add custom CSS if needed."] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NavigationComponent, [{
        type: Component,
        args: [{ selector: 'app-navigation', imports: [SharedModule, NavContentComponent, CommonModule, RouterLink], template: "<nav>\n  <div class=\"navbar-wrapper\">\n    <div class=\"m-header\">\n      <a [routerLink]=\"['/dashboard/default']\" class=\"b-brand\">\n        <img src=\"assets/images/logo-dark.svg\" alt=\"theme-logo\" class=\"logo logo-dark logo-lg\" />\n        <img src=\"assets/images/logo-white.svg\" alt=\"\" class=\"logo logo-light logo-lg\" />\n      </a>\n    </div>\n    <app-nav-content\n      (NavCollapsedMob)=\"navCollapseMob()\"\n      (SubmenuCollapse)=\"navSubmenuCollapse()\"\n      class=\"scroll-div w-100 compact\"\n    />\n  </div>\n</nav>\n", styles: ["// This file is intentionally left empty to allow customers to add custom CSS if needed.\n"] }]
    }], () => [], { NavCollapsedMob: [{ type: i0.Output, args: ["NavCollapsedMob"] }], SubmenuCollapse: [{ type: i0.Output, args: ["SubmenuCollapse"] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(NavigationComponent, { className: "NavigationComponent", filePath: "src/app/theme/layouts/admin-layout/navigation/navigation.component.ts", lineNumber: 16 }); })();
//# sourceMappingURL=navigation.component.js.map