"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var hero_service_1 = require('./hero.service');
var heroes_component_1 = require('./heroes.component');
var dashboard_component_1 = require('./dashboard.component');
var AppComponent = (function () {
    function AppComponent() {
        this.title = '英雄之旅';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>{{title}}</h1>\n\t\t\t  <nav>\n\t\t\t  \t<a [routerLink]=\"['/dashboard']\" routerLinkActive=\"active\">Dashboard</a>\n\t\t\t  \t<a [routerLink]=\"['/heroes']\" routerLinkActive=\"active\">Heroes</a>\n\t\t\t  </nav>\n\t\t\t  <router-outlet></router-outlet>\n\t\t\t ",
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [hero_service_1.HeroService],
            precompile: [heroes_component_1.HeroesComponent, dashboard_component_1.DashboardComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map