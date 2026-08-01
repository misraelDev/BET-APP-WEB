import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PanelComponent } from 'src/app/components/ui/panel/panel.component';
import { MarketLabelComponent } from 'src/app/components/ui/market-label/market-label.component';
import { MarketStatusComponent } from 'src/app/components/ui/market-status/market-status.component';
import { PaginationComponent } from 'src/app/components/ui/pagination/pagination.component';
import { ProbabilityBarComponent } from 'src/app/components/ui/probability-bar/probability-bar.component';
import { SelectComponent } from 'src/app/components/ui/select/select.component';
import { HOUR_FILTER_OPTIONS } from 'src/app/shared/hour-filter.options';
import { BasketballApiService } from './basketball-api.service';
import { BasketballLeague, BasketballPrediction, BasketballResponse, BasketballUpdateResponse, StoredBasketballPrediction } from './basketball.models';

type View = 'generate' | 'results' | 'update';
@Component({ selector: 'app-basketball', imports: [CommonModule, FormsModule, PanelComponent, MarketLabelComponent, MarketStatusComponent, PaginationComponent, ProbabilityBarComponent, SelectComponent], templateUrl: './basketball.component.html', styles: [] })
export class BasketballComponent implements OnInit {
  private readonly api = inject(BasketballApiService); private readonly route = inject(ActivatedRoute); private readonly cdr = inject(ChangeDetectorRef);
  activeView: View = this.route.snapshot.data['basketballView'] ?? 'generate'; date = this.today(); limit = 20; working = false; error = ''; response: BasketballResponse | null = null; records: StoredBasketballPrediction[] = []; updateResponse: BasketballUpdateResponse | null = null;
  league: BasketballLeague = 'nba'; readonly leagueOptions = [{ value: 'nba', label: 'NBA' }, { value: 'wnba', label: 'WNBA' }, { value: 'summer_league', label: 'NBA Summer League' }, { value: 'all', label: 'Todas' }];
  page = 1; pageSize = 10; total = 0; totalPages = 0; hour = 'all'; readonly hourOptions = HOUR_FILTER_OPTIONS;
  get title(): string { return { generate: 'Predicciones de básquetbol', results: 'Predicciones guardadas', update: 'Actualizar resultados' }[this.activeView]; }
  ngOnInit(): void { if (this.activeView === 'results') this.load(); }
  generate(): void { this.request(this.api.generate(this.date, this.league, +this.limit), (value) => this.response = value); }
  load(): void { this.request(this.api.results(this.date, this.league, this.page, this.pageSize, this.hour), (value) => { this.records = value.items; this.page = value.page; this.total = value.total; this.totalPages = value.totalPages; }); }
  filter(): void { this.page = 1; this.load(); } changePage(page: number): void { this.page = page; this.load(); } changeSize(size: number): void { this.pageSize = size; this.page = 1; this.load(); }
  update(): void { this.request(this.api.update(this.date, this.league), (value) => this.updateResponse = value); }
  winner(p: BasketballPrediction): string { return p.predicted_result === 'home' ? p.home_team : p.away_team; }
  winnerProbability(p: BasketballPrediction): number { return p.probabilities[p.predicted_result]; }
  handicap(p: BasketballPrediction): string { const m = p.markets; return m?.handicap_team && m.handicap_line !== null ? `${m.handicap_team} ${m.handicap_line > 0 ? '+' : ''}${m.handicap_line}` : 'Sin señal'; }
  totalPick(p: BasketballPrediction): string { const m = p.markets; return m?.total_pick && m.total_line !== null ? `${m.total_pick === 'over' ? 'Más' : 'Menos'} ${m.total_line}` : 'Sin señal'; }
  private request<T>(source: import('rxjs').Observable<T>, assign: (value: T) => void): void { if (this.working) return; this.working = true; this.error = ''; source.subscribe({ next: value => { assign(value); this.working = false; this.cdr.detectChanges(); }, error: error => { this.error = error?.error?.detail || 'No fue posible completar la operación.'; this.working = false; this.cdr.detectChanges(); } }); }
  private today(): string { const now = new Date(); return new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0, 10); }
}
