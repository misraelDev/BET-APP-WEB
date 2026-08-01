import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { LucideArrowUpDown, LucideFlag, LucideGauge, LucideGoal, LucideScale, LucideShieldCheck, LucideTrophy } from '@lucide/angular';

@Component({
  selector: 'app-market-label', standalone: true,
  imports: [LucideArrowUpDown, LucideFlag, LucideGauge, LucideGoal, LucideScale, LucideShieldCheck, LucideTrophy],
  templateUrl: './market-label.component.html', styles: [], changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarketLabelComponent {
  readonly kind = input.required<string>();
  readonly label = input.required<string>();
}
