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
var i18n_pipe_1 = require('../tool/i18n.pipe');
var role_service_1 = require('../role/role.service');
var netmessage_1 = require('../entity/netmessage');
var app_service_1 = require('../app.service');
var ToReincarnateComponent = (function () {
    function ToReincarnateComponent(roleService, appService, el) {
        var _this = this;
        this.roleService = roleService;
        this.appService = appService;
        this.el = el;
        this.roleService.toReincarnate().then(function (account) { return _this.setAccount(account); });
    }
    ToReincarnateComponent.prototype.setAccount = function (account) {
        this.account = account;
    };
    ToReincarnateComponent.prototype.toProfile = function () {
        this.appService.routeTo('/profile');
    };
    ToReincarnateComponent.prototype.reincarnateRes = function (netMessage) {
        if (netMessage.content) {
            this.appService.receiveMsg(new netmessage_1.NetMessage(netMessage.type, netMessage.content, true));
            if (netMessage.type == netmessage_1.NetMessage.SUCCESS) {
                this.appService.routeTo('/profile');
            }
        }
    };
    ToReincarnateComponent.prototype.reincarnate = function () {
        var _this = this;
        this.roleService.reincarnate().then(function (res) { return _this.reincarnateRes(res); });
    };
    ToReincarnateComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/role/toreincarnate.component.html',
            pipes: [i18n_pipe_1.Translate],
            providers: [role_service_1.RoleService]
        }), 
        __metadata('design:paramtypes', [role_service_1.RoleService, app_service_1.AppService, core_1.ElementRef])
    ], ToReincarnateComponent);
    return ToReincarnateComponent;
}());
exports.ToReincarnateComponent = ToReincarnateComponent;
//# sourceMappingURL=toreincarnate.component.js.map