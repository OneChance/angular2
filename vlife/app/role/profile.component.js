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
var app_service_1 = require('../app.service');
var i18n_pipe_1 = require('../tool/i18n.pipe');
var login_service_1 = require('../login/login.service');
var ProfileComponent = (function () {
    function ProfileComponent(loginService, appService, el) {
        var _this = this;
        this.loginService = loginService;
        this.appService = appService;
        this.el = el;
        this.lifeComplete = false;
        this.profileImg = "images/profile.png";
        this.loginService.getLoginAccount().then(function (account) { return _this.setAccount(account); });
    }
    ProfileComponent.prototype.property = function () {
        this.appService.routeTo('/property');
    };
    ProfileComponent.prototype.signOut = function () {
        var _this = this;
        this.loginService.loginOut().then(function (netObject) { return _this.loginOut(); });
    };
    ProfileComponent.prototype.loginOut = function () {
        this.appService.routeTo('/login');
    };
    ProfileComponent.prototype.setAccount = function (account) {
        this.account = account;
        this.profileImg = "images/" + account.species.name + "/" + account.level + ".png";
        var now = new Date();
        var countTo = account.remainTime + now.valueOf();
        //start count
        jQuery(this.el.nativeElement).find('.timer').countdown(countTo, function (event) {
            var $this = jQuery(this);
            switch (event.type) {
                case "seconds":
                case "minutes":
                case "hours":
                case "days":
                case "weeks":
                case "daysLeft":
                    $this.find('span.' + event.type).html(event.value);
                    break;
                case "finished":
                    $this.hide();
                    this.lifeComplete = true;
                    break;
            }
        });
    };
    ProfileComponent.prototype.toReincarnate = function () {
        var link = ['/toreincarnate'];
        this.appService.routeTo('/toreincarnate');
    };
    ProfileComponent.prototype.navigateTo = function (url) {
        this.appService.routeTo('/' + url);
    };
    ProfileComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/role/profile.component.html',
            pipes: [i18n_pipe_1.Translate],
            providers: [login_service_1.LoginService]
        }), 
        __metadata('design:paramtypes', [login_service_1.LoginService, app_service_1.AppService, core_1.ElementRef])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map