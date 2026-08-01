// angular import
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Project import
import { AppShellComponent } from './components/layout/app-shell/app-shell.component';

const routes: Routes = [
  {
    path: '',
    component: AppShellComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard/default',
        pathMatch: 'full'
      },
      {
        path: 'dashboard/default',
        loadComponent: () => import('./demo/dashboard/default/default.component').then((c) => c.DefaultComponent)
      },
      {
        path: 'sports/baseball',
        redirectTo: 'sports/baseball/generate',
        pathMatch: 'full'
      },
      {
        path: 'sports/baseball/generate',
        data: { baseballView: 'generate' },
        loadComponent: () => import('./features/baseball/baseball.component').then((c) => c.BaseballComponent)
      },
      {
        path: 'sports/baseball/results',
        data: { baseballView: 'results' },
        loadComponent: () => import('./features/baseball/baseball.component').then((c) => c.BaseballComponent)
      },
      {
        path: 'sports/baseball/update',
        data: { baseballView: 'update' },
        loadComponent: () => import('./features/baseball/baseball.component').then((c) => c.BaseballComponent)
      },
      {
        path: 'sports/football/generate',
        data: { footballView: 'generate' },
        loadComponent: () => import('./features/football/football.component').then((c) => c.FootballComponent)
      },
      {
        path: 'sports/football/results',
        data: { footballView: 'results' },
        loadComponent: () => import('./features/football/football.component').then((c) => c.FootballComponent)
      },
      {
        path: 'sports/football/update',
        data: { footballView: 'update' },
        loadComponent: () => import('./features/football/football.component').then((c) => c.FootballComponent)
      },
      {
        path: 'sports/tennis',
        redirectTo: 'sports/tennis/generate',
        pathMatch: 'full'
      },
      {
        path: 'sports/tennis/generate',
        data: { tennisView: 'generate' },
        loadComponent: () => import('./features/tennis/tennis.component').then((c) => c.TennisComponent)
      },
      {
        path: 'sports/tennis/results',
        data: { tennisView: 'results' },
        loadComponent: () => import('./features/tennis/tennis.component').then((c) => c.TennisComponent)
      },
      {
        path: 'sports/tennis/update',
        data: { tennisView: 'update' },
        loadComponent: () => import('./features/tennis/tennis.component').then((c) => c.TennisComponent)
      },
      {
        path: 'sports/basketball', redirectTo: 'sports/basketball/generate', pathMatch: 'full'
      },
      {
        path: 'sports/basketball/generate', data: { basketballView: 'generate' },
        loadComponent: () => import('./features/basketball/basketball.component').then((c) => c.BasketballComponent)
      },
      {
        path: 'sports/basketball/results', data: { basketballView: 'results' },
        loadComponent: () => import('./features/basketball/basketball.component').then((c) => c.BasketballComponent)
      },
      {
        path: 'sports/basketball/update', data: { basketballView: 'update' },
        loadComponent: () => import('./features/basketball/basketball.component').then((c) => c.BasketballComponent)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
