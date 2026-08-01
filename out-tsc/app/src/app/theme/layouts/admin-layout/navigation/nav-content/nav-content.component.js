// Angular import
import { Component, inject, output } from '@angular/core';
import { CommonModule, Location, LocationStrategy } from '@angular/common';
import { RouterModule } from '@angular/router';
// project import
import { NavigationItems } from '../navigation';
import { environment } from 'src/environments/environment';
import { NavGroupComponent } from './nav-group/nav-group.component';
// icon
import { IconService } from '@ant-design/icons-angular';
import { DashboardOutline, LoginOutline, ProfileOutline } from '@ant-design/icons-angular/icons';
import { NgScrollbarModule } from 'ngx-scrollbar';
import * as i0 from "@angular/core";
import * as i1 from "ngx-scrollbar";
function NavContentComponent_For_4_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-nav-group", 3);
} if (rf & 2) {
    const item_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("item", item_r1);
} }
function NavContentComponent_For_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, NavContentComponent_For_4_Conditional_0_Template, 1, 1, "app-nav-group", 3);
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    i0.ɵɵconditional(item_r1.type === "group" ? 0 : -1);
} }
export class NavContentComponent {
    // Constructor
    constructor() {
        this.location = inject(Location);
        this.locationStrategy = inject(LocationStrategy);
        this.iconService = inject(IconService);
        // public props
        this.NavCollapsedMob = output();
        // version
        this.title = 'Demo application for version numbering';
        this.currentApplicationVersion = environment.appVersion;
        this.navigation = NavigationItems;
        this.windowWidth = window.innerWidth;
        this.iconService.addIcon(...[
            DashboardOutline,
            LoginOutline,
            ProfileOutline,
        ]);
        this.navigations = NavigationItems;
    }
    // Life cycle events
    ngOnInit() {
        if (this.windowWidth < 1025) {
            document.querySelector('.coded-navbar')?.classList.add('menupos-static');
        }
    }
    fireOutClick() {
        let current_url = this.location.path();
        const baseHref = this.locationStrategy.getBaseHref();
        if (baseHref) {
            current_url = baseHref + this.location.path();
        }
        const link = "a.nav-link[ href='" + current_url + "' ]";
        const ele = document.querySelector(link);
        if (ele !== null && ele !== undefined) {
            const parent = ele.parentElement;
            const up_parent = parent?.parentElement?.parentElement;
            const last_parent = up_parent?.parentElement;
            if (parent?.classList.contains('coded-hasmenu')) {
                parent.classList.add('coded-trigger');
                parent.classList.add('active');
            }
            else if (up_parent?.classList.contains('coded-hasmenu')) {
                up_parent.classList.add('coded-trigger');
                up_parent.classList.add('active');
            }
            else if (last_parent?.classList.contains('coded-hasmenu')) {
                last_parent.classList.add('coded-trigger');
                last_parent.classList.add('active');
            }
        }
    }
    navMob() {
        if (this.windowWidth < 1025 && document.querySelector('app-navigation.coded-navbar')?.classList.contains('mob-open')) {
            this.NavCollapsedMob.emit();
        }
    }
    static { this.ɵfac = function NavContentComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || NavContentComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NavContentComponent, selectors: [["app-nav-content"]], outputs: { NavCollapsedMob: "NavCollapsedMob" }, decls: 5, vars: 0, consts: [["visibility", "hover", "id", "nav-ps-mantis", 2, "height", "calc(100vh - 40px)"], [1, "navbar-content"], [1, "nav", "coded-inner-navbar", 3, "click", "mouseleave"], [3, "item"]], template: function NavContentComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "ng-scrollbar", 0)(1, "div", 1)(2, "ul", 2);
            i0.ɵɵlistener("click", function NavContentComponent_Template_ul_click_2_listener() { return ctx.fireOutClick(); })("mouseleave", function NavContentComponent_Template_ul_mouseleave_2_listener() { return ctx.navMob(); });
            i0.ɵɵrepeaterCreate(3, NavContentComponent_For_4_Template, 1, 1, null, null, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵrepeater(ctx.navigations);
        } }, dependencies: [CommonModule, RouterModule, NavGroupComponent, NgScrollbarModule, i1.NgScrollbar], styles: ["// This file is intentionally left empty to allow customers to add custom CSS if needed."] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NavContentComponent, [{
        type: Component,
        args: [{ selector: 'app-nav-content', imports: [CommonModule, RouterModule, NavGroupComponent, NgScrollbarModule], template: "<!-- Vertical layout -->\n<ng-scrollbar style=\"height: calc(100vh - 40px)\" visibility=\"hover\" id=\"nav-ps-mantis\">\n  <div class=\"navbar-content\">\n    <ul class=\"nav coded-inner-navbar\" (click)=\"fireOutClick()\" (mouseleave)=\"navMob()\">\n      @for (item of navigations; track item) {\n      @if (item.type === 'group') {\n      <app-nav-group [item]=\"item\" />\n      }\n      }\n    </ul>\n  </div>\n</ng-scrollbar>\n", styles: ["// This file is intentionally left empty to allow customers to add custom CSS if needed.\n"] }]
    }], () => [], { NavCollapsedMob: [{ type: i0.Output, args: ["NavCollapsedMob"] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(NavContentComponent, { className: "NavContentComponent", filePath: "src/app/theme/layouts/admin-layout/navigation/nav-content/nav-content.component.ts", lineNumber: 27 }); })();
//# sourceMappingURL=nav-content.component.js.map