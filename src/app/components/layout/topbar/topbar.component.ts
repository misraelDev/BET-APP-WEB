import { Component, output, signal } from '@angular/core';
import { LucideMenu, LucidePanelLeftClose } from '@lucide/angular';
import { ProfileMenuComponent } from '../../ui/profile-menu/profile-menu.component';

@Component({ selector: 'app-topbar', standalone: true, imports: [LucideMenu, LucidePanelLeftClose, ProfileMenuComponent], templateUrl: './topbar.component.html', styles: [] })
export class TopbarComponent {
  readonly openMenu = output<void>();
  readonly collapseMenu = output<void>();
  readonly darkMode = signal(false);
  constructor() {
    const stored = localStorage.getItem('bet-theme');
    this.darkMode.set(stored ? stored === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches);
    this.applyTheme();
  }
  toggleTheme(): void {
    this.darkMode.update((value) => !value);
    localStorage.setItem('bet-theme', this.darkMode() ? 'dark' : 'light');
    this.applyTheme();
  }
  private applyTheme(): void { document.documentElement.classList.toggle('dark', this.darkMode()); }
}
