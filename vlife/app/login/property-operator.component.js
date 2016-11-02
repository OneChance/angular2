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
var account_1 = require('../entity/account');
var PropertyOperatorComponent = (function () {
    function PropertyOperatorComponent() {
    }
    Object.defineProperty(PropertyOperatorComponent.prototype, "operateObj", {
        set: function (operateObj) {
            this._operateObj = operateObj || this._operateObj;
        },
        enumerable: true,
        configurable: true
    });
    PropertyOperatorComponent.prototype.add = function (num) {
        var ableNum = 0;
        switch (this._operateObj) {
            case "power":
                ableNum = this.getAbleNum(num, this.account.addPow);
                this.account.addPow += ableNum;
                break;
            case "def":
                ableNum = this.getAbleNum(num, this.account.addDef);
                this.account.addDef += ableNum;
                break;
            case "dex":
                ableNum = this.getAbleNum(num, this.account.addDex);
                this.account.addDex += ableNum;
                break;
            case "inte":
                ableNum = this.getAbleNum(num, this.account.addInt);
                this.account.addInt += ableNum;
                break;
            case "hp":
                ableNum = this.getAbleNum(num, this.account.addHp);
                this.account.addHp += ableNum;
                break;
            default:
                break;
        }
        this.account.soul -= ableNum;
    };
    PropertyOperatorComponent.prototype.getAbleNum = function (addValue, propValue) {
        return Math.max(Math.min(this.account.soul, addValue), 0 - propValue);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', account_1.Account)
    ], PropertyOperatorComponent.prototype, "account", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], PropertyOperatorComponent.prototype, "operateObj", null);
    PropertyOperatorComponent = __decorate([
        core_1.Component({
            selector: 'propoperator',
            templateUrl: 'app/login/property-operator.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], PropertyOperatorComponent);
    return PropertyOperatorComponent;
}());
exports.PropertyOperatorComponent = PropertyOperatorComponent;
//# sourceMappingURL=property-operator.component.js.map