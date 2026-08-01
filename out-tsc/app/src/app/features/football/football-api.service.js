import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { timeout } from 'rxjs';
import { environment } from 'src/environments/environment';
import * as i0 from "@angular/core";
export class FootballApiService {
    constructor() {
        this.http = inject(HttpClient);
        this.url = `${environment.apiUrl}/api/v1/football/predictions`;
    }
    generate(date, limit) {
        const params = new HttpParams()
            .set('date', date)
            .set('timezone', 'America/Mexico_City')
            .set('limit', limit);
        return this.http
            .get(this.url, { params })
            .pipe(timeout({ first: 60_000 }));
    }
    getResults(date) {
        const params = new HttpParams().set('date', date).set('limit', 100);
        return this.http
            .get(`${environment.apiUrl}/api/v1/football/results`, { params })
            .pipe(timeout({ first: 20_000 }));
    }
    updateResults(date) {
        return this.http
            .post(`${environment.apiUrl}/api/v1/football/results/update`, { date })
            .pipe(timeout({ first: 60_000 }));
    }
    static { this.ɵfac = function FootballApiService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || FootballApiService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FootballApiService, factory: FootballApiService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FootballApiService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
//# sourceMappingURL=football-api.service.js.map