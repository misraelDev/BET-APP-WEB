// angular import
import { Component, output, inject, input, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';
// third party
// icon
import { IconService } from '@ant-design/icons-angular';
import { BellOutline, SettingOutline, GiftOutline, MessageOutline, PhoneOutline, CheckCircleOutline, LogoutOutline, EditOutline, UserOutline, ProfileOutline, WalletOutline, QuestionCircleOutline, LockOutline, CommentOutline, UnorderedListOutline, ArrowRightOutline, MoonOutline, SunOutline } from '@ant-design/icons-angular/icons';
import * as i0 from "@angular/core";
import * as i1 from "@ng-bootstrap/ng-bootstrap";
import * as i2 from "ngx-scrollbar";
import * as i3 from "@ant-design/icons-angular";
function NavRightComponent_ng_template_105_For_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "a", 55);
    i0.ɵɵelement(2, "i", 56);
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const task_r1 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("type", i0.ɵɵinterpolate(task_r1.icon));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(task_r1.title);
} }
function NavRightComponent_ng_template_105_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, NavRightComponent_ng_template_105_For_1_Template, 5, 3, "div", null, i0.ɵɵrepeaterTrackByIdentity);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵrepeater(ctx_r1.profile);
} }
function NavRightComponent_ng_template_110_For_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "a", 55);
    i0.ɵɵelement(2, "i", 56);
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const task_r3 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("type", i0.ɵɵinterpolate(task_r3.icon));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(task_r3.title);
} }
function NavRightComponent_ng_template_110_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, NavRightComponent_ng_template_110_For_1_Template, 5, 3, "div", null, i0.ɵɵrepeaterTrackByIdentity);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵrepeater(ctx_r1.setting);
} }
export class NavRightComponent {
    // constructor
    constructor() {
        this.iconService = inject(IconService);
        // public props
        this.styleSelectorToggle = input(/* @ts-ignore */
        ...(ngDevMode ? [undefined, { debugName: "styleSelectorToggle" }] : /* istanbul ignore next */ []));
        this.Customize = output();
        this.screenFull = true;
        this.direction = 'ltr';
        this.darkMode = signal(false, /* @ts-ignore */
        ...(ngDevMode ? [{ debugName: "darkMode" }] : /* istanbul ignore next */ []));
        this.profile = [
            {
                icon: 'edit',
                title: 'Edit Profile'
            },
            {
                icon: 'user',
                title: 'View Profile'
            },
            {
                icon: 'profile',
                title: 'Social Profile'
            },
            {
                icon: 'wallet',
                title: 'Billing'
            },
            {
                icon: 'logout',
                title: 'Logout'
            }
        ];
        this.setting = [
            {
                icon: 'question-circle',
                title: 'Support'
            },
            {
                icon: 'user',
                title: 'Account Settings'
            },
            {
                icon: 'lock',
                title: 'Privacy Center'
            },
            {
                icon: 'comment',
                title: 'Feedback'
            },
            {
                icon: 'unordered-list',
                title: 'History'
            }
        ];
        this.windowWidth = window.innerWidth;
        const storedTheme = localStorage.getItem('bet-theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        this.darkMode.set(storedTheme ? storedTheme === 'dark' : prefersDark);
        this.applyTheme();
        this.iconService.addIcon(...[
            CheckCircleOutline,
            GiftOutline,
            MessageOutline,
            SettingOutline,
            PhoneOutline,
            LogoutOutline,
            EditOutline,
            UserOutline,
            EditOutline,
            ProfileOutline,
            QuestionCircleOutline,
            LockOutline,
            CommentOutline,
            UnorderedListOutline,
            ArrowRightOutline,
            BellOutline,
            WalletOutline,
            MoonOutline,
            SunOutline
        ]);
    }
    toggleTheme() {
        this.darkMode.update((enabled) => !enabled);
        localStorage.setItem('bet-theme', this.darkMode() ? 'dark' : 'light');
        this.applyTheme();
    }
    applyTheme() {
        document.documentElement.setAttribute('data-bs-theme', this.darkMode() ? 'dark' : 'light');
    }
    static { this.ɵfac = function NavRightComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || NavRightComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NavRightComponent, selectors: [["app-nav-right"]], inputs: { styleSelectorToggle: [1, "styleSelectorToggle"] }, outputs: { Customize: "Customize" }, decls: 112, vars: 4, consts: [["nav", "ngbNav"], [1, "list-unstyled"], [1, "pc-h-item"], ["type", "button", 1, "pc-head-link", "me-0", "theme-toggle", 3, "click", "title"], ["antIcon", "", "theme", "outline", 3, "type"], ["ngbDropdown", "", 1, "pc-h-item"], ["href", "javascript:void(0)", "data-bs-toggle", "dropdown", "ngbDropdownToggle", "", 1, "pc-head-link", "dropdown-toggle", "arrow-none", "me-0", "bg-gray-200"], ["antIcon", "", "type", "bell", "theme", "outline"], [1, "badge", "bg-primary", "pc-h-badge"], ["ngbDropdownMenu", "", 1, "dropdown-notification", "dropdown-menu-end", "pc-h-dropdown"], [1, "dropdown-header", "d-flex", "align-items-center", "justify-content-between"], [1, "m-0"], ["href", "javascript:void(0)", 1, "bg-transparent"], ["antIcon", "", "theme", "outline", "type", "check-circle", 1, "text-success", "d-flex", "f-20"], [1, "dropdown-divider", "mb-0"], ["visibility", "hover", 2, "min-height", "280px"], [1, "dropdown-header", "p-0", "text-wrap", "header-notification-scroll"], [1, "list-group", "list-group-flush", "w-100"], ["href", "javascript:void(0)", 1, "list-group-item", "list-group-item-action"], [1, "d-flex"], [1, "flex-shrink-0"], [1, "user-avatar", "bg-light-success"], ["antIcon", "", "theme", "outline", "type", "gift", 1, "d-flex"], [1, "flex-grow-1", "ms-3"], [1, "float-end", "text-muted"], [1, "text-body", "mb-0"], [1, "text-muted"], [1, "user-avatar", "bg-light-primary"], ["antIcon", "", "theme", "outline", "type", "message", 1, "d-flex"], [1, "text-body", "mb-1"], [1, "user-avatar", "bg-light-danger"], ["antIcon", "", "theme", "outline", "type", "setting", 1, "d-flex"], ["antIcon", "", "theme", "outline", "type", "phone", 1, "d-flex"], [1, "dropdown-divider", "mt-0"], [1, "text-center", "py-2"], ["href", "javascript:void(0)", 1, "link-primary"], ["ngbDropdown", "", 1, "pc-h-item", "header-user-profile"], ["href", "javascript:void(0)", "ngbDropdownToggle", "", 1, "pc-head-link", "arrow-none", "me-0"], ["src", "assets/images/user/avatar-2.jpg", "alt", "user-image", 1, "user-avatar", "me-2"], [1, "f-w-600"], ["ngbDropdownMenu", "", 1, "dropdown-user-profile", "dropdown-menu-end", "pc-h-dropdown"], [1, "dropdown-header"], [1, "d-flex", "mb-1"], ["src", "assets/images/user/avatar-2.jpg", "alt", "user-image", 1, "user-avatar", "wid-35"], [1, "flex-grow-1", "ms-3", "text-start"], [1, "mb-0"], ["antIcon", "", "theme", "outline", "type", "logout", 1, "d-flex", "f-20"], ["ngbNav", "", 1, "drp-tabs", "nav-fill", "nav-tabs"], ["ngbNavItem", "1"], ["ngbNavLink", ""], ["antIcon", "", "theme", "outline", "type", "user", 1, "me-2"], ["ngbNavContent", ""], ["ngbNavItem", "2"], ["antIcon", "", "theme", "outline", "type", "setting", 1, "me-2"], [3, "ngbNavOutlet"], ["href", "javascript:void(0)", 1, "dropdown-item"], ["antIcon", "", "theme", "outline", 1, "text-muted", 3, "type"]], template: function NavRightComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "ul", 1)(1, "li", 2)(2, "button", 3);
            i0.ɵɵlistener("click", function NavRightComponent_Template_button_click_2_listener() { return ctx.toggleTheme(); });
            i0.ɵɵelement(3, "i", 4);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(4, "li", 5)(5, "a", 6);
            i0.ɵɵelement(6, "i", 7);
            i0.ɵɵelementStart(7, "span", 8);
            i0.ɵɵtext(8, "3");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "div", 9)(10, "div", 10)(11, "h5", 11);
            i0.ɵɵtext(12, "Notification");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "a", 12);
            i0.ɵɵelement(14, "i", 13);
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(15, "div", 14);
            i0.ɵɵelementStart(16, "ng-scrollbar", 15)(17, "div", 16)(18, "div", 17)(19, "a", 18)(20, "div", 19)(21, "div", 20)(22, "div", 21);
            i0.ɵɵelement(23, "i", 22);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(24, "div", 23)(25, "span", 24);
            i0.ɵɵtext(26, "3:00 AM");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "p", 25);
            i0.ɵɵtext(28, " It's ");
            i0.ɵɵelementStart(29, "b");
            i0.ɵɵtext(30, "Cristina danny's");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(31, " birthday today. ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(32, "span", 26);
            i0.ɵɵtext(33, "2 min ago");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(34, "a", 18)(35, "div", 19)(36, "div", 20)(37, "div", 27);
            i0.ɵɵelement(38, "i", 28);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(39, "div", 23)(40, "span", 24);
            i0.ɵɵtext(41, "6:00 PM");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(42, "p", 29)(43, "b");
            i0.ɵɵtext(44, "Aida Burg");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(45, " commented your post. ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(46, "span", 26);
            i0.ɵɵtext(47, "5 August");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(48, "a", 18)(49, "div", 19)(50, "div", 20)(51, "div", 30);
            i0.ɵɵelement(52, "i", 31);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(53, "div", 23)(54, "span", 24);
            i0.ɵɵtext(55, "2:45 PM");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(56, "p", 29);
            i0.ɵɵtext(57, " Your Profile is Complete \u00A0 ");
            i0.ɵɵelementStart(58, "b");
            i0.ɵɵtext(59, "60%");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(60, "span", 26);
            i0.ɵɵtext(61, "7 hours ago");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(62, "a", 18)(63, "div", 19)(64, "div", 20)(65, "div", 27);
            i0.ɵɵelement(66, "i", 32);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(67, "div", 23)(68, "span", 24);
            i0.ɵɵtext(69, "9:10 PM");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(70, "p", 29)(71, "b");
            i0.ɵɵtext(72, "Cristina Danny");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(73, " invited to join ");
            i0.ɵɵelementStart(74, "b");
            i0.ɵɵtext(75, "Meeting.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(76, "span", 26);
            i0.ɵɵtext(77, "Daily scrum meeting time");
            i0.ɵɵelementEnd()()()()()()();
            i0.ɵɵelement(78, "div", 33);
            i0.ɵɵelementStart(79, "div", 34)(80, "a", 35);
            i0.ɵɵtext(81, "View all");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(82, "li", 36)(83, "a", 37);
            i0.ɵɵelement(84, "img", 38);
            i0.ɵɵelementStart(85, "span", 39);
            i0.ɵɵtext(86, "John Doe");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(87, "div", 40)(88, "div", 41)(89, "div", 42)(90, "div", 20);
            i0.ɵɵelement(91, "img", 43);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(92, "div", 44)(93, "h6", 45);
            i0.ɵɵtext(94, "JWT User");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(95, "span");
            i0.ɵɵtext(96, "UI/UX Designer");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(97, "a", 12);
            i0.ɵɵelement(98, "i", 46);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(99, "ul", 47, 0)(101, "li", 48)(102, "a", 49);
            i0.ɵɵelement(103, "i", 50);
            i0.ɵɵtext(104, " Profile ");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(105, NavRightComponent_ng_template_105_Template, 2, 0, "ng-template", 51);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(106, "li", 52)(107, "a", 49);
            i0.ɵɵelement(108, "i", 53);
            i0.ɵɵtext(109, " Setting ");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(110, NavRightComponent_ng_template_110_Template, 2, 0, "ng-template", 51);
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(111, "div", 54);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            const nav_r4 = i0.ɵɵreference(100);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("title", ctx.darkMode() ? "Modo claro" : "Modo oscuro");
            i0.ɵɵattribute("aria-label", ctx.darkMode() ? "Activar modo claro" : "Activar modo oscuro");
            i0.ɵɵadvance();
            i0.ɵɵproperty("type", ctx.darkMode() ? "sun" : "moon");
            i0.ɵɵadvance(108);
            i0.ɵɵproperty("ngbNavOutlet", nav_r4);
        } }, dependencies: [SharedModule, i1.NgbDropdown, i1.NgbDropdownToggle, i1.NgbDropdownMenu, i1.NgbNavContent, i1.NgbNav, i1.NgbNavItem, i1.NgbNavItemRole, i1.NgbNavLink, i1.NgbNavLinkBase, i1.NgbNavOutlet, i2.NgScrollbar, i3.IconDirective, RouterModule], styles: ["//[_ngcontent-%COMP%]   This[_ngcontent-%COMP%]   file[_ngcontent-%COMP%]   is[_ngcontent-%COMP%]   intentionally[_ngcontent-%COMP%]   left[_ngcontent-%COMP%]   empty[_ngcontent-%COMP%]   to[_ngcontent-%COMP%]   allow[_ngcontent-%COMP%]   customers[_ngcontent-%COMP%]   to[_ngcontent-%COMP%]   add[_ngcontent-%COMP%]   custom[_ngcontent-%COMP%]   CSS[_ngcontent-%COMP%]   if[_ngcontent-%COMP%]   needed.\n.theme-toggle[_ngcontent-%COMP%] {\n  border: 0;\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NavRightComponent, [{
        type: Component,
        args: [{ selector: 'app-nav-right', imports: [SharedModule, RouterModule], template: "<ul class=\"list-unstyled\">\n  <li class=\"pc-h-item\">\n    <button\n      type=\"button\"\n      class=\"pc-head-link me-0 theme-toggle\"\n      (click)=\"toggleTheme()\"\n      [attr.aria-label]=\"darkMode() ? 'Activar modo claro' : 'Activar modo oscuro'\"\n      [title]=\"darkMode() ? 'Modo claro' : 'Modo oscuro'\"\n    >\n      <i antIcon [type]=\"darkMode() ? 'sun' : 'moon'\" theme=\"outline\"></i>\n    </button>\n  </li>\n  <li class=\"pc-h-item\" ngbDropdown>\n    <a href=\"javascript:void(0)\" class=\"pc-head-link dropdown-toggle arrow-none me-0 bg-gray-200\" data-bs-toggle=\"dropdown\" ngbDropdownToggle>\n      <i antIcon type=\"bell\" theme=\"outline\"></i>\n      <span class=\"badge bg-primary pc-h-badge\">3</span>\n    </a>\n    <div class=\"dropdown-notification dropdown-menu-end pc-h-dropdown\" ngbDropdownMenu>\n      <div class=\"dropdown-header d-flex align-items-center justify-content-between\">\n        <h5 class=\"m-0\">Notification</h5>\n        <a href=\"javascript:void(0)\" class=\"bg-transparent\"><i class=\"text-success d-flex f-20\" antIcon theme=\"outline\" type=\"check-circle\"></i></a>\n      </div>\n      <div class=\"dropdown-divider mb-0\"></div>\n      <ng-scrollbar style=\"min-height: 280px\" visibility=\"hover\">\n        <div class=\"dropdown-header p-0 text-wrap header-notification-scroll\">\n          <div class=\"list-group list-group-flush w-100\">\n            <a href=\"javascript:void(0)\" class=\"list-group-item list-group-item-action\">\n              <div class=\"d-flex\">\n                <div class=\"flex-shrink-0\">\n                  <div class=\"user-avatar bg-light-success\"><i class=\"d-flex\" antIcon theme=\"outline\" type=\"gift\"></i></div>\n                </div>\n                <div class=\"flex-grow-1 ms-3\">\n                  <span class=\"float-end text-muted\">3:00 AM</span>\n                  <p class=\"text-body mb-0\">\n                    It's\n                    <b>Cristina danny's</b>\n                    birthday today.\n                  </p>\n                  <span class=\"text-muted\">2 min ago</span>\n                </div>\n              </div>\n            </a>\n            <a href=\"javascript:void(0)\" class=\"list-group-item list-group-item-action\">\n              <div class=\"d-flex\">\n                <div class=\"flex-shrink-0\">\n                  <div class=\"user-avatar bg-light-primary\"><i class=\"d-flex\" antIcon theme=\"outline\" type=\"message\"></i></div>\n                </div>\n                <div class=\"flex-grow-1 ms-3\">\n                  <span class=\"float-end text-muted\">6:00 PM</span>\n                  <p class=\"text-body mb-1\">\n                    <b>Aida Burg</b>\n                    commented your post.\n                  </p>\n                  <span class=\"text-muted\">5 August</span>\n                </div>\n              </div>\n            </a>\n            <a href=\"javascript:void(0)\" class=\"list-group-item list-group-item-action\">\n              <div class=\"d-flex\">\n                <div class=\"flex-shrink-0\">\n                  <div class=\"user-avatar bg-light-danger\"><i class=\"d-flex\" antIcon theme=\"outline\" type=\"setting\"></i></div>\n                </div>\n                <div class=\"flex-grow-1 ms-3\">\n                  <span class=\"float-end text-muted\">2:45 PM</span>\n                  <p class=\"text-body mb-1\">\n                    Your Profile is Complete &nbsp;\n                    <b>60%</b>\n                  </p>\n                  <span class=\"text-muted\">7 hours ago</span>\n                </div>\n              </div>\n            </a>\n            <a href=\"javascript:void(0)\" class=\"list-group-item list-group-item-action\">\n              <div class=\"d-flex\">\n                <div class=\"flex-shrink-0\">\n                  <div class=\"user-avatar bg-light-primary\"><i class=\"d-flex\" antIcon theme=\"outline\" type=\"phone\"></i></div>\n                </div>\n                <div class=\"flex-grow-1 ms-3\">\n                  <span class=\"float-end text-muted\">9:10 PM</span>\n                  <p class=\"text-body mb-1\">\n                    <b>Cristina Danny</b>\n                    invited to join\n                    <b>Meeting.</b>\n                  </p>\n                  <span class=\"text-muted\">Daily scrum meeting time</span>\n                </div>\n              </div>\n            </a>\n          </div>\n        </div>\n      </ng-scrollbar>\n      <div class=\"dropdown-divider mt-0\"></div>\n      <div class=\"text-center py-2\">\n        <a href=\"javascript:void(0)\" class=\"link-primary\">View all</a>\n      </div>\n    </div>\n  </li>\n  <li class=\"pc-h-item header-user-profile\" ngbDropdown>\n    <a href=\"javascript:void(0)\" class=\"pc-head-link arrow-none me-0\" ngbDropdownToggle>\n      <img src=\"assets/images/user/avatar-2.jpg\" alt=\"user-image\" class=\"user-avatar me-2\" />\n      <span class=\"f-w-600\">John Doe</span>\n    </a>\n    <div class=\"dropdown-user-profile dropdown-menu-end pc-h-dropdown\" ngbDropdownMenu>\n      <div class=\"dropdown-header\">\n        <div class=\"d-flex mb-1\">\n          <div class=\"flex-shrink-0\">\n            <img src=\"assets/images/user/avatar-2.jpg\" alt=\"user-image\" class=\"user-avatar wid-35\" />\n          </div>\n          <div class=\"flex-grow-1 ms-3 text-start\">\n            <h6 class=\"mb-0\">JWT User</h6>\n            <span>UI/UX Designer</span>\n          </div>\n          <a href=\"javascript:void(0)\" class=\"bg-transparent\"><i class=\"d-flex f-20\" antIcon theme=\"outline\" type=\"logout\"></i></a>\n        </div>\n      </div>\n      <ul ngbNav #nav=\"ngbNav\" class=\"drp-tabs nav-fill nav-tabs\">\n        <li ngbNavItem=\"1\">\n          <a ngbNavLink>\n            <i antIcon theme=\"outline\" type=\"user\" class=\"me-2\"></i>\n            Profile\n          </a>\n          <ng-template ngbNavContent>\n            @for (task of profile; track task) {\n              <div>\n                <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                  <i class=\"text-muted\" antIcon theme=\"outline\" type=\"{{ task.icon }}\"></i>\n                  <span>{{ task.title }}</span>\n                </a>\n              </div>\n            }\n          </ng-template>\n        </li>\n        <li ngbNavItem=\"2\">\n          <a ngbNavLink>\n            <i class=\"me-2\" antIcon theme=\"outline\" type=\"setting\"></i>\n            Setting\n          </a>\n          <ng-template ngbNavContent>\n            @for (task of setting; track task) {\n              <div>\n                <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                  <i class=\"text-muted\" antIcon theme=\"outline\" type=\"{{ task.icon }}\"></i>\n                  <span>{{ task.title }}</span>\n                </a>\n              </div>\n            }\n          </ng-template>\n        </li>\n      </ul>\n      <div [ngbNavOutlet]=\"nav\"></div>\n    </div>\n  </li>\n</ul>\n", styles: ["// This file is intentionally left empty to allow customers to add custom CSS if needed.\n.theme-toggle {\n  border: 0;\n}\n"] }]
    }], () => [], { styleSelectorToggle: [{ type: i0.Input, args: [{ isSignal: true, alias: "styleSelectorToggle", required: false }] }], Customize: [{ type: i0.Output, args: ["Customize"] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(NavRightComponent, { className: "NavRightComponent", filePath: "src/app/theme/layouts/admin-layout/nav-bar/nav-right/nav-right.component.ts", lineNumber: 39 }); })();
//# sourceMappingURL=nav-right.component.js.map