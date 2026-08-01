import { Component, computed, input } from '@angular/core';
import { LucideCheck, LucideClock3, LucideMinus, LucideX } from '@lucide/angular';
export type MarketOutcome = 'won' | 'lost' | 'push' | 'pending' | null;
@Component({ selector: 'app-market-status', standalone: true, imports: [LucideCheck, LucideClock3, LucideMinus, LucideX], templateUrl: './market-status.component.html', styles: [] })
export class MarketStatusComponent {
  outcome = input<MarketOutcome>('pending');
  units = input<number | null>(null);
  showUnits = input(true);
  normalizedOutcome = computed(() => this.outcome() ?? 'pending');
  label = computed(() => ({ won: 'Acertada', lost: 'Fallada', push: 'Nula', pending: 'No concluido' })[this.normalizedOutcome()]);
  unitsLabel = computed(() => this.units() === null ? '—' : this.units()! > 0 ? `+${this.units()}` : `${this.units()}`);
  unitsClass = computed(() => this.units() === null || this.units() === 0 ? 'mt-1 block text-xs font-semibold text-gray-500' : this.units()! > 0 ? 'mt-1 block text-xs font-semibold text-emerald-700 dark:text-emerald-400' : 'mt-1 block text-xs font-semibold text-red-700 dark:text-red-400');
}
