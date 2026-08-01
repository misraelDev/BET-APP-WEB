import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
@Component({ selector: 'app-spinner', standalone: true, templateUrl: './loading-bar.component.html', styles: [], changeDetection: ChangeDetectionStrategy.OnPush })
export class LoadingBarComponent {
  private readonly cdr = inject(ChangeDetectorRef);
  visible = true;
  constructor() {
    inject(Router).events.subscribe((event) => {
      if (event instanceof NavigationStart) this.visible = true;
      if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) this.visible = false;
      this.cdr.markForCheck();
    });
  }
}
