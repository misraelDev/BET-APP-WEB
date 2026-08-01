import { Component, output, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  LucideChartNoAxesCombined,
  LucideChevronDown,
  LucideChevronRight,
  LucideCircle,
  LucideCircleDot,
  LucideGoal,
  LucideTrophy
  ,LucideCircleDotDashed
} from '@lucide/angular';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    LucideChartNoAxesCombined,
    LucideChevronDown,
    LucideChevronRight,
    LucideCircle,
    LucideCircleDot,
    LucideGoal,
    LucideTrophy
    ,LucideCircleDotDashed
  ],
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent {
  readonly navigate = output<void>();
  readonly baseballOpen = signal(true);
  readonly footballOpen = signal(true);
  readonly tennisOpen = signal(true);
  readonly basketballOpen = signal(true);
}
