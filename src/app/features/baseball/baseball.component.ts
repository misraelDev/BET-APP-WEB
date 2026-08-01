import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs';
import { HOUR_FILTER_OPTIONS } from 'src/app/shared/hour-filter.options';
import { apiErrorMessage } from 'src/app/shared/api-error-message';

import { BaseballApiService } from './baseball-api.service';
import { PanelComponent } from 'src/app/components/ui/panel/panel.component';
import { MarketStatusComponent } from 'src/app/components/ui/market-status/market-status.component';
import { PaginationComponent } from 'src/app/components/ui/pagination/pagination.component';
import { SelectComponent } from 'src/app/components/ui/select/select.component';
import { MarketLabelComponent } from 'src/app/components/ui/market-label/market-label.component';
import { ProbabilityBarComponent } from 'src/app/components/ui/probability-bar/probability-bar.component';
import {
  BaseballGamePrediction,
  BaseballPredictionRequest,
  BaseballPredictionResponse,
  BaseballResultsUpdateRequest,
  BaseballResultsUpdateResponse,
  StoredBaseballPrediction
} from './baseball.models';

type BaseballView = 'generate' | 'results' | 'update';
type MarketType = 'moneyline' | 'handicap' | 'total';
type MarketOutcome = 'won' | 'lost' | 'push' | 'pending';

@Component({
  selector: 'app-baseball',
  imports: [CommonModule, FormsModule, PanelComponent, MarketStatusComponent, PaginationComponent, SelectComponent, MarketLabelComponent, ProbabilityBarComponent],
  templateUrl: './baseball.component.html',
  styles: []
})
export class BaseballComponent implements OnInit {
  readonly leagueOptions = [{ value: 'mlb', label: 'MLB' }, { value: 'kbo', label: 'KBO' }, { value: 'all', label: 'Todas' }];
  private readonly api = inject(BaseballApiService);
  private readonly route = inject(ActivatedRoute);
  private readonly cdr = inject(ChangeDetectorRef);
  private resultsRequestId = 0;

  activeView: BaseballView = this.route.snapshot.data['baseballView'] ?? 'generate';
  request: BaseballPredictionRequest = {
    date: this.today(),
    timezone: 'America/Mexico_City',
    limit: 20,
    league: 'mlb'
  };
  resultDate = this.today();
  resultLeague: 'mlb' | 'kbo' = 'mlb';
  updateRequest: BaseballResultsUpdateRequest = {
    date: this.today(),
    league: 'mlb'
  };
  generation: BaseballPredictionResponse | null = null;
  updateResponse: BaseballResultsUpdateResponse | null = null;
  storedResults: StoredBaseballPrediction[] = [];
  resultsPage = 1;
  resultsPageSize = 10;
  resultsTotal = 0;
  resultsTotalPages = 0;
  resultsHour = 'all';
  readonly hourOptions = HOUR_FILTER_OPTIONS;
  generating = false;
  loadingResults = false;
  generationError = '';
  resultsError = '';
  updateError = '';
  updatingResults = false;

  get cardTitle(): string {
    const titles: Record<BaseballView, string> = {
      generate: 'Centro de predicciones',
      results: 'Resultados guardados',
      update: 'Actualizar resultados'
    };
    return titles[this.activeView];
  }

  ngOnInit(): void {
    if (this.activeView === 'results') {
      this.loadResults();
    }
  }

  generate(): void {
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

  loadResults(): void {
    const requestId = ++this.resultsRequestId;
    this.loadingResults = true;
    this.resultsError = '';
    this.api
      .getResults(this.resultDate, this.resultLeague, this.resultsPage, this.resultsPageSize, this.resultsHour)
      .pipe(finalize(() => (this.loadingResults = false)))
      .subscribe({
        next: (response) => {
          if (requestId !== this.resultsRequestId) return;
          console.info('[Baseball][MongoDB] GET /results response:', response);
          this.storedResults = response.items;
          this.resultsPage = response.page;
          this.resultsTotal = response.total;
          this.resultsTotalPages = response.totalPages;
          this.cdr.detectChanges();
        },
        error: (error) => {
          if (requestId !== this.resultsRequestId) return;
          console.error('[Baseball][MongoDB] GET /results error:', error);
          this.storedResults = [];
          this.resultsError = this.errorMessage(error, 'No fue posible consultar los resultados guardados.');
          this.cdr.detectChanges();
        }
      });
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

  updateMarketResults(): void {
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

  winner(prediction: BaseballGamePrediction): string {
    return prediction.predicted_result === 'home' ? prediction.home_team : prediction.away_team;
  }

  handicap(prediction: BaseballGamePrediction): string {
    const market = prediction.markets;
    if (!market?.handicap_team || market.handicap_line === null) {
      return 'Sin señal';
    }
    const line = market.handicap_line > 0 ? `+${market.handicap_line}` : `${market.handicap_line}`;
    return `${market.handicap_team} ${line}`;
  }

  total(prediction: BaseballGamePrediction): string {
    const market = prediction.markets;
    if (!market?.total_pick || market.total_line === null) {
      return 'Sin señal';
    }
    return `${market.total_pick === 'over' ? 'Más' : 'Menos'} ${market.total_line}`;
  }

  marketUnits(record: StoredBaseballPrediction, market: MarketType): number | null {
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

  unitsLabel(value: number | null | undefined): string {
    if (value === null || value === undefined) {
      return '—';
    }
    return value > 0 ? `+${value}` : `${value}`;
  }

  unitsClass(value: number | null | undefined): string {
    if (value === null || value === undefined || value === 0) {
      return 'units-neutral';
    }
    return value > 0 ? 'units-positive' : 'units-negative';
  }

  trackPrediction(_: number, prediction: BaseballGamePrediction): number {
    return prediction.game_id;
  }

  trackStored(_: number, document: StoredBaseballPrediction): string {
    return document.document_id;
  }

  private today(): string {
    const now = new Date();
    const offset = now.getTimezoneOffset() * 60_000;
    return new Date(now.getTime() - offset).toISOString().slice(0, 10);
  }

  marketOutcomeValue(record: StoredBaseballPrediction, market: MarketType): MarketOutcome {
    if (!record.settlement) {
      return 'pending';
    }
    if (market === 'moneyline') {
      return record.settlement.outcome;
    }
    const outcome = market === 'handicap' ? record.settlement.handicap_outcome : record.settlement.total_outcome;
    return outcome ?? 'pending';
  }

  private errorMessage(
    error: { error?: { detail?: string }; name?: string; status?: number },
    fallback: string
  ): string {
    if (error?.name === 'TimeoutError') {
      return 'La operación superó el tiempo máximo. Verifica la fuente de datos e inténtalo nuevamente.';
    }
    if (error?.status === 0) {
      return apiErrorMessage(error, fallback);
    }
    return error?.error?.detail || fallback;
  }
}
