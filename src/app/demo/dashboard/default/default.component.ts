import { CommonModule } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApexOptions, NgApexchartsModule } from 'ng-apexcharts';

import { environment } from 'src/environments/environment';
import { PanelComponent } from 'src/app/components/ui/panel/panel.component';
import { SelectComponent } from 'src/app/components/ui/select/select.component';
import { StatCardData } from 'src/app/components/ui/card/stat-card.component';
import { StatCardGridComponent } from 'src/app/components/ui/card/stat-card-grid.component';

interface DashboardStats {
  summary: {
    settled_predictions: number;
    evaluated_bets: number;
    won: number;
    lost: number;
    push: number;
    hit_rate: number;
    net_units: number;
  };
  markets: Array<{
    market: string;
    label: string;
    won: number;
    lost: number;
    push: number;
    net_units: number;
    hit_rate: number;
  }>;
  daily: Array<{ date: string; net_units: number; won: number; lost: number; push: number; bets: number; predictions: number }>;
  leagues: Array<{ league: string; net_units: number; bets: number; predictions: number }>;
  recent: Array<{
    date: string;
    league: string;
    away_team: string;
    home_team: string;
    net_units: number;
  }>;
}

@Component({
  selector: 'app-default',
  imports: [CommonModule, FormsModule, PanelComponent, NgApexchartsModule, SelectComponent, StatCardGridComponent],
  templateUrl: './default.component.html',
  styles: []
})
export class DefaultComponent implements OnInit {
  readonly leagueOptions = [
    { value: 'all', label: 'Todas las ligas' }, { value: 'mlb', label: 'MLB' }, { value: 'kbo', label: 'KBO' }
  ];
  readonly periodOptions = [
    { value: 7, label: '7 días' }, { value: 30, label: '30 días' },
    { value: 90, label: '90 días' }, { value: 365, label: '1 año' }
  ];
  private readonly http = inject(HttpClient);
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly statsUrl = `${environment.apiUrl}/api/v1/baseball/stats`;

  league: 'all' | 'mlb' | 'kbo' = 'all';
  days = 30;
  loading = false;
  error = '';
  stats: DashboardStats | null = null;
  balanceChart: Partial<ApexOptions> = {};
  marketChart: Partial<ApexOptions> = {};

  ngOnInit(): void {
    this.loadStats();
  }

  loadStats(): void {
    this.loading = true;
    this.error = '';
    const params = new HttpParams()
      .set('league', this.league)
      .set('days', this.days);
    this.http.get<DashboardStats>(this.statsUrl, { params }).subscribe({
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

  units(value: number): string {
    return value > 0 ? `+${value}` : `${value}`;
  }

  unitsClass(value: number): string {
    return value > 0
      ? 'text-emerald-700 dark:text-emerald-400'
      : value < 0
        ? 'text-red-700 dark:text-red-400'
        : 'text-gray-500';
  }

  summaryCards(data: DashboardStats): StatCardData[] {
    const hasTimeline = data.daily.length > 1;
    const balanceSeries = hasTimeline
      ? data.daily.map((item) => item.net_units)
      : [...data.recent].reverse().map((item) => item.net_units);
    const balanceCategories = hasTimeline
      ? data.daily.map((item) => item.date)
      : [...data.recent].reverse().map((item) => `${item.away_team} vs ${item.home_team}`);
    const marketVolume = data.markets.map((item) => item.won + item.lost + item.push);
    const marketRates = data.markets.map((item) => item.hit_rate);
    const leaguePredictions = data.leagues.map((item) => item.predictions);
    return [
      {
        title: 'Balance neto', value: this.units(data.summary.net_units),
        percentage: `${Math.abs(data.summary.net_units)} u`, trend: data.summary.net_units >= 0 ? 'up' : 'down',
        chartType: hasTimeline ? 'area' : 'bar', color: data.summary.net_units >= 0 ? '#0f766e' : '#c2413b', data: balanceSeries,
        categories: balanceCategories, valueSuffix: ' unidades'
      },
      {
        title: 'Tasa de acierto', value: `${data.summary.hit_rate.toFixed(1)}%`,
        percentage: `${data.summary.won} aciertos`, trend: data.summary.hit_rate >= 50 ? 'up' : 'down',
        chartType: 'bar', color: '#2563eb', data: marketRates,
        categories: data.markets.map((item) => item.label), valueSuffix: '%'
      },
      {
        title: 'Apuestas evaluadas', value: String(data.summary.evaluated_bets),
        percentage: `${data.summary.lost} falladas`, trend: data.summary.won >= data.summary.lost ? 'up' : 'down',
        chartType: 'bar', color: '#d97706', data: marketVolume,
        categories: data.markets.map((item) => item.label), valueSuffix: ' apuestas'
      },
      {
        title: 'Predicciones liquidadas', value: String(data.summary.settled_predictions),
        percentage: `${data.summary.push} nulas`, trend: 'up',
        chartType: 'bar', color: '#0891b2', data: leaguePredictions,
        categories: data.leagues.map((item) => item.league), valueSuffix: ' predicciones'
      }
    ];
  }




  private buildCharts(stats: DashboardStats): void {
    const dark = document.documentElement.classList.contains('dark');
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
}
