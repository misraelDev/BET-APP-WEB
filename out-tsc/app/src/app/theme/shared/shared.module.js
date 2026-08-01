import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// project import
import { CardComponent } from './components/card/card.component';
// third party
import { NgScrollbarModule } from 'ngx-scrollbar';
import { IconDirective } from '@ant-design/icons-angular';
// bootstrap import
import { NgbDropdownModule, NgbNavModule, NgbTooltipModule, NgbModule, NgbAccordionModule, NgbCollapseModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import * as i0 from "@angular/core";
export class SharedModule {
    static { this.ɵfac = function SharedModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SharedModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: SharedModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
            NgbDropdownModule,
            NgbNavModule,
            NgbTooltipModule,
            NgbModule,
            NgbAccordionModule,
            NgbCollapseModule,
            NgbDatepickerModule,
            NgScrollbarModule,
            FormsModule,
            ReactiveFormsModule,
            CardComponent, CommonModule,
            NgbDropdownModule,
            NgbNavModule,
            NgbTooltipModule,
            NgbModule,
            NgbAccordionModule,
            NgbCollapseModule,
            NgbDatepickerModule,
            NgScrollbarModule,
            FormsModule,
            ReactiveFormsModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SharedModule, [{
        type: NgModule,
        args: [{
                declarations: [],
                imports: [
                    CommonModule,
                    NgbDropdownModule,
                    NgbNavModule,
                    NgbTooltipModule,
                    NgbModule,
                    NgbAccordionModule,
                    NgbCollapseModule,
                    NgbDatepickerModule,
                    NgScrollbarModule,
                    FormsModule,
                    ReactiveFormsModule,
                    CardComponent,
                    IconDirective
                ],
                exports: [
                    CommonModule,
                    NgbDropdownModule,
                    NgbNavModule,
                    NgbTooltipModule,
                    NgbModule,
                    NgbAccordionModule,
                    NgbCollapseModule,
                    NgbDatepickerModule,
                    NgScrollbarModule,
                    FormsModule,
                    ReactiveFormsModule,
                    CardComponent,
                    IconDirective
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SharedModule, { imports: [CommonModule,
        NgbDropdownModule,
        NgbNavModule,
        NgbTooltipModule,
        NgbModule,
        NgbAccordionModule,
        NgbCollapseModule,
        NgbDatepickerModule,
        NgScrollbarModule,
        FormsModule,
        ReactiveFormsModule,
        CardComponent,
        IconDirective], exports: [CommonModule,
        NgbDropdownModule,
        NgbNavModule,
        NgbTooltipModule,
        NgbModule,
        NgbAccordionModule,
        NgbCollapseModule,
        NgbDatepickerModule,
        NgScrollbarModule,
        FormsModule,
        ReactiveFormsModule,
        CardComponent,
        IconDirective] }); })();
//# sourceMappingURL=shared.module.js.map