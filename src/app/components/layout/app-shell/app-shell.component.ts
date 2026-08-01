import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutStateService } from '../layout-state.service';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { TopbarComponent } from '../topbar/topbar.component';
@Component({ selector: 'app-shell', standalone: true, imports: [RouterOutlet, BreadcrumbComponent, SidebarComponent, TopbarComponent], templateUrl: './app-shell.component.html', styles: [] })
export class AppShellComponent {
  private readonly state = inject(LayoutStateService);
  get mobileMenuOpen(): boolean { return this.state.navCollapsedMob(); }
  get desktopMenuCollapsed(): boolean { return this.state.navCollapsed(); }
  toggleMenu(): void { this.state.toggleNavCollapsedMob(); }
  toggleDesktopMenu(): void { this.state.toggleNavCollapsed(); }
  closeMenu(): void { this.state.closeNavCollapsedMob(); }
}
