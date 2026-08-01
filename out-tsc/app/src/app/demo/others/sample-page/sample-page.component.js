// angular import
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// project import
import { CardComponent } from 'src/app/theme/shared/components/card/card.component';
import * as i0 from "@angular/core";
export class SamplePageComponent {
    static { this.ɵfac = function SamplePageComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SamplePageComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SamplePageComponent, selectors: [["app-sample-page"]], decls: 5, vars: 0, consts: [[1, "row"], [1, "col-sm-12"], ["cardTitle", "Hello"]], template: function SamplePageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "app-card", 2)(3, "p");
            i0.ɵɵtext(4, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dignissimos nemo animi quisquam, fugit repellat velit? Doloremque maxime eveniet autem repellendus officia est! Ex dolore, quae reprehenderit enim vel reiciendis? ");
            i0.ɵɵelementEnd()()()();
        } }, dependencies: [CommonModule, CardComponent], styles: ["// This file is intentionally left empty to allow customers to add custom CSS if needed."] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SamplePageComponent, [{
        type: Component,
        args: [{ selector: 'app-sample-page', imports: [CommonModule, CardComponent], template: "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-card cardTitle=\"Hello\">\n      <p>\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dignissimos nemo animi quisquam, fugit repellat velit? Doloremque\n        maxime eveniet autem repellendus officia est! Ex dolore, quae reprehenderit enim vel reiciendis?\n      </p>\n    </app-card>\n  </div>\n</div>\n", styles: ["// This file is intentionally left empty to allow customers to add custom CSS if needed.\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SamplePageComponent, { className: "SamplePageComponent", filePath: "src/app/demo/others/sample-page/sample-page.component.ts", lineNumber: 15 }); })();
//# sourceMappingURL=sample-page.component.js.map