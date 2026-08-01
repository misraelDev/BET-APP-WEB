import { CommonModule } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { environment } from 'src/environments/environment';
import { CardComponent } from 'src/app/theme/shared/components/card/card.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "ng-apexcharts";
const _forTrack0 = ($index, $item) => $item.market;
const _forTrack1 = ($index, $item) => $item.date + $item.home_team;
function DefaultComponent_Conditional_23_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "button", 13);
    i0.ɵɵlistener("click", function DefaultComponent_Conditional_23_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.loadStats()); });
    i0.ɵɵtext(3, "Reintentar");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.error, " ");
} }
function DefaultComponent_Conditional_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵtext(1, " No hay estad\u00EDsticas disponibles para el periodo seleccionado. ");
    i0.ɵɵelementEnd();
} }
function DefaultComponent_Conditional_25_For_56_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "td");
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "td");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "td", 35);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const market_r3 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(market_r3.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind2(6, 7, market_r3.hit_rate, "1.1-1"), "%");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate3("", market_r3.won, " / ", market_r3.lost, " / ", market_r3.push);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", ctx_r1.unitsClass(market_r3.net_units));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.units(market_r3.net_units));
} }
function DefaultComponent_Conditional_25_For_61_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 33)(1, "div")(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "strong");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "b", 36);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2("", item_r4.league, " \u00B7 ", i0.ɵɵpipeBind2(4, 6, item_r4.date, "dd MMM"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2("", item_r4.away_team, " vs ", item_r4.home_team);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", ctx_r1.unitsClass(item_r4.net_units));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.units(item_r4.net_units));
} }
function DefaultComponent_Conditional_25_ForEmpty_62_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 34);
    i0.ɵɵtext(1, "Todav\u00EDa no hay predicciones liquidadas.");
    i0.ɵɵelementEnd();
} }
function DefaultComponent_Conditional_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12)(1, "div", 14)(2, "app-card", 15)(3, "span", 16);
    i0.ɵɵtext(4, "Balance neto");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "strong", 17);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "small");
    i0.ɵɵtext(8, "Unidades liquidadas");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "div", 14)(10, "app-card", 15)(11, "span", 16);
    i0.ɵɵtext(12, "Tasa de acierto");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "strong", 18);
    i0.ɵɵtext(14);
    i0.ɵɵpipe(15, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "small");
    i0.ɵɵtext(17, "Sin contar apuestas nulas");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(18, "div", 14)(19, "app-card", 15)(20, "span", 16);
    i0.ɵɵtext(21, "Apuestas evaluadas");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "strong", 18);
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "small");
    i0.ɵɵtext(25);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(26, "div", 14)(27, "app-card", 15)(28, "span", 16);
    i0.ɵɵtext(29, "Predicciones liquidadas");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "strong", 18);
    i0.ɵɵtext(31);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "small");
    i0.ɵɵtext(33);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(34, "div", 19)(35, "app-card", 20);
    i0.ɵɵelement(36, "apx-chart", 21);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(37, "div", 22)(38, "app-card", 23);
    i0.ɵɵelement(39, "apx-chart", 24);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(40, "div", 25)(41, "app-card", 26)(42, "div", 27)(43, "table", 28)(44, "thead")(45, "tr")(46, "th");
    i0.ɵɵtext(47, "Mercado");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(48, "th");
    i0.ɵɵtext(49, "Acierto");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(50, "th");
    i0.ɵɵtext(51, "G/P/N");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(52, "th", 29);
    i0.ɵɵtext(53, "Balance");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(54, "tbody");
    i0.ɵɵrepeaterCreate(55, DefaultComponent_Conditional_25_For_56_Template, 11, 10, "tr", null, _forTrack0);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(57, "div", 30)(58, "app-card", 31)(59, "div", 32);
    i0.ɵɵrepeaterCreate(60, DefaultComponent_Conditional_25_For_61_Template, 9, 9, "div", 33, _forTrack1, false, DefaultComponent_Conditional_25_ForEmpty_62_Template, 2, 0, "div", 34);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const data_r5 = ctx;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("showHeader", false);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngClass", ctx_r1.unitsClass(data_r5.summary.net_units));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.units(data_r5.summary.net_units));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("showHeader", false);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind2(15, 32, data_r5.summary.hit_rate, "1.1-1"), "%");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("showHeader", false);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(data_r5.summary.evaluated_bets);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", data_r5.summary.won, " acertadas \u00B7 ", data_r5.summary.lost, " falladas");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("showHeader", false);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(data_r5.summary.settled_predictions);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", data_r5.summary.push, " apuestas nulas");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("chart", ctx_r1.balanceChart.chart)("series", ctx_r1.balanceChart.series)("xaxis", ctx_r1.balanceChart.xaxis)("yaxis", ctx_r1.balanceChart.yaxis)("colors", ctx_r1.balanceChart.colors)("stroke", ctx_r1.balanceChart.stroke)("fill", ctx_r1.balanceChart.fill)("dataLabels", ctx_r1.balanceChart.dataLabels)("grid", ctx_r1.balanceChart.grid)("tooltip", ctx_r1.balanceChart.tooltip);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("chart", ctx_r1.marketChart.chart)("series", ctx_r1.marketChart.series)("xaxis", ctx_r1.marketChart.xaxis)("yaxis", ctx_r1.marketChart.yaxis)("colors", ctx_r1.marketChart.colors)("plotOptions", ctx_r1.marketChart.plotOptions)("dataLabels", ctx_r1.marketChart.dataLabels)("grid", ctx_r1.marketChart.grid)("tooltip", ctx_r1.marketChart.tooltip);
    i0.ɵɵadvance(16);
    i0.ɵɵrepeater(data_r5.markets);
    i0.ɵɵadvance(5);
    i0.ɵɵrepeater(data_r5.recent);
} }
export class DefaultComponent {
    constructor() {
        this.http = inject(HttpClient);
        this.cdr = inject(ChangeDetectorRef);
        this.statsUrl = `${environment.apiUrl}/api/v1/baseball/stats`;
        this.league = 'all';
        this.days = 30;
        this.loading = false;
        this.error = '';
        this.stats = null;
        this.balanceChart = {};
        this.marketChart = {};
    }
    ngOnInit() {
        this.loadStats();
    }
    loadStats() {
        this.loading = true;
        this.error = '';
        const params = new HttpParams()
            .set('league', this.league)
            .set('days', this.days);
        this.http.get(this.statsUrl, { params }).subscribe({
            next: (stats) => {
                this.stats = stats;
                this.buildCharts(stats);
                this.loading = false;
                this.cdr.detectChanges();
            },
            error: (error) => {
                this.error =
                    error?.status === 0
                        ? 'El backend no está disponible en http://127.0.0.1:8000.'
                        : error?.error?.detail || 'No fue posible cargar las estadísticas.';
                this.loading = false;
                this.cdr.detectChanges();
            }
        });
    }
    units(value) {
        return value > 0 ? `+${value}` : `${value}`;
    }
    unitsClass(value) {
        return value > 0 ? 'metric-positive' : value < 0 ? 'metric-negative' : 'text-muted';
    }
    buildCharts(stats) {
        const dark = document.documentElement.getAttribute('data-bs-theme') === 'dark';
        const labelColor = dark ? '#aeb7c2' : '#6b7280';
        const gridColor = dark ? '#343c46' : '#eef0f2';
        this.balanceChart = {
            chart: { type: 'area', height: 330, toolbar: { show: false }, background: 'transparent' },
            series: [{ name: 'Balance', data: stats.daily.map((row) => row.net_units) }],
            xaxis: {
                categories: stats.daily.map((row) => row.date),
                labels: { style: { colors: stats.daily.map(() => labelColor) } },
                axisBorder: { color: gridColor }
            },
            yaxis: { labels: { style: { colors: [labelColor] } } },
            colors: ['#299c95'],
            stroke: { curve: 'smooth', width: 2 },
            fill: { type: 'gradient', gradient: { opacityFrom: 0.35, opacityTo: 0.04 } },
            dataLabels: { enabled: false },
            grid: { borderColor: gridColor },
            tooltip: { theme: dark ? 'dark' : 'light' }
        };
        this.marketChart = {
            chart: { type: 'bar', height: 330, toolbar: { show: false }, background: 'transparent' },
            series: [{ name: 'Acierto', data: stats.markets.map((row) => row.hit_rate) }],
            xaxis: {
                categories: stats.markets.map((row) => row.label),
                labels: { style: { colors: stats.markets.map(() => labelColor) } }
            },
            yaxis: {
                max: 100,
                labels: { formatter: (value) => `${value}%`, style: { colors: [labelColor] } }
            },
            colors: ['#e0a82e'],
            plotOptions: { bar: { borderRadius: 4, columnWidth: '42%' } },
            dataLabels: { enabled: false },
            grid: { borderColor: gridColor },
            tooltip: { theme: dark ? 'dark' : 'light', y: { formatter: (value) => `${value}%` } }
        };
    }
    static { this.ɵfac = function DefaultComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DefaultComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DefaultComponent, selectors: [["app-default"]], decls: 26, vars: 9, consts: [[1, "dashboard-toolbar"], [1, "mb-1"], [1, "mb-0", "text-muted"], [1, "dashboard-filters"], ["aria-label", "Liga", 1, "form-select", 3, "ngModelChange", "change", "ngModel"], ["value", "all"], ["value", "mlb"], ["value", "kbo"], ["aria-label", "Periodo", 1, "form-select", 3, "ngModelChange", "change", "ngModel"], [3, "ngValue"], ["role", "alert", 1, "alert", "alert-danger"], [1, "dashboard-empty"], [1, "row"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-danger", "ms-3", 3, "click"], [1, "col-md-6", "col-xl-3"], ["blockClass", "dashboard-card", 3, "showHeader"], [1, "metric-label"], [1, "metric-value", 3, "ngClass"], [1, "metric-value"], [1, "col-xl-8"], ["cardTitle", "Evoluci\u00F3n del balance"], [3, "chart", "series", "xaxis", "yaxis", "colors", "stroke", "fill", "dataLabels", "grid", "tooltip"], [1, "col-xl-4"], ["cardTitle", "Acierto por mercado"], [3, "chart", "series", "xaxis", "yaxis", "colors", "plotOptions", "dataLabels", "grid", "tooltip"], [1, "col-xl-7"], ["cardTitle", "Rendimiento por mercado", "blockClass", "p-0"], [1, "table-responsive"], [1, "table", "align-middle", "mb-0"], [1, "text-end"], [1, "col-xl-5"], ["cardTitle", "Liquidaciones recientes", "blockClass", "p-0"], [1, "recent-list"], [1, "recent-item"], [1, "empty-dashboard"], [1, "text-end", 3, "ngClass"], [3, "ngClass"]], template: function DefaultComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div")(2, "h5", 1);
            i0.ɵɵtext(3, "Rendimiento de predicciones");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "p", 2);
            i0.ɵɵtext(5, "Resultados liquidados en unidades fijas de 100.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(6, "div", 3)(7, "select", 4);
            i0.ɵɵtwoWayListener("ngModelChange", function DefaultComponent_Template_select_ngModelChange_7_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.league, $event) || (ctx.league = $event); return $event; });
            i0.ɵɵlistener("change", function DefaultComponent_Template_select_change_7_listener() { return ctx.loadStats(); });
            i0.ɵɵelementStart(8, "option", 5);
            i0.ɵɵtext(9, "Todas las ligas");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "option", 6);
            i0.ɵɵtext(11, "MLB");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "option", 7);
            i0.ɵɵtext(13, "KBO");
            i0.ɵɵelementEnd()();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementStart(14, "select", 8);
            i0.ɵɵtwoWayListener("ngModelChange", function DefaultComponent_Template_select_ngModelChange_14_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.days, $event) || (ctx.days = $event); return $event; });
            i0.ɵɵlistener("change", function DefaultComponent_Template_select_change_14_listener() { return ctx.loadStats(); });
            i0.ɵɵelementStart(15, "option", 9);
            i0.ɵɵtext(16, "7 d\u00EDas");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "option", 9);
            i0.ɵɵtext(18, "30 d\u00EDas");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "option", 9);
            i0.ɵɵtext(20, "90 d\u00EDas");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "option", 9);
            i0.ɵɵtext(22, "1 a\u00F1o");
            i0.ɵɵelementEnd()();
            i0.ɵɵcontrolCreate();
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(23, DefaultComponent_Conditional_23_Template, 4, 1, "div", 10);
            i0.ɵɵconditionalCreate(24, DefaultComponent_Conditional_24_Template, 2, 0, "div", 11);
            i0.ɵɵconditionalCreate(25, DefaultComponent_Conditional_25_Template, 63, 35, "div", 12);
        } if (rf & 2) {
            let tmp_10_0;
            i0.ɵɵadvance(7);
            i0.ɵɵtwoWayProperty("ngModel", ctx.league);
            i0.ɵɵcontrol();
            i0.ɵɵadvance(7);
            i0.ɵɵtwoWayProperty("ngModel", ctx.days);
            i0.ɵɵcontrol();
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngValue", 7);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngValue", 30);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngValue", 90);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngValue", 365);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.error ? 23 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(!ctx.loading && !ctx.error && !ctx.stats ? 24 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional((tmp_10_0 = ctx.stats) ? 25 : -1, tmp_10_0);
        } }, dependencies: [CommonModule, i1.NgClass, FormsModule, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.NgModel, CardComponent, NgApexchartsModule, i3.ChartComponent, i1.DecimalPipe, i1.DatePipe], styles: [".dashboard-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n\n.dashboard-filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n\n  .form-select {\n    min-width: 150px;\n  }\n}\n\n.metric-label[_ngcontent-%COMP%], \n.metric-value[_ngcontent-%COMP%], \n.dashboard-card[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.metric-label[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  color: var(--bs-secondary-color);\n  font-size: 12px;\n}\n\n.metric-value[_ngcontent-%COMP%] {\n  margin-bottom: 6px;\n  font-size: 28px;\n  font-weight: 650;\n}\n\n.dashboard-card[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--bs-secondary-color);\n}\n\n.metric-positive[_ngcontent-%COMP%] {\n  color: #237a45 !important;\n}\n\n.metric-negative[_ngcontent-%COMP%] {\n  color: #c92a2a !important;\n}\n\n.recent-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  min-height: 65px;\n  padding: 12px 20px;\n  border-bottom: 1px solid var(--bs-border-color);\n\n  &:last-child {\n    border-bottom: 0;\n  }\n\n  span,\n  strong {\n    display: block;\n  }\n\n  span {\n    color: var(--bs-secondary-color);\n    font-size: 10px;\n  }\n\n  strong {\n    margin-top: 3px;\n    font-size: 12px;\n  }\n}\n\n.empty-dashboard[_ngcontent-%COMP%] {\n  padding: 48px 20px;\n  color: var(--bs-secondary-color);\n  text-align: center;\n}\n\n.dashboard-empty[_ngcontent-%COMP%] {\n  padding: 64px 20px;\n  border: 1px solid var(--bs-border-color);\n  border-radius: 6px;\n  color: var(--bs-secondary-color);\n  text-align: center;\n}\n\n[data-bs-theme='dark'][_nghost-%COMP%], [data-bs-theme='dark']   [_nghost-%COMP%] {\n  .metric-positive {\n    color: #79d69f !important;\n  }\n\n  .metric-negative {\n    color: #ff929a !important;\n  }\n}\n\n@media (max-width: 767.98px) {\n  .dashboard-toolbar[_ngcontent-%COMP%], \n   .dashboard-filters[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n  }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DefaultComponent, [{
        type: Component,
        args: [{ selector: 'app-default', imports: [CommonModule, FormsModule, CardComponent, NgApexchartsModule], template: "<div class=\"dashboard-toolbar\">\n  <div>\n    <h5 class=\"mb-1\">Rendimiento de predicciones</h5>\n    <p class=\"mb-0 text-muted\">Resultados liquidados en unidades fijas de 100.</p>\n  </div>\n  <div class=\"dashboard-filters\">\n    <select class=\"form-select\" [(ngModel)]=\"league\" (change)=\"loadStats()\" aria-label=\"Liga\">\n      <option value=\"all\">Todas las ligas</option>\n      <option value=\"mlb\">MLB</option>\n      <option value=\"kbo\">KBO</option>\n    </select>\n    <select class=\"form-select\" [(ngModel)]=\"days\" (change)=\"loadStats()\" aria-label=\"Periodo\">\n      <option [ngValue]=\"7\">7 d\u00EDas</option>\n      <option [ngValue]=\"30\">30 d\u00EDas</option>\n      <option [ngValue]=\"90\">90 d\u00EDas</option>\n      <option [ngValue]=\"365\">1 a\u00F1o</option>\n    </select>\n  </div>\n</div>\n\n@if (error) {\n  <div class=\"alert alert-danger\" role=\"alert\">\n    {{ error }}\n    <button type=\"button\" class=\"btn btn-sm btn-outline-danger ms-3\" (click)=\"loadStats()\">Reintentar</button>\n  </div>\n}\n\n@if (!loading && !error && !stats) {\n  <div class=\"dashboard-empty\">\n    No hay estad\u00EDsticas disponibles para el periodo seleccionado.\n  </div>\n}\n\n@if (stats; as data) {\n  <div class=\"row\">\n    <div class=\"col-md-6 col-xl-3\">\n      <app-card [showHeader]=\"false\" blockClass=\"dashboard-card\">\n        <span class=\"metric-label\">Balance neto</span>\n        <strong class=\"metric-value\" [ngClass]=\"unitsClass(data.summary.net_units)\">{{ units(data.summary.net_units) }}</strong>\n        <small>Unidades liquidadas</small>\n      </app-card>\n    </div>\n    <div class=\"col-md-6 col-xl-3\">\n      <app-card [showHeader]=\"false\" blockClass=\"dashboard-card\">\n        <span class=\"metric-label\">Tasa de acierto</span>\n        <strong class=\"metric-value\">{{ data.summary.hit_rate | number: '1.1-1' }}%</strong>\n        <small>Sin contar apuestas nulas</small>\n      </app-card>\n    </div>\n    <div class=\"col-md-6 col-xl-3\">\n      <app-card [showHeader]=\"false\" blockClass=\"dashboard-card\">\n        <span class=\"metric-label\">Apuestas evaluadas</span>\n        <strong class=\"metric-value\">{{ data.summary.evaluated_bets }}</strong>\n        <small>{{ data.summary.won }} acertadas \u00B7 {{ data.summary.lost }} falladas</small>\n      </app-card>\n    </div>\n    <div class=\"col-md-6 col-xl-3\">\n      <app-card [showHeader]=\"false\" blockClass=\"dashboard-card\">\n        <span class=\"metric-label\">Predicciones liquidadas</span>\n        <strong class=\"metric-value\">{{ data.summary.settled_predictions }}</strong>\n        <small>{{ data.summary.push }} apuestas nulas</small>\n      </app-card>\n    </div>\n\n    <div class=\"col-xl-8\">\n      <app-card cardTitle=\"Evoluci\u00F3n del balance\">\n        <apx-chart\n          [chart]=\"balanceChart.chart!\"\n          [series]=\"balanceChart.series!\"\n          [xaxis]=\"balanceChart.xaxis!\"\n          [yaxis]=\"balanceChart.yaxis!\"\n          [colors]=\"balanceChart.colors!\"\n          [stroke]=\"balanceChart.stroke!\"\n          [fill]=\"balanceChart.fill!\"\n          [dataLabels]=\"balanceChart.dataLabels!\"\n          [grid]=\"balanceChart.grid!\"\n          [tooltip]=\"balanceChart.tooltip!\"\n        />\n      </app-card>\n    </div>\n    <div class=\"col-xl-4\">\n      <app-card cardTitle=\"Acierto por mercado\">\n        <apx-chart\n          [chart]=\"marketChart.chart!\"\n          [series]=\"marketChart.series!\"\n          [xaxis]=\"marketChart.xaxis!\"\n          [yaxis]=\"marketChart.yaxis!\"\n          [colors]=\"marketChart.colors!\"\n          [plotOptions]=\"marketChart.plotOptions!\"\n          [dataLabels]=\"marketChart.dataLabels!\"\n          [grid]=\"marketChart.grid!\"\n          [tooltip]=\"marketChart.tooltip!\"\n        />\n      </app-card>\n    </div>\n\n    <div class=\"col-xl-7\">\n      <app-card cardTitle=\"Rendimiento por mercado\" blockClass=\"p-0\">\n        <div class=\"table-responsive\">\n          <table class=\"table align-middle mb-0\">\n            <thead><tr><th>Mercado</th><th>Acierto</th><th>G/P/N</th><th class=\"text-end\">Balance</th></tr></thead>\n            <tbody>\n              @for (market of data.markets; track market.market) {\n                <tr>\n                  <td><strong>{{ market.label }}</strong></td>\n                  <td>{{ market.hit_rate | number: '1.1-1' }}%</td>\n                  <td>{{ market.won }} / {{ market.lost }} / {{ market.push }}</td>\n                  <td class=\"text-end\" [ngClass]=\"unitsClass(market.net_units)\">{{ units(market.net_units) }}</td>\n                </tr>\n              }\n            </tbody>\n          </table>\n        </div>\n      </app-card>\n    </div>\n    <div class=\"col-xl-5\">\n      <app-card cardTitle=\"Liquidaciones recientes\" blockClass=\"p-0\">\n        <div class=\"recent-list\">\n          @for (item of data.recent; track item.date + item.home_team) {\n            <div class=\"recent-item\">\n              <div>\n                <span>{{ item.league }} \u00B7 {{ item.date | date: 'dd MMM' }}</span>\n                <strong>{{ item.away_team }} vs {{ item.home_team }}</strong>\n              </div>\n              <b [ngClass]=\"unitsClass(item.net_units)\">{{ units(item.net_units) }}</b>\n            </div>\n          } @empty {\n            <div class=\"empty-dashboard\">Todav\u00EDa no hay predicciones liquidadas.</div>\n          }\n        </div>\n      </app-card>\n    </div>\n  </div>\n}\n", styles: [".dashboard-toolbar {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n\n.dashboard-filters {\n  display: flex;\n  gap: 10px;\n\n  .form-select {\n    min-width: 150px;\n  }\n}\n\n.metric-label,\n.metric-value,\n.dashboard-card small {\n  display: block;\n}\n\n.metric-label {\n  margin-bottom: 8px;\n  color: var(--bs-secondary-color);\n  font-size: 12px;\n}\n\n.metric-value {\n  margin-bottom: 6px;\n  font-size: 28px;\n  font-weight: 650;\n}\n\n.dashboard-card small {\n  color: var(--bs-secondary-color);\n}\n\n.metric-positive {\n  color: #237a45 !important;\n}\n\n.metric-negative {\n  color: #c92a2a !important;\n}\n\n.recent-item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  min-height: 65px;\n  padding: 12px 20px;\n  border-bottom: 1px solid var(--bs-border-color);\n\n  &:last-child {\n    border-bottom: 0;\n  }\n\n  span,\n  strong {\n    display: block;\n  }\n\n  span {\n    color: var(--bs-secondary-color);\n    font-size: 10px;\n  }\n\n  strong {\n    margin-top: 3px;\n    font-size: 12px;\n  }\n}\n\n.empty-dashboard {\n  padding: 48px 20px;\n  color: var(--bs-secondary-color);\n  text-align: center;\n}\n\n.dashboard-empty {\n  padding: 64px 20px;\n  border: 1px solid var(--bs-border-color);\n  border-radius: 6px;\n  color: var(--bs-secondary-color);\n  text-align: center;\n}\n\n:host-context([data-bs-theme='dark']) {\n  .metric-positive {\n    color: #79d69f !important;\n  }\n\n  .metric-negative {\n    color: #ff929a !important;\n  }\n}\n\n@media (max-width: 767.98px) {\n  .dashboard-toolbar,\n  .dashboard-filters {\n    align-items: stretch;\n    flex-direction: column;\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DefaultComponent, { className: "DefaultComponent", filePath: "src/app/demo/dashboard/default/default.component.ts", lineNumber: 46 }); })();
//# sourceMappingURL=default.component.js.map