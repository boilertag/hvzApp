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
var loginComponent = (function () {
    function loginComponent(dataService, route) {
        this.dataService = dataService;
        this.route = route;
        this.userName = "";
        this.passWord = "";
    }
    loginComponent.prototype.ngOnInit = function () {
    };
    loginComponent.prototype.ngOnDestroy = function () {
    };
    loginComponent.prototype.loginPress = function () {
        this.userPass = { id: this.userName, name: this.passWord };
        this.dataService.returnData(this.userPass);
    };
    loginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            templateUrl: 'app/login.html',
            directives: [router_2.ROUTER_DIRECTIVES],
        }), 
        __metadata('design:paramtypes', [app_dataGet_1.DataService, router_1.ActivatedRoute])
    ], loginComponent);
    return loginComponent;
}());
exports.loginComponent = loginComponent;
//# sourceMappingURL=app.login.js.map