// angular import
import { Component, viewChild } from '@angular/core';
// project import
// third party
import { NgApexchartsModule } from 'ng-apexcharts';
import * as i0 from "@angular/core";
import * as i1 from "ng-apexcharts";
const _c0 = ["chart"];
export class SalesReportChartComponent {
    constructor() {
        this.chart = viewChild.required('chart');
        this.chartOptions = {
            chart: {
                type: 'bar',
                height: 430,
                toolbar: {
                    show: false
                },
                background: 'transparent'
            },
            plotOptions: {
                bar: {
                    columnWidth: '30%',
                    borderRadius: 4
                }
            },
            stroke: {
                show: true,
                width: 8,
                colors: ['transparent']
            },
            dataLabels: {
                enabled: false
            },
            legend: {
                position: 'top',
                horizontalAlign: 'right',
                show: true,
                fontFamily: `'Public Sans', sans-serif`,
                offsetX: 10,
                offsetY: 10,
                labels: {
                    useSeriesColors: false
                },
                itemMargin: {
                    horizontal: 15,
                    vertical: 5
                }
            },
            series: [
                {
                    name: 'Net Profit',
                    data: [180, 90, 135, 114, 120, 145]
                },
                {
                    name: 'Revenue',
                    data: [120, 45, 78, 150, 168, 99]
                }
            ],
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                labels: {
                    style: {
                        colors: ['#222', '#222', '#222', '#222', '#222', '#222']
                    }
                }
            },
            tooltip: {
                theme: 'light'
            },
            colors: ['#faad14', '#1677ff'],
            grid: {
                borderColor: '#f5f5f5'
            }
        };
    }
    static { this.ɵfac = function SalesReportChartComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SalesReportChartComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SalesReportChartComponent, selectors: [["app-sales-report-chart"]], viewQuery: function SalesReportChartComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuerySignal(ctx.chart, _c0, 5);
        } if (rf & 2) {
            i0.ɵɵqueryAdvance();
        } }, decls: 10, vars: 10, consts: [[1, "mb-3"], [1, "card"], [1, "card-body"], [1, "mb-2", "f-w-400", "text-muted"], [1, "mb-0"], ["id", "chart"], [3, "series", "chart", "dataLabels", "legend", "xaxis", "colors", "stroke", "grid", "plotOptions", "tooltip"]], template: function SalesReportChartComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "h5", 0);
            i0.ɵɵtext(1, "Sales Report");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "div", 1)(3, "div", 2)(4, "h6", 3);
            i0.ɵɵtext(5, "This Week Statistics");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "h3", 4);
            i0.ɵɵtext(7, "$7,650");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "div", 5);
            i0.ɵɵelement(9, "apx-chart", 6);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(9);
            i0.ɵɵproperty("series", ctx.chartOptions.series)("chart", ctx.chartOptions.chart)("dataLabels", ctx.chartOptions.dataLabels)("legend", ctx.chartOptions.legend)("xaxis", ctx.chartOptions.xaxis)("colors", ctx.chartOptions.colors)("stroke", ctx.chartOptions.stroke)("grid", ctx.chartOptions.grid)("plotOptions", ctx.chartOptions.plotOptions)("tooltip", ctx.chartOptions.tooltip);
        } }, dependencies: [NgApexchartsModule, i1.ChartComponent], styles: ["// This file is intentionally left empty to allow customers to add custom CSS if needed."] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SalesReportChartComponent, [{
        type: Component,
        args: [{ selector: 'app-sales-report-chart', imports: [NgApexchartsModule], template: "<h5 class=\"mb-3\">Sales Report</h5>\n<div class=\"card\">\n  <div class=\"card-body\">\n    <h6 class=\"mb-2 f-w-400 text-muted\">This Week Statistics</h6>\n    <h3 class=\"mb-0\">$7,650</h3>\n    <div id=\"chart\">\n      <apx-chart [series]=\"chartOptions.series!\" [chart]=\"chartOptions.chart!\" [dataLabels]=\"chartOptions.dataLabels!\"\n        [legend]=\"chartOptions.legend!\" [xaxis]=\"chartOptions.xaxis!\" [colors]=\"chartOptions.colors!\"\n        [stroke]=\"chartOptions.stroke!\" [grid]=\"chartOptions.grid!\" [plotOptions]=\"chartOptions.plotOptions!\"\n        [tooltip]=\"chartOptions.tooltip!\" />\n    </div>\n  </div>\n</div>", styles: ["// This file is intentionally left empty to allow customers to add custom CSS if needed.\n"] }]
    }], () => [], { chart: [{ type: i0.ViewChild, args: ['chart', { isSignal: true }] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SalesReportChartComponent, { className: "SalesReportChartComponent", filePath: "src/app/theme/shared/apexchart/sales-report-chart/sales-report-chart.component.ts", lineNumber: 15 }); })();
//# sourceMappingURL=sales-report-chart.component.js.map