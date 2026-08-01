// angular import
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Project import
import { AdminLayout } from './theme/layouts/admin-layout/admin-layout.component';
import { GuestLayoutComponent } from './theme/layouts/guest-layout/guest-layout.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
    {
        path: '',
        component: AdminLayout,
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
                path: 'typography',
                loadComponent: () => import('./demo/component/basic-component/typography/typography.component').then((c) => c.TypographyComponent)
            },
            {
                path: 'color',
                loadComponent: () => import('./demo/component/basic-component/color/color.component').then((c) => c.ColorComponent)
            },
            {
                path: 'sample-page',
                loadComponent: () => import('./demo/others/sample-page/sample-page.component').then((c) => c.SamplePageComponent)
            }
        ]
    },
    {
        path: '',
        component: GuestLayoutComponent,
        children: [
            {
                path: 'login',
                loadComponent: () => import('./demo/pages/authentication/auth-login/auth-login.component').then((c) => c.AuthLoginComponent)
            },
            {
                path: 'register',
                loadComponent: () => import('./demo/pages/authentication/auth-register/auth-register.component').then((c) => c.AuthRegisterComponent)
            }
        ]
    }
];
export class AppRoutingModule {
    static { this.ɵfac = function AppRoutingModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AppRoutingModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AppRoutingModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [RouterModule.forRoot(routes), RouterModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppRoutingModule, [{
        type: NgModule,
        args: [{
                imports: [RouterModule.forRoot(routes)],
                exports: [RouterModule]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppRoutingModule, { imports: [i1.RouterModule], exports: [RouterModule] }); })();
//# sourceMappingURL=app-routing.module.js.map