import { Component, computed, input } from '@angular/core';
import * as i0 from "@angular/core";
function MarketStatusComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "strong", 3);
    i0.ɵɵtext(1);
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r0.unitsClass());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.unitsLabel());
} }
export class MarketStatusComponent {
    constructor() {
        this.outcome = input('pending', /* @ts-ignore */
        ...(ngDevMode ? [{ debugName: "outcome" }] : /* istanbul ignore next */ []));
        this.units = input(null, /* @ts-ignore */
        ...(ngDevMode ? [{ debugName: "units" }] : /* istanbul ignore next */ []));
        this.showUnits = input(true, /* @ts-ignore */
        ...(ngDevMode ? [{ debugName: "showUnits" }] : /* istanbul ignore next */ []));
        this.normalizedOutcome = computed(() => this.outcome() ?? 'pending', /* @ts-ignore */
        ...(ngDevMode ? [{ debugName: "normalizedOutcome" }] : /* istanbul ignore next */ []));
        this.label = computed(() => {
            const labels = {
                won: 'Acertada',
                lost: 'Fallada',
                push: 'Nula',
                pending: 'No concluido'
            };
            return labels[this.normalizedOutcome()];
        }, /* @ts-ignore */
        ...(ngDevMode ? [{ debugName: "label" }] : /* istanbul ignore next */ []));
        this.unitsLabel = computed(() => {
            const value = this.units();
            if (value === null)
                return '—';
            return value > 0 ? `+${value}` : `${value}`;
        }, /* @ts-ignore */
        ...(ngDevMode ? [{ debugName: "unitsLabel" }] : /* istanbul ignore next */ []));
        this.unitsClass = computed(() => {
            const value = this.units();
            if (value === null || value === 0)
                return 'status-units--neutral';
            return value > 0 ? 'status-units--positive' : 'status-units--negative';
        }, /* @ts-ignore */
        ...(ngDevMode ? [{ debugName: "unitsClass" }] : /* istanbul ignore next */ []));
    }
    static { this.ɵfac = function MarketStatusComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || MarketStatusComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MarketStatusComponent, selectors: [["app-market-status"]], inputs: { outcome: [1, "outcome"], units: [1, "units"], showUnits: [1, "showUnits"] }, decls: 4, vars: 4, consts: [[1, "market-status"], ["aria-hidden", "true", 1, "status-dot"], [1, "status-units", 3, "class"], [1, "status-units"]], template: function MarketStatusComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElementStart(0, "span", 0);
            i0.ɵɵdomElement(1, "span", 1);
            i0.ɵɵtext(2);
            i0.ɵɵdomElementEnd();
            i0.ɵɵconditionalCreate(3, MarketStatusComponent_Conditional_3_Template, 2, 3, "strong", 2);
        } if (rf & 2) {
            i0.ɵɵclassMap("market-status market-status--" + ctx.normalizedOutcome());
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.label(), "\n");
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showUnits() ? 3 : -1);
        } }, styles: [".market-status[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: 8px;\n  padding: 4px 8px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  font-size: 10px;\n  font-weight: 600;\n\n  &--won {\n    background: #e9f8ef;\n    border-color: #b7e4c7;\n    color: #237a45;\n  }\n\n  &--lost {\n    background: #fff0f0;\n    border-color: #ffc9c9;\n    color: #c92a2a;\n  }\n\n  &--push {\n    background: #fff8e6;\n    border-color: #ffe09a;\n    color: #9a6700;\n  }\n\n  &--pending {\n    background: #f2f4f6;\n    border-color: #d9dee3;\n    color: #68717d;\n  }\n}\n\n.status-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: currentColor;\n}\n\n.status-units[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 5px;\n  font-size: 12px;\n  font-weight: 700;\n\n  &--positive {\n    color: #237a45;\n  }\n\n  &--negative {\n    color: #c92a2a;\n  }\n\n  &--neutral {\n    color: #68717d;\n  }\n}\n\n[data-bs-theme='dark'][_nghost-%COMP%], [data-bs-theme='dark']   [_nghost-%COMP%] {\n  .market-status {\n    &--won {\n      background: #153a29;\n      border-color: #286245;\n      color: #79d69f;\n    }\n\n    &--lost {\n      background: #431f23;\n      border-color: #713138;\n      color: #ff929a;\n    }\n\n    &--push {\n      background: #3d3218;\n      border-color: #665221;\n      color: #f1c75b;\n    }\n\n    &--pending {\n      background: #292f36;\n      border-color: #444d57;\n      color: #aeb7c2;\n    }\n  }\n\n  .status-units {\n    &--positive {\n      color: #79d69f;\n    }\n\n    &--negative {\n      color: #ff929a;\n    }\n\n    &--neutral {\n      color: #aeb7c2;\n    }\n  }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MarketStatusComponent, [{
        type: Component,
        args: [{ selector: 'app-market-status', template: "<span class=\"market-status\" [class]=\"'market-status market-status--' + normalizedOutcome()\">\n  <span class=\"status-dot\" aria-hidden=\"true\"></span>\n  {{ label() }}\n</span>\n@if (showUnits()) {\n  <strong class=\"status-units\" [class]=\"unitsClass()\">{{ unitsLabel() }}</strong>\n}\n", styles: [".market-status {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: 8px;\n  padding: 4px 8px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  font-size: 10px;\n  font-weight: 600;\n\n  &--won {\n    background: #e9f8ef;\n    border-color: #b7e4c7;\n    color: #237a45;\n  }\n\n  &--lost {\n    background: #fff0f0;\n    border-color: #ffc9c9;\n    color: #c92a2a;\n  }\n\n  &--push {\n    background: #fff8e6;\n    border-color: #ffe09a;\n    color: #9a6700;\n  }\n\n  &--pending {\n    background: #f2f4f6;\n    border-color: #d9dee3;\n    color: #68717d;\n  }\n}\n\n.status-dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: currentColor;\n}\n\n.status-units {\n  display: block;\n  margin-top: 5px;\n  font-size: 12px;\n  font-weight: 700;\n\n  &--positive {\n    color: #237a45;\n  }\n\n  &--negative {\n    color: #c92a2a;\n  }\n\n  &--neutral {\n    color: #68717d;\n  }\n}\n\n:host-context([data-bs-theme='dark']) {\n  .market-status {\n    &--won {\n      background: #153a29;\n      border-color: #286245;\n      color: #79d69f;\n    }\n\n    &--lost {\n      background: #431f23;\n      border-color: #713138;\n      color: #ff929a;\n    }\n\n    &--push {\n      background: #3d3218;\n      border-color: #665221;\n      color: #f1c75b;\n    }\n\n    &--pending {\n      background: #292f36;\n      border-color: #444d57;\n      color: #aeb7c2;\n    }\n  }\n\n  .status-units {\n    &--positive {\n      color: #79d69f;\n    }\n\n    &--negative {\n      color: #ff929a;\n    }\n\n    &--neutral {\n      color: #aeb7c2;\n    }\n  }\n}\n"] }]
    }], null, { outcome: [{ type: i0.Input, args: [{ isSignal: true, alias: "outcome", required: false }] }], units: [{ type: i0.Input, args: [{ isSignal: true, alias: "units", required: false }] }], showUnits: [{ type: i0.Input, args: [{ isSignal: true, alias: "showUnits", required: false }] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MarketStatusComponent, { className: "MarketStatusComponent", filePath: "src/app/theme/shared/components/market-status/market-status.component.ts", lineNumber: 10 }); })();
//# sourceMappingURL=market-status.component.js.map