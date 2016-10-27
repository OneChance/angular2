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
var game_service_1 = require('./game.service');
var router_1 = require('@angular/router');
var i18n_pipe_1 = require('./tool/i18n.pipe');
var ProfileComponent = (function () {
    function ProfileComponent(gameService, router) {
        var _this = this;
        this.gameService = gameService;
        this.router = router;
        this.lifeComplete = false;
        this.profileImg = "images/profile.png";
        this.gameService.getLoginAccount().then(function (account) { return _this.checkAccount(account); });
    }
    ProfileComponent.prototype.info = function () {
        alert('detail');
    };
    ProfileComponent.prototype.signOut = function () {
        alert('sign out');
    };
    ProfileComponent.prototype.checkAccount = function (account) {
        if (!account.name) {
            var link = ['/login'];
            this.router.navigate(link);
        }
        else {
            this.account = account;
            this.profileImg = "images/" + account.species.name + "/" + account.level + ".png";
        }
    };
    ProfileComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/profile.component.html',
            pipes: [i18n_pipe_1.Translate]
        }), 
        __metadata('design:paramtypes', [game_service_1.GameService, router_1.Router])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map