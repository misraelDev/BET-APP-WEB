import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs';
import { BaseballApiService } from './baseball-api.service';
import { CardComponent } from 'src/app/theme/shared/components/card/card.component';
import { MarketStatusComponent } from 'src/app/theme/shared/components/market-status/market-status.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
function BaseballComponent_Conditional_3_Conditional_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.generationError);
} }
function BaseballComponent_Conditional_3_Conditional_23_Conditional_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(data_r3.persistence?.error);
} }
function BaseballComponent_Conditional_3_Conditional_23_For_41_Conditional_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
    i0.ɵɵpipe(1, "number");
} if (rf & 2) {
    const prediction_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵtextInterpolate1(" Probabilidad ", i0.ɵɵpipeBind2(1, 1, prediction_r4.markets?.handicap_confidence, "1.0-0"), "% ");
} }
function BaseballComponent_Conditional_3_Conditional_23_For_41_Conditional_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Probabilidad no disponible ");
} }
function BaseballComponent_Conditional_3_Conditional_23_For_41_Conditional_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
    i0.ɵɵpipe(1, "number");
} if (rf & 2) {
    const prediction_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵtextInterpolate1(" Probabilidad ", i0.ɵɵpipeBind2(1, 1, prediction_r4.markets?.total_confidence, "1.0-0"), "% ");
} }
function BaseballComponent_Conditional_3_Conditional_23_For_41_Conditional_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Probabilidad no disponible ");
} }
function BaseballComponent_Conditional_3_Conditional_23_For_41_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "span", 22);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7, "vs");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "small");
    i0.ɵɵtext(10);
    i0.ɵɵpipe(11, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "td")(13, "span", 23);
    i0.ɵɵtext(14, "Moneyline");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "span", 24);
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "small");
    i0.ɵɵtext(18);
    i0.ɵɵpipe(19, "number");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "td")(21, "span", 23);
    i0.ɵɵtext(22, "Run line");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "span", 25);
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "small");
    i0.ɵɵconditionalCreate(26, BaseballComponent_Conditional_3_Conditional_23_For_41_Conditional_26_Template, 2, 4)(27, BaseballComponent_Conditional_3_Conditional_23_For_41_Conditional_27_Template, 1, 0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(28, "td")(29, "span", 23);
    i0.ɵɵtext(30, "Juego completo");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "span", 25);
    i0.ɵɵtext(32);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "small");
    i0.ɵɵconditionalCreate(34, BaseballComponent_Conditional_3_Conditional_23_For_41_Conditional_34_Template, 2, 4)(35, BaseballComponent_Conditional_3_Conditional_23_For_41_Conditional_35_Template, 1, 0);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const prediction_r4 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(prediction_r4.league);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", prediction_r4.away_team, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", prediction_r4.home_team);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(11, 14, prediction_r4.kickoff, "shortTime"));
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r1.winner(prediction_r4));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind2(19, 17, prediction_r4.predicted_result === "home" ? prediction_r4.probabilities.home : prediction_r4.probabilities.away, "1.0-1"), "% estimado");
    i0.ɵɵadvance(5);
    i0.ɵɵclassProp("no-signal", !prediction_r4.markets?.handicap_team);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.handicap(prediction_r4));
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(prediction_r4.markets?.handicap_confidence !== null ? 26 : 27);
    i0.ɵɵadvance(5);
    i0.ɵɵclassProp("no-signal", !prediction_r4.markets?.total_pick);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.total(prediction_r4));
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(prediction_r4.markets?.total_confidence !== null ? 34 : 35);
} }
function BaseballComponent_Conditional_3_Conditional_23_ForEmpty_42_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 26);
    i0.ɵɵtext(2, "No hay partidos elegibles para esta fecha y liga.");
    i0.ɵɵelementEnd()();
} }
function BaseballComponent_Conditional_3_Conditional_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16)(1, "div")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5, "Partidos encontrados");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div")(7, "strong");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "span");
    i0.ɵɵtext(10, "Predicciones generadas");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div")(12, "strong");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "span");
    i0.ɵɵtext(15, "Nuevos registros");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div")(17, "strong");
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "span");
    i0.ɵɵtext(20, "Registros actualizados");
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(21, BaseballComponent_Conditional_3_Conditional_23_Conditional_21_Template, 2, 1, "div", 17);
    i0.ɵɵelementStart(22, "div", 18)(23, "div", 19);
    i0.ɵɵtext(24);
    i0.ɵɵpipe(25, "date");
    i0.ɵɵpipe(26, "uppercase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "div", 20)(28, "table", 21)(29, "thead")(30, "tr")(31, "th");
    i0.ɵɵtext(32, "Partido");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "th");
    i0.ɵɵtext(34, "Ganador");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "th");
    i0.ɵɵtext(36, "H\u00E1ndicap");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "th");
    i0.ɵɵtext(38, "M\u00E1s / menos");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(39, "tbody");
    i0.ɵɵrepeaterCreate(40, BaseballComponent_Conditional_3_Conditional_23_For_41_Template, 36, 20, "tr", null, i0.ɵɵcomponentInstance().trackPrediction, true, BaseballComponent_Conditional_3_Conditional_23_ForEmpty_42_Template, 3, 0, "tr");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const data_r3 = ctx;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(data_r3.games_found);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(data_r3.games_returned);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(data_r3.persistence?.inserted ?? 0);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(data_r3.persistence?.updated ?? 0);
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(data_r3.persistence?.error ? 21 : -1);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate3(" ", i0.ɵɵpipeBind2(25, 9, data_r3.requested_date, "dd MMM yyyy"), " \u00B7 ", i0.ɵɵpipeBind1(26, 12, data_r3.filters["league"]), " \u00B7 ", data_r3.model_version, " ");
    i0.ɵɵadvance(16);
    i0.ɵɵrepeater(data_r3.predictions);
} }
function BaseballComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "form", 3);
    i0.ɵɵlistener("ngSubmit", function BaseballComponent_Conditional_3_Template_form_ngSubmit_1_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.generate()); });
    i0.ɵɵelementStart(2, "div", 4)(3, "label", 5);
    i0.ɵɵtext(4, "Fecha");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "input", 6);
    i0.ɵɵtwoWayListener("ngModelChange", function BaseballComponent_Conditional_3_Template_input_ngModelChange_5_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.request.date, $event) || (ctx_r1.request.date = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 4)(7, "label", 7);
    i0.ɵɵtext(8, "Liga");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "select", 8);
    i0.ɵɵtwoWayListener("ngModelChange", function BaseballComponent_Conditional_3_Template_select_ngModelChange_9_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.request.league, $event) || (ctx_r1.request.league = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(10, "option", 9);
    i0.ɵɵtext(11, "MLB");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "option", 10);
    i0.ɵɵtext(13, "KBO");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "option", 11);
    i0.ɵɵtext(15, "Todas");
    i0.ɵɵelementEnd()();
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "div", 4)(17, "label", 12);
    i0.ɵɵtext(18, "Partidos");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "input", 13);
    i0.ɵɵtwoWayListener("ngModelChange", function BaseballComponent_Conditional_3_Template_input_ngModelChange_19_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.request.limit, $event) || (ctx_r1.request.limit = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "button", 14);
    i0.ɵɵtext(21, " Generar y guardar ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(22, BaseballComponent_Conditional_3_Conditional_22_Template, 2, 1, "div", 15);
    i0.ɵɵconditionalCreate(23, BaseballComponent_Conditional_3_Conditional_23_Template, 43, 14);
} if (rf & 2) {
    let tmp_9_0;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.request.date);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.request.league);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(10);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.request.limit);
    i0.ɵɵcontrol();
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.generating);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.generationError ? 22 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional((tmp_9_0 = ctx_r1.generation) ? 23 : -1, tmp_9_0);
} }
function BaseballComponent_Conditional_4_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.resultsError);
} }
function BaseballComponent_Conditional_4_For_36_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const record_r6 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("Final: ", record_r6.settlement.away_score, "\u2013", record_r6.settlement.home_score);
} }
function BaseballComponent_Conditional_4_For_36_Conditional_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
    i0.ɵɵpipe(1, "number");
} if (rf & 2) {
    const record_r6 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵtextInterpolate1(" Probabilidad ", i0.ɵɵpipeBind2(1, 1, record_r6.prediction.markets?.handicap_confidence, "1.0-0"), "% ");
} }
function BaseballComponent_Conditional_4_For_36_Conditional_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Probabilidad no disponible ");
} }
function BaseballComponent_Conditional_4_For_36_Conditional_41_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
    i0.ɵɵpipe(1, "number");
} if (rf & 2) {
    const record_r6 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵtextInterpolate1(" Probabilidad ", i0.ɵɵpipeBind2(1, 1, record_r6.prediction.markets?.total_confidence, "1.0-0"), "% ");
} }
function BaseballComponent_Conditional_4_For_36_Conditional_42_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Probabilidad no disponible ");
} }
function BaseballComponent_Conditional_4_For_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "small");
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "td")(9, "span", 22);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "strong");
    i0.ɵɵtext(12);
    i0.ɵɵelementStart(13, "span");
    i0.ɵɵtext(14, "vs");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(16, BaseballComponent_Conditional_4_For_36_Conditional_16_Template, 2, 2, "small");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "td")(18, "span", 23);
    i0.ɵɵtext(19, "Moneyline");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "span", 24);
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "small");
    i0.ɵɵtext(23);
    i0.ɵɵpipe(24, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(25, "app-market-status", 33);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "td")(27, "span", 23);
    i0.ɵɵtext(28, "Run line");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "span", 25);
    i0.ɵɵtext(30);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "small");
    i0.ɵɵconditionalCreate(32, BaseballComponent_Conditional_4_For_36_Conditional_32_Template, 2, 4)(33, BaseballComponent_Conditional_4_For_36_Conditional_33_Template, 1, 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(34, "app-market-status", 33);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "td")(36, "span", 23);
    i0.ɵɵtext(37, "Juego completo");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "span", 25);
    i0.ɵɵtext(39);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "small");
    i0.ɵɵconditionalCreate(41, BaseballComponent_Conditional_4_For_36_Conditional_41_Template, 2, 4)(42, BaseballComponent_Conditional_4_For_36_Conditional_42_Template, 1, 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(43, "app-market-status", 33);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(44, "td")(45, "span", 23);
    i0.ɵɵtext(46, "3 apuestas");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(47, "strong", 34);
    i0.ɵɵtext(48);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(49, "small");
    i0.ɵɵtext(50, "Unidades netas");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const record_r6 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(4, 24, record_r6.generated_at, "dd MMM"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(7, 27, record_r6.generated_at, "shortTime"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(record_r6.prediction.league);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", record_r6.prediction.away_team, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", record_r6.prediction.home_team);
    i0.ɵɵadvance();
    i0.ɵɵconditional(record_r6.settlement ? 16 : -1);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.winner(record_r6.prediction));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind2(24, 30, record_r6.prediction.predicted_result === "home" ? record_r6.prediction.probabilities.home : record_r6.prediction.probabilities.away, "1.0-1"), "%");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("outcome", ctx_r1.marketOutcomeValue(record_r6, "moneyline"))("units", ctx_r1.marketUnits(record_r6, "moneyline"));
    i0.ɵɵadvance(4);
    i0.ɵɵclassProp("no-signal", !record_r6.prediction.markets?.handicap_team);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.handicap(record_r6.prediction));
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(record_r6.prediction.markets?.handicap_confidence !== null ? 32 : 33);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("outcome", ctx_r1.marketOutcomeValue(record_r6, "handicap"))("units", ctx_r1.marketUnits(record_r6, "handicap"));
    i0.ɵɵadvance(4);
    i0.ɵɵclassProp("no-signal", !record_r6.prediction.markets?.total_pick);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.total(record_r6.prediction));
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(record_r6.prediction.markets?.total_confidence !== null ? 41 : 42);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("outcome", ctx_r1.marketOutcomeValue(record_r6, "total"))("units", ctx_r1.marketUnits(record_r6, "total"));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngClass", ctx_r1.unitsClass(record_r6.settlement?.net_units));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.unitsLabel(record_r6.settlement?.net_units), " ");
} }
function BaseballComponent_Conditional_4_ForEmpty_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 35);
    i0.ɵɵtext(2, "No hay predicciones almacenadas con estos filtros.");
    i0.ɵɵelementEnd()();
} }
function BaseballComponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "div", 27)(2, "div", 4)(3, "label", 28);
    i0.ɵɵtext(4, "Fecha");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "input", 29);
    i0.ɵɵtwoWayListener("ngModelChange", function BaseballComponent_Conditional_4_Template_input_ngModelChange_5_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.resultDate, $event) || (ctx_r1.resultDate = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("change", function BaseballComponent_Conditional_4_Template_input_change_5_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.loadResults()); });
    i0.ɵɵelementEnd();
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 4)(7, "label", 30);
    i0.ɵɵtext(8, "Liga");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "select", 31);
    i0.ɵɵtwoWayListener("ngModelChange", function BaseballComponent_Conditional_4_Template_select_ngModelChange_9_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.resultLeague, $event) || (ctx_r1.resultLeague = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("change", function BaseballComponent_Conditional_4_Template_select_change_9_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.loadResults()); });
    i0.ɵɵelementStart(10, "option", 9);
    i0.ɵɵtext(11, "MLB");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "option", 10);
    i0.ɵɵtext(13, "KBO");
    i0.ɵɵelementEnd()();
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "small", 32);
    i0.ɵɵtext(15, " Fuente: colecci\u00F3n de predicciones en MongoDB. ");
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(16, BaseballComponent_Conditional_4_Conditional_16_Template, 2, 1, "div", 15);
    i0.ɵɵelementStart(17, "div", 18)(18, "div", 20)(19, "table", 21)(20, "thead")(21, "tr")(22, "th");
    i0.ɵɵtext(23, "Generada");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "th");
    i0.ɵɵtext(25, "Partido");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "th");
    i0.ɵɵtext(27, "Ganador");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "th");
    i0.ɵɵtext(29, "H\u00E1ndicap");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "th");
    i0.ɵɵtext(31, "M\u00E1s / menos");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "th");
    i0.ɵɵtext(33, "Balance");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(34, "tbody");
    i0.ɵɵrepeaterCreate(35, BaseballComponent_Conditional_4_For_36_Template, 51, 33, "tr", null, i0.ɵɵcomponentInstance().trackStored, true, BaseballComponent_Conditional_4_ForEmpty_37_Template, 3, 0, "tr");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.resultDate);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.resultLeague);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(7);
    i0.ɵɵconditional(ctx_r1.resultsError ? 16 : -1);
    i0.ɵɵadvance(19);
    i0.ɵɵrepeater(ctx_r1.storedResults);
} }
function BaseballComponent_Conditional_5_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 41);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.updateError);
} }
function BaseballComponent_Conditional_5_Conditional_18_Conditional_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 43);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const summary_r8 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" Sin predicci\u00F3n guardada: ", summary_r8.not_found.join(", "), " ");
} }
function BaseballComponent_Conditional_5_Conditional_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 42)(1, "div")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5, "Juegos oficiales");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div")(7, "strong");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "span");
    i0.ɵɵtext(10, "Juegos finalizados");
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
    i0.ɵɵconditionalCreate(21, BaseballComponent_Conditional_5_Conditional_18_Conditional_21_Template, 2, 1, "div", 43);
} if (rf & 2) {
    const summary_r8 = ctx;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(summary_r8.official_games);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(summary_r8.final_games);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(summary_r8.predictions_matched);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(summary_r8.predictions_updated);
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(summary_r8.not_found.length ? 21 : -1);
} }
function BaseballComponent_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 36);
    i0.ɵɵlistener("ngSubmit", function BaseballComponent_Conditional_5_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.updateMarketResults()); });
    i0.ɵɵelementStart(1, "div", 4)(2, "label", 37);
    i0.ɵɵtext(3, "Fecha de los partidos");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "input", 38);
    i0.ɵɵtwoWayListener("ngModelChange", function BaseballComponent_Conditional_5_Template_input_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.updateRequest.date, $event) || (ctx_r1.updateRequest.date = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 4)(6, "label", 39);
    i0.ɵɵtext(7, "Liga");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "select", 40);
    i0.ɵɵtwoWayListener("ngModelChange", function BaseballComponent_Conditional_5_Template_select_ngModelChange_8_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.updateRequest.league, $event) || (ctx_r1.updateRequest.league = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(9, "option", 9);
    i0.ɵɵtext(10, "MLB");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "option", 10);
    i0.ɵɵtext(12, "KBO");
    i0.ɵɵelementEnd()();
    i0.ɵɵcontrolCreate();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "button", 14);
    i0.ɵɵtext(14, " Consultar y actualizar ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "small", 32);
    i0.ɵɵtext(16, " Solo se procesan partidos finalizados y se actualizan los resultados de Moneyline, Run line y M\u00E1s/Menos. ");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(17, BaseballComponent_Conditional_5_Conditional_17_Template, 2, 1, "div", 41);
    i0.ɵɵconditionalCreate(18, BaseballComponent_Conditional_5_Conditional_18_Template, 22, 5);
} if (rf & 2) {
    let tmp_7_0;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.updateRequest.date);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.updateRequest.league);
    i0.ɵɵcontrol();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("disabled", ctx_r1.updatingResults);
    i0.ɵɵadvance(4);
    i0.ɵɵconditional(ctx_r1.updateError ? 17 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional((tmp_7_0 = ctx_r1.updateResponse) ? 18 : -1, tmp_7_0);
} }
export class BaseballComponent {
    constructor() {
        this.api = inject(BaseballApiService);
        this.route = inject(ActivatedRoute);
        this.cdr = inject(ChangeDetectorRef);
        this.activeView = this.route.snapshot.data['baseballView'] ?? 'generate';
        this.request = {
            date: this.today(),
            timezone: 'America/Mexico_City',
            limit: 20,
            league: 'mlb'
        };
        this.resultDate = this.today();
        this.resultLeague = 'mlb';
        this.updateRequest = {
            date: this.today(),
            league: 'mlb'
        };
        this.generation = null;
        this.updateResponse = null;
        this.storedResults = [];
        this.generating = false;
        this.loadingResults = false;
        this.generationError = '';
        this.resultsError = '';
        this.updateError = '';
        this.updatingResults = false;
    }
    get cardTitle() {
        const titles = {
            generate: 'Centro de predicciones',
            results: 'Resultados guardados',
            update: 'Actualizar resultados'
        };
        return titles[this.activeView];
    }
    ngOnInit() {
        if (this.activeView === 'results') {
            this.loadResults();
        }
    }
    generate() {
        if (this.generating) {
            return;
        }
        this.generating = true;
        this.generationError = '';
        this.api
            .generate({ ...this.request, limit: Number(this.request.limit) })
            .pipe(finalize(() => (this.generating = false)))
            .subscribe({
            next: (response) => {
                this.generation = response;
                this.storedResults = [];
            },
            error: (error) => {
                this.generationError = this.errorMessage(error, 'No fue posible generar las predicciones.');
            }
        });
    }
    loadResults() {
        this.loadingResults = true;
        this.resultsError = '';
        this.api
            .getResults(this.resultDate, this.resultLeague)
            .pipe(finalize(() => (this.loadingResults = false)))
            .subscribe({
            next: (response) => {
                console.info('[Baseball][MongoDB] GET /results response:', response);
                this.storedResults = response;
                this.cdr.detectChanges();
            },
            error: (error) => {
                console.error('[Baseball][MongoDB] GET /results error:', error);
                this.storedResults = [];
                this.resultsError = this.errorMessage(error, 'No fue posible consultar los resultados guardados.');
                this.cdr.detectChanges();
            }
        });
    }
    updateMarketResults() {
        if (this.updatingResults) {
            return;
        }
        this.updatingResults = true;
        this.updateError = '';
        this.updateResponse = null;
        this.api
            .updateResults(this.updateRequest)
            .pipe(finalize(() => (this.updatingResults = false)))
            .subscribe({
            next: (response) => {
                this.updateResponse = response;
                this.cdr.detectChanges();
            },
            error: (error) => {
                this.updateError = this.errorMessage(error, 'No fue posible actualizar los resultados.');
                this.cdr.detectChanges();
            }
        });
    }
    winner(prediction) {
        return prediction.predicted_result === 'home' ? prediction.home_team : prediction.away_team;
    }
    handicap(prediction) {
        const market = prediction.markets;
        if (!market?.handicap_team || market.handicap_line === null) {
            return 'Sin señal';
        }
        const line = market.handicap_line > 0 ? `+${market.handicap_line}` : `${market.handicap_line}`;
        return `${market.handicap_team} ${line}`;
    }
    total(prediction) {
        const market = prediction.markets;
        if (!market?.total_pick || market.total_line === null) {
            return 'Sin señal';
        }
        return `${market.total_pick === 'over' ? 'Más' : 'Menos'} ${market.total_line}`;
    }
    marketUnits(record, market) {
        if (!record.settlement) {
            return null;
        }
        const fields = {
            moneyline: record.settlement.moneyline_units,
            handicap: record.settlement.handicap_units,
            total: record.settlement.total_units
        };
        return fields[market] ?? null;
    }
    unitsLabel(value) {
        if (value === null || value === undefined) {
            return '—';
        }
        return value > 0 ? `+${value}` : `${value}`;
    }
    unitsClass(value) {
        if (value === null || value === undefined || value === 0) {
            return 'units-neutral';
        }
        return value > 0 ? 'units-positive' : 'units-negative';
    }
    trackPrediction(_, prediction) {
        return prediction.game_id;
    }
    trackStored(_, document) {
        return document.document_id;
    }
    today() {
        const now = new Date();
        const offset = now.getTimezoneOffset() * 60_000;
        return new Date(now.getTime() - offset).toISOString().slice(0, 10);
    }
    marketOutcomeValue(record, market) {
        if (!record.settlement) {
            return 'pending';
        }
        if (market === 'moneyline') {
            return record.settlement.outcome;
        }
        const outcome = market === 'handicap' ? record.settlement.handicap_outcome : record.settlement.total_outcome;
        return outcome ?? 'pending';
    }
    errorMessage(error, fallback) {
        if (error?.name === 'TimeoutError') {
            return 'La operación superó el tiempo máximo. Verifica API-Sports e inténtalo nuevamente.';
        }
        if (error?.status === 0) {
            return 'El backend no está disponible en http://127.0.0.1:8000.';
        }
        return error?.error?.detail || fallback;
    }
    static { this.ɵfac = function BaseballComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || BaseballComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BaseballComponent, selectors: [["app-baseball"]], decls: 6, vars: 2, consts: [[1, "row"], [1, "col-sm-12"], [3, "cardTitle"], [1, "control-grid", 3, "ngSubmit"], [1, "field"], ["for", "prediction-date"], ["id", "prediction-date", "type", "date", "name", "date", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "prediction-league"], ["id", "prediction-league", "name", "league", 1, "form-select", 3, "ngModelChange", "ngModel"], ["value", "mlb"], ["value", "kbo"], ["value", "all"], ["for", "prediction-limit"], ["id", "prediction-limit", "type", "number", "name", "limit", "min", "1", "max", "20", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", "action-button", 3, "disabled"], ["role", "alert", 1, "alert", "alert-danger"], [1, "run-summary", "mb-4"], ["role", "alert", 1, "alert", "alert-warning"], [1, "mt-4", "border", "rounded", "overflow-hidden"], [1, "px-3", "py-2", "border-bottom", "bg-light", "text-muted", "f-12"], [1, "table-responsive"], [1, "table", "align-middle", "prediction-table"], [1, "league-caption"], [1, "market-label"], [1, "winner"], [1, "market-pick"], ["colspan", "4", 1, "empty-row"], [1, "control-grid", "history-controls"], ["for", "result-date"], ["id", "result-date", "type", "date", 1, "form-control", 3, "ngModelChange", "change", "ngModel"], ["for", "result-league"], ["id", "result-league", 1, "form-select", 3, "ngModelChange", "change", "ngModel"], [1, "d-block", "mt-2", "text-muted"], [3, "outcome", "units"], [1, "net-units", 3, "ngClass"], ["colspan", "6", 1, "empty-row"], [1, "control-grid", "update-controls", 3, "ngSubmit"], ["for", "update-date"], ["id", "update-date", "type", "date", "name", "updateDate", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "update-league"], ["id", "update-league", "name", "updateLeague", 1, "form-select", 3, "ngModelChange", "ngModel"], ["role", "alert", 1, "alert", "alert-danger", "mt-3"], [1, "run-summary", "mt-4"], ["role", "alert", 1, "alert", "alert-warning", "mt-3", "mb-0"]], template: function BaseballComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "app-card", 2);
            i0.ɵɵconditionalCreate(3, BaseballComponent_Conditional_3_Template, 24, 6)(4, BaseballComponent_Conditional_4_Template, 38, 4)(5, BaseballComponent_Conditional_5_Template, 19, 5);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("cardTitle", ctx.cardTitle);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeView === "generate" ? 3 : ctx.activeView === "results" ? 4 : 5);
        } }, dependencies: [CommonModule, i1.NgClass, FormsModule, i2.ɵNgNoValidate, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.DefaultValueAccessor, i2.NumberValueAccessor, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.RequiredValidator, i2.MinValidator, i2.MaxValidator, i2.NgModel, i2.NgForm, CardComponent, MarketStatusComponent, i1.UpperCasePipe, i1.DecimalPipe, i1.DatePipe], styles: ["[_nghost-%COMP%] {\n  --baseball-ink: #262626;\n  --baseball-muted: #8c8c8c;\n  --baseball-line: #f0f0f0;\n  display: block;\n}\n\n[data-bs-theme='dark'][_nghost-%COMP%], [data-bs-theme='dark']   [_nghost-%COMP%] {\n  --baseball-ink: #f1f4f6;\n  --baseball-muted: #9da7b3;\n  --baseball-line: #343c46;\n\n  .run-summary {\n    background: #191e24;\n  }\n\n  .field label {\n    color: #b9c2cc;\n  }\n\n  .prediction-table td strong,\n  .winner,\n  .market-pick {\n    color: #f1f4f6;\n  }\n\n  .league-caption {\n    color: #5cd5cd;\n  }\n\n  .units-positive {\n    color: #79d69f !important;\n  }\n\n  .units-negative {\n    color: #ff929a !important;\n  }\n}\n\n.control-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(180px, 1.2fr) minmax(150px, 1fr) minmax(110px, 0.65fr) auto;\n  align-items: end;\n  gap: 16px;\n}\n\n.history-controls[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(2, minmax(180px, 280px));\n}\n\n.update-controls[_ngcontent-%COMP%] {\n  grid-template-columns: minmax(180px, 1fr) minmax(180px, 1fr) auto;\n  max-width: 760px;\n}\n\n.field[_ngcontent-%COMP%] {\n  label {\n    margin-bottom: 7px;\n    color: #595959;\n    font-size: 12px;\n    font-weight: 500;\n  }\n\n}\n\n.action-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  min-width: 152px;\n  min-height: 40px;\n  border-radius: 4px;\n  white-space: nowrap;\n}\n\n.run-summary[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  border: 1px solid var(--baseball-line);\n  border-radius: 6px;\n  background: #fff;\n\n  div {\n    min-width: 0;\n    padding: 16px 20px;\n    border-right: 1px solid var(--baseball-line);\n\n    &:last-child {\n      border-right: 0;\n    }\n  }\n\n  strong {\n    display: block;\n    color: var(--baseball-ink);\n    font-size: 22px;\n    font-weight: 600;\n  }\n\n  span {\n    display: block;\n    margin-top: 2px;\n    color: var(--baseball-muted);\n    font-size: 11px;\n  }\n}\n\n.prediction-table[_ngcontent-%COMP%] {\n  min-width: 820px;\n  margin: 0;\n\n  th {\n    padding: 11px 20px;\n    background: #fafafa;\n    color: #8c8c8c;\n    font-size: 10px;\n    font-weight: 600;\n    text-transform: uppercase;\n  }\n\n  td {\n    padding: 14px 20px;\n    font-size: 13px;\n  }\n\n  td strong,\n  td small {\n    display: block;\n  }\n\n  td small {\n    margin-top: 3px;\n    color: var(--baseball-muted);\n    font-size: 11px;\n  }\n}\n\n.league-caption[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 3px;\n  color: #1677ff;\n  font-size: 10px;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n\n.winner[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--baseball-ink);\n  font-weight: 600;\n}\n\n.market-label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 4px;\n  color: var(--baseball-muted);\n  font-size: 9px;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n\n.market-pick[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--baseball-ink);\n  font-size: 13px;\n  font-weight: 600;\n\n  &.no-signal {\n    color: var(--baseball-muted);\n    font-weight: 500;\n  }\n}\n\n.net-units[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n}\n\n.units-positive[_ngcontent-%COMP%] {\n  color: #237a45 !important;\n}\n\n.units-negative[_ngcontent-%COMP%] {\n  color: #c92a2a !important;\n}\n\n.units-neutral[_ngcontent-%COMP%] {\n  color: var(--baseball-muted) !important;\n}\n\n.empty-row[_ngcontent-%COMP%] {\n  height: 160px;\n  color: var(--baseball-muted) !important;\n  text-align: center;\n}\n\n@media (max-width: 991.98px) {\n  .control-grid[_ngcontent-%COMP%], \n   .history-controls[_ngcontent-%COMP%], \n   .update-controls[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .action-button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media (max-width: 575.98px) {\n  .control-grid[_ngcontent-%COMP%], \n   .history-controls[_ngcontent-%COMP%], \n   .update-controls[_ngcontent-%COMP%], \n   .run-summary[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    width: 100%;\n  }\n\n  .run-summary[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    border-right: 0;\n    border-bottom: 1px solid var(--baseball-line);\n\n    &:last-child {\n      border-bottom: 0;\n    }\n  }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseballComponent, [{
        type: Component,
        args: [{ selector: 'app-baseball', imports: [CommonModule, FormsModule, CardComponent, MarketStatusComponent], template: "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-card [cardTitle]=\"cardTitle\">\n    @if (activeView === 'generate') {\n      <div>\n        <form class=\"control-grid\" (ngSubmit)=\"generate()\">\n          <div class=\"field\">\n            <label for=\"prediction-date\">Fecha</label>\n            <input id=\"prediction-date\" class=\"form-control\" type=\"date\" name=\"date\" [(ngModel)]=\"request.date\" required />\n          </div>\n          <div class=\"field\">\n            <label for=\"prediction-league\">Liga</label>\n            <select id=\"prediction-league\" class=\"form-select\" name=\"league\" [(ngModel)]=\"request.league\">\n              <option value=\"mlb\">MLB</option>\n              <option value=\"kbo\">KBO</option>\n              <option value=\"all\">Todas</option>\n            </select>\n          </div>\n          <div class=\"field\">\n            <label for=\"prediction-limit\">Partidos</label>\n            <input id=\"prediction-limit\" class=\"form-control\" type=\"number\" name=\"limit\" min=\"1\" max=\"20\" [(ngModel)]=\"request.limit\" />\n          </div>\n          <button class=\"btn btn-primary action-button\" type=\"submit\" [disabled]=\"generating\">\n            Generar y guardar\n          </button>\n        </form>\n      </div>\n\n      @if (generationError) {\n        <div class=\"alert alert-danger\" role=\"alert\">{{ generationError }}</div>\n      }\n\n      @if (generation; as data) {\n        <div class=\"run-summary mb-4\">\n          <div><strong>{{ data.games_found }}</strong><span>Partidos encontrados</span></div>\n          <div><strong>{{ data.games_returned }}</strong><span>Predicciones generadas</span></div>\n          <div><strong>{{ data.persistence?.inserted ?? 0 }}</strong><span>Nuevos registros</span></div>\n          <div><strong>{{ data.persistence?.updated ?? 0 }}</strong><span>Registros actualizados</span></div>\n        </div>\n\n        @if (data.persistence?.error) {\n          <div class=\"alert alert-warning\" role=\"alert\">{{ data.persistence?.error }}</div>\n        }\n\n        <div class=\"mt-4 border rounded overflow-hidden\">\n          <div class=\"px-3 py-2 border-bottom bg-light text-muted f-12\">\n            {{ data.requested_date | date: 'dd MMM yyyy' }} \u00B7 {{ data.filters['league'] | uppercase }} \u00B7 {{ data.model_version }}\n          </div>\n          <div class=\"table-responsive\">\n            <table class=\"table align-middle prediction-table\">\n              <thead>\n                <tr>\n                  <th>Partido</th>\n                  <th>Ganador</th>\n                  <th>H\u00E1ndicap</th>\n                  <th>M\u00E1s / menos</th>\n                </tr>\n              </thead>\n              <tbody>\n                @for (prediction of data.predictions; track trackPrediction($index, prediction)) {\n                  <tr>\n                    <td>\n                      <span class=\"league-caption\">{{ prediction.league }}</span>\n                      <strong>{{ prediction.away_team }} <span>vs</span> {{ prediction.home_team }}</strong>\n                      <small>{{ prediction.kickoff | date: 'shortTime' }}</small>\n                    </td>\n                    <td>\n                      <span class=\"market-label\">Moneyline</span>\n                      <span class=\"winner\">{{ winner(prediction) }}</span>\n                      <small>{{ (prediction.predicted_result === 'home' ? prediction.probabilities.home : prediction.probabilities.away) | number: '1.0-1' }}% estimado</small>\n                    </td>\n                    <td>\n                      <span class=\"market-label\">Run line</span>\n                      <span class=\"market-pick\" [class.no-signal]=\"!prediction.markets?.handicap_team\">{{ handicap(prediction) }}</span>\n                      <small>\n                        @if (prediction.markets?.handicap_confidence !== null) {\n                          Probabilidad {{ prediction.markets?.handicap_confidence | number: '1.0-0' }}%\n                        } @else {\n                          Probabilidad no disponible\n                        }\n                      </small>\n                    </td>\n                    <td>\n                      <span class=\"market-label\">Juego completo</span>\n                      <span class=\"market-pick\" [class.no-signal]=\"!prediction.markets?.total_pick\">{{ total(prediction) }}</span>\n                      <small>\n                        @if (prediction.markets?.total_confidence !== null) {\n                          Probabilidad {{ prediction.markets?.total_confidence | number: '1.0-0' }}%\n                        } @else {\n                          Probabilidad no disponible\n                        }\n                      </small>\n                    </td>\n                  </tr>\n                } @empty {\n                  <tr><td colspan=\"4\" class=\"empty-row\">No hay partidos elegibles para esta fecha y liga.</td></tr>\n                }\n              </tbody>\n            </table>\n          </div>\n        </div>\n      }\n    } @else if (activeView === 'results') {\n      <div>\n        <div class=\"control-grid history-controls\">\n          <div class=\"field\">\n            <label for=\"result-date\">Fecha</label>\n            <input id=\"result-date\" class=\"form-control\" type=\"date\" [(ngModel)]=\"resultDate\" (change)=\"loadResults()\" />\n          </div>\n          <div class=\"field\">\n            <label for=\"result-league\">Liga</label>\n            <select id=\"result-league\" class=\"form-select\" [(ngModel)]=\"resultLeague\" (change)=\"loadResults()\">\n              <option value=\"mlb\">MLB</option>\n              <option value=\"kbo\">KBO</option>\n            </select>\n          </div>\n        </div>\n        <small class=\"d-block mt-2 text-muted\">\n          Fuente: colecci\u00F3n de predicciones en MongoDB.\n        </small>\n      </div>\n\n      @if (resultsError) {\n        <div class=\"alert alert-danger\" role=\"alert\">{{ resultsError }}</div>\n      }\n\n      <div class=\"mt-4 border rounded overflow-hidden\">\n        <div class=\"table-responsive\">\n          <table class=\"table align-middle prediction-table\">\n            <thead>\n              <tr>\n                <th>Generada</th>\n                <th>Partido</th>\n                <th>Ganador</th>\n                <th>H\u00E1ndicap</th>\n                <th>M\u00E1s / menos</th>\n                <th>Balance</th>\n              </tr>\n            </thead>\n            <tbody>\n              @for (record of storedResults; track trackStored($index, record)) {\n                <tr>\n                  <td>\n                    <strong>{{ record.generated_at | date: 'dd MMM' }}</strong>\n                    <small>{{ record.generated_at | date: 'shortTime' }}</small>\n                  </td>\n                  <td>\n                    <span class=\"league-caption\">{{ record.prediction.league }}</span>\n                    <strong>{{ record.prediction.away_team }} <span>vs</span> {{ record.prediction.home_team }}</strong>\n                    @if (record.settlement) {\n                      <small>Final: {{ record.settlement.away_score }}\u2013{{ record.settlement.home_score }}</small>\n                    }\n                  </td>\n                  <td>\n                    <span class=\"market-label\">Moneyline</span>\n                    <span class=\"winner\">{{ winner(record.prediction) }}</span>\n                    <small>{{ (record.prediction.predicted_result === 'home' ? record.prediction.probabilities.home : record.prediction.probabilities.away) | number: '1.0-1' }}%</small>\n                    <app-market-status\n                      [outcome]=\"marketOutcomeValue(record, 'moneyline')\"\n                      [units]=\"marketUnits(record, 'moneyline')\"\n                    />\n                  </td>\n                  <td>\n                    <span class=\"market-label\">Run line</span>\n                    <span class=\"market-pick\" [class.no-signal]=\"!record.prediction.markets?.handicap_team\">{{ handicap(record.prediction) }}</span>\n                    <small>\n                      @if (record.prediction.markets?.handicap_confidence !== null) {\n                        Probabilidad {{ record.prediction.markets?.handicap_confidence | number: '1.0-0' }}%\n                      } @else {\n                        Probabilidad no disponible\n                      }\n                    </small>\n                    <app-market-status\n                      [outcome]=\"marketOutcomeValue(record, 'handicap')\"\n                      [units]=\"marketUnits(record, 'handicap')\"\n                    />\n                  </td>\n                  <td>\n                    <span class=\"market-label\">Juego completo</span>\n                    <span class=\"market-pick\" [class.no-signal]=\"!record.prediction.markets?.total_pick\">{{ total(record.prediction) }}</span>\n                    <small>\n                      @if (record.prediction.markets?.total_confidence !== null) {\n                        Probabilidad {{ record.prediction.markets?.total_confidence | number: '1.0-0' }}%\n                      } @else {\n                        Probabilidad no disponible\n                      }\n                    </small>\n                    <app-market-status\n                      [outcome]=\"marketOutcomeValue(record, 'total')\"\n                      [units]=\"marketUnits(record, 'total')\"\n                    />\n                  </td>\n                  <td>\n                    <span class=\"market-label\">3 apuestas</span>\n                    <strong class=\"net-units\" [ngClass]=\"unitsClass(record.settlement?.net_units)\">\n                      {{ unitsLabel(record.settlement?.net_units) }}\n                    </strong>\n                    <small>Unidades netas</small>\n                  </td>\n                </tr>\n              } @empty {\n                <tr><td colspan=\"6\" class=\"empty-row\">No hay predicciones almacenadas con estos filtros.</td></tr>\n              }\n            </tbody>\n          </table>\n        </div>\n      </div>\n    } @else {\n      <form class=\"control-grid update-controls\" (ngSubmit)=\"updateMarketResults()\">\n        <div class=\"field\">\n          <label for=\"update-date\">Fecha de los partidos</label>\n          <input id=\"update-date\" class=\"form-control\" type=\"date\" name=\"updateDate\" [(ngModel)]=\"updateRequest.date\" required />\n        </div>\n        <div class=\"field\">\n          <label for=\"update-league\">Liga</label>\n          <select id=\"update-league\" class=\"form-select\" name=\"updateLeague\" [(ngModel)]=\"updateRequest.league\">\n            <option value=\"mlb\">MLB</option>\n            <option value=\"kbo\">KBO</option>\n          </select>\n        </div>\n        <button class=\"btn btn-primary action-button\" type=\"submit\" [disabled]=\"updatingResults\">\n          Consultar y actualizar\n        </button>\n      </form>\n\n      <small class=\"d-block mt-2 text-muted\">\n        Solo se procesan partidos finalizados y se actualizan los resultados de Moneyline, Run line y M\u00E1s/Menos.\n      </small>\n\n      @if (updateError) {\n        <div class=\"alert alert-danger mt-3\" role=\"alert\">{{ updateError }}</div>\n      }\n\n      @if (updateResponse; as summary) {\n        <div class=\"run-summary mt-4\">\n          <div><strong>{{ summary.official_games }}</strong><span>Juegos oficiales</span></div>\n          <div><strong>{{ summary.final_games }}</strong><span>Juegos finalizados</span></div>\n          <div><strong>{{ summary.predictions_matched }}</strong><span>Predicciones encontradas</span></div>\n          <div><strong>{{ summary.predictions_updated }}</strong><span>Predicciones actualizadas</span></div>\n        </div>\n\n        @if (summary.not_found.length) {\n          <div class=\"alert alert-warning mt-3 mb-0\" role=\"alert\">\n            Sin predicci\u00F3n guardada: {{ summary.not_found.join(', ') }}\n          </div>\n        }\n      }\n    }\n    </app-card>\n  </div>\n</div>\n", styles: [":host {\n  --baseball-ink: #262626;\n  --baseball-muted: #8c8c8c;\n  --baseball-line: #f0f0f0;\n  display: block;\n}\n\n:host-context([data-bs-theme='dark']) {\n  --baseball-ink: #f1f4f6;\n  --baseball-muted: #9da7b3;\n  --baseball-line: #343c46;\n\n  .run-summary {\n    background: #191e24;\n  }\n\n  .field label {\n    color: #b9c2cc;\n  }\n\n  .prediction-table td strong,\n  .winner,\n  .market-pick {\n    color: #f1f4f6;\n  }\n\n  .league-caption {\n    color: #5cd5cd;\n  }\n\n  .units-positive {\n    color: #79d69f !important;\n  }\n\n  .units-negative {\n    color: #ff929a !important;\n  }\n}\n\n.control-grid {\n  display: grid;\n  grid-template-columns: minmax(180px, 1.2fr) minmax(150px, 1fr) minmax(110px, 0.65fr) auto;\n  align-items: end;\n  gap: 16px;\n}\n\n.history-controls {\n  grid-template-columns: repeat(2, minmax(180px, 280px));\n}\n\n.update-controls {\n  grid-template-columns: minmax(180px, 1fr) minmax(180px, 1fr) auto;\n  max-width: 760px;\n}\n\n.field {\n  label {\n    margin-bottom: 7px;\n    color: #595959;\n    font-size: 12px;\n    font-weight: 500;\n  }\n\n}\n\n.action-button {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  min-width: 152px;\n  min-height: 40px;\n  border-radius: 4px;\n  white-space: nowrap;\n}\n\n.run-summary {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  border: 1px solid var(--baseball-line);\n  border-radius: 6px;\n  background: #fff;\n\n  div {\n    min-width: 0;\n    padding: 16px 20px;\n    border-right: 1px solid var(--baseball-line);\n\n    &:last-child {\n      border-right: 0;\n    }\n  }\n\n  strong {\n    display: block;\n    color: var(--baseball-ink);\n    font-size: 22px;\n    font-weight: 600;\n  }\n\n  span {\n    display: block;\n    margin-top: 2px;\n    color: var(--baseball-muted);\n    font-size: 11px;\n  }\n}\n\n.prediction-table {\n  min-width: 820px;\n  margin: 0;\n\n  th {\n    padding: 11px 20px;\n    background: #fafafa;\n    color: #8c8c8c;\n    font-size: 10px;\n    font-weight: 600;\n    text-transform: uppercase;\n  }\n\n  td {\n    padding: 14px 20px;\n    font-size: 13px;\n  }\n\n  td strong,\n  td small {\n    display: block;\n  }\n\n  td small {\n    margin-top: 3px;\n    color: var(--baseball-muted);\n    font-size: 11px;\n  }\n}\n\n.league-caption {\n  display: block;\n  margin-bottom: 3px;\n  color: #1677ff;\n  font-size: 10px;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n\n.winner {\n  display: block;\n  color: var(--baseball-ink);\n  font-weight: 600;\n}\n\n.market-label {\n  display: block;\n  margin-bottom: 4px;\n  color: var(--baseball-muted);\n  font-size: 9px;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n\n.market-pick {\n  display: block;\n  color: var(--baseball-ink);\n  font-size: 13px;\n  font-weight: 600;\n\n  &.no-signal {\n    color: var(--baseball-muted);\n    font-weight: 500;\n  }\n}\n\n.net-units {\n  font-size: 18px;\n  font-weight: 700;\n}\n\n.units-positive {\n  color: #237a45 !important;\n}\n\n.units-negative {\n  color: #c92a2a !important;\n}\n\n.units-neutral {\n  color: var(--baseball-muted) !important;\n}\n\n.empty-row {\n  height: 160px;\n  color: var(--baseball-muted) !important;\n  text-align: center;\n}\n\n@media (max-width: 991.98px) {\n  .control-grid,\n  .history-controls,\n  .update-controls {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .action-button {\n    width: 100%;\n  }\n}\n\n@media (max-width: 575.98px) {\n  .control-grid,\n  .history-controls,\n  .update-controls,\n  .run-summary {\n    grid-template-columns: 1fr;\n    width: 100%;\n  }\n\n  .run-summary div {\n    border-right: 0;\n    border-bottom: 1px solid var(--baseball-line);\n\n    &:last-child {\n      border-bottom: 0;\n    }\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BaseballComponent, { className: "BaseballComponent", filePath: "src/app/features/baseball/baseball.component.ts", lineNumber: 29 }); })();
//# sourceMappingURL=baseball.component.js.map