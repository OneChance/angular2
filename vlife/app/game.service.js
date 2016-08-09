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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var Subject_1 = require('rxjs/Subject');
var message_1 = require('./entity/message');
var GameService = (function () {
    function GameService(http) {
        this.http = http;
        this.accountUrl = 'http://localhost:8080';
        this.msgReceivedSource = new Subject_1.Subject();
        this.msgReceived$ = this.msgReceivedSource.asObservable();
        this.lang = navigator.language;
    }
    GameService.prototype.receiveMsg = function (msg) {
        this.msgReceivedSource.next(msg);
    };
    GameService.prototype.getLoginAccount = function () {
        var _this = this;
        return this.http.get(this.accountUrl + '/getLoginAccount', { withCredentials: true }).toPromise().then(function (response) { return response.json(); }, function (error) { return _this.serverError(); });
    };
    GameService.prototype.login = function (account) {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        return this.http.post(this.accountUrl + '/login', JSON.stringify(account), { headers: headers }).toPromise().then(function (res) { return res.json(); }, function (error) { return _this.serverError(); });
    };
    GameService.prototype.serverError = function () {
        this.receiveMsg(new message_1.Message('danger', 'Server Error!', true));
        return Promise.reject('server-error');
    };
    GameService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], GameService);
    return GameService;
}());
exports.GameService = GameService;
//# sourceMappingURL=game.service.js.map