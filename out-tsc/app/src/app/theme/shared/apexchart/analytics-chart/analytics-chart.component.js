// angular import
import { Component, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
// project import
// third party
import { NgApexchartsModule } from 'ng-apexcharts';
import * as i0 from "@angular/core";
import * as i1 from "ng-apexcharts";
const _c0 = ["chart"];
const _c1 = () => [];
export class AnalyticsChartComponent {
    constructor() {
        // public props
        this.chart = viewChild.required('chart');
        this.chartOptions = {
            chart: {
                type: 'line',
                height: 340,
                toolbar: {
                    show: false
                },
                background: 'transparent'
            },
            plotOptions: {
                bar: {
                    columnWidth: '45%',
                    borderRadius: 4
                }
            },
            colors: ['#FFB814'],
            stroke: {
                curve: 'smooth',
                width: 1.5
            },
            grid: {
                strokeDashArray: 4,
                borderColor: '#f5f5f5'
            },
            series: [
                {
                    data: [58, 90, 38, 83, 63, 75, 35, 55]
                }
            ],
            xaxis: {
                type: 'datetime',
                categories: [
                    '2018-05-19T00:00:00.000Z',
                    '2018-06-19T00:00:00.000Z',
                    '2018-07-19T01:30:00.000Z',
                    '2018-08-19T02:30:00.000Z',
                    '2018-09-19T03:30:00.000Z',
                    '2018-10-19T04:30:00.000Z',
                    '2018-11-19T05:30:00.000Z',
                    '2018-12-19T06:30:00.000Z'
                ],
                labels: {
                    format: 'MMM',
                    style: {
                        colors: ['#222', '#222', '#222', '#222', '#222', '#222', '#222']
                    }
                },
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                }
            },
            yaxis: {
                show: false
            },
            tooltip: {
                theme: 'light'
            }
        };
    }
    static { this.ɵfac = function AnalyticsChartComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AnalyticsChartComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AnalyticsChartComponent, selectors: [["app-analytics-chart"]], viewQuery: function AnalyticsChartComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuerySignal(ctx.chart, _c0, 5);
        } if (rf & 2) {
            i0.ɵɵqueryAdvance();
        } }, decls: 15, vars: 13, consts: [[1, "mb-3"], [1, "card"], [1, "list-group", "list-group-flush"], [1, "list-group-item", "list-group-item-action", "d-flex", "align-items-center", "justify-content-between", 3, "routerLink"], [1, "h5", "mb-0"], [1, "card-body", "px-2"], [1, "chart"], [3, "series", "chart", "plotOptions", "xaxis", "colors", "stroke", "yaxis", "grid", "tooltip"]], template: function AnalyticsChartComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "h5", 0);
            i0.ɵɵtext(1, "Analytics Report");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "div", 1)(3, "div", 2)(4, "a", 3);
            i0.ɵɵtext(5, " Company Finance Growth ");
            i0.ɵɵelementStart(6, "span", 4);
            i0.ɵɵtext(7, "+45.14%");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(8, "a", 3);
            i0.ɵɵtext(9, " Company Expenses Ratio ");
            i0.ɵɵelementStart(10, "span", 4);
            i0.ɵɵtext(11, "0.58%");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(12, "div", 5)(13, "div", 6);
            i0.ɵɵelement(14, "apx-chart", 7);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(11, _c1));
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(12, _c1));
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("series", ctx.chartOptions.series)("chart", ctx.chartOptions.chart)("plotOptions", ctx.chartOptions.plotOptions)("xaxis", ctx.chartOptions.xaxis)("colors", ctx.chartOptions.colors)("stroke", ctx.chartOptions.stroke)("yaxis", ctx.chartOptions.yaxis)("grid", ctx.chartOptions.grid)("tooltip", ctx.chartOptions.tooltip);
        } }, dependencies: [NgApexchartsModule, i1.ChartComponent, RouterLink], styles: ["// This file is intentionally left empty to allow customers to add custom CSS if needed."] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AnalyticsChartComponent, [{
        type: Component,
        args: [{ selector: 'app-analytics-chart', imports: [NgApexchartsModule, RouterLink], template: "<h5 class=\"mb-3\">Analytics Report</h5>\n<div class=\"card\">\n  <div class=\"list-group list-group-flush\">\n    <a [routerLink]=\"[]\"\n      class=\"list-group-item list-group-item-action d-flex align-items-center justify-content-between\">\n      Company Finance Growth\n      <span class=\"h5 mb-0\">+45.14%</span>\n    </a>\n    <a [routerLink]=\"[]\"\n      class=\"list-group-item list-group-item-action d-flex align-items-center justify-content-between\">\n      Company Expenses Ratio\n      <span class=\"h5 mb-0\">0.58%</span>\n    </a>\n  </div>\n  <div class=\"card-body px-2\">\n    <div class=\"chart\">\n      <apx-chart [series]=\"chartOptions.series!\" [chart]=\"chartOptions.chart!\" [plotOptions]=\"chartOptions.plotOptions!\"\n        [xaxis]=\"chartOptions.xaxis!\" [colors]=\"chartOptions.colors!\" [stroke]=\"chartOptions.stroke!\"\n        [yaxis]=\"chartOptions.yaxis!\" [grid]=\"chartOptions.grid!\" [tooltip]=\"chartOptions.tooltip!\" />\n    </div>\n  </div>\n</div>", styles: ["// This file is intentionally left empty to allow customers to add custom CSS if needed.\n"] }]
    }], () => [], { chart: [{ type: i0.ViewChild, args: ['chart', { isSignal: true }] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AnalyticsChartComponent, { className: "AnalyticsChartComponent", filePath: "src/app/theme/shared/apexchart/analytics-chart/analytics-chart.component.ts", lineNumber: 16 }); })();
//# sourceMappingURL=analytics-chart.component.js.map