// Angular import
import { Component, ContentChild, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["headerOptionsTemplate"];
const _c1 = ["headerTitleTemplate"];
const _c2 = ["*"];
function CardComponent_Conditional_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CardComponent_Conditional_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CardComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1)(1, "div")(2, "h5");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, CardComponent_Conditional_1_ng_container_4_Template, 1, 0, "ng-container", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, CardComponent_Conditional_1_ng_container_5_Template, 1, 0, "ng-container", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r0.headerClass());
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.cardTitle());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r0.headerTitleTemplate);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r0.headerOptionsTemplate);
} }
function CardComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵprojection(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("padding", ctx_r0.padding(), "px");
    i0.ɵɵproperty("ngClass", ctx_r0.blockClass());
} }
export class CardComponent {
    constructor() {
        // public props
        /**
         * Title of card. It will be visible at left side of card header
         */
        this.cardTitle = input(/* @ts-ignore */
        ...(ngDevMode ? [undefined, { debugName: "cardTitle" }] : /* istanbul ignore next */ []));
        /**
         * Class to be applied at card level
         */
        this.cardClass = input(/* @ts-ignore */
        ...(ngDevMode ? [undefined, { debugName: "cardClass" }] : /* istanbul ignore next */ []));
        /**
         * To hide content from card
         */
        this.showContent = input(true, /* @ts-ignore */
        ...(ngDevMode ? [{ debugName: "showContent" }] : /* istanbul ignore next */ []));
        /**
         * Class to be applied at card content.
         */
        this.blockClass = input(/* @ts-ignore */
        ...(ngDevMode ? [undefined, { debugName: "blockClass" }] : /* istanbul ignore next */ []));
        /**
         * Class to be applied on card header
         */
        this.headerClass = input(/* @ts-ignore */
        ...(ngDevMode ? [undefined, { debugName: "headerClass" }] : /* istanbul ignore next */ []));
        /**
         * To hide header from card
         */
        this.showHeader = input(true, /* @ts-ignore */
        ...(ngDevMode ? [{ debugName: "showHeader" }] : /* istanbul ignore next */ []));
        /**
         * padding around card content. default in px
         */
        this.padding = input(20, /* @ts-ignore */
        ...(ngDevMode ? [{ debugName: "padding" }] : /* istanbul ignore next */ [])); // set default to 24 px
    }
    static { this.ɵfac = function CardComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CardComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CardComponent, selectors: [["app-card"]], contentQueries: function CardComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, _c0, 5)(dirIndex, _c1, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.headerOptionsTemplate = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.headerTitleTemplate = _t.first);
        } }, inputs: { cardTitle: [1, "cardTitle"], cardClass: [1, "cardClass"], showContent: [1, "showContent"], blockClass: [1, "blockClass"], headerClass: [1, "headerClass"], showHeader: [1, "showHeader"], padding: [1, "padding"] }, ngContentSelectors: _c2, decls: 3, vars: 3, consts: [[1, "card", 3, "ngClass"], [1, "card-header", "d-flex", "align-items-center", "justify-content-between", 3, "ngClass"], [1, "card-body", 3, "ngClass", "padding"], [4, "ngTemplateOutlet"], [1, "card-body", 3, "ngClass"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵconditionalCreate(1, CardComponent_Conditional_1_Template, 6, 4, "div", 1);
            i0.ɵɵconditionalCreate(2, CardComponent_Conditional_2_Template, 2, 3, "div", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", ctx.cardClass());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showHeader() ? 1 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showContent() ? 2 : -1);
        } }, dependencies: [CommonModule, i1.NgClass, i1.NgTemplateOutlet], styles: ["// This file is intentionally left empty to allow customers to add custom CSS if needed."] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CardComponent, [{
        type: Component,
        args: [{ selector: 'app-card', standalone: true, imports: [CommonModule], template: "<div class=\"card\" [ngClass]=\"cardClass()\">\n  @if (showHeader()) {\n  <div class=\"card-header d-flex align-items-center justify-content-between\" [ngClass]=\"headerClass()\">\n    <div>\n      <h5>{{ cardTitle() }}</h5>\n      <ng-container *ngTemplateOutlet=\"headerTitleTemplate\" />\n    </div>\n    <ng-container *ngTemplateOutlet=\"headerOptionsTemplate\" />\n  </div>\n  }\n  @if (showContent()) {\n  <div class=\"card-body\" [ngClass]=\"blockClass()\" [style.padding.px]=\"padding()\">\n    <ng-content />\n  </div>\n  }\n</div>", styles: ["// This file is intentionally left empty to allow customers to add custom CSS if needed.\n"] }]
    }], null, { cardTitle: [{ type: i0.Input, args: [{ isSignal: true, alias: "cardTitle", required: false }] }], cardClass: [{ type: i0.Input, args: [{ isSignal: true, alias: "cardClass", required: false }] }], showContent: [{ type: i0.Input, args: [{ isSignal: true, alias: "showContent", required: false }] }], blockClass: [{ type: i0.Input, args: [{ isSignal: true, alias: "blockClass", required: false }] }], headerClass: [{ type: i0.Input, args: [{ isSignal: true, alias: "headerClass", required: false }] }], showHeader: [{ type: i0.Input, args: [{ isSignal: true, alias: "showHeader", required: false }] }], padding: [{ type: i0.Input, args: [{ isSignal: true, alias: "padding", required: false }] }], headerOptionsTemplate: [{
            type: ContentChild,
            args: ['headerOptionsTemplate']
        }], headerTitleTemplate: [{
            type: ContentChild,
            args: ['headerTitleTemplate']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CardComponent, { className: "CardComponent", filePath: "src/app/theme/shared/components/card/card.component.ts", lineNumber: 12 }); })();
//# sourceMappingURL=card.component.js.map