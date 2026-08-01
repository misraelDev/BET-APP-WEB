import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HOUR_FILTER_OPTIONS } from 'src/app/shared/hour-filter.options';

import { PanelComponent } from 'src/app/components/ui/panel/panel.component';
import { PaginationComponent } from 'src/app/components/ui/pagination/pagination.component';
import { SelectComponent } from 'src/app/components/ui/select/select.component';
import { MarketLabelComponent } from 'src/app/components/ui/market-label/market-label.component';
import { ProbabilityBarComponent } from 'src/app/components/ui/probability-bar/probability-bar.component';
import { MarketStatusComponent } from 'src/app/components/ui/market-status/market-status.component';
import { TennisApiService } from './tennis-api.service';
import { StoredTennisPrediction, TennisMarketKey, TennisPrediction, TennisPredictionResponse, TennisSettlement, TennisTour, TennisUpdateResponse } from './tennis.models';

type TennisView = 'generate' | 'results' | 'update';

@Component({
  selector: 'app-tennis',
  imports: [CommonModule, FormsModule, PanelComponent, PaginationComponent, SelectComponent, MarketLabelComponent, ProbabilityBarComponent, MarketStatusComponent],
  templateUrl: './tennis.component.html',
  styles: []
})
export class TennisComponent implements OnInit {
  private readonly api = inject(TennisApiService);
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly route = inject(ActivatedRoute);
  private resultsRequestId = 0;

  readonly markets: Array<{ key: TennisMarketKey; label: string; caption: string }> = [
    { key: 'winner', label: 'Ganador', caption: 'Partido' },
    { key: 'set_handicap', label: 'Hándicap', caption: 'Sets' },
    { key: 'total_games', label: 'Más / menos', caption: 'Juegos' },
    { key: 'exact_sets', label: 'Marcador', caption: 'Sets exactos' }
  ];
  readonly tours: Array<{ value: TennisTour; label: string }> = [
    { value: 'all', label: 'ATP y WTA' },
    { value: 'atp', label: 'ATP' },
    { value: 'wta', label: 'WTA' }
  ];
  activeView: TennisView = this.route.snapshot.data['tennisView'] ?? 'generate';
  date = this.today();
  tour: TennisTour = 'all';
  limit = 20;
  availableMatches: number | null = null;
  countLoading = false;
  working = false;
  error = '';
  response: TennisPredictionResponse | null = null;
  generationPage = 1;
  storedResults: StoredTennisPrediction[] = [];
  updateResponse: TennisUpdateResponse | null = null;
  resultsPage = 1;
  resultsPageSize = 10;
  resultsTotal = 0;
  resultsTotalPages = 0;
  resultsHour = 'all';
  resultsMarket: TennisMarketKey = 'winner';
  resultsMinProbability = 0;
  readonly hourOptions = HOUR_FILTER_OPTIONS;
  readonly probabilityOptions = [0, 50, 55, 60, 65, 70, 75, 80].map((value) => ({
    value,
    label: value ? `≥ ${value}%` : 'Cualquier porcentaje'
  }));
  readonly marketOptions = this.markets.map((market) => ({ value: market.key, label: market.label }));

  get title(): string {
    return { generate: 'Predicciones de tenis', results: 'Predicciones guardadas', update: 'Actualizar resultados' }[this.activeView];
  }

  get storedPredictions(): TennisPrediction[] {
    return this.storedResults.map((record) => record.prediction);
  }

  ngOnInit(): void {
    if (this.activeView === 'results') this.loadResults();
    if (this.activeView === 'generate') this.loadMatchCount();
  }

  get matchCountOptions(): Array<{ value: number; label: string }> {
    const total = this.availableMatches ?? 0;
    if (total <= 0) return [];
    const values = total <= 20
      ? Array.from({ length: total }, (_, index) => index + 1)
      : [...Array.from({ length: Math.floor(total / 5) }, (_, index) => (index + 1) * 5), total];
    return [...new Set(values.filter((value) => value <= total))].map((value) => ({
      value,
      label: value === total ? `${value} (todos)` : String(value)
    }));
  }

  loadMatchCount(): void {
    this.countLoading = true;
    this.availableMatches = null;
    this.response = null;
    this.error = '';
    this.api.getMatchCount(this.date, this.tour).subscribe({
      next: (value) => {
        this.availableMatches = value.matches_found;
        this.limit = Math.min(20, value.matches_found);
        this.countLoading = false;
        this.cdr.detectChanges();
      },
      error: (error: any) => {
        this.error = error?.status === 0
          ? 'El backend no está disponible en http://127.0.0.1:8000.'
          : error?.error?.detail || 'No fue posible consultar la cartelera.';
        this.countLoading = false;
        this.cdr.detectChanges();
      }
    });
  }

  generate(): void {
    this.runRequest(this.api.generate(this.date, this.tour, Number(this.limit), this.generationPage), (value) => {
      this.response = value;
      this.generationPage = value.page;
    });
  }

  generatePage(page: number): void {
    if (!this.response || page < 1 || page > this.response.total_pages || page === this.generationPage) return;
    this.generationPage = page;
    this.generate();
  }

  resetGenerationPage(): void {
    this.generationPage = 1;
    this.loadMatchCount();
  }

  loadResults(): void {
    const requestId = ++this.resultsRequestId;
    this.runRequest(this.api.getResults(
      this.date, this.tour, this.resultsPage, this.resultsPageSize,
      this.resultsHour, this.resultsMarket, this.resultsMinProbability
    ), (value) => {
      if (requestId !== this.resultsRequestId) return;
      this.storedResults = value.items;
      this.resultsPage = value.page;
      this.resultsTotal = value.total;
      this.resultsTotalPages = value.totalPages;
    }, true);
  }

  updateResults(): void {
    this.runRequest(this.api.updateResults(this.date, this.tour), (value) => (this.updateResponse = value));
  }

  settlement(prediction: TennisPrediction): TennisSettlement | null {
    return this.storedResults.find((record) => record.prediction.match_id === prediction.match_id)?.settlement ?? null;
  }

  marketOutcome(prediction: TennisPrediction, key: TennisMarketKey): 'won' | 'lost' | 'push' | 'pending' {
    return this.settlement(prediction)?.markets[key]?.outcome ?? 'pending';
  }

  marketUnits(prediction: TennisPrediction, key: TennisMarketKey): number | null {
    return this.settlement(prediction)?.markets[key]?.units ?? null;
  }

  changeResultsFilter(): void {
    this.resultsPage = 1;
    this.loadResults();
  }

  changeResultsPage(page: number): void {
    if (page < 1 || page > this.resultsTotalPages || page === this.resultsPage) return;
    this.resultsPage = page;
    this.loadResults();
  }

  changeResultsPageSize(pageSize: number): void {
    this.resultsPageSize = pageSize;
    this.resultsPage = 1;
    this.loadResults();
  }

  selection(prediction: TennisPrediction, key: TennisMarketKey): string {
    const market = prediction.markets[key];
    if (!market.available || !market.selection) return 'Sin señal';
    const signed = market.line !== null && market.line > 0 ? '+' : '';
    return `${market.selection}${market.line === null ? '' : ` ${signed}${market.line}`}`;
  }

  trackPrediction(_: number, prediction: TennisPrediction): number {
    return prediction.match_id;
  }

  private runRequest<T>(request: Observable<T>, assign: (value: T) => void, allowConcurrent = false): void {
    if (this.working && !allowConcurrent) return;
    this.working = true;
    this.error = '';
    request.subscribe({
      next: (value) => {
        assign(value);
        this.working = false;
        this.cdr.detectChanges();
      },
      error: (error: any) => {
        this.error = error?.status === 0
          ? 'El backend no está disponible en http://127.0.0.1:8000.'
          : error?.error?.detail || 'No fue posible completar la operación.';
        this.working = false;
        this.cdr.detectChanges();
      }
    });
  }

  private today(): string {
    const now = new Date();
    return new Date(now.getTime() - now.getTimezoneOffset() * 60_000).toISOString().slice(0, 10);
  }
}
