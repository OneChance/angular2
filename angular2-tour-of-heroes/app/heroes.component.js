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
var hero_detail_component_1 = require('./hero-detail.component');
var hero_service_1 = require('./hero.service');
var router_1 = require('@angular/router');
var HeroesComponent = (function () {
    function HeroesComponent(heroService, router) {
        this.heroService = heroService;
        this.router = router;
        this.deletedNum = 0;
    }
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes().then(function (heros) { return _this.heroes = heros; });
    };
    HeroesComponent.prototype.onSelect = function (hero) {
        hero.toggleState();
        if (this.selectedHero && this.selectedHero != hero) {
            this.selectedHero.toggleState();
        }
        if (hero.state === 'active') {
            this.selectedHero = hero;
        }
        else {
            this.selectedHero = null;
        }
        this.addingHero = false;
    };
    HeroesComponent.prototype.gotoDetail = function () {
        var link = ['/detail', this.selectedHero.id];
        this.router.navigate(link);
    };
    HeroesComponent.prototype.addHero = function () {
        this.addingHero = true;
        if (this.selectedHero) {
            this.selectedHero.toggleState();
        }
        this.selectedHero = null;
    };
    HeroesComponent.prototype.close = function (savedHero) {
        this.addingHero = false;
        if (savedHero) {
            this.heroes.push(savedHero);
        }
    };
    HeroesComponent.prototype.deleteHero = function (hero, event) {
        var _this = this;
        event.stopPropagation();
        this.heroService.delete(hero).then(function (res) {
            _this.deleteOneHero(hero);
            if (_this.selectedHero === hero) {
                _this.selectedHero = null;
            }
        }).catch(function (error) { return _this.error = error; });
    };
    HeroesComponent.prototype.deleteOneHero = function (hero) {
        hero.state = 'void';
        var index = this.heroes.indexOf(hero);
        var comp = this;
        setTimeout(function () {
            for (var i = index; i < comp.heroes.length - comp.deletedNum; i++) {
                if (i < comp.heroes.length - comp.deletedNum - 1) {
                    comp.valueCopy(comp.heroes[i], comp.heroes[i + 1]);
                    if (i === index) {
                        comp.heroes[i].state = 'temp';
                    }
                }
                else {
                    comp.heroes[i].state = 'deleted';
                    comp.deletedNum++;
                }
            }
        }, 500);
    };
    HeroesComponent.prototype.valueCopy = function (hero1, hero2) {
        hero1.id = hero2.id;
        hero1.name = hero2.name;
    };
    HeroesComponent = __decorate([
        core_1.Component({
            selector: 'my-heroes',
            templateUrl: 'app/heroes.component.html',
            styleUrls: ['app/heroes.component.css'],
            directives: [hero_detail_component_1.HeroDetailComponent],
            animations: [
                core_1.trigger('heroState', [
                    core_1.state('inactive', core_1.style({
                        backgroundColor: '#eee',
                        transform: 'scale(1)'
                    })),
                    core_1.state('active', core_1.style({
                        backgroundColor: '#cfd8dc',
                        transform: 'scale(1.1)'
                    })),
                    core_1.state('deleted', core_1.style({
                        opacity: 0,
                        transform: 'scale(0)'
                    })),
                    core_1.transition('inactive=>active', core_1.animate('100ms ease-in')),
                    core_1.transition('active=>inactive', core_1.animate('100ms ease-out')),
                    core_1.transition('void=>inactive', [core_1.animate(500, core_1.keyframes([core_1.style({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
                            core_1.style({ opacity: 1, transform: 'translateX(15px)', offset: 0.3 }),
                            core_1.style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
                        ]))]),
                    core_1.transition('*=>void', [core_1.animate("0.5s", core_1.keyframes([core_1.style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
                            core_1.style({ opacity: 1, transform: 'translateX(-15px)', offset: 0.7 }),
                            core_1.style({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
                        ]))])
                ])
            ]
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.Router])
    ], HeroesComponent);
    return HeroesComponent;
}());
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=heroes.component.js.map