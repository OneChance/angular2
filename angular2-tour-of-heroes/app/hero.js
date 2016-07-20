"use strict";
var Hero = (function () {
    function Hero(id, name) {
        this.id = id;
        this.name = name;
        this.state = 'inactive';
    }
    Hero.prototype.toggleState = function () {
        this.state = (this.state === 'active' ? 'inactive' : 'active');
    };
    return Hero;
}());
exports.Hero = Hero;
//# sourceMappingURL=hero.js.map