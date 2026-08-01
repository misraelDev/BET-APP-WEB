// angular import
import { Component, viewChild } from '@angular/core';
// project import
// third party
import { NgApexchartsModule } from 'ng-apexcharts';
import { CardComponent } from 'src/app/theme/shared/components/card/card.component';
import * as i0 from "@angular/core";
import * as i1 from "ng-apexcharts";
const _c0 = ["chart"];
export class IncomeOverviewChartComponent {
    constructor() {
        // public props
        this.chart = viewChild.required('chart');
        this.chartOptions = {
            chart: {
                type: 'bar',
                height: 365,
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
            dataLabels: {
                enabled: false
            },
            series: [
                {
                    data: [80, 95, 70, 42, 65, 55, 78]
                }
            ],
            stroke: {
                curve: 'smooth',
                width: 2
            },
            xaxis: {
                categories: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                },
                labels: {
                    style: {
                        colors: ['#8c8c8c', '#8c8c8c', '#8c8c8c', '#8c8c8c', '#8c8c8c', '#8c8c8c', '#8c8c8c']
                    }
                }
            },
            yaxis: {
                show: false
            },
            colors: ['#5cdbd3'],
            grid: {
                show: false
            },
            tooltip: {
                theme: 'light'
            }
        };
    }
    static { this.ɵfac = function IncomeOverviewChartComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || IncomeOverviewChartComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: IncomeOverviewChartComponent, selectors: [["app-income-overview-chart"]], viewQuery: function IncomeOverviewChartComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuerySignal(ctx.chart, _c0, 5);
        } if (rf & 2) {
            i0.ɵɵqueryAdvance();
        } }, decls: 8, vars: 11, consts: [[1, "mb-3", "mt-2"], [3, "showHeader"], [1, "mb-2", "f-w-400", "text-muted"], [1, "mb-3"], [3, "series", "chart", "plotOptions", "dataLabels", "xaxis", "colors", "stroke", "yaxis", "grid", "tooltip"]], template: function IncomeOverviewChartComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "h5", 0);
            i0.ɵɵtext(1, "Income Overview");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "app-card", 1)(3, "h6", 2);
            i0.ɵɵtext(4, "This Week Statistics");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "h3", 3);
            i0.ɵɵtext(6, "$7,650");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(7, "apx-chart", 4);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("showHeader", false);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("series", ctx.chartOptions.series)("chart", ctx.chartOptions.chart)("plotOptions", ctx.chartOptions.plotOptions)("dataLabels", ctx.chartOptions.dataLabels)("xaxis", ctx.chartOptions.xaxis)("colors", ctx.chartOptions.colors)("stroke", ctx.chartOptions.stroke)("yaxis", ctx.chartOptions.yaxis)("grid", ctx.chartOptions.grid)("tooltip", ctx.chartOptions.tooltip);
        } }, dependencies: [CardComponent, NgApexchartsModule, i1.ChartComponent], styles: ["// This file is intentionally left empty to allow customers to add custom CSS if needed."] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IncomeOverviewChartComponent, [{
        type: Component,
        args: [{ selector: 'app-income-overview-chart', imports: [CardComponent, NgApexchartsModule], template: "<h5 class=\"mb-3 mt-2\">Income Overview</h5>\n<app-card [showHeader]=\"false\">\n  <h6 class=\"mb-2 f-w-400 text-muted\">This Week Statistics</h6>\n  <h3 class=\"mb-3\">$7,650</h3>\n  <apx-chart [series]=\"chartOptions.series!\" [chart]=\"chartOptions.chart!\" [plotOptions]=\"chartOptions.plotOptions!\"\n    [dataLabels]=\"chartOptions.dataLabels!\" [xaxis]=\"chartOptions.xaxis!\" [colors]=\"chartOptions.colors!\"\n    [stroke]=\"chartOptions.stroke!\" [yaxis]=\"chartOptions.yaxis!\" [grid]=\"chartOptions.grid!\"\n    [tooltip]=\"chartOptions.tooltip!\" />\n</app-card>", styles: ["// This file is intentionally left empty to allow customers to add custom CSS if needed.\n"] }]
    }], () => [], { chart: [{ type: i0.ViewChild, args: ['chart', { isSignal: true }] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(IncomeOverviewChartComponent, { className: "IncomeOverviewChartComponent", filePath: "src/app/theme/shared/apexchart/income-overview-chart/income-overview-chart.component.ts", lineNumber: 16 }); })();
//# sourceMappingURL=income-overview-chart.component.js.map