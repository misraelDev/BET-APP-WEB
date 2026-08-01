import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { timeout } from 'rxjs';
import { environment } from 'src/environments/environment';
import * as i0 from "@angular/core";
export class BaseballApiService {
    constructor() {
        this.http = inject(HttpClient);
        this.baseUrl = `${environment.apiUrl}/api/v1/baseball`;
    }
    generate(payload) {
        return this.http
            .post(`${this.baseUrl}/predictions`, payload)
            .pipe(timeout({ first: 45_000 }));
    }
    getResults(date, league, limit = 50) {
        let params = new HttpParams().set('league', league).set('limit', limit);
        if (date) {
            params = params.set('date', date);
        }
        return this.http
            .get(`${this.baseUrl}/results`, { params })
            .pipe(timeout({ first: 20_000 }));
    }
    updateResults(payload) {
        return this.http
            .post(`${this.baseUrl}/results/update`, payload)
            .pipe(timeout({ first: 45_000 }));
    }
    static { this.ɵfac = function BaseballApiService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || BaseballApiService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: BaseballApiService, factory: BaseballApiService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseballApiService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
//# sourceMappingURL=baseball-api.service.js.map