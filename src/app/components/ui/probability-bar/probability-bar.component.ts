import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-probability-bar', standalone: true,
  templateUrl: './probability-bar.component.html', styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProbabilityBarComponent {
  readonly value = input<number | null | undefined>(null);
  readonly normalized = computed(() => this.value() === null || this.value() === undefined ? null : Math.max(0, Math.min(100, Number(this.value()))));
  readonly tone = computed(() => {
    const value = this.normalized();
    return value !== null && value >= 70 ? 'bg-emerald-500' : value !== null && value >= 55 ? 'bg-amber-500' : 'bg-gray-400';
  });
}
