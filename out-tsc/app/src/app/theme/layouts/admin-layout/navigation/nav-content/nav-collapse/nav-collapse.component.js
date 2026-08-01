// Angular import
import { Component, input, output, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NavItemComponent } from '../nav-item/nav-item.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@ant-design/icons-angular";
import * as i3 from "@angular/router";
const _c0 = () => ["active"];
function NavCollapseComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function NavCollapseComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function NavCollapseComponent_ng_template_4_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 5);
    i0.ɵɵelement(1, "i", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("type", i0.ɵɵinterpolate(ctx_r0.item().icon));
} }
function NavCollapseComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, NavCollapseComponent_ng_template_4_Conditional_0_Template, 2, 2, "span", 5);
    i0.ɵɵelementStart(1, "span", 6);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵconditional(ctx_r0.item().icon ? 0 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.item().title, " ");
} }
function NavCollapseComponent_ng_template_6_For_2_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-nav-item", 9);
} if (rf & 2) {
    const items_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("item", items_r2);
} }
function NavCollapseComponent_ng_template_6_For_2_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-nav-collapse", 9);
} if (rf & 2) {
    const items_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("item", items_r2);
} }
function NavCollapseComponent_ng_template_6_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, NavCollapseComponent_ng_template_6_For_2_Conditional_0_Template, 1, 1, "app-nav-item", 9)(1, NavCollapseComponent_ng_template_6_For_2_Conditional_1_Template, 1, 1, "app-nav-collapse", 9);
} if (rf & 2) {
    const items_r2 = ctx.$implicit;
    i0.ɵɵconditional(items_r2.type === "item" ? 0 : items_r2.type === "collapse" ? 1 : -1);
} }
function NavCollapseComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 8);
    i0.ɵɵrepeaterCreate(1, NavCollapseComponent_ng_template_6_For_2_Template, 2, 1, null, null, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("routerLinkActive", i0.ɵɵpureFunction0(2, _c0))("ngClass", ctx_r0.item().classes);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.item().children);
} }
export class NavCollapseComponent {
    constructor() {
        this.location = inject(Location);
        // public props
        this.showCollapseItem = output();
        this.item = input.required(/* @ts-ignore */
        ...(ngDevMode ? [{ debugName: "item" }] : /* istanbul ignore next */ []));
        this.windowWidth = window.innerWidth;
        this.current_url = '';
    }
    // Method to update the active menu item based on URL
    updateActiveMenu() {
        this.current_url = this.location.path();
        // eslint-disable-next-line
        //@ts-ignore
        const baseHref = this.location['_baseHref'] || ''; // Use baseHref if necessary
        this.current_url = baseHref + this.current_url;
        // Timeout to allow DOM to fully render before checking for the links
        setTimeout(() => {
            const links = document.querySelectorAll('a.nav-link');
            links.forEach((link) => {
                if (link.getAttribute('href') === this.current_url) {
                    this.activateParentMenu(link);
                }
            });
        }, 0);
    }
    // Method to activate the parent menu of the active item
    activateParentMenu(element) {
        let parent = element.parentElement;
        while (parent && parent.classList) {
            if (parent.classList.contains('coded-hasmenu')) {
                parent.classList.add('coded-trigger');
                parent.classList.add('active');
            }
            parent = parent.parentElement;
        }
    }
    // Method to handle the collapse of the navigation menu
    navCollapse(e) {
        let parent = e.target;
        if (parent?.tagName === 'SPAN') {
            parent = parent.parentElement;
        }
        parent = parent.parentElement;
        const sections = document.querySelectorAll('.coded-hasmenu');
        for (let i = 0; i < sections.length; i++) {
            if (sections[i] !== parent) {
                sections[i].classList.remove('coded-trigger');
            }
        }
        let first_parent = parent.parentElement;
        let pre_parent = parent.parentElement.parentElement;
        if (first_parent.classList.contains('coded-hasmenu')) {
            do {
                first_parent.classList.add('coded-trigger');
                first_parent = first_parent.parentElement.parentElement;
            } while (first_parent.classList.contains('coded-hasmenu'));
        }
        else if (pre_parent.classList.contains('coded-submenu')) {
            do {
                pre_parent.parentElement?.classList.add('coded-trigger');
                pre_parent = pre_parent.parentElement.parentElement.parentElement;
            } while (pre_parent.classList.contains('coded-submenu'));
        }
        parent.classList.toggle('coded-trigger');
    }
    // for Compact Menu
    subMenuCollapse(item) {
        this.showCollapseItem.emit(item);
    }
    static { this.ɵfac = function NavCollapseComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || NavCollapseComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NavCollapseComponent, selectors: [["app-nav-collapse"]], inputs: { item: [1, "item"] }, outputs: { showCollapseItem: "showCollapseItem" }, decls: 8, vars: 8, consts: [["itemContent", ""], ["subMenuContent", ""], [1, "nav-item", "coded-hasmenu", 3, "routerLinkActive"], [1, "nav-link", 3, "click", "routerLinkActive"], [4, "ngTemplateOutlet"], [1, "coded-micon"], [1, "coded-mtext"], ["antIcon", "", "theme", "outline", 3, "type"], [1, "coded-submenu", 3, "routerLinkActive", "ngClass"], [3, "item"]], template: function NavCollapseComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "li", 2)(1, "a", 3);
            i0.ɵɵlistener("click", function NavCollapseComponent_Template_a_click_1_listener($event) { return ctx.navCollapse($event); });
            i0.ɵɵtemplate(2, NavCollapseComponent_ng_container_2_Template, 1, 0, "ng-container", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(3, NavCollapseComponent_ng_container_3_Template, 1, 0, "ng-container", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, NavCollapseComponent_ng_template_4_Template, 3, 2, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(6, NavCollapseComponent_ng_template_6_Template, 3, 3, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            const itemContent_r3 = i0.ɵɵreference(5);
            const subMenuContent_r4 = i0.ɵɵreference(7);
            i0.ɵɵclassProp("hide-collapse-arrow", ctx.item().id === "baseball");
            i0.ɵɵproperty("routerLinkActive", i0.ɵɵpureFunction0(6, _c0));
            i0.ɵɵadvance();
            i0.ɵɵproperty("routerLinkActive", i0.ɵɵpureFunction0(7, _c0));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngTemplateOutlet", itemContent_r3);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngTemplateOutlet", subMenuContent_r4);
        } }, dependencies: [NavCollapseComponent, CommonModule, i1.NgClass, i1.NgTemplateOutlet, SharedModule, i2.IconDirective, RouterModule, i3.RouterLinkActive, NavItemComponent], styles: ["// This file is intentionally left empty to allow customers to add custom CSS if needed."] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NavCollapseComponent, [{
        type: Component,
        args: [{ selector: 'app-nav-collapse', imports: [CommonModule, SharedModule, RouterModule, NavItemComponent], template: "<!-- Vertical Layout -->\n<li class=\"nav-item coded-hasmenu\" [class.hide-collapse-arrow]=\"item().id === 'baseball'\" [routerLinkActive]=\"['active']\">\n  <a [routerLinkActive]=\"['active']\" class=\"nav-link\" (click)=\"navCollapse($event)\">\n    <ng-container *ngTemplateOutlet=\"itemContent\" />\n  </a>\n  <ng-container *ngTemplateOutlet=\"subMenuContent\" />\n</li>\n\n<!-- all layout common -->\n<ng-template #itemContent>\n  @if (item().icon) {\n  <span class=\"coded-micon\">\n    <i antIcon type=\"{{ item().icon }}\" theme=\"outline\"></i>\n  </span>\n  }\n  <span class=\"coded-mtext\">\n    {{ item().title }}\n  </span>\n</ng-template>\n<ng-template #subMenuContent>\n  <ul class=\"coded-submenu\" [routerLinkActive]=\"['active']\" [ngClass]=\"item().classes!\">\n    @for (items of item().children; track items) {\n    @if (items.type === 'item') {\n    <app-nav-item [item]=\"items\" />\n    } @else if (items.type === 'collapse') {\n    <app-nav-collapse [item]=\"items\" />\n    }\n    }\n  </ul>\n</ng-template>\n", styles: ["// This file is intentionally left empty to allow customers to add custom CSS if needed.\n"] }]
    }], null, { showCollapseItem: [{ type: i0.Output, args: ["showCollapseItem"] }], item: [{ type: i0.Input, args: [{ isSignal: true, alias: "item", required: true }] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(NavCollapseComponent, { className: "NavCollapseComponent", filePath: "src/app/theme/layouts/admin-layout/navigation/nav-content/nav-collapse/nav-collapse.component.ts", lineNumber: 17 }); })();
//# sourceMappingURL=nav-collapse.component.js.map