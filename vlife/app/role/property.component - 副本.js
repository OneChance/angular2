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
var login_service_1 = require('./login.service');
var PropertyComponent = (function () {
    function PropertyComponent(loginService, router, el) {
        var _this = this;
        this.loginService = loginService;
        this.router = router;
        this.el = el;
        this.loginService.getLoginAccount().then(function (account) { return _this.checkAccount(account); });
    }
    PropertyComponent.prototype.checkAccount = function (account) {
        if (!account.name) {
            var link = ['/login'];
            this.router.navigate(link);
        }
        else {
            this.account = account;
        }
    };
    PropertyComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/login/property.component.html',
            pipes: [i18n_pipe_1.Translate],
            providers: [login_service_1.LoginService]
        }), 
        __metadata('design:paramtypes', [login_service_1.LoginService, router_1.Router, core_1.ElementRef])
    ], PropertyComponent);
    return PropertyComponent;
}());
exports.PropertyComponent = PropertyComponent;
//# sourceMappingURL=property.component - 副本.js.map