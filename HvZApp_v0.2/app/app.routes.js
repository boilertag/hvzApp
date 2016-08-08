"use strict";
var router_1 = require('@angular/router');
var app_mainPage_1 = require('./app.mainPage');
var app_statistics_1 = require('./app.statistics');
var app_gameMap_1 = require('./app.gameMap');
var app_liveRules_1 = require('./app.liveRules');
var app_mission_1 = require('./app.mission');
var app_login_1 = require('./app.login');
var routes = [
    {
        path: 'mainPage',
        component: app_mainPage_1.mainPageComponent
    },
    {
        path: 'gameMap',
        component: app_gameMap_1.mapComponent
    },
    {
        path: 'liveRules',
        component: app_liveRules_1.rulesComponent
    },
    {
        path: 'mission',
        component: app_mission_1.missionComponent
    },
    {
        path: 'stats',
        component: app_statistics_1.statsComponent
    },
    {
        path: 'login',
        component: app_login_1.loginComponent
    },
    {
        path: '',
        redirectTo: '/mainPage',
        pathMatch: 'full'
    },
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map