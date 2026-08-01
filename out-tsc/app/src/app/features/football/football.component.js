import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CardComponent } from 'src/app/theme/shared/components/card/card.component';
import { MarketStatusComponent } from 'src/app/theme/shared/components/market-status/market-status.component';
import { FootballApiService } from './football-api.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
const _c0 = a0 => ({ predictions: a0 });
const _forTrack0 = ($index, $item) => $item.key;
const _forTrack1 = ($index, $item) => $item.document_id;
function FootballComponent_Conditional_3_Conditional_11_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function FootballComponent_Conditional_3_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12)(1, "div")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5, "Partidos encontrados");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div")(7, "strong");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "span");
    i0.ɵɵtext(10, "Partidos elegibles");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div")(12, "strong");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "span");
    i0.ɵɵtext(15, "Predicciones generadas");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div")(17, "strong");
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "span");
    i0.ɵɵtext(20, "Nuevos registros");
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(21, FootballComponent_Conditional_3_Conditional_11_ng_container_21_Template, 1, 0, "ng-container", 13);
} if (rf & 2) {
    const data_r3 = ctx;
    i0.ɵɵnextContext(2);
    const predictionTable_r4 = i0.ɵɵreference(8);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(data_r3.fixtures_found);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(data_r3.fixtures_eligible);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(data_r3.fixtures_returned);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(data_r3.persistence?.inserted ?? 0);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngTemplateOutlet", predictionTable_r4)("ngTemplateOutletContext", i0.ɵɵpureFunction1(6, _c0, data_r3.predictions));
} }
function FootballComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 5);
    i0.ɵɵlistener("ngSubmit", function FootballComponent_Conditional_3_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.generate()); });
    i0.ɵɵelementStart(1, "div", 6)(2, "label", 7);
    i0.ɵɵtext(3, "Fecha");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "input", 8);
    i0.ɵɵtwoWayListener("ngModelChange", function FootballComponent_Conditional_3_Template_input_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.date, $event) || (ctx_r1.date = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 6)(6, "label", 9);
    i0.ɵɵtext(7, "Partidos");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "input", 10);
    i0.ɵɵtwoWayListener("ngModelChange", function FootballComponent_Conditional_3_Template_input_ngModelChange_8_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.limit, $event) || (ctx_r1.limit = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "button", 11);
    i0.ɵɵtext(10, "Generar y guardar");
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(11, FootballComponent_Conditional_3_Conditional_11_Template, 22, 8);
} if (rf & 2) {
    let tmp_7_0;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.date);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.limit);
    i0.ɵɵcontrol();
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.working);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional((tmp_7_0 = ctx_r1.response) ? 11 : -1, tmp_7_0);
} }
function FootballComponent_Conditional_4_For_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const market_r6 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(market_r6.label);
} }
function FootballComponent_Conditional_4_For_17_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const record_r7 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("Final: ", record_r7.settlement.away_score, "\u2013", record_r7.settlement.home_score);
} }
function FootballComponent_Conditional_4_For_17_For_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td")(1, "span", 20);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "small");
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(8, "app-market-status", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const market_r8 = ctx.$implicit;
    const record_r7 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(market_r8.caption);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.selection(record_r7.prediction, market_r8.key));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Probabilidad ", i0.ɵɵpipeBind2(7, 5, ctx_r1.probability(record_r7.prediction, market_r8.key), "1.0-1"), "%");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("outcome", record_r7.settlement?.markets?.[market_r8.key]?.outcome ?? "pending")("units", record_r7.settlement?.markets?.[market_r8.key]?.units ?? null);
} }
function FootballComponent_Conditional_4_For_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "span", 19);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(6, FootballComponent_Conditional_4_For_17_Conditional_6_Template, 2, 2, "small");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(7, FootballComponent_Conditional_4_For_17_For_8_Template, 9, 8, "td", null, _forTrack0);
    i0.ɵɵelementStart(9, "td")(10, "strong");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "small");
    i0.ɵɵtext(13, "Unidades netas");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const record_r7 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(record_r7.prediction.league);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", record_r7.prediction.away_team, " vs ", record_r7.prediction.home_team);
    i0.ɵɵadvance();
    i0.ɵɵconditional(record_r7.settlement ? 6 : -1);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.markets);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(record_r7.settlement?.net_units ?? "\u2014");
} }
function FootballComponent_Conditional_4_ForEmpty_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 22);
    i0.ɵɵtext(2, "No hay predicciones guardadas para esta fecha.");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵattribute("colspan", ctx_r1.markets.length + 2);
} }
function FootballComponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 14)(1, "div", 6)(2, "label", 15);
    i0.ɵɵtext(3, "Fecha");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "input", 16);
    i0.ɵɵtwoWayListener("ngModelChange", function FootballComponent_Conditional_4_Template_input_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.date, $event) || (ctx_r1.date = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("change", function FootballComponent_Conditional_4_Template_input_change_4_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.loadResults()); });
    i0.ɵɵelementEnd();
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 17)(6, "table", 18)(7, "thead")(8, "tr")(9, "th");
    i0.ɵɵtext(10, "Partido");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(11, FootballComponent_Conditional_4_For_12_Template, 2, 1, "th", null, _forTrack0);
    i0.ɵɵelementStart(13, "th");
    i0.ɵɵtext(14, "Balance");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(15, "tbody");
    i0.ɵɵrepeaterCreate(16, FootballComponent_Conditional_4_For_17_Template, 14, 5, "tr", null, _forTrack1, false, FootballComponent_Conditional_4_ForEmpty_18_Template, 3, 1, "tr");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.date);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(7);
    i0.ɵɵrepeater(ctx_r1.markets);
    i0.ɵɵadvance(5);
    i0.ɵɵrepeater(ctx_r1.storedResults);
} }
function FootballComponent_Conditional_5_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12)(1, "div")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5, "Partidos oficiales");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div")(7, "strong");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "span");
    i0.ɵɵtext(10, "Partidos finalizados");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div")(12, "strong");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "span");
    i0.ɵɵtext(15, "Predicciones encontradas");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div")(17, "strong");
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "span");
    i0.ɵɵtext(20, "Predicciones actualizadas");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const summary_r10 = ctx;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(summary_r10.official_fixtures);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(summary_r10.final_fixtures);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(summary_r10.predictions_matched);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(summary_r10.predictions_updated);
} }
function FootballComponent_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 23);
    i0.ɵɵlistener("ngSubmit", function FootballComponent_Conditional_5_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.updateResults()); });
    i0.ɵɵelementStart(1, "div", 6)(2, "label", 24);
    i0.ɵɵtext(3, "Fecha de los partidos");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "input", 25);
    i0.ɵɵtwoWayListener("ngModelChange", function FootballComponent_Conditional_5_Template_input_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.date, $event) || (ctx_r1.date = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 11);
    i0.ɵɵtext(6, "Consultar y actualizar");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "small", 26);
    i0.ɵɵtext(8, "Solo se actualizan mercados con se\u00F1al y partidos finalizados.");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(9, FootballComponent_Conditional_5_Conditional_9_Template, 21, 4, "div", 12);
} if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.date);
    i0.ɵɵcontrol();
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.working);
    i0.ɵɵadvance(4);
    i0.ɵɵconditional((tmp_5_0 = ctx_r1.updateResponse) ? 9 : -1, tmp_5_0);
} }
function FootballComponent_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.error);
} }
function FootballComponent_ng_template_7_For_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const market_r11 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(market_r11.label);
} }
function FootballComponent_ng_template_7_For_10_For_10_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "number");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const market_r12 = i0.ɵɵnextContext().$implicit;
    const prediction_r13 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("Probabilidad ", i0.ɵɵpipeBind2(2, 1, ctx_r1.probability(prediction_r13, market_r12.key), "1.0-1"), "%");
} }
function FootballComponent_ng_template_7_For_10_For_10_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const market_r12 = i0.ɵɵnextContext().$implicit;
    const prediction_r13 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.reason(prediction_r13, market_r12.key) || "Sin datos suficientes");
} }
function FootballComponent_ng_template_7_For_10_For_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td")(1, "span", 20);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(5, FootballComponent_ng_template_7_For_10_For_10_Conditional_5_Template, 3, 4, "small")(6, FootballComponent_ng_template_7_For_10_For_10_Conditional_6_Template, 2, 1, "small");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const market_r12 = ctx.$implicit;
    const prediction_r13 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(market_r12.caption);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("no-signal", ctx_r1.probability(prediction_r13, market_r12.key) === null);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.selection(prediction_r13, market_r12.key), " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.probability(prediction_r13, market_r12.key) !== null ? 5 : 6);
} }
function FootballComponent_ng_template_7_For_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "span", 19);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "small");
    i0.ɵɵtext(7);
    i0.ɵɵpipe(8, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵrepeaterCreate(9, FootballComponent_ng_template_7_For_10_For_10_Template, 7, 5, "td", null, _forTrack0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const prediction_r13 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(prediction_r13.league);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", prediction_r13.away_team, " vs ", prediction_r13.home_team);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(8, 4, prediction_r13.kickoff, "shortTime"));
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r1.markets);
} }
function FootballComponent_ng_template_7_ForEmpty_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 22);
    i0.ɵɵtext(2, "No hay partidos elegibles para esta fecha.");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵattribute("colspan", ctx_r1.markets.length + 1);
} }
function FootballComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17)(1, "table", 18)(2, "thead")(3, "tr")(4, "th");
    i0.ɵɵtext(5, "Partido");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(6, FootballComponent_ng_template_7_For_7_Template, 2, 1, "th", null, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "tbody");
    i0.ɵɵrepeaterCreate(9, FootballComponent_ng_template_7_For_10_Template, 11, 7, "tr", null, i0.ɵɵcomponentInstance().trackPrediction, true, FootballComponent_ng_template_7_ForEmpty_11_Template, 3, 1, "tr");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const predictions_r14 = ctx.predictions;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵrepeater(ctx_r1.markets);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(predictions_r14);
} }
export class FootballComponent {
    constructor() {
        this.api = inject(FootballApiService);
        this.cdr = inject(ChangeDetectorRef);
        this.route = inject(ActivatedRoute);
        this.markets = [
            { key: 'winner', label: 'Ganador', caption: '1X2' },
            { key: 'handicap', label: 'Hándicap', caption: 'Línea asiática' },
            { key: 'double_chance', label: 'Doble oportunidad', caption: 'Doble oportunidad' },
            { key: 'goals', label: 'Goles', caption: 'Más / menos' },
            { key: 'corners', label: 'Córners', caption: 'Juego completo' },
            { key: 'cards', label: 'Tarjetas', caption: 'Juego completo' }
        ];
        this.activeView = this.route.snapshot.data['footballView'] ?? 'generate';
        this.date = this.today();
        this.limit = 20;
        this.working = false;
        this.error = '';
        this.response = null;
        this.storedResults = [];
        this.updateResponse = null;
    }
    get title() {
        return {
            generate: 'Predicciones de fútbol',
            results: 'Predicciones guardadas',
            update: 'Actualizar resultados'
        }[this.activeView];
    }
    ngOnInit() {
        if (this.activeView === 'results')
            this.loadResults();
    }
    generate() {
        this.runRequest(this.api.generate(this.date, Number(this.limit)), (value) => (this.response = value));
    }
    loadResults() {
        this.runRequest(this.api.getResults(this.date), (value) => (this.storedResults = value));
    }
    updateResults() {
        this.runRequest(this.api.updateResults(this.date), (value) => (this.updateResponse = value));
    }
    selection(prediction, key) {
        if (key === 'winner') {
            if (prediction.predicted_result === 'draw')
                return 'Empate';
            return prediction.predicted_result === 'home' ? prediction.home_team : prediction.away_team;
        }
        const market = prediction.markets?.[key];
        if (!market?.available || !market.selection)
            return 'Sin señal';
        const signed = key === 'handicap' && market.line !== null && market.line > 0 ? '+' : '';
        const line = market.line === null ? '' : ` ${signed}${market.line}`;
        return `${market.selection}${line}`;
    }
    probability(prediction, key) {
        if (key === 'winner')
            return prediction.probabilities[prediction.predicted_result];
        return prediction.markets?.[key]?.probability ?? null;
    }
    reason(prediction, key) {
        if (key === 'winner')
            return '';
        return prediction.markets?.[key]?.reason ?? '';
    }
    trackPrediction(_, prediction) {
        return prediction.fixture_id;
    }
    runRequest(request, assign) {
        if (this.working)
            return;
        this.working = true;
        this.error = '';
        request.subscribe({
            next: (value) => {
                assign(value);
                this.working = false;
                this.cdr.detectChanges();
            },
            error: (error) => {
                this.error = error?.status === 0
                    ? 'El backend no está disponible en http://127.0.0.1:8000.'
                    : error?.error?.detail || 'No fue posible completar la operación.';
                this.working = false;
                this.cdr.detectChanges();
            }
        });
    }
    today() {
        const now = new Date();
        return new Date(now.getTime() - now.getTimezoneOffset() * 60_000).toISOString().slice(0, 10);
    }
    static { this.ɵfac = function FootballComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || FootballComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FootballComponent, selectors: [["app-football"]], decls: 9, vars: 3, consts: [["predictionTable", ""], [1, "row"], [1, "col-sm-12"], [3, "cardTitle"], ["role", "alert", 1, "alert", "alert-danger", "mt-3"], [1, "control-grid", 3, "ngSubmit"], [1, "field"], ["for", "football-date"], ["id", "football-date", "type", "date", "name", "date", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "football-limit"], ["id", "football-limit", "type", "number", "name", "limit", "min", "1", "max", "20", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", "action-button", 3, "disabled"], [1, "run-summary", "mt-4"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "control-grid", "results-controls"], ["for", "results-date"], ["id", "results-date", "type", "date", 1, "form-control", 3, "ngModelChange", "change", "ngModel"], [1, "table-responsive", "mt-4", "border", "rounded"], [1, "table", "align-middle", "football-table", "mb-0"], [1, "league-caption"], [1, "market-label"], [3, "outcome", "units"], [1, "empty-row"], [1, "control-grid", "update-controls", 3, "ngSubmit"], ["for", "update-date"], ["id", "update-date", "type", "date", "name", "updateDate", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "d-block", "mt-2", "text-muted"]], template: function FootballComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "app-card", 3);
            i0.ɵɵconditionalCreate(3, FootballComponent_Conditional_3_Template, 12, 4)(4, FootballComponent_Conditional_4_Template, 19, 2)(5, FootballComponent_Conditional_5_Template, 10, 3);
            i0.ɵɵconditionalCreate(6, FootballComponent_Conditional_6_Template, 2, 1, "div", 4);
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(7, FootballComponent_ng_template_7_Template, 12, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("cardTitle", ctx.title);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeView === "generate" ? 3 : ctx.activeView === "results" ? 4 : 5);
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.error ? 6 : -1);
        } }, dependencies: [CommonModule, i1.NgTemplateOutlet, FormsModule, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.NumberValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.RequiredValidator, i2.MinValidator, i2.MaxValidator, i2.NgModel, i2.NgForm, CardComponent, MarketStatusComponent, i1.DecimalPipe, i1.DatePipe], styles: ["[_nghost-%COMP%] {\n  --football-muted: #8c8c8c;\n}\n\n.control-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(180px, 280px) minmax(120px, 180px) auto;\n  align-items: end;\n  gap: 16px;\n  max-width: 760px;\n}\n\n.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-bottom: 7px;\n  color: #595959;\n  font-size: 12px;\n  font-weight: 500;\n}\n\n.action-button[_ngcontent-%COMP%] {\n  min-height: 40px;\n  border-radius: 4px;\n}\n\n.results-controls[_ngcontent-%COMP%], \n.update-controls[_ngcontent-%COMP%] {\n  grid-template-columns: minmax(180px, 300px) auto;\n}\n\n.run-summary[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  border: 1px solid var(--bs-border-color);\n  border-radius: 6px;\n\n  div {\n    padding: 16px 20px;\n    border-right: 1px solid var(--bs-border-color);\n  }\n\n  div:last-child {\n    border-right: 0;\n  }\n\n  strong,\n  span {\n    display: block;\n  }\n\n  strong {\n    font-size: 22px;\n  }\n\n  span {\n    color: var(--football-muted);\n    font-size: 11px;\n  }\n}\n\n.football-table[_ngcontent-%COMP%] {\n  min-width: 1320px;\n\n  th {\n    padding: 11px 16px;\n    background: #fafafa;\n    color: var(--football-muted);\n    font-size: 10px;\n    text-transform: uppercase;\n  }\n\n  td {\n    padding: 14px 16px;\n    font-size: 12px;\n  }\n\n  td strong,\n  td small {\n    display: block;\n  }\n\n  td small {\n    max-width: 170px;\n    margin-top: 4px;\n    color: var(--football-muted);\n    font-size: 10px;\n  }\n}\n\n.league-caption[_ngcontent-%COMP%], \n.market-label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 4px;\n  font-size: 9px;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n\n.league-caption[_ngcontent-%COMP%] {\n  color: #1677ff;\n}\n\n.market-label[_ngcontent-%COMP%] {\n  color: var(--football-muted);\n}\n\n.no-signal[_ngcontent-%COMP%] {\n  color: var(--football-muted);\n}\n\n.empty-row[_ngcontent-%COMP%] {\n  height: 160px;\n  color: var(--football-muted) !important;\n  text-align: center;\n}\n\n[data-bs-theme='dark'][_nghost-%COMP%], [data-bs-theme='dark']   [_nghost-%COMP%] {\n  --football-muted: #9da7b3;\n\n  .field label {\n    color: #b9c2cc;\n  }\n\n  .league-caption {\n    color: #5cd5cd;\n  }\n\n  .football-table th {\n    background: #222830;\n  }\n}\n\n@media (max-width: 575.98px) {\n  .control-grid[_ngcontent-%COMP%], \n   .run-summary[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FootballComponent, [{
        type: Component,
        args: [{ selector: 'app-football', imports: [CommonModule, FormsModule, CardComponent, MarketStatusComponent], template: "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-card [cardTitle]=\"title\">\n      @if (activeView === 'generate') {\n        <form class=\"control-grid\" (ngSubmit)=\"generate()\">\n          <div class=\"field\">\n            <label for=\"football-date\">Fecha</label>\n            <input id=\"football-date\" class=\"form-control\" type=\"date\" name=\"date\" [(ngModel)]=\"date\" required />\n          </div>\n          <div class=\"field\">\n            <label for=\"football-limit\">Partidos</label>\n            <input id=\"football-limit\" class=\"form-control\" type=\"number\" name=\"limit\" min=\"1\" max=\"20\" [(ngModel)]=\"limit\" />\n          </div>\n          <button class=\"btn btn-primary action-button\" type=\"submit\" [disabled]=\"working\">Generar y guardar</button>\n        </form>\n\n        @if (response; as data) {\n          <div class=\"run-summary mt-4\">\n            <div><strong>{{ data.fixtures_found }}</strong><span>Partidos encontrados</span></div>\n            <div><strong>{{ data.fixtures_eligible }}</strong><span>Partidos elegibles</span></div>\n            <div><strong>{{ data.fixtures_returned }}</strong><span>Predicciones generadas</span></div>\n            <div><strong>{{ data.persistence?.inserted ?? 0 }}</strong><span>Nuevos registros</span></div>\n          </div>\n          <ng-container *ngTemplateOutlet=\"predictionTable; context: { predictions: data.predictions }\" />\n        }\n      } @else if (activeView === 'results') {\n        <div class=\"control-grid results-controls\">\n          <div class=\"field\">\n            <label for=\"results-date\">Fecha</label>\n            <input id=\"results-date\" class=\"form-control\" type=\"date\" [(ngModel)]=\"date\" (change)=\"loadResults()\" />\n          </div>\n        </div>\n        <div class=\"table-responsive mt-4 border rounded\">\n          <table class=\"table align-middle football-table mb-0\">\n            <thead>\n              <tr>\n                <th>Partido</th>\n                @for (market of markets; track market.key) {\n                  <th>{{ market.label }}</th>\n                }\n                <th>Balance</th>\n              </tr>\n            </thead>\n            <tbody>\n              @for (record of storedResults; track record.document_id) {\n                <tr>\n                  <td>\n                    <span class=\"league-caption\">{{ record.prediction.league }}</span>\n                    <strong>{{ record.prediction.away_team }} vs {{ record.prediction.home_team }}</strong>\n                    @if (record.settlement) {\n                      <small>Final: {{ record.settlement.away_score }}\u2013{{ record.settlement.home_score }}</small>\n                    }\n                  </td>\n                  @for (market of markets; track market.key) {\n                    <td>\n                      <span class=\"market-label\">{{ market.caption }}</span>\n                      <strong>{{ selection(record.prediction, market.key) }}</strong>\n                      <small>Probabilidad {{ probability(record.prediction, market.key) | number: '1.0-1' }}%</small>\n                      <app-market-status\n                        [outcome]=\"record.settlement?.markets?.[market.key]?.outcome ?? 'pending'\"\n                        [units]=\"record.settlement?.markets?.[market.key]?.units ?? null\"\n                      />\n                    </td>\n                  }\n                  <td><strong>{{ record.settlement?.net_units ?? '\u2014' }}</strong><small>Unidades netas</small></td>\n                </tr>\n              } @empty {\n                <tr><td [attr.colspan]=\"markets.length + 2\" class=\"empty-row\">No hay predicciones guardadas para esta fecha.</td></tr>\n              }\n            </tbody>\n          </table>\n        </div>\n      } @else {\n        <form class=\"control-grid update-controls\" (ngSubmit)=\"updateResults()\">\n          <div class=\"field\">\n            <label for=\"update-date\">Fecha de los partidos</label>\n            <input id=\"update-date\" class=\"form-control\" type=\"date\" name=\"updateDate\" [(ngModel)]=\"date\" required />\n          </div>\n          <button class=\"btn btn-primary action-button\" type=\"submit\" [disabled]=\"working\">Consultar y actualizar</button>\n        </form>\n        <small class=\"d-block mt-2 text-muted\">Solo se actualizan mercados con se\u00F1al y partidos finalizados.</small>\n        @if (updateResponse; as summary) {\n          <div class=\"run-summary mt-4\">\n            <div><strong>{{ summary.official_fixtures }}</strong><span>Partidos oficiales</span></div>\n            <div><strong>{{ summary.final_fixtures }}</strong><span>Partidos finalizados</span></div>\n            <div><strong>{{ summary.predictions_matched }}</strong><span>Predicciones encontradas</span></div>\n            <div><strong>{{ summary.predictions_updated }}</strong><span>Predicciones actualizadas</span></div>\n          </div>\n        }\n      }\n\n      @if (error) {\n        <div class=\"alert alert-danger mt-3\" role=\"alert\">{{ error }}</div>\n      }\n    </app-card>\n  </div>\n</div>\n\n<ng-template #predictionTable let-predictions=\"predictions\">\n  <div class=\"table-responsive mt-4 border rounded\">\n    <table class=\"table align-middle football-table mb-0\">\n      <thead>\n        <tr>\n          <th>Partido</th>\n          @for (market of markets; track market.key) {\n            <th>{{ market.label }}</th>\n          }\n        </tr>\n      </thead>\n      <tbody>\n        @for (prediction of predictions; track trackPrediction($index, prediction)) {\n          <tr>\n            <td>\n              <span class=\"league-caption\">{{ prediction.league }}</span>\n              <strong>{{ prediction.away_team }} vs {{ prediction.home_team }}</strong>\n              <small>{{ prediction.kickoff | date: 'shortTime' }}</small>\n            </td>\n            @for (market of markets; track market.key) {\n              <td>\n                <span class=\"market-label\">{{ market.caption }}</span>\n                <strong [class.no-signal]=\"probability(prediction, market.key) === null\">\n                  {{ selection(prediction, market.key) }}\n                </strong>\n                @if (probability(prediction, market.key) !== null) {\n                  <small>Probabilidad {{ probability(prediction, market.key) | number: '1.0-1' }}%</small>\n                } @else {\n                  <small>{{ reason(prediction, market.key) || 'Sin datos suficientes' }}</small>\n                }\n              </td>\n            }\n          </tr>\n        } @empty {\n          <tr><td [attr.colspan]=\"markets.length + 1\" class=\"empty-row\">No hay partidos elegibles para esta fecha.</td></tr>\n        }\n      </tbody>\n    </table>\n  </div>\n</ng-template>\n", styles: [":host {\n  --football-muted: #8c8c8c;\n}\n\n.control-grid {\n  display: grid;\n  grid-template-columns: minmax(180px, 280px) minmax(120px, 180px) auto;\n  align-items: end;\n  gap: 16px;\n  max-width: 760px;\n}\n\n.field label {\n  margin-bottom: 7px;\n  color: #595959;\n  font-size: 12px;\n  font-weight: 500;\n}\n\n.action-button {\n  min-height: 40px;\n  border-radius: 4px;\n}\n\n.results-controls,\n.update-controls {\n  grid-template-columns: minmax(180px, 300px) auto;\n}\n\n.run-summary {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  border: 1px solid var(--bs-border-color);\n  border-radius: 6px;\n\n  div {\n    padding: 16px 20px;\n    border-right: 1px solid var(--bs-border-color);\n  }\n\n  div:last-child {\n    border-right: 0;\n  }\n\n  strong,\n  span {\n    display: block;\n  }\n\n  strong {\n    font-size: 22px;\n  }\n\n  span {\n    color: var(--football-muted);\n    font-size: 11px;\n  }\n}\n\n.football-table {\n  min-width: 1320px;\n\n  th {\n    padding: 11px 16px;\n    background: #fafafa;\n    color: var(--football-muted);\n    font-size: 10px;\n    text-transform: uppercase;\n  }\n\n  td {\n    padding: 14px 16px;\n    font-size: 12px;\n  }\n\n  td strong,\n  td small {\n    display: block;\n  }\n\n  td small {\n    max-width: 170px;\n    margin-top: 4px;\n    color: var(--football-muted);\n    font-size: 10px;\n  }\n}\n\n.league-caption,\n.market-label {\n  display: block;\n  margin-bottom: 4px;\n  font-size: 9px;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n\n.league-caption {\n  color: #1677ff;\n}\n\n.market-label {\n  color: var(--football-muted);\n}\n\n.no-signal {\n  color: var(--football-muted);\n}\n\n.empty-row {\n  height: 160px;\n  color: var(--football-muted) !important;\n  text-align: center;\n}\n\n:host-context([data-bs-theme='dark']) {\n  --football-muted: #9da7b3;\n\n  .field label {\n    color: #b9c2cc;\n  }\n\n  .league-caption {\n    color: #5cd5cd;\n  }\n\n  .football-table th {\n    background: #222830;\n  }\n}\n\n@media (max-width: 575.98px) {\n  .control-grid,\n  .run-summary {\n    grid-template-columns: 1fr;\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(FootballComponent, { className: "FootballComponent", filePath: "src/app/features/football/football.component.ts", lineNumber: 27 }); })();
//# sourceMappingURL=football.component.js.map