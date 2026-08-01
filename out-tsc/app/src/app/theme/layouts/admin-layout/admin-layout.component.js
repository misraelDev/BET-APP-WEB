// Angular import
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// Project import
import { SharedModule } from '../../shared/shared.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BreadcrumbComponent } from '../../shared/components/breadcrumb/breadcrumb.component';
import { LayoutStateService } from '../../shared/service/layout-state.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/router";
const _c0 = (a0, a1) => ({ "navbar-collapsed": a0, "mob-open": a1 });
export class AdminLayout {
    // Constructor
    constructor() {
        this.layoutState = inject(LayoutStateService);
        // public props
        this.navCollapsed = false;
        this.windowWidth = window.innerWidth;
    }
    get navCollapsedMob() {
        return this.layoutState.navCollapsedMob();
    }
    // public method
    navMobClick() {
        this.layoutState.toggleNavCollapsedMob();
        if (document.querySelector('app-navigation.pc-sidebar')?.classList.contains('navbar-collapsed')) {
            document.querySelector('app-navigation.pc-sidebar')?.classList.remove('navbar-collapsed');
        }
    }
    handleKeyDown(event) {
        if (event.key === 'Escape') {
            this.closeMenu();
        }
    }
    closeMenu() {
        this.layoutState.closeNavCollapsedMob();
    }
    handleNavCollapse() {
        this.navCollapsed = !this.navCollapsed;
    }
    static { this.ɵfac = function AdminLayout_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AdminLayout)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdminLayout, selectors: [["app-admin"]], decls: 11, vars: 4, consts: [[1, "pc-sidebar", 3, "NavCollapse", "ngClass"], [3, "NavCollapsedMob", "NavCollapse"], [1, "pc-container"], [1, "coded-wrapper"], [1, "coded-content"], [1, "coded-inner-content"], [1, "main-body"], [1, "page-wrapper"], ["tabindex", "0", 1, "pc-menu-overlay", 3, "click", "keydown"]], template: function AdminLayout_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "app-navigation", 0);
            i0.ɵɵlistener("NavCollapse", function AdminLayout_Template_app_navigation_NavCollapse_0_listener() { return ctx.closeMenu(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(1, "app-nav-bar", 1);
            i0.ɵɵlistener("NavCollapsedMob", function AdminLayout_Template_app_nav_bar_NavCollapsedMob_1_listener() { return ctx.navMobClick(); })("NavCollapse", function AdminLayout_Template_app_nav_bar_NavCollapse_1_listener() { return ctx.handleNavCollapse(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
            i0.ɵɵelement(6, "app-breadcrumb");
            i0.ɵɵelementStart(7, "div", 6)(8, "div", 7);
            i0.ɵɵelement(9, "router-outlet");
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(10, "div", 8);
            i0.ɵɵlistener("click", function AdminLayout_Template_div_click_10_listener() { return ctx.closeMenu(); })("keydown", function AdminLayout_Template_div_keydown_10_listener($event) { return ctx.handleKeyDown($event); });
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(1, _c0, ctx.navCollapsed, ctx.navCollapsedMob));
        } }, dependencies: [CommonModule, i1.NgClass, SharedModule, NavigationComponent, NavBarComponent, RouterModule, i2.RouterOutlet, BreadcrumbComponent], styles: ["// This file is intentionally left empty to allow customers to add custom CSS if needed."] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminLayout, [{
        type: Component,
        args: [{ selector: 'app-admin', imports: [CommonModule, SharedModule, NavigationComponent, NavBarComponent, RouterModule, BreadcrumbComponent], template: "<app-navigation class=\"pc-sidebar\" [ngClass]=\"{\r\n    'navbar-collapsed': navCollapsed,\r\n    'mob-open': navCollapsedMob\r\n  }\" (NavCollapse)=\"closeMenu()\" />\r\n<app-nav-bar (NavCollapsedMob)=\"navMobClick()\" (NavCollapse)=\"handleNavCollapse()\" />\r\n<div class=\"pc-container\">\r\n  <div class=\"coded-wrapper\">\r\n    <div class=\"coded-content\">\r\n      <div class=\"coded-inner-content\">\r\n        <app-breadcrumb />\r\n        <div class=\"main-body\">\r\n          <div class=\"page-wrapper\">\r\n            <router-outlet />\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"pc-menu-overlay\" (click)=\"closeMenu()\" (keydown)=\"handleKeyDown($event)\" tabindex=\"0\"></div>\r\n</div>\n", styles: ["// This file is intentionally left empty to allow customers to add custom CSS if needed.\n"] }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AdminLayout, { className: "AdminLayout", filePath: "src/app/theme/layouts/admin-layout/admin-layout.component.ts", lineNumber: 19 }); })();
//# sourceMappingURL=admin-layout.component.js.map