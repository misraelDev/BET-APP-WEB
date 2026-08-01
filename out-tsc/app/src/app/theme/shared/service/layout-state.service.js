import { Injectable, signal } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Central layout state for coordinating mobile sidebar open/close.
 */
export class LayoutStateService {
    constructor() {
        // true when the mobile sidebar should be open
        this.navCollapsedMob = signal(false, /* @ts-ignore */
        ...(ngDevMode ? [{ debugName: "navCollapsedMob" }] : /* istanbul ignore next */ []));
    }
    toggleNavCollapsedMob() {
        this.navCollapsedMob.update((isOpen) => !isOpen);
    }
    openNavCollapsedMob() {
        this.navCollapsedMob.set(true);
    }
    closeNavCollapsedMob() {
        this.navCollapsedMob.set(false);
    }
    static { this.ɵfac = function LayoutStateService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || LayoutStateService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: LayoutStateService, factory: LayoutStateService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LayoutStateService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
//# sourceMappingURL=layout-state.service.js.map