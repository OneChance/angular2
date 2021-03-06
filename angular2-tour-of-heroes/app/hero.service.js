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
var hero_1 = require('./hero');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var HeroService = (function () {
    function HeroService(http) {
        this.http = http;
        this.heroesUrl = 'http://localhost:8080/api/account'; //app/heroes
    }
    HeroService.prototype.getHeroes = function () {
        return this.http.get(this.heroesUrl).toPromise().then(function (response) { return response.json().map(function (one) { return new hero_1.Hero(one.id, one.name); }); }).catch(this.handleError);
    };
    HeroService.prototype.add = function (hero) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        return this.http.post(this.heroesUrl, JSON.stringify(hero), { headers: headers }).toPromise().then(function (res) { return res.json(); }).catch(this.handleError);
    };
    HeroService.prototype.update = function (hero) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        var url = this.heroesUrl + "/" + hero.id;
        return this.http.put(url, JSON.stringify(hero), { headers: headers }).toPromise().then(function () { return hero; }).catch(this.handleError);
    };
    HeroService.prototype.delete = function (hero) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        var url = this.heroesUrl + "/" + hero.id;
        return this.http.delete(url, { headers: headers }).toPromise().catch(this.handleError);
    };
    HeroService.prototype.save = function (hero) {
        if (hero.id) {
            return this.update(hero);
        }
        return this.add(hero);
    };
    HeroService.prototype.handleError = function (error) {
        console.error('服务端错误', error);
        return Promise.reject(error.message || error);
    };
    HeroService.prototype.getHero = function (id) {
        return this.getHeroes().then(function (heros) { return heros.find(function (hero) { return hero.id === id; }); });
    };
    HeroService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HeroService);
    return HeroService;
}());
exports.HeroService = HeroService;
//# sourceMappingURL=hero.service.js.map