import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { LucideChevronLeft, LucideChevronRight } from '@lucide/angular';
import { SelectComponent } from '../select/select.component';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [LucideChevronLeft, LucideChevronRight, SelectComponent],
  templateUrl: './pagination.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationComponent {
  readonly page = input.required<number>();
  readonly pageSize = input.required<number>();
  readonly total = input.required<number>();
  readonly totalPages = input.required<number>();
  readonly pageSizeOptions = input<number[]>([10, 20, 50]);
  readonly showPageSize = input(true);
  readonly showNavigation = input(true);
  readonly pageChange = output<number>();
  readonly pageSizeChange = output<number>();
  readonly selectOptions = computed(() => this.pageSizeOptions().map((option) => ({ value: option, label: String(option) })));

  get firstItem(): number {
    return this.total() ? (this.page() - 1) * this.pageSize() + 1 : 0;
  }

  get lastItem(): number {
    return Math.min(this.page() * this.pageSize(), this.total());
  }

}
