"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
var app_routes_1 = require('./app.routes');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var custom_browserxhr_1 = require('./tool/custom.browserxhr');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [app_routes_1.appRouterProviders, http_1.HTTP_PROVIDERS, forms_1.disableDeprecatedForms(), forms_1.provideForms(), { provide: http_1.BrowserXhr, useClass: custom_browserxhr_1.CustomBrowserXhr }]).catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map