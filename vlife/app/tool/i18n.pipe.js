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
var game_service_1 = require('../game.service');
var lang_1 = require('./lang');
var Translate = (function () {
    function Translate(gameService) {
        this.gameService = gameService;
    }
    Translate.prototype.transform = function (value) {
        if (value)
            return lang_1.lang[value][this.gameService.lang];
        else
            return '';
    };
    Translate = __decorate([
        core_1.Pipe({ name: 'translate' }), 
        __metadata('design:paramtypes', [game_service_1.GameService])
    ], Translate);
    return Translate;
}());
exports.Translate = Translate;
//# sourceMappingURL=i18n.pipe.js.map