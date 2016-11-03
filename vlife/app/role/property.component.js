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
var account_1 = require('../entity/account');
var netmessage_1 = require('../entity/netmessage');
var i18n_pipe_1 = require('../tool/i18n.pipe');
var login_service_1 = require('../login/login.service');
var role_service_1 = require('./role.service');
var app_service_1 = require('../app.service');
var property_operator_component_1 = require('./property-operator.component');
var PropertyComponent = (function () {
    function PropertyComponent(roleService, appService, loginService, router, el) {
        var _this = this;
        this.roleService = roleService;
        this.appService = appService;
        this.loginService = loginService;
        this.router = router;
        this.el = el;
        this.loginService.getLoginAccount().then(function (account) { return _this.setAccount(account); });
    }
    PropertyComponent.prototype.setAccount = function (account) {
        this.account = account;
    };
    PropertyComponent.prototype.changeProperty = function () {
        var _this = this;
        var propAccount = new account_1.Account();
        propAccount.addDef = this.account.addDef;
        propAccount.addDex = this.account.addDex;
        propAccount.addHp = this.account.addHp;
        propAccount.addInt = this.account.addInt;
        propAccount.addPow = this.account.addPow;
        this.roleService.changeProperty(propAccount).then(function (res) { return _this.changeRes(res); });
    };
    PropertyComponent.prototype.changeRes = function (netMessage) {
        if (netMessage.content) {
            this.appService.receiveMsg(new netmessage_1.NetMessage(netMessage.type, netMessage.content, true));
        }
    };
    PropertyComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/role/property.component.html',
            pipes: [i18n_pipe_1.Translate],
            providers: [login_service_1.LoginService, role_service_1.RoleService],
            directives: [property_operator_component_1.PropertyOperatorComponent]
        }), 
        __metadata('design:paramtypes', [role_service_1.RoleService, app_service_1.AppService, login_service_1.LoginService, router_1.Router, core_1.ElementRef])
    ], PropertyComponent);
    return PropertyComponent;
}());
exports.PropertyComponent = PropertyComponent;
//# sourceMappingURL=property.component.js.map