// Angular import
import { Component, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { LayoutStateService } from 'src/app/theme/shared/service/layout-state.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@ant-design/icons-angular";
import * as i3 from "@angular/router";
const _c0 = () => ["active"];
const _c1 = a0 => [a0];
function NavItemComponent_Conditional_0_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 3);
    i0.ɵɵelement(1, "i", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("type", i0.ɵɵinterpolate(ctx_r1.item().icon));
} }
function NavItemComponent_Conditional_0_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.item().title);
} }
function NavItemComponent_Conditional_0_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.item().title, " ");
} }
function NavItemComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 0)(1, "a", 2);
    i0.ɵɵlistener("click", function NavItemComponent_Conditional_0_Template_a_click_1_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeOtherMenu($event)); });
    i0.ɵɵconditionalCreate(2, NavItemComponent_Conditional_0_Conditional_2_Template, 2, 2, "span", 3);
    i0.ɵɵconditionalCreate(3, NavItemComponent_Conditional_0_Conditional_3_Template, 2, 1, "span", 4)(4, NavItemComponent_Conditional_0_Conditional_4_Template, 1, 1);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r1.item().classes)("routerLinkActive", i0.ɵɵpureFunction0(6, _c0));
    i0.ɵɵadvance();
    i0.ɵɵproperty("target", ctx_r1.item().target ? "_blank" : "_self")("routerLink", i0.ɵɵpureFunction1(7, _c1, ctx_r1.item().url));
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.item().icon ? 2 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.item().icon ? 3 : 4);
} }
function NavItemComponent_Conditional_1_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 3);
    i0.ɵɵelement(1, "i", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("type", i0.ɵɵinterpolate(ctx_r1.item().icon));
} }
function NavItemComponent_Conditional_1_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.item().title);
} }
function NavItemComponent_Conditional_1_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.item().title, " ");
} }
function NavItemComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 1)(1, "a", 6);
    i0.ɵɵconditionalCreate(2, NavItemComponent_Conditional_1_Conditional_2_Template, 2, 2, "span", 3);
    i0.ɵɵconditionalCreate(3, NavItemComponent_Conditional_1_Conditional_3_Template, 2, 1, "span", 4)(4, NavItemComponent_Conditional_1_Conditional_4_Template, 1, 1);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r1.item().classes);
    i0.ɵɵadvance();
    i0.ɵɵproperty("target", ctx_r1.item().target ? "_blank" : "_self")("href", ctx_r1.item().url, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.item().icon ? 2 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.item().icon ? 3 : 4);
} }
export class NavItemComponent {
    constructor() {
        this.layoutState = inject(LayoutStateService);
        // public props
        this.item = input.required(/* @ts-ignore */
        ...(ngDevMode ? [{ debugName: "item" }] : /* istanbul ignore next */ []));
    }
    // public method
    closeOtherMenu(event) {
        const ele = event.target;
        if (ele !== null && ele !== undefined) {
            const parent = ele.parentElement;
            const up_parent = parent.parentElement.parentElement.parentElement;
            const last_parent = up_parent.parentElement.parentElement;
            if (last_parent.classList.contains('coded-submenu')) {
                up_parent.classList.remove('coded-trigger');
                up_parent.classList.remove('active');
            }
            else {
                const sections = document.querySelectorAll('.coded-hasmenu');
                for (let i = 0; i < sections.length; i++) {
                    sections[i].classList.remove('active');
                    sections[i].classList.remove('coded-trigger');
                }
            }
            if (parent.classList.contains('coded-hasmenu')) {
                parent.classList.add('coded-trigger');
                parent.classList.add('active');
            }
            else if (up_parent.classList.contains('coded-hasmenu')) {
                up_parent.classList.add('coded-trigger');
                up_parent.classList.add('active');
            }
            else if (last_parent.classList.contains('coded-hasmenu')) {
                last_parent.classList.add('coded-trigger');
                last_parent.classList.add('active');
            }
        }
        if (document.querySelector('app-navigation.pc-sidebar').classList.contains('mob-open')) {
            this.layoutState.closeNavCollapsedMob();
        }
    }
    static { this.ɵfac = function NavItemComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || NavItemComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NavItemComponent, selectors: [["app-nav-item"]], inputs: { item: [1, "item"] }, decls: 2, vars: 2, consts: [[3, "ngClass", "routerLinkActive"], [3, "ngClass"], [1, "nav-link", 3, "click", "target", "routerLink"], [1, "coded-micon"], [1, "coded-mtext"], ["antIcon", "", "theme", "outline", 3, "type"], [3, "target", "href"]], template: function NavItemComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵconditionalCreate(0, NavItemComponent_Conditional_0_Template, 5, 9, "li", 0);
            i0.ɵɵconditionalCreate(1, NavItemComponent_Conditional_1_Template, 5, 5, "li", 1);
        } if (rf & 2) {
            i0.ɵɵconditional(ctx.item().url && !ctx.item().external ? 0 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.item().url && ctx.item().external ? 1 : -1);
        } }, dependencies: [CommonModule, i1.NgClass, SharedModule, i2.IconDirective, RouterModule, i3.RouterLink, i3.RouterLinkActive], styles: ["// This file is intentionally left empty to allow customers to add custom CSS if needed."] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NavItemComponent, [{
        type: Component,
        args: [{ selector: 'app-nav-item', imports: [CommonModule, SharedModule, RouterModule], template: "@if (item().url && !item().external) {\n<li [ngClass]=\"item().classes!\" [routerLinkActive]=\"['active']\">\n  <a class=\"nav-link\" [target]=\"item().target ? '_blank' : '_self'\" [routerLink]=\"[item().url]\"\n    (click)=\"closeOtherMenu($event)\">\n    @if (item().icon) {\n    <span class=\"coded-micon\">\n      <i antIcon type=\"{{ item().icon }}\" theme=\"outline\"></i>\n    </span>\n    }\n    @if (item().icon) {\n    <span class=\"coded-mtext\">{{ item().title }}</span>\n    } @else {\n    {{ item().title }}\n    }\n  </a>\n</li>\n}\n@if (item().url && item().external) {\n<li [ngClass]=\"item().classes!\">\n  <a [target]=\"item().target ? '_blank' : '_self'\" [href]=\"item().url\">\n    @if (item().icon) {\n    <span class=\"coded-micon\">\n      <i antIcon type=\"{{ item().icon }}\" theme=\"outline\"></i>\n    </span>\n    }\n    @if (item().icon) {\n    <span class=\"coded-mtext\">{{ item().title }}</span>\n    } @else {\n    {{ item().title }}\n    }\n  </a>\n</li>\n}", styles: ["// This file is intentionally left empty to allow customers to add custom CSS if needed.\n"] }]
    }], null, { item: [{ type: i0.Input, args: [{ isSignal: true, alias: "item", required: true }] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(NavItemComponent, { className: "NavItemComponent", filePath: "src/app/theme/layouts/admin-layout/navigation/nav-content/nav-item/nav-item.component.ts", lineNumber: 17 }); })();
//# sourceMappingURL=nav-item.component.js.map