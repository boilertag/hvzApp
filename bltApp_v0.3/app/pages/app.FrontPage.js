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
var app_dataGet_1 = require('./app.dataGet');
var router_1 = require('@angular/router');
var FPComponent = (function () {
    function FPComponent(dataService) {
        this.dataService = dataService;
        this.title = 'Tour of Heroes';
    }
    FPComponent.prototype.getData = function () {
        var _this = this;
        this.dataService.getData(1, "name").then(function (info) { return _this.info = info; });
    };
    FPComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    FPComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <router-outlet></router-outlet>\n  ",
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [app_dataGet_1.DataService]
        }), 
        __metadata('design:paramtypes', [app_dataGet_1.DataService])
    ], FPComponent);
    return FPComponent;
}());
exports.FPComponent = FPComponent;
//# sourceMappingURL=app.FrontPage.js.map