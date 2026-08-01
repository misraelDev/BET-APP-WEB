import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { LucideChevronDown } from '@lucide/angular';

export interface SelectOption {
  value: string | number;
  label: string;
}

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [LucideChevronDown],
  templateUrl: './select.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectComponent {
  readonly id = input<string>();
  readonly name = input<string>();
  readonly ariaLabel = input<string>();
  readonly value = input.required<string | number>();
  readonly options = input.required<SelectOption[]>();
  readonly compact = input(false);
  readonly disabled = input(false);
  readonly valueChange = output<string | number>();

  change(event: Event): void {
    const raw = (event.target as HTMLSelectElement).value;
    const selected = this.options().find((option) => String(option.value) === raw);
    if (selected) this.valueChange.emit(selected.value);
  }
}
