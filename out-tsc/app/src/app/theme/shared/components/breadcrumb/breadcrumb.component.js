// Angular import
import { Component, input, inject, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
// Project import
import { NavigationItems } from 'src/app/theme/layouts/admin-layout/navigation/navigation';
// Icons
import { IconService } from '@ant-design/icons-angular';
import { GlobalOutline, NodeExpandOutline } from '@ant-design/icons-angular/icons';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const _c0 = () => ["/"];
function BreadcrumbComponent_For_1_Conditional_0_For_9_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 5)(1, "a", 8);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const breadcrumb_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("routerLink", breadcrumb_r1.url);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(breadcrumb_r1.title);
} }
function BreadcrumbComponent_For_1_Conditional_0_For_9_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 5)(1, "span", 9);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const breadcrumb_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(breadcrumb_r1.title);
} }
function BreadcrumbComponent_For_1_Conditional_0_For_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, BreadcrumbComponent_For_1_Conditional_0_For_9_Conditional_0_Template, 3, 2, "li", 5);
    i0.ɵɵconditionalCreate(1, BreadcrumbComponent_For_1_Conditional_0_For_9_Conditional_1_Template, 3, 1, "li", 5);
} if (rf & 2) {
    const breadcrumb_r1 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵconditional(ctx_r1.isLink(breadcrumb_r1.url) ? 0 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(breadcrumb_r1.url === true && breadcrumb_r1.type !== "group" ? 1 : -1);
} }
function BreadcrumbComponent_For_1_Conditional_0_For_13_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h2", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const breadcrumb_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(breadcrumb_r3.title);
} }
function BreadcrumbComponent_For_1_Conditional_0_For_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, BreadcrumbComponent_For_1_Conditional_0_For_13_Conditional_0_Template, 2, 1, "h2", 10);
} if (rf & 2) {
    const ɵ$index_35_r4 = ctx.$index;
    const ɵ$count_35_r5 = ctx.$count;
    i0.ɵɵconditional(ɵ$index_35_r4 === ɵ$count_35_r5 - 1 ? 0 : -1);
} }
function BreadcrumbComponent_For_1_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "ul", 4)(5, "li", 5)(6, "a", 6);
    i0.ɵɵtext(7, "Home");
    i0.ɵɵelementEnd()();
    i0.ɵɵrepeaterCreate(8, BreadcrumbComponent_For_1_Conditional_0_For_9_Template, 2, 2, null, null, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 3)(11, "div", 7);
    i0.ɵɵrepeaterCreate(12, BreadcrumbComponent_For_1_Conditional_0_For_13_Template, 1, 1, null, null, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(1, _c0));
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r1.navigationList);
    i0.ɵɵadvance(4);
    i0.ɵɵrepeater(ctx_r1.navigationList);
} }
function BreadcrumbComponent_For_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, BreadcrumbComponent_For_1_Conditional_0_Template, 14, 2, "div", 0);
} if (rf & 2) {
    const breadcrumb_r6 = ctx.$implicit;
    const ɵ$index_1_r7 = ctx.$index;
    const ɵ$count_1_r8 = ctx.$count;
    i0.ɵɵconditional(ɵ$index_1_r7 === ɵ$count_1_r8 - 1 && breadcrumb_r6.breadcrumbs !== false ? 0 : -1);
} }
export class BreadcrumbComponent {
    // Constructor
    constructor() {
        this.route = inject(Router);
        this.iconService = inject(IconService);
        this.cdr = inject(ChangeDetectorRef);
        // public props
        this.type = input('theme1', /* @ts-ignore */
        ...(ngDevMode ? [{ debugName: "type" }] : /* istanbul ignore next */ []));
        this.dashboard = input(true, /* @ts-ignore */
        ...(ngDevMode ? [{ debugName: "dashboard" }] : /* istanbul ignore next */ []));
        this.Component = input(false, /* @ts-ignore */
        ...(ngDevMode ? [{ debugName: "Component" }] : /* istanbul ignore next */ []));
        this.breadcrumbList = [];
        this.navigations = NavigationItems;
        this.setBreadcrumb();
        this.iconService.addIcon(...[GlobalOutline, NodeExpandOutline]);
    }
    // Public method
    setBreadcrumb() {
        // Process the current route immediately on initial load
        this.updateBreadcrumb(this.route.url);
        // Subscribe to future navigation events
        this.route.events.subscribe((router) => {
            if (router instanceof NavigationEnd) {
                this.updateBreadcrumb(router.url);
            }
        });
    }
    updateBreadcrumb(activeLink) {
        const activeItem = this.filterNavigation(this.navigations, activeLink);
        // Clear previous values to avoid showing stale data
        this.navigationList = [];
        // Prioritize componentItem over activeItem when both exist
        // Component navigation has richer data (description, path, link)
        if (activeItem) {
            this.navigationList = [activeItem];
        }
        this.cdr.markForCheck();
    }
    filterNavigation(navItems, activeLink) {
        for (const navItem of navItems) {
            if (navItem.type === 'item' && 'url' in navItem && navItem.url === activeLink) {
                return {
                    url: navItem.url || true,
                    title: navItem.title,
                    link: navItem.link,
                    description: navItem.description,
                    path: navItem.path,
                    breadcrumbs: 'breadcrumbs' in navItem ? navItem.breadcrumbs : true,
                    type: navItem.type
                };
            }
            if ((navItem.type === 'group' || navItem.type === 'collapse') && 'children' in navItem) {
                const activeItem = this.filterNavigation(navItem.children, activeLink);
                if (activeItem) {
                    return activeItem; // Return the child if found
                }
            }
        }
        return null; // Return null if no active item matches
    }
    isLink(url) {
        return typeof url === 'string';
    }
    static { this.ɵfac = function BreadcrumbComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || BreadcrumbComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BreadcrumbComponent, selectors: [["app-breadcrumb"]], inputs: { type: [1, "type"], dashboard: [1, "dashboard"], Component: [1, "Component"] }, decls: 2, vars: 0, consts: [[1, "page-header"], [1, "page-block"], [1, "row", "align-items-center"], [1, "col-md-12"], [1, "breadcrumb"], [1, "breadcrumb-item"], [1, "home", 3, "routerLink"], [1, "page-header-title"], [1, "f-14", "f-w-600", 3, "routerLink"], [1, "f-14", "f-w-600"], [1, "mb-0", "f-w-600", "mt-2"]], template: function BreadcrumbComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵrepeaterCreate(0, BreadcrumbComponent_For_1_Template, 1, 1, null, null, i0.ɵɵrepeaterTrackByIdentity);
        } if (rf & 2) {
            i0.ɵɵrepeater(ctx.navigationList);
        } }, dependencies: [RouterModule, i1.RouterLink], styles: ["// This file is intentionally left empty to allow customers to add custom CSS if needed."] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BreadcrumbComponent, [{
        type: Component,
        args: [{ selector: 'app-breadcrumb', imports: [RouterModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "@for (breadcrumb of navigationList; track breadcrumb; let last = $last) {\n@if (last && breadcrumb.breadcrumbs !== false) {\n<div class=\"page-header\">\n  <div class=\"page-block\">\n    <div class=\"row align-items-center\">\n      <div class=\"col-md-12\">\n        <ul class=\"breadcrumb\">\n          <li class=\"breadcrumb-item\">\n            <a [routerLink]=\"['/']\" class=\"home\">Home</a>\n          </li>\n          @for (breadcrumb of navigationList; track breadcrumb) {\n          @if (isLink(breadcrumb.url)) {\n          <li class=\"breadcrumb-item\">\n            <a [routerLink]=\"breadcrumb.url\" class=\"f-14 f-w-600\">{{ breadcrumb.title }}</a>\n          </li>\n          }\n          @if (breadcrumb.url === true && breadcrumb.type !== 'group') {\n          <li class=\"breadcrumb-item\">\n            <span class=\"f-14 f-w-600\">{{ breadcrumb.title }}</span>\n          </li>\n          }\n          }\n        </ul>\n      </div>\n      <div class=\"col-md-12\">\n        <div class=\"page-header-title\">\n          @for (breadcrumb of navigationList; track breadcrumb; let last = $last) {\n          @if (last) {\n          <h2 class=\"mb-0 f-w-600 mt-2\">{{ breadcrumb.title }}</h2>\n          }\n          }\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n}\n}", styles: ["// This file is intentionally left empty to allow customers to add custom CSS if needed.\n"] }]
    }], () => [], { type: [{ type: i0.Input, args: [{ isSignal: true, alias: "type", required: false }] }], dashboard: [{ type: i0.Input, args: [{ isSignal: true, alias: "dashboard", required: false }] }], Component: [{ type: i0.Input, args: [{ isSignal: true, alias: "Component", required: false }] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BreadcrumbComponent, { className: "BreadcrumbComponent", filePath: "src/app/theme/shared/components/breadcrumb/breadcrumb.component.ts", lineNumber: 29 }); })();
//# sourceMappingURL=breadcrumb.component.js.map