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
var account_1 = require('./entity/account');
var game_service_1 = require('./game.service');
var router_1 = require('@angular/router');
var message_1 = require('./entity/message');
var i18n_pipe_1 = require('./tool/i18n.pipe');
var LoginComponent = (function () {
    function LoginComponent(gameService, router) {
        this.gameService = gameService;
        this.router = router;
        this.model = new account_1.Account();
        this.submiting = false;
        this.model.enterType = 'login';
    }
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submiting = true;
        this.gameService.login(this.model).then(function (account) { return _this.loginRes(account); }, function (error) { return _this.submiting = false; });
    };
    LoginComponent.prototype.ngAfterViewInit = function () {
    };
    LoginComponent.prototype.loginRes = function (account) {
        if (account) {
            if (!account.msg) {
                var link = ['/profile'];
                this.router.navigate(link);
            }
            else {
                this.submiting = false;
                this.gameService.receiveMsg(new message_1.Message("danger", account.msg, true));
            }
        }
    };
    LoginComponent.prototype.changeLang = function (lang) {
        document.cookie = "lang=" + lang;
        location.reload();
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login-form',
            templateUrl: 'app/login.component.html',
            pipes: [i18n_pipe_1.Translate]
        }), 
        __metadata('design:paramtypes', [game_service_1.GameService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map