import { Injectable, signal } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class LayoutStateService {
  readonly navCollapsedMob = signal(false);
  readonly navCollapsed = signal(false);
  toggleNavCollapsedMob(): void { this.navCollapsedMob.update((open) => !open); }
  closeNavCollapsedMob(): void { this.navCollapsedMob.set(false); }
  toggleNavCollapsed(): void { this.navCollapsed.update((collapsed) => !collapsed); }
}
