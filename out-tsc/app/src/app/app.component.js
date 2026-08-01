// angular import
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// project import
import { SpinnerComponent } from './theme/shared/components/spinner/spinner.component';
import * as i0 from "@angular/core";
export class AppComponent {
    constructor() {
        // public props
        this.title = 'mantis-free-version';
    }
    static { this.ɵfac = function AppComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AppComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "router-outlet");
            i0.ɵɵelement(1, "app-spinner");
            i0.ɵɵelementEnd();
        } }, dependencies: [RouterOutlet, SpinnerComponent], styles: ["// This file is intentionally left empty to allow customers to add custom CSS if needed."] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppComponent, [{
        type: Component,
        args: [{ selector: 'app-root', imports: [RouterOutlet, SpinnerComponent], template: "<router-outlet><app-spinner /></router-outlet>", styles: ["// This file is intentionally left empty to allow customers to add custom CSS if needed.\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 14 }); })();
//# sourceMappingURL=app.component.js.map