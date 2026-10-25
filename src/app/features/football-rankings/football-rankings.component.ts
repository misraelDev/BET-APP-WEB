import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { apiErrorMessage } from 'src/app/shared/api-error-message';
import { PaginationComponent } from 'src/app/components/ui/pagination/pagination.component';
import { FootballRankingsApiService } from './football-rankings-api.service';
import {
  RankingDetailResponse,
  RankingListResponse,
  RankingRow,
  RankingType,
  StoredFootballRanking
} from './football-rankings.models';

@Component({
  selector: 'app-football-rankings',
  standalone: true,
  imports: [CommonModule, FormsModule, PaginationComponent],
  templateUrl: './football-rankings.component.html',
  styles: []
})
export class FootballRankingsComponent implements OnInit {
  private readonly api = inject(FootballRankingsApiService);
  private readonly cdr = inject(ChangeDetectorRef);

  readonly leagues = [
    { value: '', label: 'Todas las ligas' },
    { value: 'liga_mx', label: 'Liga MX' },
    { value: 'liga_expansion_mx', label: 'Liga Expansión MX' },
    { value: 'brasileirao', label: 'Brasileirão' },
    { value: 'leagues_cup', label: 'Leagues Cup' },
    { value: 'mls', label: 'MLS' },
    { value: 'la_liga', label: 'LaLiga' },
    { value: 'premier_league', label: 'Premier League' },
    { value: 'serie_a', label: 'Serie A' },
    { value: 'bundesliga', label: 'Bundesliga' },
    { value: 'ligue_1', label: 'Ligue 1' },
    { value: 'champions_league', label: 'Champions League' },
    { value: 'europa_league', label: 'Europa League' },
    { value: 'conference_league', label: 'Conference League' },
    { value: 'libertadores', label: 'Libertadores' },
    { value: 'sudamericana', label: 'Sudamericana' },
    { value: 'liga_betplay', label: 'Liga BetPlay' },
    { value: 'liga_profesional_argentina', label: 'Liga Profesional Argentina' },
    { value: 'primera_division_chile', label: 'Primera División Chile' },
    { value: 'liga_1_peru', label: 'Liga 1 Perú' },
    { value: 'ligapro_ecuador', label: 'LigaPro Ecuador' },
    { value: 'primera_division_uruguay', label: 'Primera División Uruguay' },
    { value: 'saudi_pro_league', label: 'Saudi Pro League' },
    { value: 'qatar_stars_league', label: 'Qatar Stars League' },
    { value: 'afc_champions_league_elite', label: 'AFC Champions League Elite' },
    { value: 'afc_champions_league_two', label: 'AFC Champions League Two' }
  ];
  readonly rankingTypes: Array<{ value: RankingType | ''; label: string }> = [
    { value: '', label: 'Todos los tipos' },
    { value: 'first_team_to_score', label: 'Primer equipo en marcar' },
    { value: 'winner', label: 'Ganador' },
    { value: 'btts', label: 'Ambos anotan (BTTS)' },
    { value: 'over_1_5_goals', label: 'Más de 1.5 goles' },
    { value: 'shots_match', label: 'Remates del partido' },
    { value: 'shots_team', label: 'Remates por equipo' },
    { value: 'shots_player', label: 'Remates por jugador' },
    { value: 'shots_on_target_match', label: 'Remates a puerta del partido' },
    { value: 'shots_on_target_team', label: 'Remates a puerta por equipo' },
    { value: 'shots_on_target_player', label: 'Remates a puerta por jugador' },
    { value: 'corners_match', label: 'Córners totales' },
    { value: 'corners_team', label: 'Córners por equipo' },
    { value: 'corners_handicap', label: 'Hándicap de córners' },
    { value: 'corners_most', label: 'Quién hace más córners' },
    { value: 'league_main_selections', label: 'Selecciones principales de liga' },
    { value: 'overall_high_confidence', label: 'Mayor confianza · general' }
  ];

  readonly scopeTypes = [
    { value: '', label: 'Todos los alcances' },
    { value: 'league', label: 'Por liga' },
    { value: 'general', label: 'General · varias ligas' }
  ];

  date = this.todayInMexico();
  league = '';
  analyst = '';
  scope = '';
  rankingType: RankingType | '' = '';
  page = 1;
  pageSize = 10;
  total = 0;
  totalPages = 0;
  rankings: StoredFootballRanking[] = [];
  selected: RankingDetailResponse | null = null;
  loading = false;
  detailLoading = false;
  error = '';
  activeTab: 'browse' | 'publish' = 'browse';
  payloadText = '';
  publishMessage = '';
  publishError = '';
  publishing = false;

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading = true;
    this.error = '';
    this.selected = null;
    this.api.list({
      date: this.date,
      league: this.league,
      analyst: this.analyst,
      scope: this.scope,
      rankingType: this.rankingType,
      page: this.page,
      pageSize: this.pageSize
    }).subscribe({
      next: (value: RankingListResponse) => {
        this.rankings = value.items;
        this.total = value.total;
        this.totalPages = Math.ceil(value.total / value.page_size);
        this.page = value.page;
        this.pageSize = value.page_size;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (error: unknown) => {
        this.error = apiErrorMessage(error, 'No se pudieron consultar los rankings.');
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  applyFilters(): void {
    this.page = 1;
    this.load();
  }

  changePage(page: number): void {
    if (page < 1 || page > this.totalPages || page === this.page) return;
    this.page = page;
    this.load();
  }

  changePageSize(pageSize: number): void {
    this.pageSize = pageSize;
    this.page = 1;
    this.load();
  }

  open(ranking: StoredFootballRanking, version?: number): void {
    this.detailLoading = true;
    this.error = '';
    this.api.detail(ranking.ranking_id, version).subscribe({
      next: (value: RankingDetailResponse) => {
        this.selected = value;
        this.detailLoading = false;
        this.cdr.detectChanges();
      },
      error: (error: unknown) => {
        this.error = apiErrorMessage(error, 'No se pudo abrir el ranking.');
        this.detailLoading = false;
        this.cdr.detectChanges();
      }
    });
  }

  publish(): void {
    this.publishError = '';
    this.publishMessage = '';
    let payload: unknown;
    try {
      payload = JSON.parse(this.payloadText);
    } catch {
      this.publishError = 'El texto no es JSON válido. Corrige el formato y vuelve a intentar.';
      return;
    }
    if (!payload || typeof payload !== 'object' || !Array.isArray((payload as { items?: unknown }).items)) {
      this.publishError = 'El cuerpo debe tener el formato { "items": [ ... ] }.';
      return;
    }

    this.publishing = true;
    this.api.publish(payload).subscribe({
      next: (response) => {
        this.publishing = false;
        this.publishMessage = `${response.created} nuevo(s), ${response.replayed} reintento(s), ${response.rejected} rechazado(s).`;
        this.cdr.detectChanges();
        if (response.created || response.replayed) {
          this.activeTab = 'browse';
          this.applyFilters();
        }
      },
      error: (error: unknown) => {
        this.publishError = apiErrorMessage(error, 'La API rechazó el lote. Revisa el detalle y las referencias.');
        this.publishing = false;
        this.cdr.detectChanges();
      }
    });
  }

  marketName(market: string): string {
    const labels: Record<string, string> = {
      '1x2': 'Ganador', first_team_to_score: 'Primer equipo en marcar', btts: 'Ambos anotan',
      total_goals: 'Total de goles', shots_total: 'Remates totales', shots_team: 'Remates por equipo',
      shots_player: 'Remates por jugador', shots_on_target_total: 'Remates a puerta',
      shots_on_target_team: 'Remates a puerta por equipo', shots_on_target_player: 'Remates a puerta por jugador',
      corners_total: 'Córners totales', corners_team: 'Córners por equipo',
      corners_handicap: 'Hándicap de córners', corners_most: 'Más córners'
    };
    return labels[market] ?? market;
  }

  selection(row: RankingRow): string {
    const selection = row.selection ? this.selectionName(row.selection) : '';
    const line = row.line !== null ? ` ${row.line > 0 ? '+' : ''}${row.line}` : '';
    const team = row.team ? ` · ${row.team === 'home' ? row.home_team : row.away_team}` : '';
    const player = row.player ? ` · ${row.player}` : '';
    return `${selection}${line}${team}${player}`.trim() || '—';
  }

  selectionName(selection: string): string {
    const labels: Record<string, string> = {
      home: 'Local', away: 'Visitante', draw: 'Empate', yes: 'Sí', no: 'No',
      over: 'Más de', under: 'Menos de', none: 'Ninguno', home_or_draw: 'Local o empate',
      draw_or_away: 'Empate o visitante', home_or_away: 'Local o visitante'
    };
    return labels[selection] ?? selection;
  }

  leagueName(code: string | null): string {
    return this.leagues.find((league) => league.value === code)?.label ?? code ?? 'General';
  }

  rankingTypeName(type: string): string {
    return this.rankingTypes.find((entry) => entry.value === type)?.label ?? type;
  }

  formatUtc(value: string | null): string {
    if (!value) return 'Hora no informada';
    return new Intl.DateTimeFormat('es-MX', {
      year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit',
      timeZone: 'UTC', timeZoneName: 'short'
    }).format(new Date(value));
  }

  trackRanking(_: number, ranking: StoredFootballRanking): string {
    return `${ranking.ranking_id}:${ranking.version}`;
  }

  private todayInMexico(): string {
    return new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Mexico_City' }).format(new Date());
  }
}
