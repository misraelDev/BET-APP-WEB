import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import { LucideArrowDownRight, LucideArrowUpRight } from '@lucide/angular';

export type StatTrend = 'up' | 'down';
export type StatChartType = 'bar' | 'area';

export interface StatCardData {
  title: string;
  value: string;
  percentage: string;
  trend: StatTrend;
  data: number[];
  chartType: StatChartType;
  color: string;
  categories?: string[];
  valueSuffix?: string;
}

@Component({
  selector: 'app-stat-card',
  standalone: true,
  imports: [LucideArrowDownRight, LucideArrowUpRight],
  templateUrl: './stat-card.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatCardComponent {
  readonly stat = input.required<StatCardData>();
  readonly bars = computed(() => this.normalize(this.stat().data));
  readonly linePoints = computed(() => this.points(this.stat().data));
  readonly areaPoints = computed(() => `0,60 ${this.linePoints()} 200,60`);
  readonly hoverIndex = signal<number | null>(null);
  readonly tooltip = computed(() => {
    const index = this.hoverIndex();
    if (index === null) return null;
    return {
      label: this.stat().categories?.[index] ?? `Dato ${index + 1}`,
      value: `${this.stat().data[index] ?? 0}${this.stat().valueSuffix ?? ''}`
    };
  });

  move(event: MouseEvent): void {
    const count = this.stat().data.length;
    if (!count) return;
    const bounds = (event.currentTarget as HTMLElement).getBoundingClientRect();
    const position = Math.max(0, Math.min(0.999, (event.clientX - bounds.left) / bounds.width));
    this.hoverIndex.set(Math.floor(position * count));
  }

  private normalize(values: number[]): number[] {
    if (!values.length) return [20, 20, 20, 20, 20, 20];
    const min = Math.min(...values);
    const max = Math.max(...values);
    const range = max - min || 1;
    return values.map((value) => Math.max(12, 18 + ((value - min) / range) * 72));
  }

  private points(values: number[]): string {
    const normalized = this.normalize(values);
    const step = normalized.length > 1 ? 200 / (normalized.length - 1) : 200;
    return normalized.map((value, index) => `${index * step},${60 - value * 0.55}`).join(' ');
  }
}
