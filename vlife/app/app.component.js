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
var login_component_1 = require('./login.component');
var profile_component_1 = require('./profile.component');
var game_service_1 = require('./game.service');
var i18n_pipe_1 = require('./tool/i18n.pipe');
var AppComponent = (function () {
    function AppComponent(gameService) {
        var _this = this;
        this.gameService = gameService;
        gameService.msgReceived$.subscribe(function (msg) { return _this.setMsg(msg); });
    }
    AppComponent.prototype.setMsg = function (msg) {
        this.msg = msg;
        var msgRef = this.msg;
        if (msg.autoClose) {
            setTimeout(function () {
                msgRef.content = '';
            }, 2000);
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            templateUrl: 'app/app.component.html',
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [game_service_1.GameService],
            precompile: [login_component_1.LoginComponent, profile_component_1.ProfileComponent],
            animations: [
                core_1.trigger('msgState', [
                    core_1.transition('void=>*', [core_1.animate(500, core_1.keyframes([core_1.style({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
                            core_1.style({ opacity: 1, transform: 'translateX(15px)', offset: 0.3 }),
                            core_1.style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
                        ]))]),
                    core_1.transition('*=>void', [core_1.animate("0.5s", core_1.keyframes([core_1.style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
                            core_1.style({ opacity: 1, transform: 'translateX(-15px)', offset: 0.7 }),
                            core_1.style({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
                        ]))])
                ])
            ],
            pipes: [i18n_pipe_1.Translate]
        }), 
        __metadata('design:paramtypes', [game_service_1.GameService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map