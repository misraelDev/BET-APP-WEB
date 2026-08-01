// Angular import
import { Component, input, output, inject } from '@angular/core';
// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';
// icons
import { IconService } from '@ant-design/icons-angular';
import { MenuUnfoldOutline, MenuFoldOutline } from '@ant-design/icons-angular/icons';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@ant-design/icons-angular";
const _c0 = a0 => ({ on: a0 });
function NavLeftComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 3);
} }
function NavLeftComponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 4);
} }
export class NavLeftComponent {
    // Constructor
    constructor() {
        this.iconService = inject(IconService);
        // public props
        this.navCollapsed = input.required(/* @ts-ignore */
        ...(ngDevMode ? [{ debugName: "navCollapsed" }] : /* istanbul ignore next */ []));
        this.NavCollapse = output();
        this.NavCollapsedMob = output();
        this.iconService.addIcon(...[MenuUnfoldOutline, MenuFoldOutline]);
    }
    // public method
    navCollapse() {
        this.NavCollapse.emit();
    }
    navCollapsedMob() {
        this.NavCollapsedMob.emit();
    }
    static { this.ɵfac = function NavLeftComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || NavLeftComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NavLeftComponent, selectors: [["app-nav-left"]], inputs: { navCollapsed: [1, "navCollapsed"] }, outputs: { NavCollapse: "NavCollapse", NavCollapsedMob: "NavCollapsedMob" }, decls: 8, vars: 4, consts: [[1, "list-unstyled"], [1, "pc-h-item", "pc-sidebar-collapse"], ["type", "button", "title", "click to menu collapse", "id", "sidebar-hide mobile-collapse", 1, "pc-head-link", "ms-0", "bg-transparent", "border-0", 3, "click", "ngClass"], ["antIcon", "", "type", "menu-unfold", "theme", "outline"], ["antIcon", "", "type", "menu-fold", "theme", "outline"], [1, "pc-h-item", "pc-sidebar-popup"], ["type", "button", "id", "mobile-collapse1", 1, "pc-head-link", "ms-0", "bg-transparent", "border-0", 3, "click"]], template: function NavLeftComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "ul", 0)(1, "li", 1)(2, "button", 2);
            i0.ɵɵlistener("click", function NavLeftComponent_Template_button_click_2_listener() { return ctx.navCollapse(); });
            i0.ɵɵconditionalCreate(3, NavLeftComponent_Conditional_3_Template, 1, 0, "i", 3)(4, NavLeftComponent_Conditional_4_Template, 1, 0, "i", 4);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(5, "li", 5)(6, "button", 6);
            i0.ɵɵlistener("click", function NavLeftComponent_Template_button_click_6_listener() { return ctx.navCollapsedMob(); });
            i0.ɵɵelement(7, "i", 4);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c0, ctx.navCollapsed()));
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.navCollapsed() === true ? 3 : 4);
        } }, dependencies: [SharedModule, i1.NgClass, i2.IconDirective], styles: [".search-trigger[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 14px;\n  background: var(--pc-header-bg);\n  border: 1px solid var(--bs-border-color);\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n\n  &:hover {\n    border-color: var(--bs-primary);\n  }\n\n  .search-icon {\n    font-size: 14px;\n    opacity: 0.6;\n  }\n\n  .search-shortcut {\n    display: flex;\n    align-items: center;\n    gap: 4px;\n    background: var(--bs-gray-300);\n    padding: 0px 4px;\n    border-radius: 4px;\n    color: var(--bs-secondary);\n  }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NavLeftComponent, [{
        type: Component,
        args: [{ selector: 'app-nav-left', imports: [SharedModule], template: "<ul class=\"list-unstyled\">\n  <li class=\"pc-h-item pc-sidebar-collapse\">\n    <button type=\"button\" title=\"click to menu collapse\" class=\"pc-head-link ms-0 bg-transparent border-0\"\n      [ngClass]=\"{ on: navCollapsed() }\" id=\"sidebar-hide mobile-collapse\" (click)=\"navCollapse()\">\n      @if (navCollapsed() === true) {\n      <i antIcon type=\"menu-unfold\" theme=\"outline\"></i>\n      } @else {\n      <i antIcon type=\"menu-fold\" theme=\"outline\"></i>\n      }\n    </button>\n  </li>\n  <li class=\"pc-h-item pc-sidebar-popup\">\n    <button type=\"button\" class=\"pc-head-link ms-0 bg-transparent border-0\" id=\"mobile-collapse1\"\n      (click)=\"navCollapsedMob()\">\n      <i antIcon type=\"menu-fold\" theme=\"outline\"></i>\n    </button>\n  </li>\n</ul>\n", styles: [".search-trigger {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 14px;\n  background: var(--pc-header-bg);\n  border: 1px solid var(--bs-border-color);\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n\n  &:hover {\n    border-color: var(--bs-primary);\n  }\n\n  .search-icon {\n    font-size: 14px;\n    opacity: 0.6;\n  }\n\n  .search-shortcut {\n    display: flex;\n    align-items: center;\n    gap: 4px;\n    background: var(--bs-gray-300);\n    padding: 0px 4px;\n    border-radius: 4px;\n    color: var(--bs-secondary);\n  }\n}"] }]
    }], () => [], { navCollapsed: [{ type: i0.Input, args: [{ isSignal: true, alias: "navCollapsed", required: true }] }], NavCollapse: [{ type: i0.Output, args: ["NavCollapse"] }], NavCollapsedMob: [{ type: i0.Output, args: ["NavCollapsedMob"] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(NavLeftComponent, { className: "NavLeftComponent", filePath: "src/app/theme/layouts/admin-layout/nav-bar/nav-left/nav-left.component.ts", lineNumber: 17 }); })();
//# sourceMappingURL=nav-left.component.js.map