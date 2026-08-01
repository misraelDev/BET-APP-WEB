import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HOUR_FILTER_OPTIONS } from 'src/app/shared/hour-filter.options';
import { apiErrorMessage } from 'src/app/shared/api-error-message';

import { PanelComponent } from 'src/app/components/ui/panel/panel.component';
import { MarketStatusComponent } from 'src/app/components/ui/market-status/market-status.component';
import { PaginationComponent } from 'src/app/components/ui/pagination/pagination.component';
import { SelectComponent } from 'src/app/components/ui/select/select.component';
import { MarketLabelComponent } from 'src/app/components/ui/market-label/market-label.component';
import { ProbabilityBarComponent } from 'src/app/components/ui/probability-bar/probability-bar.component';
import { FootballApiService } from './football-api.service';
import {
  FootballMarket,
  FootballMarketKey,
  FootballLeague,
  FootballPrediction,
  FootballPredictionResponse,
  FootballUpdateResponse,
  StoredFootballPrediction
} from './football.models';

type FootballView = 'generate' | 'results' | 'update';

@Component({
  selector: 'app-football',
  imports: [CommonModule, FormsModule, PanelComponent, MarketStatusComponent, PaginationComponent, SelectComponent, MarketLabelComponent, ProbabilityBarComponent],
  templateUrl: './football.component.html',
  styles: []
})
export class FootballComponent implements OnInit {
  private readonly api = inject(FootballApiService);
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly route = inject(ActivatedRoute);
  private resultsRequestId = 0;

  readonly markets: Array<{ key: FootballMarketKey; label: string; caption: string }> = [
    { key: 'winner', label: 'Ganador', caption: '1X2' },
    { key: 'handicap', label: 'Hándicap', caption: 'Línea asiática' },
    { key: 'double_chance', label: 'Doble oportunidad', caption: 'Doble oportunidad' },
    { key: 'goals', label: 'Goles', caption: 'Más / menos' },
    { key: 'corners', label: 'Córners', caption: 'Juego completo' },
    { key: 'cards', label: 'Tarjetas', caption: 'Juego completo' }
  ];
  activeView: FootballView = this.route.snapshot.data['footballView'] ?? 'generate';
  date = this.today();
  league: FootballLeague = 'all';
  readonly leagues: Array<{ value: FootballLeague; label: string }> = [
    { value: 'all', label: 'Todas las ligas' },
    { value: 'liga_mx', label: 'Liga MX' },
    { value: 'brasileirao', label: 'Brasileirão Betano' }
  ];
  limit = 20;
  working = false;
  error = '';
  response: FootballPredictionResponse | null = null;
  storedResults: StoredFootballPrediction[] = [];
  resultsPage = 1;
  resultsPageSize = 10;
  resultsTotal = 0;
  resultsTotalPages = 0;
  resultsHour = 'all';
  readonly hourOptions = HOUR_FILTER_OPTIONS;
  updateResponse: FootballUpdateResponse | null = null;

  get title(): string {
    return {
      generate: 'Predicciones de fútbol',
      results: 'Predicciones guardadas',
      update: 'Actualizar resultados'
    }[this.activeView];
  }

  ngOnInit(): void {
    if (this.activeView === 'results') this.loadResults();
  }

  generate(): void {
    this.runRequest(this.api.generate(this.date, this.league, Number(this.limit)), (value) => (this.response = value));
  }

  loadResults(): void {
    const requestId = ++this.resultsRequestId;
    this.runRequest(this.api.getResults(this.date, this.league, this.resultsPage, this.resultsPageSize, this.resultsHour), (value) => {
      if (requestId !== this.resultsRequestId) return;
      this.storedResults = value.items;
      this.resultsPage = value.page;
      this.resultsTotal = value.total;
      this.resultsTotalPages = value.totalPages;
    }, true);
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

  updateResults(): void {
    this.runRequest(this.api.updateResults(this.date), (value) => (this.updateResponse = value));
  }

  selection(prediction: FootballPrediction, key: FootballMarketKey): string {
    if (key === 'winner') {
      if (prediction.predicted_result === 'draw') return 'Empate';
      return prediction.predicted_result === 'home' ? prediction.home_team : prediction.away_team;
    }
    const market = prediction.markets?.[key];
    if (!market?.available || !market.selection) return 'Sin señal';
    const signed = key === 'handicap' && market.line !== null && market.line > 0 ? '+' : '';
    const line = market.line === null ? '' : ` ${signed}${market.line}`;
    return `${market.selection}${line}`;
  }

  probability(prediction: FootballPrediction, key: FootballMarketKey): number | null {
    if (key === 'winner') return prediction.probabilities[prediction.predicted_result];
    return prediction.markets?.[key]?.probability ?? null;
  }

  reason(prediction: FootballPrediction, key: FootballMarketKey): string {
    if (key === 'winner') return '';
    return prediction.markets?.[key]?.reason ?? '';
  }

  trackPrediction(_: number, prediction: FootballPrediction): number {
    return prediction.fixture_id;
  }

  private runRequest<T>(request: Observable<T>, assign: (value: T) => void, allowConcurrent = false): void {
    if (this.working && !allowConcurrent) return;
    this.working = true;
    this.error = '';
    request.subscribe({
      next: (value: T) => {
        assign(value);
        this.working = false;
        this.cdr.detectChanges();
      },
      error: (error: any) => {
        this.error = apiErrorMessage(error, 'No fue posible completar la operación.');
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
