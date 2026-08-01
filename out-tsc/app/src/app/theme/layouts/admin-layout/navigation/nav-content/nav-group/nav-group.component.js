// Angular import
import { Component, input, output, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NavCollapseComponent } from '../nav-collapse/nav-collapse.component';
import { NavItemComponent } from '../nav-item/nav-item.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function NavGroupComponent_For_4_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-nav-collapse", 1);
} if (rf & 2) {
    const items_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("item", items_r1);
} }
function NavGroupComponent_For_4_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-nav-item", 1);
} if (rf & 2) {
    const items_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("item", items_r1);
} }
function NavGroupComponent_For_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, NavGroupComponent_For_4_Conditional_0_Template, 1, 1, "app-nav-collapse", 1)(1, NavGroupComponent_For_4_Conditional_1_Template, 1, 1, "app-nav-item", 1);
} if (rf & 2) {
    const items_r1 = ctx.$implicit;
    i0.ɵɵconditional(items_r1.type === "collapse" ? 0 : items_r1.type === "item" ? 1 : -1);
} }
export class NavGroupComponent {
    constructor() {
        this.location = inject(Location);
        // public props
        // All Version in Group Name
        this.item = input.required(/* @ts-ignore */
        ...(ngDevMode ? [{ debugName: "item" }] : /* istanbul ignore next */ []));
        // for Compact Menu
        this.showCollapseItem = output();
    }
    // Life cycle events
    ngOnInit() {
        this.current_url = this.location.path();
        //eslint-disable-next-line
        //@ts-ignore
        const baseHref = this.location['_baseHref'] || '';
        this.current_url = baseHref + this.current_url;
        // Use a more reliable way to find and update the active group
        setTimeout(() => {
            const links = document.querySelectorAll('a.nav-link');
            links.forEach((link) => {
                if (link.getAttribute('href') === this.current_url) {
                    this.activateParentMenu(link);
                }
            });
        }, 0);
    }
    // Activate parent elements based on matched URL
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
    subMenuCollapse(item) {
        this.showCollapseItem.emit(item);
    }
    static { this.ɵfac = function NavGroupComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || NavGroupComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NavGroupComponent, selectors: [["app-nav-group"]], inputs: { item: [1, "item"] }, outputs: { showCollapseItem: "showCollapseItem" }, decls: 5, vars: 2, consts: [[1, "nav-item", "coded-menu-caption", 3, "ngClass"], [3, "item"]], template: function NavGroupComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "li", 0)(1, "label");
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd()();
            i0.ɵɵrepeaterCreate(3, NavGroupComponent_For_4_Template, 2, 1, null, null, i0.ɵɵrepeaterTrackByIdentity);
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", ctx.item().classes);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.item().title);
            i0.ɵɵadvance();
            i0.ɵɵrepeater(ctx.item().children);
        } }, dependencies: [CommonModule, i1.NgClass, SharedModule, NavCollapseComponent, NavItemComponent], styles: ["// This file is intentionally left empty to allow customers to add custom CSS if needed."] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NavGroupComponent, [{
        type: Component,
        args: [{ selector: 'app-nav-group', imports: [CommonModule, SharedModule, NavCollapseComponent, NavItemComponent], template: "<li class=\"nav-item coded-menu-caption\" [ngClass]=\"item().classes\">\n  <label>{{ item().title }}</label>\n</li>\n@for (items of item().children; track items) {\n  @if (items.type === 'collapse') {\n    <app-nav-collapse [item]=\"items\" />\n  } @else if (items.type === 'item') {\n    <app-nav-item [item]=\"items\" />\n  }\n}\n", styles: ["// This file is intentionally left empty to allow customers to add custom CSS if needed.\n"] }]
    }], null, { item: [{ type: i0.Input, args: [{ isSignal: true, alias: "item", required: true }] }], showCollapseItem: [{ type: i0.Output, args: ["showCollapseItem"] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(NavGroupComponent, { className: "NavGroupComponent", filePath: "src/app/theme/layouts/admin-layout/navigation/nav-content/nav-group/nav-group.component.ts", lineNumber: 17 }); })();
//# sourceMappingURL=nav-group.component.js.map