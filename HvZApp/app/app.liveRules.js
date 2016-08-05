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
var router_2 = require('@angular/router');
var app_dataGet_1 = require('./app.dataGet');
var rulesComponent = (function () {
    function rulesComponent(dataService, route) {
        this.dataService = dataService;
        this.route = route;
        this.dynamicRules = "";
        this.staticRules = "";
    }
    rulesComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    rulesComponent.prototype.ngOnDestroy = function () {
    };
    rulesComponent.prototype.getData = function () {
        var _this = this;
        this.dataService.getData(1, "id").then(function (egg) { return _this.dynamicRules = egg; });
        this.dataService.getData(2, "name").then(function (egg) { return _this.staticRules = egg; });
    };
    rulesComponent = __decorate([
        core_1.Component({
            selector: 'live-rules',
            templateUrl: 'app/liveRules.html',
            directives: [router_2.ROUTER_DIRECTIVES],
        }), 
        __metadata('design:paramtypes', [app_dataGet_1.DataService, router_1.ActivatedRoute])
    ], rulesComponent);
    return rulesComponent;
}());
exports.rulesComponent = rulesComponent;
//# sourceMappingURL=app.liveRules.js.map