// angular import
import { Component, HostListener, output } from '@angular/core';
// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NavLeftComponent } from './nav-left/nav-left.component';
import { NavRightComponent } from './nav-right/nav-right.component';
import * as i0 from "@angular/core";
export class NavBarComponent {
    // Constructor
    constructor() {
        // public props
        this.NavCollapse = output();
        this.NavCollapsedMob = output();
        this.navCollapsed = false;
        this.navCollapsedMob = false;
        this.windowWidth = window.innerWidth;
    }
    // public method
    navCollapse() {
        if (this.windowWidth >= 1025) {
            this.navCollapsed = !this.navCollapsed;
            this.NavCollapse.emit();
        }
    }
    // eslint-disable-next-line
    onResize(event) {
        this.windowWidth = event.target.innerWidth;
        this.navCollapseMob();
    }
    navCollapseMob() {
        if (this.windowWidth < 1025) {
            this.NavCollapsedMob.emit();
        }
    }
    static { this.ɵfac = function NavBarComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || NavBarComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NavBarComponent, selectors: [["app-nav-bar"]], hostBindings: function NavBarComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("resize", function NavBarComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, i0.ɵɵresolveWindow);
        } }, outputs: { NavCollapse: "NavCollapse", NavCollapsedMob: "NavCollapsedMob" }, decls: 6, vars: 1, consts: [[1, "pc-header"], [1, "header-wrapper"], [1, "pc-mob-drp"], [3, "NavCollapse", "NavCollapsedMob", "navCollapsed"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "app-nav-left", 3);
            i0.ɵɵlistener("NavCollapse", function NavBarComponent_Template_app_nav_left_NavCollapse_3_listener() { return ctx.navCollapse(); })("NavCollapsedMob", function NavBarComponent_Template_app_nav_left_NavCollapsedMob_3_listener() { return ctx.navCollapseMob(); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(4, "div");
            i0.ɵɵelement(5, "app-nav-right");
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("navCollapsed", ctx.navCollapsed);
        } }, dependencies: [SharedModule, NavLeftComponent, NavRightComponent], styles: ["// This file is intentionally left empty to allow customers to add custom CSS if needed."] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NavBarComponent, [{
        type: Component,
        args: [{ selector: 'app-nav-bar', imports: [SharedModule, NavLeftComponent, NavRightComponent], template: "<header class=\"pc-header\">\n  <div class=\"header-wrapper\">\n    <div class=\"pc-mob-drp\">\n      <app-nav-left [navCollapsed]=\"navCollapsed\" (NavCollapse)=\"navCollapse()\" (NavCollapsedMob)=\"navCollapseMob()\" />\n    </div>\n    <div>\n      <app-nav-right />\n    </div>\n  </div>\n</header>\n", styles: ["// This file is intentionally left empty to allow customers to add custom CSS if needed.\n"] }]
    }], () => [], { NavCollapse: [{ type: i0.Output, args: ["NavCollapse"] }], NavCollapsedMob: [{ type: i0.Output, args: ["NavCollapsedMob"] }], onResize: [{
            type: HostListener,
            args: ['window:resize', ['$event']]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(NavBarComponent, { className: "NavBarComponent", filePath: "src/app/theme/layouts/admin-layout/nav-bar/nav-bar.component.ts", lineNumber: 15 }); })();
//# sourceMappingURL=nav-bar.component.js.map