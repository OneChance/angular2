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
var region_service_1 = require('./region.service');
var app_service_1 = require('../app.service');
var RegionComponent = (function () {
    function RegionComponent(regionService, appService, el) {
        var _this = this;
        this.regionService = regionService;
        this.appService = appService;
        this.el = el;
        this.regionService.getRegionData().then(function (netMessage) { return _this.setRegionData(netMessage); });
    }
    RegionComponent.prototype.toProfile = function () {
        this.appService.routeTo('/profile');
    };
    RegionComponent.prototype.setRegionData = function (netMessage) {
        if (netMessage.content) {
            alert(netMessage.content);
        }
    };
    RegionComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/region/region.component.html',
            pipes: [i18n_pipe_1.Translate],
            providers: [region_service_1.RegionService]
        }), 
        __metadata('design:paramtypes', [region_service_1.RegionService, app_service_1.AppService, core_1.ElementRef])
    ], RegionComponent);
    return RegionComponent;
}());
exports.RegionComponent = RegionComponent;
//# sourceMappingURL=region.component.js.map