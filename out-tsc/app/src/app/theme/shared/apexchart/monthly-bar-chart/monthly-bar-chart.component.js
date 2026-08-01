// angular import
import { Component, viewChild } from '@angular/core';
// project import
// third party
import { NgApexchartsModule } from 'ng-apexcharts';
import * as i0 from "@angular/core";
import * as i1 from "ng-apexcharts";
const _c0 = ["chart"];
export class MonthlyBarChartComponent {
    constructor() {
        // public props
        this.chart = viewChild.required('chart');
        this.chartOptions = {
            chart: {
                height: 450,
                type: 'area',
                toolbar: {
                    show: false
                },
                background: 'transparent'
            },
            dataLabels: {
                enabled: false
            },
            colors: ['#1677ff', '#0050b3'],
            series: [
                {
                    name: 'Page Views',
                    data: [0, 86, 28, 115, 48, 210, 136]
                },
                {
                    name: 'Sessions',
                    data: [0, 43, 14, 56, 24, 105, 68]
                }
            ],
            stroke: {
                curve: 'smooth',
                width: 2
            },
            xaxis: {
                categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                labels: {
                    style: {
                        colors: [
                            '#8c8c8c',
                            '#8c8c8c',
                            '#8c8c8c',
                            '#8c8c8c',
                            '#8c8c8c',
                            '#8c8c8c',
                            '#8c8c8c',
                            '#8c8c8c',
                            '#8c8c8c',
                            '#8c8c8c',
                            '#8c8c8c',
                            '#8c8c8c'
                        ]
                    }
                },
                axisBorder: {
                    show: true,
                    color: '#f0f0f0'
                },
                tickAmount: 7
            },
            yaxis: {
                labels: {
                    style: {
                        colors: ['#8c8c8c']
                    }
                }
            },
            grid: {
                strokeDashArray: 0,
                borderColor: '#f5f5f5'
            },
            theme: {
                mode: 'light'
            }
        };
    }
    // life cycle hook
    ngOnInit() {
        document.querySelector('.chart-income.week')?.classList.add('active');
    }
    // public method
    toggleActive(value) {
        this.chartOptions.series = [
            {
                name: 'Page Views',
                data: value === 'month' ? [76, 85, 101, 98, 87, 105, 91, 114, 94, 86, 115, 35] : [31, 40, 28, 51, 42, 109, 100]
            },
            {
                name: 'Sessions',
                data: value === 'month' ? [110, 60, 150, 35, 60, 36, 26, 45, 65, 52, 53, 41] : [11, 32, 45, 32, 34, 52, 41]
            }
        ];
        const xaxis = { ...this.chartOptions.xaxis };
        xaxis.categories =
            value === 'month'
                ? ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        xaxis.tickAmount = value === 'month' ? 11 : 7;
        this.chartOptions = { ...this.chartOptions, xaxis };
        if (value === 'month') {
            document.querySelector('.chart-income.month')?.classList.add('active');
            document.querySelector('.chart-income.week')?.classList.remove('active');
        }
        else {
            document.querySelector('.chart-income.week')?.classList.add('active');
            document.querySelector('.chart-income.month')?.classList.remove('active');
        }
    }
    static { this.ɵfac = function MonthlyBarChartComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || MonthlyBarChartComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MonthlyBarChartComponent, selectors: [["app-monthly-bar-chart"]], viewQuery: function MonthlyBarChartComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuerySignal(ctx.chart, _c0, 5);
        } if (rf & 2) {
            i0.ɵɵqueryAdvance();
        } }, decls: 12, vars: 9, consts: [[1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "mb-0"], [1, "d-flex", "gap-2", "chart-income"], [1, "chart-income", "month", 3, "click"], [1, "chart-income", "week", 3, "click"], [1, "card"], [1, "card-body"], ["id", "chart"], [3, "series", "chart", "dataLabels", "xaxis", "colors", "stroke", "yaxis", "grid", "theme"]], template: function MonthlyBarChartComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "h5", 1);
            i0.ɵɵtext(2, "Unique Visitor");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div", 2)(4, "div", 3);
            i0.ɵɵlistener("click", function MonthlyBarChartComponent_Template_div_click_4_listener() { return ctx.toggleActive("month"); });
            i0.ɵɵtext(5, "Month");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 4);
            i0.ɵɵlistener("click", function MonthlyBarChartComponent_Template_div_click_6_listener() { return ctx.toggleActive("week"); });
            i0.ɵɵtext(7, "Week");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(8, "div", 5)(9, "div", 6)(10, "div", 7);
            i0.ɵɵelement(11, "apx-chart", 8);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(11);
            i0.ɵɵproperty("series", ctx.chartOptions.series)("chart", ctx.chartOptions.chart)("dataLabels", ctx.chartOptions.dataLabels)("xaxis", ctx.chartOptions.xaxis)("colors", ctx.chartOptions.colors)("stroke", ctx.chartOptions.stroke)("yaxis", ctx.chartOptions.yaxis)("grid", ctx.chartOptions.grid)("theme", ctx.chartOptions.theme);
        } }, dependencies: [NgApexchartsModule, i1.ChartComponent], styles: [".chart-income[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  outline: 0px;\n  border: 0px;\n  margin: 0px;\n  cursor: pointer;\n  padding: 4px 5px;\n  border-radius: 4px;\n  color: var(--bs-gray);\n  .active {\n    outline: 0px;\n    margin: 0px;\n    padding: 3px 9px;\n    border: 1px solid var(--bs-primary);\n    color: var(--bs-primary);\n  }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MonthlyBarChartComponent, [{
        type: Component,
        args: [{ selector: 'app-monthly-bar-chart', imports: [NgApexchartsModule], template: "<div class=\"d-flex align-items-center justify-content-between mb-3\">\n  <h5 class=\"mb-0\">Unique Visitor</h5>\n  <div class=\"d-flex gap-2 chart-income\">\n    <div class=\"chart-income month\" (click)=\"toggleActive('month')\">Month</div>\n    <div class=\"chart-income week\" (click)=\"toggleActive('week')\">Week</div>\n  </div>\n</div>\n<div class=\"card\">\n  <div class=\"card-body\">\n    <div id=\"chart\">\n      <apx-chart [series]=\"chartOptions.series!\" [chart]=\"chartOptions.chart!\" [dataLabels]=\"chartOptions.dataLabels!\"\n        [xaxis]=\"chartOptions.xaxis!\" [colors]=\"chartOptions.colors!\" [stroke]=\"chartOptions.stroke!\"\n        [yaxis]=\"chartOptions.yaxis!\" [grid]=\"chartOptions.grid!\" [theme]=\"chartOptions.theme!\" />\n    </div>\n  </div>\n</div>", styles: [".chart-income {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  outline: 0px;\n  border: 0px;\n  margin: 0px;\n  cursor: pointer;\n  padding: 4px 5px;\n  border-radius: 4px;\n  color: var(--bs-gray);\n  .active {\n    outline: 0px;\n    margin: 0px;\n    padding: 3px 9px;\n    border: 1px solid var(--bs-primary);\n    color: var(--bs-primary);\n  }\n}\n"] }]
    }], () => [], { chart: [{ type: i0.ViewChild, args: ['chart', { isSignal: true }] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MonthlyBarChartComponent, { className: "MonthlyBarChartComponent", filePath: "src/app/theme/shared/apexchart/monthly-bar-chart/monthly-bar-chart.component.ts", lineNumber: 15 }); })();
//# sourceMappingURL=monthly-bar-chart.component.js.map