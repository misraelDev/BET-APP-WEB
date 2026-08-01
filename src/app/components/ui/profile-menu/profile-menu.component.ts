import { ChangeDetectionStrategy, Component, HostListener, signal } from '@angular/core';
import { LucideChevronDown, LucideLogOut, LucideSettings, LucideUser } from '@lucide/angular';

@Component({
  selector: 'app-profile-menu',
  standalone: true,
  imports: [LucideChevronDown, LucideLogOut, LucideSettings, LucideUser],
  templateUrl: './profile-menu.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileMenuComponent {
  readonly open = signal(false);

  toggle(event: MouseEvent): void {
    event.stopPropagation();
    this.open.update((value) => !value);
  }

  @HostListener('document:click')
  close(): void {
    this.open.set(false);
  }
}
