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
var netmessage_1 = require('./entity/netmessage');
var router_1 = require('@angular/router');
var AppService = (function () {
    function AppService(http, router) {
        this.http = http;
        this.router = router;
        this.baseUrl = 'http://localhost:8080';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        this.msgReceivedSource = new Subject_1.Subject();
        this.msgReceived$ = this.msgReceivedSource.asObservable();
        var arr = document.cookie.match(new RegExp("(^| )lang=([^;]*)(;|$)"));
        if (arr != null) {
            this.lang = arr[2];
        }
        else {
            this.lang = navigator.language;
        }
    }
    AppService.prototype.receiveMsg = function (netMessage) {
        this.msgReceivedSource.next(netMessage);
    };
    AppService.prototype.getData = function (url, withCredentials) {
        var _this = this;
        return this.http.get(this.baseUrl + '/' + url, { withCredentials: withCredentials }).toPromise().then(function (response) { return _this.check(response.json()); }, function (error) { return _this.serverError(); });
    };
    AppService.prototype.postData = function (url, data) {
        var _this = this;
        return this.http.post(this.baseUrl + '/' + url, JSON.stringify(data), { headers: this.headers }).toPromise().then(function (response) { return _this.check(response.json()); }, function (error) { return _this.serverError(); });
    };
    AppService.prototype.check = function (netMessage) {
        if (netMessage.content == 'account_invalid') {
            var link = ['/login'];
            this.router.navigate(link);
            this.receiveMsg(new netmessage_1.NetMessage(netMessage.type, netMessage.content, true));
            netMessage.content = '';
        }
        return netMessage;
    };
    AppService.prototype.serverError = function () {
        this.receiveMsg(new netmessage_1.NetMessage("danger", "server_error", true));
        return Promise.reject('server-error');
    };
    AppService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], AppService);
    return AppService;
}());
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map