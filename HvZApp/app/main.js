"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_FrontPage_1 = require('./app.FrontPage');
var app_routes_1 = require('./app.routes');
var http_1 = require('@angular/http');
platform_browser_dynamic_1.bootstrap(app_FrontPage_1.FPComponent, [
    app_routes_1.appRouterProviders,
    http_1.HTTP_PROVIDERS
]);
//# sourceMappingURL=main.js.map