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
/// <reference path="../../typings/jquery/jquery.d.ts" />
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var i18n_pipe_1 = require('../tool/i18n.pipe');
var app_service_1 = require('../app.service');
var login_service_1 = require('./login.service');
var ProfileComponent = (function () {
    function ProfileComponent(appService, loginService, router, el) {
        this.appService = appService;
        this.loginService = loginService;
        this.router = router;
        this.el = el;
    }
    ProfileComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/login/profileDetail.component.html',
            pipes: [i18n_pipe_1.Translate],
            providers: [login_service_1.LoginService]
        }), 
        __metadata('design:paramtypes', [app_service_1.AppService, login_service_1.LoginService, router_1.Router, core_1.ElementRef])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profileDetail.component.js.map