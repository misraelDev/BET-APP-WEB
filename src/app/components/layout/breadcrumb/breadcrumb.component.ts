import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter, map, startWith } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

const TITLES: Record<string, string> = {
  '/dashboard/default': 'Resumen',
  '/sports/baseball/generate': 'Generar predicción de béisbol',
  '/sports/baseball/results': 'Obtener predicciones de béisbol',
  '/sports/baseball/update': 'Actualizar resultados de béisbol',
  '/sports/football/generate': 'Generar predicción de fútbol',
  '/sports/football/results': 'Obtener predicciones de fútbol',
  '/sports/football/update': 'Actualizar resultados de fútbol',
  '/sports/tennis/generate': 'Generar predicción de tenis',
  '/sports/tennis/results': 'Obtener predicciones de tenis',
  '/sports/tennis/update': 'Actualizar resultados de tenis'
  ,'/sports/basketball/generate': 'Generar predicción de básquetbol'
  ,'/sports/basketball/results': 'Obtener predicciones de básquetbol'
  ,'/sports/basketball/update': 'Actualizar resultados de básquetbol'
};

@Component({ selector: 'app-breadcrumb', standalone: true, imports: [RouterLink], templateUrl: './breadcrumb.component.html', styles: [], changeDetection: ChangeDetectionStrategy.OnPush })
export class BreadcrumbComponent {
  private readonly router = inject(Router);
  private readonly url = toSignal(this.router.events.pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd), map((event) => event.urlAfterRedirects), startWith(this.router.url)), { initialValue: this.router.url });
  readonly title = computed(() => TITLES[this.url()] ?? 'BET Analytics');
}
