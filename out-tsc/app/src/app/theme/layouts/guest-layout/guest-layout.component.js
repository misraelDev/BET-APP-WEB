import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class GuestLayoutComponent {
    static { this.ɵfac = function GuestLayoutComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || GuestLayoutComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GuestLayoutComponent, selectors: [["app-guest-layout"]], decls: 1, vars: 0, template: function GuestLayoutComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "router-outlet");
        } }, dependencies: [RouterModule, i1.RouterOutlet], styles: ["// This file is intentionally left empty to allow customers to add custom CSS if needed."] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GuestLayoutComponent, [{
        type: Component,
        args: [{ selector: 'app-guest-layout', imports: [RouterModule], template: "<router-outlet />", styles: ["// This file is intentionally left empty to allow customers to add custom CSS if needed.\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(GuestLayoutComponent, { className: "GuestLayoutComponent", filePath: "src/app/theme/layouts/guest-layout/guest-layout.component.ts", lineNumber: 10 }); })();
//# sourceMappingURL=guest-layout.component.js.map