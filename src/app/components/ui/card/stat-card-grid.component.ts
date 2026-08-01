import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { StatCardComponent, StatCardData } from './stat-card.component';

@Component({
  selector: 'app-stat-card-grid',
  standalone: true,
  imports: [StatCardComponent],
  template: `<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">@for (stat of items(); track stat.title) { <app-stat-card [stat]="stat" /> }</div>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatCardGridComponent {
  readonly items = input.required<StatCardData[]>();
}
